# Webhooks

### Available Operations

* [CreateWebhookV1](#createwebhookv1) - Create Webhook
* [GetWebhookV1](#getwebhookv1) - Get details about the given webhook.
* [ListWebhooksV1](#listwebhooksv1) - List the details about the webhooks for the given payor.
* [PingWebhookV1](#pingwebhookv1)
* [UpdateWebhookV1](#updatewebhookv1) - Update Webhook

## CreateWebhookV1

Create Webhook

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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.CreateWebhookV1(ctx, shared.CreateWebhookRequest{
        AuthorizationHeader: sdk.String("repellat"),
        Categories: []shared.CategoryEnum{
            shared.CategoryEnumPayee,
        },
        Enabled: false,
        PayorID: "bf9621a6-a4f7-47a8-bee3-e4be752c65b3",
        WebhookURL: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWebhookV1

Get details about the given webhook.

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
    res, err := s.Webhooks.GetWebhookV1(ctx, operations.GetWebhookV1Request{
        WebhookID: "418e3bb9-1c8d-4975-a0e8-419d8f84f144",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookResponse != nil {
        // handle response
    }
}
```

## ListWebhooksV1

List the details about the webhooks for the given payor.

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
    res, err := s.Webhooks.ListWebhooksV1(ctx, operations.ListWebhooksV1Request{
        Page: sdk.Int(983434),
        PageSize: sdk.Int(196646),
        PayorID: "e07edcc4-aa5f-43ca-bd90-5a972e056728",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhooksResponse != nil {
        // handle response
    }
}
```

## PingWebhookV1

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
    res, err := s.Webhooks.PingWebhookV1(ctx, operations.PingWebhookV1Request{
        WebhookID: "227b2d30-9470-4bf7-a4fa-87cf535a6fae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PingResponse != nil {
        // handle response
    }
}
```

## UpdateWebhookV1

Update Webhook

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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.UpdateWebhookV1(ctx, operations.UpdateWebhookV1Request{
        UpdateWebhookRequest: &shared.UpdateWebhookRequest{
            AuthorizationHeader: sdk.String("corporis"),
            Categories: []shared.CategoryEnum{
                shared.CategoryEnumDebit,
                shared.CategoryEnumDebit,
            },
            Enabled: sdk.Bool(false),
            WebhookURL: sdk.String("maiores"),
        },
        WebhookID: "60c321f0-23b7-45d2-b67f-e1a0cc8df79f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
