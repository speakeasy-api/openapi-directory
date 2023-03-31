<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PreviewsReadPathParams;
import org.openapis.openapi.models.operations.PreviewsReadRequest;
import org.openapis.openapi.models.operations.PreviewsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    token = new SchemeToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            PreviewsReadRequest req = new PreviewsReadRequest() {{
                pathParams = new PreviewsReadPathParams() {{
                    fileId = "corrupti";
                }};
            }};            

            PreviewsReadResponse res = sdk.previews.previewsRead(req);

            if (res.previewResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->