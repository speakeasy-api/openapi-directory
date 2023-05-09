# projects

### Available Operations

* [workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel](#workflowexecutionsprojectslocationsworkflowsexecutionscancel) - Cancels an execution of the given name.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate](#workflowexecutionsprojectslocationsworkflowsexecutionscreate) - Creates a new execution using the latest revision of the given workflow.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsGet](#workflowexecutionsprojectslocationsworkflowsexecutionsget) - Returns an execution of the given name.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsList](#workflowexecutionsprojectslocationsworkflowsexecutionslist) - Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
* [workflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution](#workflowexecutionsprojectslocationsworkflowstriggerpubsubexecution) - Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.

## workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel

Cancels an execution of the given name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest req = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse res = sdk.projects.workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(req, new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate

Creates a new execution using the latest revision of the given workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ExecutionCallLogLevelEnum;
import org.openapis.openapi.models.shared.ExecutionInput;
import org.openapis.openapi.models.shared.Position;
import org.openapis.openapi.models.shared.StackTrace;
import org.openapis.openapi.models.shared.StackTraceElement;
import org.openapis.openapi.models.shared.StateError;
import org.openapis.openapi.models.shared.StateErrorTypeEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.Step;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest req = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                executionInput = new ExecutionInput() {{
                    argument = "quod";
                    callLogLevel = ExecutionCallLogLevelEnum.LOG_NONE;
                    error = new Error() {{
                        context = "esse";
                        payload = "totam";
                        stackTrace = new StackTrace() {{
                            elements = new org.openapis.openapi.models.shared.StackTraceElement[]{{
                                add(new StackTraceElement() {{
                                    position = new Position() {{
                                        column = "dolorum";
                                        length = "dicta";
                                        line = "nam";
                                    }};
                                    routine = "officia";
                                    step = "occaecati";
                                }}),
                                add(new StackTraceElement() {{
                                    position = new Position() {{
                                        column = "fugit";
                                        length = "deleniti";
                                        line = "hic";
                                    }};
                                    routine = "optio";
                                    step = "totam";
                                }}),
                                add(new StackTraceElement() {{
                                    position = new Position() {{
                                        column = "beatae";
                                        length = "commodi";
                                        line = "molestiae";
                                    }};
                                    routine = "modi";
                                    step = "qui";
                                }}),
                                add(new StackTraceElement() {{
                                    position = new Position() {{
                                        column = "impedit";
                                        length = "cum";
                                        line = "esse";
                                    }};
                                    routine = "ipsum";
                                    step = "excepturi";
                                }}),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("perferendis", "ad");
                    }};
                    stateError = new StateError() {{
                        details = "natus";
                        type = StateErrorTypeEnum.TYPE_UNSPECIFIED;
                    }};;
                    status = new Status() {{
                        currentSteps = new org.openapis.openapi.models.shared.Step[]{{
                            add(new Step() {{
                                routine = "dolor";
                                step = "natus";
                            }}),
                            add(new Step() {{
                                routine = "laboriosam";
                                step = "hic";
                            }}),
                            add(new Step() {{
                                routine = "saepe";
                                step = "fuga";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "ipsa";
                uploadProtocol = "reiciendis";
            }};            

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse res = sdk.projects.workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate(req, new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity("est", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workflowexecutionsProjectsLocationsWorkflowsExecutionsGet

Returns an execution of the given name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest req = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "nobis";
                key = "enim";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "minima";
                uploadProtocol = "excepturi";
                view = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum.EXECUTION_VIEW_UNSPECIFIED;
            }};            

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse res = sdk.projects.workflowexecutionsProjectsLocationsWorkflowsExecutionsGet(req, new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity("iure", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workflowexecutionsProjectsLocationsWorkflowsExecutionsList

Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest req = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "culpa";
                filter = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                orderBy = "occaecati";
                pageSize = 253291L;
                pageToken = "commodi";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "molestiae";
                uploadProtocol = "velit";
                view = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum.BASIC;
            }};            

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse res = sdk.projects.workflowexecutionsProjectsLocationsWorkflowsExecutionsList(req, new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity("quia", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution

Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PubsubMessage;
import org.openapis.openapi.models.shared.TriggerPubsubExecutionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest req = new WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest("vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                triggerPubsubExecutionRequest = new TriggerPubsubExecutionRequest() {{
                    gcpCloudEventsMode = "animi";
                    message = new PubsubMessage() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("odit", "quo");
                            put("sequi", "tenetur");
                        }};
                        data = "ipsam";
                        messageId = "id";
                        orderingKey = "possimus";
                        publishTime = "aut";
                    }};;
                    subscription = "quasi";
                }};;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "nihil";
                uploadProtocol = "praesentium";
            }};            

            WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionResponse res = sdk.projects.workflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecution(req, new WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity("voluptatibus", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
