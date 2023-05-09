# VolumeActions

### Available Operations

* [GetVolumesIDActions](#getvolumesidactions) - Get all Actions for a Volume
* [GetVolumesIDActionsActionID](#getvolumesidactionsactionid) - Get an Action for a Volume
* [PostVolumesIDActionsAttach](#postvolumesidactionsattach) - Attach Volume to a Server
* [PostVolumesIDActionsChangeProtection](#postvolumesidactionschangeprotection) - Change Volume Protection
* [PostVolumesIDActionsDetach](#postvolumesidactionsdetach) - Detach Volume
* [PostVolumesIDActionsResize](#postvolumesidactionsresize) - Resize Volume

## GetVolumesIDActions

Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

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
    res, err := s.VolumeActions.GetVolumesIDActions(ctx, operations.GetVolumesIDActionsRequest{
        ID: 787542,
        Sort: operations.GetVolumesIDActionsSortParameterSortEnumFinished.ToPointer(),
        Status: operations.GetVolumesIDActionsStatusParameterStatusEnumSuccess.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```

## GetVolumesIDActionsActionID

Returns a specific Action for a Volume.

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
    res, err := s.VolumeActions.GetVolumesIDActionsActionID(ctx, operations.GetVolumesIDActionsActionIDRequest{
        ActionID: 338159,
        ID: 218403,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostVolumesIDActionsAttach

Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.

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
    res, err := s.VolumeActions.PostVolumesIDActionsAttach(ctx, operations.PostVolumesIDActionsAttachRequest{
        RequestBody: &operations.PostVolumesIDActionsAttachAttachVolumeRequest{
            Automount: sdk.Bool(false),
            Server: 43,
        },
        ID: 961571,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostVolumesIDActionsChangeProtection

Changes the protection configuration of a Volume.

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
    res, err := s.VolumeActions.PostVolumesIDActionsChangeProtection(ctx, operations.PostVolumesIDActionsChangeProtectionRequest{
        RequestBody: &operations.PostVolumesIDActionsChangeProtectionRequestBody{
            Delete: sdk.Bool(true),
        },
        ID: 455169,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostVolumesIDActionsDetach

Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.

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
    res, err := s.VolumeActions.PostVolumesIDActionsDetach(ctx, operations.PostVolumesIDActionsDetachRequest{
        ID: 231701,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostVolumesIDActionsResize

Changes the size of a Volume. Note that downsizing a Volume is not possible.

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
    res, err := s.VolumeActions.PostVolumesIDActionsResize(ctx, operations.PostVolumesIDActionsResizeRequest{
        RequestBody: &operations.PostVolumesIDActionsResizeRequestBody{
            Size: 50,
        },
        ID: 878870,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```
