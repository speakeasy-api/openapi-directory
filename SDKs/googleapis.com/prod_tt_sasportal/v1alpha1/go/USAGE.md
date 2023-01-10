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
            DollarXgafv: "2",
            AccessToken: "voluptatem",
            Alt: "proto",
            Callback: "sunt",
            Fields: "quo",
            Key: "voluptatum",
            OauthToken: "doloremque",
            PageSize: 1362199492306722394,
            PageToken: "qui",
            PrettyPrint: true,
            QuotaUser: "reiciendis",
            UploadType: "eveniet",
            UploadProtocol: "et",
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