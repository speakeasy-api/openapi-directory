# Projects

### Available Operations

* [CloudtasksProjectsLocationsList](#cloudtasksprojectslocationslist) - Lists information about the supported locations for this service.
* [CloudtasksProjectsLocationsQueuesCreate](#cloudtasksprojectslocationsqueuescreate) - Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
* [CloudtasksProjectsLocationsQueuesGetIamPolicy](#cloudtasksprojectslocationsqueuesgetiampolicy) - Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`
* [CloudtasksProjectsLocationsQueuesList](#cloudtasksprojectslocationsqueueslist) - Lists queues. Queues are returned in lexicographical order.
* [CloudtasksProjectsLocationsQueuesPatch](#cloudtasksprojectslocationsqueuespatch) - Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
* [CloudtasksProjectsLocationsQueuesPause](#cloudtasksprojectslocationsqueuespause) - Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.
* [CloudtasksProjectsLocationsQueuesPurge](#cloudtasksprojectslocationsqueuespurge) - Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.
* [CloudtasksProjectsLocationsQueuesResume](#cloudtasksprojectslocationsqueuesresume) - Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
* [CloudtasksProjectsLocationsQueuesSetIamPolicy](#cloudtasksprojectslocationsqueuessetiampolicy) - Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`
* [CloudtasksProjectsLocationsQueuesTasksBuffer](#cloudtasksprojectslocationsqueuestasksbuffer) - Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).
* [CloudtasksProjectsLocationsQueuesTasksCreate](#cloudtasksprojectslocationsqueuestaskscreate) - Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.
* [CloudtasksProjectsLocationsQueuesTasksDelete](#cloudtasksprojectslocationsqueuestasksdelete) - Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.
* [CloudtasksProjectsLocationsQueuesTasksGet](#cloudtasksprojectslocationsqueuestasksget) - Gets a task.
* [CloudtasksProjectsLocationsQueuesTasksList](#cloudtasksprojectslocationsqueuestaskslist) - Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.
* [CloudtasksProjectsLocationsQueuesTasksRun](#cloudtasksprojectslocationsqueuestasksrun) - Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.
* [CloudtasksProjectsLocationsQueuesTestIamPermissions](#cloudtasksprojectslocationsqueuestestiampermissions) - Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## CloudtasksProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.CloudtasksProjectsLocationsList(ctx, operations.CloudtasksProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.CloudtasksProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesCreate

Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesCreate(ctx, operations.CloudtasksProjectsLocationsQueuesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        QueueInput: &shared.QueueInput{
            AppEngineHTTPQueue: &shared.AppEngineHTTPQueue{
                AppEngineRoutingOverride: &shared.AppEngineRouting{
                    Host: sdk.String("at"),
                    Instance: sdk.String("maiores"),
                    Service: sdk.String("molestiae"),
                    Version: sdk.String("quod"),
                },
            },
            HTTPTarget: &shared.HTTPTarget{
                HeaderOverrides: []shared.HeaderOverride{
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("esse"),
                            Value: sdk.String("totam"),
                        },
                    },
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("porro"),
                            Value: sdk.String("dolorum"),
                        },
                    },
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("dicta"),
                            Value: sdk.String("nam"),
                        },
                    },
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("officia"),
                            Value: sdk.String("occaecati"),
                        },
                    },
                },
                HTTPMethod: shared.HTTPTargetHTTPMethodEnumPost.ToPointer(),
                OauthToken: &shared.OAuthToken{
                    Scope: sdk.String("deleniti"),
                    ServiceAccountEmail: sdk.String("hic"),
                },
                OidcToken: &shared.OidcToken{
                    Audience: sdk.String("optio"),
                    ServiceAccountEmail: sdk.String("totam"),
                },
                URIOverride: &shared.URIOverride{
                    Host: sdk.String("beatae"),
                    PathOverride: &shared.PathOverride{
                        Path: sdk.String("commodi"),
                    },
                    Port: sdk.String("molestiae"),
                    QueryOverride: &shared.QueryOverride{
                        QueryParams: sdk.String("modi"),
                    },
                    Scheme: shared.URIOverrideSchemeEnumSchemeUnspecified.ToPointer(),
                    URIOverrideEnforceMode: shared.URIOverrideURIOverrideEnforceModeEnumAlways.ToPointer(),
                },
            },
            Name: sdk.String("Cory Emmerich"),
            PurgeTime: sdk.String("perferendis"),
            RateLimits: &shared.RateLimits{
                MaxBurstSize: sdk.Int(324141),
                MaxConcurrentDispatches: sdk.Int(617636),
                MaxDispatchesPerSecond: sdk.Float64(1496.75),
            },
            RetryConfig: &shared.RetryConfig{
                MaxAttempts: sdk.Int(612096),
                MaxBackoff: sdk.String("dolor"),
                MaxDoublings: sdk.Int(616934),
                MaxRetryDuration: sdk.String("laboriosam"),
                MinBackoff: sdk.String("hic"),
            },
            StackdriverLoggingConfig: &shared.StackdriverLoggingConfig{
                SamplingRatio: sdk.Float64(9025.99),
            },
            State: shared.QueueStateEnumPaused.ToPointer(),
            TaskTTL: sdk.String("in"),
            TombstoneTTL: sdk.String("corporis"),
            Type: shared.QueueTypeEnumPull.ToPointer(),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.CloudtasksProjectsLocationsQueuesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Queue != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesGetIamPolicy

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesGetIamPolicy(ctx, operations.CloudtasksProjectsLocationsQueuesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(358152),
            },
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        Resource: "accusantium",
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.CloudtasksProjectsLocationsQueuesGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesList

Lists queues. Queues are returned in lexicographical order.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesList(ctx, operations.CloudtasksProjectsLocationsQueuesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Filter: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellat"),
        PageSize: sdk.Int64(653108),
        PageToken: sdk.String("occaecati"),
        Parent: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        ReadMask: sdk.String("quam"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("velit"),
    }, operations.CloudtasksProjectsLocationsQueuesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQueuesResponse != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesPatch

Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesPatch(ctx, operations.CloudtasksProjectsLocationsQueuesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        QueueInput: &shared.QueueInput{
            AppEngineHTTPQueue: &shared.AppEngineHTTPQueue{
                AppEngineRoutingOverride: &shared.AppEngineRouting{
                    Host: sdk.String("quia"),
                    Instance: sdk.String("quis"),
                    Service: sdk.String("vitae"),
                    Version: sdk.String("laborum"),
                },
            },
            HTTPTarget: &shared.HTTPTarget{
                HeaderOverrides: []shared.HeaderOverride{
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("enim"),
                            Value: sdk.String("odit"),
                        },
                    },
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("quo"),
                            Value: sdk.String("sequi"),
                        },
                    },
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("tenetur"),
                            Value: sdk.String("ipsam"),
                        },
                    },
                },
                HTTPMethod: shared.HTTPTargetHTTPMethodEnumDelete.ToPointer(),
                OauthToken: &shared.OAuthToken{
                    Scope: sdk.String("possimus"),
                    ServiceAccountEmail: sdk.String("aut"),
                },
                OidcToken: &shared.OidcToken{
                    Audience: sdk.String("quasi"),
                    ServiceAccountEmail: sdk.String("error"),
                },
                URIOverride: &shared.URIOverride{
                    Host: sdk.String("temporibus"),
                    PathOverride: &shared.PathOverride{
                        Path: sdk.String("laborum"),
                    },
                    Port: sdk.String("quasi"),
                    QueryOverride: &shared.QueryOverride{
                        QueryParams: sdk.String("reiciendis"),
                    },
                    Scheme: shared.URIOverrideSchemeEnumHTTPS.ToPointer(),
                    URIOverrideEnforceMode: shared.URIOverrideURIOverrideEnforceModeEnumAlways.ToPointer(),
                },
            },
            Name: sdk.String("Miss Irma Wolff"),
            PurgeTime: sdk.String("cum"),
            RateLimits: &shared.RateLimits{
                MaxBurstSize: sdk.Int(19987),
                MaxConcurrentDispatches: sdk.Int(39187),
                MaxDispatchesPerSecond: sdk.Float64(4417.11),
            },
            RetryConfig: &shared.RetryConfig{
                MaxAttempts: sdk.Int(282807),
                MaxBackoff: sdk.String("maiores"),
                MaxDoublings: sdk.Int(120196),
                MaxRetryDuration: sdk.String("corporis"),
                MinBackoff: sdk.String("dolore"),
            },
            StackdriverLoggingConfig: &shared.StackdriverLoggingConfig{
                SamplingRatio: sdk.Float64(4808.94),
            },
            State: shared.QueueStateEnumStateUnspecified.ToPointer(),
            TaskTTL: sdk.String("harum"),
            TombstoneTTL: sdk.String("enim"),
            Type: shared.QueueTypeEnumPush.ToPointer(),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("quidem"),
        Name: "Andy Streich",
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UpdateMask: sdk.String("quasi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("sint"),
    }, operations.CloudtasksProjectsLocationsQueuesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Queue != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesPause

Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesPause(ctx, operations.CloudtasksProjectsLocationsQueuesPauseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "incidunt": "enim",
            "consequatur": "est",
            "quibusdam": "explicabo",
            "deserunt": "distinctio",
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("aliquid"),
        Name: "Isaac Aufderhar",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.CloudtasksProjectsLocationsQueuesPauseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Queue != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesPurge

Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesPurge(ctx, operations.CloudtasksProjectsLocationsQueuesPurgeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "facilis": "tempore",
            "labore": "delectus",
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("sint"),
        Key: sdk.String("aliquid"),
        Name: "Terence Marquardt",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("in"),
    }, operations.CloudtasksProjectsLocationsQueuesPurgeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Queue != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesResume

Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesResume(ctx, operations.CloudtasksProjectsLocationsQueuesResumeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "maiores": "rerum",
            "dicta": "magnam",
            "cumque": "facere",
            "ea": "aliquid",
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("enim"),
        Name: "Toby Pouros",
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.CloudtasksProjectsLocationsQueuesResumeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Queue != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesSetIamPolicy

Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesSetIamPolicy(ctx, operations.CloudtasksProjectsLocationsQueuesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("nisi"),
                            Expression: sdk.String("vel"),
                            Location: sdk.String("natus"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "perferendis",
                            "nihil",
                        },
                        Role: sdk.String("magnam"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("distinctio"),
                            Expression: sdk.String("id"),
                            Location: sdk.String("labore"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "natus",
                            "nobis",
                        },
                        Role: sdk.String("eum"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("vero"),
                            Expression: sdk.String("aspernatur"),
                            Location: sdk.String("architecto"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "excepturi",
                        },
                        Role: sdk.String("ullam"),
                    },
                },
                Etag: sdk.String("provident"),
                Version: sdk.Int(551816),
            },
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        Resource: "dolor",
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("odit"),
    }, operations.CloudtasksProjectsLocationsQueuesSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesTasksBuffer

Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTasksBuffer(ctx, operations.CloudtasksProjectsLocationsQueuesTasksBufferRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BufferTaskRequest: &shared.BufferTaskRequest{
            Body: &shared.HTTPBody{
                ContentType: sdk.String("quasi"),
                Data: sdk.String("iure"),
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "eius": "maxime",
                        "deleniti": "facilis",
                        "in": "architecto",
                        "architecto": "repudiandae",
                    },
                    map[string]interface{}{
                        "expedita": "nihil",
                        "repellat": "quibusdam",
                    },
                    map[string]interface{}{
                        "saepe": "pariatur",
                    },
                    map[string]interface{}{
                        "consequuntur": "praesentium",
                    },
                },
            },
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        Queue: "maxime",
        QuotaUser: sdk.String("ea"),
        TaskID: "excepturi",
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("ea"),
    }, operations.CloudtasksProjectsLocationsQueuesTasksBufferSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BufferTaskResponse != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesTasksCreate

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTasksCreate(ctx, operations.CloudtasksProjectsLocationsQueuesTasksCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateTaskRequest: &shared.CreateTaskRequest{
            ResponseView: shared.CreateTaskRequestResponseViewEnumViewUnspecified.ToPointer(),
            Task: &shared.Task{
                AppEngineHTTPRequest: &shared.AppEngineHTTPRequest{
                    AppEngineRouting: &shared.AppEngineRouting{
                        Host: sdk.String("maiores"),
                        Instance: sdk.String("quidem"),
                        Service: sdk.String("ipsam"),
                        Version: sdk.String("voluptate"),
                    },
                    Body: sdk.String("autem"),
                    Headers: map[string]string{
                        "eaque": "pariatur",
                        "nemo": "voluptatibus",
                        "perferendis": "fugiat",
                    },
                    HTTPMethod: shared.AppEngineHTTPRequestHTTPMethodEnumPost.ToPointer(),
                    RelativeURI: sdk.String("aut"),
                },
                CreateTime: sdk.String("cumque"),
                DispatchCount: sdk.Int(359978),
                DispatchDeadline: sdk.String("hic"),
                FirstAttempt: &shared.Attempt{
                    DispatchTime: sdk.String("libero"),
                    ResponseStatus: &shared.Status{
                        Code: sdk.Int(749999),
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "totam": "dignissimos",
                                "eaque": "quis",
                            },
                        },
                        Message: sdk.String("nesciunt"),
                    },
                    ResponseTime: sdk.String("eos"),
                    ScheduleTime: sdk.String("perferendis"),
                },
                HTTPRequest: &shared.HTTPRequest{
                    Body: sdk.String("dolores"),
                    Headers: map[string]string{
                        "quam": "dolor",
                        "vero": "nostrum",
                        "hic": "recusandae",
                        "omnis": "facilis",
                    },
                    HTTPMethod: shared.HTTPRequestHTTPMethodEnumPut.ToPointer(),
                    OauthToken: &shared.OAuthToken{
                        Scope: sdk.String("voluptatem"),
                        ServiceAccountEmail: sdk.String("porro"),
                    },
                    OidcToken: &shared.OidcToken{
                        Audience: sdk.String("consequuntur"),
                        ServiceAccountEmail: sdk.String("blanditiis"),
                    },
                    URL: sdk.String("error"),
                },
                LastAttempt: &shared.Attempt{
                    DispatchTime: sdk.String("eaque"),
                    ResponseStatus: &shared.Status{
                        Code: sdk.Int(577229),
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "asperiores": "earum",
                            },
                            map[string]interface{}{
                                "iste": "dolorum",
                                "deleniti": "pariatur",
                            },
                            map[string]interface{}{
                                "nobis": "libero",
                                "delectus": "quaerat",
                                "quos": "aliquid",
                            },
                        },
                        Message: sdk.String("dolorem"),
                    },
                    ResponseTime: sdk.String("dolorem"),
                    ScheduleTime: sdk.String("dolor"),
                },
                Name: sdk.String("Tiffany Welch"),
                PullMessage: &shared.PullMessage{
                    Payload: sdk.String("voluptate"),
                    Tag: sdk.String("dignissimos"),
                },
                ResponseCount: sdk.Int(970237),
                ScheduleTime: sdk.String("amet"),
                View: shared.TaskViewEnumFull.ToPointer(),
            },
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("odio"),
        Parent: "quaerat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.CloudtasksProjectsLocationsQueuesTasksCreateSecurity{
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

## CloudtasksProjectsLocationsQueuesTasksDelete

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTasksDelete(ctx, operations.CloudtasksProjectsLocationsQueuesTasksDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("sit"),
        Key: sdk.String("fugiat"),
        Name: "Latoya Parisian",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.CloudtasksProjectsLocationsQueuesTasksDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesTasksGet

Gets a task.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTasksGet(ctx, operations.CloudtasksProjectsLocationsQueuesTasksGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("id"),
        Name: "Mrs. Ray Collins",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        ResponseView: operations.CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnumFull.ToPointer(),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.CloudtasksProjectsLocationsQueuesTasksGetSecurity{
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

## CloudtasksProjectsLocationsQueuesTasksList

Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTasksList(ctx, operations.CloudtasksProjectsLocationsQueuesTasksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("similique"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("at"),
        PageSize: sdk.Int64(311860),
        PageToken: sdk.String("tempora"),
        Parent: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        ResponseView: operations.CloudtasksProjectsLocationsQueuesTasksListResponseViewEnumFull.ToPointer(),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.CloudtasksProjectsLocationsQueuesTasksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTasksResponse != nil {
        // handle response
    }
}
```

## CloudtasksProjectsLocationsQueuesTasksRun

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTasksRun(ctx, operations.CloudtasksProjectsLocationsQueuesTasksRunRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RunTaskRequest: &shared.RunTaskRequest{
            ResponseView: shared.RunTaskRequestResponseViewEnumBasic.ToPointer(),
        },
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("tenetur"),
        Name: "Kelli Thompson",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.CloudtasksProjectsLocationsQueuesTasksRunSecurity{
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

## CloudtasksProjectsLocationsQueuesTestIamPermissions

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTestIamPermissions(ctx, operations.CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "neque",
                "sed",
                "vel",
            },
        },
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("quam"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        Resource: "cupiditate",
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
