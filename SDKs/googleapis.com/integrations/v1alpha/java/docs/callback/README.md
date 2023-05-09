# callback

### Available Operations

* [integrationsCallbackGenerateToken](#integrationscallbackgeneratetoken) - Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

## integrationsCallbackGenerateToken

Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenProductEnum;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenRequest;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenResponse;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsCallbackGenerateTokenRequest req = new IntegrationsCallbackGenerateTokenRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                code = "placeat";
                fields = "voluptatum";
                gcpProjectId = "iusto";
                key = "excepturi";
                oauthToken = "nisi";
                prettyPrint = false;
                product = IntegrationsCallbackGenerateTokenProductEnum.SECURITY;
                quotaUser = "temporibus";
                redirectUri = "ab";
                state = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }};            

            IntegrationsCallbackGenerateTokenResponse res = sdk.callback.integrationsCallbackGenerateToken(req, new IntegrationsCallbackGenerateTokenSecurity("perferendis", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaGenerateTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
