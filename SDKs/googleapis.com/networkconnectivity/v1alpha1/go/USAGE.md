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
            Parent: "et",
        },
        QueryParams: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "dolore",
            Alt: "media",
            Callback: "similique",
            Fields: "tempore",
            HubID: "sit",
            Key: "dolore",
            OauthToken: "libero",
            PrettyPrint: false,
            QuotaUser: "distinctio",
            RequestID: "aut",
            UploadType: "exercitationem",
            UploadProtocol: "quisquam",
        },
        Request: &shared.HubInput{
            CreateTime: "cum",
            Description: "corrupti",
            Labels: map[string]string{
                "id": "ut",
            },
            Name: "totam",
            UpdateTime: "quaerat",
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