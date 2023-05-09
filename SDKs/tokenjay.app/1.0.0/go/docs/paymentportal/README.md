# PaymentPortal

## Overview

ErgoPay payment portal

### Available Operations

* [AddPaymentRequest](#addpaymentrequest) - Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code
* [GetPaymentState](#getpaymentstate) - Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

## AddPaymentRequest

Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentPortal.AddPaymentRequest(ctx, shared.CreatePaymentRequest{
        Message: sdk.String("sed"),
        NanoErg: 612096,
        ReceiverAddress: "dolor",
        SenderAddress: sdk.String("natus"),
        TokenID: sdk.String("laboriosam"),
        TokenRawAmount: sdk.Int64(943749),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPaymentState

Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

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
    res, err := s.PaymentPortal.GetPaymentState(ctx, operations.GetPaymentStateRequest{
        RequestID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
