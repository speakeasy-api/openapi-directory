# Actions

### Available Operations

* [ActionsGet](#actionsget) - Gets all available Actions of a Device
* [ActionsPostForm](#actionspostform) - Set an action for the specified device.
* [ActionsPostJSON](#actionspostjson) - Set an action for the specified device.
* [ActionsPostRaw](#actionspostraw) - Set an action for the specified device.

## ActionsGet

Gets all available Actions of a Device

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
    res, err := s.Actions.ActionsGet(ctx, operations.ActionsGetRequest{
        ID: "d69a674e-0f46-47cc-8796-ed151a05dfc2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionInformations != nil {
        // handle response
    }
}
```

## ActionsPostForm

Set an action for the specified device.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsPostForm(ctx, shared.ActionToPost{
        Actions: []shared.ActionToPostItem{
            shared.ActionToPostItem{
                ObisCode: sdk.String("at"),
                Value: sdk.Float64(9786.19),
            },
            shared.ActionToPostItem{
                ObisCode: sdk.String("molestiae"),
                Value: sdk.Float64(7991.59),
            },
            shared.ActionToPostItem{
                ObisCode: sdk.String("quod"),
                Value: sdk.Float64(4614.79),
            },
            shared.ActionToPostItem{
                ObisCode: sdk.String("totam"),
                Value: sdk.Float64(7805.29),
            },
        },
        DeviceID: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsPostJSON

Set an action for the specified device.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsPostJSON(ctx, shared.ActionToPost{
        Actions: []shared.ActionToPostItem{
            shared.ActionToPostItem{
                ObisCode: sdk.String("nam"),
                Value: sdk.Float64(6399.21),
            },
        },
        DeviceID: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ActionsPostRaw

Set an action for the specified device.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.ActionsPostRaw(ctx, []byte("fugit"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
