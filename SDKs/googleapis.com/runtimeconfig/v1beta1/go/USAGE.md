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
            Parent: "unde",
        },
        QueryParams: operations.RuntimeconfigProjectsConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.RuntimeConfig{
            Description: "iusto",
            Name: "ullam",
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