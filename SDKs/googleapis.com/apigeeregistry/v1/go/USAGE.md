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

    req := operations.ApigeeregistryProjectsLocationsApisCreateRequest{
        DollarXgafv: "2",
        APIInput: &shared.APIInput{
            Annotations: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            Availability: "vel",
            Description: "error",
            DisplayName: "deserunt",
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: "delectus",
            RecommendedDeployment: "tempora",
            RecommendedVersion: "suscipit",
        },
        AccessToken: "molestiae",
        Alt: "proto",
        APIID: "placeat",
        Callback: "voluptatum",
        Fields: "iusto",
        Key: "excepturi",
        OauthToken: "nisi",
        Parent: "recusandae",
        PrettyPrint: false,
        QuotaUser: "temporibus",
        UploadType: "ab",
        UploadProtocol: "quis",
    }

    ctx := context.Background()
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisCreate(ctx, req, operations.ApigeeregistryProjectsLocationsApisCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->