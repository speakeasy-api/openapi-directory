# projects

### Available Operations

* [cloudbuildProjectsLocationsOperationsCancel](#cloudbuildprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [cloudbuildProjectsWorkerPoolsCreate](#cloudbuildprojectsworkerpoolscreate) - Creates a `WorkerPool` to run the builds, and returns the new worker pool.
* [cloudbuildProjectsWorkerPoolsDelete](#cloudbuildprojectsworkerpoolsdelete) - Deletes a `WorkerPool` by its project ID and WorkerPool name.
* [cloudbuildProjectsWorkerPoolsGet](#cloudbuildprojectsworkerpoolsget) - Returns information about a `WorkerPool`.
* [cloudbuildProjectsWorkerPoolsList](#cloudbuildprojectsworkerpoolslist) - List project's `WorkerPool`s.
* [cloudbuildProjectsWorkerPoolsPatch](#cloudbuildprojectsworkerpoolspatch) - Update a `WorkerPool`.

## cloudbuildProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsLocationsOperationsCancelRequest req = new CloudbuildProjectsLocationsOperationsCancelRequest("minus") {{
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

            CloudbuildProjectsLocationsOperationsCancelResponse res = sdk.projects.cloudbuildProjectsLocationsOperationsCancel(req, new CloudbuildProjectsLocationsOperationsCancelSecurity("at", "at") {{
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

## cloudbuildProjectsWorkerPoolsCreate

Creates a `WorkerPool` to run the builds, and returns the new worker pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsCreateRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsCreateResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Network;
import org.openapis.openapi.models.shared.WorkerConfig;
import org.openapis.openapi.models.shared.WorkerPool;
import org.openapis.openapi.models.shared.WorkerPoolRegionsEnum;
import org.openapis.openapi.models.shared.WorkerPoolStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsWorkerPoolsCreateRequest req = new CloudbuildProjectsWorkerPoolsCreateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                workerPool = new WorkerPool() {{
                    createTime = "quod";
                    deleteTime = "quod";
                    name = "Deanna Sauer MD";
                    projectId = "officia";
                    regions = new org.openapis.openapi.models.shared.WorkerPoolRegionsEnum[]{{
                        add(WorkerPoolRegionsEnum.REGION_UNSPECIFIED),
                        add(WorkerPoolRegionsEnum.US_WEST1),
                        add(WorkerPoolRegionsEnum.US_EAST4),
                    }};
                    serviceAccountEmail = "optio";
                    status = WorkerPoolStatusEnum.RUNNING;
                    updateTime = "beatae";
                    workerConfig = new WorkerConfig() {{
                        diskSizeGb = "commodi";
                        machineType = "molestiae";
                        network = new Network() {{
                            network = "modi";
                            projectId = "qui";
                            subnetwork = "impedit";
                        }};;
                        tag = "cum";
                    }};;
                    workerCount = "esse";
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
            }};            

            CloudbuildProjectsWorkerPoolsCreateResponse res = sdk.projects.cloudbuildProjectsWorkerPoolsCreate(req, new CloudbuildProjectsWorkerPoolsCreateSecurity("natus", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workerPool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudbuildProjectsWorkerPoolsDelete

Deletes a `WorkerPool` by its project ID and WorkerPool name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsDeleteRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsDeleteResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsWorkerPoolsDeleteRequest req = new CloudbuildProjectsWorkerPoolsDeleteRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "iste";
                key = "iure";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
            }};            

            CloudbuildProjectsWorkerPoolsDeleteResponse res = sdk.projects.cloudbuildProjectsWorkerPoolsDelete(req, new CloudbuildProjectsWorkerPoolsDeleteSecurity("reiciendis", "est") {{
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

## cloudbuildProjectsWorkerPoolsGet

Returns information about a `WorkerPool`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsGetRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsGetResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsWorkerPoolsGetRequest req = new CloudbuildProjectsWorkerPoolsGetRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
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

            CloudbuildProjectsWorkerPoolsGetResponse res = sdk.projects.cloudbuildProjectsWorkerPoolsGet(req, new CloudbuildProjectsWorkerPoolsGetSecurity("excepturi", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workerPool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudbuildProjectsWorkerPoolsList

List project's `WorkerPool`s.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsListRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsListResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsWorkerPoolsListRequest req = new CloudbuildProjectsWorkerPoolsListRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            CloudbuildProjectsWorkerPoolsListResponse res = sdk.projects.cloudbuildProjectsWorkerPoolsList(req, new CloudbuildProjectsWorkerPoolsListSecurity("occaecati", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWorkerPoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudbuildProjectsWorkerPoolsPatch

Update a `WorkerPool`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsPatchRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsPatchResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Network;
import org.openapis.openapi.models.shared.WorkerConfig;
import org.openapis.openapi.models.shared.WorkerPool;
import org.openapis.openapi.models.shared.WorkerPoolRegionsEnum;
import org.openapis.openapi.models.shared.WorkerPoolStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsWorkerPoolsPatchRequest req = new CloudbuildProjectsWorkerPoolsPatchRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                workerPool = new WorkerPool() {{
                    createTime = "molestiae";
                    deleteTime = "velit";
                    name = "Miss Eugene Hauck";
                    projectId = "enim";
                    regions = new org.openapis.openapi.models.shared.WorkerPoolRegionsEnum[]{{
                        add(WorkerPoolRegionsEnum.US_EAST1),
                    }};
                    serviceAccountEmail = "sequi";
                    status = WorkerPoolStatusEnum.DELETED;
                    updateTime = "ipsam";
                    workerConfig = new WorkerConfig() {{
                        diskSizeGb = "id";
                        machineType = "possimus";
                        network = new Network() {{
                            network = "aut";
                            projectId = "quasi";
                            subnetwork = "error";
                        }};;
                        tag = "temporibus";
                    }};;
                    workerCount = "laborum";
                }};;
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

            CloudbuildProjectsWorkerPoolsPatchResponse res = sdk.projects.cloudbuildProjectsWorkerPoolsPatch(req, new CloudbuildProjectsWorkerPoolsPatchSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workerPool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
