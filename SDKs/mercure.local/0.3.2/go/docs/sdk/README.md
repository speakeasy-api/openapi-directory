# SDK

## Overview

[Mercure](https://mercure.rocks) is a protocol allowing to push data updates to web browsers and other HTTP clients in a convenient, fast, reliable and battery-efficient way.

The Mercure protocol specification
<https://mercure.rocks/spec>
### Available Operations

* [GetWellKnownMercure](#getwellknownmercure) - Subscribe to updates
* [GetWellKnownMercureSubscriptions](#getwellknownmercuresubscriptions) - Active subscriptions
* [GetWellKnownMercureSubscriptionsTopic](#getwellknownmercuresubscriptionstopic) - Active subscriptions for the given topic
* [GetWellKnownMercureSubscriptionsTopicSubscriber](#getwellknownmercuresubscriptionstopicsubscriber) - Active subscription for the given topic and subscriber
* [PostWellKnownMercure](#postwellknownmercure) - Publish an update

## GetWellKnownMercure

Subscribe to updates

Subscription specification
<https://mercure.rocks/spec#subscription>

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
            Bearer: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetWellKnownMercure(ctx, operations.GetWellKnownMercureRequest{
        LastEventID: sdk.String("corrupti"),
        LastEventIDQueryParameter: sdk.String("illum"),
        Topic: []string{
            "error",
            "deserunt",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWellKnownMercureSubscriptions

Active subscriptions

Subscription API
<https://mercure.rocks/spec#subscription-api>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetWellKnownMercureSubscriptions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscriptions != nil {
        // handle response
    }
}
```

## GetWellKnownMercureSubscriptionsTopic

Active subscriptions for the given topic

Subscription API
<https://mercure.rocks/spec#subscription-api>

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
            Bearer: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetWellKnownMercureSubscriptionsTopic(ctx, operations.GetWellKnownMercureSubscriptionsTopicRequest{
        Topic: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscriptions != nil {
        // handle response
    }
}
```

## GetWellKnownMercureSubscriptionsTopicSubscriber

Active subscription for the given topic and subscriber

Subscription API
<https://mercure.rocks/spec#active-subscriptions>

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
            Bearer: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetWellKnownMercureSubscriptionsTopicSubscriber(ctx, operations.GetWellKnownMercureSubscriptionsTopicSubscriberRequest{
        Subscriber: "iure",
        Topic: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscriptions != nil {
        // handle response
    }
}
```

## PostWellKnownMercure

Publish an update

Publishing specification
<https://mercure.rocks/spec#publication>

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
            Bearer: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostWellKnownMercure(ctx, operations.PostWellKnownMercureRequestBody{
        Data: "debitis",
        ID: sdk.String("0f467cc8-796e-4d15-9a05-dfc2ddf7cc78"),
        Private: sdk.Bool(false),
        Retry: sdk.Int64(780529),
        Topic: []string{
            "dicta",
            "nam",
            "officia",
        },
        Type: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
