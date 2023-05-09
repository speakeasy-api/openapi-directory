# projects

### Available Operations

* [workflowsProjectsLocationsList](#workflowsprojectslocationslist) - Lists information about the supported locations for this service.
* [workflowsProjectsLocationsOperationsList](#workflowsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workflowsProjectsLocationsWorkflowsCreate](#workflowsprojectslocationsworkflowscreate) - Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY_EXISTS error.
* [workflowsProjectsLocationsWorkflowsDelete](#workflowsprojectslocationsworkflowsdelete) - Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
* [workflowsProjectsLocationsWorkflowsGet](#workflowsprojectslocationsworkflowsget) - Gets details of a single Workflow.
* [workflowsProjectsLocationsWorkflowsList](#workflowsprojectslocationsworkflowslist) - Lists Workflows in a given project and location. The default order is not specified.
* [workflowsProjectsLocationsWorkflowsPatch](#workflowsprojectslocationsworkflowspatch) - Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a successful update operation. In that case, such revision will be used in new workflow executions.

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

Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY_EXISTS error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsCreateRequest;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsCreateResponse;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
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
                    description = "officia";
                    labels = new java.util.HashMap<String, String>() {{
                        put("fugit", "deleniti");
                        put("hic", "optio");
                        put("totam", "beatae");
                    }};
                    name = "Tanya Gleason";
                    serviceAccount = "cum";
                    sourceContents = "esse";
                }};;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "perferendis";
                key = "ad";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "iste";
                uploadProtocol = "dolor";
                workflowId = "natus";
            }};            

            WorkflowsProjectsLocationsWorkflowsCreateResponse res = sdk.projects.workflowsProjectsLocationsWorkflowsCreate(req, new WorkflowsProjectsLocationsWorkflowsCreateSecurity("laboriosam", "hic") {{
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

            WorkflowsProjectsLocationsWorkflowsDeleteRequest req = new WorkflowsProjectsLocationsWorkflowsDeleteRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
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

            WorkflowsProjectsLocationsWorkflowsDeleteResponse res = sdk.projects.workflowsProjectsLocationsWorkflowsDelete(req, new WorkflowsProjectsLocationsWorkflowsDeleteSecurity("est", "mollitia") {{
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

Gets details of a single Workflow.

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

            WorkflowsProjectsLocationsWorkflowsGetRequest req = new WorkflowsProjectsLocationsWorkflowsGetRequest("laborum") {{
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
            }};            

            WorkflowsProjectsLocationsWorkflowsGetResponse res = sdk.projects.workflowsProjectsLocationsWorkflowsGet(req, new WorkflowsProjectsLocationsWorkflowsGetSecurity("accusantium", "iure") {{
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

Lists Workflows in a given project and location. The default order is not specified.

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

            WorkflowsProjectsLocationsWorkflowsListRequest req = new WorkflowsProjectsLocationsWorkflowsListRequest("culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "dolorem";
                filter = "culpa";
                key = "consequuntur";
                oauthToken = "repellat";
                orderBy = "mollitia";
                pageSize = 581850L;
                pageToken = "numquam";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            WorkflowsProjectsLocationsWorkflowsListResponse res = sdk.projects.workflowsProjectsLocationsWorkflowsList(req, new WorkflowsProjectsLocationsWorkflowsListSecurity("velit", "error") {{
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

Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a successful update operation. In that case, such revision will be used in new workflow executions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsPatchRequest;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsPatchResponse;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsWorkflowsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WorkflowInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowsProjectsLocationsWorkflowsPatchRequest req = new WorkflowsProjectsLocationsWorkflowsPatchRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                workflowInput = new WorkflowInput() {{
                    description = "vitae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("animi", "enim");
                        put("odit", "quo");
                        put("sequi", "tenetur");
                    }};
                    name = "Mr. Alberta Schuster";
                    serviceAccount = "temporibus";
                    sourceContents = "laborum";
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                updateMask = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            WorkflowsProjectsLocationsWorkflowsPatchResponse res = sdk.projects.workflowsProjectsLocationsWorkflowsPatch(req, new WorkflowsProjectsLocationsWorkflowsPatchSecurity("cum", "perferendis") {{
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
