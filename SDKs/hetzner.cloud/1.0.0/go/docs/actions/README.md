# Actions

## Overview

Actions show the results and progress of asynchronous requests to the API.

### Available Operations

* [GetActions](#getactions) - Get all Actions
* [GetActionsID](#getactionsid) - Get an Action

## GetActions

Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

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
    res, err := s.Actions.GetActions(ctx, operations.GetActionsRequest{
        ID: sdk.Int64(844266),
        Sort: operations.GetActionsSortParameterSortEnumProgressAsc.ToPointer(),
        Status: operations.GetActionsStatusParameterStatusEnumError.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```

## GetActionsID

Returns a specific Action object.

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
    res, err := s.Actions.GetActionsID(ctx, operations.GetActionsIDRequest{
        ID: 544883,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```
