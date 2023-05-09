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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [imagePredictionApi](docs/imagepredictionapi/README.md)

* [predictImage](docs/imagepredictionapi/README.md#predictimage) - Predict an image and saves the result
* [predictImageUrlWithNoStoreForm](docs/imagepredictionapi/README.md#predictimageurlwithnostoreform) - Predict an image url without saving the result
* [predictImageUrlWithNoStoreJson](docs/imagepredictionapi/README.md#predictimageurlwithnostorejson) - Predict an image url without saving the result
* [predictImageUrlWithNoStoreRaw](docs/imagepredictionapi/README.md#predictimageurlwithnostoreraw) - Predict an image url without saving the result
* [predictImageUrlForm](docs/imagepredictionapi/README.md#predictimageurlform) - Predict an image url and saves the result
* [predictImageUrlJson](docs/imagepredictionapi/README.md#predictimageurljson) - Predict an image url and saves the result
* [predictImageUrlRaw](docs/imagepredictionapi/README.md#predictimageurlraw) - Predict an image url and saves the result
* [predictImageWithNoStore](docs/imagepredictionapi/README.md#predictimagewithnostore) - Predict an image without saving the result
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
