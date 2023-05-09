# projects

### Available Operations

* [cloudbuildProjectsLocationsOperationsCancel](#cloudbuildprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [cloudbuildProjectsLocationsWorkerPoolsCreate](#cloudbuildprojectslocationsworkerpoolscreate) - Creates a `WorkerPool` to run the builds, and returns the new worker pool. NOTE: As of now, this method returns an `Operation` that is always complete.
* [cloudbuildProjectsLocationsWorkerPoolsDelete](#cloudbuildprojectslocationsworkerpoolsdelete) - Deletes a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.
* [cloudbuildProjectsLocationsWorkerPoolsGet](#cloudbuildprojectslocationsworkerpoolsget) - Returns details of a `WorkerPool`.
* [cloudbuildProjectsLocationsWorkerPoolsList](#cloudbuildprojectslocationsworkerpoolslist) - Lists `WorkerPool`s in the given project.
* [cloudbuildProjectsLocationsWorkerPoolsPatch](#cloudbuildprojectslocationsworkerpoolspatch) - Updates a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.

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

## cloudbuildProjectsLocationsWorkerPoolsCreate

Creates a `WorkerPool` to run the builds, and returns the new worker pool. NOTE: As of now, this method returns an `Operation` that is always complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsCreateRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsCreateResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsCreateSecurity;
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

            CloudbuildProjectsLocationsWorkerPoolsCreateRequest req = new CloudbuildProjectsLocationsWorkerPoolsCreateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                workerPoolInput = new WorkerPoolInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("quod", "esse");
                        put("totam", "porro");
                        put("dolorum", "dicta");
                        put("nam", "officia");
                    }};
                    displayName = "occaecati";
                    networkConfig = new NetworkConfig() {{
                        peeredNetwork = "fugit";
                    }};;
                    workerConfig = new WorkerConfig() {{
                        diskSizeGb = "deleniti";
                        machineType = "hic";
                        noExternalIp = false;
                    }};;
                }};;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
                workerPoolId = "esse";
            }};            

            CloudbuildProjectsLocationsWorkerPoolsCreateResponse res = sdk.projects.cloudbuildProjectsLocationsWorkerPoolsCreate(req, new CloudbuildProjectsLocationsWorkerPoolsCreateSecurity("ipsum", "excepturi") {{
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

## cloudbuildProjectsLocationsWorkerPoolsDelete

Deletes a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsDeleteRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsDeleteResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsLocationsWorkerPoolsDeleteRequest req = new CloudbuildProjectsLocationsWorkerPoolsDeleteRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "sed";
                etag = "iste";
                fields = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            CloudbuildProjectsLocationsWorkerPoolsDeleteResponse res = sdk.projects.cloudbuildProjectsLocationsWorkerPoolsDelete(req, new CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity("in", "corporis") {{
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

## cloudbuildProjectsLocationsWorkerPoolsGet

Returns details of a `WorkerPool`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsGetRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsGetResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsLocationsWorkerPoolsGetRequest req = new CloudbuildProjectsLocationsWorkerPoolsGetRequest("iste") {{
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

            CloudbuildProjectsLocationsWorkerPoolsGetResponse res = sdk.projects.cloudbuildProjectsLocationsWorkerPoolsGet(req, new CloudbuildProjectsLocationsWorkerPoolsGetSecurity("dolorem", "corporis") {{
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

## cloudbuildProjectsLocationsWorkerPoolsList

Lists `WorkerPool`s in the given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsListRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsListResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbuildProjectsLocationsWorkerPoolsListRequest req = new CloudbuildProjectsLocationsWorkerPoolsListRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "minima";
                key = "excepturi";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "culpa";
                uploadProtocol = "doloribus";
            }};            

            CloudbuildProjectsLocationsWorkerPoolsListResponse res = sdk.projects.cloudbuildProjectsLocationsWorkerPoolsList(req, new CloudbuildProjectsLocationsWorkerPoolsListSecurity("sapiente", "architecto") {{
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

## cloudbuildProjectsLocationsWorkerPoolsPatch

Updates a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsPatchRequest;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsPatchResponse;
import org.openapis.openapi.models.operations.CloudbuildProjectsLocationsWorkerPoolsPatchSecurity;
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

            CloudbuildProjectsLocationsWorkerPoolsPatchRequest req = new CloudbuildProjectsLocationsWorkerPoolsPatchRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                workerPoolInput = new WorkerPoolInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("consequuntur", "repellat");
                        put("mollitia", "occaecati");
                        put("numquam", "commodi");
                    }};
                    displayName = "quam";
                    networkConfig = new NetworkConfig() {{
                        peeredNetwork = "molestiae";
                    }};;
                    workerConfig = new WorkerConfig() {{
                        diskSizeGb = "velit";
                        machineType = "error";
                        noExternalIp = false;
                    }};;
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                updateMask = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            CloudbuildProjectsLocationsWorkerPoolsPatchResponse res = sdk.projects.cloudbuildProjectsLocationsWorkerPoolsPatch(req, new CloudbuildProjectsLocationsWorkerPoolsPatchSecurity("ipsam", "id") {{
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
