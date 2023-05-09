# Projects

### Available Operations

* [WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancel](#workflowexecutionsprojectslocationsworkflowsexecutionscancel) - Cancels an execution of the given name.
* [WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreate](#workflowexecutionsprojectslocationsworkflowsexecutionscreate) - Creates a new execution using the latest revision of the given workflow.
* [WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGet](#workflowexecutionsprojectslocationsworkflowsexecutionsget) - Returns an execution of the given name.
* [WorkflowexecutionsProjectsLocationsWorkflowsExecutionsList](#workflowexecutionsprojectslocationsworkflowsexecutionslist) - Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
* [WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution](#workflowexecutionsprojectslocationsworkflowstriggerpubsubexecution) - Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.

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
            Labels: map[string]string{
                "esse": "ipsum",
                "excepturi": "aspernatur",
                "perferendis": "ad",
            },
            StateError: &shared.StateError{
                Details: sdk.String("natus"),
                Type: shared.StateErrorTypeEnumTypeUnspecified.ToPointer(),
            },
            Status: &shared.Status{
                CurrentSteps: []shared.Step{
                    shared.Step{
                        Routine: sdk.String("dolor"),
                        Step: sdk.String("natus"),
                    },
                    shared.Step{
                        Routine: sdk.String("laboriosam"),
                        Step: sdk.String("hic"),
                    },
                    shared.Step{
                        Routine: sdk.String("saepe"),
                        Step: sdk.String("fuga"),
                    },
                },
            },
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("quidem"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("est"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        Name: "Ronnie Mohr",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        Filter: sdk.String("consequuntur"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("mollitia"),
        OrderBy: sdk.String("occaecati"),
        PageSize: sdk.Int64(253291),
        PageToken: sdk.String("commodi"),
        Parent: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("error"),
        View: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnumExecutionViewUnspecified.ToPointer(),
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

## WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution

Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.

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
    res, err := s.Projects.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution(ctx, operations.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TriggerPubsubExecutionRequest: &shared.TriggerPubsubExecutionRequest{
            GCPCloudEventsMode: sdk.String("vitae"),
            Message: &shared.PubsubMessage{
                Attributes: map[string]string{
                    "animi": "enim",
                    "odit": "quo",
                    "sequi": "tenetur",
                },
                Data: sdk.String("ipsam"),
                MessageID: sdk.String("id"),
                OrderingKey: sdk.String("possimus"),
                PublishTime: sdk.String("aut"),
            },
            Subscription: sdk.String("quasi"),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("praesentium"),
        Workflow: "voluptatibus",
    }, operations.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity{
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
