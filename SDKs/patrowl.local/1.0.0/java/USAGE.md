<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CleanScanPageRequest;
import org.openapis.openapi.models.operations.CleanScanPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CleanScanPageRequest req = new CleanScanPageRequest(548814L);            

            CleanScanPageResponse res = sdk.patrowlEngine.cleanScanPage(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->