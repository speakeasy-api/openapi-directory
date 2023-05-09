# ImageActions

### Available Operations

* [GetImagesIDActions](#getimagesidactions) - Get all Actions for an Image
* [GetImagesIDActionsActionID](#getimagesidactionsactionid) - Get an Action for an Image
* [PostImagesIDActionsChangeProtection](#postimagesidactionschangeprotection) - Change Image Protection

## GetImagesIDActions

Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

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
    res, err := s.ImageActions.GetImagesIDActions(ctx, operations.GetImagesIDActionsRequest{
        ID: 880476,
        Sort: operations.GetImagesIDActionsSortParameterSortEnumStatusAsc.ToPointer(),
        Status: operations.GetImagesIDActionsStatusParameterStatusEnumError.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```

## GetImagesIDActionsActionID

Returns a specific Action for an Image.

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
    res, err := s.ImageActions.GetImagesIDActionsActionID(ctx, operations.GetImagesIDActionsActionIDRequest{
        ActionID: 64147,
        ID: 216822,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostImagesIDActionsChangeProtection

Changes the protection configuration of the Image. Can only be used on snapshots.

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
    res, err := s.ImageActions.PostImagesIDActionsChangeProtection(ctx, operations.PostImagesIDActionsChangeProtectionRequest{
        RequestBody: &operations.PostImagesIDActionsChangeProtectionRequestBody{
            Delete: sdk.Bool(true),
        },
        ID: 692472,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```
