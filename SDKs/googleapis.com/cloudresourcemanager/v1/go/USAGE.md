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
        DollarXgafv: "2",
        Lien: &shared.Lien{
            CreateTime: "provident",
            Name: "distinctio",
            Origin: "quibusdam",
            Parent: "unde",
            Reason: "nulla",
            Restrictions: []string{
                "illum",
                "vel",
                "error",
            },
        },
        AccessToken: "deserunt",
        Alt: "media",
        Callback: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        UploadType: "tempora",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Liens.CloudresourcemanagerLiensCreate(ctx, req, operations.CloudresourcemanagerLiensCreateSecurity{
        Option1: &operations.CloudresourcemanagerLiensCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Lien != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->