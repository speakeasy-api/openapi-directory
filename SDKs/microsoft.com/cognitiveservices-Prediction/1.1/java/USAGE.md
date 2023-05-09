<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictImageRequest;
import org.openapis.openapi.models.operations.PredictImageRequestBody;
import org.openapis.openapi.models.operations.PredictImageRequestBodyImageData;
import org.openapis.openapi.models.operations.PredictImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictImageRequest req = new PredictImageRequest("corrupti",                 new PredictImageRequestBody(                new PredictImageRequestBodyImageData("provident".getBytes(), "distinctio"););, "d9d8d69a-674e-40f4-a7cc-8796ed151a05") {{
                application = "repellendus";
                iterationId = "fc2ddf7c-c78c-4a1b-a928-fc816742cb73";
            }};            

            PredictImageResponse res = sdk.imagePredictionApi.predictImage(req);

            if (res.imagePredictionResultModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->