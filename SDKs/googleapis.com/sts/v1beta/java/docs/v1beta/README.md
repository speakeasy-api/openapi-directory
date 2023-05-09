# v1beta

### Available Operations

* [stsToken](#ststoken) - Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

## stsToken

Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StsTokenRequest;
import org.openapis.openapi.models.operations.StsTokenResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIdentityStsV1betaExchangeTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StsTokenRequest req = new StsTokenRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleIdentityStsV1betaExchangeTokenRequest = new GoogleIdentityStsV1betaExchangeTokenRequest() {{
                    audience = "suscipit";
                    grantType = "molestiae";
                    options = "minus";
                    requestedTokenType = "placeat";
                    scope = "voluptatum";
                    subjectToken = "iusto";
                    subjectTokenType = "excepturi";
                }};;
                accessToken = "nisi";
                alt = AltEnum.PROTO;
                callback = "temporibus";
                fields = "ab";
                key = "quis";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "perferendis";
                uploadProtocol = "ipsam";
            }};            

            StsTokenResponse res = sdk.v1beta.stsToken(req);

            if (res.googleIdentityStsV1betaExchangeTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
