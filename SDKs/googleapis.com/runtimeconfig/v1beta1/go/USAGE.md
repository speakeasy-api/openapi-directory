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
            Parent: "consequatur",
        },
        QueryParams: operations.RuntimeconfigProjectsConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "aut",
            Alt: "proto",
            Callback: "hic",
            Fields: "nostrum",
            Key: "ex",
            OauthToken: "sint",
            PrettyPrint: true,
            QuotaUser: "atque",
            RequestID: "eos",
            UploadType: "sed",
            UploadProtocol: "molestiae",
        },
        Request: &shared.RuntimeConfig{
            Description: "impedit",
            Name: "accusantium",
        },
    }
    
    res, err := s.Projects.RuntimeconfigProjectsConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RuntimeConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->