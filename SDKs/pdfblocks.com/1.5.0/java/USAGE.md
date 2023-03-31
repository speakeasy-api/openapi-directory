<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBodyFile;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBodyImage;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBody;
import org.openapis.openapi.models.operations.AddImageWatermarkV1Request;
import org.openapis.openapi.models.operations.AddImageWatermarkV1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddImageWatermarkV1Request req = new AddImageWatermarkV1Request() {{
                request = new AddImageWatermarkV1RequestBody() {{
                    file = new AddImageWatermarkV1RequestBodyFile() {{
                        content = "corrupti".getBytes();
                        file = "provident";
                    }};
                    image = new AddImageWatermarkV1RequestBodyImage() {{
                        content = "distinctio".getBytes();
                        image = "quibusdam";
                    }};
                    margin = 1;
                    transparency = 50;
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