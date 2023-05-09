# Tasks

### Available Operations

* [TasksTasksClear](#taskstasksclear) - Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
* [TasksTasksDelete](#taskstasksdelete) - Deletes the specified task from the task list.
* [TasksTasksGet](#taskstasksget) - Returns the specified task.
* [TasksTasksInsert](#taskstasksinsert) - Creates a new task on the specified task list.
* [TasksTasksList](#taskstaskslist) - Returns all tasks in the specified task list.
* [TasksTasksMove](#taskstasksmove) - Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
* [TasksTasksPatch](#taskstaskspatch) - Updates the specified task. This method supports patch semantics.
* [TasksTasksUpdate](#taskstasksupdate) - Updates the specified task.

## TasksTasksClear

Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.

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
    res, err := s.Tasks.TasksTasksClear(ctx, operations.TasksTasksClearRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("modi"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        Tasklist: "quos",
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("magni"),
    }, operations.TasksTasksClearSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TasksTasksDelete

Deletes the specified task from the task list.

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
    res, err := s.Tasks.TasksTasksDelete(ctx, operations.TasksTasksDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        Task: "tempore",
        Tasklist: "labore",
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("eum"),
    }, operations.TasksTasksDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TasksTasksGet

Returns the specified task.

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
    res, err := s.Tasks.TasksTasksGet(ctx, operations.TasksTasksGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("provident"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        Task: "dolor",
        Tasklist: "debitis",
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.TasksTasksGetSecurity{
        Option1: &operations.TasksTasksGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## TasksTasksInsert

Creates a new task on the specified task list.

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
    res, err := s.Tasks.TasksTasksInsert(ctx, operations.TasksTasksInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Task: &shared.Task{
            Completed: sdk.String("in"),
            Deleted: sdk.Bool(false),
            Due: sdk.String("illum"),
            Etag: sdk.String("maiores"),
            Hidden: sdk.Bool(false),
            ID: sdk.String("b14cd66a-e395-4efb-9ba8-8f3a66997074"),
            Kind: sdk.String("distinctio"),
            Links: []shared.TaskLinks{
                shared.TaskLinks{
                    Description: sdk.String("labore"),
                    Link: sdk.String("labore"),
                    Type: sdk.String("suscipit"),
                },
                shared.TaskLinks{
                    Description: sdk.String("natus"),
                    Link: sdk.String("nobis"),
                    Type: sdk.String("eum"),
                },
                shared.TaskLinks{
                    Description: sdk.String("vero"),
                    Link: sdk.String("aspernatur"),
                    Type: sdk.String("architecto"),
                },
            },
            Notes: sdk.String("magnam"),
            Parent: sdk.String("et"),
            Position: sdk.String("excepturi"),
            SelfLink: sdk.String("ullam"),
            Status: sdk.String("provident"),
            Title: sdk.String("Ms."),
            Updated: sdk.String("sint"),
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("eum"),
        Parent: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        Previous: sdk.String("necessitatibus"),
        QuotaUser: sdk.String("odit"),
        Tasklist: "nemo",
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("iure"),
    }, operations.TasksTasksInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## TasksTasksList

Returns all tasks in the specified task list.

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
    res, err := s.Tasks.TasksTasksList(ctx, operations.TasksTasksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        CompletedMax: sdk.String("deleniti"),
        CompletedMin: sdk.String("facilis"),
        DueMax: sdk.String("in"),
        DueMin: sdk.String("architecto"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("repudiandae"),
        MaxResults: sdk.Int64(352312),
        OauthToken: sdk.String("expedita"),
        PageToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        ShowCompleted: sdk.Bool(false),
        ShowDeleted: sdk.Bool(false),
        ShowHidden: sdk.Bool(false),
        Tasklist: "quibusdam",
        UpdatedMin: sdk.String("sed"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.TasksTasksListSecurity{
        Option1: &operations.TasksTasksListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tasks != nil {
        // handle response
    }
}
```

## TasksTasksMove

Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.

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
    res, err := s.Tasks.TasksTasksMove(ctx, operations.TasksTasksMoveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("magni"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("quo"),
        Parent: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        Previous: sdk.String("pariatur"),
        QuotaUser: sdk.String("maxime"),
        Task: "ea",
        Tasklist: "excepturi",
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("ea"),
    }, operations.TasksTasksMoveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## TasksTasksPatch

Updates the specified task. This method supports patch semantics.

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
    res, err := s.Tasks.TasksTasksPatch(ctx, operations.TasksTasksPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Task1: &shared.Task{
            Completed: sdk.String("ab"),
            Deleted: sdk.Bool(false),
            Due: sdk.String("maiores"),
            Etag: sdk.String("quidem"),
            Hidden: sdk.Bool(false),
            ID: sdk.String("576b0d5f-0d30-4c5f-bb25-87053202c73d"),
            Kind: sdk.String("nostrum"),
            Links: []shared.TaskLinks{
                shared.TaskLinks{
                    Description: sdk.String("recusandae"),
                    Link: sdk.String("omnis"),
                    Type: sdk.String("facilis"),
                },
                shared.TaskLinks{
                    Description: sdk.String("perspiciatis"),
                    Link: sdk.String("voluptatem"),
                    Type: sdk.String("porro"),
                },
                shared.TaskLinks{
                    Description: sdk.String("consequuntur"),
                    Link: sdk.String("blanditiis"),
                    Type: sdk.String("error"),
                },
                shared.TaskLinks{
                    Description: sdk.String("eaque"),
                    Link: sdk.String("occaecati"),
                    Type: sdk.String("rerum"),
                },
            },
            Notes: sdk.String("adipisci"),
            Parent: sdk.String("asperiores"),
            Position: sdk.String("earum"),
            SelfLink: sdk.String("modi"),
            Status: sdk.String("iste"),
            Title: sdk.String("Miss"),
            Updated: sdk.String("deleniti"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("libero"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        TaskPathParameter: "aliquid",
        Tasklist: "dolorem",
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.TasksTasksPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## TasksTasksUpdate

Updates the specified task.

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
    res, err := s.Tasks.TasksTasksUpdate(ctx, operations.TasksTasksUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Task1: &shared.Task{
            Completed: sdk.String("ipsum"),
            Deleted: sdk.Bool(false),
            Due: sdk.String("hic"),
            Etag: sdk.String("excepturi"),
            Hidden: sdk.Bool(false),
            ID: sdk.String("b77f3a41-0067-44eb-b692-80d1ba77a89e"),
            Kind: sdk.String("distinctio"),
            Links: []shared.TaskLinks{
                shared.TaskLinks{
                    Description: sdk.String("nihil"),
                    Link: sdk.String("ipsum"),
                    Type: sdk.String("voluptate"),
                },
                shared.TaskLinks{
                    Description: sdk.String("id"),
                    Link: sdk.String("saepe"),
                    Type: sdk.String("eius"),
                },
                shared.TaskLinks{
                    Description: sdk.String("aspernatur"),
                    Link: sdk.String("perferendis"),
                    Type: sdk.String("amet"),
                },
                shared.TaskLinks{
                    Description: sdk.String("optio"),
                    Link: sdk.String("accusamus"),
                    Type: sdk.String("ad"),
                },
            },
            Notes: sdk.String("saepe"),
            Parent: sdk.String("suscipit"),
            Position: sdk.String("deserunt"),
            SelfLink: sdk.String("provident"),
            Status: sdk.String("minima"),
            Title: sdk.String("Dr."),
            Updated: sdk.String("totam"),
        },
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        TaskPathParameter: "officiis",
        Tasklist: "qui",
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("a"),
    }, operations.TasksTasksUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```
