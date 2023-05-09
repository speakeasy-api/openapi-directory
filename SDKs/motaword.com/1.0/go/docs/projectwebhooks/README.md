# ProjectWebhooks

### Available Operations

* [DeleteProjectWebhook](#deleteprojectwebhook) - Delete project webhooks
* [GetProjectWebhooks](#getprojectwebhooks) - View project webhooks
* [PostProjectWebhook](#postprojectwebhook) - Update project webhook
* [UpdateProjectWebhook](#updateprojectwebhook) - Update project webhook

## DeleteProjectWebhook

Delete project webhooks. Projects currently support registering only 1 webhook. This endpoint deletes the previously registered webhook.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectWebhooks.DeleteProjectWebhook(ctx, operations.DeleteProjectWebhookRequest{
        ID: 959434,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## GetProjectWebhooks

This endpoint returns Project entity which contains `callback_url` field for webhook URL. Currently projects can have only 1 webhook registered.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectWebhooks.GetProjectWebhooks(ctx, operations.GetProjectWebhooksRequest{
        ID: 174112,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## PostProjectWebhook

Update project webhook URL

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectWebhooks.PostProjectWebhook(ctx, operations.PostProjectWebhookRequest{
        Webhook: &shared.Webhook{
            CallbackURL: sdk.String("deserunt"),
        },
        ID: 475289,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## UpdateProjectWebhook

Update project webhook URL

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ProjectWebhooks.UpdateProjectWebhook(ctx, operations.UpdateProjectWebhookRequest{
        Webhook: &shared.Webhook{
            CallbackURL: sdk.String("accusantium"),
        },
        ID: 783648,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```
