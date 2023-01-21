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
            Parent: "sit",
        },
        QueryParams: operations.EventarcProjectsLocationsChannelConnectionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            ChannelConnectionID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.ChannelConnectionInput{
            ActivationToken: "debitis",
            Channel: "voluptatum",
            Name: "et",
        },
    }
    
    res, err := s.Projects.EventarcProjectsLocationsChannelConnectionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->