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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        DisbursementEndDate: sdk.String("neque"),
        DisbursementStartDate: sdk.String("corporis"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("consequuntur"),
        MaxResults: sdk.Int64(641133),
        MerchantID: "reprehenderit",
        OauthToken: sdk.String("distinctio"),
        PageToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("maiores"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("neque"),
        DisbursementID: "facere",
        Fields: sdk.String("aliquam"),
        Key: sdk.String("quos"),
        MaxResults: sdk.Int64(984773),
        MerchantID: "fugiat",
        OauthToken: sdk.String("est"),
        PageToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        TransactionEndDate: sdk.String("vitae"),
        TransactionStartDate: sdk.String("nesciunt"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("illo"),
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
