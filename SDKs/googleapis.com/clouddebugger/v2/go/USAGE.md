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