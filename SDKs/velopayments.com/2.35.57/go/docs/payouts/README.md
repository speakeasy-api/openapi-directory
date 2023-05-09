# Payouts

## Overview

<p>Payout APIs allow you to create and instruct payouts to payees</p>
<p>There are three phases to a payout:</p>
<ul>
    <li>Submit - the payments are created within the platform</li>
    <li>Quote - optional step if FX is involved</li>
    <li>Instruct - the payments are sent to the payment rails for processing</li>
</ul>
<p>Between 1 and 2000 payments can be created within the platform as part of a Payout</p>


### Available Operations

* [CreateQuoteForPayoutV3](#createquoteforpayoutv3) - Create a quote for the payout
* [DeschedulePayout](#deschedulepayout) - Deschedule a payout
* [GetPaymentsForPayoutV3](#getpaymentsforpayoutv3) - Retrieve payments for a payout
* [GetPayoutSummaryV3](#getpayoutsummaryv3) - Get Payout Summary
* [InstructPayoutV3](#instructpayoutv3) - Instruct Payout
* [ScheduleForPayout](#scheduleforpayout) - Schedule a payout
* [SubmitPayoutV3JSON](#submitpayoutv3json) - Submit Payout
* [SubmitPayoutV3Multipart](#submitpayoutv3multipart) - Submit Payout
* [WithdrawPayment](#withdrawpayment) - Withdraw a Payment
* [WithdrawPayoutV3](#withdrawpayoutv3) - Withdraw Payout

## CreateQuoteForPayoutV3

Create quote for a payout

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payouts.CreateQuoteForPayoutV3(ctx, operations.CreateQuoteForPayoutV3Request{
        PayoutID: "b85efbd0-2bae-40be-ad78-2259e3ea4b51",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuoteResponseV3 != nil {
        // handle response
    }
}
```

## DeschedulePayout

Remove the schedule for a scheduled payout

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payouts.DeschedulePayout(ctx, operations.DeschedulePayoutRequest{
        PayoutID: "97f92443-da7c-4e52-b895-c537c6454efb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPaymentsForPayoutV3

Retrieve payments for a payout

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payouts.GetPaymentsForPayoutV3(ctx, operations.GetPaymentsForPayoutV3Request{
        Page: sdk.Int(46013),
        PageSize: sdk.Int(727547),
        PaymentMemo: sdk.String("ratione"),
        PayorPaymentID: sdk.String("labore"),
        PayoutID: "896c3ca5-acfb-4e2f-9570-7577929177de",
        RemoteID: sdk.String("similique"),
        SourceAccountName: sdk.String("optio"),
        Status: operations.GetPaymentsForPayoutV3StatusEnumRejected.ToPointer(),
        TransmissionType: operations.GetPaymentsForPayoutV3TransmissionTypeEnumAch.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedPaymentsResponseV3 != nil {
        // handle response
    }
}
```

## GetPayoutSummaryV3

Get payout summary - returns the current state of the payout.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payouts.GetPayoutSummaryV3(ctx, operations.GetPayoutSummaryV3Request{
        PayoutID: "6ecb5734-09e3-4eb1-a5a2-b12eb07f116d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayoutSummaryResponseV3 != nil {
        // handle response
    }
}
```

## InstructPayoutV3

Instruct a payout to be made for the specified payoutId.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payouts.InstructPayoutV3(ctx, operations.InstructPayoutV3Request{
        InstructPayoutRequestV3: &shared.InstructPayoutRequestV3{
            FxRateDegredationThresholdPercentage: sdk.Float32(7294.48),
        },
        PayoutID: "99545fc9-5fa8-4897-8e18-9dbb30fcb33e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ScheduleForPayout

<p>Schedule a payout for auto-instruction in the future
or update existing payout schedule if the payout has been scheduled before.</p>


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payouts.ScheduleForPayout(ctx, operations.ScheduleForPayoutRequest{
        SchedulePayoutRequestV3: &shared.SchedulePayoutRequestV3{
            NotificationsEnabled: false,
            ScheduledFor: types.MustTimeFromString("2025-01-01T10:00:00Z"),
        },
        PayoutID: "a055b197-cd44-4e2f-92d8-2d3513bb6f48",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubmitPayoutV3JSON

<p>Create a new payout and return a location header with a link to the payout</p>
<p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>
<p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>
<p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payouts.SubmitPayoutV3JSON(ctx, shared.CreatePayoutRequestV3{
        Payments: []shared.PaymentInstructionV3{
            shared.PaymentInstructionV3{
                Amount: 1299,
                Currency: "USD",
                PaymentMemo: sdk.String("my memo"),
                PaymentMetadata: sdk.String("invoiceeId_123|abc001:12345|xyz002:4567"),
                PayorPaymentID: sdk.String("123211321ABSD"),
                RemoteID: "remoteId1234",
                RemoteSystemID: sdk.String("nisi"),
                SourceAccountName: "MyAccountName",
                TransmissionType: shared.PaymentInstructionV3TransmissionTypeEnumAch.ToPointer(),
            },
            shared.PaymentInstructionV3{
                Amount: 1299,
                Currency: "USD",
                PaymentMemo: sdk.String("my memo"),
                PaymentMetadata: sdk.String("invoiceeId_123|abc001:12345|xyz002:4567"),
                PayorPaymentID: sdk.String("123211321ABSD"),
                RemoteID: "remoteId1234",
                RemoteSystemID: sdk.String("quis"),
                SourceAccountName: "MyAccountName",
                TransmissionType: shared.PaymentInstructionV3TransmissionTypeEnumAch.ToPointer(),
            },
            shared.PaymentInstructionV3{
                Amount: 1299,
                Currency: "USD",
                PaymentMemo: sdk.String("my memo"),
                PaymentMetadata: sdk.String("invoiceeId_123|abc001:12345|xyz002:4567"),
                PayorPaymentID: sdk.String("123211321ABSD"),
                RemoteID: "remoteId1234",
                RemoteSystemID: sdk.String("nisi"),
                SourceAccountName: "MyAccountName",
                TransmissionType: shared.PaymentInstructionV3TransmissionTypeEnumAch.ToPointer(),
            },
        },
        PayoutFromPayorID: sdk.String("c4261044-13df-4a6c-b1d4-fa8be2b46f5a"),
        PayoutMemo: sdk.String("Monthly Payment"),
        PayoutToPayorID: sdk.String("9afc6b39-de12-466a-a9ca-07c7a23b312d"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubmitPayoutV3Multipart

<p>Create a new payout and return a location header with a link to the payout</p>
<p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>
<p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>
<p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payouts.SubmitPayoutV3Multipart(ctx, operations.SubmitPayoutV3MultipartFormData{
        File: []shared.PaymentInstructionV3{
            shared.PaymentInstructionV3{
                Amount: 1299,
                Currency: "USD",
                PaymentMemo: sdk.String("my memo"),
                PaymentMetadata: sdk.String("invoiceeId_123|abc001:12345|xyz002:4567"),
                PayorPaymentID: sdk.String("123211321ABSD"),
                RemoteID: "remoteId1234",
                RemoteSystemID: sdk.String("minus"),
                SourceAccountName: "MyAccountName",
                TransmissionType: shared.PaymentInstructionV3TransmissionTypeEnumAch.ToPointer(),
            },
            shared.PaymentInstructionV3{
                Amount: 1299,
                Currency: "USD",
                PaymentMemo: sdk.String("my memo"),
                PaymentMetadata: sdk.String("invoiceeId_123|abc001:12345|xyz002:4567"),
                PayorPaymentID: sdk.String("123211321ABSD"),
                RemoteID: "remoteId1234",
                RemoteSystemID: sdk.String("facere"),
                SourceAccountName: "MyAccountName",
                TransmissionType: shared.PaymentInstructionV3TransmissionTypeEnumAch.ToPointer(),
            },
            shared.PaymentInstructionV3{
                Amount: 1299,
                Currency: "USD",
                PaymentMemo: sdk.String("my memo"),
                PaymentMetadata: sdk.String("invoiceeId_123|abc001:12345|xyz002:4567"),
                PayorPaymentID: sdk.String("123211321ABSD"),
                RemoteID: "remoteId1234",
                RemoteSystemID: sdk.String("facilis"),
                SourceAccountName: "MyAccountName",
                TransmissionType: shared.PaymentInstructionV3TransmissionTypeEnumAch.ToPointer(),
            },
        },
        PayorID: sdk.String("35ff2e4b-2753-47a8-8d9e-7319c177d525"),
        PayoutFromPayorID: sdk.String("f77b114e-eb52-4ff7-85fc-37814d4c98e0"),
        PayoutToPayorID: sdk.String("c2bb89eb-75da-4d63-ac60-0503d8bb3118"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## WithdrawPayment

<p>withdraw a payment </p>
<p>There are a variety of reasons why this can fail</p>
<ul>
    <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
    <li>the payout must not be in a state of 'instructed'</li>
</ul>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payouts.WithdrawPayment(ctx, operations.WithdrawPaymentRequest{
        WithdrawPaymentRequest: shared.WithdrawPaymentRequest{
            Reason: "Payment submitted in error",
        },
        PaymentID: "0f739ae9-e057-4eb8-89e2-810331f3981d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## WithdrawPayoutV3

Withdraw Payout will remove the payout details from the rails but the payout will still be accessible in payout service in WITHDRAWN status.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payouts.WithdrawPayoutV3(ctx, operations.WithdrawPayoutV3Request{
        PayoutID: "4c700b60-7f3c-493c-b3b9-da3f2ceda7e2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
