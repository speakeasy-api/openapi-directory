<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateDocumentSecurity;
import org.openapis.openapi.models.operations.CreateDocumentPathParams;
import org.openapis.openapi.models.operations.CreateDocumentCreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDocumentRequest req = new CreateDocumentRequest() {{
                security = new CreateDocumentSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateDocumentPathParams() {{
                    serviceSid = "corrupti";
                }};
                request = new CreateDocumentCreateDocumentRequest() {{
                    data = "provident";
                    ttl = 715190;
                    uniqueName = "quibusdam";
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