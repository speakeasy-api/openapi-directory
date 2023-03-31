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

    req := operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest{
        DollarXgafv: "2",
        ExecuteActionRequest: &shared.ExecuteActionRequest{
            Parameters: map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        Name: "magnam",
        OauthToken: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsActionsExecute(ctx, req, operations.ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteActionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->