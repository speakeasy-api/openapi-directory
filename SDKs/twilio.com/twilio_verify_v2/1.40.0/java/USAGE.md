<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAccessTokenSecurity;
import org.openapis.openapi.models.operations.CreateAccessTokenCreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenResponse;
import org.openapis.openapi.models.shared.AccessTokenEnumFactorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccessTokenRequest req = new CreateAccessTokenRequest() {{
                requestBody = new CreateAccessTokenCreateAccessTokenRequest() {{
                    factorFriendlyName = "corrupti";
                    factorType = "push";
                    identity = "provident";
                    ttl = 715190;
                }};
                serviceSid = "quibusdam";
            }}            

            CreateAccessTokenResponse res = sdk.createAccessToken(req, new CreateAccessTokenSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceAccessToken.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->