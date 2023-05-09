# Webhooks

## Overview

Webhooks provide a mechanism for a configured URL to receive
events when transaction activity occurs on Up. You can think of
webhooks as being like push notifications for your server-side
application.


### Available Operations

* [DeleteWebhooksID](#deletewebhooksid) - Delete webhook
* [GetWebhooks](#getwebhooks) - List webhooks
* [GetWebhooksID](#getwebhooksid) - Retrieve webhook
* [GetWebhooksWebhookIDLogs](#getwebhookswebhookidlogs) - List webhook logs
* [PostWebhooks](#postwebhooks) - Create webhook
* [PostWebhooksWebhookIDPing](#postwebhookswebhookidping) - Ping webhook

## DeleteWebhooksID

Delete a specific webhook by providing its unique identifier. Once
deleted, webhook events will no longer be sent to the configured URL.


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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.DeleteWebhooksID(ctx, operations.DeleteWebhooksIDRequest{
        ID: "2c73d5fe-9b90-4c28-909b-3fe49a8d9cbf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWebhooks

Retrieve a list of configured webhooks. The returned list is
[paginated](#pagination) and can be scrolled by following the `next`
and `prev` links where present. Results are ordered oldest first to
newest last.


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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.GetWebhooks(ctx, operations.GetWebhooksRequest{
        PageSize: sdk.Int64(311945),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebhooksResponse != nil {
        // handle response
    }
}
```

## GetWebhooksID

Retrieve a specific webhook by providing its unique identifier.


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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.GetWebhooksID(ctx, operations.GetWebhooksIDRequest{
        ID: "8633323f-9b77-4f3a-8100-674ebf69280d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhookResponse != nil {
        // handle response
    }
}
```

## GetWebhooksWebhookIDLogs

Retrieve a list of delivery logs for a webhook by providing its unique
identifier. This is useful for analysis and debugging purposes. The
returned list is [paginated](#pagination) and can be scrolled by
following the `next` and `prev` links where present. Results are ordered
newest first to oldest last. Logs may be automatically purged after a
period of time.


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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.GetWebhooksWebhookIDLogs(ctx, operations.GetWebhooksWebhookIDLogsRequest{
        PageSize: sdk.Int64(67249),
        WebhookID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebhookDeliveryLogsResponse != nil {
        // handle response
    }
}
```

## PostWebhooks

Create a new webhook with a given URL. The URL will receive webhook
events as JSON-encoded `POST` requests. The URL must respond with a HTTP
`200` status on success.

There is currently a limit of 10 webhooks at any given time. Once this
limit is reached, existing webhooks will need to be deleted before new
webhooks can be created.

Event delivery is retried with exponential backoff if the URL is
unreachable or it does not respond with a `200` status. The response
includes a `secretKey` attribute, which is used to sign requests sent to
the webhook URL. It will not be returned from any other endpoints within
the Up API. If the `secretKey` is lost, simply create a new webhook with
the same URL, capture its `secretKey` and then delete the original
webhook. See [Handling webhook events](#callback_post_webhookURL) for
details on how to process webhook events.

It is probably a good idea to test the webhook by
[sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
it.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/callbacks"
	"net/http"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.PostWebhooks(ctx, shared.CreateWebhookRequest{
        Data: shared.WebhookInputResource{
            Attributes: shared.WebhookInputResourceAttributes{
                Description: sdk.String("dolorum"),
                URL: "http://jealous-polyester.name",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWebhookResponse != nil {
        // handle response
    }
}
```

## PostWebhooksWebhookIDPing

Send a `PING` event to a webhook by providing its unique identifier.
This is useful for testing and debugging purposes. The event is delivered
asynchronously and its data is returned in the response to this request.


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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.PostWebhooksWebhookIDPing(ctx, operations.PostWebhooksWebhookIDPingRequest{
        WebhookID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookEventCallback != nil {
        // handle response
    }
}
```
