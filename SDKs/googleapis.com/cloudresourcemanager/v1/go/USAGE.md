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
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.Lien{
            CreateTime: "facilis",
            Name: "eum",
            Origin: "iusto",
            Parent: "ullam",
            Reason: "saepe",
            Restrictions: []string{
                "sapiente",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Liens.CloudresourcemanagerLiensCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Lien != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->