# Externaltransactions

### Available Operations

* [AndroidpublisherExternaltransactionsCreateexternaltransaction](#androidpublisherexternaltransactionscreateexternaltransaction) - Creates a new external transaction.
* [AndroidpublisherExternaltransactionsGetexternaltransaction](#androidpublisherexternaltransactionsgetexternaltransaction) - Gets an existing external transaction.
* [AndroidpublisherExternaltransactionsRefundexternaltransaction](#androidpublisherexternaltransactionsrefundexternaltransaction) - Refunds or partially refunds an existing external transaction.

## AndroidpublisherExternaltransactionsCreateexternaltransaction

Creates a new external transaction.

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
    res, err := s.Externaltransactions.AndroidpublisherExternaltransactionsCreateexternaltransaction(ctx, operations.AndroidpublisherExternaltransactionsCreateexternaltransactionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExternalTransactionInput: &shared.ExternalTransactionInput{
            CurrentPreTaxAmount: &shared.Price{
                Currency: sdk.String("minus"),
                PriceMicros: sdk.String("nemo"),
            },
            CurrentTaxAmount: &shared.Price{
                Currency: sdk.String("asperiores"),
                PriceMicros: sdk.String("ratione"),
            },
            OneTimeTransaction: &shared.OneTimeExternalTransaction{
                ExternalTransactionToken: sdk.String("ullam"),
            },
            OriginalPreTaxAmount: &shared.Price{
                Currency: sdk.String("perferendis"),
                PriceMicros: sdk.String("illum"),
            },
            OriginalTaxAmount: &shared.Price{
                Currency: sdk.String("totam"),
                PriceMicros: sdk.String("impedit"),
            },
            RecurringTransaction: &shared.RecurringExternalTransaction{
                ExternalSubscription: &shared.ExternalSubscription{
                    SubscriptionType: shared.ExternalSubscriptionSubscriptionTypeEnumPrepaid.ToPointer(),
                },
                ExternalTransactionToken: sdk.String("nam"),
                InitialExternalTransactionID: sdk.String("ipsam"),
            },
            TestPurchase: map[string]interface{}{
                "dolor": "aliquam",
                "inventore": "deleniti",
                "veritatis": "tempora",
            },
            TransactionTime: sdk.String("dolor"),
            UserTaxAddress: &shared.ExternalTransactionAddress{
                RegionCode: sdk.String("consequatur"),
            },
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        ExternalTransactionID: sdk.String("fugit"),
        Fields: sdk.String("ab"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("quae"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.AndroidpublisherExternaltransactionsCreateexternaltransactionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalTransaction != nil {
        // handle response
    }
}
```

## AndroidpublisherExternaltransactionsGetexternaltransaction

Gets an existing external transaction.

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
    res, err := s.Externaltransactions.AndroidpublisherExternaltransactionsGetexternaltransaction(ctx, operations.AndroidpublisherExternaltransactionsGetexternaltransactionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("esse"),
        Name: "Aaron Hartmann",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.AndroidpublisherExternaltransactionsGetexternaltransactionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalTransaction != nil {
        // handle response
    }
}
```

## AndroidpublisherExternaltransactionsRefundexternaltransaction

Refunds or partially refunds an existing external transaction.

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
    res, err := s.Externaltransactions.AndroidpublisherExternaltransactionsRefundexternaltransaction(ctx, operations.AndroidpublisherExternaltransactionsRefundexternaltransactionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RefundExternalTransactionRequest: &shared.RefundExternalTransactionRequest{
            FullRefund: map[string]interface{}{
                "porro": "autem",
            },
            PartialRefund: &shared.PartialRefund{
                RefundID: sdk.String("nobis"),
                RefundPreTaxAmount: &shared.Price{
                    Currency: sdk.String("laboriosam"),
                    PriceMicros: sdk.String("recusandae"),
                },
            },
            RefundTime: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("nisi"),
        Name: "Caleb Orn",
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.AndroidpublisherExternaltransactionsRefundexternaltransactionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalTransaction != nil {
        // handle response
    }
}
```
