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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.Lien{
            CreateTime: "rerum",
            Name: "dicta",
            Origin: "debitis",
            Parent: "voluptatum",
            Reason: "et",
            Restrictions: []string{
                "dolorem",
                "et",
                "voluptate",
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