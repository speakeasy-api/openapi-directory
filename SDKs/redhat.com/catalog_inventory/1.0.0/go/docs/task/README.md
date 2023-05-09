# Task

### Available Operations

* [ListTasks](#listtasks) - List Tasks
* [ShowTask](#showtask) - Show an existing Task
* [UpdateTask](#updatetask) - Update an existing Task

## ListTasks

Returns an array of Task objects

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Task.ListTasks(ctx, operations.ListTasksRequest{
        Filter: map[string]interface{}{
            "culpa": "expedita",
        },
        Limit: sdk.Int64(299643),
        Offset: sdk.Int64(7884),
        SortBy: map[string]interface{}{
            "ipsam": "sit",
            "voluptatum": "quas",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TasksCollection != nil {
        // handle response
    }
}
```

## ShowTask

Returns a Task object

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Task.ShowTask(ctx, operations.ShowTaskRequest{
        ID: "e5186206-5e90-44f3-b119-4b8abf603a79",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## UpdateTask

Updates a Task object

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Task.UpdateTask(ctx, operations.UpdateTaskRequest{
        TaskInput: shared.TaskInput{
            CompletedAt: types.MustTimeFromString("2021-03-27T07:55:22.584Z"),
            Message: sdk.String("received message starting inventory collection"),
            Name: sdk.String("Order Service Plan"),
            Output: map[string]interface{}{
                "delectus": "voluptates",
                "perferendis": "est",
                "quidem": "reprehenderit",
                "facere": "fuga",
            },
            State: shared.TaskStateEnumRunning.ToPointer(),
            Status: shared.TaskStatusEnumError.ToPointer(),
            TargetSourceRef: sdk.String("praesentium"),
            TargetType: sdk.String("mollitia"),
            Type: sdk.String("CloudConnectorTask"),
        },
        ID: "50ce187f-86bc-4173-9689-eee9526f8d98",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
