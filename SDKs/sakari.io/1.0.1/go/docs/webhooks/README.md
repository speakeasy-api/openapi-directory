# Webhooks

## Overview

Webhooks allow your own system to be automatically notified upon certin events, such as a new message received from one of your contacts or a status change notification for your messages

### Available Operations

* [WebhooksFetchAll](#webhooksfetchall) - Fetch active webhooks
* [WebhooksSubscribe](#webhookssubscribe) - Subscribe to message events
* [WebhooksUnsubscribe](#webhooksunsubscribe) - Unsubscribe to message events

## WebhooksFetchAll

When messages are acknowledge by carriers, a notification is sent to the specified URL

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
    res, err := s.Webhooks.WebhooksFetchAll(ctx, operations.WebhooksFetchAllRequest{
        AccountID: "perferendis",
    }, operations.WebhooksFetchAllSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhooksResponse != nil {
        // handle response
    }
}
```

## WebhooksSubscribe

When messages are acknowledge by carriers, a notification is sent to the specified URL

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
    res, err := s.Webhooks.WebhooksSubscribe(ctx, operations.WebhooksSubscribeRequest{
        RequestBody: operations.WebhooksSubscribeRequestBody{
            EventTypes: []WebhooksSubscribeRequestBodyEventTypesEnum{
                operations.WebhooksSubscribeRequestBodyEventTypesEnumContactRemoved,
                operations.WebhooksSubscribeRequestBodyEventTypesEnumContactCreated,
                operations.WebhooksSubscribeRequestBodyEventTypesEnumContactOptIn,
                operations.WebhooksSubscribeRequestBodyEventTypesEnumMessageReceived,
            },
            URL: sdk.String("https://myserver.com/send/callback/here"),
        },
        AccountID: "hic",
    }, operations.WebhooksSubscribeSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookResponse != nil {
        // handle response
    }
}
```

## WebhooksUnsubscribe

Delete subscription for receiving notifications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/callbacks"
	"net/http"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.WebhooksUnsubscribe(ctx, operations.WebhooksUnsubscribeRequest{
        AccountID: "libero",
        URL: "nobis",
    }, operations.WebhooksUnsubscribeSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
