# projects

### Available Operations

* [cloudbuildProjectsLocationsOperationsCancel](#cloudbuildprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [cloudbuildProjectsWorkerPoolsCreate](#cloudbuildprojectsworkerpoolscreate) - Creates a `WorkerPool` to run the builds, and returns the new worker pool.
* [cloudbuildProjectsWorkerPoolsDelete](#cloudbuildprojectsworkerpoolsdelete) - Deletes a `WorkerPool`.
* [cloudbuildProjectsWorkerPoolsGet](#cloudbuildprojectsworkerpoolsget) - Returns details of a `WorkerPool`.
* [cloudbuildProjectsWorkerPoolsList](#cloudbuildprojectsworkerpoolslist) - Lists `WorkerPool`s by project.
* [cloudbuildProjectsWorkerPoolsPatch](#cloudbuildprojectsworkerpoolspatch) - Updates a `WorkerPool`.

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
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.WorkerConfig;
import org.openapis.openapi.models.shared.WorkerPoolInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsWorkerPoolsCreateRequest req = new CloudbuildProjectsWorkerPoolsCreateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                workerPoolInput = new WorkerPoolInput() {{
                    networkConfig = new NetworkConfig() {{
                        peeredNetwork = "quod";
                    }};;
                    region = "quod";
                    workerConfig = new WorkerConfig() {{
                        diskSizeGb = "esse";
                        machineType = "totam";
                    }};;
                }};;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "deleniti";
                uploadProtocol = "hic";
                workerPoolId = "optio";
            }};            

            CloudbuildProjectsWorkerPoolsCreateResponse res = sdk.projects.cloudbuildProjectsWorkerPoolsCreate(req, new CloudbuildProjectsWorkerPoolsCreateSecurity("totam", "beatae") {{
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

Deletes a `WorkerPool`.

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

            CloudbuildProjectsWorkerPoolsDeleteRequest req = new CloudbuildProjectsWorkerPoolsDeleteRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            CloudbuildProjectsWorkerPoolsDeleteResponse res = sdk.projects.cloudbuildProjectsWorkerPoolsDelete(req, new CloudbuildProjectsWorkerPoolsDeleteSecurity("ad", "natus") {{
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

Returns details of a `WorkerPool`.

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

            CloudbuildProjectsWorkerPoolsGetRequest req = new CloudbuildProjectsWorkerPoolsGetRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "hic";
                key = "saepe";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "corporis";
                uploadProtocol = "iste";
            }};            

            CloudbuildProjectsWorkerPoolsGetResponse res = sdk.projects.cloudbuildProjectsWorkerPoolsGet(req, new CloudbuildProjectsWorkerPoolsGetSecurity("iure", "saepe") {{
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

Lists `WorkerPool`s by project.

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

            CloudbuildProjectsWorkerPoolsListRequest req = new CloudbuildProjectsWorkerPoolsListRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "mollitia";
                key = "laborum";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            CloudbuildProjectsWorkerPoolsListResponse res = sdk.projects.cloudbuildProjectsWorkerPoolsList(req, new CloudbuildProjectsWorkerPoolsListSecurity("nobis", "enim") {{
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

Updates a `WorkerPool`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsPatchRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsPatchResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsWorkerPoolsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.WorkerConfig;
import org.openapis.openapi.models.shared.WorkerPoolInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsWorkerPoolsPatchRequest req = new CloudbuildProjectsWorkerPoolsPatchRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                workerPoolInput = new WorkerPoolInput() {{
                    networkConfig = new NetworkConfig() {{
                        peeredNetwork = "minima";
                    }};;
                    region = "excepturi";
                    workerConfig = new WorkerConfig() {{
                        diskSizeGb = "accusantium";
                        machineType = "iure";
                    }};;
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                updateMask = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            CloudbuildProjectsWorkerPoolsPatchResponse res = sdk.projects.cloudbuildProjectsWorkerPoolsPatch(req, new CloudbuildProjectsWorkerPoolsPatchSecurity("occaecati", "numquam") {{
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
