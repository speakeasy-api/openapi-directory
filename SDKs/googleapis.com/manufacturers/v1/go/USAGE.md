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
            Name: "id",
            Parent: "nesciunt",
        },
        QueryParams: operations.ManufacturersAccountsProductsDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "proto",
            Callback: "nisi",
            Fields: "maiores",
            Key: "mollitia",
            OauthToken: "voluptatibus",
            PrettyPrint: false,
            QuotaUser: "illo",
            UploadType: "voluptas",
            UploadProtocol: "amet",
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