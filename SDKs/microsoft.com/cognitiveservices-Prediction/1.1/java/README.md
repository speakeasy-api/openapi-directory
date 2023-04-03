# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

            if (res.imagePredictionResultModel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### imagePredictionApi

* `predictImage` - Predict an image and saves the result
* `predictImageUrlWithNoStoreForm` - Predict an image url without saving the result
* `predictImageUrlWithNoStoreJson` - Predict an image url without saving the result
* `predictImageUrlWithNoStoreRaw` - Predict an image url without saving the result
* `predictImageUrlForm` - Predict an image url and saves the result
* `predictImageUrlJson` - Predict an image url and saves the result
* `predictImageUrlRaw` - Predict an image url and saves the result
* `predictImageWithNoStore` - Predict an image without saving the result
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
