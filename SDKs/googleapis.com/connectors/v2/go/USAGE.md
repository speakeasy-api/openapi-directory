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
    
    req := operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest{
        Security: operations.ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ConnectorsProjectsLocationsConnectionsActionsExecutePathParams{
            Name: "est",
        },
        QueryParams: operations.ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams{
            DollarXgafv: "1",
            AccessToken: "velit",
            Alt: "media",
            Callback: "deleniti",
            Fields: "eligendi",
            Key: "dolorem",
            OauthToken: "corporis",
            PrettyPrint: false,
            QuotaUser: "voluptas",
            UploadType: "qui",
            UploadProtocol: "aut",
        },
        Request: &shared.ExecuteActionRequest{
            Parameters: map[string]interface{}{
                "ut": "aspernatur",
                "qui": "praesentium",
            },
        },
    }
    
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsActionsExecute(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteActionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->