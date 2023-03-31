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

    req := operations.FirebaserulesProjectsReleasesCreateRequest{
        DollarXgafv: "2",
        ReleaseInput: &shared.ReleaseInput{
            Name: "provident",
            RulesetName: "distinctio",
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        Fields: "corrupti",
        Key: "illum",
        Name: "vel",
        OauthToken: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsReleasesCreate(ctx, req, operations.FirebaserulesProjectsReleasesCreateSecurity{
        Option1: &operations.FirebaserulesProjectsReleasesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->