# projects

### Available Operations

* [notebooksProjectsLocationsEnvironmentsCreate](#notebooksprojectslocationsenvironmentscreate) - Creates a new Environment.
* [notebooksProjectsLocationsEnvironmentsList](#notebooksprojectslocationsenvironmentslist) - Lists environments in a project.
* [notebooksProjectsLocationsExecutionsCreate](#notebooksprojectslocationsexecutionscreate) - Creates a new Execution in a given project and location.
* [notebooksProjectsLocationsExecutionsList](#notebooksprojectslocationsexecutionslist) - Lists executions in a given project and location
* [notebooksProjectsLocationsInstancesCreate](#notebooksprojectslocationsinstancescreate) - Creates a new Instance in a given project and location.
* [notebooksProjectsLocationsInstancesGetInstanceHealth](#notebooksprojectslocationsinstancesgetinstancehealth) - Check if a notebook instance is healthy.
* [notebooksProjectsLocationsInstancesIsUpgradeable](#notebooksprojectslocationsinstancesisupgradeable) - Check if a notebook instance is upgradable.
* [notebooksProjectsLocationsInstancesList](#notebooksprojectslocationsinstanceslist) - Lists instances in a given project and location.
* [notebooksProjectsLocationsInstancesRegister](#notebooksprojectslocationsinstancesregister) - Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
* [notebooksProjectsLocationsInstancesReport](#notebooksprojectslocationsinstancesreport) - Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
* [notebooksProjectsLocationsInstancesRollback](#notebooksprojectslocationsinstancesrollback) - Rollbacks a notebook instance to the previous version.
* [notebooksProjectsLocationsInstancesSetAccelerator](#notebooksprojectslocationsinstancessetaccelerator) - Updates the guest accelerators of a single Instance.
* [notebooksProjectsLocationsInstancesSetLabels](#notebooksprojectslocationsinstancessetlabels) - Replaces all the labels of an Instance.
* [notebooksProjectsLocationsInstancesSetMachineType](#notebooksprojectslocationsinstancessetmachinetype) - Updates the machine type of a single Instance.
* [notebooksProjectsLocationsInstancesUpdateConfig](#notebooksprojectslocationsinstancesupdateconfig) - Update Notebook Instance configurations.
* [notebooksProjectsLocationsInstancesUpdateMetadataItems](#notebooksprojectslocationsinstancesupdatemetadataitems) - Add/update metadata items for an instance.
* [notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig](#notebooksprojectslocationsinstancesupdateshieldedinstanceconfig) - Updates the Shielded instance configuration of a single Instance.
* [notebooksProjectsLocationsInstancesUpgradeInternal](#notebooksprojectslocationsinstancesupgradeinternal) - Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
* [notebooksProjectsLocationsList](#notebooksprojectslocationslist) - Lists information about the supported locations for this service.
* [notebooksProjectsLocationsOperationsCancel](#notebooksprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [notebooksProjectsLocationsOperationsList](#notebooksprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [notebooksProjectsLocationsRuntimesCreate](#notebooksprojectslocationsruntimescreate) - Creates a new Runtime in a given project and location.
* [notebooksProjectsLocationsRuntimesDiagnose](#notebooksprojectslocationsruntimesdiagnose) - Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
* [notebooksProjectsLocationsRuntimesGetIamPolicy](#notebooksprojectslocationsruntimesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [notebooksProjectsLocationsRuntimesList](#notebooksprojectslocationsruntimeslist) - Lists Runtimes in a given project and location.
* [notebooksProjectsLocationsRuntimesPatch](#notebooksprojectslocationsruntimespatch) - Update Notebook Runtime configuration.
* [notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal](#notebooksprojectslocationsruntimesrefreshruntimetokeninternal) - Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
* [notebooksProjectsLocationsRuntimesReportEvent](#notebooksprojectslocationsruntimesreportevent) - Report and process a runtime event.
* [notebooksProjectsLocationsRuntimesReset](#notebooksprojectslocationsruntimesreset) - Resets a Managed Notebook Runtime.
* [notebooksProjectsLocationsRuntimesSetIamPolicy](#notebooksprojectslocationsruntimessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [notebooksProjectsLocationsRuntimesStart](#notebooksprojectslocationsruntimesstart) - Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* [notebooksProjectsLocationsRuntimesStop](#notebooksprojectslocationsruntimesstop) - Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* [notebooksProjectsLocationsRuntimesSwitch](#notebooksprojectslocationsruntimesswitch) - Switch a Managed Notebook Runtime.
* [notebooksProjectsLocationsRuntimesTestIamPermissions](#notebooksprojectslocationsruntimestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [notebooksProjectsLocationsRuntimesUpgrade](#notebooksprojectslocationsruntimesupgrade) - Upgrades a Managed Notebook Runtime to the latest version.
* [notebooksProjectsLocationsSchedulesCreate](#notebooksprojectslocationsschedulescreate) - Creates a new Scheduled Notebook in a given project and location.
* [notebooksProjectsLocationsSchedulesDelete](#notebooksprojectslocationsschedulesdelete) - Deletes schedule and all underlying jobs
* [notebooksProjectsLocationsSchedulesGet](#notebooksprojectslocationsschedulesget) - Gets details of schedule
* [notebooksProjectsLocationsSchedulesList](#notebooksprojectslocationsscheduleslist) - Lists schedules in a given project and location.
* [notebooksProjectsLocationsSchedulesTrigger](#notebooksprojectslocationsschedulestrigger) - Triggers execution of an existing schedule.

## notebooksProjectsLocationsEnvironmentsCreate

Creates a new Environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerImage;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.VmImage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsEnvironmentsCreateRequest req = new NotebooksProjectsLocationsEnvironmentsCreateRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                environmentInput = new EnvironmentInput() {{
                    containerImage = new ContainerImage() {{
                        repository = "excepturi";
                        tag = "nisi";
                    }};;
                    description = "recusandae";
                    displayName = "temporibus";
                    postStartupScript = "ab";
                    vmImage = new VmImage() {{
                        imageFamily = "quis";
                        imageName = "veritatis";
                        project = "deserunt";
                    }};;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                environmentId = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            NotebooksProjectsLocationsEnvironmentsCreateResponse res = sdk.projects.notebooksProjectsLocationsEnvironmentsCreate(req, new NotebooksProjectsLocationsEnvironmentsCreateSecurity("quod", "quod") {{
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

## notebooksProjectsLocationsEnvironmentsList

Lists environments in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsListRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsListResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsEnvironmentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsEnvironmentsListRequest req = new NotebooksProjectsLocationsEnvironmentsListRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                pageSize = 143353L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "optio";
                uploadProtocol = "totam";
            }};            

            NotebooksProjectsLocationsEnvironmentsListResponse res = sdk.projects.notebooksProjectsLocationsEnvironmentsList(req, new NotebooksProjectsLocationsEnvironmentsListSecurity("beatae", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEnvironmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsExecutionsCreate

Creates a new Execution in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsExecutionsCreateRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsExecutionsCreateResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsExecutionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DataprocParameters;
import org.openapis.openapi.models.shared.ExecutionInput;
import org.openapis.openapi.models.shared.ExecutionTemplate;
import org.openapis.openapi.models.shared.ExecutionTemplateJobTypeEnum;
import org.openapis.openapi.models.shared.ExecutionTemplateScaleTierEnum;
import org.openapis.openapi.models.shared.SchedulerAcceleratorConfig;
import org.openapis.openapi.models.shared.SchedulerAcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.VertexAIParameters;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsExecutionsCreateRequest req = new NotebooksProjectsLocationsExecutionsCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                executionInput = new ExecutionInput() {{
                    description = "qui";
                    executionTemplate = new ExecutionTemplate() {{
                        acceleratorConfig = new SchedulerAcceleratorConfig() {{
                            coreCount = "impedit";
                            type = SchedulerAcceleratorConfigTypeEnum.NVIDIA_TESLA_A100;
                        }};;
                        containerImageUri = "esse";
                        dataprocParameters = new DataprocParameters() {{
                            cluster = "ipsum";
                        }};;
                        inputNotebookFile = "excepturi";
                        jobType = ExecutionTemplateJobTypeEnum.JOB_TYPE_UNSPECIFIED;
                        kernelSpec = "perferendis";
                        labels = new java.util.HashMap<String, String>() {{
                            put("natus", "sed");
                            put("iste", "dolor");
                        }};
                        masterType = "natus";
                        outputNotebookFolder = "laboriosam";
                        parameters = "hic";
                        paramsYamlFile = "saepe";
                        scaleTier = ExecutionTemplateScaleTierEnum.BASIC_GPU;
                        serviceAccount = "in";
                        tensorboard = "corporis";
                        vertexAiParameters = new VertexAIParameters() {{
                            env = new java.util.HashMap<String, String>() {{
                                put("iure", "saepe");
                                put("quidem", "architecto");
                                put("ipsa", "reiciendis");
                            }};
                            network = "est";
                        }};;
                    }};;
                    outputNotebookFile = "mollitia";
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "dolorem";
                executionId = "corporis";
                fields = "explicabo";
                key = "nobis";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "nemo";
                uploadProtocol = "minima";
            }};            

            NotebooksProjectsLocationsExecutionsCreateResponse res = sdk.projects.notebooksProjectsLocationsExecutionsCreate(req, new NotebooksProjectsLocationsExecutionsCreateSecurity("excepturi", "accusantium") {{
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

## notebooksProjectsLocationsExecutionsList

Lists executions in a given project and location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsExecutionsListRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsExecutionsListResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsExecutionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsExecutionsListRequest req = new NotebooksProjectsLocationsExecutionsListRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                filter = "dolorem";
                key = "culpa";
                oauthToken = "consequuntur";
                orderBy = "repellat";
                pageSize = 653108L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            NotebooksProjectsLocationsExecutionsListResponse res = sdk.projects.notebooksProjectsLocationsExecutionsList(req, new NotebooksProjectsLocationsExecutionsListSecurity("molestiae", "velit") {{
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

## notebooksProjectsLocationsInstancesCreate

Creates a new Instance in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerImage;
import org.openapis.openapi.models.shared.InstanceBootDiskTypeEnum;
import org.openapis.openapi.models.shared.InstanceDataDiskTypeEnum;
import org.openapis.openapi.models.shared.InstanceDiskEncryptionEnum;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceNicTypeEnum;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.UpgradeHistoryEntry;
import org.openapis.openapi.models.shared.UpgradeHistoryEntryActionEnum;
import org.openapis.openapi.models.shared.UpgradeHistoryEntryStateEnum;
import org.openapis.openapi.models.shared.VmImage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesCreateRequest req = new NotebooksProjectsLocationsInstancesCreateRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceInput = new InstanceInput() {{
                    acceleratorConfig = new AcceleratorConfig() {{
                        coreCount = "quis";
                        type = AcceleratorConfigTypeEnum.NVIDIA_TESLA_K80;
                    }};;
                    bootDiskSizeGb = "laborum";
                    bootDiskType = InstanceBootDiskTypeEnum.PD_BALANCED;
                    canIpForward = false;
                    containerImage = new ContainerImage() {{
                        repository = "enim";
                        tag = "odit";
                    }};;
                    customGpuDriverPath = "quo";
                    dataDiskSizeGb = "sequi";
                    dataDiskType = InstanceDataDiskTypeEnum.PD_EXTREME;
                    diskEncryption = InstanceDiskEncryptionEnum.GMEK;
                    installGpuDriver = false;
                    instanceOwners = new String[]{{
                        add("possimus"),
                        add("aut"),
                        add("quasi"),
                    }};
                    kmsKey = "error";
                    labels = new java.util.HashMap<String, String>() {{
                        put("laborum", "quasi");
                        put("reiciendis", "voluptatibus");
                        put("vero", "nihil");
                        put("praesentium", "voluptatibus");
                    }};
                    machineType = "ipsa";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("voluptate", "cum");
                        put("perferendis", "doloremque");
                        put("reprehenderit", "ut");
                    }};
                    network = "maiores";
                    nicType = InstanceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                    noProxyAccess = false;
                    noPublicIp = false;
                    noRemoveDataDisk = false;
                    postStartupScript = "corporis";
                    reservationAffinity = new ReservationAffinity() {{
                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                        key = "iusto";
                        values = new String[]{{
                            add("harum"),
                        }};
                    }};;
                    serviceAccount = "enim";
                    serviceAccountScopes = new String[]{{
                        add("commodi"),
                        add("repudiandae"),
                        add("quae"),
                        add("ipsum"),
                    }};
                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                        enableIntegrityMonitoring = false;
                        enableSecureBoot = false;
                        enableVtpm = false;
                    }};;
                    subnet = "quidem";
                    tags = new String[]{{
                        add("excepturi"),
                        add("pariatur"),
                        add("modi"),
                    }};
                    upgradeHistory = new org.openapis.openapi.models.shared.UpgradeHistoryEntry[]{{
                        add(new UpgradeHistoryEntry() {{
                            action = UpgradeHistoryEntryActionEnum.UPGRADE;
                            containerImage = "voluptates";
                            createTime = "quasi";
                            framework = "repudiandae";
                            snapshot = "sint";
                            state = UpgradeHistoryEntryStateEnum.STATE_UNSPECIFIED;
                            targetImage = "itaque";
                            targetVersion = "incidunt";
                            version = "enim";
                            vmImage = "consequatur";
                        }}),
                        add(new UpgradeHistoryEntry() {{
                            action = UpgradeHistoryEntryActionEnum.ROLLBACK;
                            containerImage = "quibusdam";
                            createTime = "explicabo";
                            framework = "deserunt";
                            snapshot = "distinctio";
                            state = UpgradeHistoryEntryStateEnum.FAILED;
                            targetImage = "labore";
                            targetVersion = "modi";
                            version = "qui";
                            vmImage = "aliquid";
                        }}),
                        add(new UpgradeHistoryEntry() {{
                            action = UpgradeHistoryEntryActionEnum.UPGRADE;
                            containerImage = "quos";
                            createTime = "perferendis";
                            framework = "magni";
                            snapshot = "assumenda";
                            state = UpgradeHistoryEntryStateEnum.STARTED;
                            targetImage = "alias";
                            targetVersion = "fugit";
                            version = "dolorum";
                            vmImage = "excepturi";
                        }}),
                    }};
                    vmImage = new VmImage() {{
                        imageFamily = "tempora";
                        imageName = "facilis";
                        project = "tempore";
                    }};;
                }};;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "non";
                instanceId = "eligendi";
                key = "sint";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "necessitatibus";
                uploadProtocol = "sint";
            }};            

            NotebooksProjectsLocationsInstancesCreateResponse res = sdk.projects.notebooksProjectsLocationsInstancesCreate(req, new NotebooksProjectsLocationsInstancesCreateSecurity("officia", "dolor") {{
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

## notebooksProjectsLocationsInstancesGetInstanceHealth

Check if a notebook instance is healthy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetInstanceHealthRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetInstanceHealthResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetInstanceHealthSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesGetInstanceHealthRequest req = new NotebooksProjectsLocationsInstancesGetInstanceHealthRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
            }};            

            NotebooksProjectsLocationsInstancesGetInstanceHealthResponse res = sdk.projects.notebooksProjectsLocationsInstancesGetInstanceHealth(req, new NotebooksProjectsLocationsInstancesGetInstanceHealthSecurity("facere", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getInstanceHealthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsInstancesIsUpgradeable

Check if a notebook instance is upgradable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesIsUpgradeableRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesIsUpgradeableResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesIsUpgradeableSecurity;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesIsUpgradeableRequest req = new NotebooksProjectsLocationsInstancesIsUpgradeableRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quidem";
                type = NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum.UPGRADE_OS;
                uploadType = "nam";
                uploadProtocol = "id";
            }};            

            NotebooksProjectsLocationsInstancesIsUpgradeableResponse res = sdk.projects.notebooksProjectsLocationsInstancesIsUpgradeable(req, new NotebooksProjectsLocationsInstancesIsUpgradeableSecurity("blanditiis", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.isInstanceUpgradeableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsInstancesList

Lists instances in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesListRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesListResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesListRequest req = new NotebooksProjectsLocationsInstancesListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                pageSize = 19193L;
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "distinctio";
                uploadProtocol = "id";
            }};            

            NotebooksProjectsLocationsInstancesListResponse res = sdk.projects.notebooksProjectsLocationsInstancesList(req, new NotebooksProjectsLocationsInstancesListSecurity("labore", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsInstancesRegister

Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesRegisterRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesRegisterResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesRegisterSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegisterInstanceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesRegisterRequest req = new NotebooksProjectsLocationsInstancesRegisterRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                registerInstanceRequest = new RegisterInstanceRequest() {{
                    instanceId = "nobis";
                }};;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "architecto";
                key = "magnam";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "ullam";
                uploadProtocol = "provident";
            }};            

            NotebooksProjectsLocationsInstancesRegisterResponse res = sdk.projects.notebooksProjectsLocationsInstancesRegister(req, new NotebooksProjectsLocationsInstancesRegisterSecurity("quos", "sint") {{
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

## notebooksProjectsLocationsInstancesReport

Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesReportRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesReportResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesReportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReportInstanceInfoRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesReportRequest req = new NotebooksProjectsLocationsInstancesReportRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                reportInstanceInfoRequest = new ReportInstanceInfoRequest() {{
                    metadata = new java.util.HashMap<String, String>() {{
                        put("mollitia", "ad");
                        put("eum", "dolor");
                        put("necessitatibus", "odit");
                        put("nemo", "quasi");
                    }};
                    vmId = "iure";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            NotebooksProjectsLocationsInstancesReportResponse res = sdk.projects.notebooksProjectsLocationsInstancesReport(req, new NotebooksProjectsLocationsInstancesReportSecurity("repudiandae", "ullam") {{
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

## notebooksProjectsLocationsInstancesRollback

Rollbacks a notebook instance to the previous version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesRollbackRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesRollbackResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesRollbackSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RollbackInstanceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesRollbackRequest req = new NotebooksProjectsLocationsInstancesRollbackRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                rollbackInstanceRequest = new RollbackInstanceRequest() {{
                    targetSnapshot = "repellat";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "pariatur";
                key = "accusantium";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "natus";
                uploadProtocol = "magni";
            }};            

            NotebooksProjectsLocationsInstancesRollbackResponse res = sdk.projects.notebooksProjectsLocationsInstancesRollback(req, new NotebooksProjectsLocationsInstancesRollbackSecurity("sunt", "quo") {{
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

## notebooksProjectsLocationsInstancesSetAccelerator

Updates the guest accelerators of a single Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetAcceleratorRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetAcceleratorResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetAcceleratorSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetInstanceAcceleratorRequest;
import org.openapis.openapi.models.shared.SetInstanceAcceleratorRequestTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesSetAcceleratorRequest req = new NotebooksProjectsLocationsInstancesSetAcceleratorRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                setInstanceAcceleratorRequest = new SetInstanceAcceleratorRequest() {{
                    coreCount = "maxime";
                    type = SetInstanceAcceleratorRequestTypeEnum.NVIDIA_TESLA_P4;
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "accusantium";
                key = "ab";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "ipsam";
                uploadProtocol = "voluptate";
            }};            

            NotebooksProjectsLocationsInstancesSetAcceleratorResponse res = sdk.projects.notebooksProjectsLocationsInstancesSetAccelerator(req, new NotebooksProjectsLocationsInstancesSetAcceleratorSecurity("autem", "nam") {{
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

## notebooksProjectsLocationsInstancesSetLabels

Replaces all the labels of an Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetLabelsRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetLabelsResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetLabelsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetInstanceLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesSetLabelsRequest req = new NotebooksProjectsLocationsInstancesSetLabelsRequest("eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                setInstanceLabelsRequest = new SetInstanceLabelsRequest() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptatibus", "perferendis");
                        put("fugiat", "amet");
                    }};
                }};;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "hic";
                key = "libero";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "quis";
                uploadProtocol = "totam";
            }};            

            NotebooksProjectsLocationsInstancesSetLabelsResponse res = sdk.projects.notebooksProjectsLocationsInstancesSetLabels(req, new NotebooksProjectsLocationsInstancesSetLabelsSecurity("dignissimos", "eaque") {{
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

## notebooksProjectsLocationsInstancesSetMachineType

Updates the machine type of a single Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetMachineTypeRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetMachineTypeResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetMachineTypeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetInstanceMachineTypeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesSetMachineTypeRequest req = new NotebooksProjectsLocationsInstancesSetMachineTypeRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                setInstanceMachineTypeRequest = new SetInstanceMachineTypeRequest() {{
                    machineType = "eos";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "quam";
                key = "dolor";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "hic";
                uploadProtocol = "recusandae";
            }};            

            NotebooksProjectsLocationsInstancesSetMachineTypeResponse res = sdk.projects.notebooksProjectsLocationsInstancesSetMachineType(req, new NotebooksProjectsLocationsInstancesSetMachineTypeSecurity("omnis", "facilis") {{
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

## notebooksProjectsLocationsInstancesUpdateConfig

Update Notebook Instance configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpdateConfigRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpdateConfigResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpdateConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.UpdateInstanceConfigRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesUpdateConfigRequest req = new NotebooksProjectsLocationsInstancesUpdateConfigRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                updateInstanceConfigRequest = new UpdateInstanceConfigRequest() {{
                    config = new InstanceConfig() {{
                        enableHealthMonitoring = false;
                        notebookUpgradeSchedule = "porro";
                    }};;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "eaque";
                key = "occaecati";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "asperiores";
                uploadProtocol = "earum";
            }};            

            NotebooksProjectsLocationsInstancesUpdateConfigResponse res = sdk.projects.notebooksProjectsLocationsInstancesUpdateConfig(req, new NotebooksProjectsLocationsInstancesUpdateConfigSecurity("modi", "iste") {{
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

## notebooksProjectsLocationsInstancesUpdateMetadataItems

Add/update metadata items for an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UpdateInstanceMetadataItemsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest req = new NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                updateInstanceMetadataItemsRequest = new UpdateInstanceMetadataItemsRequest() {{
                    items = new java.util.HashMap<String, String>() {{
                        put("provident", "nobis");
                        put("libero", "delectus");
                        put("quaerat", "quos");
                        put("aliquid", "dolorem");
                    }};
                }};;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "ipsum";
                key = "hic";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "voluptate";
                uploadProtocol = "dignissimos";
            }};            

            NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse res = sdk.projects.notebooksProjectsLocationsInstancesUpdateMetadataItems(req, new NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity("reiciendis", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateInstanceMetadataItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig

Updates the Shielded instance configuration of a single Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.UpdateShieldedInstanceConfigRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest req = new NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                updateShieldedInstanceConfigRequest = new UpdateShieldedInstanceConfigRequest() {{
                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                        enableIntegrityMonitoring = false;
                        enableSecureBoot = false;
                        enableVtpm = false;
                    }};;
                }};;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "iure";
                key = "odio";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "quidem";
                uploadProtocol = "voluptatibus";
            }};            

            NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigResponse res = sdk.projects.notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig(req, new NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigSecurity("voluptas", "natus") {{
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

## notebooksProjectsLocationsInstancesUpgradeInternal

Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpgradeInternalRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpgradeInternalResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesUpgradeInternalSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UpgradeInstanceInternalRequest;
import org.openapis.openapi.models.shared.UpgradeInstanceInternalRequestTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesUpgradeInternalRequest req = new NotebooksProjectsLocationsInstancesUpgradeInternalRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                upgradeInstanceInternalRequest = new UpgradeInstanceInternalRequest() {{
                    type = UpgradeInstanceInternalRequestTypeEnum.UPGRADE_TYPE_UNSPECIFIED;
                    vmId = "fugiat";
                }};;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "iusto";
                key = "voluptate";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "omnis";
                uploadProtocol = "necessitatibus";
            }};            

            NotebooksProjectsLocationsInstancesUpgradeInternalResponse res = sdk.projects.notebooksProjectsLocationsInstancesUpgradeInternal(req, new NotebooksProjectsLocationsInstancesUpgradeInternalSecurity("distinctio", "asperiores") {{
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

## notebooksProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsListRequest req = new NotebooksProjectsLocationsListRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "eius";
                filter = "aspernatur";
                key = "perferendis";
                oauthToken = "amet";
                pageSize = 758379L;
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "saepe";
                uploadProtocol = "suscipit";
            }};            

            NotebooksProjectsLocationsListResponse res = sdk.projects.notebooksProjectsLocationsList(req, new NotebooksProjectsLocationsListSecurity("deserunt", "provident") {{
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

## notebooksProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsOperationsCancelRequest req = new NotebooksProjectsLocationsOperationsCancelRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("similique", "alias");
                    put("at", "quaerat");
                    put("tempora", "vel");
                }};
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "dolorum";
                key = "a";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "iusto";
                uploadProtocol = "ipsum";
            }};            

            NotebooksProjectsLocationsOperationsCancelResponse res = sdk.projects.notebooksProjectsLocationsOperationsCancel(req, new NotebooksProjectsLocationsOperationsCancelSecurity("quisquam", "tenetur") {{
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

## notebooksProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsOperationsListRequest req = new NotebooksProjectsLocationsOperationsListRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "dolorem";
                filter = "sapiente";
                key = "totam";
                oauthToken = "nihil";
                pageSize = 25662L;
                pageToken = "expedita";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "sed";
                uploadProtocol = "vel";
            }};            

            NotebooksProjectsLocationsOperationsListResponse res = sdk.projects.notebooksProjectsLocationsOperationsList(req, new NotebooksProjectsLocationsOperationsListSecurity("libero", "voluptas") {{
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

## notebooksProjectsLocationsRuntimesCreate

Creates a new Runtime in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesCreateRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesCreateResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerImage;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.LocalDiskInitializeParams;
import org.openapis.openapi.models.shared.LocalDiskInitializeParamsDiskTypeEnum;
import org.openapis.openapi.models.shared.LocalDiskInput;
import org.openapis.openapi.models.shared.RuntimeAcceleratorConfig;
import org.openapis.openapi.models.shared.RuntimeAcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.RuntimeAccessConfigAccessTypeEnum;
import org.openapis.openapi.models.shared.RuntimeAccessConfigInput;
import org.openapis.openapi.models.shared.RuntimeInput;
import org.openapis.openapi.models.shared.RuntimeShieldedInstanceConfig;
import org.openapis.openapi.models.shared.RuntimeSoftwareConfigInput;
import org.openapis.openapi.models.shared.RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;
import org.openapis.openapi.models.shared.VirtualMachineConfigInput;
import org.openapis.openapi.models.shared.VirtualMachineConfigNicTypeEnum;
import org.openapis.openapi.models.shared.VirtualMachineInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesCreateRequest req = new NotebooksProjectsLocationsRuntimesCreateRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                runtimeInput = new RuntimeInput() {{
                    accessConfig = new RuntimeAccessConfigInput() {{
                        accessType = RuntimeAccessConfigAccessTypeEnum.RUNTIME_ACCESS_TYPE_UNSPECIFIED;
                        runtimeOwner = "incidunt";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("cupiditate", "maxime");
                    }};
                    softwareConfig = new RuntimeSoftwareConfigInput() {{
                        customGpuDriverPath = "pariatur";
                        disableTerminal = false;
                        enableHealthMonitoring = false;
                        idleShutdown = false;
                        idleShutdownTimeout = 747080;
                        installGpuDriver = false;
                        kernels = new org.openapis.openapi.models.shared.ContainerImage[]{{
                            add(new ContainerImage() {{
                                repository = "laborum";
                                tag = "totam";
                            }}),
                        }};
                        mixerDisabled = false;
                        notebookUpgradeSchedule = "incidunt";
                        postStartupScript = "aspernatur";
                        postStartupScriptBehavior = RuntimeSoftwareConfigPostStartupScriptBehaviorEnum.POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED;
                    }};;
                    virtualMachine = new VirtualMachineInput() {{
                        virtualMachineConfig = new VirtualMachineConfigInput() {{
                            acceleratorConfig = new RuntimeAcceleratorConfig() {{
                                coreCount = "distinctio";
                                type = RuntimeAcceleratorConfigTypeEnum.TPU_V3;
                            }};;
                            bootImage = new java.util.HashMap<String, Object>() {{
                                put("quam", "molestias");
                                put("temporibus", "qui");
                            }};
                            containerImages = new org.openapis.openapi.models.shared.ContainerImage[]{{
                                add(new ContainerImage() {{
                                    repository = "fugit";
                                    tag = "magni";
                                }}),
                            }};
                            dataDisk = new LocalDiskInput() {{
                                initializeParams = new LocalDiskInitializeParams() {{
                                    description = "odio";
                                    diskName = "sunt";
                                    diskSizeGb = "ullam";
                                    diskType = LocalDiskInitializeParamsDiskTypeEnum.PD_BALANCED;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("voluptatem", "cumque");
                                        put("soluta", "nobis");
                                        put("et", "saepe");
                                        put("ipsum", "veritatis");
                                    }};
                                }};;
                                interface_ = "nobis";
                                mode = "quos";
                                source = "tempore";
                                type = "cupiditate";
                            }};;
                            encryptionConfig = new EncryptionConfig() {{
                                kmsKey = "aperiam";
                            }};;
                            internalIpOnly = false;
                            labels = new java.util.HashMap<String, String>() {{
                                put("dolorem", "dolore");
                                put("labore", "adipisci");
                                put("dolorum", "architecto");
                                put("quae", "aut");
                            }};
                            machineType = "quas";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("consequatur", "est");
                                put("repellendus", "porro");
                                put("doloribus", "ut");
                                put("facilis", "cupiditate");
                            }};
                            network = "qui";
                            nicType = VirtualMachineConfigNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                            reservedIpRange = "laudantium";
                            shieldedInstanceConfig = new RuntimeShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                                enableVtpm = false;
                            }};;
                            subnet = "odio";
                            tags = new String[]{{
                                add("voluptatibus"),
                                add("quisquam"),
                                add("vero"),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "delectus";
                key = "voluptate";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "vero";
                requestId = "tenetur";
                runtimeId = "dignissimos";
                uploadType = "hic";
                uploadProtocol = "distinctio";
            }};            

            NotebooksProjectsLocationsRuntimesCreateResponse res = sdk.projects.notebooksProjectsLocationsRuntimesCreate(req, new NotebooksProjectsLocationsRuntimesCreateSecurity("quod", "odio") {{
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

## notebooksProjectsLocationsRuntimesDiagnose

Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesDiagnoseRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesDiagnoseResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesDiagnoseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DiagnoseRuntimeRequest;
import org.openapis.openapi.models.shared.DiagnosticConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesDiagnoseRequest req = new NotebooksProjectsLocationsRuntimesDiagnoseRequest("similique") {{
                dollarXgafv = XgafvEnum.TWO;
                diagnoseRuntimeRequest = new DiagnoseRuntimeRequest() {{
                    diagnosticConfig = new DiagnosticConfig() {{
                        copyHomeFilesFlagEnabled = false;
                        gcsBucket = "vero";
                        packetCaptureFlagEnabled = false;
                        relativePath = "ducimus";
                        repairFlagEnabled = false;
                    }};;
                }};;
                accessToken = "dolore";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "sequi";
                key = "natus";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "voluptatibus";
                uploadProtocol = "exercitationem";
            }};            

            NotebooksProjectsLocationsRuntimesDiagnoseResponse res = sdk.projects.notebooksProjectsLocationsRuntimesDiagnose(req, new NotebooksProjectsLocationsRuntimesDiagnoseSecurity("nulla", "fugit") {{
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

## notebooksProjectsLocationsRuntimesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesGetIamPolicyRequest req = new NotebooksProjectsLocationsRuntimesGetIamPolicyRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "ducimus";
                key = "alias";
                oauthToken = "officia";
                optionsRequestedPolicyVersion = 269479L;
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "ea";
                uploadProtocol = "aspernatur";
            }};            

            NotebooksProjectsLocationsRuntimesGetIamPolicyResponse res = sdk.projects.notebooksProjectsLocationsRuntimesGetIamPolicy(req, new NotebooksProjectsLocationsRuntimesGetIamPolicySecurity("vel", "possimus") {{
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

## notebooksProjectsLocationsRuntimesList

Lists Runtimes in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesListRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesListResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesListRequest req = new NotebooksProjectsLocationsRuntimesListRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "dolor";
                key = "maiores";
                oauthToken = "quasi";
                pageSize = 406120L;
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "voluptatibus";
                uploadProtocol = "nostrum";
            }};            

            NotebooksProjectsLocationsRuntimesListResponse res = sdk.projects.notebooksProjectsLocationsRuntimesList(req, new NotebooksProjectsLocationsRuntimesListSecurity("sapiente", "quisquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRuntimesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsRuntimesPatch

Update Notebook Runtime configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesPatchRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesPatchResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerImage;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.LocalDiskInitializeParams;
import org.openapis.openapi.models.shared.LocalDiskInitializeParamsDiskTypeEnum;
import org.openapis.openapi.models.shared.LocalDiskInput;
import org.openapis.openapi.models.shared.RuntimeAcceleratorConfig;
import org.openapis.openapi.models.shared.RuntimeAcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.RuntimeAccessConfigAccessTypeEnum;
import org.openapis.openapi.models.shared.RuntimeAccessConfigInput;
import org.openapis.openapi.models.shared.RuntimeInput;
import org.openapis.openapi.models.shared.RuntimeShieldedInstanceConfig;
import org.openapis.openapi.models.shared.RuntimeSoftwareConfigInput;
import org.openapis.openapi.models.shared.RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;
import org.openapis.openapi.models.shared.VirtualMachineConfigInput;
import org.openapis.openapi.models.shared.VirtualMachineConfigNicTypeEnum;
import org.openapis.openapi.models.shared.VirtualMachineInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesPatchRequest req = new NotebooksProjectsLocationsRuntimesPatchRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                runtimeInput = new RuntimeInput() {{
                    accessConfig = new RuntimeAccessConfigInput() {{
                        accessType = RuntimeAccessConfigAccessTypeEnum.SERVICE_ACCOUNT;
                        runtimeOwner = "corporis";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("aliquid", "inventore");
                        put("magnam", "ea");
                    }};
                    softwareConfig = new RuntimeSoftwareConfigInput() {{
                        customGpuDriverPath = "quo";
                        disableTerminal = false;
                        enableHealthMonitoring = false;
                        idleShutdown = false;
                        idleShutdownTimeout = 232234;
                        installGpuDriver = false;
                        kernels = new org.openapis.openapi.models.shared.ContainerImage[]{{
                            add(new ContainerImage() {{
                                repository = "aspernatur";
                                tag = "minima";
                            }}),
                            add(new ContainerImage() {{
                                repository = "eaque";
                                tag = "a";
                            }}),
                            add(new ContainerImage() {{
                                repository = "libero";
                                tag = "aut";
                            }}),
                            add(new ContainerImage() {{
                                repository = "aut";
                                tag = "deleniti";
                            }}),
                        }};
                        mixerDisabled = false;
                        notebookUpgradeSchedule = "impedit";
                        postStartupScript = "aliquam";
                        postStartupScriptBehavior = RuntimeSoftwareConfigPostStartupScriptBehaviorEnum.POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED;
                    }};;
                    virtualMachine = new VirtualMachineInput() {{
                        virtualMachineConfig = new VirtualMachineConfigInput() {{
                            acceleratorConfig = new RuntimeAcceleratorConfig() {{
                                coreCount = "accusamus";
                                type = RuntimeAcceleratorConfigTypeEnum.ACCELERATOR_TYPE_UNSPECIFIED;
                            }};;
                            bootImage = new java.util.HashMap<String, Object>() {{
                                put("et", "dolorum");
                                put("laborum", "placeat");
                            }};
                            containerImages = new org.openapis.openapi.models.shared.ContainerImage[]{{
                                add(new ContainerImage() {{
                                    repository = "eum";
                                    tag = "autem";
                                }}),
                            }};
                            dataDisk = new LocalDiskInput() {{
                                initializeParams = new LocalDiskInitializeParams() {{
                                    description = "nobis";
                                    diskName = "quas";
                                    diskSizeGb = "assumenda";
                                    diskType = LocalDiskInitializeParamsDiskTypeEnum.PD_EXTREME;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("libero", "quasi");
                                        put("tempora", "numquam");
                                    }};
                                }};;
                                interface_ = "explicabo";
                                mode = "provident";
                                source = "ipsa";
                                type = "molestiae";
                            }};;
                            encryptionConfig = new EncryptionConfig() {{
                                kmsKey = "magnam";
                            }};;
                            internalIpOnly = false;
                            labels = new java.util.HashMap<String, String>() {{
                                put("eius", "esse");
                                put("esse", "rem");
                            }};
                            machineType = "fuga";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("quidem", "fugiat");
                                put("ut", "eum");
                            }};
                            network = "suscipit";
                            nicType = VirtualMachineConfigNicTypeEnum.GVNIC;
                            reservedIpRange = "eos";
                            shieldedInstanceConfig = new RuntimeShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                                enableVtpm = false;
                            }};;
                            subnet = "praesentium";
                            tags = new String[]{{
                                add("veritatis"),
                                add("ipsa"),
                                add("id"),
                                add("quidem"),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "quo";
                key = "fuga";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "eos";
                requestId = "voluptas";
                updateMask = "ab";
                uploadType = "cupiditate";
                uploadProtocol = "consequatur";
            }};            

            NotebooksProjectsLocationsRuntimesPatchResponse res = sdk.projects.notebooksProjectsLocationsRuntimesPatch(req, new NotebooksProjectsLocationsRuntimesPatchSecurity("tempora", "debitis") {{
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

## notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal

Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RefreshRuntimeTokenInternalRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest req = new NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                refreshRuntimeTokenInternalRequest = new RefreshRuntimeTokenInternalRequest() {{
                    vmId = "sequi";
                }};;
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "aperiam";
                key = "distinctio";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "inventore";
                uploadProtocol = "nihil";
            }};            

            NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse res = sdk.projects.notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal(req, new NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity("totam", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.refreshRuntimeTokenInternalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsRuntimesReportEvent

Report and process a runtime event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesReportEventRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesReportEventResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesReportEventSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.ReportRuntimeEventRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesReportEventRequest req = new NotebooksProjectsLocationsRuntimesReportEventRequest("aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                reportRuntimeEventRequest = new ReportRuntimeEventRequest() {{
                    event = new Event() {{
                        details = new java.util.HashMap<String, String>() {{
                            put("commodi", "sapiente");
                            put("dolores", "deserunt");
                            put("molestiae", "accusantium");
                        }};
                        reportTime = "porro";
                        type = EventTypeEnum.HEARTBEAT;
                    }};;
                    vmId = "quas";
                }};;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "fugit";
                key = "fuga";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "atque";
                uploadProtocol = "explicabo";
            }};            

            NotebooksProjectsLocationsRuntimesReportEventResponse res = sdk.projects.notebooksProjectsLocationsRuntimesReportEvent(req, new NotebooksProjectsLocationsRuntimesReportEventSecurity("minima", "nisi") {{
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

## notebooksProjectsLocationsRuntimesReset

Resets a Managed Notebook Runtime.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesResetRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesResetResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesResetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResetRuntimeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesResetRequest req = new NotebooksProjectsLocationsRuntimesResetRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                resetRuntimeRequest = new ResetRuntimeRequest() {{
                    requestId = "consequuntur";
                }};;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "occaecati";
                key = "atque";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "eveniet";
                uploadProtocol = "accusamus";
            }};            

            NotebooksProjectsLocationsRuntimesResetResponse res = sdk.projects.notebooksProjectsLocationsRuntimesReset(req, new NotebooksProjectsLocationsRuntimesResetSecurity("veritatis", "esse") {{
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

## notebooksProjectsLocationsRuntimesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesSetIamPolicySecurity;
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

            NotebooksProjectsLocationsRuntimesSetIamPolicyRequest req = new NotebooksProjectsLocationsRuntimesSetIamPolicyRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "aliquid";
                                    expression = "quasi";
                                    location = "saepe";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("molestiae"),
                                    add("rerum"),
                                    add("occaecati"),
                                }};
                                role = "minima";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "distinctio";
                                    expression = "eligendi";
                                    location = "sit";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("adipisci"),
                                    add("cumque"),
                                    add("consequuntur"),
                                }};
                                role = "consequatur";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "minus";
                                    expression = "quaerat";
                                    location = "sapiente";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("blanditiis"),
                                    add("provident"),
                                }};
                                role = "a";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nulla";
                                    expression = "quas";
                                    location = "esse";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("error"),
                                    add("sint"),
                                    add("pariatur"),
                                    add("possimus"),
                                }};
                                role = "quia";
                            }}),
                        }};
                        etag = "eveniet";
                        version = 992430;
                    }};;
                }};;
                accessToken = "facere";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "quasi";
                key = "similique";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "tenetur";
                uploadProtocol = "quae";
            }};            

            NotebooksProjectsLocationsRuntimesSetIamPolicyResponse res = sdk.projects.notebooksProjectsLocationsRuntimesSetIamPolicy(req, new NotebooksProjectsLocationsRuntimesSetIamPolicySecurity("earum", "vel") {{
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

## notebooksProjectsLocationsRuntimesStart

Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesStartRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesStartResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StartRuntimeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesStartRequest req = new NotebooksProjectsLocationsRuntimesStartRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                startRuntimeRequest = new StartRuntimeRequest() {{
                    requestId = "libero";
                }};;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "aliquam";
                key = "sapiente";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "reprehenderit";
                uploadProtocol = "ullam";
            }};            

            NotebooksProjectsLocationsRuntimesStartResponse res = sdk.projects.notebooksProjectsLocationsRuntimesStart(req, new NotebooksProjectsLocationsRuntimesStartSecurity("nisi", "aut") {{
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

## notebooksProjectsLocationsRuntimesStop

Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesStopRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesStopResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesStopSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StopRuntimeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesStopRequest req = new NotebooksProjectsLocationsRuntimesStopRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                stopRuntimeRequest = new StopRuntimeRequest() {{
                    requestId = "quibusdam";
                }};;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "itaque";
                fields = "dolorum";
                key = "architecto";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "quasi";
                uploadProtocol = "at";
            }};            

            NotebooksProjectsLocationsRuntimesStopResponse res = sdk.projects.notebooksProjectsLocationsRuntimesStop(req, new NotebooksProjectsLocationsRuntimesStopSecurity("et", "voluptate") {{
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

## notebooksProjectsLocationsRuntimesSwitch

Switch a Managed Notebook Runtime.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesSwitchRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesSwitchResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesSwitchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RuntimeAcceleratorConfig;
import org.openapis.openapi.models.shared.RuntimeAcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.SwitchRuntimeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesSwitchRequest req = new NotebooksProjectsLocationsRuntimesSwitchRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                switchRuntimeRequest = new SwitchRuntimeRequest() {{
                    acceleratorConfig = new RuntimeAcceleratorConfig() {{
                        coreCount = "veritatis";
                        type = RuntimeAcceleratorConfigTypeEnum.NVIDIA_TESLA_P100;
                    }};;
                    machineType = "adipisci";
                    requestId = "iste";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "rem";
                fields = "aut";
                key = "laudantium";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "ab";
                uploadProtocol = "corrupti";
            }};            

            NotebooksProjectsLocationsRuntimesSwitchResponse res = sdk.projects.notebooksProjectsLocationsRuntimesSwitch(req, new NotebooksProjectsLocationsRuntimesSwitchSecurity("non", "voluptatem") {{
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

## notebooksProjectsLocationsRuntimesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest req = new NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("impedit"),
                        add("explicabo"),
                    }};
                }};;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "dignissimos";
                fields = "dicta";
                key = "maiores";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "voluptatibus";
                uploadProtocol = "voluptas";
            }};            

            NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse res = sdk.projects.notebooksProjectsLocationsRuntimesTestIamPermissions(req, new NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity("asperiores", "aperiam") {{
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

## notebooksProjectsLocationsRuntimesUpgrade

Upgrades a Managed Notebook Runtime to the latest version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesUpgradeRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesUpgradeResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsRuntimesUpgradeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UpgradeRuntimeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsRuntimesUpgradeRequest req = new NotebooksProjectsLocationsRuntimesUpgradeRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                upgradeRuntimeRequest = new UpgradeRuntimeRequest() {{
                    requestId = "consequuntur";
                }};;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "dignissimos";
                key = "officia";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "quae";
                uploadProtocol = "quaerat";
            }};            

            NotebooksProjectsLocationsRuntimesUpgradeResponse res = sdk.projects.notebooksProjectsLocationsRuntimesUpgrade(req, new NotebooksProjectsLocationsRuntimesUpgradeSecurity("porro", "quod") {{
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

## notebooksProjectsLocationsSchedulesCreate

Creates a new Scheduled Notebook in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesCreateRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesCreateResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DataprocParameters;
import org.openapis.openapi.models.shared.ExecutionTemplate;
import org.openapis.openapi.models.shared.ExecutionTemplateJobTypeEnum;
import org.openapis.openapi.models.shared.ExecutionTemplateScaleTierEnum;
import org.openapis.openapi.models.shared.ScheduleInput;
import org.openapis.openapi.models.shared.ScheduleStateEnum;
import org.openapis.openapi.models.shared.SchedulerAcceleratorConfig;
import org.openapis.openapi.models.shared.SchedulerAcceleratorConfigTypeEnum;
import org.openapis.openapi.models.shared.VertexAIParameters;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsSchedulesCreateRequest req = new NotebooksProjectsLocationsSchedulesCreateRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                scheduleInput = new ScheduleInput() {{
                    cronSchedule = "adipisci";
                    description = "fuga";
                    executionTemplate = new ExecutionTemplate() {{
                        acceleratorConfig = new SchedulerAcceleratorConfig() {{
                            coreCount = "id";
                            type = SchedulerAcceleratorConfigTypeEnum.NVIDIA_TESLA_V100;
                        }};;
                        containerImageUri = "velit";
                        dataprocParameters = new DataprocParameters() {{
                            cluster = "culpa";
                        }};;
                        inputNotebookFile = "est";
                        jobType = ExecutionTemplateJobTypeEnum.DATAPROC;
                        kernelSpec = "totam";
                        labels = new java.util.HashMap<String, String>() {{
                            put("vel", "ducimus");
                            put("quos", "vel");
                            put("labore", "possimus");
                            put("facilis", "cum");
                        }};
                        masterType = "commodi";
                        outputNotebookFolder = "in";
                        parameters = "corporis";
                        paramsYamlFile = "reiciendis";
                        scaleTier = ExecutionTemplateScaleTierEnum.BASIC_TPU;
                        serviceAccount = "nemo";
                        tensorboard = "recusandae";
                        vertexAiParameters = new VertexAIParameters() {{
                            env = new java.util.HashMap<String, String>() {{
                                put("aperiam", "cum");
                                put("consectetur", "in");
                            }};
                            network = "exercitationem";
                        }};;
                    }};;
                    state = ScheduleStateEnum.DELETING;
                    timeZone = "facere";
                }};;
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "reiciendis";
                key = "quidem";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                scheduleId = "dolore";
                uploadType = "sunt";
                uploadProtocol = "asperiores";
            }};            

            NotebooksProjectsLocationsSchedulesCreateResponse res = sdk.projects.notebooksProjectsLocationsSchedulesCreate(req, new NotebooksProjectsLocationsSchedulesCreateSecurity("adipisci", "non") {{
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

## notebooksProjectsLocationsSchedulesDelete

Deletes schedule and all underlying jobs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesDeleteRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesDeleteResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsSchedulesDeleteRequest req = new NotebooksProjectsLocationsSchedulesDeleteRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "consectetur";
                key = "corporis";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "ipsa";
                uploadType = "voluptates";
                uploadProtocol = "libero";
            }};            

            NotebooksProjectsLocationsSchedulesDeleteResponse res = sdk.projects.notebooksProjectsLocationsSchedulesDelete(req, new NotebooksProjectsLocationsSchedulesDeleteSecurity("vitae", "accusamus") {{
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

## notebooksProjectsLocationsSchedulesGet

Gets details of schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesGetRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesGetResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsSchedulesGetRequest req = new NotebooksProjectsLocationsSchedulesGetRequest("similique") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "voluptas";
                key = "minima";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "adipisci";
                uploadProtocol = "minus";
            }};            

            NotebooksProjectsLocationsSchedulesGetResponse res = sdk.projects.notebooksProjectsLocationsSchedulesGet(req, new NotebooksProjectsLocationsSchedulesGetSecurity("dolores", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.schedule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsSchedulesList

Lists schedules in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesListRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesListResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsSchedulesListRequest req = new NotebooksProjectsLocationsSchedulesListRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquam";
                alt = AltEnum.PROTO;
                callback = "temporibus";
                fields = "ullam";
                filter = "adipisci";
                key = "cum";
                oauthToken = "blanditiis";
                orderBy = "quas";
                pageSize = 942584L;
                pageToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "corrupti";
                uploadProtocol = "pariatur";
            }};            

            NotebooksProjectsLocationsSchedulesListResponse res = sdk.projects.notebooksProjectsLocationsSchedulesList(req, new NotebooksProjectsLocationsSchedulesListSecurity("totam", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSchedulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsSchedulesTrigger

Triggers execution of an existing schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesTriggerRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesTriggerResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsSchedulesTriggerSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsSchedulesTriggerRequest req = new NotebooksProjectsLocationsSchedulesTriggerRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("rerum", "sed");
                }};
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "facilis";
                key = "voluptate";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "iste";
                uploadProtocol = "dolore";
            }};            

            NotebooksProjectsLocationsSchedulesTriggerResponse res = sdk.projects.notebooksProjectsLocationsSchedulesTrigger(req, new NotebooksProjectsLocationsSchedulesTriggerSecurity("laborum", "sed") {{
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
