<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenderSyncRequestBody1;
import org.openapis.openapi.models.operations.RenderSyncRequestBody1FormatEnum;
import org.openapis.openapi.models.operations.RenderSyncRequestBody1WaitUntilEnum;
import org.openapis.openapi.models.operations.RenderSyncRequestBody2;
import org.openapis.openapi.models.operations.RenderSyncRequestBody2FormatEnum;
import org.openapis.openapi.models.operations.RenderSyncRequestBody2WaitUntilEnum;
import org.openapis.openapi.models.operations.RenderSyncResponse;
import org.openapis.openapi.models.operations.RenderSyncSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new RenderSyncRequestBody2("magnam") {{
                blockAds = false;
                clickAccept = false;
                delay = "provident";
                format = RenderSyncRequestBody2FormatEnum.WEBP;
                fullPage = false;
                gpu = false;
                height = 844266L;
                hideCookieBanners = false;
                html = "unde";
                metadata = false;
                retina = false;
                selector = "nulla";
                thumbHeight = 544883L;
                thumbWidth = 847252L;
                url = "vel";
                waitFor = "error";
                waitToLeave = "deserunt";
                waitUntil = RenderSyncRequestBody2WaitUntilEnum.MOSTREQUESTSFINISHED;
                width = 437587L;
            }}            

            RenderSyncResponse res = sdk.renderSync(req, new RenderSyncSecurity("debitis") {{
                secretKey = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.renderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->