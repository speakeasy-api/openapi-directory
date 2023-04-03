<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

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
                predictionKey = "corrupti";
                requestBody = new PredictImageRequestBody() {{
                    imageData = new PredictImageRequestBodyImageData() {{
                        content = "provident".getBytes();
                        imageData = "distinctio";
                    }};
                }};
                application = "quibusdam";
                iterationId = "9d8d69a6-74e0-4f46-bcc8-796ed151a05d";
                projectId = "fc2ddf7c-c78c-4a1b-a928-fc816742cb73";
            }}            

            PredictImageResponse res = sdk.imagePredictionApi.predictImage(req);

            if (res.imagePrediction.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->