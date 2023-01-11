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
                    fields = "aut";
                    key = "ab";
                    oauthToken = "repellendus";
                    prettyPrint = false;
                    quotaUser = "consequatur";
                    userIp = "numquam";
                }};
                request = new IdentitytoolkitRelyingpartyCreateAuthUriRequest() {{
                    appId = "saepe";
                    authFlowType = "consequatur";
                    clientId = "veniam";
                    context = "non";
                    continueUri = "aut";
                    customParameter = new java.util.HashMap<String, String>() {{
                        put("at", "impedit");
                    }};
                    hostedDomain = "molestiae";
                    identifier = "veniam";
                    oauthConsumerKey = "repellendus";
                    oauthScope = "molestiae";
                    openidRealm = "magnam";
                    otaApp = "cum";
                    providerId = "molestiae";
                    sessionId = "fuga";
                    tenantId = "quas";
                    tenantProjectNumber = "quia";
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