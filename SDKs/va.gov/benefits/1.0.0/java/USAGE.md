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