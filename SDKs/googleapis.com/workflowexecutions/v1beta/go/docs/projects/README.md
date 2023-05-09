# Projects

### Available Operations

* [WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancel](#workflowexecutionsprojectslocationsworkflowsexecutionscancel) - Cancels an execution of the given name.
* [WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreate](#workflowexecutionsprojectslocationsworkflowsexecutionscreate) - Creates a new execution using the latest revision of the given workflow.
* [WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGet](#workflowexecutionsprojectslocationsworkflowsexecutionsget) - Returns an execution of the given name.
* [WorkflowexecutionsProjectsLocationsWorkflowsExecutionsList](#workflowexecutionsprojectslocationsworkflowsexecutionslist) - Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).

## WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancel

Cancels an execution of the given name.

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
    res, err := s.Projects.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(ctx, operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "excepturi": "nisi",
            "recusandae": "temporibus",
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        Name: "Estelle Will",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```

## WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreate

Creates a new execution using the latest revision of the given workflow.

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
    res, err := s.Projects.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreate(ctx, operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExecutionInput: &shared.ExecutionInput{
            Argument: sdk.String("quod"),
            CallLogLevel: shared.ExecutionCallLogLevelEnumLogAllCalls.ToPointer(),
            Error: &shared.Error{
                Context: sdk.String("totam"),
                Payload: sdk.String("porro"),
                StackTrace: &shared.StackTrace{
                    Elements: []shared.StackTraceElement{
                        shared.StackTraceElement{
                            Position: &shared.Position{
                                Column: sdk.String("dicta"),
                                Length: sdk.String("nam"),
                                Line: sdk.String("officia"),
                            },
                            Routine: sdk.String("occaecati"),
                            Step: sdk.String("fugit"),
                        },
                        shared.StackTraceElement{
                            Position: &shared.Position{
                                Column: sdk.String("deleniti"),
                                Length: sdk.String("hic"),
                                Line: sdk.String("optio"),
                            },
                            Routine: sdk.String("totam"),
                            Step: sdk.String("beatae"),
                        },
                        shared.StackTraceElement{
                            Position: &shared.Position{
                                Column: sdk.String("commodi"),
                                Length: sdk.String("molestiae"),
                                Line: sdk.String("modi"),
                            },
                            Routine: sdk.String("qui"),
                            Step: sdk.String("impedit"),
                        },
                    },
                },
            },
            Status: &shared.Status{
                CurrentSteps: []shared.Step{
                    shared.Step{
                        Routine: sdk.String("esse"),
                        Step: sdk.String("ipsum"),
                    },
                    shared.Step{
                        Routine: sdk.String("excepturi"),
                        Step: sdk.String("aspernatur"),
                    },
                    shared.Step{
                        Routine: sdk.String("perferendis"),
                        Step: sdk.String("ad"),
                    },
                },
            },
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("laboriosam"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("in"),
    }, operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```

## WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGet

Returns an execution of the given name.

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
    res, err := s.Projects.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGet(ctx, operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("architecto"),
        Name: "Lela Orn",
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("explicabo"),
        View: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnumFull.ToPointer(),
    }, operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```

## WorkflowexecutionsProjectsLocationsWorkflowsExecutionsList

Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).

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
    res, err := s.Projects.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsList(ctx, operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("iure"),
        PageSize: sdk.Int64(634274),
        PageToken: sdk.String("doloribus"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
        View: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnumBasic.ToPointer(),
    }, operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutionsResponse != nil {
        // handle response
    }
}
```
