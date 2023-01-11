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

            CreateTokenRequest req = new CreateTokenRequest() {{
                security = new CreateTokenSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateTokenCreateTokenRequest() {{
                    clientSecret = "sit";
                    clientSid = "voluptas";
                    code = "culpa";
                    codeVerifier = "expedita";
                    deviceCode = "consequuntur";
                    deviceId = "dolor";
                    grantType = "expedita";
                    refreshToken = "voluptas";
                }};
            }};

            CreateTokenResponse res = sdk.createToken(req);

            if (res.oauthV1Token.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->