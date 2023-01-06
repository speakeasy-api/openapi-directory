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
            Parent: "minus",
        },
        QueryParams: operations.EventarcProjectsLocationsChannelConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "qui",
            Alt: "media",
            Callback: "dolorem",
            ChannelConnectionID: "laudantium",
            Fields: "asperiores",
            Key: "aut",
            OauthToken: "sit",
            PrettyPrint: true,
            QuotaUser: "aut",
            UploadType: "eaque",
            UploadProtocol: "est",
        },
        Request: &shared.ChannelConnectionInput{
            ActivationToken: "nisi",
            Channel: "qui",
            Name: "eius",
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