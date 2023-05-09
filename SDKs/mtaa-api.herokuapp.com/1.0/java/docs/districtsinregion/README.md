# districtsInRegion

### Available Operations

* [districtsInARegion](#districtsinaregion) - Returns all districts in region

## districtsInARegion

Returns a post code and all districts in a specified region

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistrictsInARegionRequest;
import org.openapis.openapi.models.operations.DistrictsInARegionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistrictsInARegionRequest req = new DistrictsInARegionRequest("distinctio", "quibusdam");            

            DistrictsInARegionResponse res = sdk.districtsInRegion.districtsInARegion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
