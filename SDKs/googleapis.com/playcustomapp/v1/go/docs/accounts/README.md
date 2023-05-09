# Accounts

### Available Operations

* [PlaycustomappAccountsCustomAppsCreate](#playcustomappaccountscustomappscreate) - Creates a new custom app.

## PlaycustomappAccountsCustomAppsCreate

Creates a new custom app.

### Example Usage

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
    res, err := s.Accounts.PlaycustomappAccountsCustomAppsCreate(ctx, operations.PlaycustomappAccountsCustomAppsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: []byte("magnam"),
        AccessToken: sdk.String("debitis"),
        Account: "ipsa",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.PlaycustomappAccountsCustomAppsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomApp != nil {
        // handle response
    }
}
```
