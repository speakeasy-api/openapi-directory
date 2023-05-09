# Tasks

## Overview

Tasks

### Available Operations

* [GetV2TasksJSON](#getv2tasksjson) - List tasks
* [GetV2TasksIDJSON](#getv2tasksidjson) - Fetch a task
* [PostV2TasksJSON](#postv2tasksjson) - Create a Task
* [PutV2TasksIDJSON](#putv2tasksidjson) - Update a Task

## GetV2TasksJSON

Fetches multiple task records. The records can be filtered, paged, and sorted according to
the respective parameters.


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
    res, err := s.Tasks.GetV2TasksJSON(ctx, operations.GetV2TasksJSONRequest{
        AccountID: []int64{
            774748,
            550338,
            994234,
            532326,
        },
        CurrentState: []string{
            "corporis",
            "accusantium",
            "illo",
        },
        IdempotencyKey: sdk.String("aut"),
        Ids: []int64{
            342104,
            869848,
            823472,
            205499,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Locale: []string{
            "vel",
            "sapiente",
            "mollitia",
            "quae",
        },
        Page: sdk.Int64(552646),
        PerPage: sdk.Int64(44571),
        PersonID: []int64{
            913284,
            324052,
        },
        SortBy: sdk.String("aliquam"),
        SortDirection: sdk.String("quisquam"),
        TaskType: []string{
            "consequuntur",
            "maiores",
            "inventore",
        },
        TimeIntervalFilter: sdk.String("aliquid"),
        UserID: []int64{
            665872,
            221329,
            400879,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2TasksIDJSON

Fetches a task, by ID only.


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
    res, err := s.Tasks.GetV2TasksIDJSON(ctx, operations.GetV2TasksIDJSONRequest{
        ID: "3c8873e4-8438-40b1-b6b8-ca275a60a04c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2TasksJSON

Creates a task.


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
    res, err := s.Tasks.PostV2TasksJSON(ctx, operations.PostV2TasksJSONRequestBody{
        CurrentState: "aliquam",
        Description: sdk.String("iste"),
        DueDate: "ullam",
        IdempotencyKey: sdk.String("eligendi"),
        PersonID: "placeat",
        RemindAt: sdk.String("voluptas"),
        Subject: "occaecati",
        TaskType: "unde",
        UserID: 75277,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2TasksIDJSON

Updates a task.


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
    res, err := s.Tasks.PutV2TasksIDJSON(ctx, operations.PutV2TasksIDJSONRequest{
        RequestBody: &operations.PutV2TasksIDJSONRequestBody{
            CurrentState: sdk.String("nihil"),
            Description: sdk.String("inventore"),
            DueDate: sdk.String("libero"),
            IsLogged: sdk.Bool(false),
            RemindAt: sdk.String("ipsam"),
            Subject: sdk.String("quasi"),
        },
        ID: "c1bdb1cf-4b88-48eb-9fc4-ccca99bc7fc0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
