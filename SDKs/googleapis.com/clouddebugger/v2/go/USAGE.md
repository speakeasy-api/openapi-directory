<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ClouddebuggerControllerDebuggeesBreakpointsListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        AgentID: "distinctio",
        Alt: "proto",
        Callback: "unde",
        DebuggeeID: "nulla",
        Fields: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        SuccessOnTimeout: false,
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
        WaitToken: "iure",
    }

    ctx := context.Background()
    res, err := s.Controller.ClouddebuggerControllerDebuggeesBreakpointsList(ctx, req, operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurity{
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