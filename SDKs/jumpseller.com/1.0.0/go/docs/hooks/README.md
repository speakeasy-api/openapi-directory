# Hooks

### Available Operations

* [DeleteHooksIDJSON](#deletehooksidjson) - Delete an existing Hook.
* [GetHooksJSON](#gethooksjson) - Retrieve all Hooks.
* [GetHooksIDJSON](#gethooksidjson) - Retrieve a single Hook.
* [PostHooksJSON](#posthooksjson) - Create a new Hook.
* [PutHooksIDJSON](#puthooksidjson) - Update a Hook.

## DeleteHooksIDJSON

Delete an existing Hook.

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
    res, err := s.Hooks.DeleteHooksIDJSON(ctx, operations.DeleteHooksIDJSONRequest{
        Authtoken: "aspernatur",
        ID: 20651,
        Login: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHooksIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetHooksJSON

Retrieve all Hooks.

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
    res, err := s.Hooks.GetHooksJSON(ctx, operations.GetHooksJSONRequest{
        Authtoken: "optio",
        Limit: sdk.Int64(881586),
        Login: "ad",
        Page: sdk.Int64(904425),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hooks != nil {
        // handle response
    }
}
```

## GetHooksIDJSON

Retrieve a single Hook.

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
    res, err := s.Hooks.GetHooksIDJSON(ctx, operations.GetHooksIDJSONRequest{
        Authtoken: "suscipit",
        ID: 645785,
        Login: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hook != nil {
        // handle response
    }
}
```

## PostHooksJSON

Create a new Hook.

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
    res, err := s.Hooks.PostHooksJSON(ctx, operations.PostHooksJSONRequest{
        HookEdit: shared.HookEdit{
            Hook: &shared.HookEditFields{
                Event: shared.HookEditFieldsEventEnumOrderShipped,
                URL: "repellendus",
            },
        },
        Authtoken: "totam",
        Login: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hook != nil {
        // handle response
    }
}
```

## PutHooksIDJSON

Update a Hook.

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
    res, err := s.Hooks.PutHooksIDJSON(ctx, operations.PutHooksIDJSONRequest{
        HookEdit: shared.HookEdit{
            Hook: &shared.HookEditFields{
                Event: shared.HookEditFieldsEventEnumOrderUpdated,
                URL: "at",
            },
        },
        Authtoken: "quaerat",
        ID: 273542,
        Login: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hook != nil {
        // handle response
    }
}
```
