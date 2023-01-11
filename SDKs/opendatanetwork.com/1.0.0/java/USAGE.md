<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateAMapRequest req = new CreateAMapRequest() {{
                queryParams = new CreateAMapQueryParams() {{
                    appToken = "eum";
                    constraint = "exercitationem";
                    entityId = "corrupti";
                    variable = "dolorem";
                }};
                headers = new CreateAMapHeaders() {{
                    xAppToken = "ea";
                }};
            }};

            CreateAMapResponse res = sdk.createAMap(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->