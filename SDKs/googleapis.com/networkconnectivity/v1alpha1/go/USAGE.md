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
        Security: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            HubID: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.HubInput{
            CreateTime: "ullam",
            Description: "saepe",
            Labels: map[string]string{
                "sapiente": "enim",
            },
            Name: "eum",
            UpdateTime: "voluptatum",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.NetworkconnectivityProjectsLocationsGlobalHubsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->