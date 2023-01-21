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
    
    req := operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest{
        Security: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            HubID: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.HubInput{
            CreateTime: "voluptatum",
            Description: "et",
            Labels: map[string]string{
                "dolorem": "et",
                "voluptate": "iste",
                "vitae": "totam",
            },
            Name: "dolores",
            UpdateTime: "illum",
        },
    }
    
    res, err := s.Projects.NetworkconnectivityProjectsLocationsGlobalHubsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->