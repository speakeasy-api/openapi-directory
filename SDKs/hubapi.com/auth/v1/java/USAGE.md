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

            GetOauthV1AccessTokensTokenGetAccessTokenRequest req = new GetOauthV1AccessTokensTokenGetAccessTokenRequest() {{
                pathParams = new GetOauthV1AccessTokensTokenGetAccessTokenPathParams() {{
                    token = "sit";
                }};
            }};

            GetOauthV1AccessTokensTokenGetAccessTokenResponse res = sdk.accessTokens.getOauthV1AccessTokensTokenGetAccessToken(req);

            if (res.accessTokenInfoResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->