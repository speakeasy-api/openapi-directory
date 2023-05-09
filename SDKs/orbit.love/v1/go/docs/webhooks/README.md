# Webhooks

### Available Operations

* [DeleteWorkspaceSlugWebhooksID](#deleteworkspaceslugwebhooksid) - Delete a webhook
* [GetWorkspaceSlugWebhooks](#getworkspaceslugwebhooks) - List webhooks in a workspace
* [GetWorkspaceSlugWebhooksID](#getworkspaceslugwebhooksid) - Get a webhook
* [PostWorkspaceSlugWebhooks](#postworkspaceslugwebhooks) - Create a webhook
* [PutWorkspaceSlugWebhooksID](#putworkspaceslugwebhooksid) - Update a webhook

## DeleteWorkspaceSlugWebhooksID

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.DeleteWorkspaceSlugWebhooksID(ctx, operations.DeleteWorkspaceSlugWebhooksIDRequest{
        ID: "8a0d446c-e2af-47a7-bcf3-be453f870b32",
        WorkspaceSlug: "vel",
    }, operations.DeleteWorkspaceSlugWebhooksIDSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWorkspaceSlugWebhooks

List webhooks in a workspace

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
    res, err := s.Webhooks.GetWorkspaceSlugWebhooks(ctx, operations.GetWorkspaceSlugWebhooksRequest{
        WorkspaceSlug: "libero",
    }, operations.GetWorkspaceSlugWebhooksSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWorkspaceSlugWebhooksID

Get a webhook

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
    res, err := s.Webhooks.GetWorkspaceSlugWebhooksID(ctx, operations.GetWorkspaceSlugWebhooksIDRequest{
        ID: "5a73429c-db1a-4842-abb6-79d2322715bf",
        WorkspaceSlug: "voluptatem",
    }, operations.GetWorkspaceSlugWebhooksIDSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostWorkspaceSlugWebhooks

Create a webhook

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
    res, err := s.Webhooks.PostWorkspaceSlugWebhooks(ctx, operations.PostWorkspaceSlugWebhooksRequest{
        WebhookSubscription: &shared.WebhookSubscription{
            ActivityTags: []string{
                "soluta",
                "nobis",
                "et",
                "saepe",
            },
            ActivityTypes: []string{
                "veritatis",
            },
            EventType: "nobis",
            MemberTags: []string{
                "tempore",
                "cupiditate",
                "aperiam",
            },
            Name: "Mike Greenholt",
            Secret: sdk.String("dolorum"),
            URL: "architecto",
        },
        WorkspaceSlug: "quae",
    }, operations.PostWorkspaceSlugWebhooksSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutWorkspaceSlugWebhooksID

Update a webhook

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
    res, err := s.Webhooks.PutWorkspaceSlugWebhooksID(ctx, operations.PutWorkspaceSlugWebhooksIDRequest{
        ID: "08e0adcf-4b92-4187-9fce-953f73ef7fbc",
        WebhookSubscription: &shared.WebhookSubscription{
            ActivityTags: []string{
                "similique",
                "facilis",
            },
            ActivityTypes: []string{
                "ducimus",
                "dolore",
                "quibusdam",
                "illum",
            },
            EventType: "sequi",
            MemberTags: []string{
                "impedit",
                "aut",
                "voluptatibus",
            },
            Name: "Freda Cormier",
            Secret: sdk.String("doloribus"),
            URL: "iusto",
        },
        WorkspaceSlug: "eligendi",
    }, operations.PutWorkspaceSlugWebhooksIDSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
