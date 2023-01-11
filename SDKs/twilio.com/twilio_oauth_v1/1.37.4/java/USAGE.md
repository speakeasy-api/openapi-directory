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
                    clientSecret = "distinctio";
                    clientSid = "in";
                    code = "consectetur";
                    codeVerifier = "minima";
                    deviceCode = "sequi";
                    deviceId = "et";
                    grantType = "consequatur";
                    refreshToken = "eum";
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