# projects

### Available Operations

* [cloudtasksProjectsLocationsList](#cloudtasksprojectslocationslist) - Lists information about the supported locations for this service.
* [cloudtasksProjectsLocationsQueuesCreate](#cloudtasksprojectslocationsqueuescreate) - Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
* [cloudtasksProjectsLocationsQueuesGetIamPolicy](#cloudtasksprojectslocationsqueuesgetiampolicy) - Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`
* [cloudtasksProjectsLocationsQueuesList](#cloudtasksprojectslocationsqueueslist) - Lists queues. Queues are returned in lexicographical order.
* [cloudtasksProjectsLocationsQueuesPatch](#cloudtasksprojectslocationsqueuespatch) - Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
* [cloudtasksProjectsLocationsQueuesPause](#cloudtasksprojectslocationsqueuespause) - Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.
* [cloudtasksProjectsLocationsQueuesPurge](#cloudtasksprojectslocationsqueuespurge) - Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.
* [cloudtasksProjectsLocationsQueuesResume](#cloudtasksprojectslocationsqueuesresume) - Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
* [cloudtasksProjectsLocationsQueuesSetIamPolicy](#cloudtasksprojectslocationsqueuessetiampolicy) - Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`
* [cloudtasksProjectsLocationsQueuesTasksAcknowledge](#cloudtasksprojectslocationsqueuestasksacknowledge) - Acknowledges a pull task. The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished. The worker must acknowledge a task within the lease_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.
* [cloudtasksProjectsLocationsQueuesTasksBuffer](#cloudtasksprojectslocationsqueuestasksbuffer) - Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).
* [cloudtasksProjectsLocationsQueuesTasksCancelLease](#cloudtasksprojectslocationsqueuestaskscancellease) - Cancel a pull task's lease. The worker can use this method to cancel a task's lease by setting its schedule_time to now. This will make the task available to be leased to the next caller of LeaseTasks.
* [cloudtasksProjectsLocationsQueuesTasksCreate](#cloudtasksprojectslocationsqueuestaskscreate) - Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * For App Engine queues, the maximum task size is 100KB. * For pull queues, the maximum task size is 1MB.
* [cloudtasksProjectsLocationsQueuesTasksDelete](#cloudtasksprojectslocationsqueuestasksdelete) - Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.
* [cloudtasksProjectsLocationsQueuesTasksGet](#cloudtasksprojectslocationsqueuestasksget) - Gets a task.
* [cloudtasksProjectsLocationsQueuesTasksLease](#cloudtasksprojectslocationsqueuestaskslease) - Leases tasks from a pull queue for lease_duration. This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task. The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response_view to FULL. A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE_EXHAUSTED is returned when this limit is exceeded. RESOURCE_EXHAUSTED is also returned when max_tasks_dispatched_per_second is exceeded.
* [cloudtasksProjectsLocationsQueuesTasksList](#cloudtasksprojectslocationsqueuestaskslist) - Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.
* [cloudtasksProjectsLocationsQueuesTasksRenewLease](#cloudtasksprojectslocationsqueuestasksrenewlease) - Renew the current lease of a pull task. The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule_time.
* [cloudtasksProjectsLocationsQueuesTasksRun](#cloudtasksprojectslocationsqueuestasksrun) - Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed. RunTask cannot be called on a pull task.
* [cloudtasksProjectsLocationsQueuesTestIamPermissions](#cloudtasksprojectslocationsqueuestestiampermissions) - Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## cloudtasksProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsListRequest req = new CloudtasksProjectsLocationsListRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "ipsa";
                filter = "reiciendis";
                key = "est";
                oauthToken = "mollitia";
                pageSize = 670638L;
                pageToken = "dolores";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            CloudtasksProjectsLocationsListResponse res = sdk.projects.cloudtasksProjectsLocationsList(req, new CloudtasksProjectsLocationsListSecurity("nobis", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesCreate

Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesCreateRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesCreateResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppEngineHttpTarget;
import org.openapis.openapi.models.shared.AppEngineRouting;
import org.openapis.openapi.models.shared.Header;
import org.openapis.openapi.models.shared.HeaderOverride;
import org.openapis.openapi.models.shared.HttpTarget;
import org.openapis.openapi.models.shared.HttpTargetHttpMethodEnum;
import org.openapis.openapi.models.shared.OAuthToken;
import org.openapis.openapi.models.shared.OidcToken;
import org.openapis.openapi.models.shared.PathOverride;
import org.openapis.openapi.models.shared.QueryOverride;
import org.openapis.openapi.models.shared.QueueInput;
import org.openapis.openapi.models.shared.QueueStateEnum;
import org.openapis.openapi.models.shared.RateLimits;
import org.openapis.openapi.models.shared.RetryConfig;
import org.openapis.openapi.models.shared.UriOverride;
import org.openapis.openapi.models.shared.UriOverrideSchemeEnum;
import org.openapis.openapi.models.shared.UriOverrideUriOverrideEnforceModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesCreateRequest req = new CloudtasksProjectsLocationsQueuesCreateRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                queueInput = new QueueInput() {{
                    appEngineHttpTarget = new AppEngineHttpTarget() {{
                        appEngineRoutingOverride = new AppEngineRouting() {{
                            host = "minima";
                            instance = "excepturi";
                            service = "accusantium";
                            version = "iure";
                        }};;
                    }};;
                    httpTarget = new HttpTarget() {{
                        headerOverrides = new org.openapis.openapi.models.shared.HeaderOverride[]{{
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "doloribus";
                                    value = "sapiente";
                                }};
                            }}),
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "architecto";
                                    value = "mollitia";
                                }};
                            }}),
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "dolorem";
                                    value = "culpa";
                                }};
                            }}),
                        }};
                        httpMethod = HttpTargetHttpMethodEnum.POST;
                        oauthToken = new OAuthToken() {{
                            scope = "repellat";
                            serviceAccountEmail = "mollitia";
                        }};;
                        oidcToken = new OidcToken() {{
                            audience = "occaecati";
                            serviceAccountEmail = "numquam";
                        }};;
                        uriOverride = new UriOverride() {{
                            host = "commodi";
                            pathOverride = new PathOverride() {{
                                path = "quam";
                            }};;
                            port = "molestiae";
                            queryOverride = new QueryOverride() {{
                                queryParams = "velit";
                            }};;
                            scheme = UriOverrideSchemeEnum.HTTP;
                            uriOverrideEnforceMode = UriOverrideUriOverrideEnforceModeEnum.URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED;
                        }};;
                    }};;
                    name = "Gloria Padberg";
                    pullTarget = new java.util.HashMap<String, Object>() {{
                        put("quo", "sequi");
                    }};
                    purgeTime = "tenetur";
                    rateLimits = new RateLimits() {{
                        maxBurstSize = 368725;
                        maxConcurrentTasks = 662527;
                        maxTasksDispatchedPerSecond = 8209.94;
                    }};;
                    retryConfig = new RetryConfig() {{
                        maxAttempts = 13571;
                        maxBackoff = "quasi";
                        maxDoublings = 622846;
                        maxRetryDuration = "temporibus";
                        minBackoff = "laborum";
                        unlimitedAttempts = false;
                    }};;
                    state = QueueStateEnum.STATE_UNSPECIFIED;
                    taskTtl = "reiciendis";
                    tombstoneTtl = "voluptatibus";
                }};;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "voluptatibus";
                key = "ipsa";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "cum";
                uploadProtocol = "perferendis";
            }};            

            CloudtasksProjectsLocationsQueuesCreateResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesCreate(req, new CloudtasksProjectsLocationsQueuesCreateSecurity("doloremque", "reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesGetIamPolicy

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesGetIamPolicyRequest req = new CloudtasksProjectsLocationsQueuesGetIamPolicyRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 120196;
                    }};;
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "iusto";
                fields = "dicta";
                key = "harum";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "commodi";
                uploadProtocol = "repudiandae";
            }};            

            CloudtasksProjectsLocationsQueuesGetIamPolicyResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesGetIamPolicy(req, new CloudtasksProjectsLocationsQueuesGetIamPolicySecurity("quae", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesList

Lists queues. Queues are returned in lexicographical order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesListRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesListResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesListRequest req = new CloudtasksProjectsLocationsQueuesListRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "praesentium";
                filter = "rem";
                key = "voluptates";
                oauthToken = "quasi";
                pageSize = 921158L;
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "veritatis";
                readMask = "itaque";
                uploadType = "incidunt";
                uploadProtocol = "enim";
            }};            

            CloudtasksProjectsLocationsQueuesListResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesList(req, new CloudtasksProjectsLocationsQueuesListSecurity("consequatur", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listQueuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesPatch

Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesPatchRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesPatchResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppEngineHttpTarget;
import org.openapis.openapi.models.shared.AppEngineRouting;
import org.openapis.openapi.models.shared.Header;
import org.openapis.openapi.models.shared.HeaderOverride;
import org.openapis.openapi.models.shared.HttpTarget;
import org.openapis.openapi.models.shared.HttpTargetHttpMethodEnum;
import org.openapis.openapi.models.shared.OAuthToken;
import org.openapis.openapi.models.shared.OidcToken;
import org.openapis.openapi.models.shared.PathOverride;
import org.openapis.openapi.models.shared.QueryOverride;
import org.openapis.openapi.models.shared.QueueInput;
import org.openapis.openapi.models.shared.QueueStateEnum;
import org.openapis.openapi.models.shared.RateLimits;
import org.openapis.openapi.models.shared.RetryConfig;
import org.openapis.openapi.models.shared.UriOverride;
import org.openapis.openapi.models.shared.UriOverrideSchemeEnum;
import org.openapis.openapi.models.shared.UriOverrideUriOverrideEnforceModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesPatchRequest req = new CloudtasksProjectsLocationsQueuesPatchRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                queueInput = new QueueInput() {{
                    appEngineHttpTarget = new AppEngineHttpTarget() {{
                        appEngineRoutingOverride = new AppEngineRouting() {{
                            host = "deserunt";
                            instance = "distinctio";
                            service = "quibusdam";
                            version = "labore";
                        }};;
                    }};;
                    httpTarget = new HttpTarget() {{
                        headerOverrides = new org.openapis.openapi.models.shared.HeaderOverride[]{{
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "qui";
                                    value = "aliquid";
                                }};
                            }}),
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "cupiditate";
                                    value = "quos";
                                }};
                            }}),
                        }};
                        httpMethod = HttpTargetHttpMethodEnum.HTTP_METHOD_UNSPECIFIED;
                        oauthToken = new OAuthToken() {{
                            scope = "magni";
                            serviceAccountEmail = "assumenda";
                        }};;
                        oidcToken = new OidcToken() {{
                            audience = "ipsam";
                            serviceAccountEmail = "alias";
                        }};;
                        uriOverride = new UriOverride() {{
                            host = "fugit";
                            pathOverride = new PathOverride() {{
                                path = "dolorum";
                            }};;
                            port = "excepturi";
                            queryOverride = new QueryOverride() {{
                                queryParams = "tempora";
                            }};;
                            scheme = UriOverrideSchemeEnum.HTTPS;
                            uriOverrideEnforceMode = UriOverrideUriOverrideEnforceModeEnum.ALWAYS;
                        }};;
                    }};;
                    name = "Lucia Kemmer";
                    pullTarget = new java.util.HashMap<String, Object>() {{
                        put("aliquid", "provident");
                        put("necessitatibus", "sint");
                        put("officia", "dolor");
                    }};
                    purgeTime = "debitis";
                    rateLimits = new RateLimits() {{
                        maxBurstSize = 952749;
                        maxConcurrentTasks = 680056;
                        maxTasksDispatchedPerSecond = 4471.25;
                    }};;
                    retryConfig = new RetryConfig() {{
                        maxAttempts = 449198;
                        maxBackoff = "illum";
                        maxDoublings = 978571;
                        maxRetryDuration = "rerum";
                        minBackoff = "dicta";
                        unlimitedAttempts = false;
                    }};;
                    state = QueueStateEnum.RUNNING;
                    taskTtl = "cumque";
                    tombstoneTtl = "facere";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "accusamus";
                key = "non";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "enim";
                updateMask = "accusamus";
                uploadType = "delectus";
                uploadProtocol = "quidem";
            }};            

            CloudtasksProjectsLocationsQueuesPatchResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesPatch(req, new CloudtasksProjectsLocationsQueuesPatchSecurity("provident", "nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesPause

Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesPauseRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesPauseResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesPauseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesPauseRequest req = new CloudtasksProjectsLocationsQueuesPauseRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sapiente", "amet");
                    put("deserunt", "nisi");
                    put("vel", "natus");
                }};
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "nihil";
                key = "magnam";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "labore";
                uploadProtocol = "labore";
            }};            

            CloudtasksProjectsLocationsQueuesPauseResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesPause(req, new CloudtasksProjectsLocationsQueuesPauseSecurity("suscipit", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesPurge

Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesPurgeRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesPurgeResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesPurgeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesPurgeRequest req = new CloudtasksProjectsLocationsQueuesPurgeRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("aspernatur", "architecto");
                    put("magnam", "et");
                    put("excepturi", "ullam");
                    put("provident", "quos");
                }};
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "reiciendis";
                key = "mollitia";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "dolor";
                uploadProtocol = "necessitatibus";
            }};            

            CloudtasksProjectsLocationsQueuesPurgeResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesPurge(req, new CloudtasksProjectsLocationsQueuesPurgeSecurity("odit", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesResume

Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesResumeRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesResumeResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesResumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesResumeRequest req = new CloudtasksProjectsLocationsQueuesResumeRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("debitis", "eius");
                    put("maxime", "deleniti");
                    put("facilis", "in");
                    put("architecto", "architecto");
                }};
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "expedita";
                fields = "nihil";
                key = "repellat";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "saepe";
                uploadProtocol = "pariatur";
            }};            

            CloudtasksProjectsLocationsQueuesResumeResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesResume(req, new CloudtasksProjectsLocationsQueuesResumeSecurity("accusantium", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesSetIamPolicy

Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesSetIamPolicyRequest req = new CloudtasksProjectsLocationsQueuesSetIamPolicyRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "sunt";
                                    expression = "quo";
                                    location = "illum";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("ea"),
                                    add("excepturi"),
                                    add("odit"),
                                    add("ea"),
                                }};
                                role = "accusantium";
                            }}),
                        }};
                        etag = "ab";
                        version = 982575;
                    }};;
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "autem";
                key = "nam";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "nemo";
                uploadProtocol = "voluptatibus";
            }};            

            CloudtasksProjectsLocationsQueuesSetIamPolicyResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesSetIamPolicy(req, new CloudtasksProjectsLocationsQueuesSetIamPolicySecurity("perferendis", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTasksAcknowledge

Acknowledges a pull task. The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished. The worker must acknowledge a task within the lease_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksAcknowledgeResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksAcknowledgeSecurity;
import org.openapis.openapi.models.shared.AcknowledgeTaskRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest req = new CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                acknowledgeTaskRequest = new AcknowledgeTaskRequest() {{
                    scheduleTime = "cumque";
                }};;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "nobis";
                key = "dolores";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "dignissimos";
                uploadProtocol = "eaque";
            }};            

            CloudtasksProjectsLocationsQueuesTasksAcknowledgeResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksAcknowledge(req, new CloudtasksProjectsLocationsQueuesTasksAcknowledgeSecurity("quis", "nesciunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTasksBuffer

Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksBufferRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksBufferResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksBufferSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BufferTaskRequest;
import org.openapis.openapi.models.shared.HttpBody;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksBufferRequest req = new CloudtasksProjectsLocationsQueuesTasksBufferRequest("eos", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                bufferTaskRequest = new BufferTaskRequest() {{
                    body = new HttpBody() {{
                        contentType = "minus";
                        data = "quam";
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("nostrum", "hic");
                                put("recusandae", "omnis");
                                put("facilis", "perspiciatis");
                                put("voluptatem", "porro");
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "eaque";
                key = "occaecati";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "asperiores";
                uploadProtocol = "earum";
            }};            

            CloudtasksProjectsLocationsQueuesTasksBufferResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksBuffer(req, new CloudtasksProjectsLocationsQueuesTasksBufferSecurity("modi", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bufferTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTasksCancelLease

Cancel a pull task's lease. The worker can use this method to cancel a task's lease by setting its schedule_time to now. This will make the task available to be leased to the next caller of LeaseTasks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksCancelLeaseResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksCancelLeaseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CancelLeaseRequest;
import org.openapis.openapi.models.shared.CancelLeaseRequestResponseViewEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest req = new CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                cancelLeaseRequest = new CancelLeaseRequest() {{
                    responseView = CancelLeaseRequestResponseViewEnum.FULL;
                    scheduleTime = "provident";
                }};;
                accessToken = "nobis";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "quaerat";
                key = "quos";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "dolorem";
                uploadProtocol = "dolor";
            }};            

            CloudtasksProjectsLocationsQueuesTasksCancelLeaseResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksCancelLease(req, new CloudtasksProjectsLocationsQueuesTasksCancelLeaseSecurity("qui", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTasksCreate

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * For App Engine queues, the maximum task size is 100KB. * For pull queues, the maximum task size is 1MB.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksCreateRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksCreateResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppEngineHttpRequest;
import org.openapis.openapi.models.shared.AppEngineHttpRequestHttpMethodEnum;
import org.openapis.openapi.models.shared.AppEngineRouting;
import org.openapis.openapi.models.shared.AttemptStatus;
import org.openapis.openapi.models.shared.CreateTaskRequest;
import org.openapis.openapi.models.shared.CreateTaskRequestResponseViewEnum;
import org.openapis.openapi.models.shared.HttpRequest;
import org.openapis.openapi.models.shared.HttpRequestHttpMethodEnum;
import org.openapis.openapi.models.shared.OAuthToken;
import org.openapis.openapi.models.shared.OidcToken;
import org.openapis.openapi.models.shared.PullMessage;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.Task;
import org.openapis.openapi.models.shared.TaskStatus;
import org.openapis.openapi.models.shared.TaskViewEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksCreateRequest req = new CloudtasksProjectsLocationsQueuesTasksCreateRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                createTaskRequest = new CreateTaskRequest() {{
                    responseView = CreateTaskRequestResponseViewEnum.FULL;
                    task = new Task() {{
                        appEngineHttpRequest = new AppEngineHttpRequest() {{
                            appEngineRouting = new AppEngineRouting() {{
                                host = "voluptate";
                                instance = "dignissimos";
                                service = "reiciendis";
                                version = "amet";
                            }};;
                            headers = new java.util.HashMap<String, String>() {{
                                put("numquam", "veritatis");
                                put("ipsa", "ipsa");
                                put("iure", "odio");
                            }};
                            httpMethod = AppEngineHttpRequestHttpMethodEnum.GET;
                            payload = "accusamus";
                            relativeUrl = "quidem";
                        }};;
                        createTime = "voluptatibus";
                        httpRequest = new HttpRequest() {{
                            body = "voluptas";
                            headers = new java.util.HashMap<String, String>() {{
                                put("eos", "atque");
                                put("sit", "fugiat");
                                put("ab", "soluta");
                            }};
                            httpMethod = HttpRequestHttpMethodEnum.DELETE;
                            oauthToken = new OAuthToken() {{
                                scope = "iusto";
                                serviceAccountEmail = "voluptate";
                            }};;
                            oidcToken = new OidcToken() {{
                                audience = "dolorum";
                                serviceAccountEmail = "deleniti";
                            }};;
                            url = "omnis";
                        }};;
                        name = "Kelvin Zboncak";
                        pullMessage = new PullMessage() {{
                            payload = "voluptate";
                            tag = "id";
                        }};;
                        scheduleTime = "saepe";
                        status = new TaskStatus() {{
                            attemptDispatchCount = 263322;
                            attemptResponseCount = 137220;
                            firstAttemptStatus = new AttemptStatus() {{
                                dispatchTime = "perferendis";
                                responseStatus = new Status() {{
                                    code = 229219;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("ad", "saepe");
                                            put("suscipit", "deserunt");
                                            put("provident", "minima");
                                            put("repellendus", "totam");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("alias", "at");
                                            put("quaerat", "tempora");
                                            put("vel", "quod");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("qui", "dolorum");
                                            put("a", "esse");
                                            put("harum", "iusto");
                                            put("ipsum", "quisquam");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("amet", "tempore");
                                            put("accusamus", "numquam");
                                            put("enim", "dolorem");
                                            put("sapiente", "totam");
                                        }}),
                                    }};
                                    message = "nihil";
                                }};;
                                responseTime = "sit";
                                scheduleTime = "expedita";
                            }};;
                            lastAttemptStatus = new AttemptStatus() {{
                                dispatchTime = "neque";
                                responseStatus = new Status() {{
                                    code = 153694;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("voluptas", "deserunt");
                                            put("quam", "ipsum");
                                            put("incidunt", "qui");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("maxime", "pariatur");
                                            put("soluta", "dicta");
                                            put("laborum", "totam");
                                        }}),
                                    }};
                                    message = "incidunt";
                                }};;
                                responseTime = "aspernatur";
                                scheduleTime = "dolores";
                            }};;
                        }};;
                        view = TaskViewEnum.FULL;
                    }};;
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestias";
                key = "temporibus";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "fugit";
                uploadProtocol = "magni";
            }};            

            CloudtasksProjectsLocationsQueuesTasksCreateResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksCreate(req, new CloudtasksProjectsLocationsQueuesTasksCreateSecurity("odio", "sunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTasksDelete

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksDeleteRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksDeleteResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksDeleteRequest req = new CloudtasksProjectsLocationsQueuesTasksDeleteRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "soluta";
                key = "nobis";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "ipsum";
                uploadProtocol = "veritatis";
            }};            

            CloudtasksProjectsLocationsQueuesTasksDeleteResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksDelete(req, new CloudtasksProjectsLocationsQueuesTasksDeleteSecurity("nobis", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTasksGet

Gets a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksGetRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksGetResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksGetRequest req = new CloudtasksProjectsLocationsQueuesTasksGetRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "dolore";
                key = "labore";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "dolorum";
                responseView = CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum.VIEW_UNSPECIFIED;
                uploadType = "quae";
                uploadProtocol = "aut";
            }};            

            CloudtasksProjectsLocationsQueuesTasksGetResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksGet(req, new CloudtasksProjectsLocationsQueuesTasksGetSecurity("quas", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTasksLease

Leases tasks from a pull queue for lease_duration. This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task. The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response_view to FULL. A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE_EXHAUSTED is returned when this limit is exceeded. RESOURCE_EXHAUSTED is also returned when max_tasks_dispatched_per_second is exceeded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksLeaseRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksLeaseResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksLeaseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LeaseTasksRequest;
import org.openapis.openapi.models.shared.LeaseTasksRequestResponseViewEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksLeaseRequest req = new CloudtasksProjectsLocationsQueuesTasksLeaseRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                leaseTasksRequest = new LeaseTasksRequest() {{
                    filter = "repellendus";
                    leaseDuration = "porro";
                    maxTasks = 984330;
                    responseView = LeaseTasksRequestResponseViewEnum.VIEW_UNSPECIFIED;
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "qui";
                fields = "quae";
                key = "laudantium";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "voluptatibus";
                uploadProtocol = "quisquam";
            }};            

            CloudtasksProjectsLocationsQueuesTasksLeaseResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksLease(req, new CloudtasksProjectsLocationsQueuesTasksLeaseSecurity("vero", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaseTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTasksList

Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksListRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksListResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksListRequest req = new CloudtasksProjectsLocationsQueuesTasksListRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "vero";
                key = "tenetur";
                oauthToken = "dignissimos";
                pageSize = 941378L;
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quod";
                responseView = CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum.BASIC;
                uploadType = "similique";
                uploadProtocol = "facilis";
            }};            

            CloudtasksProjectsLocationsQueuesTasksListResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksList(req, new CloudtasksProjectsLocationsQueuesTasksListSecurity("vero", "ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTasksRenewLease

Renew the current lease of a pull task. The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule_time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksRenewLeaseResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RenewLeaseRequest;
import org.openapis.openapi.models.shared.RenewLeaseRequestResponseViewEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest req = new CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest("dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                renewLeaseRequest = new RenewLeaseRequest() {{
                    leaseDuration = "illum";
                    responseView = RenewLeaseRequestResponseViewEnum.VIEW_UNSPECIFIED;
                    scheduleTime = "natus";
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "exercitationem";
                key = "nulla";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "maiores";
                uploadProtocol = "doloribus";
            }};            

            CloudtasksProjectsLocationsQueuesTasksRenewLeaseResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksRenewLease(req, new CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity("iusto", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTasksRun

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed. RunTask cannot be called on a pull task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksRunRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksRunResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTasksRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RunTaskRequest;
import org.openapis.openapi.models.shared.RunTaskRequestResponseViewEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksRunRequest req = new CloudtasksProjectsLocationsQueuesTasksRunRequest("ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                runTaskRequest = new RunTaskRequest() {{
                    responseView = RunTaskRequestResponseViewEnum.BASIC;
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "aspernatur";
                key = "vel";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "ratione";
                uploadProtocol = "ex";
            }};            

            CloudtasksProjectsLocationsQueuesTasksRunResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksRun(req, new CloudtasksProjectsLocationsQueuesTasksRunSecurity("laudantium", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtasksProjectsLocationsQueuesTestIamPermissions

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest req = new CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ex"),
                    }};
                }};;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "nostrum";
                key = "sapiente";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "ea";
                uploadProtocol = "impedit";
            }};            

            CloudtasksProjectsLocationsQueuesTestIamPermissionsResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTestIamPermissions(req, new CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity("corporis", "veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
