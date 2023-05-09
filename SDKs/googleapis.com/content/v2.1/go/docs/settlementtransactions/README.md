# Settlementtransactions

### Available Operations

* [ContentSettlementtransactionsList](#contentsettlementtransactionslist) - Retrieves a list of transactions for the settlement.

## ContentSettlementtransactionsList

Retrieves a list of transactions for the settlement.

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
    res, err := s.Settlementtransactions.ContentSettlementtransactionsList(ctx, operations.ContentSettlementtransactionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("a"),
        MaxResults: sdk.Int64(10327),
        MerchantID: "voluptates",
        OauthToken: sdk.String("dolorum"),
        PageToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        SettlementID: "veritatis",
        TransactionIds: []string{
            "placeat",
            "libero",
        },
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.ContentSettlementtransactionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettlementtransactionsListResponse != nil {
        // handle response
    }
}
```
