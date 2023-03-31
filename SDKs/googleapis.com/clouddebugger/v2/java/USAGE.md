<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurity;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListPathParams;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListQueryParams;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListRequest;
import org.openapis.openapi.models.operations.ClouddebuggerControllerDebuggeesBreakpointsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddebuggerControllerDebuggeesBreakpointsListRequest req = new ClouddebuggerControllerDebuggeesBreakpointsListRequest() {{
                security = new ClouddebuggerControllerDebuggeesBreakpointsListSecurity() {{
                    option1 = new ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ClouddebuggerControllerDebuggeesBreakpointsListPathParams() {{
                    debuggeeId = "corrupti";
                }};
                queryParams = new ClouddebuggerControllerDebuggeesBreakpointsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    agentId = "quibusdam";
                    alt = "media";
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
            }};            

            ClouddebuggerControllerDebuggeesBreakpointsListResponse res = sdk.controller.clouddebuggerControllerDebuggeesBreakpointsList(req);

            if (res.listActiveBreakpointsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->