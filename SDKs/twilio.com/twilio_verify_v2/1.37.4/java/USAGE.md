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
                    serviceSid = "sit";
                }};
                request = new CreateAccessTokenCreateAccessTokenRequest() {{
                    factorFriendlyName = "voluptas";
                    factorType = "push";
                    identity = "expedita";
                    ttl = 3390393562759376202;
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