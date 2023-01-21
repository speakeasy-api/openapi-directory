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
            Name: "sit",
        },
        QueryParams: operations.FirebaserulesProjectsReleasesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.ReleaseInput{
            Name: "dicta",
            RulesetName: "debitis",
        },
    }
    
    res, err := s.Projects.FirebaserulesProjectsReleasesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->