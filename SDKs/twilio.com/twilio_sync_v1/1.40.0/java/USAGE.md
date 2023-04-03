<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateDocumentSecurity;
import org.openapis.openapi.models.operations.CreateDocumentCreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDocumentRequest req = new CreateDocumentRequest() {{
                requestBody = new CreateDocumentCreateDocumentRequest() {{
                    data = "corrupti";
                    ttl = 592845;
                    uniqueName = "distinctio";
                }};
                serviceSid = "quibusdam";
            }}            

            CreateDocumentResponse res = sdk.createDocument(req, new CreateDocumentSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceDocument.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->