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
    res, err := s.Inapppurchases.AndroidpublisherInapppurchasesGet(ctx, operations.AndroidpublisherInapppurchasesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("distinctio"),
        PackageName: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        ProductID: "unde",
        QuotaUser: sdk.String("nulla"),
        Token: "corrupti",
        UserIP: sdk.String("illum"),
    }, operations.AndroidpublisherInapppurchasesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->