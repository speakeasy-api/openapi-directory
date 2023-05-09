<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListRequest;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListResponse;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurity;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddebuggerControllerDebuggeesBreakpointsListRequest req = new ClouddebuggerControllerDebuggeesBreakpointsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                agentId = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                successOnTimeout = false;
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
                waitToken = "iure";
            }};            

            ClouddebuggerControllerDebuggeesBreakpointsListResponse res = sdk.controller.clouddebuggerControllerDebuggeesBreakpointsList(req, new ClouddebuggerControllerDebuggeesBreakpointsListSecurity() {{
                option1 = new ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listActiveBreakpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->