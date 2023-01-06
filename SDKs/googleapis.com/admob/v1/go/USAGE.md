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
            Parent: "ab",
        },
        QueryParams: operations.AdmobAccountsAdUnitsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "ullam",
            Alt: "media",
            Callback: "eos",
            Fields: "et",
            Key: "minus",
            OauthToken: "nam",
            PageSize: 6018441169995454071,
            PageToken: "qui",
            PrettyPrint: false,
            QuotaUser: "consequatur",
            UploadType: "in",
            UploadProtocol: "vel",
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