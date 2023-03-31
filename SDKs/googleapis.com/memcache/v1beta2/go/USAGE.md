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

    req := operations.MemcacheProjectsLocationsInstancesApplyParametersRequest{
        DollarXgafv: "2",
        ApplyParametersRequest: &shared.ApplyParametersRequest{
            ApplyAll: false,
            NodeIds: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        AccessToken: "nulla",
        Alt: "media",
        Callback: "illum",
        Fields: "vel",
        Key: "error",
        Name: "deserunt",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Projects.MemcacheProjectsLocationsInstancesApplyParameters(ctx, req, operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity{
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