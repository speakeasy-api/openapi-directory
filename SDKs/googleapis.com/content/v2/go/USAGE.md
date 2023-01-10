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
    
    req := operations.ContentAccountsAuthinfoRequest{
        Security: operations.ContentAccountsAuthinfoSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.ContentAccountsAuthinfoQueryParams{
            DollarXgafv: "1",
            AccessToken: "reiciendis",
            Alt: "media",
            Callback: "soluta",
            Fields: "voluptatem",
            Key: "quis",
            OauthToken: "ex",
            PrettyPrint: true,
            QuotaUser: "aperiam",
            UploadType: "dolorem",
            UploadProtocol: "dolorem",
        },
    }
    
    res, err := s.Accounts.ContentAccountsAuthinfo(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsAuthInfoResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->