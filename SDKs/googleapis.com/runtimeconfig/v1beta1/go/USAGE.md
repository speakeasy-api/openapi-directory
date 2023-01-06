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
            Parent: "quibusdam",
        },
        QueryParams: operations.RuntimeconfigProjectsConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "autem",
            Alt: "proto",
            Callback: "commodi",
            Fields: "quibusdam",
            Key: "voluptatum",
            OauthToken: "sunt",
            PrettyPrint: true,
            QuotaUser: "quae",
            RequestID: "ducimus",
            UploadType: "eligendi",
            UploadProtocol: "magni",
        },
        Request: &shared.RuntimeConfig{
            Description: "laudantium",
            Name: "natus",
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