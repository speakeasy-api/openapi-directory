<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Purchases.AndroidpublisherPurchasesCancel(ctx, operations.AndroidpublisherPurchasesCancelRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("distinctio"),
        PackageName: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        SubscriptionID: "nulla",
        Token: "corrupti",
        UserIP: sdk.String("illum"),
    }, operations.AndroidpublisherPurchasesCancelSecurity{
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