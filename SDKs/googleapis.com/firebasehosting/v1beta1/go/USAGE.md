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

    req := operations.FirebasehostingProjectsSitesCreateRequest{
        Security: operations.FirebasehostingProjectsSitesCreateSecurity{
            Option1: &operations.FirebasehostingProjectsSitesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FirebasehostingProjectsSitesCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.FirebasehostingProjectsSitesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            SiteID: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.SiteInput{
            AppID: "iusto",
            Labels: map[string]string{
                "saepe": "inventore",
                "sapiente": "enim",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasehostingProjectsSitesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->