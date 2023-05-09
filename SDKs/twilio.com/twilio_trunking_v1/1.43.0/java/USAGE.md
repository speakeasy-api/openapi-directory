<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCredentialListCreateCredentialListRequest;
import org.openapis.openapi.models.operations.CreateCredentialListRequest;
import org.openapis.openapi.models.operations.CreateCredentialListResponse;
import org.openapis.openapi.models.operations.CreateCredentialListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialListRequest req = new CreateCredentialListRequest("corrupti") {{
                requestBody = new CreateCredentialListCreateCredentialListRequest("provident");;
            }};            

            CreateCredentialListResponse res = sdk.createCredentialList(req, new CreateCredentialListSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkCredentialList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->