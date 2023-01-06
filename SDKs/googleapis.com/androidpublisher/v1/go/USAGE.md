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
    
    req := operations.AndroidpublisherPurchasesCancelRequest{
        Security: operations.AndroidpublisherPurchasesCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AndroidpublisherPurchasesCancelPathParams{
            PackageName: "eligendi",
            SubscriptionID: "quia",
            Token: "minima",
        },
        QueryParams: operations.AndroidpublisherPurchasesCancelQueryParams{
            Alt: "json",
            Fields: "corrupti",
            Key: "ipsa",
            OauthToken: "sint",
            PrettyPrint: false,
            QuotaUser: "ab",
            UserIP: "porro",
        },
    }
    
    res, err := s.Purchases.AndroidpublisherPurchasesCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->