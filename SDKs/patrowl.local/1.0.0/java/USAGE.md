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

            CleanScanPageRequest req = new CleanScanPageRequest() {{
                pathParams = new CleanScanPagePathParams() {{
                    scanId = 2631280116938319904;
                }};
            }};

            CleanScanPageResponse res = sdk.patrowlEngine.cleanScanPage(req);

            if (res.apiResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->