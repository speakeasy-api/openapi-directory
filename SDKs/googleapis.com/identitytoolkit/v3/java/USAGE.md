<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriQueryParams;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse;
import org.openapis.openapi.models.shared.IdentitytoolkitRelyingpartyCreateAuthUriRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitRelyingpartyCreateAuthUriRequest req = new IdentitytoolkitRelyingpartyCreateAuthUriRequest() {{
                security = new IdentitytoolkitRelyingpartyCreateAuthUriSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new IdentitytoolkitRelyingpartyCreateAuthUriQueryParams() {{
                    alt = "json";
                    fields = "corrupti";
                    key = "provident";
                    oauthToken = "distinctio";
                    prettyPrint = false;
                    quotaUser = "quibusdam";
                    userIp = "unde";
                }};
                request = new IdentitytoolkitRelyingpartyCreateAuthUriRequest() {{
                    appId = "nulla";
                    authFlowType = "corrupti";
                    clientId = "illum";
                    context = "vel";
                    continueUri = "error";
                    customParameter = new java.util.HashMap<String, String>() {{
                        put("suscipit", "iure");
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    hostedDomain = "tempora";
                    identifier = "suscipit";
                    oauthConsumerKey = "molestiae";
                    oauthScope = "minus";
                    openidRealm = "placeat";
                    otaApp = "voluptatum";
                    providerId = "iusto";
                    sessionId = "excepturi";
                    tenantId = "nisi";
                    tenantProjectNumber = "recusandae";
                }};
            }};            

            IdentitytoolkitRelyingpartyCreateAuthUriResponse res = sdk.relyingparty.identitytoolkitRelyingpartyCreateAuthUri(req);

            if (res.createAuthUriResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->