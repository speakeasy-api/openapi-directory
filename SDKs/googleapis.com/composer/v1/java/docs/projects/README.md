# projects

### Available Operations

* [composerProjectsLocationsEnvironmentsCreate](#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [composerProjectsLocationsEnvironmentsList](#composerprojectslocationsenvironmentslist) - List environments.
* [composerProjectsLocationsEnvironmentsLoadSnapshot](#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [composerProjectsLocationsEnvironmentsPatch](#composerprojectslocationsenvironmentspatch) - Update an environment.
* [composerProjectsLocationsEnvironmentsSaveSnapshot](#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [composerProjectsLocationsImageVersionsList](#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [composerProjectsLocationsOperationsDelete](#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [composerProjectsLocationsOperationsGet](#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [composerProjectsLocationsOperationsList](#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## composerProjectsLocationsEnvironmentsCreate

Create a new environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCreateRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCreateResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCreateSecurity;
import org.openapis.openapi.models.shared.AllowedIpRange;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CidrBlock;
import org.openapis.openapi.models.shared.DatabaseConfig;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.EnvironmentConfigEnvironmentSizeEnum;
import org.openapis.openapi.models.shared.EnvironmentConfigInput;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.EnvironmentStateEnum;
import org.openapis.openapi.models.shared.IPAllocationPolicy;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.MasterAuthorizedNetworksConfig;
import org.openapis.openapi.models.shared.NetworkingConfig;
import org.openapis.openapi.models.shared.NetworkingConfigConnectionTypeEnum;
import org.openapis.openapi.models.shared.NodeConfig;
import org.openapis.openapi.models.shared.PrivateClusterConfigInput;
import org.openapis.openapi.models.shared.PrivateEnvironmentConfigInput;
import org.openapis.openapi.models.shared.RecoveryConfig;
import org.openapis.openapi.models.shared.ScheduledSnapshotsConfig;
import org.openapis.openapi.models.shared.SchedulerResource;
import org.openapis.openapi.models.shared.SoftwareConfig;
import org.openapis.openapi.models.shared.WebServerConfig;
import org.openapis.openapi.models.shared.WebServerNetworkAccessControl;
import org.openapis.openapi.models.shared.WebServerResource;
import org.openapis.openapi.models.shared.WorkerResource;
import org.openapis.openapi.models.shared.WorkloadsConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsCreateRequest req = new ComposerProjectsLocationsEnvironmentsCreateRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                environmentInput = new EnvironmentInput() {{
                    config = new EnvironmentConfigInput() {{
                        airflowUri = "praesentium";
                        dagGcsPrefix = "voluptatibus";
                        databaseConfig = new DatabaseConfig() {{
                            machineType = "ipsa";
                        }};;
                        encryptionConfig = new EncryptionConfig() {{
                            kmsKeyName = "omnis";
                        }};;
                        environmentSize = EnvironmentConfigEnvironmentSizeEnum.ENVIRONMENT_SIZE_SMALL;
                        gkeCluster = "cum";
                        maintenanceWindow = new MaintenanceWindow() {{
                            endTime = "perferendis";
                            recurrence = "doloremque";
                            startTime = "reprehenderit";
                        }};;
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "maiores";
                                    displayName = "dicta";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "corporis";
                                    displayName = "dolore";
                                }}),
                            }};
                            enabled = false;
                        }};;
                        nodeConfig = new NodeConfig() {{
                            diskSizeGb = 480894;
                            enableIpMasqAgent = false;
                            ipAllocationPolicy = new IPAllocationPolicy() {{
                                clusterIpv4CidrBlock = "dicta";
                                clusterSecondaryRangeName = "harum";
                                servicesIpv4CidrBlock = "enim";
                                servicesSecondaryRangeName = "accusamus";
                                useIpAliases = false;
                            }};;
                            location = "commodi";
                            machineType = "repudiandae";
                            network = "quae";
                            oauthScopes = new String[]{{
                                add("quidem"),
                            }};
                            serviceAccount = "molestias";
                            subnetwork = "excepturi";
                            tags = new String[]{{
                                add("modi"),
                                add("praesentium"),
                                add("rem"),
                                add("voluptates"),
                            }};
                        }};;
                        nodeCount = 93940;
                        privateEnvironmentConfig = new PrivateEnvironmentConfigInput() {{
                            cloudComposerConnectionSubnetwork = "repudiandae";
                            cloudComposerNetworkIpv4CidrBlock = "sint";
                            cloudSqlIpv4CidrBlock = "veritatis";
                            enablePrivateEnvironment = false;
                            enablePrivatelyUsedPublicIps = false;
                            networkingConfig = new NetworkingConfig() {{
                                connectionType = NetworkingConfigConnectionTypeEnum.PRIVATE_SERVICE_CONNECT;
                            }};;
                            privateClusterConfig = new PrivateClusterConfigInput() {{
                                enablePrivateEndpoint = false;
                                masterIpv4CidrBlock = "incidunt";
                            }};;
                            webServerIpv4CidrBlock = "enim";
                        }};;
                        recoveryConfig = new RecoveryConfig() {{
                            scheduledSnapshotsConfig = new ScheduledSnapshotsConfig() {{
                                enabled = false;
                                snapshotCreationSchedule = "consequatur";
                                snapshotLocation = "est";
                                timeZone = "quibusdam";
                            }};;
                        }};;
                        softwareConfig = new SoftwareConfig() {{
                            airflowConfigOverrides = new java.util.HashMap<String, String>() {{
                                put("deserunt", "distinctio");
                            }};
                            envVariables = new java.util.HashMap<String, String>() {{
                                put("labore", "modi");
                                put("qui", "aliquid");
                                put("cupiditate", "quos");
                                put("perferendis", "magni");
                            }};
                            imageVersion = "assumenda";
                            pypiPackages = new java.util.HashMap<String, String>() {{
                                put("alias", "fugit");
                                put("dolorum", "excepturi");
                            }};
                            pythonVersion = "tempora";
                            schedulerCount = 703737;
                        }};;
                        webServerConfig = new WebServerConfig() {{
                            machineType = "tempore";
                        }};;
                        webServerNetworkAccessControl = new WebServerNetworkAccessControl() {{
                            allowedIpRanges = new org.openapis.openapi.models.shared.AllowedIpRange[]{{
                                add(new AllowedIpRange() {{
                                    description = "delectus";
                                    value = "eum";
                                }}),
                                add(new AllowedIpRange() {{
                                    description = "non";
                                    value = "eligendi";
                                }}),
                            }};
                        }};;
                        workloadsConfig = new WorkloadsConfig() {{
                            scheduler = new SchedulerResource() {{
                                count = 576157;
                                cpu = 3960.98;
                                memoryGb = 5920.42;
                                storageGb = 8960.39;
                            }};;
                            webServer = new WebServerResource() {{
                                cpu = 5722.52;
                                memoryGb = 6389.21;
                                storageGb = 2230.81;
                            }};;
                            worker = new WorkerResource() {{
                                cpu = 8915.55;
                                maxCount = 952749;
                                memoryGb = 6800.56;
                                minCount = 447125;
                                storageGb = 4491.98;
                            }};;
                        }};;
                    }};;
                    createTime = "illum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("rerum", "dicta");
                        put("magnam", "cumque");
                        put("facere", "ea");
                        put("aliquid", "laborum");
                    }};
                    name = "Alfred McClure";
                    state = EnvironmentStateEnum.ERROR;
                    updateTime = "quidem";
                    uuid = "9ba88f3a-6699-4707-8ba4-469b6e214195";
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "accusantium";
                key = "mollitia";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "ad";
                uploadProtocol = "eum";
            }};            

            ComposerProjectsLocationsEnvironmentsCreateResponse res = sdk.projects.composerProjectsLocationsEnvironmentsCreate(req, new ComposerProjectsLocationsEnvironmentsCreateSecurity("dolor", "necessitatibus") {{
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

## composerProjectsLocationsEnvironmentsList

List environments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsListRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsListResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsListRequest req = new ComposerProjectsLocationsEnvironmentsListRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "debitis";
                key = "eius";
                oauthToken = "maxime";
                pageSize = 537023L;
                pageToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            ComposerProjectsLocationsEnvironmentsListResponse res = sdk.projects.composerProjectsLocationsEnvironmentsList(req, new ComposerProjectsLocationsEnvironmentsListSecurity("repudiandae", "ullam") {{
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

## composerProjectsLocationsEnvironmentsLoadSnapshot

Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LoadSnapshotRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest req = new ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                loadSnapshotRequest = new LoadSnapshotRequest() {{
                    skipAirflowOverridesSetting = false;
                    skipEnvironmentVariablesSetting = false;
                    skipGcsDataCopying = false;
                    skipPypiPackagesInstallation = false;
                    snapshotPath = "repellat";
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

            ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse res = sdk.projects.composerProjectsLocationsEnvironmentsLoadSnapshot(req, new ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity("sunt", "quo") {{
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

## composerProjectsLocationsEnvironmentsPatch

Update an environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsPatchRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsPatchResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsPatchSecurity;
import org.openapis.openapi.models.shared.AllowedIpRange;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CidrBlock;
import org.openapis.openapi.models.shared.DatabaseConfig;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.EnvironmentConfigEnvironmentSizeEnum;
import org.openapis.openapi.models.shared.EnvironmentConfigInput;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.EnvironmentStateEnum;
import org.openapis.openapi.models.shared.IPAllocationPolicy;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.MasterAuthorizedNetworksConfig;
import org.openapis.openapi.models.shared.NetworkingConfig;
import org.openapis.openapi.models.shared.NetworkingConfigConnectionTypeEnum;
import org.openapis.openapi.models.shared.NodeConfig;
import org.openapis.openapi.models.shared.PrivateClusterConfigInput;
import org.openapis.openapi.models.shared.PrivateEnvironmentConfigInput;
import org.openapis.openapi.models.shared.RecoveryConfig;
import org.openapis.openapi.models.shared.ScheduledSnapshotsConfig;
import org.openapis.openapi.models.shared.SchedulerResource;
import org.openapis.openapi.models.shared.SoftwareConfig;
import org.openapis.openapi.models.shared.WebServerConfig;
import org.openapis.openapi.models.shared.WebServerNetworkAccessControl;
import org.openapis.openapi.models.shared.WebServerResource;
import org.openapis.openapi.models.shared.WorkerResource;
import org.openapis.openapi.models.shared.WorkloadsConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsPatchRequest req = new ComposerProjectsLocationsEnvironmentsPatchRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                environmentInput = new EnvironmentInput() {{
                    config = new EnvironmentConfigInput() {{
                        airflowUri = "maxime";
                        dagGcsPrefix = "ea";
                        databaseConfig = new DatabaseConfig() {{
                            machineType = "excepturi";
                        }};;
                        encryptionConfig = new EncryptionConfig() {{
                            kmsKeyName = "odit";
                        }};;
                        environmentSize = EnvironmentConfigEnvironmentSizeEnum.ENVIRONMENT_SIZE_SMALL;
                        gkeCluster = "accusantium";
                        maintenanceWindow = new MaintenanceWindow() {{
                            endTime = "ab";
                            recurrence = "maiores";
                            startTime = "quidem";
                        }};;
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "voluptate";
                                    displayName = "autem";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "nam";
                                    displayName = "eaque";
                                }}),
                            }};
                            enabled = false;
                        }};;
                        nodeConfig = new NodeConfig() {{
                            diskSizeGb = 866383;
                            enableIpMasqAgent = false;
                            ipAllocationPolicy = new IPAllocationPolicy() {{
                                clusterIpv4CidrBlock = "nemo";
                                clusterSecondaryRangeName = "voluptatibus";
                                servicesIpv4CidrBlock = "perferendis";
                                servicesSecondaryRangeName = "fugiat";
                                useIpAliases = false;
                            }};;
                            location = "amet";
                            machineType = "aut";
                            network = "cumque";
                            oauthScopes = new String[]{{
                                add("hic"),
                                add("libero"),
                            }};
                            serviceAccount = "nobis";
                            subnetwork = "dolores";
                            tags = new String[]{{
                                add("totam"),
                                add("dignissimos"),
                            }};
                        }};;
                        nodeCount = 54338;
                        privateEnvironmentConfig = new PrivateEnvironmentConfigInput() {{
                            cloudComposerConnectionSubnetwork = "quis";
                            cloudComposerNetworkIpv4CidrBlock = "nesciunt";
                            cloudSqlIpv4CidrBlock = "eos";
                            enablePrivateEnvironment = false;
                            enablePrivatelyUsedPublicIps = false;
                            networkingConfig = new NetworkingConfig() {{
                                connectionType = NetworkingConfigConnectionTypeEnum.CONNECTION_TYPE_UNSPECIFIED;
                            }};;
                            privateClusterConfig = new PrivateClusterConfigInput() {{
                                enablePrivateEndpoint = false;
                                masterIpv4CidrBlock = "dolores";
                            }};;
                            webServerIpv4CidrBlock = "minus";
                        }};;
                        recoveryConfig = new RecoveryConfig() {{
                            scheduledSnapshotsConfig = new ScheduledSnapshotsConfig() {{
                                enabled = false;
                                snapshotCreationSchedule = "quam";
                                snapshotLocation = "dolor";
                                timeZone = "vero";
                            }};;
                        }};;
                        softwareConfig = new SoftwareConfig() {{
                            airflowConfigOverrides = new java.util.HashMap<String, String>() {{
                                put("hic", "recusandae");
                                put("omnis", "facilis");
                            }};
                            envVariables = new java.util.HashMap<String, String>() {{
                                put("voluptatem", "porro");
                                put("consequuntur", "blanditiis");
                                put("error", "eaque");
                            }};
                            imageVersion = "occaecati";
                            pypiPackages = new java.util.HashMap<String, String>() {{
                                put("adipisci", "asperiores");
                                put("earum", "modi");
                                put("iste", "dolorum");
                            }};
                            pythonVersion = "deleniti";
                            schedulerCount = 864282;
                        }};;
                        webServerConfig = new WebServerConfig() {{
                            machineType = "provident";
                        }};;
                        webServerNetworkAccessControl = new WebServerNetworkAccessControl() {{
                            allowedIpRanges = new org.openapis.openapi.models.shared.AllowedIpRange[]{{
                                add(new AllowedIpRange() {{
                                    description = "libero";
                                    value = "delectus";
                                }}),
                                add(new AllowedIpRange() {{
                                    description = "quaerat";
                                    value = "quos";
                                }}),
                                add(new AllowedIpRange() {{
                                    description = "aliquid";
                                    value = "dolorem";
                                }}),
                                add(new AllowedIpRange() {{
                                    description = "dolorem";
                                    value = "dolor";
                                }}),
                            }};
                        }};;
                        workloadsConfig = new WorkloadsConfig() {{
                            scheduler = new SchedulerResource() {{
                                count = 186193;
                                cpu = 2187.49;
                                memoryGb = 9443.73;
                                storageGb = 5695.74;
                            }};;
                            webServer = new WebServerResource() {{
                                cpu = 7395.51;
                                memoryGb = 4521.09;
                                storageGb = 4904.59;
                            }};;
                            worker = new WorkerResource() {{
                                cpu = 9702.37;
                                maxCount = 227414;
                                memoryGb = 6805.45;
                                minCount = 254356;
                                storageGb = 852.95;
                            }};;
                        }};;
                    }};;
                    createTime = "ipsa";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "odio");
                    }};
                    name = "Sophia Predovic";
                    state = EnvironmentStateEnum.UPDATING;
                    updateTime = "eos";
                    uuid = "80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95";
                }};;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "similique";
                fields = "alias";
                key = "at";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "tempora";
                updateMask = "vel";
                uploadType = "quod";
                uploadProtocol = "officiis";
            }};            

            ComposerProjectsLocationsEnvironmentsPatchResponse res = sdk.projects.composerProjectsLocationsEnvironmentsPatch(req, new ComposerProjectsLocationsEnvironmentsPatchSecurity("qui", "dolorum") {{
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

## composerProjectsLocationsEnvironmentsSaveSnapshot

Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SaveSnapshotRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest req = new ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest("a") {{
                dollarXgafv = XgafvEnum.ONE;
                saveSnapshotRequest = new SaveSnapshotRequest() {{
                    snapshotLocation = "harum";
                }};;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "quisquam";
                fields = "tenetur";
                key = "amet";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "numquam";
                uploadProtocol = "enim";
            }};            

            ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse res = sdk.projects.composerProjectsLocationsEnvironmentsSaveSnapshot(req, new ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity("dolorem", "sapiente") {{
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

## composerProjectsLocationsImageVersionsList

List ImageVersions for provided location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsImageVersionsListRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsImageVersionsListResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsImageVersionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsImageVersionsListRequest req = new ComposerProjectsLocationsImageVersionsListRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "neque";
                fields = "sed";
                includePastReleases = false;
                key = "vel";
                oauthToken = "libero";
                pageSize = 374170L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "ipsum";
                uploadProtocol = "incidunt";
            }};            

            ComposerProjectsLocationsImageVersionsListResponse res = sdk.projects.composerProjectsLocationsImageVersionsList(req, new ComposerProjectsLocationsImageVersionsListSecurity("qui", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listImageVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## composerProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsOperationsDeleteRequest req = new ComposerProjectsLocationsOperationsDeleteRequest("maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "totam";
                key = "incidunt";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "distinctio";
                uploadProtocol = "facilis";
            }};            

            ComposerProjectsLocationsOperationsDeleteResponse res = sdk.projects.composerProjectsLocationsOperationsDelete(req, new ComposerProjectsLocationsOperationsDeleteSecurity("aliquid", "quam") {{
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

## composerProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsOperationsGetRequest req = new ComposerProjectsLocationsOperationsGetRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "magni";
                key = "odio";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "nam";
                uploadProtocol = "hic";
            }};            

            ComposerProjectsLocationsOperationsGetResponse res = sdk.projects.composerProjectsLocationsOperationsGet(req, new ComposerProjectsLocationsOperationsGetSecurity("voluptatem", "cumque") {{
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

## composerProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsOperationsListRequest req = new ComposerProjectsLocationsOperationsListRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "ipsum";
                fields = "veritatis";
                filter = "nobis";
                key = "quos";
                oauthToken = "tempore";
                pageSize = 584476L;
                pageToken = "aperiam";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "dolorem";
                uploadProtocol = "dolore";
            }};            

            ComposerProjectsLocationsOperationsListResponse res = sdk.projects.composerProjectsLocationsOperationsList(req, new ComposerProjectsLocationsOperationsListSecurity("labore", "adipisci") {{
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
