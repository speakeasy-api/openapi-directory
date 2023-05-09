# Refunds

### Available Operations

* [GetPaymentRefund](#getpaymentrefund) - GetPaymentRefund
* [ListPaymentRefunds](#listpaymentrefunds) - ListPaymentRefunds
* [RefundPayment](#refundpayment) - RefundPayment

## GetPaymentRefund

Retrieves a specific refund using the `refund_id`.

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
    res, err := s.Refunds.GetPaymentRefund(ctx, operations.GetPaymentRefundRequest{
        RefundID: "iure",
    }, operations.GetPaymentRefundSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPaymentRefundResponse != nil {
        // handle response
    }
}
```

## ListPaymentRefunds

Retrieves a list of refunds for the account making the request.

Results are eventually consistent, and new refunds or changes to refunds might take several
seconds to appear.

The maximum results per page is 100.

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
    res, err := s.Refunds.ListPaymentRefunds(ctx, operations.ListPaymentRefundsRequest{
        BeginTime: sdk.String("aspernatur"),
        Cursor: sdk.String("similique"),
        EndTime: sdk.String("ad"),
        Limit: sdk.Int64(60068),
        LocationID: sdk.String("voluptatum"),
        SortOrder: sdk.String("molestiae"),
        SourceType: sdk.String("sunt"),
        Status: sdk.String("at"),
    }, operations.ListPaymentRefundsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPaymentRefundsResponse != nil {
        // handle response
    }
}
```

## RefundPayment

Refunds a payment. You can refund the entire payment amount or a
portion of it. You can use this endpoint to refund a card payment or record a 
refund of a cash or external payment. For more information, see
[Refund Payment](https://developer.squareup.com/docs/payments-api/refund-payments).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Refunds.RefundPayment(ctx, shared.RefundPaymentRequest{
        AmountMoney: shared.Money{
            Amount: sdk.Int64(599722),
            Currency: sdk.String("provident"),
        },
        AppFeeMoney: &shared.Money{
            Amount: sdk.Int64(723045),
            Currency: sdk.String("voluptas"),
        },
        IdempotencyKey: "autem",
        PaymentID: "et",
        Reason: sdk.String("officia"),
    }, operations.RefundPaymentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RefundPaymentResponse != nil {
        // handle response
    }
}
```
