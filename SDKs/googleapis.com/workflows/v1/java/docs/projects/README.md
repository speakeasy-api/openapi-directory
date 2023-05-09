# projects

### Available Operations

* [workflowsProjectsLocationsList](#workflowsprojectslocationslist) - Lists information about the supported locations for this service.
* [workflowsProjectsLocationsOperationsList](#workflowsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workflowsProjectsLocationsWorkflowsCreate](#workflowsprojectslocationsworkflowscreate) - Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a ALREADY_EXISTS error.
* [workflowsProjectsLocationsWorkflowsDelete](#workflowsprojectslocationsworkflowsdelete) - Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
* [workflowsProjectsLocationsWorkflowsGet](#workflowsprojectslocationsworkflowsget) - Gets details of a single workflow.
* [workflowsProjectsLocationsWorkflowsList](#workflowsprojectslocationsworkflowslist) - Lists workflows in a given project and location. The default order is not specified.
* [workflowsProjectsLocationsWorkflowsPatch](#workflowsprojectslocationsworkflowspatch) - Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions.

## workflowsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowsProjectsLocationsListRequest req = new WorkflowsProjectsLocationsListRequest("delectus") {{
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

            WorkflowsProjectsLocationsListResponse res = sdk.projects.workflowsProjectsLocationsList(req, new WorkflowsProjectsLocationsListSecurity("veritatis", "deserunt") {{
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

## workflowsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowsProjectsLocationsOperationsListRequest req = new WorkflowsProjectsLocationsOperationsListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                filter = "at";
                key = "at";
                oauthToken = "maiores";
                pageSize = 473608L;
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            WorkflowsProjectsLocationsOperationsListResponse res = sdk.projects.workflowsProjectsLocationsOperationsList(req, new WorkflowsProjectsLocationsOperationsListSecurity("porro", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workflowsProjectsLocationsWorkflowsCreate

Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a ALREADY_EXISTS error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsCreateRequest;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsCreateResponse;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StateError;
import org.openapis.openapi.models.shared.StateErrorTypeEnum;
import org.openapis.openapi.models.shared.WorkflowCallLogLevelEnum;
import org.openapis.openapi.models.shared.WorkflowInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowsProjectsLocationsWorkflowsCreateRequest req = new WorkflowsProjectsLocationsWorkflowsCreateRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                workflowInput = new WorkflowInput() {{
                    callLogLevel = WorkflowCallLogLevelEnum.LOG_ERRORS_ONLY;
                    cryptoKeyName = "occaecati";
                    description = "fugit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "optio");
                        put("totam", "beatae");
                        put("commodi", "molestiae");
                    }};
                    name = "Norma Ryan";
                    serviceAccount = "ipsum";
                    sourceContents = "excepturi";
                    stateError = new StateError() {{
                        details = "aspernatur";
                        type = StateErrorTypeEnum.TYPE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "iste";
                key = "dolor";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "hic";
                uploadProtocol = "saepe";
                workflowId = "fuga";
            }};            

            WorkflowsProjectsLocationsWorkflowsCreateResponse res = sdk.projects.workflowsProjectsLocationsWorkflowsCreate(req, new WorkflowsProjectsLocationsWorkflowsCreateSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workflowsProjectsLocationsWorkflowsDelete

Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsDeleteRequest;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsDeleteResponse;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowsProjectsLocationsWorkflowsDeleteRequest req = new WorkflowsProjectsLocationsWorkflowsDeleteRequest("iste") {{
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
            }};            

            WorkflowsProjectsLocationsWorkflowsDeleteResponse res = sdk.projects.workflowsProjectsLocationsWorkflowsDelete(req, new WorkflowsProjectsLocationsWorkflowsDeleteSecurity("dolorem", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workflowsProjectsLocationsWorkflowsGet

Gets details of a single workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsGetRequest;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsGetResponse;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowsProjectsLocationsWorkflowsGetRequest req = new WorkflowsProjectsLocationsWorkflowsGetRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "minima";
                key = "excepturi";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "iure";
                revisionId = "culpa";
                uploadType = "doloribus";
                uploadProtocol = "sapiente";
            }};            

            WorkflowsProjectsLocationsWorkflowsGetResponse res = sdk.projects.workflowsProjectsLocationsWorkflowsGet(req, new WorkflowsProjectsLocationsWorkflowsGetSecurity("architecto", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workflow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workflowsProjectsLocationsWorkflowsList

Lists workflows in a given project and location. The default order is not specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsListRequest;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsListResponse;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowsProjectsLocationsWorkflowsListRequest req = new WorkflowsProjectsLocationsWorkflowsListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "occaecati";
                filter = "numquam";
                key = "commodi";
                oauthToken = "quam";
                orderBy = "molestiae";
                pageSize = 244425L;
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "quis";
                uploadProtocol = "vitae";
            }};            

            WorkflowsProjectsLocationsWorkflowsListResponse res = sdk.projects.workflowsProjectsLocationsWorkflowsList(req, new WorkflowsProjectsLocationsWorkflowsListSecurity("laborum", "animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWorkflowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workflowsProjectsLocationsWorkflowsPatch

Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsPatchRequest;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsPatchResponse;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StateError;
import org.openapis.openapi.models.shared.StateErrorTypeEnum;
import org.openapis.openapi.models.shared.WorkflowCallLogLevelEnum;
import org.openapis.openapi.models.shared.WorkflowInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowsProjectsLocationsWorkflowsPatchRequest req = new WorkflowsProjectsLocationsWorkflowsPatchRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                workflowInput = new WorkflowInput() {{
                    callLogLevel = WorkflowCallLogLevelEnum.LOG_NONE;
                    cryptoKeyName = "sequi";
                    description = "tenetur";
                    labels = new java.util.HashMap<String, String>() {{
                        put("id", "possimus");
                        put("aut", "quasi");
                    }};
                    name = "Dr. Jake Pacocha";
                    serviceAccount = "vero";
                    sourceContents = "nihil";
                    stateError = new StateError() {{
                        details = "praesentium";
                        type = StateErrorTypeEnum.KMS_ERROR;
                    }};;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "cum";
                key = "perferendis";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                updateMask = "ut";
                uploadType = "maiores";
                uploadProtocol = "dicta";
            }};            

            WorkflowsProjectsLocationsWorkflowsPatchResponse res = sdk.projects.workflowsProjectsLocationsWorkflowsPatch(req, new WorkflowsProjectsLocationsWorkflowsPatchSecurity("corporis", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
