<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenSecurity;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenProductEnum;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenQueryParams;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenRequest;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsCallbackGenerateTokenRequest req = new IntegrationsCallbackGenerateTokenRequest() {{
                security = new IntegrationsCallbackGenerateTokenSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new IntegrationsCallbackGenerateTokenQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    code = "unde";
                    fields = "nulla";
                    gcpProjectId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    product = "APIGEE";
                    quotaUser = "deserunt";
                    redirectUri = "suscipit";
                    state = "iure";
                    uploadType = "magnam";
                    uploadProtocol = "debitis";
                }};
            }};            

            IntegrationsCallbackGenerateTokenResponse res = sdk.callback.integrationsCallbackGenerateToken(req);

            if (res.googleCloudIntegrationsV1alphaGenerateTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->