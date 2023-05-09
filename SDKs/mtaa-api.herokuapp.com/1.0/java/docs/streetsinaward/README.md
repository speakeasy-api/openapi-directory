# streetsInAWard

### Available Operations

* [streetsInAWard](#streetsinaward) - Returns all streets in a ward

## streetsInAWard

Returns all streets in a specified ward and ward postcode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StreetsInAWardRequest;
import org.openapis.openapi.models.operations.StreetsInAWardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StreetsInAWardRequest req = new StreetsInAWardRequest("unde", "nulla", "corrupti", "illum");            

            StreetsInAWardResponse res = sdk.streetsInAWard.streetsInAWard(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
