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
            Parent: "quae",
        },
        QueryParams: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "recusandae",
            Alt: "json",
            Callback: "maxime",
            Fields: "et",
            Key: "sunt",
            OauthToken: "assumenda",
            PageSize: 6827229980722297647,
            PageToken: "similique",
            PrettyPrint: false,
            QuotaUser: "est",
            UploadType: "harum",
            UploadProtocol: "consequatur",
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