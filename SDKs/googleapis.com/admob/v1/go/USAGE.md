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
            Parent: "unde",
        },
        QueryParams: operations.AdmobAccountsAdUnitsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PageSize: 423655,
            PageToken: "fuga",
            PrettyPrint: false,
            QuotaUser: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AdmobAccountsAdUnitsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdUnitsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->