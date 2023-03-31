# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### controller

* `clouddebuggerControllerDebuggeesBreakpointsList` - Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.
* `clouddebuggerControllerDebuggeesBreakpointsUpdate` - Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.
* `clouddebuggerControllerDebuggeesRegister` - Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.

### debugger

* `clouddebuggerDebuggerDebuggeesBreakpointsDelete` - Deletes the breakpoint from the debuggee.
* `clouddebuggerDebuggerDebuggeesBreakpointsGet` - Gets breakpoint information.
* `clouddebuggerDebuggerDebuggeesBreakpointsList` - Lists all breakpoints for the debuggee.
* `clouddebuggerDebuggerDebuggeesBreakpointsSet` - Sets the breakpoint to the debuggee.
* `clouddebuggerDebuggerDebuggeesList` - Lists all the debuggees that the user has access to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
