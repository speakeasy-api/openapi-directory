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
        DollarXgafv: "2",
        EndpointInput: &shared.EndpointInput{
            Description: "provident",
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Network: "error",
            Severity: "MEDIUM",
            ThreatExceptions: []string{
                "iure",
                "magnam",
            },
            TrafficLogs: false,
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        EndpointID: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        OauthToken: "minus",
        Parent: "placeat",
        PrettyPrint: false,
        QuotaUser: "voluptatum",
        RequestID: "iusto",
        UploadType: "excepturi",
        UploadProtocol: "nisi",
    }

    ctx := context.Background()
    res, err := s.Projects.IdsProjectsLocationsEndpointsCreate(ctx, req, operations.IdsProjectsLocationsEndpointsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->