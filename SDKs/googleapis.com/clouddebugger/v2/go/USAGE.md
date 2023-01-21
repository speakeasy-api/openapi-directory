<!-- Start SDK Example Usage -->
```go
package main

import (
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
            DebuggeeID: "sit",
        },
        QueryParams: operations.ClouddebuggerControllerDebuggeesBreakpointsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            AgentID: "expedita",
            Alt: "proto",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            SuccessOnTimeout: true,
            UploadType: "dicta",
            UploadProtocol: "debitis",
            WaitToken: "voluptatum",
        },
    }
    
    res, err := s.Controller.ClouddebuggerControllerDebuggeesBreakpointsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActiveBreakpointsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->