# agentUsers

### Available Operations

* [homegraphAgentUsersDelete](#homegraphagentusersdelete) - Unlinks the given third-party user from your smart home Action. All data related to this user will be deleted. For more details on how users link their accounts, see [fulfillment and authentication](https://developers.home.google.com/cloud-to-cloud/primer/fulfillment). The third-party user's identity is passed in via the `agent_user_id` (see DeleteAgentUserRequest). This request must be authorized using service account credentials from your Actions console project.

## homegraphAgentUsersDelete

Unlinks the given third-party user from your smart home Action. All data related to this user will be deleted. For more details on how users link their accounts, see [fulfillment and authentication](https://developers.home.google.com/cloud-to-cloud/primer/fulfillment). The third-party user's identity is passed in via the `agent_user_id` (see DeleteAgentUserRequest). This request must be authorized using service account credentials from your Actions console project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HomegraphAgentUsersDeleteRequest;
import org.openapis.openapi.models.operations.HomegraphAgentUsersDeleteResponse;
import org.openapis.openapi.models.operations.HomegraphAgentUsersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HomegraphAgentUsersDeleteRequest req = new HomegraphAgentUsersDeleteRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                key = "minus";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "voluptatum";
                requestId = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            HomegraphAgentUsersDeleteResponse res = sdk.agentUsers.homegraphAgentUsersDelete(req, new HomegraphAgentUsersDeleteSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
