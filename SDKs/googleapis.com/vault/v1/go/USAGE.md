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
        Security: operations.VaultMattersAddPermissionsSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.VaultMattersAddPermissionsPathParams{
            MatterID: "corrupti",
        },
        QueryParams: operations.VaultMattersAddPermissionsQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.AddMatterPermissionsRequest{
            CcMe: false,
            MatterPermission: &shared.MatterPermission{
                AccountID: "suscipit",
                Role: "COLLABORATOR",
            },
            SendEmails: false,
        },
    }

    ctx := context.Background()
    res, err := s.Matters.VaultMattersAddPermissions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MatterPermission != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->