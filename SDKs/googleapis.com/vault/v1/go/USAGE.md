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
            MatterID: "sit",
        },
        QueryParams: operations.VaultMattersAddPermissionsQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.AddMatterPermissionsRequest{
            CcMe: false,
            MatterPermission: &shared.MatterPermission{
                AccountID: "debitis",
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