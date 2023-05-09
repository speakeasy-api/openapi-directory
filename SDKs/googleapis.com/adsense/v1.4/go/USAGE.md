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
    res, err := s.Accounts.AdsenseAccountsAdclientsGetAdCode(ctx, operations.AdsenseAccountsAdclientsGetAdCodeRequest{
        AccountID: "corrupti",
        AdClientID: "provident",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        TagPartner: sdk.String("illum"),
        UserIP: sdk.String("vel"),
    }, operations.AdsenseAccountsAdclientsGetAdCodeSecurity{
        Option1: &operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdCode != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->