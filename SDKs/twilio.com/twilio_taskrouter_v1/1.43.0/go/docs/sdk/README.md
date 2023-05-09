# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateActivity](#createactivity)
* [CreateTask](#createtask)
* [CreateTaskChannel](#createtaskchannel)
* [CreateTaskQueue](#createtaskqueue)
* [CreateWorker](#createworker)
* [CreateWorkflow](#createworkflow)
* [CreateWorkspace](#createworkspace)
* [DeleteActivity](#deleteactivity)
* [DeleteTask](#deletetask)
* [DeleteTaskChannel](#deletetaskchannel)
* [DeleteTaskQueue](#deletetaskqueue)
* [DeleteWorker](#deleteworker)
* [DeleteWorkflow](#deleteworkflow)
* [DeleteWorkspace](#deleteworkspace)
* [FetchActivity](#fetchactivity)
* [FetchEvent](#fetchevent)
* [FetchTask](#fetchtask)
* [FetchTaskChannel](#fetchtaskchannel)
* [FetchTaskQueue](#fetchtaskqueue)
* [FetchTaskQueueCumulativeStatistics](#fetchtaskqueuecumulativestatistics)
* [FetchTaskQueueRealTimeStatistics](#fetchtaskqueuerealtimestatistics)
* [FetchTaskQueueStatistics](#fetchtaskqueuestatistics)
* [FetchTaskReservation](#fetchtaskreservation)
* [FetchWorker](#fetchworker)
* [FetchWorkerChannel](#fetchworkerchannel)
* [FetchWorkerInstanceStatistics](#fetchworkerinstancestatistics)
* [FetchWorkerReservation](#fetchworkerreservation)
* [FetchWorkerStatistics](#fetchworkerstatistics)
* [FetchWorkersCumulativeStatistics](#fetchworkerscumulativestatistics)
* [FetchWorkersRealTimeStatistics](#fetchworkersrealtimestatistics)
* [FetchWorkflow](#fetchworkflow)
* [FetchWorkflowCumulativeStatistics](#fetchworkflowcumulativestatistics)
* [FetchWorkflowRealTimeStatistics](#fetchworkflowrealtimestatistics)
* [FetchWorkflowStatistics](#fetchworkflowstatistics)
* [FetchWorkspace](#fetchworkspace)
* [FetchWorkspaceCumulativeStatistics](#fetchworkspacecumulativestatistics)
* [FetchWorkspaceRealTimeStatistics](#fetchworkspacerealtimestatistics)
* [FetchWorkspaceStatistics](#fetchworkspacestatistics)
* [ListActivity](#listactivity)
* [ListEvent](#listevent)
* [ListTask](#listtask)
* [ListTaskChannel](#listtaskchannel)
* [ListTaskQueue](#listtaskqueue)
* [ListTaskQueuesStatistics](#listtaskqueuesstatistics)
* [ListTaskReservation](#listtaskreservation)
* [ListWorker](#listworker)
* [ListWorkerChannel](#listworkerchannel)
* [ListWorkerReservation](#listworkerreservation)
* [ListWorkflow](#listworkflow)
* [ListWorkspace](#listworkspace)
* [UpdateActivity](#updateactivity)
* [UpdateTask](#updatetask)
* [UpdateTaskChannel](#updatetaskchannel)
* [UpdateTaskQueue](#updatetaskqueue)
* [UpdateTaskReservation](#updatetaskreservation)
* [UpdateWorker](#updateworker)
* [UpdateWorkerChannel](#updateworkerchannel)
* [UpdateWorkerReservation](#updateworkerreservation)
* [UpdateWorkflow](#updateworkflow)
* [UpdateWorkspace](#updateworkspace)

## CreateActivity

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
    res, err := s.SDK.CreateActivity(ctx, operations.CreateActivityRequest{
        RequestBody: &operations.CreateActivityCreateActivityRequest{
            Available: sdk.Bool(false),
            FriendlyName: "distinctio",
        },
        WorkspaceSid: "quibusdam",
    }, operations.CreateActivitySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceActivity != nil {
        // handle response
    }
}
```

## CreateTask

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
    res, err := s.SDK.CreateTask(ctx, operations.CreateTaskRequest{
        RequestBody: &operations.CreateTaskCreateTaskRequest{
            Attributes: sdk.String("unde"),
            Priority: sdk.Int64(857946),
            TaskChannel: sdk.String("corrupti"),
            Timeout: sdk.Int64(847252),
            WorkflowSid: sdk.String("vel"),
        },
        WorkspaceSid: "error",
    }, operations.CreateTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTask != nil {
        // handle response
    }
}
```

## CreateTaskChannel

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
    res, err := s.SDK.CreateTaskChannel(ctx, operations.CreateTaskChannelRequest{
        RequestBody: &operations.CreateTaskChannelCreateTaskChannelRequest{
            ChannelOptimizedRouting: sdk.Bool(false),
            FriendlyName: "deserunt",
            UniqueName: "suscipit",
        },
        WorkspaceSid: "iure",
    }, operations.CreateTaskChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskChannel != nil {
        // handle response
    }
}
```

## CreateTaskQueue

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
    res, err := s.SDK.CreateTaskQueue(ctx, operations.CreateTaskQueueRequest{
        RequestBody: &operations.CreateTaskQueueCreateTaskQueueRequest{
            AssignmentActivitySid: sdk.String("magnam"),
            FriendlyName: "debitis",
            MaxReservedWorkers: sdk.Int64(56713),
            ReservationActivitySid: sdk.String("delectus"),
            TargetWorkers: sdk.String("tempora"),
            TaskOrder: shared.TaskQueueEnumTaskOrderEnumFifo.ToPointer(),
        },
        WorkspaceSid: "molestiae",
    }, operations.CreateTaskQueueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskQueue != nil {
        // handle response
    }
}
```

## CreateWorker

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
    res, err := s.SDK.CreateWorker(ctx, operations.CreateWorkerRequest{
        RequestBody: &operations.CreateWorkerCreateWorkerRequest{
            ActivitySid: sdk.String("minus"),
            Attributes: sdk.String("placeat"),
            FriendlyName: "voluptatum",
        },
        WorkspaceSid: "iusto",
    }, operations.CreateWorkerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorker != nil {
        // handle response
    }
}
```

## CreateWorkflow

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
    res, err := s.SDK.CreateWorkflow(ctx, operations.CreateWorkflowRequest{
        RequestBody: &operations.CreateWorkflowCreateWorkflowRequest{
            AssignmentCallbackURL: sdk.String("https://hospitable-travel.org"),
            Configuration: "ab",
            FallbackAssignmentCallbackURL: sdk.String("http://bountiful-pension.com"),
            FriendlyName: "ipsam",
            TaskReservationTimeout: sdk.Int64(832620),
        },
        WorkspaceSid: "sapiente",
    }, operations.CreateWorkflowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkflow != nil {
        // handle response
    }
}
```

## CreateWorkspace

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
    res, err := s.SDK.CreateWorkspace(ctx, operations.CreateWorkspaceCreateWorkspaceRequest{
        EventCallbackURL: sdk.String("https://constant-sundae.org"),
        EventsFilter: sdk.String("maiores"),
        FriendlyName: "molestiae",
        MultiTaskEnabled: sdk.Bool(false),
        PrioritizeQueueOrder: shared.WorkspaceEnumQueueOrderEnumLifo.ToPointer(),
        Template: sdk.String("quod"),
    }, operations.CreateWorkspaceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1Workspace != nil {
        // handle response
    }
}
```

## DeleteActivity

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
    res, err := s.SDK.DeleteActivity(ctx, operations.DeleteActivityRequest{
        Sid: "esse",
        WorkspaceSid: "totam",
    }, operations.DeleteActivitySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTask

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
    res, err := s.SDK.DeleteTask(ctx, operations.DeleteTaskRequest{
        IfMatch: sdk.String("porro"),
        Sid: "dolorum",
        WorkspaceSid: "dicta",
    }, operations.DeleteTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTaskChannel

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
    res, err := s.SDK.DeleteTaskChannel(ctx, operations.DeleteTaskChannelRequest{
        Sid: "nam",
        WorkspaceSid: "officia",
    }, operations.DeleteTaskChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTaskQueue

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
    res, err := s.SDK.DeleteTaskQueue(ctx, operations.DeleteTaskQueueRequest{
        Sid: "occaecati",
        WorkspaceSid: "fugit",
    }, operations.DeleteTaskQueueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorker

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
    res, err := s.SDK.DeleteWorker(ctx, operations.DeleteWorkerRequest{
        IfMatch: sdk.String("deleniti"),
        Sid: "hic",
        WorkspaceSid: "optio",
    }, operations.DeleteWorkerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorkflow

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
    res, err := s.SDK.DeleteWorkflow(ctx, operations.DeleteWorkflowRequest{
        Sid: "totam",
        WorkspaceSid: "beatae",
    }, operations.DeleteWorkflowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorkspace

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
    res, err := s.SDK.DeleteWorkspace(ctx, operations.DeleteWorkspaceRequest{
        Sid: "commodi",
    }, operations.DeleteWorkspaceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchActivity

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
    res, err := s.SDK.FetchActivity(ctx, operations.FetchActivityRequest{
        Sid: "molestiae",
        WorkspaceSid: "modi",
    }, operations.FetchActivitySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceActivity != nil {
        // handle response
    }
}
```

## FetchEvent

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
    res, err := s.SDK.FetchEvent(ctx, operations.FetchEventRequest{
        Sid: "qui",
        WorkspaceSid: "impedit",
    }, operations.FetchEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceEvent != nil {
        // handle response
    }
}
```

## FetchTask

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
    res, err := s.SDK.FetchTask(ctx, operations.FetchTaskRequest{
        Sid: "cum",
        WorkspaceSid: "esse",
    }, operations.FetchTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTask != nil {
        // handle response
    }
}
```

## FetchTaskChannel

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
    res, err := s.SDK.FetchTaskChannel(ctx, operations.FetchTaskChannelRequest{
        Sid: "ipsum",
        WorkspaceSid: "excepturi",
    }, operations.FetchTaskChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskChannel != nil {
        // handle response
    }
}
```

## FetchTaskQueue

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
    res, err := s.SDK.FetchTaskQueue(ctx, operations.FetchTaskQueueRequest{
        Sid: "aspernatur",
        WorkspaceSid: "perferendis",
    }, operations.FetchTaskQueueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskQueue != nil {
        // handle response
    }
}
```

## FetchTaskQueueCumulativeStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchTaskQueueCumulativeStatistics(ctx, operations.FetchTaskQueueCumulativeStatisticsRequest{
        EndDate: types.MustTimeFromString("2022-05-20T13:30:46.463Z"),
        Minutes: sdk.Int64(149675),
        SplitByWaitTime: sdk.String("iste"),
        StartDate: types.MustTimeFromString("2022-05-20T19:39:29.035Z"),
        TaskChannel: sdk.String("laboriosam"),
        TaskQueueSid: "hic",
        WorkspaceSid: "saepe",
    }, operations.FetchTaskQueueCumulativeStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics != nil {
        // handle response
    }
}
```

## FetchTaskQueueRealTimeStatistics

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
    res, err := s.SDK.FetchTaskQueueRealTimeStatistics(ctx, operations.FetchTaskQueueRealTimeStatisticsRequest{
        TaskChannel: sdk.String("fuga"),
        TaskQueueSid: "in",
        WorkspaceSid: "corporis",
    }, operations.FetchTaskQueueRealTimeStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics != nil {
        // handle response
    }
}
```

## FetchTaskQueueStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchTaskQueueStatistics(ctx, operations.FetchTaskQueueStatisticsRequest{
        EndDate: types.MustTimeFromString("2022-02-15T23:12:00.119Z"),
        Minutes: sdk.Int64(902349),
        SplitByWaitTime: sdk.String("quidem"),
        StartDate: types.MustTimeFromString("2022-12-10T00:25:28.749Z"),
        TaskChannel: sdk.String("reiciendis"),
        TaskQueueSid: "est",
        WorkspaceSid: "mollitia",
    }, operations.FetchTaskQueueStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics != nil {
        // handle response
    }
}
```

## FetchTaskReservation

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
    res, err := s.SDK.FetchTaskReservation(ctx, operations.FetchTaskReservationRequest{
        Sid: "laborum",
        TaskSid: "dolores",
        WorkspaceSid: "dolorem",
    }, operations.FetchTaskReservationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskTaskReservation != nil {
        // handle response
    }
}
```

## FetchWorker

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
    res, err := s.SDK.FetchWorker(ctx, operations.FetchWorkerRequest{
        Sid: "corporis",
        WorkspaceSid: "explicabo",
    }, operations.FetchWorkerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorker != nil {
        // handle response
    }
}
```

## FetchWorkerChannel

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
    res, err := s.SDK.FetchWorkerChannel(ctx, operations.FetchWorkerChannelRequest{
        Sid: "nobis",
        WorkerSid: "enim",
        WorkspaceSid: "omnis",
    }, operations.FetchWorkerChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkerWorkerChannel != nil {
        // handle response
    }
}
```

## FetchWorkerInstanceStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWorkerInstanceStatistics(ctx, operations.FetchWorkerInstanceStatisticsRequest{
        EndDate: types.MustTimeFromString("2022-09-04T08:35:09.957Z"),
        Minutes: sdk.Int64(570197),
        StartDate: types.MustTimeFromString("2022-07-24T21:51:02.112Z"),
        TaskChannel: sdk.String("culpa"),
        WorkerSid: "doloribus",
        WorkspaceSid: "sapiente",
    }, operations.FetchWorkerInstanceStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics != nil {
        // handle response
    }
}
```

## FetchWorkerReservation

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
    res, err := s.SDK.FetchWorkerReservation(ctx, operations.FetchWorkerReservationRequest{
        Sid: "architecto",
        WorkerSid: "mollitia",
        WorkspaceSid: "dolorem",
    }, operations.FetchWorkerReservationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkerWorkerReservation != nil {
        // handle response
    }
}
```

## FetchWorkerStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWorkerStatistics(ctx, operations.FetchWorkerStatisticsRequest{
        EndDate: types.MustTimeFromString("2022-09-05T05:51:25.673Z"),
        FriendlyName: sdk.String("repellat"),
        Minutes: sdk.Int64(653108),
        StartDate: types.MustTimeFromString("2022-06-30T02:19:51.375Z"),
        TaskChannel: sdk.String("commodi"),
        TaskQueueName: sdk.String("quam"),
        TaskQueueSid: sdk.String("molestiae"),
        WorkspaceSid: "velit",
    }, operations.FetchWorkerStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkerWorkerStatistics != nil {
        // handle response
    }
}
```

## FetchWorkersCumulativeStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWorkersCumulativeStatistics(ctx, operations.FetchWorkersCumulativeStatisticsRequest{
        EndDate: types.MustTimeFromString("2022-09-06T22:51:09.401Z"),
        Minutes: sdk.Int64(338007),
        StartDate: types.MustTimeFromString("2022-04-29T17:10:10.440Z"),
        TaskChannel: sdk.String("animi"),
        WorkspaceSid: "enim",
    }, operations.FetchWorkersCumulativeStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics != nil {
        // handle response
    }
}
```

## FetchWorkersRealTimeStatistics

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
    res, err := s.SDK.FetchWorkersRealTimeStatistics(ctx, operations.FetchWorkersRealTimeStatisticsRequest{
        TaskChannel: sdk.String("odit"),
        WorkspaceSid: "quo",
    }, operations.FetchWorkersRealTimeStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics != nil {
        // handle response
    }
}
```

## FetchWorkflow

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
    res, err := s.SDK.FetchWorkflow(ctx, operations.FetchWorkflowRequest{
        Sid: "sequi",
        WorkspaceSid: "tenetur",
    }, operations.FetchWorkflowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkflow != nil {
        // handle response
    }
}
```

## FetchWorkflowCumulativeStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWorkflowCumulativeStatistics(ctx, operations.FetchWorkflowCumulativeStatisticsRequest{
        EndDate: types.MustTimeFromString("2022-05-04T04:15:52.352Z"),
        Minutes: sdk.Int64(820994),
        SplitByWaitTime: sdk.String("aut"),
        StartDate: types.MustTimeFromString("2022-05-18T15:52:05.226Z"),
        TaskChannel: sdk.String("temporibus"),
        WorkflowSid: "laborum",
        WorkspaceSid: "quasi",
    }, operations.FetchWorkflowCumulativeStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics != nil {
        // handle response
    }
}
```

## FetchWorkflowRealTimeStatistics

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
    res, err := s.SDK.FetchWorkflowRealTimeStatistics(ctx, operations.FetchWorkflowRealTimeStatisticsRequest{
        TaskChannel: sdk.String("reiciendis"),
        WorkflowSid: "voluptatibus",
        WorkspaceSid: "vero",
    }, operations.FetchWorkflowRealTimeStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics != nil {
        // handle response
    }
}
```

## FetchWorkflowStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWorkflowStatistics(ctx, operations.FetchWorkflowStatisticsRequest{
        EndDate: types.MustTimeFromString("2022-06-28T23:41:25.321Z"),
        Minutes: sdk.Int64(976762),
        SplitByWaitTime: sdk.String("ipsa"),
        StartDate: types.MustTimeFromString("2022-02-05T15:41:25.512Z"),
        TaskChannel: sdk.String("cum"),
        WorkflowSid: "perferendis",
        WorkspaceSid: "doloremque",
    }, operations.FetchWorkflowStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkflowWorkflowStatistics != nil {
        // handle response
    }
}
```

## FetchWorkspace

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
    res, err := s.SDK.FetchWorkspace(ctx, operations.FetchWorkspaceRequest{
        Sid: "reprehenderit",
    }, operations.FetchWorkspaceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1Workspace != nil {
        // handle response
    }
}
```

## FetchWorkspaceCumulativeStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWorkspaceCumulativeStatistics(ctx, operations.FetchWorkspaceCumulativeStatisticsRequest{
        EndDate: types.MustTimeFromString("2022-01-08T10:49:12.847Z"),
        Minutes: sdk.Int64(120196),
        SplitByWaitTime: sdk.String("corporis"),
        StartDate: types.MustTimeFromString("2022-07-09T11:22:20.922Z"),
        TaskChannel: sdk.String("dicta"),
        WorkspaceSid: "harum",
    }, operations.FetchWorkspaceCumulativeStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics != nil {
        // handle response
    }
}
```

## FetchWorkspaceRealTimeStatistics

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
    res, err := s.SDK.FetchWorkspaceRealTimeStatistics(ctx, operations.FetchWorkspaceRealTimeStatisticsRequest{
        TaskChannel: sdk.String("enim"),
        WorkspaceSid: "accusamus",
    }, operations.FetchWorkspaceRealTimeStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics != nil {
        // handle response
    }
}
```

## FetchWorkspaceStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchWorkspaceStatistics(ctx, operations.FetchWorkspaceStatisticsRequest{
        EndDate: types.MustTimeFromString("2022-01-30T20:15:26.045Z"),
        Minutes: sdk.Int64(64147),
        SplitByWaitTime: sdk.String("ipsum"),
        StartDate: types.MustTimeFromString("2021-11-14T09:53:27.431Z"),
        TaskChannel: sdk.String("excepturi"),
        WorkspaceSid: "pariatur",
    }, operations.FetchWorkspaceStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkspaceStatistics != nil {
        // handle response
    }
}
```

## ListActivity

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
    res, err := s.SDK.ListActivity(ctx, operations.ListActivityRequest{
        Available: sdk.String("modi"),
        FriendlyName: sdk.String("praesentium"),
        Page: sdk.Int64(523248),
        PageSize: sdk.Int64(916723),
        PageToken: sdk.String("quasi"),
        WorkspaceSid: "repudiandae",
    }, operations.ListActivitySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActivityResponse != nil {
        // handle response
    }
}
```

## ListEvent

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListEvent(ctx, operations.ListEventRequest{
        EndDate: types.MustTimeFromString("2022-11-01T07:52:08.326Z"),
        EventType: sdk.String("itaque"),
        Minutes: sdk.Int64(277718),
        Page: sdk.Int64(318569),
        PageSize: sdk.Int64(9356),
        PageToken: sdk.String("est"),
        ReservationSid: sdk.String("quibusdam"),
        Sid: sdk.String("explicabo"),
        StartDate: types.MustTimeFromString("2021-07-27T01:56:50.693Z"),
        TaskChannel: sdk.String("quibusdam"),
        TaskQueueSid: sdk.String("labore"),
        TaskSid: sdk.String("modi"),
        WorkerSid: sdk.String("qui"),
        WorkflowSid: sdk.String("aliquid"),
        WorkspaceSid: "cupiditate",
    }, operations.ListEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventResponse != nil {
        // handle response
    }
}
```

## ListTask

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
    res, err := s.SDK.ListTask(ctx, operations.ListTaskRequest{
        AssignmentStatus: []string{
            "perferendis",
            "magni",
            "assumenda",
        },
        EvaluateTaskAttributes: sdk.String("ipsam"),
        HasAddons: sdk.Bool(false),
        Ordering: sdk.String("alias"),
        Page: sdk.Int64(146441),
        PageSize: sdk.Int64(677817),
        PageToken: sdk.String("excepturi"),
        Priority: sdk.Int64(270008),
        TaskQueueName: sdk.String("facilis"),
        TaskQueueSid: sdk.String("tempore"),
        WorkflowName: sdk.String("labore"),
        WorkflowSid: sdk.String("delectus"),
        WorkspaceSid: "eum",
    }, operations.ListTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTaskResponse != nil {
        // handle response
    }
}
```

## ListTaskChannel

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
    res, err := s.SDK.ListTaskChannel(ctx, operations.ListTaskChannelRequest{
        Page: sdk.Int64(248753),
        PageSize: sdk.Int64(756107),
        PageToken: sdk.String("sint"),
        WorkspaceSid: "aliquid",
    }, operations.ListTaskChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTaskChannelResponse != nil {
        // handle response
    }
}
```

## ListTaskQueue

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
    res, err := s.SDK.ListTaskQueue(ctx, operations.ListTaskQueueRequest{
        EvaluateWorkerAttributes: sdk.String("provident"),
        FriendlyName: sdk.String("necessitatibus"),
        Ordering: sdk.String("sint"),
        Page: sdk.Int64(638921),
        PageSize: sdk.Int64(223081),
        PageToken: sdk.String("debitis"),
        WorkerSid: sdk.String("a"),
        WorkspaceSid: "dolorum",
    }, operations.ListTaskQueueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTaskQueueResponse != nil {
        // handle response
    }
}
```

## ListTaskQueuesStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListTaskQueuesStatistics(ctx, operations.ListTaskQueuesStatisticsRequest{
        EndDate: types.MustTimeFromString("2022-07-21T01:01:39.776Z"),
        FriendlyName: sdk.String("illum"),
        Minutes: sdk.Int64(978571),
        Page: sdk.Int64(699479),
        PageSize: sdk.Int64(116202),
        PageToken: sdk.String("magnam"),
        SplitByWaitTime: sdk.String("cumque"),
        StartDate: types.MustTimeFromString("2021-10-07T01:21:59.434Z"),
        TaskChannel: sdk.String("aliquid"),
        WorkspaceSid: "laborum",
    }, operations.ListTaskQueuesStatisticsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTaskQueuesStatisticsResponse != nil {
        // handle response
    }
}
```

## ListTaskReservation

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
    res, err := s.SDK.ListTaskReservation(ctx, operations.ListTaskReservationRequest{
        Page: sdk.Int64(881104),
        PageSize: sdk.Int64(249796),
        PageToken: sdk.String("occaecati"),
        ReservationStatus: shared.TaskReservationEnumStatusEnumRejected.ToPointer(),
        TaskSid: "accusamus",
        WorkerSid: sdk.String("delectus"),
        WorkspaceSid: "quidem",
    }, operations.ListTaskReservationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTaskReservationResponse != nil {
        // handle response
    }
}
```

## ListWorker

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
    res, err := s.SDK.ListWorker(ctx, operations.ListWorkerRequest{
        ActivityName: sdk.String("provident"),
        ActivitySid: sdk.String("nam"),
        Available: sdk.String("id"),
        FriendlyName: sdk.String("blanditiis"),
        Ordering: sdk.String("deleniti"),
        Page: sdk.Int64(956084),
        PageSize: sdk.Int64(230533),
        PageToken: sdk.String("deserunt"),
        TargetWorkersExpression: sdk.String("nisi"),
        TaskQueueName: sdk.String("vel"),
        TaskQueueSid: sdk.String("natus"),
        WorkspaceSid: "omnis",
    }, operations.ListWorkerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkerResponse != nil {
        // handle response
    }
}
```

## ListWorkerChannel

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
    res, err := s.SDK.ListWorkerChannel(ctx, operations.ListWorkerChannelRequest{
        Page: sdk.Int64(474867),
        PageSize: sdk.Int64(19193),
        PageToken: sdk.String("nihil"),
        WorkerSid: "magnam",
        WorkspaceSid: "distinctio",
    }, operations.ListWorkerChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkerChannelResponse != nil {
        // handle response
    }
}
```

## ListWorkerReservation

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
    res, err := s.SDK.ListWorkerReservation(ctx, operations.ListWorkerReservationRequest{
        Page: sdk.Int64(660174),
        PageSize: sdk.Int64(287991),
        PageToken: sdk.String("labore"),
        ReservationStatus: shared.WorkerReservationEnumStatusEnumTimeout.ToPointer(),
        WorkerSid: "natus",
        WorkspaceSid: "nobis",
    }, operations.ListWorkerReservationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkerReservationResponse != nil {
        // handle response
    }
}
```

## ListWorkflow

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
    res, err := s.SDK.ListWorkflow(ctx, operations.ListWorkflowRequest{
        FriendlyName: sdk.String("eum"),
        Page: sdk.Int64(878453),
        PageSize: sdk.Int64(135474),
        PageToken: sdk.String("architecto"),
        WorkspaceSid: "magnam",
    }, operations.ListWorkflowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowResponse != nil {
        // handle response
    }
}
```

## ListWorkspace

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
    res, err := s.SDK.ListWorkspace(ctx, operations.ListWorkspaceRequest{
        FriendlyName: sdk.String("et"),
        Page: sdk.Int64(569965),
        PageSize: sdk.Int64(354047),
        PageToken: sdk.String("provident"),
    }, operations.ListWorkspaceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkspaceResponse != nil {
        // handle response
    }
}
```

## UpdateActivity

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
    res, err := s.SDK.UpdateActivity(ctx, operations.UpdateActivityRequest{
        RequestBody: &operations.UpdateActivityUpdateActivityRequest{
            FriendlyName: sdk.String("quos"),
        },
        Sid: "sint",
        WorkspaceSid: "accusantium",
    }, operations.UpdateActivitySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceActivity != nil {
        // handle response
    }
}
```

## UpdateTask

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
    res, err := s.SDK.UpdateTask(ctx, operations.UpdateTaskRequest{
        IfMatch: sdk.String("mollitia"),
        RequestBody: &operations.UpdateTaskUpdateTaskRequest{
            AssignmentStatus: shared.TaskEnumStatusEnumWrapping.ToPointer(),
            Attributes: sdk.String("mollitia"),
            Priority: sdk.Int64(320997),
            Reason: sdk.String("eum"),
            TaskChannel: sdk.String("dolor"),
        },
        Sid: "necessitatibus",
        WorkspaceSid: "odit",
    }, operations.UpdateTaskSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTask != nil {
        // handle response
    }
}
```

## UpdateTaskChannel

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
    res, err := s.SDK.UpdateTaskChannel(ctx, operations.UpdateTaskChannelRequest{
        RequestBody: &operations.UpdateTaskChannelUpdateTaskChannelRequest{
            ChannelOptimizedRouting: sdk.Bool(false),
            FriendlyName: sdk.String("nemo"),
        },
        Sid: "quasi",
        WorkspaceSid: "iure",
    }, operations.UpdateTaskChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskChannel != nil {
        // handle response
    }
}
```

## UpdateTaskQueue

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
    res, err := s.SDK.UpdateTaskQueue(ctx, operations.UpdateTaskQueueRequest{
        RequestBody: &operations.UpdateTaskQueueUpdateTaskQueueRequest{
            AssignmentActivitySid: sdk.String("doloribus"),
            FriendlyName: sdk.String("debitis"),
            MaxReservedWorkers: sdk.Int64(260341),
            ReservationActivitySid: sdk.String("maxime"),
            TargetWorkers: sdk.String("deleniti"),
            TaskOrder: shared.TaskQueueEnumTaskOrderEnumLifo.ToPointer(),
        },
        Sid: "in",
        WorkspaceSid: "architecto",
    }, operations.UpdateTaskQueueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskQueue != nil {
        // handle response
    }
}
```

## UpdateTaskReservation

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
    res, err := s.SDK.UpdateTaskReservation(ctx, operations.UpdateTaskReservationRequest{
        IfMatch: sdk.String("architecto"),
        RequestBody: &operations.UpdateTaskReservationUpdateTaskReservationRequest{
            Beep: sdk.String("repudiandae"),
            BeepOnCustomerEntrance: sdk.Bool(false),
            CallAccept: sdk.Bool(false),
            CallFrom: sdk.String("ullam"),
            CallRecord: sdk.String("expedita"),
            CallStatusCallbackURL: sdk.String("http://zesty-sprinter.com"),
            CallTimeout: sdk.Int64(904648),
            CallTo: sdk.String("pariatur"),
            CallURL: sdk.String("http://cute-lens.name"),
            ConferenceRecord: sdk.String("magni"),
            ConferenceRecordingStatusCallback: sdk.String("http://sore-statin.org"),
            ConferenceRecordingStatusCallbackMethod: operations.UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnumPut.ToPointer(),
            ConferenceStatusCallback: sdk.String("http://nimble-caution.info"),
            ConferenceStatusCallbackEvent: []shared.TaskReservationEnumConferenceEventEnum{
                shared.TaskReservationEnumConferenceEventEnumStart,
            },
            ConferenceStatusCallbackMethod: operations.UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnumDelete.ToPointer(),
            ConferenceTrim: sdk.String("quidem"),
            DequeueFrom: sdk.String("ipsam"),
            DequeuePostWorkActivitySid: sdk.String("voluptate"),
            DequeueRecord: sdk.String("autem"),
            DequeueStatusCallbackEvent: []string{
                "eaque",
                "pariatur",
                "nemo",
            },
            DequeueStatusCallbackURL: sdk.String("https://affectionate-stonework.biz"),
            DequeueTimeout: sdk.Int64(11714),
            DequeueTo: sdk.String("cumque"),
            EarlyMedia: sdk.Bool(false),
            EndConferenceOnCustomerExit: sdk.Bool(false),
            EndConferenceOnExit: sdk.Bool(false),
            From: sdk.String("corporis"),
            Instruction: sdk.String("hic"),
            MaxParticipants: sdk.Int64(729991),
            Muted: sdk.Bool(false),
            PostWorkActivitySid: sdk.String("nobis"),
            Record: sdk.Bool(false),
            RecordingChannels: sdk.String("dolores"),
            RecordingStatusCallback: sdk.String("http://mealy-kilometer.com"),
            RecordingStatusCallbackMethod: operations.UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnumPost.ToPointer(),
            RedirectAccept: sdk.Bool(false),
            RedirectCallSid: sdk.String("nesciunt"),
            RedirectURL: sdk.String("http://aggravating-clogs.net"),
            Region: sdk.String("quam"),
            ReservationStatus: shared.TaskReservationEnumStatusEnumAccepted.ToPointer(),
            SipAuthPassword: sdk.String("vero"),
            SipAuthUsername: sdk.String("nostrum"),
            StartConferenceOnEnter: sdk.Bool(false),
            StatusCallback: sdk.String("https://verifiable-offence.net"),
            StatusCallbackEvent: []shared.TaskReservationEnumCallStatusEnum{
                shared.TaskReservationEnumCallStatusEnumInitiated,
                shared.TaskReservationEnumCallStatusEnumCompleted,
                shared.TaskReservationEnumCallStatusEnumInitiated,
            },
            StatusCallbackMethod: operations.UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnumPatch.ToPointer(),
            Supervisor: sdk.String("error"),
            SupervisorMode: shared.TaskReservationEnumSupervisorModeEnumMonitor.ToPointer(),
            Timeout: sdk.Int64(577229),
            To: sdk.String("rerum"),
            WaitMethod: operations.UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnumGet.ToPointer(),
            WaitURL: sdk.String("https://violent-discount.name"),
            WorkerActivitySid: sdk.String("dolorum"),
        },
        Sid: "deleniti",
        TaskSid: "pariatur",
        WorkspaceSid: "provident",
    }, operations.UpdateTaskReservationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceTaskTaskReservation != nil {
        // handle response
    }
}
```

## UpdateWorker

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
    res, err := s.SDK.UpdateWorker(ctx, operations.UpdateWorkerRequest{
        IfMatch: sdk.String("nobis"),
        RequestBody: &operations.UpdateWorkerUpdateWorkerRequest{
            ActivitySid: sdk.String("libero"),
            Attributes: sdk.String("delectus"),
            FriendlyName: sdk.String("quaerat"),
            RejectPendingReservations: sdk.Bool(false),
        },
        Sid: "quos",
        WorkspaceSid: "aliquid",
    }, operations.UpdateWorkerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorker != nil {
        // handle response
    }
}
```

## UpdateWorkerChannel

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
    res, err := s.SDK.UpdateWorkerChannel(ctx, operations.UpdateWorkerChannelRequest{
        RequestBody: &operations.UpdateWorkerChannelUpdateWorkerChannelRequest{
            Available: sdk.Bool(false),
            Capacity: sdk.Int64(212390),
        },
        Sid: "dolorem",
        WorkerSid: "dolor",
        WorkspaceSid: "qui",
    }, operations.UpdateWorkerChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkerWorkerChannel != nil {
        // handle response
    }
}
```

## UpdateWorkerReservation

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
    res, err := s.SDK.UpdateWorkerReservation(ctx, operations.UpdateWorkerReservationRequest{
        IfMatch: sdk.String("ipsum"),
        RequestBody: &operations.UpdateWorkerReservationUpdateWorkerReservationRequest{
            Beep: sdk.String("hic"),
            BeepOnCustomerEntrance: sdk.Bool(false),
            CallAccept: sdk.Bool(false),
            CallFrom: sdk.String("excepturi"),
            CallRecord: sdk.String("cum"),
            CallStatusCallbackURL: sdk.String("http://limping-washbasin.biz"),
            CallTimeout: sdk.Int64(680545),
            CallTo: sdk.String("numquam"),
            CallURL: sdk.String("http://awkward-azimuth.info"),
            ConferenceRecord: sdk.String("odio"),
            ConferenceRecordingStatusCallback: sdk.String("http://unaware-profession.org"),
            ConferenceRecordingStatusCallbackMethod: operations.UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnumPost.ToPointer(),
            ConferenceStatusCallback: sdk.String("https://definite-marines.com"),
            ConferenceStatusCallbackEvent: []shared.WorkerReservationEnumConferenceEventEnum{
                shared.WorkerReservationEnumConferenceEventEnumStart,
                shared.WorkerReservationEnumConferenceEventEnumHold,
                shared.WorkerReservationEnumConferenceEventEnumMute,
                shared.WorkerReservationEnumConferenceEventEnumLeave,
            },
            ConferenceStatusCallbackMethod: operations.UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnumPost.ToPointer(),
            ConferenceTrim: sdk.String("dolorum"),
            DequeueFrom: sdk.String("deleniti"),
            DequeuePostWorkActivitySid: sdk.String("omnis"),
            DequeueRecord: sdk.String("necessitatibus"),
            DequeueStatusCallbackEvent: []string{
                "asperiores",
                "nihil",
                "ipsum",
            },
            DequeueStatusCallbackURL: sdk.String("http://pushy-ticket.biz"),
            DequeueTimeout: sdk.Int64(137220),
            DequeueTo: sdk.String("perferendis"),
            EarlyMedia: sdk.Bool(false),
            EndConferenceOnCustomerExit: sdk.Bool(false),
            EndConferenceOnExit: sdk.Bool(false),
            From: sdk.String("amet"),
            Instruction: sdk.String("optio"),
            MaxParticipants: sdk.Int64(881586),
            Muted: sdk.Bool(false),
            PostWorkActivitySid: sdk.String("ad"),
            Record: sdk.Bool(false),
            RecordingChannels: sdk.String("saepe"),
            RecordingStatusCallback: sdk.String("http://present-necktie.biz"),
            RecordingStatusCallbackMethod: operations.UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnumPut.ToPointer(),
            RedirectAccept: sdk.Bool(false),
            RedirectCallSid: sdk.String("totam"),
            RedirectURL: sdk.String("https://abandoned-supplier.biz"),
            Region: sdk.String("tempora"),
            ReservationStatus: shared.WorkerReservationEnumStatusEnumTimeout.ToPointer(),
            SipAuthPassword: sdk.String("quod"),
            SipAuthUsername: sdk.String("officiis"),
            StartConferenceOnEnter: sdk.Bool(false),
            StatusCallback: sdk.String("http://raw-venue.info"),
            StatusCallbackEvent: []shared.WorkerReservationEnumCallStatusEnum{
                shared.WorkerReservationEnumCallStatusEnumRinging,
                shared.WorkerReservationEnumCallStatusEnumInitiated,
                shared.WorkerReservationEnumCallStatusEnumCompleted,
            },
            StatusCallbackMethod: operations.UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnumDelete.ToPointer(),
            Timeout: sdk.Int64(229442),
            To: sdk.String("tempore"),
            WaitMethod: operations.UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnumDelete.ToPointer(),
            WaitURL: sdk.String("http://frizzy-counter.org"),
            WorkerActivitySid: sdk.String("totam"),
        },
        Sid: "nihil",
        WorkerSid: "sit",
        WorkspaceSid: "expedita",
    }, operations.UpdateWorkerReservationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkerWorkerReservation != nil {
        // handle response
    }
}
```

## UpdateWorkflow

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
    res, err := s.SDK.UpdateWorkflow(ctx, operations.UpdateWorkflowRequest{
        RequestBody: &operations.UpdateWorkflowUpdateWorkflowRequest{
            AssignmentCallbackURL: sdk.String("http://crisp-hen.net"),
            Configuration: sdk.String("voluptas"),
            FallbackAssignmentCallbackURL: sdk.String("https://juvenile-course.biz"),
            FriendlyName: sdk.String("qui"),
            ReEvaluateTasks: sdk.String("cupiditate"),
            TaskReservationTimeout: sdk.Int64(807581),
        },
        Sid: "pariatur",
        WorkspaceSid: "soluta",
    }, operations.UpdateWorkflowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1WorkspaceWorkflow != nil {
        // handle response
    }
}
```

## UpdateWorkspace

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
    res, err := s.SDK.UpdateWorkspace(ctx, operations.UpdateWorkspaceRequest{
        RequestBody: &operations.UpdateWorkspaceUpdateWorkspaceRequest{
            DefaultActivitySid: sdk.String("dicta"),
            EventCallbackURL: sdk.String("https://marvelous-domain.com"),
            EventsFilter: sdk.String("dolores"),
            FriendlyName: sdk.String("distinctio"),
            MultiTaskEnabled: sdk.Bool(false),
            PrioritizeQueueOrder: shared.WorkspaceEnumQueueOrderEnumLifo.ToPointer(),
            TimeoutActivitySid: sdk.String("aliquid"),
        },
        Sid: "quam",
    }, operations.UpdateWorkspaceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskrouterV1Workspace != nil {
        // handle response
    }
}
```
