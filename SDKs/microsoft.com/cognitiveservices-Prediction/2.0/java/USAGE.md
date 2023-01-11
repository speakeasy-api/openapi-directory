<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            PredictImageRequest req = new PredictImageRequest() {{
                pathParams = new PredictImagePathParams() {{
                    projectId = "nobis";
                }};
                queryParams = new PredictImageQueryParams() {{
                    application = "quo";
                    iterationId = "enim";
                }};
                headers = new PredictImageHeaders() {{
                    predictionKey = "et";
                }};
                request = new PredictImageRequestBody() {{
                    imageData = new PredictImageRequestBodyImageData() {{
                        content = "iusto".getBytes();
                        imageData = "sed";
                    }};
                }};
            }};

            PredictImageResponse res = sdk.imagePredictionApi.predictImage(req);

            if (res.imagePrediction.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->