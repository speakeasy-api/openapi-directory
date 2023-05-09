# projects

### Available Operations

* [workstationsProjectsLocationsOperationsCancel](#workstationsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [workstationsProjectsLocationsOperationsList](#workstationsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workstationsProjectsLocationsWorkstationClustersCreate](#workstationsprojectslocationsworkstationclusterscreate) - Creates a new workstation cluster.
* [workstationsProjectsLocationsWorkstationClustersList](#workstationsprojectslocationsworkstationclusterslist) - Returns all workstation clusters in the specified location.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate](#workstationsprojectslocationsworkstationclustersworkstationconfigscreate) - Creates a new workstation configuration.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsList](#workstationsprojectslocationsworkstationclustersworkstationconfigslist) - Returns all workstation configurations in the specified cluster.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable](#workstationsprojectslocationsworkstationclustersworkstationconfigslistusable) - Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationscreate) - Creates a new workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsdelete) - Deletes the specified workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgenerateaccesstoken) - Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsget) - Returns the requested workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslist) - Returns all Workstations using the specified workstation configuration.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslistusable) - Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationspatch) - Updates an existing workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstart) - Starts running a workstation so that users can connect to it.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstop) - Stops running a workstation, reducing costs.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## workstationsProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsOperationsCancelRequest req = new WorkstationsProjectsLocationsOperationsCancelRequest("minus") {{
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

            WorkstationsProjectsLocationsOperationsCancelResponse res = sdk.projects.workstationsProjectsLocationsOperationsCancel(req, new WorkstationsProjectsLocationsOperationsCancelSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workstationsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsOperationsListRequest req = new WorkstationsProjectsLocationsOperationsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                filter = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                pageSize = 720633L;
                pageToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            WorkstationsProjectsLocationsOperationsListResponse res = sdk.projects.workstationsProjectsLocationsOperationsList(req, new WorkstationsProjectsLocationsOperationsListSecurity("hic", "optio") {{
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

## workstationsProjectsLocationsWorkstationClustersCreate

Creates a new workstation cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersCreateRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersCreateResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PrivateClusterConfigInput;
import org.openapis.openapi.models.shared.WorkstationClusterInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersCreateRequest req = new WorkstationsProjectsLocationsWorkstationClustersCreateRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                workstationClusterInput = new WorkstationClusterInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("molestiae", "modi");
                        put("qui", "impedit");
                    }};
                    displayName = "cum";
                    etag = "esse";
                    labels = new java.util.HashMap<String, String>() {{
                        put("excepturi", "aspernatur");
                    }};
                    name = "Cathy Mosciski";
                    network = "dolor";
                    privateClusterConfig = new PrivateClusterConfigInput() {{
                        allowedProjects = new String[]{{
                            add("laboriosam"),
                            add("hic"),
                            add("saepe"),
                        }};
                        enablePrivateEndpoint = false;
                    }};;
                    subnetwork = "fuga";
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
                validateOnly = false;
                workstationClusterId = "est";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersCreateResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersCreate(req, new WorkstationsProjectsLocationsWorkstationClustersCreateSecurity("mollitia", "laborum") {{
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

## workstationsProjectsLocationsWorkstationClustersList

Returns all workstation clusters in the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersListRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersListResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersListRequest req = new WorkstationsProjectsLocationsWorkstationClustersListRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                pageSize = 325047L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "iure";
                uploadProtocol = "culpa";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersListResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersList(req, new WorkstationsProjectsLocationsWorkstationClustersListSecurity("doloribus", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWorkstationClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate

Creates a new workstation configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateSecurity;
import org.openapis.openapi.models.shared.Accelerator;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.GceConfidentialInstanceConfig;
import org.openapis.openapi.models.shared.GceInstanceInput;
import org.openapis.openapi.models.shared.GceRegionalPersistentDisk;
import org.openapis.openapi.models.shared.GceRegionalPersistentDiskReclaimPolicyEnum;
import org.openapis.openapi.models.shared.GceShieldedInstanceConfig;
import org.openapis.openapi.models.shared.HostInput;
import org.openapis.openapi.models.shared.PersistentDirectory;
import org.openapis.openapi.models.shared.ReadinessCheck;
import org.openapis.openapi.models.shared.WorkstationConfigInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                workstationConfigInput = new WorkstationConfigInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("culpa", "consequuntur");
                    }};
                    container = new Container() {{
                        args = new String[]{{
                            add("mollitia"),
                            add("occaecati"),
                            add("numquam"),
                            add("commodi"),
                        }};
                        command = new String[]{{
                            add("molestiae"),
                            add("velit"),
                        }};
                        env = new java.util.HashMap<String, String>() {{
                            put("quia", "quis");
                            put("vitae", "laborum");
                            put("animi", "enim");
                        }};
                        image = "odit";
                        runAsUser = 778346;
                        workingDir = "sequi";
                    }};;
                    displayName = "tenetur";
                    enableAuditAgent = false;
                    encryptionKey = new CustomerEncryptionKey() {{
                        kmsKey = "ipsam";
                        kmsKeyServiceAccount = "id";
                    }};;
                    etag = "possimus";
                    host = new HostInput() {{
                        gceInstance = new GceInstanceInput() {{
                            accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                add(new Accelerator() {{
                                    count = 97101;
                                    type = "error";
                                }}),
                            }};
                            bootDiskSizeGb = 837945;
                            confidentialInstanceConfig = new GceConfidentialInstanceConfig() {{
                                enableConfidentialCompute = false;
                            }};;
                            disablePublicIpAddresses = false;
                            machineType = "laborum";
                            poolSize = 96098;
                            serviceAccount = "reiciendis";
                            shieldedInstanceConfig = new GceShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                                enableVtpm = false;
                            }};;
                            tags = new String[]{{
                                add("vero"),
                                add("nihil"),
                                add("praesentium"),
                                add("voluptatibus"),
                            }};
                        }};;
                    }};;
                    idleTimeout = "ipsa";
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptate", "cum");
                        put("perferendis", "doloremque");
                        put("reprehenderit", "ut");
                    }};
                    name = "Willie Hessel";
                    persistentDirectories = new org.openapis.openapi.models.shared.PersistentDirectory[]{{
                        add(new PersistentDirectory() {{
                            gcePd = new GceRegionalPersistentDisk() {{
                                diskType = "harum";
                                fsType = "enim";
                                reclaimPolicy = GceRegionalPersistentDiskReclaimPolicyEnum.RETAIN;
                                sizeGb = 414263;
                                sourceSnapshot = "repudiandae";
                            }};
                            mountPath = "quae";
                        }}),
                    }};
                    readinessChecks = new org.openapis.openapi.models.shared.ReadinessCheck[]{{
                        add(new ReadinessCheck() {{
                            path = "quidem";
                            port = 565189;
                        }}),
                    }};
                    runningTimeout = "excepturi";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "rem";
                key = "voluptates";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "sint";
                uploadProtocol = "veritatis";
                validateOnly = false;
                workstationConfigId = "itaque";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateSecurity("incidunt", "enim") {{
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

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsList

Returns all workstation configurations in the specified cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                pageSize = 264730L;
                pageToken = "qui";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "cupiditate";
                uploadProtocol = "quos";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsList(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListSecurity("perferendis", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWorkstationConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "excepturi";
                key = "tempora";
                oauthToken = "facilis";
                pageSize = 735194L;
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "eum";
                uploadProtocol = "non";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableSecurity("eligendi", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUsableWorkstationConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate

Creates a new workstation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WorkstationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                workstationInput = new WorkstationInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("sint", "officia");
                        put("dolor", "debitis");
                        put("a", "dolorum");
                        put("in", "in");
                    }};
                    displayName = "illum";
                    env = new java.util.HashMap<String, String>() {{
                        put("rerum", "dicta");
                        put("magnam", "cumque");
                        put("facere", "ea");
                        put("aliquid", "laborum");
                    }};
                    etag = "accusamus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("occaecati", "enim");
                    }};
                    name = "Toby Pouros";
                }};;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "sapiente";
                key = "amet";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "vel";
                uploadProtocol = "natus";
                validateOnly = false;
                workstationId = "omnis";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateSecurity("molestiae", "perferendis") {{
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

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete

Deletes the specified workstation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "distinctio";
                alt = AltEnum.MEDIA;
                callback = "labore";
                etag = "labore";
                fields = "suscipit";
                key = "natus";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "vero";
                uploadProtocol = "aspernatur";
                validateOnly = false;
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteSecurity("architecto", "magnam") {{
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

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateAccessTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                generateAccessTokenRequest = new GenerateAccessTokenRequest() {{
                    expireTime = "ullam";
                    ttl = "provident";
                }};;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                key = "reiciendis";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "eum";
                uploadProtocol = "dolor";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenSecurity("necessitatibus", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet

Returns the requested workstation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "eius";
                key = "maxime";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "in";
                uploadProtocol = "architecto";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetSecurity("architecto", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workstation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicyRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicyRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sed";
                key = "saepe";
                oauthToken = "pariatur";
                optionsRequestedPolicyVersion = 37559L;
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "praesentium";
                uploadProtocol = "natus";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicyResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicySecurity("magni", "sunt") {{
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

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList

Returns all Workstations using the specified workstation configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListRequest("quo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "excepturi";
                key = "odit";
                oauthToken = "ea";
                pageSize = 33222L;
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "quidem";
                uploadProtocol = "ipsam";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListSecurity("voluptate", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWorkstationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable

Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "perferendis";
                key = "fugiat";
                oauthToken = "amet";
                pageSize = 11714L;
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "hic";
                uploadProtocol = "libero";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableSecurity("nobis", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUsableWorkstationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch

Updates an existing workstation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WorkstationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchRequest("quis") {{
                dollarXgafv = XgafvEnum.TWO;
                workstationInput = new WorkstationInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("eaque", "quis");
                        put("nesciunt", "eos");
                    }};
                    displayName = "perferendis";
                    env = new java.util.HashMap<String, String>() {{
                        put("minus", "quam");
                    }};
                    etag = "dolor";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nostrum", "hic");
                        put("recusandae", "omnis");
                        put("facilis", "perspiciatis");
                        put("voluptatem", "porro");
                    }};
                    name = "Ms. Vickie Mraz";
                }};;
                accessToken = "adipisci";
                allowMissing = false;
                alt = AltEnum.PROTO;
                callback = "earum";
                fields = "modi";
                key = "iste";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "deleniti";
                updateMask = "pariatur";
                uploadType = "provident";
                uploadProtocol = "nobis";
                validateOnly = false;
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchSecurity("libero", "delectus") {{
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

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
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

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicyRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicyRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolor"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "ipsum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("cum"),
                                            add("voluptate"),
                                            add("dignissimos"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolorum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsa"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("quaerat"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "quidem";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "voluptas";
                                    expression = "natus";
                                    location = "eos";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("fugiat"),
                                }};
                                role = "ab";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "soluta";
                                    expression = "dolorum";
                                    location = "iusto";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("deleniti"),
                                    add("omnis"),
                                    add("necessitatibus"),
                                }};
                                role = "distinctio";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "asperiores";
                                    expression = "nihil";
                                    location = "ipsum";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("saepe"),
                                    add("eius"),
                                    add("aspernatur"),
                                }};
                                role = "perferendis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "amet";
                                    expression = "optio";
                                    location = "accusamus";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("suscipit"),
                                    add("deserunt"),
                                    add("provident"),
                                    add("minima"),
                                }};
                                role = "repellendus";
                            }}),
                        }};
                        etag = "totam";
                        version = 628982;
                    }};;
                    updateMask = "alias";
                }};;
                accessToken = "at";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "vel";
                key = "quod";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "dolorum";
                uploadProtocol = "a";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicyResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicySecurity("esse", "harum") {{
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

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart

Starts running a workstation so that users can connect to it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StartWorkstationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                startWorkstationRequest = new StartWorkstationRequest() {{
                    etag = "quisquam";
                    validateOnly = false;
                }};;
                accessToken = "tenetur";
                alt = AltEnum.JSON;
                callback = "tempore";
                fields = "accusamus";
                key = "numquam";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "sapiente";
                uploadProtocol = "totam";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartSecurity("nihil", "sit") {{
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

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop

Stops running a workstation, reducing costs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StopWorkstationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                stopWorkstationRequest = new StopWorkstationRequest() {{
                    etag = "sed";
                    validateOnly = false;
                }};;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "deserunt";
                key = "quam";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "qui";
                uploadProtocol = "cupiditate";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopSecurity("maxime", "pariatur") {{
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

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsRequest req = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsRequest("soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("totam"),
                        add("incidunt"),
                        add("aspernatur"),
                    }};
                }};;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "aliquid";
                key = "quam";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "qui";
                uploadProtocol = "neque";
            }};            

            WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsResponse res = sdk.projects.workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions(req, new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsSecurity("fugit", "magni") {{
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
