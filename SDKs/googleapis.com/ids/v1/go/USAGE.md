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
    
    req := operations.IdsProjectsLocationsEndpointsCreateRequest{
        Security: operations.IdsProjectsLocationsEndpointsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.IdsProjectsLocationsEndpointsCreatePathParams{
            Parent: "culpa",
        },
        QueryParams: operations.IdsProjectsLocationsEndpointsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "eaque",
            Alt: "proto",
            Callback: "in",
            EndpointID: "voluptas",
            Fields: "suscipit",
            Key: "hic",
            OauthToken: "qui",
            PrettyPrint: false,
            QuotaUser: "hic",
            RequestID: "nemo",
            UploadType: "voluptatem",
            UploadProtocol: "inventore",
        },
        Request: &shared.EndpointInput{
            Description: "molestias",
            Labels: map[string]string{
                "et": "in",
                "eveniet": "excepturi",
                "ea": "incidunt",
            },
            Network: "nisi",
            Severity: "CRITICAL",
            TrafficLogs: true,
        },
    }
    
    res, err := s.Projects.IdsProjectsLocationsEndpointsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->