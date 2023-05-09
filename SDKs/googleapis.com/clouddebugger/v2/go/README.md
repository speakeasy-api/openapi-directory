# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/clouddebugger/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Controller.ClouddebuggerControllerDebuggeesBreakpointsList(ctx, operations.ClouddebuggerControllerDebuggeesBreakpointsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        AgentID: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        DebuggeeID: "nulla",
        Fields: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        SuccessOnTimeout: sdk.Bool(false),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
        WaitToken: sdk.String("iure"),
    }, operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurity{
        Option1: &operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActiveBreakpointsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Controller](docs/controller/README.md)

* [ClouddebuggerControllerDebuggeesBreakpointsList](docs/controller/README.md#clouddebuggercontrollerdebuggeesbreakpointslist) - Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.
* [ClouddebuggerControllerDebuggeesBreakpointsUpdate](docs/controller/README.md#clouddebuggercontrollerdebuggeesbreakpointsupdate) - Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.
* [ClouddebuggerControllerDebuggeesRegister](docs/controller/README.md#clouddebuggercontrollerdebuggeesregister) - Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.

### [Debugger](docs/debugger/README.md)

* [ClouddebuggerDebuggerDebuggeesBreakpointsDelete](docs/debugger/README.md#clouddebuggerdebuggerdebuggeesbreakpointsdelete) - Deletes the breakpoint from the debuggee.
* [ClouddebuggerDebuggerDebuggeesBreakpointsGet](docs/debugger/README.md#clouddebuggerdebuggerdebuggeesbreakpointsget) - Gets breakpoint information.
* [ClouddebuggerDebuggerDebuggeesBreakpointsList](docs/debugger/README.md#clouddebuggerdebuggerdebuggeesbreakpointslist) - Lists all breakpoints for the debuggee.
* [ClouddebuggerDebuggerDebuggeesBreakpointsSet](docs/debugger/README.md#clouddebuggerdebuggerdebuggeesbreakpointsset) - Sets the breakpoint to the debuggee.
* [ClouddebuggerDebuggerDebuggeesList](docs/debugger/README.md#clouddebuggerdebuggerdebuggeeslist) - Lists all the debuggees that the user has access to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
