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
* [CloudtasksProjectsLocationsQueuesTasksAcknowledge](#cloudtasksprojectslocationsqueuestasksacknowledge) - Acknowledges a pull task. The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished. The worker must acknowledge a task within the lease_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.
* [CloudtasksProjectsLocationsQueuesTasksBuffer](#cloudtasksprojectslocationsqueuestasksbuffer) - Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).
* [CloudtasksProjectsLocationsQueuesTasksCancelLease](#cloudtasksprojectslocationsqueuestaskscancellease) - Cancel a pull task's lease. The worker can use this method to cancel a task's lease by setting its schedule_time to now. This will make the task available to be leased to the next caller of LeaseTasks.
* [CloudtasksProjectsLocationsQueuesTasksCreate](#cloudtasksprojectslocationsqueuestaskscreate) - Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * For App Engine queues, the maximum task size is 100KB. * For pull queues, the maximum task size is 1MB.
* [CloudtasksProjectsLocationsQueuesTasksDelete](#cloudtasksprojectslocationsqueuestasksdelete) - Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.
* [CloudtasksProjectsLocationsQueuesTasksGet](#cloudtasksprojectslocationsqueuestasksget) - Gets a task.
* [CloudtasksProjectsLocationsQueuesTasksLease](#cloudtasksprojectslocationsqueuestaskslease) - Leases tasks from a pull queue for lease_duration. This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task. The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response_view to FULL. A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE_EXHAUSTED is returned when this limit is exceeded. RESOURCE_EXHAUSTED is also returned when max_tasks_dispatched_per_second is exceeded.
* [CloudtasksProjectsLocationsQueuesTasksList](#cloudtasksprojectslocationsqueuestaskslist) - Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.
* [CloudtasksProjectsLocationsQueuesTasksRenewLease](#cloudtasksprojectslocationsqueuestasksrenewlease) - Renew the current lease of a pull task. The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule_time.
* [CloudtasksProjectsLocationsQueuesTasksRun](#cloudtasksprojectslocationsqueuestasksrun) - Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed. RunTask cannot be called on a pull task.
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
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("quidem"),
        Filter: sdk.String("architecto"),
        Key: sdk.String("ipsa"),
        Name: "Carlton O'Hara",
        OauthToken: sdk.String("dolorem"),
        PageSize: sdk.Int64(358152),
        PageToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("omnis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        QueueInput: &shared.QueueInput{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRoutingOverride: &shared.AppEngineRouting{
                    Host: sdk.String("minima"),
                    Instance: sdk.String("excepturi"),
                    Service: sdk.String("accusantium"),
                    Version: sdk.String("iure"),
                },
            },
            HTTPTarget: &shared.HTTPTarget{
                HeaderOverrides: []shared.HeaderOverride{
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("doloribus"),
                            Value: sdk.String("sapiente"),
                        },
                    },
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("architecto"),
                            Value: sdk.String("mollitia"),
                        },
                    },
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("dolorem"),
                            Value: sdk.String("culpa"),
                        },
                    },
                },
                HTTPMethod: shared.HTTPTargetHTTPMethodEnumPost.ToPointer(),
                OauthToken: &shared.OAuthToken{
                    Scope: sdk.String("repellat"),
                    ServiceAccountEmail: sdk.String("mollitia"),
                },
                OidcToken: &shared.OidcToken{
                    Audience: sdk.String("occaecati"),
                    ServiceAccountEmail: sdk.String("numquam"),
                },
                URIOverride: &shared.URIOverride{
                    Host: sdk.String("commodi"),
                    PathOverride: &shared.PathOverride{
                        Path: sdk.String("quam"),
                    },
                    Port: sdk.String("molestiae"),
                    QueryOverride: &shared.QueryOverride{
                        QueryParams: sdk.String("velit"),
                    },
                    Scheme: shared.URIOverrideSchemeEnumHTTP.ToPointer(),
                    URIOverrideEnforceMode: shared.URIOverrideURIOverrideEnforceModeEnumURIOverrideEnforceModeUnspecified.ToPointer(),
                },
            },
            Name: sdk.String("Gloria Padberg"),
            PullTarget: map[string]interface{}{
                "quo": "sequi",
            },
            PurgeTime: sdk.String("tenetur"),
            RateLimits: &shared.RateLimits{
                MaxBurstSize: sdk.Int(368725),
                MaxConcurrentTasks: sdk.Int(662527),
                MaxTasksDispatchedPerSecond: sdk.Float64(8209.94),
            },
            RetryConfig: &shared.RetryConfig{
                MaxAttempts: sdk.Int(13571),
                MaxBackoff: sdk.String("quasi"),
                MaxDoublings: sdk.Int(622846),
                MaxRetryDuration: sdk.String("temporibus"),
                MinBackoff: sdk.String("laborum"),
                UnlimitedAttempts: sdk.Bool(false),
            },
            State: shared.QueueStateEnumStateUnspecified.ToPointer(),
            TaskTTL: sdk.String("reiciendis"),
            TombstoneTTL: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("omnis"),
        Parent: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("doloremque"),
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
                RequestedPolicyVersion: sdk.Int(282807),
            },
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        Resource: "enim",
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("commodi"),
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
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("molestias"),
        Filter: sdk.String("excepturi"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("modi"),
        PageSize: sdk.Int64(508969),
        PageToken: sdk.String("rem"),
        Parent: "voluptates",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        ReadMask: sdk.String("repudiandae"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("veritatis"),
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
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRoutingOverride: &shared.AppEngineRouting{
                    Host: sdk.String("incidunt"),
                    Instance: sdk.String("enim"),
                    Service: sdk.String("consequatur"),
                    Version: sdk.String("est"),
                },
            },
            HTTPTarget: &shared.HTTPTarget{
                HeaderOverrides: []shared.HeaderOverride{
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("explicabo"),
                            Value: sdk.String("deserunt"),
                        },
                    },
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("distinctio"),
                            Value: sdk.String("quibusdam"),
                        },
                    },
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("labore"),
                            Value: sdk.String("modi"),
                        },
                    },
                    shared.HeaderOverride{
                        Header: &shared.Header{
                            Key: sdk.String("qui"),
                            Value: sdk.String("aliquid"),
                        },
                    },
                },
                HTTPMethod: shared.HTTPTargetHTTPMethodEnumPut.ToPointer(),
                OauthToken: &shared.OAuthToken{
                    Scope: sdk.String("quos"),
                    ServiceAccountEmail: sdk.String("perferendis"),
                },
                OidcToken: &shared.OidcToken{
                    Audience: sdk.String("magni"),
                    ServiceAccountEmail: sdk.String("assumenda"),
                },
                URIOverride: &shared.URIOverride{
                    Host: sdk.String("ipsam"),
                    PathOverride: &shared.PathOverride{
                        Path: sdk.String("alias"),
                    },
                    Port: sdk.String("fugit"),
                    QueryOverride: &shared.QueryOverride{
                        QueryParams: sdk.String("dolorum"),
                    },
                    Scheme: shared.URIOverrideSchemeEnumHTTP.ToPointer(),
                    URIOverrideEnforceMode: shared.URIOverrideURIOverrideEnforceModeEnumURIOverrideEnforceModeUnspecified.ToPointer(),
                },
            },
            Name: sdk.String("Geoffrey Green"),
            PullTarget: map[string]interface{}{
                "eligendi": "sint",
            },
            PurgeTime: sdk.String("aliquid"),
            RateLimits: &shared.RateLimits{
                MaxBurstSize: sdk.Int(592042),
                MaxConcurrentTasks: sdk.Int(896039),
                MaxTasksDispatchedPerSecond: sdk.Float64(5722.52),
            },
            RetryConfig: &shared.RetryConfig{
                MaxAttempts: sdk.Int(638921),
                MaxBackoff: sdk.String("dolor"),
                MaxDoublings: sdk.Int(891555),
                MaxRetryDuration: sdk.String("a"),
                MinBackoff: sdk.String("dolorum"),
                UnlimitedAttempts: sdk.Bool(false),
            },
            State: shared.QueueStateEnumRunning.ToPointer(),
            TaskTTL: sdk.String("in"),
            TombstoneTTL: sdk.String("illum"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("cumque"),
        Name: "Nathaniel Hyatt",
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UpdateMask: sdk.String("enim"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("delectus"),
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
            "nam": "id",
            "blanditiis": "deleniti",
            "sapiente": "amet",
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("natus"),
        Key: sdk.String("omnis"),
        Name: "Dorothy Kovacek",
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("suscipit"),
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
            "eum": "vero",
            "aspernatur": "architecto",
            "magnam": "et",
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("quos"),
        Key: sdk.String("sint"),
        Name: "Angie Wisozk",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("odit"),
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
            "iure": "doloribus",
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("facilis"),
        Name: "Alice Bradtke",
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("quibusdam"),
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
                            Description: sdk.String("pariatur"),
                            Expression: sdk.String("accusantium"),
                            Location: sdk.String("consequuntur"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "magni",
                            "sunt",
                            "quo",
                        },
                        Role: sdk.String("illum"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("pariatur"),
                            Expression: sdk.String("maxime"),
                            Location: sdk.String("ea"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "ea",
                        },
                        Role: sdk.String("accusantium"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ab"),
                            Expression: sdk.String("maiores"),
                            Location: sdk.String("quidem"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "autem",
                            "nam",
                        },
                        Role: sdk.String("eaque"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("pariatur"),
                            Expression: sdk.String("nemo"),
                            Location: sdk.String("voluptatibus"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "amet",
                            "aut",
                            "cumque",
                            "corporis",
                        },
                        Role: sdk.String("hic"),
                    },
                },
                Etag: sdk.String("libero"),
                Version: sdk.Int(749999),
            },
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nesciunt"),
        Resource: "eos",
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("dolores"),
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

## CloudtasksProjectsLocationsQueuesTasksAcknowledge

Acknowledges a pull task. The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished. The worker must acknowledge a task within the lease_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTasksAcknowledge(ctx, operations.CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AcknowledgeTaskRequest: &shared.AcknowledgeTaskRequest{
            ScheduleTime: sdk.String("quam"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("hic"),
        Key: sdk.String("recusandae"),
        Name: "Miss Cesar Metz",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.CloudtasksProjectsLocationsQueuesTasksAcknowledgeSecurity{
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BufferTaskRequest: &shared.BufferTaskRequest{
            Body: &shared.HTTPBody{
                ContentType: sdk.String("adipisci"),
                Data: sdk.String("asperiores"),
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "iste": "dolorum",
                        "deleniti": "pariatur",
                    },
                    map[string]interface{}{
                        "nobis": "libero",
                        "delectus": "quaerat",
                        "quos": "aliquid",
                    },
                    map[string]interface{}{
                        "dolorem": "dolor",
                    },
                    map[string]interface{}{
                        "ipsum": "hic",
                    },
                },
            },
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        Queue: "dolorum",
        QuotaUser: sdk.String("numquam"),
        TaskID: "veritatis",
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("ipsa"),
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

## CloudtasksProjectsLocationsQueuesTasksCancelLease

Cancel a pull task's lease. The worker can use this method to cancel a task's lease by setting its schedule_time to now. This will make the task available to be leased to the next caller of LeaseTasks.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTasksCancelLease(ctx, operations.CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CancelLeaseRequest: &shared.CancelLeaseRequest{
            ResponseView: shared.CancelLeaseRequestResponseViewEnumBasic.ToPointer(),
            ScheduleTime: sdk.String("quaerat"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("natus"),
        Name: "Kay Bailey DDS",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.CloudtasksProjectsLocationsQueuesTasksCancelLeaseSecurity{
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

## CloudtasksProjectsLocationsQueuesTasksCreate

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * For App Engine queues, the maximum task size is 100KB. * For pull queues, the maximum task size is 1MB.

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
            ResponseView: shared.CreateTaskRequestResponseViewEnumBasic.ToPointer(),
            Task: &shared.Task{
                AppEngineHTTPRequest: &shared.AppEngineHTTPRequest{
                    AppEngineRouting: &shared.AppEngineRouting{
                        Host: sdk.String("necessitatibus"),
                        Instance: sdk.String("distinctio"),
                        Service: sdk.String("asperiores"),
                        Version: sdk.String("nihil"),
                    },
                    Headers: map[string]string{
                        "voluptate": "id",
                    },
                    HTTPMethod: shared.AppEngineHTTPRequestHTTPMethodEnumOptions.ToPointer(),
                    Payload: sdk.String("eius"),
                    RelativeURL: sdk.String("aspernatur"),
                },
                CreateTime: sdk.String("perferendis"),
                HTTPRequest: &shared.HTTPRequest{
                    Body: sdk.String("amet"),
                    Headers: map[string]string{
                        "accusamus": "ad",
                        "saepe": "suscipit",
                        "deserunt": "provident",
                        "minima": "repellendus",
                    },
                    HTTPMethod: shared.HTTPRequestHTTPMethodEnumPut.ToPointer(),
                    OauthToken: &shared.OAuthToken{
                        Scope: sdk.String("similique"),
                        ServiceAccountEmail: sdk.String("alias"),
                    },
                    OidcToken: &shared.OidcToken{
                        Audience: sdk.String("at"),
                        ServiceAccountEmail: sdk.String("quaerat"),
                    },
                    URL: sdk.String("tempora"),
                },
                Name: sdk.String("Bernadette Torp"),
                PullMessage: &shared.PullMessage{
                    Payload: sdk.String("a"),
                    Tag: sdk.String("esse"),
                },
                ScheduleTime: sdk.String("harum"),
                Status: &shared.TaskStatus{
                    AttemptDispatchCount: sdk.Int(483409),
                    AttemptResponseCount: sdk.Int(215507),
                    FirstAttemptStatus: &shared.AttemptStatus{
                        DispatchTime: sdk.String("quisquam"),
                        ResponseStatus: &shared.Status{
                            Code: sdk.Int(947371),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "accusamus": "numquam",
                                    "enim": "dolorem",
                                    "sapiente": "totam",
                                },
                            },
                            Message: sdk.String("nihil"),
                        },
                        ResponseTime: sdk.String("sit"),
                        ScheduleTime: sdk.String("expedita"),
                    },
                    LastAttemptStatus: &shared.AttemptStatus{
                        DispatchTime: sdk.String("neque"),
                        ResponseStatus: &shared.Status{
                            Code: sdk.Int(153694),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "voluptas": "deserunt",
                                    "quam": "ipsum",
                                    "incidunt": "qui",
                                },
                                map[string]interface{}{
                                    "maxime": "pariatur",
                                    "soluta": "dicta",
                                    "laborum": "totam",
                                },
                            },
                            Message: sdk.String("incidunt"),
                        },
                        ResponseTime: sdk.String("aspernatur"),
                        ScheduleTime: sdk.String("dolores"),
                    },
                },
                View: shared.TaskViewEnumFull.ToPointer(),
            },
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("qui"),
        Parent: "neque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("odio"),
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

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.

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
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("cumque"),
        Name: "Robin Bosco",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("tempore"),
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
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("labore"),
        Name: "Mr. Sonya Bradtke",
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        ResponseView: operations.CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnumFull.ToPointer(),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("porro"),
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

## CloudtasksProjectsLocationsQueuesTasksLease

Leases tasks from a pull queue for lease_duration. This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task. The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response_view to FULL. A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE_EXHAUSTED is returned when this limit is exceeded. RESOURCE_EXHAUSTED is also returned when max_tasks_dispatched_per_second is exceeded.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTasksLease(ctx, operations.CloudtasksProjectsLocationsQueuesTasksLeaseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LeaseTasksRequest: &shared.LeaseTasksRequest{
            Filter: sdk.String("ut"),
            LeaseDuration: sdk.String("facilis"),
            MaxTasks: sdk.Int(586410),
            ResponseView: shared.LeaseTasksRequestResponseViewEnumViewUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("quisquam"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.CloudtasksProjectsLocationsQueuesTasksLeaseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaseTasksResponse != nil {
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
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("hic"),
        PageSize: sdk.Int64(715561),
        PageToken: sdk.String("quod"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        ResponseView: operations.CloudtasksProjectsLocationsQueuesTasksListResponseViewEnumFull.ToPointer(),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("ducimus"),
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

## CloudtasksProjectsLocationsQueuesTasksRenewLease

Renew the current lease of a pull task. The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule_time.

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
    res, err := s.Projects.CloudtasksProjectsLocationsQueuesTasksRenewLease(ctx, operations.CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RenewLeaseRequest: &shared.RenewLeaseRequest{
            LeaseDuration: sdk.String("quibusdam"),
            ResponseView: shared.RenewLeaseRequestResponseViewEnumFull.ToPointer(),
            ScheduleTime: sdk.String("sequi"),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("exercitationem"),
        Name: "Louis Sauer",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("alias"),
    }, operations.CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity{
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

## CloudtasksProjectsLocationsQueuesTasksRun

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed. RunTask cannot be called on a pull task.

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
            ResponseView: shared.RunTaskRequestResponseViewEnumViewUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("vel"),
        Key: sdk.String("possimus"),
        Name: "Paula Jacobs I",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("nulla"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "nostrum",
                "sapiente",
                "quisquam",
                "saepe",
            },
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        Resource: "ea",
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("consectetur"),
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
