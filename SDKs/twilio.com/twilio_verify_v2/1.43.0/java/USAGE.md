<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessTokenCreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenResponse;
import org.openapis.openapi.models.operations.CreateAccessTokenSecurity;
import org.openapis.openapi.models.shared.AccessTokenEnumFactorTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccessTokenRequest req = new CreateAccessTokenRequest("corrupti") {{
                requestBody = new CreateAccessTokenCreateAccessTokenRequest(AccessTokenEnumFactorTypesEnum.PUSH, "provident") {{
                    factorFriendlyName = "distinctio";
                    ttl = 844266L;
                }};;
            }};            

            CreateAccessTokenResponse res = sdk.createAccessToken(req, new CreateAccessTokenSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.verifyV2ServiceAccessToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->