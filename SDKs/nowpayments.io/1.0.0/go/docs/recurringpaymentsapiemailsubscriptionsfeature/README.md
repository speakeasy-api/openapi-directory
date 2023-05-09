# RecurringPaymentsAPIEmailSubscriptionsFeature

## Overview

Streamline your workflows by sending payments to your customers on a regular basis with NOWPayments.  
This feature involves creating a plan for payments and individual recurring payments for each user.  
First you need to create a Recurring Payment plan:

### Available Operations

* [DeleteRecurringPayment](#deleterecurringpayment) - Delete recurring payment
* [GetManyPlans](#getmanyplans) - Get many plans
* [GetManyRecurringPayments](#getmanyrecurringpayments) - Get many recurring payments
* [GetOnePlan](#getoneplan) - Get one plan
* [GetOneRecurringPayment](#getonerecurringpayment) - Get one recurring payment
* [UpdatePlan](#updateplan) - Update plan

## DeleteRecurringPayment

Completely removes a particular payment from the recurring payment plan.  
You need to specify the payment plan id in the request.

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
    res, err := s.RecurringPaymentsAPIEmailSubscriptionsFeature.DeleteRecurringPayment(ctx, operations.DeleteRecurringPaymentRequest{
        RequestBody: []byte("explicabo"),
        SubID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRecurringPayment200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetManyPlans

This method allows you to obtain information about all the payment plans you’ve created.

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
    res, err := s.RecurringPaymentsAPIEmailSubscriptionsFeature.GetManyPlans(ctx, operations.GetManyPlansRequest{
        Limit: sdk.String("10"),
        Offset: sdk.String("3"),
        XAPIKey: sdk.String("{{your_api_key}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetManyPlans200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetManyRecurringPayments

The method allows you to view the entire list of recurring payments filtered by payment status and/or payment plan id

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
    res, err := s.RecurringPaymentsAPIEmailSubscriptionsFeature.GetManyRecurringPayments(ctx, operations.GetManyRecurringPaymentsRequest{
        RequestBody: []byte("enim"),
        IsActive: sdk.String("false"),
        Limit: sdk.String("10"),
        Offset: sdk.String("0"),
        Status: sdk.String("PARTIALLY_PAID"),
        SubscriptionPlanID: sdk.String("111394288"),
        XAPIKey: sdk.String("{{your_api_key}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetManyRecurringPayments200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOnePlan

This method allows you to obtain information about your payment plan.  
(you need to specify your payment plan id in the request).

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
    res, err := s.RecurringPaymentsAPIEmailSubscriptionsFeature.GetOnePlan(ctx, operations.GetOnePlanRequest{
        PlanID: "omnis",
        XAPIKey: sdk.String("{{your_api_key}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOnePlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOneRecurringPayment

Get information about a particular recurring payment via its ID.

Here’s the list of available statuses:  
\- WAITING_PAY  
\- PAID  
\- PARTIALLY_PAID  
\- EXPIRED

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
    res, err := s.RecurringPaymentsAPIEmailSubscriptionsFeature.GetOneRecurringPayment(ctx, operations.GetOneRecurringPaymentRequest{
        RequestBody: []byte("nemo"),
        SubID: "minima",
        XAPIKey: sdk.String("{{your_api_key}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOneRecurringPayment200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdatePlan

This method allows you to add necessary changes to a created plan. They won’t affect users who have already paid; however, the changes will take effect when a new payment is to be made.

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
    res, err := s.RecurringPaymentsAPIEmailSubscriptionsFeature.UpdatePlan(ctx, operations.UpdatePlanRequest{
        RequestBody: &operations.UpdatePlanRequestBody{
            Amount: sdk.Float64(2),
            Currency: sdk.String("usd"),
            IntervalDay: sdk.Float64(1),
            Title: sdk.String("test plan"),
        },
        PlanID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
