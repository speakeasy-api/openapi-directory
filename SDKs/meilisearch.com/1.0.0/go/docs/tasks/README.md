# Tasks

### Available Operations

* [CancelTasks](#canceltasks) - Cancel tasks
* [DeleteTasks](#deletetasks) - Delete tasks
* [GetAllTasks](#getalltasks) - Get all tasks
* [GetOneTask](#getonetask) - Get one task

## CancelTasks

Cancel tasks

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
    res, err := s.Tasks.CancelTasks(ctx, operations.CancelTasksRequest{
        AfterEnqueuedAt: sdk.String("nam"),
        AfterFinishedAt: sdk.String("officia"),
        AfterStartedAt: sdk.String("occaecati"),
        BeforeEnqueuedAt: sdk.String("fugit"),
        BeforeFinishedAt: sdk.String("deleniti"),
        BeforeStartedAt: sdk.String("hic"),
        CanceledBy: sdk.String("optio"),
        From: sdk.String("10"),
        IndexUids: sdk.String("books"),
        Limit: sdk.String("2"),
        Statuses: sdk.String("failed"),
        Types: sdk.String("documentAdditionOrUpdate"),
        Uids: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTasks

Delete tasks

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
    res, err := s.Tasks.DeleteTasks(ctx, operations.DeleteTasksRequest{
        AfterEnqueuedAt: sdk.String("beatae"),
        AfterFinishedAt: sdk.String("commodi"),
        AfterStartedAt: sdk.String("molestiae"),
        BeforeEnqueuedAt: sdk.String("modi"),
        BeforeFinishedAt: sdk.String("qui"),
        BeforeStartedAt: sdk.String("impedit"),
        CanceledBy: sdk.String("cum"),
        From: sdk.String("10"),
        IndexUids: sdk.String("books"),
        Limit: sdk.String("2"),
        Statuses: sdk.String("failed"),
        Types: sdk.String("documentAdditionOrUpdate"),
        Uids: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllTasks

Get all tasks

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
    res, err := s.Tasks.GetAllTasks(ctx, operations.GetAllTasksRequest{
        AfterEnqueuedAt: sdk.String("ipsum"),
        AfterFinishedAt: sdk.String("excepturi"),
        AfterStartedAt: sdk.String("aspernatur"),
        BeforeEnqueuedAt: sdk.String("perferendis"),
        BeforeFinishedAt: sdk.String("ad"),
        BeforeStartedAt: sdk.String("natus"),
        CanceledBy: sdk.String("sed"),
        From: sdk.String("10"),
        IndexUids: sdk.String("books"),
        Limit: sdk.String("2"),
        Statuses: sdk.String("failed"),
        Types: sdk.String("documentAdditionOrUpdate"),
        Uids: sdk.String("3"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOneTask

Get one task

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tasks.GetOneTask(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
