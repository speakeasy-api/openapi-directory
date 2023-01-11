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
                    fields = "voluptas";
                    key = "culpa";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "dolor";
                    userIp = "expedita";
                }};
                request = new IdentitytoolkitRelyingpartyCreateAuthUriRequest() {{
                    appId = "voluptas";
                    authFlowType = "fugit";
                    clientId = "et";
                    context = "nihil";
                    continueUri = "rerum";
                    customParameter = new java.util.HashMap<String, String>() {{
                        put("debitis", "voluptatum");
                        put("et", "ut");
                        put("dolorem", "et");
                    }};
                    hostedDomain = "voluptate";
                    identifier = "iste";
                    oauthConsumerKey = "vitae";
                    oauthScope = "totam";
                    openidRealm = "dolores";
                    otaApp = "illum";
                    providerId = "debitis";
                    sessionId = "vel";
                    tenantId = "odio";
                    tenantProjectNumber = "dolore";
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