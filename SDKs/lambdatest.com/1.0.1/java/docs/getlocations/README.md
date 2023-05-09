# getLocations

### Available Operations

* [locations](#locations) - Fetch Locations

## locations

Fetch list of available Geolocations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocationsResponse;
import org.openapis.openapi.models.operations.LocationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocationsResponse res = sdk.getLocations.locations(new LocationsSecurity("corrupti", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.locations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
