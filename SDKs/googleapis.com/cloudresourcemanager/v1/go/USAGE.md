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
    
    req := operations.CloudresourcemanagerLiensCreateRequest{
        Security: operations.CloudresourcemanagerLiensCreateSecurity{
            Option1: &operations.CloudresourcemanagerLiensCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.CloudresourcemanagerLiensCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "aut",
            Alt: "media",
            Callback: "eligendi",
            Fields: "et",
            Key: "ad",
            OauthToken: "dicta",
            PrettyPrint: false,
            QuotaUser: "beatae",
            UploadType: "neque",
            UploadProtocol: "ea",
        },
        Request: &shared.Lien{
            CreateTime: "libero",
            Name: "error",
            Origin: "eos",
            Parent: "ex",
            Reason: "occaecati",
            Restrictions: []string{
                "dolorem",
            },
        },
    }
    
    res, err := s.Liens.CloudresourcemanagerLiensCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Lien != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->