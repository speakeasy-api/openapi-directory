# PaymentAuditServiceDeprecated

### Available Operations

* [~~ExportTransactionsCsvv3~~](#exporttransactionscsvv3) - V3 Export Transactions :warning: **Deprecated**
* [~~GetFundingsV1~~](#getfundingsv1) - V1 Get Fundings for Payor :warning: **Deprecated**
* [~~GetPaymentDetailsV3~~](#getpaymentdetailsv3) - V3 Get Payment :warning: **Deprecated**
* [~~GetPaymentsForPayoutPAV3~~](#getpaymentsforpayoutpav3) - V3 Get Payments for Payout :warning: **Deprecated**
* [~~GetPayoutStatsV1~~](#getpayoutstatsv1) - V1 Get Payout Statistics :warning: **Deprecated**
* [~~GetPayoutsForPayorV3~~](#getpayoutsforpayorv3) - V3 Get Payouts for Payor :warning: **Deprecated**
* [~~ListPaymentChanges~~](#listpaymentchanges) - V1 List Payment Changes :warning: **Deprecated**
* [~~ListPaymentsAuditV3~~](#listpaymentsauditv3) - V3 Get List of Payments :warning: **Deprecated**

## ~~ExportTransactionsCsvv3~~

Deprecated (use /v4/paymentaudit/transactions instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.PaymentAuditServiceDeprecated.ExportTransactionsCsvv3(ctx, operations.ExportTransactionsCsvv3Request{
        EndDate: types.MustDateFromString("2021-11-23"),
        PayorID: sdk.String("f447f603-e8b4-445e-80ca-55efd20e457e"),
        StartDate: types.MustDateFromString("2022-06-27"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ~~GetFundingsV1~~

Deprecated (use /v4/paymentaudit/fundings)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.PaymentAuditServiceDeprecated.GetFundingsV1(ctx, operations.GetFundingsV1Request{
        Page: sdk.Int(348476),
        PageSize: sdk.Int(510629),
        PayorID: "b6a89fbe-3a5a-4a8e-8824-d0ab4075088e",
        Sort: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFundingsResponse != nil {
        // handle response
    }
}
```

## ~~GetPaymentDetailsV3~~

Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.PaymentAuditServiceDeprecated.GetPaymentDetailsV3(ctx, operations.GetPaymentDetailsV3Request{
        PaymentID: "1862065e-904f-43b1-994b-8abf603a79f9",
        Sensitive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentResponseV3 != nil {
        // handle response
    }
}
```

## ~~GetPaymentsForPayoutPAV3~~

Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.PaymentAuditServiceDeprecated.GetPaymentsForPayoutPAV3(ctx, operations.GetPaymentsForPayoutPAV3Request{
        Page: sdk.Int(833819),
        PageSize: sdk.Int(962771),
        PaymentAmountFrom: sdk.Int(914791),
        PaymentAmountTo: sdk.Int(16871),
        PayoutID: "ab7da8a5-0ce1-487f-86bc-173d689eee95",
        RemoteID: sdk.String("aspernatur"),
        Sensitive: sdk.Bool(false),
        Sort: sdk.String("ex"),
        SourceAmountFrom: sdk.Int(980581),
        SourceAmountTo: sdk.Int(544647),
        Status: operations.GetPaymentsForPayoutPAV3StatusEnumReturned.ToPointer(),
        SubmittedDateFrom: types.MustDateFromString("2021-12-30"),
        SubmittedDateTo: types.MustDateFromString("2022-01-29"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPaymentsForPayoutResponseV3 != nil {
        // handle response
    }
}
```

## ~~GetPayoutStatsV1~~

Deprecated (Use /v4/paymentaudit/payoutStatistics)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.PaymentAuditServiceDeprecated.GetPayoutStatsV1(ctx, operations.GetPayoutStatsV1Request{
        PayorID: sdk.String("881ead4f-0e10-4125-a3f9-4e29e973e922"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPayoutStatistics != nil {
        // handle response
    }
}
```

## ~~GetPayoutsForPayorV3~~

Deprecated (use /v4/paymentaudit/payouts instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.PaymentAuditServiceDeprecated.GetPayoutsForPayorV3(ctx, operations.GetPayoutsForPayorV3Request{
        Page: sdk.Int(661118),
        PageSize: sdk.Int(335631),
        PayorID: "7a15be3e-0608-407e-ab6e-3ab8845f0597",
        PayoutMemo: sdk.String("mollitia"),
        Sort: sdk.String("voluptas"),
        Status: operations.GetPayoutsForPayorV3StatusEnumAccepted.ToPointer(),
        SubmittedDateFrom: types.MustDateFromString("2020-02-03"),
        SubmittedDateTo: types.MustDateFromString("2022-05-03"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPayoutsResponseV3 != nil {
        // handle response
    }
}
```

## ~~ListPaymentChanges~~

Deprecated (use /v4/payments/deltas instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.PaymentAuditServiceDeprecated.ListPaymentChanges(ctx, operations.ListPaymentChangesRequest{
        Page: sdk.Int(327988),
        PageSize: sdk.Int(293144),
        PayorID: "a31e9476-4a3e-4865-a795-6f9251a5a9da",
        UpdatedSince: types.MustTimeFromString("2022-08-09T00:01:50.407Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentDeltaResponseV1 != nil {
        // handle response
    }
}
```

## ~~ListPaymentsAuditV3~~

Deprecated (use /v4/paymentaudit/payments instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.PaymentAuditServiceDeprecated.ListPaymentsAuditV3(ctx, operations.ListPaymentsAuditV3Request{
        Page: sdk.Int(37565),
        PageSize: sdk.Int(999278),
        PayeeID: sdk.String("f57bfaad-4f9e-4fc1-b451-2c1032648dc2"),
        PaymentAmountFrom: sdk.Int(958741),
        PaymentAmountTo: sdk.Int(433279),
        PaymentCurrency: sdk.String("dicta"),
        PaymentMemo: sdk.String("minima"),
        PayorID: sdk.String("199ebfd0-e9fe-46c6-b2ca-3aed01179963"),
        PayorName: sdk.String("quasi"),
        RemoteID: sdk.String("magni"),
        Sensitive: sdk.Bool(false),
        Sort: sdk.String("doloribus"),
        SourceAccountName: sdk.String("nulla"),
        SourceAmountFrom: sdk.Int(896582),
        SourceAmountTo: sdk.Int(58534),
        SourceCurrency: sdk.String("tempora"),
        Status: operations.ListPaymentsAuditV3StatusEnumRejected.ToPointer(),
        SubmittedDateFrom: types.MustDateFromString("2022-11-19"),
        SubmittedDateTo: types.MustDateFromString("2022-07-18"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPaymentsResponseV3 != nil {
        // handle response
    }
}
```
