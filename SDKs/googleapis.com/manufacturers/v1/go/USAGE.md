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
    
    req := operations.ManufacturersAccountsProductsDeleteRequest{
        Security: operations.ManufacturersAccountsProductsDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ManufacturersAccountsProductsDeletePathParams{
            Name: "sit",
            Parent: "voluptas",
        },
        QueryParams: operations.ManufacturersAccountsProductsDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "expedita",
            Alt: "proto",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
    }
    
    res, err := s.Accounts.ManufacturersAccountsProductsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->