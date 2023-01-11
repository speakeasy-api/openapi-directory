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
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AddImageWatermarkV1Request req = new AddImageWatermarkV1Request() {{
                request = new AddImageWatermarkV1RequestBody() {{
                    file = new AddImageWatermarkV1RequestBodyFile() {{
                        content = "vero".getBytes();
                        file = "error";
                    }};
                    image = new AddImageWatermarkV1RequestBodyImage() {{
                        content = "qui".getBytes();
                        image = "quaerat";
                    }};
                    margin = 87.099998;
                    transparency = 1718823363649989956;
                }};
            }};

            AddImageWatermarkV1Response res = sdk.addImageWatermarkV1(req);

            if (res.addImageWatermarkV1200ApplicationPdfBinaryString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->