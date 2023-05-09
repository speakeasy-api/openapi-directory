# Terminal

### Available Operations

* [CancelTerminalCheckout](#cancelterminalcheckout) - CancelTerminalCheckout
* [CancelTerminalRefund](#cancelterminalrefund) - CancelTerminalRefund
* [CreateTerminalCheckout](#createterminalcheckout) - CreateTerminalCheckout
* [CreateTerminalRefund](#createterminalrefund) - CreateTerminalRefund
* [GetTerminalCheckout](#getterminalcheckout) - GetTerminalCheckout
* [GetTerminalRefund](#getterminalrefund) - GetTerminalRefund
* [SearchTerminalCheckouts](#searchterminalcheckouts) - SearchTerminalCheckouts
* [SearchTerminalRefunds](#searchterminalrefunds) - SearchTerminalRefunds

## CancelTerminalCheckout

Cancels a Terminal checkout request if the status of the request permits it.

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
    res, err := s.Terminal.CancelTerminalCheckout(ctx, operations.CancelTerminalCheckoutRequest{
        CheckoutID: "quaerat",
    }, operations.CancelTerminalCheckoutSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTerminalCheckoutResponse != nil {
        // handle response
    }
}
```

## CancelTerminalRefund

Cancels an Interac Terminal refund request by refund request ID if the status of the request permits it.

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
    res, err := s.Terminal.CancelTerminalRefund(ctx, operations.CancelTerminalRefundRequest{
        TerminalRefundID: "adipisci",
    }, operations.CancelTerminalRefundSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTerminalRefundResponse != nil {
        // handle response
    }
}
```

## CreateTerminalCheckout

Creates a Terminal checkout request and sends it to the specified device to take a payment
for the requested amount.

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
    res, err := s.Terminal.CreateTerminalCheckout(ctx, shared.CreateTerminalCheckoutRequest{
        Checkout: shared.TerminalCheckout{
            AmountMoney: shared.Money{
                Amount: sdk.Int64(804998),
                Currency: sdk.String("distinctio"),
            },
            AppID: sdk.String("numquam"),
            CancelReason: sdk.String("voluptas"),
            CreatedAt: sdk.String("aspernatur"),
            DeadlineDuration: sdk.String("possimus"),
            DeviceOptions: shared.DeviceCheckoutOptions{
                DeviceID: "aliquid",
                SkipReceiptScreen: sdk.Bool(false),
                TipSettings: &shared.TipSettings{
                    AllowTipping: sdk.Bool(false),
                    CustomTipField: sdk.Bool(false),
                    SeparateTipScreen: sdk.Bool(false),
                    SmartTipping: sdk.Bool(false),
                    TipPercentages: []int64{
                        793978,
                        585987,
                        586909,
                    },
                },
            },
            ID: sdk.String("17f98e47-92b9-479a-813d-6a8c91683bd8"),
            LocationID: sdk.String("iure"),
            Note: sdk.String("architecto"),
            PaymentIds: []string{
                "quae",
                "quibusdam",
                "natus",
                "molestias",
            },
            PaymentType: sdk.String("quod"),
            ReferenceID: sdk.String("quo"),
            Status: sdk.String("repellat"),
            UpdatedAt: sdk.String("voluptatum"),
        },
        IdempotencyKey: "excepturi",
    }, operations.CreateTerminalCheckoutSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTerminalCheckoutResponse != nil {
        // handle response
    }
}
```

## CreateTerminalRefund

Creates a request to refund an Interac payment completed on a Square Terminal.

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
    res, err := s.Terminal.CreateTerminalRefund(ctx, shared.CreateTerminalRefundRequest{
        IdempotencyKey: "illum",
        Refund: &shared.TerminalRefund{
            AmountMoney: shared.Money{
                Amount: sdk.Int64(229497),
                Currency: sdk.String("totam"),
            },
            AppID: sdk.String("ex"),
            CancelReason: sdk.String("quae"),
            CreatedAt: sdk.String("beatae"),
            DeadlineDuration: sdk.String("praesentium"),
            DeviceID: sdk.String("commodi"),
            ID: sdk.String("ed76c002-facb-413a-824c-8143b866c575"),
            LocationID: sdk.String("officia"),
            OrderID: sdk.String("ab"),
            PaymentID: "recusandae",
            Reason: sdk.String("quia"),
            RefundID: sdk.String("iure"),
            Status: sdk.String("ex"),
            UpdatedAt: sdk.String("quos"),
        },
    }, operations.CreateTerminalRefundSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTerminalRefundResponse != nil {
        // handle response
    }
}
```

## GetTerminalCheckout

Retrieves a Terminal checkout request by `checkout_id`.

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
    res, err := s.Terminal.GetTerminalCheckout(ctx, operations.GetTerminalCheckoutRequest{
        CheckoutID: "ducimus",
    }, operations.GetTerminalCheckoutSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTerminalCheckoutResponse != nil {
        // handle response
    }
}
```

## GetTerminalRefund

Retrieves an Interac Terminal refund object by ID.

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
    res, err := s.Terminal.GetTerminalRefund(ctx, operations.GetTerminalRefundRequest{
        TerminalRefundID: "ratione",
    }, operations.GetTerminalRefundSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTerminalRefundResponse != nil {
        // handle response
    }
}
```

## SearchTerminalCheckouts

Retrieves a filtered list of Terminal checkout requests created by the account making the request.

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
    res, err := s.Terminal.SearchTerminalCheckouts(ctx, shared.SearchTerminalCheckoutsRequest{
        Cursor: sdk.String("accusantium"),
        Limit: sdk.Int64(693432),
        Query: &shared.TerminalCheckoutQuery{
            Filter: &shared.TerminalCheckoutQueryFilter{
                CreatedAt: &shared.TimeRange{
                    EndAt: sdk.String("accusamus"),
                    StartAt: sdk.String("dolorem"),
                },
                DeviceID: sdk.String("ducimus"),
                Status: sdk.String("harum"),
            },
            Sort: &shared.TerminalCheckoutQuerySort{
                SortOrder: sdk.String("sit"),
            },
        },
    }, operations.SearchTerminalCheckoutsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchTerminalCheckoutsResponse != nil {
        // handle response
    }
}
```

## SearchTerminalRefunds

Retrieves a filtered list of Interac Terminal refund requests created by the seller making the request.

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
    res, err := s.Terminal.SearchTerminalRefunds(ctx, shared.SearchTerminalRefundsRequest{
        Cursor: sdk.String("recusandae"),
        Limit: sdk.Int64(547912),
        Query: &shared.TerminalRefundQuery{
            Filter: &shared.TerminalRefundQueryFilter{
                CreatedAt: &shared.TimeRange{
                    EndAt: sdk.String("hic"),
                    StartAt: sdk.String("nam"),
                },
                DeviceID: sdk.String("quod"),
                Status: sdk.String("dolore"),
            },
            Sort: &shared.TerminalRefundQuerySort{
                SortOrder: sdk.String("atque"),
            },
        },
    }, operations.SearchTerminalRefundsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchTerminalRefundsResponse != nil {
        // handle response
    }
}
```
