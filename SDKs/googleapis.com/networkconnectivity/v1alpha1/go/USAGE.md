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
            Parent: "adipisci",
        },
        QueryParams: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "sit",
            Alt: "proto",
            Callback: "omnis",
            Fields: "sint",
            HubID: "molestias",
            Key: "nemo",
            OauthToken: "provident",
            PrettyPrint: false,
            QuotaUser: "vel",
            RequestID: "quia",
            UploadType: "voluptatem",
            UploadProtocol: "inventore",
        },
        Request: &shared.HubInput{
            CreateTime: "at",
            Description: "et",
            Labels: map[string]string{
                "atque": "corrupti",
            },
            Name: "eligendi",
            UpdateTime: "magni",
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