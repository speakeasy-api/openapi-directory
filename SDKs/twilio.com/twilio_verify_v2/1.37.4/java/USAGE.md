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

            CreateAccessTokenRequest req = new CreateAccessTokenRequest() {{
                security = new CreateAccessTokenSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateAccessTokenPathParams() {{
                    serviceSid = "est";
                }};
                request = new CreateAccessTokenCreateAccessTokenRequest() {{
                    factorFriendlyName = "nostrum";
                    factorType = "push";
                    identity = "enim";
                    ttl = 1319314366977851377;
                }};
            }};

            CreateAccessTokenResponse res = sdk.createAccessToken(req);

            if (res.verifyV2ServiceAccessToken.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->