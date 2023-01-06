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
            MatterID: "labore",
        },
        QueryParams: operations.VaultMattersAddPermissionsQueryParams{
            DollarXgafv: "1",
            AccessToken: "debitis",
            Alt: "proto",
            Callback: "et",
            Fields: "accusantium",
            Key: "consequatur",
            OauthToken: "aut",
            PrettyPrint: true,
            QuotaUser: "est",
            UploadType: "ullam",
            UploadProtocol: "odit",
        },
        Request: &shared.AddMatterPermissionsRequest{
            CcMe: true,
            MatterPermission: &shared.MatterPermission{
                AccountID: "molestiae",
                Role: "ROLE_UNSPECIFIED",
            },
            SendEmails: false,
        },
    }
    
    res, err := s.Matters.VaultMattersAddPermissions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MatterPermission != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->