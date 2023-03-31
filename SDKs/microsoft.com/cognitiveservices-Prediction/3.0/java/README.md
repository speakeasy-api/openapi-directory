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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### imagePredictionApi

* `classifyImage` - Classify an image and saves the result.
* `classifyImageUrlWithNoStoreForm` - Classify an image url without saving the result.
* `classifyImageUrlWithNoStoreJson` - Classify an image url without saving the result.
* `classifyImageUrlWithNoStoreRaw` - Classify an image url without saving the result.
* `classifyImageUrlForm` - Classify an image url and saves the result.
* `classifyImageUrlJson` - Classify an image url and saves the result.
* `classifyImageUrlRaw` - Classify an image url and saves the result.
* `classifyImageWithNoStore` - Classify an image without saving the result.
* `detectImage` - Detect objects in an image and saves the result.
* `detectImageUrlWithNoStoreForm` - Detect objects in an image url without saving the result.
* `detectImageUrlWithNoStoreJson` - Detect objects in an image url without saving the result.
* `detectImageUrlWithNoStoreRaw` - Detect objects in an image url without saving the result.
* `detectImageUrlForm` - Detect objects in an image url and saves the result.
* `detectImageUrlJson` - Detect objects in an image url and saves the result.
* `detectImageUrlRaw` - Detect objects in an image url and saves the result.
* `detectImageWithNoStore` - Detect objects in an image without saving the result.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
