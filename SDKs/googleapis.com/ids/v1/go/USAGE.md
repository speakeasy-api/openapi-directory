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
            Parent: "unde",
        },
        QueryParams: operations.IdsProjectsLocationsEndpointsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            EndpointID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.EndpointInput{
            Description: "ullam",
            Labels: map[string]string{
                "inventore": "sapiente",
                "enim": "eum",
                "voluptatum": "autem",
                "vel": "non",
            },
            Network: "deleniti",
            Severity: "MEDIUM",
            ThreatExceptions: []string{
                "molestiae",
                "quo",
            },
            TrafficLogs: false,
        },
    }

    ctx := context.Background()
    res, err := s.Projects.IdsProjectsLocationsEndpointsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->