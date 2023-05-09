<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateTokenV2RequestBody;
import org.openapis.openapi.models.operations.GenerateTokenV2RequestBodyGrantTypeEnum;
import org.openapis.openapi.models.operations.GenerateTokenV2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateTokenV2RequestBody req = new GenerateTokenV2RequestBody() {{
                assertion = "SOME_ASSERTION_STRING";
                grantType = GenerateTokenV2RequestBodyGrantTypeEnum.URN_IETF_PARAMS_OAUTH_GRANT_TYPE_JWT_BEARER;
                refreshToken = "SomeRefreshToken";
                scope = "offline";
                validFor = 120;
            }};            

            GenerateTokenV2Response res = sdk.authorization.generateTokenV2(req);

            if (res.generateAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->