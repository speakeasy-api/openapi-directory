# PaymentAuditService

## Overview

Payment Audit Service APIs allow you to see the history of fundings, payouts, and payments to payees.

### Available Operations

* [ExportTransactionsCsvv4](#exporttransactionscsvv4) - Export Transactions
* [GetFundingsV4](#getfundingsv4) - Get Fundings for Payor
* [GetPaymentDetailsV4](#getpaymentdetailsv4) - Get Payment
* [GetPaymentsForPayoutV4](#getpaymentsforpayoutv4) - Get Payments for Payout
* [GetPayoutStatsV4](#getpayoutstatsv4) - Get Payout Statistics
* [GetPayoutsForPayorV4](#getpayoutsforpayorv4) - Get Payouts for Payor
* [ListPaymentChangesV4](#listpaymentchangesv4) - List Payment Changes
* [ListPaymentsAuditV4](#listpaymentsauditv4) - Get List of Payments

## ExportTransactionsCsvv4

Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PaymentAuditService.ExportTransactionsCsvv4(ctx, operations.ExportTransactionsCsvv4Request{
        EndDate: types.MustDateFromString("2022-04-10"),
        Include: operations.ExportTransactionsCsvv4IncludeEnumPayorOnly.ToPointer(),
        PayorID: sdk.String("44290747-4778-4a7b-9466-d28c10ab3cdc"),
        StartDate: types.MustDateFromString("2022-06-25"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFundingsV4

<p>Get a list of Fundings for a payor.</p>


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
    res, err := s.PaymentAuditService.GetFundingsV4(ctx, operations.GetFundingsV4Request{
        Page: sdk.Int(178367),
        PageSize: sdk.Int(373813),
        PayorID: "1904e523-c7e0-4bc7-978e-4796f2a70c68",
        Sort: sdk.String("praesentium"),
        SourceAccountName: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFundingsResponse != nil {
        // handle response
    }
}
```

## GetPaymentDetailsV4

Get the payment with the given id. This contains the payment history.


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
    res, err := s.PaymentAuditService.GetPaymentDetailsV4(ctx, operations.GetPaymentDetailsV4Request{
        PaymentID: "82aa4825-62f2-422e-9817-ee17cbe61e6b",
        Sensitive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentResponseV4 != nil {
        // handle response
    }
}
```

## GetPaymentsForPayoutV4

Get List of payments for Payout, allowing for RETURNED status


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PaymentAuditService.GetPaymentsForPayoutV4(ctx, operations.GetPaymentsForPayoutV4Request{
        Page: sdk.Int(473221),
        PageSize: sdk.Int(699622),
        PaymentAmountFrom: sdk.Int(580197),
        PaymentAmountTo: sdk.Int(327720),
        PayoutID: "bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1",
        RailsID: sdk.String("consequuntur"),
        RemoteID: sdk.String("quasi"),
        RemoteSystemID: sdk.String("similique"),
        Sensitive: sdk.Bool(false),
        Sort: sdk.String("culpa"),
        SourceAmountFrom: sdk.Int(398434),
        SourceAmountTo: sdk.Int(949298),
        Status: operations.GetPaymentsForPayoutV4StatusEnumAccepted.ToPointer(),
        SubmittedDateFrom: types.MustDateFromString("2021-09-23"),
        SubmittedDateTo: types.MustDateFromString("2022-09-28"),
        TransmissionType: operations.GetPaymentsForPayoutV4TransmissionTypeEnumLocal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPaymentsForPayoutResponseV4 != nil {
        // handle response
    }
}
```

## GetPayoutStatsV4

<p>Get payout statistics for a payor.</p>


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
    res, err := s.PaymentAuditService.GetPayoutStatsV4(ctx, operations.GetPayoutStatsV4Request{
        PayorID: sdk.String("db04f157-5608-42d6-8ea1-9f1d17051339"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPayoutStatistics != nil {
        // handle response
    }
}
```

## GetPayoutsForPayorV4

Get List of payouts for payor


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PaymentAuditService.GetPayoutsForPayorV4(ctx, operations.GetPayoutsForPayorV4Request{
        FromPayorName: sdk.String("temporibus"),
        Page: sdk.Int(33074),
        PageSize: sdk.Int(522371),
        PayorID: sdk.String("086a1840-394c-4260-b1f9-3f5f0642dac7"),
        PayoutMemo: sdk.String("officia"),
        ScheduleStatus: operations.GetPayoutsForPayorV4ScheduleStatusEnumFailed.ToPointer(),
        ScheduledForDateFrom: types.MustDateFromString("2022-12-08"),
        ScheduledForDateTo: types.MustDateFromString("2022-03-21"),
        Sort: sdk.String("quod"),
        Status: operations.GetPayoutsForPayorV4StatusEnumSubmitted.ToPointer(),
        SubmittedDateFrom: types.MustDateFromString("2022-10-04"),
        SubmittedDateTo: types.MustDateFromString("2021-09-04"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPayoutsResponse != nil {
        // handle response
    }
}
```

## ListPaymentChangesV4

Get a paginated response listing payment changes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PaymentAuditService.ListPaymentChangesV4(ctx, operations.ListPaymentChangesV4Request{
        Page: sdk.Int(380729),
        PageSize: sdk.Int(246063),
        PayorID: "aae8d678-64db-4b67-9fd5-e60b375ed4f6",
        UpdatedSince: types.MustTimeFromString("2020-11-28T15:07:06.228Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentDeltaResponse != nil {
        // handle response
    }
}
```

## ListPaymentsAuditV4

Get payments for the given payor Id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PaymentAuditService.ListPaymentsAuditV4(ctx, operations.ListPaymentsAuditV4Request{
        Page: sdk.Int(904949),
        PageSize: sdk.Int(897071),
        PayeeID: sdk.String("41f33317-fe35-4b60-ab1e-a426555ba3c2"),
        PaymentAmountFrom: sdk.Int(503934),
        PaymentAmountTo: sdk.Int(449292),
        PaymentCurrency: sdk.String("dolore"),
        PaymentMemo: sdk.String("aliquam"),
        PayorID: sdk.String("ed53b88f-3a8d-48f5-80b2-f2fb7b194a27"),
        PayorName: sdk.String("commodi"),
        PostInstructFxStatus: operations.ListPaymentsAuditV4PostInstructFxStatusEnumReturned.ToPointer(),
        RailsID: sdk.String("explicabo"),
        RemoteID: sdk.String("voluptas"),
        RemoteSystemID: sdk.String("unde"),
        ScheduleStatus: operations.ListPaymentsAuditV4ScheduleStatusEnumAny.ToPointer(),
        ScheduledForDateFrom: types.MustDateFromString("2022-01-15"),
        ScheduledForDateTo: types.MustDateFromString("2022-10-13"),
        Sensitive: sdk.Bool(false),
        Sort: sdk.String("reiciendis"),
        SourceAccountName: sdk.String("perferendis"),
        SourceAmountFrom: sdk.Int(546885),
        SourceAmountTo: sdk.Int(979574),
        SourceCurrency: sdk.String("incidunt"),
        Status: operations.ListPaymentsAuditV4StatusEnumAwaitingFunds.ToPointer(),
        SubmittedDateFrom: types.MustDateFromString("2022-06-26"),
        SubmittedDateTo: types.MustDateFromString("2022-05-09"),
        TransmissionType: operations.ListPaymentsAuditV4TransmissionTypeEnumWire.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPaymentsResponseV4 != nil {
        // handle response
    }
}
```
