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
            Parent: "sit",
        },
        QueryParams: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PageSize: 8274930044578894929,
            PageToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
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