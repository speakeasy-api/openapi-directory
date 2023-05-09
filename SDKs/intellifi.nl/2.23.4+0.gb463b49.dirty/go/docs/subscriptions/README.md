# Subscriptions

## Overview

The `subscriptions` resource contains rules to store and/or deliver events from the Brain event system.

See also the `events` resource.


<https://intellifi.zendesk.com/hc/en-us/sections/360001588534>
### Available Operations

* [AddSubscription](#addsubscription) - Create subscription
* [DeleteSubscription](#deletesubscription) - Delete subscription
* [GetEventsForSubscriptionByID](#geteventsforsubscriptionbyid) - Get subscription events
* [GetSubscriptionByID](#getsubscriptionbyid) - Get subscription
* [GetSubscriptions](#getsubscriptions) - Get all subscriptions
* [UpdateSubscription](#updatesubscription) - Update existing subscription

## AddSubscription

Create subscription

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Subscriptions.AddSubscription(ctx, shared.SubscriptionInput{
        Custom: sdk.String("fugit"),
        DatabaseHoldTimeH: sdk.Int64(2),
        Description: sdk.String("Item events"),
        PopulateEvents: sdk.Bool(false),
        TargetRetry: sdk.Bool(false),
        TargetURL: sdk.String("alias"),
        TopicFilter: sdk.String("items/#"),
        VerifyTargetCertificate: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## DeleteSubscription

Delete subscription

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Subscriptions.DeleteSubscription(ctx, operations.DeleteSubscriptionRequest{
        ID: "2611435e-139d-4bc2-a59b-1abda8c070e1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## GetEventsForSubscriptionByID

Get subscription events

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Subscriptions.GetEventsForSubscriptionByID(ctx, operations.GetEventsForSubscriptionByIDRequest{
        After: types.MustTimeFromString("2022-06-26T05:52:38.352Z"),
        AfterID: sdk.String("dolore"),
        Before: sdk.String("eligendi"),
        BeforeID: sdk.String("distinctio"),
        From: sdk.String("voluptatem"),
        FromID: sdk.String("autem"),
        IDPathParameter: "esse",
        IDQueryParameter: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        Limit: sdk.Int64(172951),
        Populate: sdk.String("assumenda"),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("beatae"),
        Sort: sdk.String("est"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeEvent: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeExpire: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(8173.39),
        TopicAction: shared.EventTopicActionEnumCreated.ToPointer(),
        TopicResource: sdk.String("5b7d6cbd7503c445552a1664"),
        TopicResourceType: shared.EventTopicResourceTypeEnumItems.ToPointer(),
        Until: sdk.String("corrupti"),
        UntilID: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventsForSubscriptionByID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSubscriptionByID

Get subscription

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Subscriptions.GetSubscriptionByID(ctx, operations.GetSubscriptionByIDRequest{
        ID: "9eeb9665-b85e-4fbd-82ba-e0be2d782259",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## GetSubscriptions

Get all subscriptions

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Subscriptions.GetSubscriptions(ctx, operations.GetSubscriptionsRequest{
        After: types.MustTimeFromString("2022-04-13T22:13:24.007Z"),
        AfterID: sdk.String("recusandae"),
        Before: sdk.String("similique"),
        BeforeID: sdk.String("ut"),
        DatabaseHoldTimeH: sdk.Int64(693746),
        Description: sdk.String("quis"),
        From: sdk.String("beatae"),
        FromID: sdk.String("unde"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        Limit: sdk.Int64(476946),
        Populate: sdk.String("delectus"),
        PopulateEvents: sdk.Bool(false),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("cupiditate"),
        Sort: sdk.String("fugit"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(2536.25),
        TopicFilter: sdk.String("numquam"),
        Until: sdk.String("nesciunt"),
        UntilID: sdk.String("at"),
        VerifyTargetCertificate: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSubscriptions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateSubscription

Update existing subscription

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Subscriptions.UpdateSubscription(ctx, operations.UpdateSubscriptionRequest{
        SubscriptionInput: shared.SubscriptionInput{
            Custom: sdk.String("officia"),
            DatabaseHoldTimeH: sdk.Int64(2),
            Description: sdk.String("Item events"),
            PopulateEvents: sdk.Bool(false),
            TargetRetry: sdk.Bool(false),
            TargetURL: sdk.String("dignissimos"),
            TopicFilter: sdk.String("items/#"),
            VerifyTargetCertificate: sdk.Bool(false),
        },
        ID: "ce52b895-c537-4c64-94ef-b0b34896c3ca",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
