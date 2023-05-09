# projects

### Available Operations

* [composerProjectsLocationsEnvironmentsCheckUpgrade](#composerprojectslocationsenvironmentscheckupgrade) - Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.
* [composerProjectsLocationsEnvironmentsCreate](#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [composerProjectsLocationsEnvironmentsList](#composerprojectslocationsenvironmentslist) - List environments.
* [composerProjectsLocationsEnvironmentsLoadSnapshot](#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [composerProjectsLocationsEnvironmentsPatch](#composerprojectslocationsenvironmentspatch) - Update an environment.
* [composerProjectsLocationsEnvironmentsRestartWebServer](#composerprojectslocationsenvironmentsrestartwebserver) - Restart Airflow web server.
* [composerProjectsLocationsEnvironmentsSaveSnapshot](#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [composerProjectsLocationsImageVersionsList](#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [composerProjectsLocationsOperationsDelete](#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [composerProjectsLocationsOperationsGet](#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [composerProjectsLocationsOperationsList](#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## composerProjectsLocationsEnvironmentsCheckUpgrade

Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CheckUpgradeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest req = new ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                checkUpgradeRequest = new CheckUpgradeRequest() {{
                    imageVersion = "delectus";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse res = sdk.projects.composerProjectsLocationsEnvironmentsCheckUpgrade(req, new ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity("recusandae", "temporibus") {{
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
import org.openapis.openapi.models.shared.CloudDataLineageIntegration;
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
import org.openapis.openapi.models.shared.TriggererResource;
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

            ComposerProjectsLocationsEnvironmentsCreateRequest req = new ComposerProjectsLocationsEnvironmentsCreateRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                environmentInput = new EnvironmentInput() {{
                    config = new EnvironmentConfigInput() {{
                        databaseConfig = new DatabaseConfig() {{
                            machineType = "veritatis";
                        }};;
                        encryptionConfig = new EncryptionConfig() {{
                            kmsKeyName = "deserunt";
                        }};;
                        environmentSize = EnvironmentConfigEnvironmentSizeEnum.ENVIRONMENT_SIZE_UNSPECIFIED;
                        maintenanceWindow = new MaintenanceWindow() {{
                            endTime = "ipsam";
                            recurrence = "repellendus";
                            startTime = "sapiente";
                        }};;
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "odit";
                                    displayName = "at";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "at";
                                    displayName = "maiores";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "molestiae";
                                    displayName = "quod";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "quod";
                                    displayName = "esse";
                                }}),
                            }};
                            enabled = false;
                        }};;
                        nodeConfig = new NodeConfig() {{
                            diskSizeGb = 520478;
                            enableIpMasqAgent = false;
                            ipAllocationPolicy = new IPAllocationPolicy() {{
                                clusterIpv4CidrBlock = "porro";
                                clusterSecondaryRangeName = "dolorum";
                                servicesIpv4CidrBlock = "dicta";
                                servicesSecondaryRangeName = "nam";
                                useIpAliases = false;
                            }};;
                            location = "officia";
                            machineType = "occaecati";
                            maxPodsPerNode = 143353;
                            network = "deleniti";
                            oauthScopes = new String[]{{
                                add("optio"),
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                            }};
                            serviceAccount = "molestiae";
                            subnetwork = "modi";
                            tags = new String[]{{
                                add("impedit"),
                            }};
                        }};;
                        nodeCount = 736918;
                        privateEnvironmentConfig = new PrivateEnvironmentConfigInput() {{
                            cloudComposerConnectionSubnetwork = "esse";
                            cloudComposerNetworkIpv4CidrBlock = "ipsum";
                            cloudSqlIpv4CidrBlock = "excepturi";
                            enablePrivateEnvironment = false;
                            enablePrivatelyUsedPublicIps = false;
                            networkingConfig = new NetworkingConfig() {{
                                connectionType = NetworkingConfigConnectionTypeEnum.CONNECTION_TYPE_UNSPECIFIED;
                            }};;
                            privateClusterConfig = new PrivateClusterConfigInput() {{
                                enablePrivateEndpoint = false;
                                masterIpv4CidrBlock = "perferendis";
                            }};;
                            webServerIpv4CidrBlock = "ad";
                        }};;
                        recoveryConfig = new RecoveryConfig() {{
                            scheduledSnapshotsConfig = new ScheduledSnapshotsConfig() {{
                                enabled = false;
                                snapshotCreationSchedule = "natus";
                                snapshotLocation = "sed";
                                timeZone = "iste";
                            }};;
                        }};;
                        softwareConfig = new SoftwareConfig() {{
                            airflowConfigOverrides = new java.util.HashMap<String, String>() {{
                                put("natus", "laboriosam");
                            }};
                            cloudDataLineageIntegration = new CloudDataLineageIntegration() {{
                                enabled = false;
                            }};;
                            envVariables = new java.util.HashMap<String, String>() {{
                                put("saepe", "fuga");
                                put("in", "corporis");
                                put("iste", "iure");
                                put("saepe", "quidem");
                            }};
                            imageVersion = "architecto";
                            pypiPackages = new java.util.HashMap<String, String>() {{
                                put("reiciendis", "est");
                            }};
                            pythonVersion = "mollitia";
                            schedulerCount = 670638;
                        }};;
                        webServerConfig = new WebServerConfig() {{
                            machineType = "dolores";
                        }};;
                        webServerNetworkAccessControl = new WebServerNetworkAccessControl() {{
                            allowedIpRanges = new org.openapis.openapi.models.shared.AllowedIpRange[]{{
                                add(new AllowedIpRange() {{
                                    description = "corporis";
                                    value = "explicabo";
                                }}),
                            }};
                        }};;
                        workloadsConfig = new WorkloadsConfig() {{
                            scheduler = new SchedulerResource() {{
                                count = 750686;
                                cpu = 3154.28;
                                memoryGb = 6078.31;
                                storageGb = 3637.11;
                            }};;
                            triggerer = new TriggererResource() {{
                                count = 325047;
                                cpu = 5701.97;
                                memoryGb = 384.25;
                            }};;
                            webServer = new WebServerResource() {{
                                cpu = 4386.01;
                                memoryGb = 6342.74;
                                storageGb = 9883.74;
                            }};;
                            worker = new WorkerResource() {{
                                cpu = 9589.5;
                                maxCount = 102044;
                                memoryGb = 6527.9;
                                minCount = 208876;
                                storageGb = 6350.59;
                            }};;
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("repellat", "mollitia");
                    }};
                    name = "Francis Jerde";
                    state = EnvironmentStateEnum.CREATING;
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "vitae";
                key = "laborum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            ComposerProjectsLocationsEnvironmentsCreateResponse res = sdk.projects.composerProjectsLocationsEnvironmentsCreate(req, new ComposerProjectsLocationsEnvironmentsCreateSecurity("sequi", "tenetur") {{
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

            ComposerProjectsLocationsEnvironmentsListRequest req = new ComposerProjectsLocationsEnvironmentsListRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "error";
                key = "temporibus";
                oauthToken = "laborum";
                pageSize = 96098L;
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "vero";
                uploadProtocol = "nihil";
            }};            

            ComposerProjectsLocationsEnvironmentsListResponse res = sdk.projects.composerProjectsLocationsEnvironmentsList(req, new ComposerProjectsLocationsEnvironmentsListSecurity("praesentium", "voluptatibus") {{
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

            ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest req = new ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                loadSnapshotRequest = new LoadSnapshotRequest() {{
                    skipAirflowOverridesSetting = false;
                    skipEnvironmentVariablesSetting = false;
                    skipGcsDataCopying = false;
                    skipPypiPackagesInstallation = false;
                    snapshotPath = "voluptate";
                }};;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse res = sdk.projects.composerProjectsLocationsEnvironmentsLoadSnapshot(req, new ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity("iusto", "dicta") {{
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
import org.openapis.openapi.models.shared.CloudDataLineageIntegration;
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
import org.openapis.openapi.models.shared.TriggererResource;
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

            ComposerProjectsLocationsEnvironmentsPatchRequest req = new ComposerProjectsLocationsEnvironmentsPatchRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                environmentInput = new EnvironmentInput() {{
                    config = new EnvironmentConfigInput() {{
                        databaseConfig = new DatabaseConfig() {{
                            machineType = "accusamus";
                        }};;
                        encryptionConfig = new EncryptionConfig() {{
                            kmsKeyName = "commodi";
                        }};;
                        environmentSize = EnvironmentConfigEnvironmentSizeEnum.ENVIRONMENT_SIZE_LARGE;
                        maintenanceWindow = new MaintenanceWindow() {{
                            endTime = "quae";
                            recurrence = "ipsum";
                            startTime = "quidem";
                        }};;
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "excepturi";
                                    displayName = "pariatur";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "modi";
                                    displayName = "praesentium";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "rem";
                                    displayName = "voluptates";
                                }}),
                            }};
                            enabled = false;
                        }};;
                        nodeConfig = new NodeConfig() {{
                            diskSizeGb = 93940;
                            enableIpMasqAgent = false;
                            ipAllocationPolicy = new IPAllocationPolicy() {{
                                clusterIpv4CidrBlock = "repudiandae";
                                clusterSecondaryRangeName = "sint";
                                servicesIpv4CidrBlock = "veritatis";
                                servicesSecondaryRangeName = "itaque";
                                useIpAliases = false;
                            }};;
                            location = "incidunt";
                            machineType = "enim";
                            maxPodsPerNode = 9356;
                            network = "est";
                            oauthScopes = new String[]{{
                                add("explicabo"),
                                add("deserunt"),
                                add("distinctio"),
                                add("quibusdam"),
                            }};
                            serviceAccount = "labore";
                            subnetwork = "modi";
                            tags = new String[]{{
                                add("aliquid"),
                            }};
                        }};;
                        nodeCount = 586513;
                        privateEnvironmentConfig = new PrivateEnvironmentConfigInput() {{
                            cloudComposerConnectionSubnetwork = "quos";
                            cloudComposerNetworkIpv4CidrBlock = "perferendis";
                            cloudSqlIpv4CidrBlock = "magni";
                            enablePrivateEnvironment = false;
                            enablePrivatelyUsedPublicIps = false;
                            networkingConfig = new NetworkingConfig() {{
                                connectionType = NetworkingConfigConnectionTypeEnum.PRIVATE_SERVICE_CONNECT;
                            }};;
                            privateClusterConfig = new PrivateClusterConfigInput() {{
                                enablePrivateEndpoint = false;
                                masterIpv4CidrBlock = "ipsam";
                            }};;
                            webServerIpv4CidrBlock = "alias";
                        }};;
                        recoveryConfig = new RecoveryConfig() {{
                            scheduledSnapshotsConfig = new ScheduledSnapshotsConfig() {{
                                enabled = false;
                                snapshotCreationSchedule = "fugit";
                                snapshotLocation = "dolorum";
                                timeZone = "excepturi";
                            }};;
                        }};;
                        softwareConfig = new SoftwareConfig() {{
                            airflowConfigOverrides = new java.util.HashMap<String, String>() {{
                                put("facilis", "tempore");
                                put("labore", "delectus");
                            }};
                            cloudDataLineageIntegration = new CloudDataLineageIntegration() {{
                                enabled = false;
                            }};;
                            envVariables = new java.util.HashMap<String, String>() {{
                                put("non", "eligendi");
                                put("sint", "aliquid");
                            }};
                            imageVersion = "provident";
                            pypiPackages = new java.util.HashMap<String, String>() {{
                                put("sint", "officia");
                                put("dolor", "debitis");
                                put("a", "dolorum");
                                put("in", "in");
                            }};
                            pythonVersion = "illum";
                            schedulerCount = 978571;
                        }};;
                        webServerConfig = new WebServerConfig() {{
                            machineType = "rerum";
                        }};;
                        webServerNetworkAccessControl = new WebServerNetworkAccessControl() {{
                            allowedIpRanges = new org.openapis.openapi.models.shared.AllowedIpRange[]{{
                                add(new AllowedIpRange() {{
                                    description = "magnam";
                                    value = "cumque";
                                }}),
                            }};
                        }};;
                        workloadsConfig = new WorkloadsConfig() {{
                            scheduler = new SchedulerResource() {{
                                count = 813798;
                                cpu = 4118.2;
                                memoryGb = 3965.06;
                                storageGb = 6754.39;
                            }};;
                            triggerer = new TriggererResource() {{
                                count = 881104;
                                cpu = 2497.96;
                                memoryGb = 5812.73;
                            }};;
                            webServer = new WebServerResource() {{
                                cpu = 3132.18;
                                memoryGb = 8817.36;
                                storageGb = 9654.17;
                            }};;
                            worker = new WorkerResource() {{
                                cpu = 6925.32;
                                maxCount = 588465;
                                memoryGb = 7252.55;
                                minCount = 659669;
                                storageGb = 5013.24;
                            }};;
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("sapiente", "amet");
                        put("deserunt", "nisi");
                        put("vel", "natus");
                    }};
                    name = "Fernando Aufderhar";
                    state = EnvironmentStateEnum.DELETING;
                }};;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "suscipit";
                key = "natus";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "eum";
                updateMask = "vero";
                uploadType = "aspernatur";
                uploadProtocol = "architecto";
            }};            

            ComposerProjectsLocationsEnvironmentsPatchResponse res = sdk.projects.composerProjectsLocationsEnvironmentsPatch(req, new ComposerProjectsLocationsEnvironmentsPatchSecurity("magnam", "et") {{
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

## composerProjectsLocationsEnvironmentsRestartWebServer

Restart Airflow web server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsRestartWebServerRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsRestartWebServerResponse;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsRestartWebServerRequest req = new ComposerProjectsLocationsEnvironmentsRestartWebServerRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quos", "sint");
                    put("accusantium", "mollitia");
                    put("reiciendis", "mollitia");
                }};
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "necessitatibus";
                key = "odit";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "iure";
                uploadProtocol = "doloribus";
            }};            

            ComposerProjectsLocationsEnvironmentsRestartWebServerResponse res = sdk.projects.composerProjectsLocationsEnvironmentsRestartWebServer(req, new ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity("debitis", "eius") {{
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

            ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest req = new ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest("maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                saveSnapshotRequest = new SaveSnapshotRequest() {{
                    snapshotLocation = "facilis";
                }};;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "architecto";
                fields = "repudiandae";
                key = "ullam";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "repellat";
                uploadProtocol = "quibusdam";
            }};            

            ComposerProjectsLocationsEnvironmentsSaveSnapshotResponse res = sdk.projects.composerProjectsLocationsEnvironmentsSaveSnapshot(req, new ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity("sed", "saepe") {{
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

            ComposerProjectsLocationsImageVersionsListRequest req = new ComposerProjectsLocationsImageVersionsListRequest("pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "magni";
                includePastReleases = false;
                key = "sunt";
                oauthToken = "quo";
                pageSize = 848009L;
                pageToken = "pariatur";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "ea";
                uploadProtocol = "excepturi";
            }};            

            ComposerProjectsLocationsImageVersionsListResponse res = sdk.projects.composerProjectsLocationsImageVersionsList(req, new ComposerProjectsLocationsImageVersionsListSecurity("odit", "ea") {{
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

            ComposerProjectsLocationsOperationsDeleteRequest req = new ComposerProjectsLocationsOperationsDeleteRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "voluptate";
                key = "autem";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "pariatur";
                uploadProtocol = "nemo";
            }};            

            ComposerProjectsLocationsOperationsDeleteResponse res = sdk.projects.composerProjectsLocationsOperationsDelete(req, new ComposerProjectsLocationsOperationsDeleteSecurity("voluptatibus", "perferendis") {{
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

            ComposerProjectsLocationsOperationsGetRequest req = new ComposerProjectsLocationsOperationsGetRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
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

            ComposerProjectsLocationsOperationsGetResponse res = sdk.projects.composerProjectsLocationsOperationsGet(req, new ComposerProjectsLocationsOperationsGetSecurity("dignissimos", "eaque") {{
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

            ComposerProjectsLocationsOperationsListRequest req = new ComposerProjectsLocationsOperationsListRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "minus";
                filter = "quam";
                key = "dolor";
                oauthToken = "vero";
                pageSize = 345352L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "facilis";
            }};            

            ComposerProjectsLocationsOperationsListResponse res = sdk.projects.composerProjectsLocationsOperationsList(req, new ComposerProjectsLocationsOperationsListSecurity("perspiciatis", "voluptatem") {{
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
