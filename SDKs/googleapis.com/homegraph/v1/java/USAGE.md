<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.HomegraphAgentUsersDeleteSecurity;
import org.openapis.openapi.models.operations.HomegraphAgentUsersDeletePathParams;
import org.openapis.openapi.models.operations.HomegraphAgentUsersDeleteQueryParams;
import org.openapis.openapi.models.operations.HomegraphAgentUsersDeleteRequest;
import org.openapis.openapi.models.operations.HomegraphAgentUsersDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    agentUserId = "corrupti";
                }};
                queryParams = new HomegraphAgentUsersDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    requestId = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
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