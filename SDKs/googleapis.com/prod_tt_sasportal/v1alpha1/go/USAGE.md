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
    
    req := operations.ProdTtSasportalCustomersListRequest{
        Security: operations.ProdTtSasportalCustomersListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.ProdTtSasportalCustomersListQueryParams{
            DollarXgafv: "1",
            AccessToken: "earum",
            Alt: "media",
            Callback: "similique",
            Fields: "qui",
            Key: "provident",
            OauthToken: "corrupti",
            PageSize: 2119172757315329092,
            PageToken: "eum",
            PrettyPrint: false,
            QuotaUser: "in",
            UploadType: "officiis",
            UploadProtocol: "doloribus",
        },
    }
    
    res, err := s.Customers.ProdTtSasportalCustomersList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalListCustomersResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->