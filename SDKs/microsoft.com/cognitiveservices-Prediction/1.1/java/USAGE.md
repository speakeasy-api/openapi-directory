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
                    projectId = "nostrum";
                }};
                queryParams = new PredictImageQueryParams() {{
                    application = "fugiat";
                    iterationId = "expedita";
                }};
                headers = new PredictImageHeaders() {{
                    predictionKey = "impedit";
                }};
                request = new PredictImageRequestBody() {{
                    imageData = new PredictImageRequestBodyImageData() {{
                        content = "fugit".getBytes();
                        imageData = "nostrum";
                    }};
                }};
            }};

            PredictImageResponse res = sdk.imagePredictionApi.predictImage(req);

            if (res.imagePredictionResultModel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->