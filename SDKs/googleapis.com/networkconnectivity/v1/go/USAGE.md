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
            Parent: "voluptatem",
        },
        QueryParams: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "rem",
            Alt: "media",
            Callback: "necessitatibus",
            Fields: "in",
            HubID: "qui",
            Key: "soluta",
            OauthToken: "placeat",
            PrettyPrint: true,
            QuotaUser: "aut",
            RequestID: "vitae",
            UploadType: "hic",
            UploadProtocol: "cupiditate",
        },
        Request: &shared.HubInput{
            Description: "est",
            Labels: map[string]string{
                "ut": "omnis",
                "dolores": "iusto",
                "ratione": "sed",
            },
            Name: "libero",
            RoutingVpcs: []shared.RoutingVpcInput{
                shared.RoutingVpcInput{
                    URI: "illo",
                },
                shared.RoutingVpcInput{
                    URI: "sapiente",
                },
            },
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