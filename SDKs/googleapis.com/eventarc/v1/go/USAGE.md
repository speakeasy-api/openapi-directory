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

    req := operations.EventarcProjectsLocationsChannelConnectionsCreateRequest{
        DollarXgafv: "2",
        ChannelConnectionInput: &shared.ChannelConnectionInput{
            ActivationToken: "provident",
            Channel: "distinctio",
            Name: "quibusdam",
        },
        AccessToken: "unde",
        Alt: "proto",
        Callback: "corrupti",
        ChannelConnectionID: "illum",
        Fields: "vel",
        Key: "error",
        OauthToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Projects.EventarcProjectsLocationsChannelConnectionsCreate(ctx, req, operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity{
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