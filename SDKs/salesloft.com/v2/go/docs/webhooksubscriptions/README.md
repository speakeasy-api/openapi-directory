# WebhookSubscriptions

## Overview

Webhook Subscriptions

### Available Operations

* [DeleteV2WebhookSubscriptionsID](#deletev2webhooksubscriptionsid) - Delete a webhook subscription
* [GetV2WebhookSubscriptions](#getv2webhooksubscriptions) - List webhook subscriptions
* [GetV2WebhookSubscriptionsID](#getv2webhooksubscriptionsid) - Fetch a webhook subscription
* [PostV2WebhookSubscriptions](#postv2webhooksubscriptions) - Create a webhook subscription
* [PutV2WebhookSubscriptionsID](#putv2webhooksubscriptionsid) - Update a webhook subscription

## DeleteV2WebhookSubscriptionsID

Deletes a webhook subscription. This operation is not reversible without contacting support. This operation can be called multiple times successfully.

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
    res, err := s.WebhookSubscriptions.DeleteV2WebhookSubscriptionsID(ctx, operations.DeleteV2WebhookSubscriptionsIDRequest{
        ID: 506966,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetV2WebhookSubscriptions

Fetches all of the customer's webhook subscriptions for your application.

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
    res, err := s.WebhookSubscriptions.GetV2WebhookSubscriptions(ctx, operations.GetV2WebhookSubscriptionsRequest{
        Enabled: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2WebhookSubscriptionsID

Fetches a webhook subscription, by ID only.

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
    res, err := s.WebhookSubscriptions.GetV2WebhookSubscriptionsID(ctx, operations.GetV2WebhookSubscriptionsIDRequest{
        ID: 907899,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2WebhookSubscriptions

Creates a webhook subscription. Visit the <a href="/webhooks.html" target="_blank" rel="noopener noreferrer">webhooks page</a> for additional details and a list of available webhooks.
Request must be made with a valid Oauth token or API key.

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
    res, err := s.WebhookSubscriptions.PostV2WebhookSubscriptions(ctx, operations.PostV2WebhookSubscriptionsRequestBody{
        CallbackToken: "dolor",
        CallbackURL: "expedita",
        EventType: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2WebhookSubscriptionsID

Updates a webhook subscription.
Request must be made with a valid Oauth token or API key.

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
    res, err := s.WebhookSubscriptions.PutV2WebhookSubscriptionsID(ctx, operations.PutV2WebhookSubscriptionsIDRequest{
        RequestBody: &operations.PutV2WebhookSubscriptionsIDRequestBody{
            Enabled: sdk.Bool(false),
        },
        ID: 615277,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
