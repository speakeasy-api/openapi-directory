# tanzaniaRegions

### Available Operations

* [tanzaniaRegions](#tanzaniaregions) - Returns all regions present in Tanzania

## tanzaniaRegions

Fetches all regions present in Tanzania and then return a response as json

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TanzaniaRegionsRequest;
import org.openapis.openapi.models.operations.TanzaniaRegionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TanzaniaRegionsRequest req = new TanzaniaRegionsRequest("vel");            

            TanzaniaRegionsResponse res = sdk.tanzaniaRegions.tanzaniaRegions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
