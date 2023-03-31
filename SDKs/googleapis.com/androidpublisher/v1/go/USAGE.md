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
        Alt: "json",
        Fields: "corrupti",
        Key: "provident",
        OauthToken: "distinctio",
        PackageName: "quibusdam",
        PrettyPrint: false,
        QuotaUser: "unde",
        SubscriptionID: "nulla",
        Token: "corrupti",
        UserIP: "illum",
    }

    ctx := context.Background()
    res, err := s.Purchases.AndroidpublisherPurchasesCancel(ctx, req, operations.AndroidpublisherPurchasesCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->