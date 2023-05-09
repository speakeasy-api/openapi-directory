<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreviewsReadRequest;
import org.openapis.openapi.models.operations.PreviewsReadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            PreviewsReadRequest req = new PreviewsReadRequest("provident");            

            PreviewsReadResponse res = sdk.previews.previewsRead(req);

            if (res.previewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->