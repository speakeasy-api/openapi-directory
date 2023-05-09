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
* [cloudtasksProjectsLocationsQueuesTasksBuffer](#cloudtasksprojectslocationsqueuestasksbuffer) - Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).
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
import org.openapis.openapi.models.shared.AppEngineHttpQueue;
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
import org.openapis.openapi.models.shared.QueueTypeEnum;
import org.openapis.openapi.models.shared.RateLimits;
import org.openapis.openapi.models.shared.RetryConfig;
import org.openapis.openapi.models.shared.StackdriverLoggingConfig;
import org.openapis.openapi.models.shared.UriOverride;
import org.openapis.openapi.models.shared.UriOverrideSchemeEnum;
import org.openapis.openapi.models.shared.UriOverrideUriOverrideEnforceModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesCreateRequest req = new CloudtasksProjectsLocationsQueuesCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                queueInput = new QueueInput() {{
                    appEngineHttpQueue = new AppEngineHttpQueue() {{
                        appEngineRoutingOverride = new AppEngineRouting() {{
                            host = "repellendus";
                            instance = "sapiente";
                            service = "quo";
                            version = "odit";
                        }};;
                    }};;
                    httpTarget = new HttpTarget() {{
                        headerOverrides = new org.openapis.openapi.models.shared.HeaderOverride[]{{
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "at";
                                    value = "maiores";
                                }};
                            }}),
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "molestiae";
                                    value = "quod";
                                }};
                            }}),
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "quod";
                                    value = "esse";
                                }};
                            }}),
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "totam";
                                    value = "porro";
                                }};
                            }}),
                        }};
                        httpMethod = HttpTargetHttpMethodEnum.DELETE;
                        oauthToken = new OAuthToken() {{
                            scope = "dicta";
                            serviceAccountEmail = "nam";
                        }};;
                        oidcToken = new OidcToken() {{
                            audience = "officia";
                            serviceAccountEmail = "occaecati";
                        }};;
                        uriOverride = new UriOverride() {{
                            host = "fugit";
                            pathOverride = new PathOverride() {{
                                path = "deleniti";
                            }};;
                            port = "hic";
                            queryOverride = new QueryOverride() {{
                                queryParams = "optio";
                            }};;
                            scheme = UriOverrideSchemeEnum.HTTP;
                            uriOverrideEnforceMode = UriOverrideUriOverrideEnforceModeEnum.URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED;
                        }};;
                    }};;
                    name = "Tanya Gleason";
                    purgeTime = "cum";
                    rateLimits = new RateLimits() {{
                        maxBurstSize = 456150;
                        maxConcurrentDispatches = 216550;
                        maxDispatchesPerSecond = 5684.34;
                    }};;
                    retryConfig = new RetryConfig() {{
                        maxAttempts = 135218;
                        maxBackoff = "perferendis";
                        maxDoublings = 324141;
                        maxRetryDuration = "natus";
                        minBackoff = "sed";
                    }};;
                    stackdriverLoggingConfig = new StackdriverLoggingConfig() {{
                        samplingRatio = 6120.96;
                    }};;
                    state = QueueStateEnum.STATE_UNSPECIFIED;
                    taskTtl = "natus";
                    tombstoneTtl = "laboriosam";
                    type = QueueTypeEnum.PUSH;
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "corporis";
                key = "iste";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quidem";
                uploadProtocol = "architecto";
            }};            

            CloudtasksProjectsLocationsQueuesCreateResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesCreate(req, new CloudtasksProjectsLocationsQueuesCreateSecurity("ipsa", "reiciendis") {{
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

            CloudtasksProjectsLocationsQueuesGetIamPolicyRequest req = new CloudtasksProjectsLocationsQueuesGetIamPolicyRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 670638;
                    }};;
                }};;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "explicabo";
                key = "nobis";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "nemo";
                uploadProtocol = "minima";
            }};            

            CloudtasksProjectsLocationsQueuesGetIamPolicyResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesGetIamPolicy(req, new CloudtasksProjectsLocationsQueuesGetIamPolicySecurity("excepturi", "accusantium") {{
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

            CloudtasksProjectsLocationsQueuesListRequest req = new CloudtasksProjectsLocationsQueuesListRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                filter = "dolorem";
                key = "culpa";
                oauthToken = "consequuntur";
                pageSize = 995300L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                readMask = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            CloudtasksProjectsLocationsQueuesListResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesList(req, new CloudtasksProjectsLocationsQueuesListSecurity("molestiae", "velit") {{
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
import org.openapis.openapi.models.shared.AppEngineHttpQueue;
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
import org.openapis.openapi.models.shared.QueueTypeEnum;
import org.openapis.openapi.models.shared.RateLimits;
import org.openapis.openapi.models.shared.RetryConfig;
import org.openapis.openapi.models.shared.StackdriverLoggingConfig;
import org.openapis.openapi.models.shared.UriOverride;
import org.openapis.openapi.models.shared.UriOverrideSchemeEnum;
import org.openapis.openapi.models.shared.UriOverrideUriOverrideEnforceModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesPatchRequest req = new CloudtasksProjectsLocationsQueuesPatchRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                queueInput = new QueueInput() {{
                    appEngineHttpQueue = new AppEngineHttpQueue() {{
                        appEngineRoutingOverride = new AppEngineRouting() {{
                            host = "quis";
                            instance = "vitae";
                            service = "laborum";
                            version = "animi";
                        }};;
                    }};;
                    httpTarget = new HttpTarget() {{
                        headerOverrides = new org.openapis.openapi.models.shared.HeaderOverride[]{{
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "odit";
                                    value = "quo";
                                }};
                            }}),
                            add(new HeaderOverride() {{
                                header = new Header() {{
                                    key = "sequi";
                                    value = "tenetur";
                                }};
                            }}),
                        }};
                        httpMethod = HttpTargetHttpMethodEnum.GET;
                        oauthToken = new OAuthToken() {{
                            scope = "id";
                            serviceAccountEmail = "possimus";
                        }};;
                        oidcToken = new OidcToken() {{
                            audience = "aut";
                            serviceAccountEmail = "quasi";
                        }};;
                        uriOverride = new UriOverride() {{
                            host = "error";
                            pathOverride = new PathOverride() {{
                                path = "temporibus";
                            }};;
                            port = "laborum";
                            queryOverride = new QueryOverride() {{
                                queryParams = "quasi";
                            }};;
                            scheme = UriOverrideSchemeEnum.HTTPS;
                            uriOverrideEnforceMode = UriOverrideUriOverrideEnforceModeEnum.ALWAYS;
                        }};;
                    }};;
                    name = "Jessie Langosh V";
                    purgeTime = "voluptate";
                    rateLimits = new RateLimits() {{
                        maxBurstSize = 739264;
                        maxConcurrentDispatches = 19987;
                        maxDispatchesPerSecond = 391.87;
                    }};;
                    retryConfig = new RetryConfig() {{
                        maxAttempts = 441711;
                        maxBackoff = "ut";
                        maxDoublings = 979587;
                        maxRetryDuration = "dicta";
                        minBackoff = "corporis";
                    }};;
                    stackdriverLoggingConfig = new StackdriverLoggingConfig() {{
                        samplingRatio = 2961.4;
                    }};;
                    state = QueueStateEnum.RUNNING;
                    taskTtl = "dicta";
                    tombstoneTtl = "harum";
                    type = QueueTypeEnum.TYPE_UNSPECIFIED;
                }};;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "quae";
                key = "ipsum";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestias";
                updateMask = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            CloudtasksProjectsLocationsQueuesPatchResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesPatch(req, new CloudtasksProjectsLocationsQueuesPatchSecurity("praesentium", "rem") {{
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

            CloudtasksProjectsLocationsQueuesPauseRequest req = new CloudtasksProjectsLocationsQueuesPauseRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sint", "veritatis");
                    put("itaque", "incidunt");
                    put("enim", "consequatur");
                    put("est", "quibusdam");
                }};
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "quibusdam";
                key = "labore";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "aliquid";
                uploadProtocol = "cupiditate";
            }};            

            CloudtasksProjectsLocationsQueuesPauseResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesPause(req, new CloudtasksProjectsLocationsQueuesPauseSecurity("quos", "perferendis") {{
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

            CloudtasksProjectsLocationsQueuesPurgeRequest req = new CloudtasksProjectsLocationsQueuesPurgeRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("alias", "fugit");
                    put("dolorum", "excepturi");
                }};
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "labore";
                key = "delectus";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }};            

            CloudtasksProjectsLocationsQueuesPurgeResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesPurge(req, new CloudtasksProjectsLocationsQueuesPurgeSecurity("aliquid", "provident") {{
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

            CloudtasksProjectsLocationsQueuesResumeRequest req = new CloudtasksProjectsLocationsQueuesResumeRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolor", "debitis");
                    put("a", "dolorum");
                    put("in", "in");
                }};
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "dicta";
                key = "magnam";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "ea";
                uploadProtocol = "aliquid";
            }};            

            CloudtasksProjectsLocationsQueuesResumeResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesResume(req, new CloudtasksProjectsLocationsQueuesResumeSecurity("laborum", "accusamus") {{
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

            CloudtasksProjectsLocationsQueuesSetIamPolicyRequest req = new CloudtasksProjectsLocationsQueuesSetIamPolicyRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "accusamus";
                                    expression = "delectus";
                                    location = "quidem";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("id"),
                                    add("blanditiis"),
                                    add("deleniti"),
                                }};
                                role = "sapiente";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "amet";
                                    expression = "deserunt";
                                    location = "nisi";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("omnis"),
                                    add("molestiae"),
                                    add("perferendis"),
                                }};
                                role = "nihil";
                            }}),
                        }};
                        etag = "magnam";
                        version = 716075;
                    }};;
                }};;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "suscipit";
                key = "natus";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "vero";
                uploadProtocol = "aspernatur";
            }};            

            CloudtasksProjectsLocationsQueuesSetIamPolicyResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesSetIamPolicy(req, new CloudtasksProjectsLocationsQueuesSetIamPolicySecurity("architecto", "magnam") {{
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

            CloudtasksProjectsLocationsQueuesTasksBufferRequest req = new CloudtasksProjectsLocationsQueuesTasksBufferRequest("et", "excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                bufferTaskRequest = new BufferTaskRequest() {{
                    body = new HttpBody() {{
                        contentType = "provident";
                        data = "quos";
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("mollitia", "reiciendis");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("ad", "eum");
                                put("dolor", "necessitatibus");
                                put("odit", "nemo");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("iure", "doloribus");
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "maxime";
                fields = "deleniti";
                key = "facilis";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "architecto";
                uploadProtocol = "repudiandae";
            }};            

            CloudtasksProjectsLocationsQueuesTasksBufferResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksBuffer(req, new CloudtasksProjectsLocationsQueuesTasksBufferSecurity("ullam", "expedita") {{
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
import org.openapis.openapi.models.shared.PullMessage;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.Task;
import org.openapis.openapi.models.shared.TaskViewEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksProjectsLocationsQueuesTasksCreateRequest req = new CloudtasksProjectsLocationsQueuesTasksCreateRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                createTaskRequest = new CreateTaskRequest() {{
                    responseView = CreateTaskRequestResponseViewEnum.FULL;
                    task = new Task() {{
                        appEngineHttpRequest = new AppEngineHttpRequest() {{
                            appEngineRouting = new AppEngineRouting() {{
                                host = "sed";
                                instance = "saepe";
                                service = "pariatur";
                                version = "accusantium";
                            }};;
                            body = "consequuntur";
                            headers = new java.util.HashMap<String, String>() {{
                                put("natus", "magni");
                                put("sunt", "quo");
                                put("illum", "pariatur");
                            }};
                            httpMethod = AppEngineHttpRequestHttpMethodEnum.PATCH;
                            relativeUri = "ea";
                        }};;
                        createTime = "excepturi";
                        dispatchCount = 139972;
                        dispatchDeadline = "ea";
                        firstAttempt = new Attempt() {{
                            dispatchTime = "accusantium";
                            responseStatus = new Status() {{
                                code = 69167;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("ipsam", "voluptate");
                                        put("autem", "nam");
                                        put("eaque", "pariatur");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("voluptatibus", "perferendis");
                                        put("fugiat", "amet");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("cumque", "corporis");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("libero", "nobis");
                                        put("dolores", "quis");
                                        put("totam", "dignissimos");
                                        put("eaque", "quis");
                                    }}),
                                }};
                                message = "nesciunt";
                            }};;
                            responseTime = "eos";
                            scheduleTime = "perferendis";
                        }};;
                        httpRequest = new HttpRequest() {{
                            body = "dolores";
                            headers = new java.util.HashMap<String, String>() {{
                                put("quam", "dolor");
                                put("vero", "nostrum");
                                put("hic", "recusandae");
                                put("omnis", "facilis");
                            }};
                            httpMethod = HttpRequestHttpMethodEnum.PUT;
                            oauthToken = new OAuthToken() {{
                                scope = "voluptatem";
                                serviceAccountEmail = "porro";
                            }};;
                            oidcToken = new OidcToken() {{
                                audience = "consequuntur";
                                serviceAccountEmail = "blanditiis";
                            }};;
                            url = "error";
                        }};;
                        lastAttempt = new Attempt() {{
                            dispatchTime = "eaque";
                            responseStatus = new Status() {{
                                code = 577229;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("asperiores", "earum");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("iste", "dolorum");
                                        put("deleniti", "pariatur");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("nobis", "libero");
                                        put("delectus", "quaerat");
                                        put("quos", "aliquid");
                                    }}),
                                }};
                                message = "dolorem";
                            }};;
                            responseTime = "dolorem";
                            scheduleTime = "dolor";
                        }};;
                        name = "Tiffany Welch";
                        pullMessage = new PullMessage() {{
                            payload = "voluptate";
                            tag = "dignissimos";
                        }};;
                        responseCount = 970237;
                        scheduleTime = "amet";
                        view = TaskViewEnum.FULL;
                    }};;
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "ipsa";
                key = "iure";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "accusamus";
                uploadProtocol = "quidem";
            }};            

            CloudtasksProjectsLocationsQueuesTasksCreateResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksCreate(req, new CloudtasksProjectsLocationsQueuesTasksCreateSecurity("voluptatibus", "voluptas") {{
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

            CloudtasksProjectsLocationsQueuesTasksDeleteRequest req = new CloudtasksProjectsLocationsQueuesTasksDeleteRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "ab";
                key = "soluta";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "voluptate";
                uploadProtocol = "dolorum";
            }};            

            CloudtasksProjectsLocationsQueuesTasksDeleteResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksDelete(req, new CloudtasksProjectsLocationsQueuesTasksDeleteSecurity("deleniti", "omnis") {{
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

            CloudtasksProjectsLocationsQueuesTasksGetRequest req = new CloudtasksProjectsLocationsQueuesTasksGetRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "voluptate";
                key = "id";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "eius";
                responseView = CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum.VIEW_UNSPECIFIED;
                uploadType = "perferendis";
                uploadProtocol = "amet";
            }};            

            CloudtasksProjectsLocationsQueuesTasksGetResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksGet(req, new CloudtasksProjectsLocationsQueuesTasksGetSecurity("optio", "accusamus") {{
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

            CloudtasksProjectsLocationsQueuesTasksListRequest req = new CloudtasksProjectsLocationsQueuesTasksListRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "minima";
                key = "repellendus";
                oauthToken = "totam";
                pageSize = 628982L;
                pageToken = "alias";
                prettyPrint = false;
                quotaUser = "at";
                responseView = CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum.VIEW_UNSPECIFIED;
                uploadType = "tempora";
                uploadProtocol = "vel";
            }};            

            CloudtasksProjectsLocationsQueuesTasksListResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksList(req, new CloudtasksProjectsLocationsQueuesTasksListSecurity("quod", "officiis") {{
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

            CloudtasksProjectsLocationsQueuesTasksRunRequest req = new CloudtasksProjectsLocationsQueuesTasksRunRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                runTaskRequest = new RunTaskRequest() {{
                    responseView = RunTaskRequestResponseViewEnum.FULL;
                }};;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "ipsum";
                key = "quisquam";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "tempore";
                uploadProtocol = "accusamus";
            }};            

            CloudtasksProjectsLocationsQueuesTasksRunResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTasksRun(req, new CloudtasksProjectsLocationsQueuesTasksRunSecurity("numquam", "enim") {{
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

            CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest req = new CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nihil"),
                        add("sit"),
                        add("expedita"),
                    }};
                }};;
                accessToken = "neque";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "libero";
                key = "voluptas";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "ipsum";
                uploadProtocol = "incidunt";
            }};            

            CloudtasksProjectsLocationsQueuesTestIamPermissionsResponse res = sdk.projects.cloudtasksProjectsLocationsQueuesTestIamPermissions(req, new CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity("qui", "cupiditate") {{
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
