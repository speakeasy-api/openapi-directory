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
        DollarXgafv: "2",
        HubInput: &shared.HubInput{
            Description: "provident",
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Name: "error",
            RoutingVpcs: []shared.RoutingVPCInput{
                shared.RoutingVPCInput{
                    URI: "http://innocent-effect.org",
                },
                shared.RoutingVPCInput{
                    URI: "http://whirlwind-diver.info",
                },
                shared.RoutingVPCInput{
                    URI: "http://spotted-skyline.name",
                },
            },
        },
        AccessToken: "iusto",
        Alt: "media",
        Callback: "nisi",
        Fields: "recusandae",
        HubID: "temporibus",
        Key: "ab",
        OauthToken: "quis",
        Parent: "veritatis",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        RequestID: "perferendis",
        UploadType: "ipsam",
        UploadProtocol: "repellendus",
    }

    ctx := context.Background()
    res, err := s.Projects.NetworkconnectivityProjectsLocationsGlobalHubsCreate(ctx, req, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity{
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