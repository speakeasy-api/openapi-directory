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
            Parent: "non",
        },
        QueryParams: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "in",
            Alt: "media",
            Callback: "magni",
            Fields: "est",
            HubID: "doloremque",
            Key: "libero",
            OauthToken: "dolor",
            PrettyPrint: false,
            QuotaUser: "minus",
            RequestID: "numquam",
            UploadType: "neque",
            UploadProtocol: "sint",
        },
        Request: &shared.HubInput{
            Description: "et",
            Labels: map[string]string{
                "pariatur": "perspiciatis",
            },
            Name: "laboriosam",
            RoutingVpcs: []shared.RoutingVpcInput{
                shared.RoutingVpcInput{
                    URI: "est",
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