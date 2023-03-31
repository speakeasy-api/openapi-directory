<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAccessTokenSecurity;
import org.openapis.openapi.models.operations.CreateAccessTokenPathParams;
import org.openapis.openapi.models.operations.CreateAccessTokenCreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenResponse;
import org.openapis.openapi.models.shared.AccessTokenEnumFactorTypesEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccessTokenRequest req = new CreateAccessTokenRequest() {{
                security = new CreateAccessTokenSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateAccessTokenPathParams() {{
                    serviceSid = "corrupti";
                }};
                request = new CreateAccessTokenCreateAccessTokenRequest() {{
                    factorFriendlyName = "provident";
                    factorType = "push";
                    identity = "distinctio";
                    ttl = 844266;
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