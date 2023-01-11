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
                    apimKey = new SchemeApimKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            ClassifyImageRequest req = new ClassifyImageRequest() {{
                pathParams = new ClassifyImagePathParams() {{
                    projectId = "excepturi";
                    publishedName = "facilis";
                }};
                queryParams = new ClassifyImageQueryParams() {{
                    application = "aspernatur";
                }};
                request = new ClassifyImageRequestBody() {{
                    imageData = new ClassifyImageRequestBodyImageData() {{
                        content = "nemo".getBytes();
                        imageData = "enim";
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