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

            CreateAccountCredentialRequest req = new CreateAccountCredentialRequest() {{
                security = new CreateAccountCredentialSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                request = new CredentialOptions() {{
                    acl = new java.util.HashMap<String, Object>() {{
                        put("commodi", "error");
                        put("reprehenderit", "consectetur");
                    }};
                    cidrs = "nostrum";
                    global = false;
                    name = "laboriosam";
                    secret = new java.util.HashMap<String, Object>() {{
                        put("a", "soluta");
                        put("aut", "quas");
                        put("consequuntur", "laudantium");
                    }};
                    type = "aws_access_secret";
                }};
            }};

            CreateAccountCredentialResponse res = sdk.account.createAccountCredential(req);

            if (res.credential.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->