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

import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadDownloadSecurity;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadDownloadPathParams;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadDownloadRequest;
import org.openapis.openapi.models.operations.GetBenefitsDocumentUploadDownloadResponse;
import org.openapis.openapi.models.shared.SchemeApikey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBenefitsDocumentUploadDownloadRequest req = new GetBenefitsDocumentUploadDownloadRequest() {{
                security = new GetBenefitsDocumentUploadDownloadSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GetBenefitsDocumentUploadDownloadPathParams() {{
                    id = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                }};
            }};            

            GetBenefitsDocumentUploadDownloadResponse res = sdk.vbaDocuments.getBenefitsDocumentUploadDownload(req);

            if (res.getBenefitsDocumentUploadDownload200ApplicationZipBinaryString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### vbaDocuments

* `getBenefitsDocumentUploadDownload` - Download zip of "what the server sees"
* `getBenefitsDocumentUploadStatus` - Get status for a previous benefits document upload
* `getBenefitsDocumentUploadStatusReport` - Get a bulk status report for a list of previous uploads
* `postBenefitsDocumentUpload` - Get a location for subsequent document upload PUT request
* `postBenefitsDocumentUploadValidateDocument` - Validate an individual document against system file requirements
* `putBenefitsDocumentUpload` - Accepts document upload.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
