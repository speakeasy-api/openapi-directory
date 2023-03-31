<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PredictImagePathParams;
import org.openapis.openapi.models.operations.PredictImageQueryParams;
import org.openapis.openapi.models.operations.PredictImageHeaders;
import org.openapis.openapi.models.operations.PredictImageRequestBodyImageData;
import org.openapis.openapi.models.operations.PredictImageRequestBody;
import org.openapis.openapi.models.operations.PredictImageRequest;
import org.openapis.openapi.models.operations.PredictImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictImageRequest req = new PredictImageRequest() {{
                pathParams = new PredictImagePathParams() {{
                    projectId = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                }};
                queryParams = new PredictImageQueryParams() {{
                    application = "deserunt";
                    iterationId = "05dfc2dd-f7cc-478c-a1ba-928fc816742c";
                }};
                headers = new PredictImageHeaders() {{
                    predictionKey = "cum";
                }};
                request = new PredictImageRequestBody() {{
                    imageData = new PredictImageRequestBodyImageData() {{
                        content = "esse".getBytes();
                        imageData = "ipsum";
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