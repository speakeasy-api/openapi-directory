<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.HomegraphAgentUsersDeleteSecurity;
import org.openapis.openapi.models.operations.HomegraphAgentUsersDeleteRequest;
import org.openapis.openapi.models.operations.HomegraphAgentUsersDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HomegraphAgentUsersDeleteRequest req = new HomegraphAgentUsersDeleteRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                agentUserId = "distinctio";
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
            }}            

            HomegraphAgentUsersDeleteResponse res = sdk.agentUsers.homegraphAgentUsersDelete(req, new HomegraphAgentUsersDeleteSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->