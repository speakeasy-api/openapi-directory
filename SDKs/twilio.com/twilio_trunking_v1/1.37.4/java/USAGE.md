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

            CreateCredentialListRequest req = new CreateCredentialListRequest() {{
                security = new CreateCredentialListSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateCredentialListPathParams() {{
                    trunkSid = "sit";
                }};
                request = new CreateCredentialListCreateCredentialListRequest() {{
                    credentialListSid = "voluptas";
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