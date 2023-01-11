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

            GetBenefitsDocumentUploadDownloadRequest req = new GetBenefitsDocumentUploadDownloadRequest() {{
                security = new GetBenefitsDocumentUploadDownloadSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GetBenefitsDocumentUploadDownloadPathParams() {{
                    id = "in";
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