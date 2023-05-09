# Task

### Available Operations

* [TaskPriorityList](#taskprioritylist) - Get default task priority list
* [GetCustomTaskTypesOfWg](#getcustomtasktypesofwg) - Get custom task types of workgroup level
* [GetDefaultTaskStatusList](#getdefaulttaskstatuslist) - Get default task status list
* [GetTaskListOfProject](#gettasklistofproject) - Get task list of project level
* [GetTaskListOfWorkgroup](#gettasklistofworkgroup) - Get task list of workgroup level
* [GetTaskOfProject](#gettaskofproject) - Get a sepcific task of project level
* [GetTaskOfWorkgroup](#gettaskofworkgroup) - Get a sepcific task of workgroup level
* [GetTaskTypesOfWorkgroup](#gettasktypesofworkgroup) - Get task types of workgroup level
* [GetWgTaskStatusListOfWorkgroup](#getwgtaskstatuslistofworkgroup) - Get custom task status of workgroup level
* [PostTaskForProjectJSON](#posttaskforprojectjson) - Create a new task
* [PostTaskForProjectRaw](#posttaskforprojectraw) - Create a new task

## TaskPriorityList

Get default task priority list

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
    res, err := s.Task.TaskPriorityList(ctx, operations.TaskPriorityListRequest{
        WorkgroupID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetCustomTaskTypesOfWg

Get custom task types of workgroup level

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
    res, err := s.Task.GetCustomTaskTypesOfWg(ctx, operations.GetCustomTaskTypesOfWgRequest{
        WorkgroupID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDefaultTaskStatusList

Get default task status list

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
    res, err := s.Task.GetDefaultTaskStatusList(ctx, operations.GetDefaultTaskStatusListRequest{
        WorkgroupID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTaskListOfProject

Get task list of project level

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
    res, err := s.Task.GetTaskListOfProject(ctx, operations.GetTaskListOfProjectRequest{
        ProjectID: "nobis",
        WorkgroupID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTaskListOfWorkgroup

Get task list of workgroup level

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
    res, err := s.Task.GetTaskListOfWorkgroup(ctx, operations.GetTaskListOfWorkgroupRequest{
        WorkgroupID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTaskOfProject

Get a sepcific task of project level

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
    res, err := s.Task.GetTaskOfProject(ctx, operations.GetTaskOfProjectRequest{
        ProjectID: "ipsum",
        TaskID: "veritatis",
        WorkgroupID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTaskOfWorkgroup

Get a sepcific task of workgroup level

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
    res, err := s.Task.GetTaskOfWorkgroup(ctx, operations.GetTaskOfWorkgroupRequest{
        TaskID: "quos",
        WorkgroupID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTaskTypesOfWorkgroup

Get task types of workgroup level

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
    res, err := s.Task.GetTaskTypesOfWorkgroup(ctx, operations.GetTaskTypesOfWorkgroupRequest{
        WorkgroupID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetWgTaskStatusListOfWorkgroup

Get custom task status of workgroup level

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
    res, err := s.Task.GetWgTaskStatusListOfWorkgroup(ctx, operations.GetWgTaskStatusListOfWorkgroupRequest{
        WorkgroupID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostTaskForProjectJSON

Create a new task

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Task.PostTaskForProjectJSON(ctx, operations.PostTaskForProjectJSONRequest{
        TaskPersistVO: &shared.TaskPersistVO{
            ActualDuration: sdk.Float64(1.1),
            ActualDurationHour: sdk.Float64(1.1),
            ActualEndDate: types.MustDateFromString("2022-05-16"),
            ActualStartDate: types.MustDateFromString("2022-09-18"),
            AssignToUserID: sdk.Int64(1),
            Comments: sdk.String("sample comments"),
            Contributors: sdk.String("sample contributors"),
            CustomStatusID: sdk.Int64(1),
            Description: sdk.String("sample description"),
            Name: sdk.String("sample name"),
            PercentageComplete: sdk.Int64(1),
            Priority: sdk.Int64(1),
            RevisedDuration: sdk.Float64(1.1),
            RevisedDurationHour: sdk.Float64(1.1),
            RevisedEndDate: types.MustDateFromString("2022-04-28"),
            RevisedStartDate: types.MustDateFromString("2022-12-08"),
            StatusID: sdk.Int64(1),
            TaskID: sdk.Int64(1),
            TaskTypeID: sdk.Int64(1),
        },
        ProjectID: "aut",
        WorkgroupID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostTaskForProjectRaw

Create a new task

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Task.PostTaskForProjectRaw(ctx, operations.PostTaskForProjectRawRequest{
        RequestBody: []byte("itaque"),
        ProjectID: "consequatur",
        WorkgroupID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
