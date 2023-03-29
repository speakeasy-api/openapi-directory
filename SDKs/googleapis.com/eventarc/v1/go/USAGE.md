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
        Security: operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.EventarcProjectsLocationsChannelConnectionsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.EventarcProjectsLocationsChannelConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            ChannelConnectionID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.ChannelConnectionInput{
            ActivationToken: "iusto",
            Channel: "ullam",
            Name: "saepe",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.EventarcProjectsLocationsChannelConnectionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->