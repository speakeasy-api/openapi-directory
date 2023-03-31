<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DistrictsInARegionPathParams;
import org.openapis.openapi.models.operations.DistrictsInARegionRequest;
import org.openapis.openapi.models.operations.DistrictsInARegionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistrictsInARegionRequest req = new DistrictsInARegionRequest() {{
                pathParams = new DistrictsInARegionPathParams() {{
                    country = "Malta";
                    region = "provident";
                }};
            }};            

            DistrictsInARegionResponse res = sdk.districtsInRegion.districtsInARegion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->