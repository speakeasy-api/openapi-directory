# Orderreports

### Available Operations

* [ContentOrderreportsListdisbursements](#contentorderreportslistdisbursements) - Retrieves a report for disbursements from your Merchant Center account.
* [ContentOrderreportsListtransactions](#contentorderreportslisttransactions) - Retrieves a list of transactions for a disbursement from your Merchant Center account.

## ContentOrderreportsListdisbursements

Retrieves a report for disbursements from your Merchant Center account.

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
    res, err := s.Orderreports.ContentOrderreportsListdisbursements(ctx, operations.ContentOrderreportsListdisbursementsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quod"),
        DisbursementEndDate: sdk.String("itaque"),
        DisbursementStartDate: sdk.String("a"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("enim"),
        MaxResults: sdk.Int64(987759),
        MerchantID: "assumenda",
        OauthToken: sdk.String("officiis"),
        PageToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.ContentOrderreportsListdisbursementsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderreportsListDisbursementsResponse != nil {
        // handle response
    }
}
```

## ContentOrderreportsListtransactions

Retrieves a list of transactions for a disbursement from your Merchant Center account.

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
    res, err := s.Orderreports.ContentOrderreportsListtransactions(ctx, operations.ContentOrderreportsListtransactionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dicta"),
        DisbursementID: "vel",
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("debitis"),
        MaxResults: sdk.Int64(354821),
        MerchantID: "architecto",
        OauthToken: sdk.String("accusantium"),
        PageToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        TransactionEndDate: sdk.String("provident"),
        TransactionStartDate: sdk.String("cumque"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.ContentOrderreportsListtransactionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderreportsListTransactionsResponse != nil {
        // handle response
    }
}
```
