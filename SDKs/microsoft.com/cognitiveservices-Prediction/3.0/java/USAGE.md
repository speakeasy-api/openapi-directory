<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ClassifyImagePathParams;
import org.openapis.openapi.models.operations.ClassifyImageQueryParams;
import org.openapis.openapi.models.operations.ClassifyImageRequestBodyImageData;
import org.openapis.openapi.models.operations.ClassifyImageRequestBody;
import org.openapis.openapi.models.operations.ClassifyImageRequest;
import org.openapis.openapi.models.operations.ClassifyImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apimKey = new SchemeApimKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            ClassifyImageRequest req = new ClassifyImageRequest() {{
                pathParams = new ClassifyImagePathParams() {{
                    projectId = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                    publishedName = "deserunt";
                }};
                queryParams = new ClassifyImageQueryParams() {{
                    application = "perferendis";
                }};
                request = new ClassifyImageRequestBody() {{
                    imageData = new ClassifyImageRequestBodyImageData() {{
                        content = "ipsam".getBytes();
                        imageData = "repellendus";
                    }};
                }};
            }};            

            ClassifyImageResponse res = sdk.imagePredictionApi.classifyImage(req);

            if (res.imagePrediction.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->