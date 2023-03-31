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

    req := operations.VaultMattersAddPermissionsRequest{
        DollarXgafv: "2",
        AddMatterPermissionsRequest: &shared.AddMatterPermissionsRequest{
            CcMe: false,
            MatterPermission: &shared.MatterPermission{
                AccountID: "provident",
                Role: "OWNER",
            },
            SendEmails: false,
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        Fields: "corrupti",
        Key: "illum",
        MatterID: "vel",
        OauthToken: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Matters.VaultMattersAddPermissions(ctx, req, operations.VaultMattersAddPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MatterPermission != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->