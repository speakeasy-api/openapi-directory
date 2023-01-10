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
    
    req := operations.AdmobAccountsAdUnitsListRequest{
        Security: operations.AdmobAccountsAdUnitsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AdmobAccountsAdUnitsListPathParams{
            Parent: "itaque",
        },
        QueryParams: operations.AdmobAccountsAdUnitsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "molestiae",
            Alt: "media",
            Callback: "odit",
            Fields: "qui",
            Key: "itaque",
            OauthToken: "voluptas",
            PageSize: 3470849913966832319,
            PageToken: "vel",
            PrettyPrint: false,
            QuotaUser: "est",
            UploadType: "omnis",
            UploadProtocol: "assumenda",
        },
    }
    
    res, err := s.Accounts.AdmobAccountsAdUnitsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdUnitsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->