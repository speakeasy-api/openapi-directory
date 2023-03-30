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
        Security: operations.FirebaserulesProjectsReleasesCreateSecurity{
            Option1: &operations.FirebaserulesProjectsReleasesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FirebaserulesProjectsReleasesCreatePathParams{
            Name: "corrupti",
        },
        QueryParams: operations.FirebaserulesProjectsReleasesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.ReleaseInput{
            Name: "suscipit",
            RulesetName: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsReleasesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->