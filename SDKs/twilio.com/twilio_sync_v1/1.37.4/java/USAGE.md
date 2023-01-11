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

            CreateDocumentRequest req = new CreateDocumentRequest() {{
                security = new CreateDocumentSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateDocumentPathParams() {{
                    serviceSid = "sit";
                }};
                request = new CreateDocumentCreateDocumentRequest() {{
                    data = "voluptas";
                    ttl = 6050128673802995827;
                    uniqueName = "expedita";
                }};
            }};

            CreateDocumentResponse res = sdk.createDocument(req);

            if (res.syncV1ServiceDocument.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->