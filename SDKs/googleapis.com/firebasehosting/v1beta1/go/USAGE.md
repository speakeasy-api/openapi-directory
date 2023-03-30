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
            Parent: "corrupti",
        },
        QueryParams: operations.FirebasehostingProjectsSitesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            SiteID: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.SiteInput{
            AppID: "iure",
            Labels: map[string]string{
                "debitis": "ipsa",
                "delectus": "tempora",
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