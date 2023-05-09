# Webhooks

## Overview

[Webhooks](https://www.shipengine.com/docs/tracking/webhooks/) are a powerful feature of ShipEngine that can save you from sending repeated polling requests to check on the state of something.  With webhooks, ShipEngine will automatically contact your servers when the stage changes.  This can include [parcel tracking](https://www.shipengine.com/docs/tracking/) events, notification of the completion of a [batch operation](https://www.shipengine.com/docs/labels/bulk/),  or new [salses orders](https://www.shipengine.com/docs/orders/).


Learn how to setup webhooks and start listening to ShipEngine events.
<https://www.shipengine.com/docs/tracking/webhooks/>
### Available Operations

* [CreateWebhook](#createwebhook) - Create a Webhook
* [DeleteWebhook](#deletewebhook) - Delete Webhook By ID
* [GetWebhookByID](#getwebhookbyid) - Get Webhook By ID
* [ListWebhooks](#listwebhooks) - List Webhooks
* [UpdateWebhook](#updatewebhook) - Update a Webhook

## CreateWebhook

Create a webook for specific events in the environment.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.CreateWebhook(ctx, shared.CreateWebhookRequestBody{
        Event: shared.WebhookEventEnumSalesOrdersImported,
        URL: "http://api.shipengine.com/v1/labels/se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWebhookResponseBody != nil {
        // handle response
    }
}
```

## DeleteWebhook

Delete a webhook

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.DeleteWebhook(ctx, operations.DeleteWebhookRequest{
        WebhookID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## GetWebhookByID

Retrieve individual webhook by an ID

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.GetWebhookByID(ctx, operations.GetWebhookByIDRequest{
        WebhookID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhookByIDResponseBody != nil {
        // handle response
    }
}
```

## ListWebhooks

List all webhooks currently enabled for the account.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.ListWebhooks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebhooksResponseBody != nil {
        // handle response
    }
}
```

## UpdateWebhook

Update the webhook url property

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.UpdateWebhook(ctx, operations.UpdateWebhookRequest{
        UpdateWebhookRequestBody: shared.UpdateWebhookRequestBody{
            URL: sdk.String("http://api.shipengine.com/v1/labels/se-28529731"),
        },
        WebhookID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```
