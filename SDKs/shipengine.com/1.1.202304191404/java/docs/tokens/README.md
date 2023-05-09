# tokens

### Available Operations

* [tokensGetEphemeralToken](#tokensgetephemeraltoken) - Get Ephemeral Token

## tokensGetEphemeralToken

This endpoint returns a token that can be passed to an application for authorized access.  The lifetime of this token is 10 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokensGetEphemeralTokenRequest;
import org.openapis.openapi.models.operations.TokensGetEphemeralTokenResponse;
import org.openapis.openapi.models.shared.RedirectEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TokensGetEphemeralTokenRequest req = new TokensGetEphemeralTokenRequest() {{
                redirect = RedirectEnum.SHIPENGINE_DASHBOARD;
            }};            

            TokensGetEphemeralTokenResponse res = sdk.tokens.tokensGetEphemeralToken(req);

            if (res.tokensGetEphemeralTokenResponseBodyYaml != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
