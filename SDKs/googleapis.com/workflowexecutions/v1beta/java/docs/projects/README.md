# projects

### Available Operations

* [workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel](#workflowexecutionsprojectslocationsworkflowsexecutionscancel) - Cancels an execution of the given name.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate](#workflowexecutionsprojectslocationsworkflowsexecutionscreate) - Creates a new execution using the latest revision of the given workflow.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsGet](#workflowexecutionsprojectslocationsworkflowsexecutionsget) - Returns an execution of the given name.
* [workflowexecutionsProjectsLocationsWorkflowsExecutionsList](#workflowexecutionsprojectslocationsworkflowsexecutionslist) - Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).

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
                    callLogLevel = ExecutionCallLogLevelEnum.LOG_ERRORS_ONLY;
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
                    status = new Status() {{
                        currentSteps = new org.openapis.openapi.models.shared.Step[]{{
                            add(new Step() {{
                                routine = "perferendis";
                                step = "ad";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse res = sdk.projects.workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate(req, new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity("in", "corporis") {{
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

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest req = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "ipsa";
                key = "reiciendis";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "laborum";
                uploadProtocol = "dolores";
                view = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum.EXECUTION_VIEW_UNSPECIFIED;
            }};            

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse res = sdk.projects.workflowexecutionsProjectsLocationsWorkflowsExecutionsGet(req, new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity("corporis", "explicabo") {{
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

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest req = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "excepturi";
                key = "accusantium";
                oauthToken = "iure";
                pageSize = 634274L;
                pageToken = "doloribus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "architecto";
                uploadProtocol = "mollitia";
                view = WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListViewEnum.EXECUTION_VIEW_UNSPECIFIED;
            }};            

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse res = sdk.projects.workflowexecutionsProjectsLocationsWorkflowsExecutionsList(req, new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity("culpa", "consequuntur") {{
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
