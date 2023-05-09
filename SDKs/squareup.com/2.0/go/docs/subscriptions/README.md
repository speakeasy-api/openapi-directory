# Subscriptions

### Available Operations

* [CancelSubscription](#cancelsubscription) - CancelSubscription
* [CreateSubscription](#createsubscription) - CreateSubscription
* [ListSubscriptionEvents](#listsubscriptionevents) - ListSubscriptionEvents
* [ResumeSubscription](#resumesubscription) - ResumeSubscription
* [RetrieveSubscription](#retrievesubscription) - RetrieveSubscription
* [SearchSubscriptions](#searchsubscriptions) - SearchSubscriptions
* [UpdateSubscription](#updatesubscription) - UpdateSubscription

## CancelSubscription

Sets the `canceled_date` field to the end of the active billing period.
After this date, the status changes from ACTIVE to CANCELED.

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
    res, err := s.Subscriptions.CancelSubscription(ctx, operations.CancelSubscriptionRequest{
        SubscriptionID: "inventore",
    }, operations.CancelSubscriptionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelSubscriptionResponse != nil {
        // handle response
    }
}
```

## CreateSubscription

Creates a subscription for a customer to a subscription plan.

If you provide a card on file in the request, Square charges the card for
the subscription. Otherwise, Square bills an invoice to the customer's email
address. The subscription starts immediately, unless the request includes
the optional `start_date`. Each individual subscription is associated with a particular location.

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
    res, err := s.Subscriptions.CreateSubscription(ctx, shared.CreateSubscriptionRequest{
        CanceledDate: sdk.String("eius"),
        CardID: sdk.String("voluptatem"),
        CustomerID: "accusamus",
        IdempotencyKey: sdk.String("voluptate"),
        LocationID: "corporis",
        PlanID: "esse",
        PriceOverrideMoney: &shared.Money{
            Amount: sdk.Int64(173775),
            Currency: sdk.String("laboriosam"),
        },
        StartDate: sdk.String("earum"),
        TaxPercentage: sdk.String("voluptatem"),
        Timezone: sdk.String("consequatur"),
    }, operations.CreateSubscriptionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSubscriptionResponse != nil {
        // handle response
    }
}
```

## ListSubscriptionEvents

Lists all events for a specific subscription.
In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the subscription was canceled) events are returned.

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
    res, err := s.Subscriptions.ListSubscriptionEvents(ctx, operations.ListSubscriptionEventsRequest{
        Cursor: sdk.String("nesciunt"),
        Limit: sdk.Int64(781918),
        SubscriptionID: "aspernatur",
    }, operations.ListSubscriptionEventsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscriptionEventsResponse != nil {
        // handle response
    }
}
```

## ResumeSubscription

Resumes a deactivated subscription.

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
    res, err := s.Subscriptions.ResumeSubscription(ctx, operations.ResumeSubscriptionRequest{
        SubscriptionID: "asperiores",
    }, operations.ResumeSubscriptionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResumeSubscriptionResponse != nil {
        // handle response
    }
}
```

## RetrieveSubscription

Retrieves a subscription.

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
    res, err := s.Subscriptions.RetrieveSubscription(ctx, operations.RetrieveSubscriptionRequest{
        SubscriptionID: "aut",
    }, operations.RetrieveSubscriptionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveSubscriptionResponse != nil {
        // handle response
    }
}
```

## SearchSubscriptions

Searches for subscriptions.
Results are ordered chronologically by subscription creation date. If
the request specifies more than one location ID,
the endpoint orders the result
by location ID, and then by creation date within each location. If no locations are given
in the query, all locations are searched.

You can also optionally specify `customer_ids` to search by customer.
If left unset, all customers
associated with the specified locations are returned.
If the request specifies customer IDs, the endpoint orders results
first by location, within location by customer ID, and within
customer by subscription creation date.

For more information, see
[Retrieve subscriptions](https://developer.squareup.com/docs/subscriptions-api/overview#retrieve-subscriptions).

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
    res, err := s.Subscriptions.SearchSubscriptions(ctx, shared.SearchSubscriptionsRequest{
        Cursor: sdk.String("consequuntur"),
        Limit: sdk.Int64(619134),
        Query: &shared.SearchSubscriptionsQuery{
            Filter: &shared.SearchSubscriptionsFilter{
                CustomerIds: []string{
                    "architecto",
                    "excepturi",
                },
                LocationIds: []string{
                    "enim",
                },
            },
        },
    }, operations.SearchSubscriptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchSubscriptionsResponse != nil {
        // handle response
    }
}
```

## UpdateSubscription

Updates a subscription. You can set, modify, and clear the
`subscription` field values.

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
    res, err := s.Subscriptions.UpdateSubscription(ctx, operations.UpdateSubscriptionRequest{
        UpdateSubscriptionRequest: shared.UpdateSubscriptionRequest{
            Subscription: &shared.Subscription{
                CanceledDate: sdk.String("architecto"),
                CardID: sdk.String("atque"),
                ChargedThroughDate: sdk.String("cumque"),
                CreatedAt: sdk.String("saepe"),
                CustomerID: sdk.String("accusamus"),
                ID: sdk.String("41c999f4-69f6-4f1c-b1a3-f023c669e6a6"),
                InvoiceIds: []string{
                    "aliquid",
                },
                LocationID: sdk.String("voluptatem"),
                PlanID: sdk.String("ab"),
                PriceOverrideMoney: &shared.Money{
                    Amount: sdk.Int64(125622),
                    Currency: sdk.String("vero"),
                },
                StartDate: sdk.String("expedita"),
                Status: sdk.String("id"),
                TaxPercentage: sdk.String("consequatur"),
                Timezone: sdk.String("quis"),
                Version: sdk.Int64(478264),
            },
        },
        SubscriptionID: "unde",
    }, operations.UpdateSubscriptionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSubscriptionResponse != nil {
        // handle response
    }
}
```
