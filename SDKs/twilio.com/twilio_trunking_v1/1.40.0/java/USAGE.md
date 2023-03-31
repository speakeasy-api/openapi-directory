<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCredentialListSecurity;
import org.openapis.openapi.models.operations.CreateCredentialListPathParams;
import org.openapis.openapi.models.operations.CreateCredentialListCreateCredentialListRequest;
import org.openapis.openapi.models.operations.CreateCredentialListRequest;
import org.openapis.openapi.models.operations.CreateCredentialListResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialListRequest req = new CreateCredentialListRequest() {{
                security = new CreateCredentialListSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateCredentialListPathParams() {{
                    trunkSid = "corrupti";
                }};
                request = new CreateCredentialListCreateCredentialListRequest() {{
                    credentialListSid = "provident";
                }};
            }};            

            CreateCredentialListResponse res = sdk.createCredentialList(req);

            if (res.trunkingV1TrunkCredentialList.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->