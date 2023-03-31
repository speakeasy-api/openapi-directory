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

    req := operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest{
        DollarXgafv: "2",
        HubInput: &shared.HubInput{
            CreateTime: "provident",
            Description: "distinctio",
            Labels: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            Name: "iure",
            UpdateTime: "magnam",
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        Fields: "tempora",
        HubID: "suscipit",
        Key: "molestiae",
        OauthToken: "minus",
        Parent: "placeat",
        PrettyPrint: false,
        QuotaUser: "voluptatum",
        RequestID: "iusto",
        UploadType: "excepturi",
        UploadProtocol: "nisi",
    }

    ctx := context.Background()
    res, err := s.Projects.NetworkconnectivityProjectsLocationsGlobalHubsCreate(ctx, req, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->