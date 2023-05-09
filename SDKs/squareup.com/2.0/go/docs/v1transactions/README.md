# V1Transactions

### Available Operations

* [CreateRefund](#createrefund) - CreateRefund
* [ListOrders](#listorders) - ListOrders
* [ListPayments](#listpayments) - ListPayments
* [ListRefunds](#listrefunds) - ListRefunds
* [ListSettlements](#listsettlements) - ListSettlements
* [RetrieveOrder](#retrieveorder) - RetrieveOrder
* [RetrievePayment](#retrievepayment) - RetrievePayment
* [RetrieveSettlement](#retrievesettlement) - RetrieveSettlement
* [UpdateOrder](#updateorder) - UpdateOrder

## CreateRefund

Issues a refund for a previously processed payment. You must issue
a refund within 60 days of the associated payment.

You cannot issue a partial refund for a split tender payment. You must
instead issue a full or partial refund for a particular tender, by
providing the applicable tender id to the V1CreateRefund endpoint.
Issuing a full refund for a split tender payment refunds all tenders
associated with the payment.

Issuing a refund for a card payment is not reversible. For development
purposes, you can create fake cash payments in Square Point of Sale and
refund them.

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
    res, err := s.V1Transactions.CreateRefund(ctx, operations.CreateRefundRequest{
        V1CreateRefundRequest: shared.V1CreateRefundRequest{
            PaymentID: "ipsum",
            Reason: "corrupti",
            RefundedMoney: &shared.V1Money{
                Amount: sdk.Int64(12940),
                CurrencyCode: sdk.String("iste"),
            },
            RequestIdempotenceKey: sdk.String("deserunt"),
            Type: "aut",
        },
        LocationID: "dolores",
    }, operations.CreateRefundSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Refund != nil {
        // handle response
    }
}
```

## ListOrders

Provides summary information for a merchant's online store orders.

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
    res, err := s.V1Transactions.ListOrders(ctx, operations.ListOrdersRequest{
        BatchToken: sdk.String("doloribus"),
        Limit: sdk.Int64(61706),
        LocationID: "eum",
        Order: sdk.String("itaque"),
    }, operations.ListOrdersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Orders != nil {
        // handle response
    }
}
```

## ListPayments

Provides summary information for all payments taken for a given
Square account during a date range. Date ranges cannot exceed 1 year in
length. See Date ranges for details of inclusive and exclusive dates.

*Note**: Details for payments processed with Square Point of Sale while
in offline mode may not be transmitted to Square for up to 72 hours.
Offline payments have a `created_at` value that reflects the time the
payment was originally processed, not the time it was subsequently
transmitted to Square. Consequently, the ListPayments endpoint might
list an offline payment chronologically between online payments that
were seen in a previous request.

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
    res, err := s.V1Transactions.ListPayments(ctx, operations.ListPaymentsRequest{
        BatchToken: sdk.String("unde"),
        BeginTime: sdk.String("sed"),
        EndTime: sdk.String("qui"),
        IncludePartial: sdk.Bool(false),
        Limit: sdk.Int64(520049),
        LocationID: "cum",
        Order: sdk.String("nemo"),
    }, operations.ListPaymentsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Payments != nil {
        // handle response
    }
}
```

## ListRefunds

Provides the details for all refunds initiated by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length.

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
    res, err := s.V1Transactions.ListRefunds(ctx, operations.ListRefundsRequest{
        BatchToken: sdk.String("ex"),
        BeginTime: sdk.String("aperiam"),
        EndTime: sdk.String("nisi"),
        Limit: sdk.Int64(314354),
        LocationID: "similique",
        Order: sdk.String("exercitationem"),
    }, operations.ListRefundsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Refunds != nil {
        // handle response
    }
}
```

## ListSettlements

Provides summary information for all deposits and withdrawals
initiated by Square to a linked bank account during a date range. Date
ranges cannot exceed one year in length.

*Note**: the ListSettlements endpoint does not provide entry
information.

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
    res, err := s.V1Transactions.ListSettlements(ctx, operations.ListSettlementsRequest{
        BatchToken: sdk.String("voluptatem"),
        BeginTime: sdk.String("dignissimos"),
        EndTime: sdk.String("numquam"),
        Limit: sdk.Int64(706735),
        LocationID: "officiis",
        Order: sdk.String("repellat"),
        Status: sdk.String("cum"),
    }, operations.ListSettlementsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Settlements != nil {
        // handle response
    }
}
```

## RetrieveOrder

Provides comprehensive information for a single online store order, including the order's history.

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
    res, err := s.V1Transactions.RetrieveOrder(ctx, operations.RetrieveOrderRequest{
        LocationID: "totam",
        OrderID: "laborum",
    }, operations.RetrieveOrderSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Order != nil {
        // handle response
    }
}
```

## RetrievePayment

Provides comprehensive information for a single payment.

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
    res, err := s.V1Transactions.RetrievePayment(ctx, operations.RetrievePaymentRequest{
        LocationID: "hic",
        PaymentID: "eum",
    }, operations.RetrievePaymentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Payment != nil {
        // handle response
    }
}
```

## RetrieveSettlement

Provides comprehensive information for a single settlement.

The returned `Settlement` objects include an `entries` field that lists
the transactions that contribute to the settlement total. Most
settlement entries correspond to a payment payout, but settlement
entries are also generated for less common events, like refunds, manual
adjustments, or chargeback holds.

Square initiates its regular deposits as indicated in the
[Deposit Options with Square](https://squareup.com/help/us/en/article/3807)
help article. Details for a regular deposit are usually not available
from Connect API endpoints before 10 p.m. PST the same day.

Square does not know when an initiated settlement **completes**, only
whether it has failed. A completed settlement is typically reflected in
a bank account within 3 business days, but in exceptional cases it may
take longer.

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
    res, err := s.V1Transactions.RetrieveSettlement(ctx, operations.RetrieveSettlementRequest{
        LocationID: "rem",
        SettlementID: "ut",
    }, operations.RetrieveSettlementSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Settlement != nil {
        // handle response
    }
}
```

## UpdateOrder

Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:

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
    res, err := s.V1Transactions.UpdateOrder(ctx, operations.UpdateOrderRequest{
        V1UpdateOrderRequest: shared.V1UpdateOrderRequest{
            Action: "perspiciatis",
            CanceledNote: sdk.String("possimus"),
            CompletedNote: sdk.String("odit"),
            RefundedNote: sdk.String("harum"),
            ShippedTrackingNumber: sdk.String("excepturi"),
        },
        LocationID: "iste",
        OrderID: "eius",
    }, operations.UpdateOrderSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Order != nil {
        // handle response
    }
}
```
