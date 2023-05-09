# projects

### Available Operations

* [remotebuildexecutionProjectsInstancesCreate](#remotebuildexecutionprojectsinstancescreate) - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* [remotebuildexecutionProjectsInstancesList](#remotebuildexecutionprojectsinstanceslist) - Lists instances in a project.
* [remotebuildexecutionProjectsInstancesTestNotify](#remotebuildexecutionprojectsinstancestestnotify) - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* [remotebuildexecutionProjectsInstancesWorkerpoolsCreate](#remotebuildexecutionprojectsinstancesworkerpoolscreate) - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* [remotebuildexecutionProjectsInstancesWorkerpoolsDelete](#remotebuildexecutionprojectsinstancesworkerpoolsdelete) - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* [remotebuildexecutionProjectsInstancesWorkerpoolsList](#remotebuildexecutionprojectsinstancesworkerpoolslist) - Lists worker pools in an instance.
* [remotebuildexecutionProjectsInstancesWorkerpoolsPatch](#remotebuildexecutionprojectsinstancesworkerpoolspatch) - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* [remotebuildexecutionProjectsOperationsGet](#remotebuildexecutionprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## remotebuildexecutionProjectsInstancesCreate

Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesCreateRequest;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesCreateResponse;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemotebuildexecutionProjectsInstancesCreateRequest req = new RemotebuildexecutionProjectsInstancesCreateRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput() {{
                    instance = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput() {{
                        featurePolicy = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy() {{
                            actionHermeticity = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum.ACTION_HERMETICITY_ENFORCED;
                            actionIsolation = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum.ACTION_ISOLATION_UNSPECIFIED;
                            containerImageSources = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("laboriosam"),
                                    add("hic"),
                                    add("saepe"),
                                }};
                                policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.FORBIDDEN;
                            }};;
                            dockerAddCapabilities = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("corporis"),
                                    add("iste"),
                                }};
                                policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.ALLOWED;
                            }};;
                            dockerChrootPath = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("quidem"),
                                    add("architecto"),
                                    add("ipsa"),
                                    add("reiciendis"),
                                }};
                                policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.FORBIDDEN;
                            }};;
                            dockerNetwork = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("laborum"),
                                    add("dolores"),
                                    add("dolorem"),
                                }};
                                policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.ALLOWED;
                            }};;
                            dockerPrivileged = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("nobis"),
                                }};
                                policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.ALLOWED;
                            }};;
                            dockerRunAsContainerProvidedUser = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("nemo"),
                                    add("minima"),
                                    add("excepturi"),
                                }};
                                policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.POLICY_UNSPECIFIED;
                            }};;
                            dockerRunAsRoot = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("culpa"),
                                    add("doloribus"),
                                }};
                                policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.RESTRICTED;
                            }};;
                            dockerRuntime = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("mollitia"),
                                }};
                                policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.POLICY_UNSPECIFIED;
                            }};;
                            dockerSiblingContainers = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("consequuntur"),
                                    add("repellat"),
                                    add("mollitia"),
                                }};
                                policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.FORBIDDEN;
                            }};;
                            linuxExecution = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum.LINUX_EXECUTION_FORBIDDEN;
                            linuxIsolation = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum.GVISOR;
                            macExecution = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum.MAC_EXECUTION_UNSPECIFIED;
                            vmVerification = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum.VM_VERIFICATION_GCP_TOKEN;
                            windowsExecution = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum.WINDOWS_EXECUTION_UNSPECIFIED;
                        }};;
                        location = "error";
                        schedulerNotificationConfig = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig() {{
                            topic = "quia";
                        }};;
                    }};;
                    instanceId = "quis";
                    parent = "vitae";
                }};;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "odit";
                key = "quo";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "ipsam";
                uploadProtocol = "id";
            }};            

            RemotebuildexecutionProjectsInstancesCreateResponse res = sdk.projects.remotebuildexecutionProjectsInstancesCreate(req, new RemotebuildexecutionProjectsInstancesCreateSecurity("possimus", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## remotebuildexecutionProjectsInstancesList

Lists instances in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesListRequest;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesListResponse;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemotebuildexecutionProjectsInstancesListRequest req = new RemotebuildexecutionProjectsInstancesListRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            RemotebuildexecutionProjectsInstancesListResponse res = sdk.projects.remotebuildexecutionProjectsInstancesList(req, new RemotebuildexecutionProjectsInstancesListSecurity("ipsa", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## remotebuildexecutionProjectsInstancesTestNotify

Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesTestNotifyRequest;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesTestNotifyResponse;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesTestNotifySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemotebuildexecutionProjectsInstancesTestNotifyRequest req = new RemotebuildexecutionProjectsInstancesTestNotifyRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("doloremque", "reprehenderit");
                }};
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "corporis";
                key = "dolore";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
            }};            

            RemotebuildexecutionProjectsInstancesTestNotifyResponse res = sdk.projects.remotebuildexecutionProjectsInstancesTestNotify(req, new RemotebuildexecutionProjectsInstancesTestNotifySecurity("accusamus", "commodi") {{
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

## remotebuildexecutionProjectsInstancesWorkerpoolsCreate

Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest req = new RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest() {{
                    parent = "ipsum";
                    poolId = "quidem";
                    workerPool = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool() {{
                        autoscale = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale() {{
                            maxSize = "molestias";
                            minSize = "excepturi";
                        }};;
                        channel = "pariatur";
                        hostOs = "modi";
                        name = "Dr. Jordan Von";
                        state = GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum.STATE_UNSPECIFIED;
                        workerConfig = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig() {{
                            accelerator = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig() {{
                                acceleratorCount = "itaque";
                                acceleratorType = "incidunt";
                            }};;
                            diskSizeGb = "enim";
                            diskType = "consequatur";
                            labels = new java.util.HashMap<String, String>() {{
                                put("quibusdam", "explicabo");
                                put("deserunt", "distinctio");
                                put("quibusdam", "labore");
                            }};
                            machineType = "modi";
                            maxConcurrentActions = "qui";
                            minCpuPlatform = "aliquid";
                            networkAccess = "cupiditate";
                            reserved = false;
                            soleTenantNodeType = "quos";
                            vmImage = "perferendis";
                        }};;
                        workerCount = "magni";
                    }};;
                }};;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "fugit";
                key = "dolorum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "facilis";
                uploadProtocol = "tempore";
            }};            

            RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse res = sdk.projects.remotebuildexecutionProjectsInstancesWorkerpoolsCreate(req, new RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity("labore", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## remotebuildexecutionProjectsInstancesWorkerpoolsDelete

Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest req = new RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "provident";
                key = "necessitatibus";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "dolor";
                uploadProtocol = "debitis";
            }};            

            RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse res = sdk.projects.remotebuildexecutionProjectsInstancesWorkerpoolsDelete(req, new RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity("a", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## remotebuildexecutionProjectsInstancesWorkerpoolsList

Lists worker pools in an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest req = new RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "dicta";
                filter = "magnam";
                key = "cumque";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "aliquid";
                uploadProtocol = "laborum";
            }};            

            RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse res = sdk.projects.remotebuildexecutionProjectsInstancesWorkerpoolsList(req, new RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity("accusamus", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## remotebuildexecutionProjectsInstancesWorkerpoolsPatch

Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest req = new RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest() {{
                    updateMask = "accusamus";
                    workerPool = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool() {{
                        autoscale = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale() {{
                            maxSize = "delectus";
                            minSize = "quidem";
                        }};;
                        channel = "provident";
                        hostOs = "nam";
                        name = "Nelson Lesch";
                        state = GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum.UPDATING;
                        workerConfig = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig() {{
                            accelerator = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig() {{
                                acceleratorCount = "nisi";
                                acceleratorType = "vel";
                            }};;
                            diskSizeGb = "natus";
                            diskType = "omnis";
                            labels = new java.util.HashMap<String, String>() {{
                                put("perferendis", "nihil");
                                put("magnam", "distinctio");
                            }};
                            machineType = "id";
                            maxConcurrentActions = "labore";
                            minCpuPlatform = "labore";
                            networkAccess = "suscipit";
                            reserved = false;
                            soleTenantNodeType = "natus";
                            vmImage = "nobis";
                        }};;
                        workerCount = "eum";
                    }};;
                }};;
                accessToken = "vero";
                alt = AltEnum.JSON;
                callback = "architecto";
                fields = "magnam";
                key = "et";
                loggingEnabled = false;
                name1 = "excepturi";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "provident";
                updateMask = "quos";
                uploadType = "sint";
                uploadProtocol = "accusantium";
            }};            

            RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse res = sdk.projects.remotebuildexecutionProjectsInstancesWorkerpoolsPatch(req, new RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity("mollitia", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## remotebuildexecutionProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemotebuildexecutionProjectsOperationsGetRequest req = new RemotebuildexecutionProjectsOperationsGetRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "odit";
                key = "nemo";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "doloribus";
                uploadProtocol = "debitis";
            }};            

            RemotebuildexecutionProjectsOperationsGetResponse res = sdk.projects.remotebuildexecutionProjectsOperationsGet(req, new RemotebuildexecutionProjectsOperationsGetSecurity("eius", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
