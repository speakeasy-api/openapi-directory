<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBody;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBodyFile;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBodyImage;
import org.openapis.openapi.models.operations.AddImageWatermarkV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddImageWatermarkV1RequestBody req = new AddImageWatermarkV1RequestBody(                new AddImageWatermarkV1RequestBodyFile("provident".getBytes(), "distinctio");,                 new AddImageWatermarkV1RequestBodyImage("quibusdam".getBytes(), "unde");) {{
                margin = 1;
                transparency = 50;
            }};            

            AddImageWatermarkV1Response res = sdk.addImageWatermarkV1(req);

            if (res.addImageWatermarkV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->