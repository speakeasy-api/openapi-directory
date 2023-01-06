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
    
    req := operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest{
        Security: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams{
            Parent: "aspernatur",
        },
        QueryParams: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "id",
            Alt: "json",
            Callback: "facere",
            Fields: "hic",
            Key: "et",
            OauthToken: "illo",
            PageSize: 1910356192618522045,
            PageToken: "consequatur",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "sed",
            UploadProtocol: "non",
        },
    }
    
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersAuctionPackagesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuctionPackagesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->