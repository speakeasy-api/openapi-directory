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
                    serviceSid = "nostrum";
                }};
                request = new CreateDocumentCreateDocumentRequest() {{
                    data = "quod";
                    ttl = 4543470065267051573;
                    uniqueName = "eius";
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