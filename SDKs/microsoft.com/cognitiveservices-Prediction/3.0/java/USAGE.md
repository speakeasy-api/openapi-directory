<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassifyImageRequest;
import org.openapis.openapi.models.operations.ClassifyImageRequestBody;
import org.openapis.openapi.models.operations.ClassifyImageRequestBodyImageData;
import org.openapis.openapi.models.operations.ClassifyImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClassifyImageRequest req = new ClassifyImageRequest(                new ClassifyImageRequestBody(                new ClassifyImageRequestBodyImageData("provident".getBytes(), "distinctio"););, "d9d8d69a-674e-40f4-a7cc-8796ed151a05", "repellendus") {{
                application = "sapiente";
            }};            

            ClassifyImageResponse res = sdk.imagePredictionApi.classifyImage(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->