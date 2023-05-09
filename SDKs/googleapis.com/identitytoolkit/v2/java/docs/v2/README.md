# v2

### Available Operations

* [identitytoolkitGetRecaptchaConfig](#identitytoolkitgetrecaptchaconfig) - Gets parameters needed for reCAPTCHA analysis.

## identitytoolkitGetRecaptchaConfig

Gets parameters needed for reCAPTCHA analysis.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitGetRecaptchaConfigClientTypeEnum;
import org.openapis.openapi.models.operations.IdentitytoolkitGetRecaptchaConfigRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitGetRecaptchaConfigResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitGetRecaptchaConfigSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitGetRecaptchaConfigVersionEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitGetRecaptchaConfigRequest req = new IdentitytoolkitGetRecaptchaConfigRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "porro";
                clientType = IdentitytoolkitGetRecaptchaConfigClientTypeEnum.CLIENT_TYPE_IOS;
                fields = "doloribus";
                key = "iusto";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "ducimus";
                tenantId = "alias";
                uploadType = "officia";
                uploadProtocol = "tempora";
                version = IdentitytoolkitGetRecaptchaConfigVersionEnum.RECAPTCHA_VERSION_UNSPECIFIED;
            }};            

            IdentitytoolkitGetRecaptchaConfigResponse res = sdk.v2.identitytoolkitGetRecaptchaConfig(req, new IdentitytoolkitGetRecaptchaConfigSecurity("ea", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2RecaptchaConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
