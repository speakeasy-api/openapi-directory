# groundhogs

### Available Operations

* [groundhog](#groundhog) - Get a groundhog by slug
* [groundhogs](#groundhogs) - Get all groundhogs

## groundhog

Returns a prognosticating animal and its known predictions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroundhogRequest;
import org.openapis.openapi.models.operations.GroundhogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroundhogRequest req = new GroundhogRequest("provident");            

            GroundhogResponse res = sdk.groundhogs.groundhog(req);

            if (res.groundhog200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groundhogs

Returns all prognosticating animals with their known predictions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroundhogsIsGroundhogEnum;
import org.openapis.openapi.models.operations.GroundhogsRequest;
import org.openapis.openapi.models.operations.GroundhogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroundhogsRequest req = new GroundhogsRequest() {{
                country = "Canada or USA";
                isGroundhog = GroundhogsIsGroundhogEnum.TRUE;
            }};            

            GroundhogsResponse res = sdk.groundhogs.groundhogs(req);

            if (res.groundhogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
