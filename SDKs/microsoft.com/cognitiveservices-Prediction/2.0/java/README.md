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

            if (res.imagePrediction.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


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
