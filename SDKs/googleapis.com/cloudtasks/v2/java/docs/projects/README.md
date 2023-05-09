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
* [cloudtasksProjectsLocationsQueuesTasksCreate](#cloudtasksprojectslocationsqueuestaskscreate) - Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.
* [cloudtasksProjectsLocationsQueuesTasksDelete](#cloudtasksprojectslocationsqueuestasksdelete) - Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.
* [cloudtasksProjectsLocationsQueuesTasksGet](#cloudtasksprojectslocationsqueuestasksget) - Gets a task.
* [cloudtasksProjectsLocationsQueuesTasksList](#cloudtasksprojectslocationsqueuestaskslist) - Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.
* [cloudtasksProjectsLocationsQueuesTasksRun](#cloudtasksprojectslocationsqueuestasksrun) - Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.
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

            CloudtasksProjectsLocationsListRequest req = new CloudtasksProjectsLocationsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            CloudtasksProjectsLocationsListResponse res = sdk.projects.cloudtasksProjectsLocationsList(req, new CloudtasksProjectsLocationsListSecurity("veritatis", "deserunt") {{
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
import org.openapis.openapi.models.shared.AppEngineRouting;
import org.openapis.openapi.models.shared.Queue;
import org.openapis.openapi.models.shared.QueueStateEnum;
import org.openapis.openapi.models.shared.RateLimits;
import org.openapis.openapi.models.shared.RetryConfig;
import org.openapis.openapi.models.shared.StackdriverLoggingConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesCreateRequest req = new CloudtasksProjectsLocationsQueuesCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                queue = new Queue() {{
                    appEngineRoutingOverride = new AppEngineRouting() {{
                        host = "repellendus";
                        instance = "sapiente";
                        service = "quo";
                        version = "odit";
                    }};;
                    name = "Wilfred Wolff";
                    purgeTime = "quod";
                    rateLimits = new RateLimits() {{
                        maxBurstSize = 461479;
                        maxConcurrentDispatches = 520478;
                        maxDispatchesPerSecond = 7805.29;
                    }};;
                    retryConfig = new RetryConfig() {{
                        maxAttempts = 678880;
                        maxBackoff = "dicta";
                        maxDoublings = 720633;
                        maxRetryDuration = "officia";
                        minBackoff = "occaecati";
                    }};;
                    stackdriverLoggingConfig = new StackdriverLoggingConfig() {{
                        samplingRatio = 1433.53;
                    }};;
                    state = QueueStateEnum.PAUSED;
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "beatae";
                key = "commodi";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "impedit";
            }};            

            CloudtasksProjectsLocationsQueuesCreateResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesCreate(req, new CloudtasksProjectsLocationsQueuesCreateSecurity("cum", "esse") {{
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

            CloudtasksProjectsLocationsQueuesGetIamPolicyRequest req = new CloudtasksProjectsLocationsQueuesGetIamPolicyRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 135218;
                    }};;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                key = "iste";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            CloudtasksProjectsLocationsQueuesGetIamPolicyResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesGetIamPolicy(req, new CloudtasksProjectsLocationsQueuesGetIamPolicySecurity("saepe", "fuga") {{
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

            CloudtasksProjectsLocationsQueuesListRequest req = new CloudtasksProjectsLocationsQueuesListRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "quidem";
                filter = "architecto";
                key = "ipsa";
                oauthToken = "reiciendis";
                pageSize = 666767L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "dolores";
                uploadProtocol = "dolorem";
            }};            

            CloudtasksProjectsLocationsQueuesListResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesList(req, new CloudtasksProjectsLocationsQueuesListSecurity("corporis", "explicabo") {{
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
import org.openapis.openapi.models.shared.AppEngineRouting;
import org.openapis.openapi.models.shared.Queue;
import org.openapis.openapi.models.shared.QueueStateEnum;
import org.openapis.openapi.models.shared.RateLimits;
import org.openapis.openapi.models.shared.RetryConfig;
import org.openapis.openapi.models.shared.StackdriverLoggingConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesPatchRequest req = new CloudtasksProjectsLocationsQueuesPatchRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                queue = new Queue() {{
                    appEngineRoutingOverride = new AppEngineRouting() {{
                        host = "omnis";
                        instance = "nemo";
                        service = "minima";
                        version = "excepturi";
                    }};;
                    name = "Charlene Nicolas";
                    purgeTime = "architecto";
                    rateLimits = new RateLimits() {{
                        maxBurstSize = 652790;
                        maxConcurrentDispatches = 208876;
                        maxDispatchesPerSecond = 6350.59;
                    }};;
                    retryConfig = new RetryConfig() {{
                        maxAttempts = 161309;
                        maxBackoff = "repellat";
                        maxDoublings = 653108;
                        maxRetryDuration = "occaecati";
                        minBackoff = "numquam";
                    }};;
                    stackdriverLoggingConfig = new StackdriverLoggingConfig() {{
                        samplingRatio = 4143.69;
                    }};;
                    state = QueueStateEnum.RUNNING;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                key = "quis";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "laborum";
                updateMask = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            CloudtasksProjectsLocationsQueuesPatchResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesPatch(req, new CloudtasksProjectsLocationsQueuesPatchSecurity("quo", "sequi") {{
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

            CloudtasksProjectsLocationsQueuesPauseRequest req = new CloudtasksProjectsLocationsQueuesPauseRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("possimus", "aut");
                    put("quasi", "error");
                    put("temporibus", "laborum");
                }};
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            CloudtasksProjectsLocationsQueuesPauseResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesPause(req, new CloudtasksProjectsLocationsQueuesPauseSecurity("voluptate", "cum") {{
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

            CloudtasksProjectsLocationsQueuesPurgeRequest req = new CloudtasksProjectsLocationsQueuesPurgeRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ut", "maiores");
                    put("dicta", "corporis");
                }};
                accessToken = "dolore";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "harum";
                key = "enim";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "repudiandae";
                uploadProtocol = "quae";
            }};            

            CloudtasksProjectsLocationsQueuesPurgeResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesPurge(req, new CloudtasksProjectsLocationsQueuesPurgeSecurity("ipsum", "quidem") {{
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

            CloudtasksProjectsLocationsQueuesResumeRequest req = new CloudtasksProjectsLocationsQueuesResumeRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("modi", "praesentium");
                    put("rem", "voluptates");
                    put("quasi", "repudiandae");
                    put("sint", "veritatis");
                }};
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "consequatur";
                key = "est";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "deserunt";
                uploadProtocol = "distinctio";
            }};            

            CloudtasksProjectsLocationsQueuesResumeResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesResume(req, new CloudtasksProjectsLocationsQueuesResumeSecurity("quibusdam", "labore") {{
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

            CloudtasksProjectsLocationsQueuesSetIamPolicyRequest req = new CloudtasksProjectsLocationsQueuesSetIamPolicyRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "cupiditate";
                                    expression = "quos";
                                    location = "perferendis";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("ipsam"),
                                    add("alias"),
                                    add("fugit"),
                                    add("dolorum"),
                                }};
                                role = "excepturi";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "tempora";
                                    expression = "facilis";
                                    location = "tempore";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("eum"),
                                    add("non"),
                                    add("eligendi"),
                                    add("sint"),
                                }};
                                role = "aliquid";
                            }}),
                        }};
                        etag = "provident";
                        version = 896039;
                    }};;
                }};;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "debitis";
                key = "a";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "in";
                uploadProtocol = "illum";
            }};            

            CloudtasksProjectsLocationsQueuesSetIamPolicyResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesSetIamPolicy(req, new CloudtasksProjectsLocationsQueuesSetIamPolicySecurity("maiores", "rerum") {{
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

## cloudtasksProjectsLocationsQueuesTasksCreate

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.

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
import org.openapis.openapi.models.shared.Attempt;
import org.openapis.openapi.models.shared.CreateTaskRequest;
import org.openapis.openapi.models.shared.CreateTaskRequestResponseViewEnum;
import org.openapis.openapi.models.shared.HttpRequest;
import org.openapis.openapi.models.shared.HttpRequestHttpMethodEnum;
import org.openapis.openapi.models.shared.OAuthToken;
import org.openapis.openapi.models.shared.OidcToken;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.Task;
import org.openapis.openapi.models.shared.TaskViewEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksCreateRequest req = new CloudtasksProjectsLocationsQueuesTasksCreateRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                createTaskRequest = new CreateTaskRequest() {{
                    responseView = CreateTaskRequestResponseViewEnum.FULL;
                    task = new Task() {{
                        appEngineHttpRequest = new AppEngineHttpRequest() {{
                            appEngineRouting = new AppEngineRouting() {{
                                host = "facere";
                                instance = "ea";
                                service = "aliquid";
                                version = "laborum";
                            }};;
                            body = "accusamus";
                            headers = new java.util.HashMap<String, String>() {{
                                put("occaecati", "enim");
                            }};
                            httpMethod = AppEngineHttpRequestHttpMethodEnum.OPTIONS;
                            relativeUri = "delectus";
                        }};;
                        createTime = "quidem";
                        dispatchCount = 588465;
                        dispatchDeadline = "nam";
                        firstAttempt = new Attempt() {{
                            dispatchTime = "id";
                            responseStatus = new Status() {{
                                code = 501324;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("amet", "deserunt");
                                        put("nisi", "vel");
                                        put("natus", "omnis");
                                        put("molestiae", "perferendis");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("magnam", "distinctio");
                                        put("id", "labore");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("suscipit", "natus");
                                        put("nobis", "eum");
                                    }}),
                                }};
                                message = "vero";
                            }};;
                            responseTime = "aspernatur";
                            scheduleTime = "architecto";
                        }};;
                        httpRequest = new HttpRequest() {{
                            body = "magnam";
                            headers = new java.util.HashMap<String, String>() {{
                                put("excepturi", "ullam");
                            }};
                            httpMethod = HttpRequestHttpMethodEnum.PUT;
                            oauthToken = new OAuthToken() {{
                                scope = "quos";
                                serviceAccountEmail = "sint";
                            }};;
                            oidcToken = new OidcToken() {{
                                audience = "accusantium";
                                serviceAccountEmail = "mollitia";
                            }};;
                            url = "reiciendis";
                        }};;
                        lastAttempt = new Attempt() {{
                            dispatchTime = "mollitia";
                            responseStatus = new Status() {{
                                code = 320997;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("necessitatibus", "odit");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("quasi", "iure");
                                        put("doloribus", "debitis");
                                    }}),
                                }};
                                message = "eius";
                            }};;
                            responseTime = "maxime";
                            scheduleTime = "deleniti";
                        }};;
                        name = "Dr. Arnold Bradtke";
                        responseCount = 714242;
                        scheduleTime = "nihil";
                        view = TaskViewEnum.FULL;
                    }};;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "pariatur";
                key = "accusantium";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "natus";
                uploadProtocol = "magni";
            }};            

            CloudtasksProjectsLocationsQueuesTasksCreateResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksCreate(req, new CloudtasksProjectsLocationsQueuesTasksCreateSecurity("sunt", "quo") {{
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

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

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

            CloudtasksProjectsLocationsQueuesTasksDeleteRequest req = new CloudtasksProjectsLocationsQueuesTasksDeleteRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "odit";
                key = "ea";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "maiores";
                uploadProtocol = "quidem";
            }};            

            CloudtasksProjectsLocationsQueuesTasksDeleteResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksDelete(req, new CloudtasksProjectsLocationsQueuesTasksDeleteSecurity("ipsam", "voluptate") {{
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

            CloudtasksProjectsLocationsQueuesTasksGetRequest req = new CloudtasksProjectsLocationsQueuesTasksGetRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "voluptatibus";
                key = "perferendis";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "amet";
                responseView = CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum.VIEW_UNSPECIFIED;
                uploadType = "cumque";
                uploadProtocol = "corporis";
            }};            

            CloudtasksProjectsLocationsQueuesTasksGetResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksGet(req, new CloudtasksProjectsLocationsQueuesTasksGetSecurity("hic", "libero") {{
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

            CloudtasksProjectsLocationsQueuesTasksListRequest req = new CloudtasksProjectsLocationsQueuesTasksListRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "eaque";
                key = "quis";
                oauthToken = "nesciunt";
                pageSize = 179490L;
                pageToken = "perferendis";
                prettyPrint = false;
                quotaUser = "dolores";
                responseView = CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum.FULL;
                uploadType = "quam";
                uploadProtocol = "dolor";
            }};            

            CloudtasksProjectsLocationsQueuesTasksListResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksList(req, new CloudtasksProjectsLocationsQueuesTasksListSecurity("vero", "nostrum") {{
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

## cloudtasksProjectsLocationsQueuesTasksRun

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.

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

            CloudtasksProjectsLocationsQueuesTasksRunRequest req = new CloudtasksProjectsLocationsQueuesTasksRunRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                runTaskRequest = new RunTaskRequest() {{
                    responseView = RunTaskRequestResponseViewEnum.BASIC;
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "porro";
                key = "consequuntur";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "eaque";
                uploadProtocol = "occaecati";
            }};            

            CloudtasksProjectsLocationsQueuesTasksRunResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksRun(req, new CloudtasksProjectsLocationsQueuesTasksRunSecurity("rerum", "adipisci") {{
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

            CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest req = new CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest("asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("iste"),
                        add("dolorum"),
                    }};
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "nobis";
                key = "libero";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "quos";
                uploadProtocol = "aliquid";
            }};            

            CloudtasksProjectsLocationsQueuesTestIamPermissionsResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTestIamPermissions(req, new CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity("dolorem", "dolorem") {{
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
