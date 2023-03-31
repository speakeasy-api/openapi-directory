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
        DollarXgafv: "2",
        SiteInput: &shared.SiteInput{
            AppID: "provident",
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
        },
        AccessToken: "error",
        Alt: "media",
        Callback: "suscipit",
        Fields: "iure",
        Key: "magnam",
        OauthToken: "debitis",
        Parent: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        SiteID: "tempora",
        UploadType: "suscipit",
        UploadProtocol: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasehostingProjectsSitesCreate(ctx, req, operations.FirebasehostingProjectsSitesCreateSecurity{
        Option1: &operations.FirebasehostingProjectsSitesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->