<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyCreateAuthUriRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyCreateAuthUriRequest req = new IdentitytoolkitRelyingpartyCreateAuthUriRequest() {{
                identitytoolkitRelyingpartyCreateAuthUriRequest = new IdentitytoolkitRelyingpartyCreateAuthUriRequest() {{
                    appId = "corrupti";
                    authFlowType = "provident";
                    clientId = "distinctio";
                    context = "quibusdam";
                    continueUri = "unde";
                    customParameter = new java.util.HashMap<String, String>() {{
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                    }};
                    hostedDomain = "debitis";
                    identifier = "ipsa";
                    oauthConsumerKey = "delectus";
                    oauthScope = "tempora";
                    openidRealm = "suscipit";
                    otaApp = "molestiae";
                    providerId = "minus";
                    sessionId = "placeat";
                    tenantId = "voluptatum";
                    tenantProjectNumber = "iusto";
                }};;
                alt = AltEnum.JSON;
                fields = "excepturi";
                key = "nisi";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                userIp = "ab";
            }};            

            IdentitytoolkitRelyingpartyCreateAuthUriResponse res = sdk.relyingparty.identitytoolkitRelyingpartyCreateAuthUri(req, new IdentitytoolkitRelyingpartyCreateAuthUriSecurity("quis", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createAuthUriResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->