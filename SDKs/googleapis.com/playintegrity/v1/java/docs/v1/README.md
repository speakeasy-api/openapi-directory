# v1

### Available Operations

* [playintegrityDecodeIntegrityToken](#playintegritydecodeintegritytoken) - Decodes the integrity token and returns the token payload.

## playintegrityDecodeIntegrityToken

Decodes the integrity token and returns the token payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenRequest;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenResponse;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DecodeIntegrityTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayintegrityDecodeIntegrityTokenRequest req = new PlayintegrityDecodeIntegrityTokenRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                decodeIntegrityTokenRequest = new DecodeIntegrityTokenRequest() {{
                    integrityToken = "delectus";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            PlayintegrityDecodeIntegrityTokenResponse res = sdk.v1.playintegrityDecodeIntegrityToken(req, new PlayintegrityDecodeIntegrityTokenSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.decodeIntegrityTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
