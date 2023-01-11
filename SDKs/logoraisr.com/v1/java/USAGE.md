<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    token = new SchemeToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            PreviewsReadRequest req = new PreviewsReadRequest() {{
                pathParams = new PreviewsReadPathParams() {{
                    fileId = "eos";
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