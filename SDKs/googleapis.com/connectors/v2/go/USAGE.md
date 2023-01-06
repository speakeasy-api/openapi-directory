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
            Name: "cum",
        },
        QueryParams: operations.ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams{
            DollarXgafv: "1",
            AccessToken: "nemo",
            Alt: "media",
            Callback: "et",
            Fields: "qui",
            Key: "eaque",
            OauthToken: "minus",
            PrettyPrint: false,
            QuotaUser: "similique",
            UploadType: "consequatur",
            UploadProtocol: "sapiente",
        },
        Request: &shared.ExecuteActionRequest{
            Parameters: map[string]interface{}{
                "animi": "alias",
                "molestias": "reprehenderit",
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