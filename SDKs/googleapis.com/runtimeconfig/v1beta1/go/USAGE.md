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

    req := operations.RuntimeconfigProjectsConfigsCreateRequest{
        Security: operations.RuntimeconfigProjectsConfigsCreateSecurity{
            Option1: &operations.RuntimeconfigProjectsConfigsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.RuntimeconfigProjectsConfigsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.RuntimeconfigProjectsConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            RequestID: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.RuntimeConfig{
            Description: "iure",
            Name: "magnam",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.RuntimeconfigProjectsConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RuntimeConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->