<!-- Start SDK Example Usage -->
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
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                code = "unde";
                fields = "nulla";
                gcpProjectId = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                product = IntegrationsCallbackGenerateTokenProductEnum.APIGEE;
                quotaUser = "deserunt";
                redirectUri = "suscipit";
                state = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            IntegrationsCallbackGenerateTokenResponse res = sdk.callback.integrationsCallbackGenerateToken(req, new IntegrationsCallbackGenerateTokenSecurity("ipsa", "delectus") {{
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
<!-- End SDK Example Usage -->