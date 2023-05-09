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
        Queue: &shared.Queue{
            AppEngineRoutingOverride: &shared.AppEngineRouting{
                Host: sdk.String("at"),
                Instance: sdk.String("maiores"),
                Service: sdk.String("molestiae"),
                Version: sdk.String("quod"),
            },
            Name: sdk.String("Erik Lebsack"),
            PurgeTime: sdk.String("dicta"),
            RateLimits: &shared.RateLimits{
                MaxBurstSize: sdk.Int(720633),
                MaxConcurrentDispatches: sdk.Int(639921),
                MaxDispatchesPerSecond: sdk.Float64(5820.2),
            },
            RetryConfig: &shared.RetryConfig{
                MaxAttempts: sdk.Int(143353),
                MaxBackoff: sdk.String("deleniti"),
                MaxDoublings: sdk.Int(944669),
                MaxRetryDuration: sdk.String("optio"),
                MinBackoff: sdk.String("totam"),
            },
            StackdriverLoggingConfig: &shared.StackdriverLoggingConfig{
                SamplingRatio: sdk.Float64(1059.07),
            },
            State: shared.QueueStateEnumRunning.ToPointer(),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("esse"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
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
                RequestedPolicyVersion: sdk.Int(617636),
            },
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        Resource: "fuga",
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
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
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("architecto"),
        Filter: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("est"),
        PageSize: sdk.Int64(653140),
        PageToken: sdk.String("laborum"),
        Parent: "dolores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("explicabo"),
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
        Queue: &shared.Queue{
            AppEngineRoutingOverride: &shared.AppEngineRouting{
                Host: sdk.String("enim"),
                Instance: sdk.String("omnis"),
                Service: sdk.String("nemo"),
                Version: sdk.String("minima"),
            },
            Name: sdk.String("Brian Kessler"),
            PurgeTime: sdk.String("sapiente"),
            RateLimits: &shared.RateLimits{
                MaxBurstSize: sdk.Int(102044),
                MaxConcurrentDispatches: sdk.Int(652790),
                MaxDispatchesPerSecond: sdk.Float64(2088.76),
            },
            RetryConfig: &shared.RetryConfig{
                MaxAttempts: sdk.Int(635059),
                MaxBackoff: sdk.String("consequuntur"),
                MaxDoublings: sdk.Int(995300),
                MaxRetryDuration: sdk.String("mollitia"),
                MinBackoff: sdk.String("occaecati"),
            },
            StackdriverLoggingConfig: &shared.StackdriverLoggingConfig{
                SamplingRatio: sdk.Float64(2532.91),
            },
            State: shared.QueueStateEnumRunning.ToPointer(),
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        Name: "Gloria Padberg",
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UpdateMask: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "aut": "quasi",
            "error": "temporibus",
            "laborum": "quasi",
            "reiciendis": "voluptatibus",
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("ipsa"),
        Name: "Mr. Jared Ritchie",
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("corporis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "dicta": "harum",
            "enim": "accusamus",
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
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "itaque": "incidunt",
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("explicabo"),
        Name: "Rudy Spencer",
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("quos"),
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
                            Description: sdk.String("assumenda"),
                            Expression: sdk.String("ipsam"),
                            Location: sdk.String("alias"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "excepturi",
                            "tempora",
                            "facilis",
                        },
                        Role: sdk.String("tempore"),
                    },
                },
                Etag: sdk.String("labore"),
                Version: sdk.Int(962189),
            },
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("sint"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        Resource: "sint",
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("dolor"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateTaskRequest: &shared.CreateTaskRequest{
            ResponseView: shared.CreateTaskRequestResponseViewEnumFull.ToPointer(),
            Task: &shared.Task{
                AppEngineHTTPRequest: &shared.AppEngineHTTPRequest{
                    AppEngineRouting: &shared.AppEngineRouting{
                        Host: sdk.String("dolorum"),
                        Instance: sdk.String("in"),
                        Service: sdk.String("in"),
                        Version: sdk.String("illum"),
                    },
                    Body: sdk.String("maiores"),
                    Headers: map[string]string{
                        "dicta": "magnam",
                        "cumque": "facere",
                        "ea": "aliquid",
                    },
                    HTTPMethod: shared.AppEngineHTTPRequestHTTPMethodEnumDelete.ToPointer(),
                    RelativeURI: sdk.String("accusamus"),
                },
                CreateTime: sdk.String("non"),
                DispatchCount: sdk.Int(581273),
                DispatchDeadline: sdk.String("enim"),
                FirstAttempt: &shared.Attempt{
                    DispatchTime: sdk.String("accusamus"),
                    ResponseStatus: &shared.Status{
                        Code: sdk.Int(965417),
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "nam": "id",
                                "blanditiis": "deleniti",
                                "sapiente": "amet",
                            },
                            map[string]interface{}{
                                "nisi": "vel",
                                "natus": "omnis",
                                "molestiae": "perferendis",
                            },
                            map[string]interface{}{
                                "magnam": "distinctio",
                                "id": "labore",
                            },
                        },
                        Message: sdk.String("labore"),
                    },
                    ResponseTime: sdk.String("suscipit"),
                    ScheduleTime: sdk.String("natus"),
                },
                HTTPRequest: &shared.HTTPRequest{
                    Body: sdk.String("nobis"),
                    Headers: map[string]string{
                        "vero": "aspernatur",
                        "architecto": "magnam",
                    },
                    HTTPMethod: shared.HTTPRequestHTTPMethodEnumHTTPMethodUnspecified.ToPointer(),
                    OauthToken: &shared.OAuthToken{
                        Scope: sdk.String("excepturi"),
                        ServiceAccountEmail: sdk.String("ullam"),
                    },
                    OidcToken: &shared.OidcToken{
                        Audience: sdk.String("provident"),
                        ServiceAccountEmail: sdk.String("quos"),
                    },
                    URL: sdk.String("sint"),
                },
                LastAttempt: &shared.Attempt{
                    DispatchTime: sdk.String("accusantium"),
                    ResponseStatus: &shared.Status{
                        Code: sdk.Int(653201),
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "ad": "eum",
                                "dolor": "necessitatibus",
                                "odit": "nemo",
                            },
                            map[string]interface{}{
                                "iure": "doloribus",
                            },
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
                        },
                        Message: sdk.String("sed"),
                    },
                    ResponseTime: sdk.String("saepe"),
                    ScheduleTime: sdk.String("pariatur"),
                },
                Name: sdk.String("Kathryn Lang"),
                ResponseCount: sdk.Int(123820),
                ScheduleTime: sdk.String("quo"),
                View: shared.TaskViewEnumFull.ToPointer(),
            },
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("ea"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("quidem"),
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
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("pariatur"),
        Name: "Camille Armstrong",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("hic"),
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
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("totam"),
        Key: sdk.String("dignissimos"),
        Name: "Beatrice Dooley Sr.",
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        ResponseView: operations.CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnumViewUnspecified.ToPointer(),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nostrum"),
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
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("porro"),
        PageSize: sdk.Int64(164694),
        PageToken: sdk.String("blanditiis"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        ResponseView: operations.CloudtasksProjectsLocationsQueuesTasksListResponseViewEnumBasic.ToPointer(),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("adipisci"),
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
            ResponseView: shared.RunTaskRequestResponseViewEnumFull.ToPointer(),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("pariatur"),
        Name: "Loren Renner",
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolorem"),
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
                "ipsum",
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        Resource: "dolorum",
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("veritatis"),
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
