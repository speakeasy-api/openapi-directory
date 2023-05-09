<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDocumentCreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentResponse;
import org.openapis.openapi.models.operations.CreateDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDocumentRequest req = new CreateDocumentRequest("corrupti") {{
                requestBody = new CreateDocumentCreateDocumentRequest() {{
                    data = "provident";
                    ttl = 715190L;
                    uniqueName = "quibusdam";
                }};;
            }};            

            CreateDocumentResponse res = sdk.createDocument(req, new CreateDocumentSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->