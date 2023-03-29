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
            PackageName: "unde",
            SubscriptionID: "deserunt",
            Token: "porro",
        },
        QueryParams: operations.AndroidpublisherPurchasesCancelQueryParams{
            Alt: "json",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UserIP: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.Purchases.AndroidpublisherPurchasesCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->