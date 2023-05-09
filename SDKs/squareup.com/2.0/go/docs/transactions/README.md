# Transactions

### Available Operations

* [CaptureTransaction](#capturetransaction) - CaptureTransaction
* [Charge](#charge) - Charge
* [ListTransactions](#listtransactions) - ListTransactions
* [RetrieveTransaction](#retrievetransaction) - RetrieveTransaction
* [VoidTransaction](#voidtransaction) - VoidTransaction
* [GetV2LocationsLocationIDRefunds](#getv2locationslocationidrefunds) - ListRefunds
* [PostV2LocationsLocationIDTransactionsTransactionIDRefund](#postv2locationslocationidtransactionstransactionidrefund) - CreateRefund

## CaptureTransaction

Captures a transaction that was created with the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge)
endpoint with a `delay_capture` value of `true`.


See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transactions.CaptureTransaction(ctx, operations.CaptureTransactionRequest{
        LocationID: "facere",
        TransactionID: "temporibus",
    }, operations.CaptureTransactionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CaptureTransactionResponse != nil {
        // handle response
    }
}
```

## Charge

Charges a card represented by a card nonce or a customer's card on file.

Your request to this endpoint must include _either_:

- A value for the `card_nonce` parameter (to charge a card payment token generated
with the Web Payments SDK)
- Values for the `customer_card_id` and `customer_id` parameters (to charge
a customer's card on file)

In order for an eCommerce payment to potentially qualify for
[Square chargeback protection](https://squareup.com/help/article/5394), you
_must_ provide values for the following parameters in your request:

- `buyer_email_address`
- At least one of `billing_address` or `shipping_address`

When this response is returned, the amount of Square's processing fee might not yet be
calculated. To obtain the processing fee, wait about ten seconds and call
[RetrieveTransaction](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/retrieve-transaction). See the `processing_fee_money`
field of each [Tender included](https://developer.squareup.com/reference/square_2021-08-18/objects/Tender) in the transaction.

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
    res, err := s.Transactions.Charge(ctx, operations.ChargeRequest{
        ChargeRequest: shared.ChargeRequest{
            AdditionalRecipients: []shared.AdditionalRecipient{
                shared.AdditionalRecipient{
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(457760),
                        Currency: sdk.String("officiis"),
                    },
                    Description: sdk.String("voluptas"),
                    LocationID: "excepturi",
                    ReceivableID: sdk.String("rerum"),
                },
                shared.AdditionalRecipient{
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(370137),
                        Currency: sdk.String("neque"),
                    },
                    Description: sdk.String("quis"),
                    LocationID: "illo",
                    ReceivableID: sdk.String("sit"),
                },
                shared.AdditionalRecipient{
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(366026),
                        Currency: sdk.String("consequatur"),
                    },
                    Description: sdk.String("quis"),
                    LocationID: "aperiam",
                    ReceivableID: sdk.String("dicta"),
                },
                shared.AdditionalRecipient{
                    AmountMoney: shared.Money{
                        Amount: sdk.Int64(284389),
                        Currency: sdk.String("fugiat"),
                    },
                    Description: sdk.String("porro"),
                    LocationID: "est",
                    ReceivableID: sdk.String("et"),
                },
            },
            AmountMoney: shared.Money{
                Amount: sdk.Int64(25791),
                Currency: sdk.String("nemo"),
            },
            BillingAddress: &shared.Address{
                AddressLine1: sdk.String("atque"),
                AddressLine2: sdk.String("laudantium"),
                AddressLine3: sdk.String("sed"),
                AdministrativeDistrictLevel1: sdk.String("quaerat"),
                AdministrativeDistrictLevel2: sdk.String("laudantium"),
                AdministrativeDistrictLevel3: sdk.String("eius"),
                Country: sdk.String("Samoa"),
                FirstName: sdk.String("Daron"),
                LastName: sdk.String("Jerde"),
                Locality: sdk.String("debitis"),
                Organization: sdk.String("perspiciatis"),
                PostalCode: sdk.String("55514"),
                Sublocality: sdk.String("laudantium"),
                Sublocality2: sdk.String("magni"),
                Sublocality3: sdk.String("assumenda"),
            },
            BuyerEmailAddress: sdk.String("adipisci"),
            CardNonce: sdk.String("aliquam"),
            CustomerCardID: sdk.String("debitis"),
            CustomerID: sdk.String("sit"),
            DelayCapture: sdk.Bool(false),
            IdempotencyKey: "cum",
            Note: sdk.String("voluptatum"),
            OrderID: sdk.String("maiores"),
            ReferenceID: sdk.String("quo"),
            ShippingAddress: &shared.Address{
                AddressLine1: sdk.String("eaque"),
                AddressLine2: sdk.String("illum"),
                AddressLine3: sdk.String("enim"),
                AdministrativeDistrictLevel1: sdk.String("natus"),
                AdministrativeDistrictLevel2: sdk.String("sapiente"),
                AdministrativeDistrictLevel3: sdk.String("ad"),
                Country: sdk.String("Japan"),
                FirstName: sdk.String("Morton"),
                LastName: sdk.String("Mitchell"),
                Locality: sdk.String("asperiores"),
                Organization: sdk.String("excepturi"),
                PostalCode: sdk.String("10780-4505"),
                Sublocality: sdk.String("maxime"),
                Sublocality2: sdk.String("nesciunt"),
                Sublocality3: sdk.String("commodi"),
            },
            VerificationToken: sdk.String("nobis"),
        },
        LocationID: "cupiditate",
    }, operations.ChargeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChargeResponse != nil {
        // handle response
    }
}
```

## ListTransactions

Lists transactions for a particular location.

Transactions include payment information from sales and exchanges and refund
information from returns and exchanges.

Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transactions.ListTransactions(ctx, operations.ListTransactionsRequest{
        BeginTime: sdk.String("necessitatibus"),
        Cursor: sdk.String("consequuntur"),
        EndTime: sdk.String("maiores"),
        LocationID: "esse",
        SortOrder: sdk.String("sit"),
    }, operations.ListTransactionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTransactionsResponse != nil {
        // handle response
    }
}
```

## RetrieveTransaction

Retrieves details for a single transaction.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transactions.RetrieveTransaction(ctx, operations.RetrieveTransactionRequest{
        LocationID: "adipisci",
        TransactionID: "quaerat",
    }, operations.RetrieveTransactionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveTransactionResponse != nil {
        // handle response
    }
}
```

## VoidTransaction

Cancels a transaction that was created with the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge)
endpoint with a `delay_capture` value of `true`.


See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transactions.VoidTransaction(ctx, operations.VoidTransactionRequest{
        LocationID: "magnam",
        TransactionID: "recusandae",
    }, operations.VoidTransactionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoidTransactionResponse != nil {
        // handle response
    }
}
```

## GetV2LocationsLocationIDRefunds

Lists refunds for one of a business's locations.

In addition to full or partial tender refunds processed through Square APIs,
refunds may result from itemized returns or exchanges through Square's
Point of Sale applications.

Refunds with a `status` of `PENDING` are not currently included in this
endpoint's response.

Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transactions.GetV2LocationsLocationIDRefunds(ctx, operations.GetV2LocationsLocationIDRefundsRequest{
        BeginTime: sdk.String("accusantium"),
        Cursor: sdk.String("eaque"),
        EndTime: sdk.String("maiores"),
        LocationID: "tempora",
        SortOrder: sdk.String("reprehenderit"),
    }, operations.GetV2LocationsLocationIDRefundsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRefundsResponse != nil {
        // handle response
    }
}
```

## PostV2LocationsLocationIDTransactionsTransactionIDRefund

Initiates a refund for a previously charged tender.

You must issue a refund within 120 days of the associated payment. See
[this article](https://squareup.com/help/us/en/article/5060) for more information
on refund behavior.

NOTE: Card-present transactions with Interac credit cards **cannot be
refunded using the Connect API**. Interac transactions must refunded
in-person (e.g., dipping the card using POS app).

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
    res, err := s.Transactions.PostV2LocationsLocationIDTransactionsTransactionIDRefund(ctx, operations.PostV2LocationsLocationIDTransactionsTransactionIDRefundRequest{
        CreateRefundRequest: shared.CreateRefundRequest{
            AmountMoney: shared.Money{
                Amount: sdk.Int64(533389),
                Currency: sdk.String("saepe"),
            },
            IdempotencyKey: "cum",
            Reason: sdk.String("ad"),
            TenderID: "amet",
        },
        LocationID: "error",
        TransactionID: "magnam",
    }, operations.PostV2LocationsLocationIDTransactionsTransactionIDRefundSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRefundResponse != nil {
        // handle response
    }
}
```
