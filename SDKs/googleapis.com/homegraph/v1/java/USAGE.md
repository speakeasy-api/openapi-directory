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

            HomegraphAgentUsersDeleteRequest req = new HomegraphAgentUsersDeleteRequest() {{
                security = new HomegraphAgentUsersDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new HomegraphAgentUsersDeletePathParams() {{
                    agentUserId = "facere";
                }};
                queryParams = new HomegraphAgentUsersDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "numquam";
                    alt = "media";
                    callback = "aut";
                    fields = "voluptate";
                    key = "ad";
                    oauthToken = "provident";
                    prettyPrint = false;
                    quotaUser = "omnis";
                    requestId = "dolores";
                    uploadType = "ut";
                    uploadProtocol = "omnis";
                }};
            }};

            HomegraphAgentUsersDeleteResponse res = sdk.agentUsers.homegraphAgentUsersDelete(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->