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
        Security: operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurity{
            Option1: &operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.ClouddebuggerControllerDebuggeesBreakpointsListPathParams{
            DebuggeeID: "unde",
        },
        QueryParams: operations.ClouddebuggerControllerDebuggeesBreakpointsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            AgentID: "nulla",
            Alt: "media",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            SuccessOnTimeout: false,
            UploadType: "facilis",
            UploadProtocol: "eum",
            WaitToken: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.Controller.ClouddebuggerControllerDebuggeesBreakpointsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActiveBreakpointsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->