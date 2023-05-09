# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            ComposerProjectsLocationsEnvironmentsCreateRequest req = new ComposerProjectsLocationsEnvironmentsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                environmentInput = new EnvironmentInput() {{
                    config = new EnvironmentConfigInput() {{
                        airflowUri = "distinctio";
                        dagGcsPrefix = "quibusdam";
                        databaseConfig = new DatabaseConfig() {{
                            machineType = "unde";
                        }};;
                        encryptionConfig = new EncryptionConfig() {{
                            kmsKeyName = "nulla";
                        }};;
                        environmentSize = EnvironmentConfigEnvironmentSizeEnum.ENVIRONMENT_SIZE_MEDIUM;
                        gkeCluster = "illum";
                        maintenanceWindow = new MaintenanceWindow() {{
                            endTime = "vel";
                            recurrence = "error";
                            startTime = "deserunt";
                        }};;
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "iure";
                                    displayName = "magnam";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "debitis";
                                    displayName = "ipsa";
                                }}),
                            }};
                            enabled = false;
                        }};;
                        nodeConfig = new NodeConfig() {{
                            diskSizeGb = 963663;
                            enableIpMasqAgent = false;
                            ipAllocationPolicy = new IPAllocationPolicy() {{
                                clusterIpv4CidrBlock = "tempora";
                                clusterSecondaryRangeName = "suscipit";
                                servicesIpv4CidrBlock = "molestiae";
                                servicesSecondaryRangeName = "minus";
                                useIpAliases = false;
                            }};;
                            location = "placeat";
                            machineType = "voluptatum";
                            network = "iusto";
                            oauthScopes = new String[]{{
                                add("nisi"),
                                add("recusandae"),
                                add("temporibus"),
                            }};
                            serviceAccount = "ab";
                            subnetwork = "quis";
                            tags = new String[]{{
                                add("deserunt"),
                            }};
                        }};;
                        nodeCount = 20218;
                        privateEnvironmentConfig = new PrivateEnvironmentConfigInput() {{
                            cloudComposerConnectionSubnetwork = "ipsam";
                            cloudComposerNetworkIpv4CidrBlock = "repellendus";
                            cloudSqlIpv4CidrBlock = "sapiente";
                            enablePrivateEnvironment = false;
                            enablePrivatelyUsedPublicIps = false;
                            networkingConfig = new NetworkingConfig() {{
                                connectionType = NetworkingConfigConnectionTypeEnum.PRIVATE_SERVICE_CONNECT;
                            }};;
                            privateClusterConfig = new PrivateClusterConfigInput() {{
                                enablePrivateEndpoint = false;
                                masterIpv4CidrBlock = "odit";
                            }};;
                            webServerIpv4CidrBlock = "at";
                        }};;
                        recoveryConfig = new RecoveryConfig() {{
                            scheduledSnapshotsConfig = new ScheduledSnapshotsConfig() {{
                                enabled = false;
                                snapshotCreationSchedule = "at";
                                snapshotLocation = "maiores";
                                timeZone = "molestiae";
                            }};;
                        }};;
                        softwareConfig = new SoftwareConfig() {{
                            airflowConfigOverrides = new java.util.HashMap<String, String>() {{
                                put("quod", "esse");
                                put("totam", "porro");
                                put("dolorum", "dicta");
                                put("nam", "officia");
                            }};
                            envVariables = new java.util.HashMap<String, String>() {{
                                put("fugit", "deleniti");
                                put("hic", "optio");
                                put("totam", "beatae");
                            }};
                            imageVersion = "commodi";
                            pypiPackages = new java.util.HashMap<String, String>() {{
                                put("modi", "qui");
                                put("impedit", "cum");
                            }};
                            pythonVersion = "esse";
                            schedulerCount = 216550;
                        }};;
                        webServerConfig = new WebServerConfig() {{
                            machineType = "excepturi";
                        }};;
                        webServerNetworkAccessControl = new WebServerNetworkAccessControl() {{
                            allowedIpRanges = new org.openapis.openapi.models.shared.AllowedIpRange[]{{
                                add(new AllowedIpRange() {{
                                    description = "perferendis";
                                    value = "ad";
                                }}),
                            }};
                        }};;
                        workloadsConfig = new WorkloadsConfig() {{
                            scheduler = new SchedulerResource() {{
                                count = 617636;
                                cpu = 1496.75;
                                memoryGb = 6120.96;
                                storageGb = 2223.21;
                            }};;
                            webServer = new WebServerResource() {{
                                cpu = 6169.34;
                                memoryGb = 3864.89;
                                storageGb = 9437.49;
                            }};;
                            worker = new WorkerResource() {{
                                cpu = 9025.99;
                                maxCount = 681820;
                                memoryGb = 4499.5;
                                minCount = 359508;
                                storageGb = 6130.64;
                            }};;
                        }};;
                    }};;
                    createTime = "iure";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quidem", "architecto");
                        put("ipsa", "reiciendis");
                        put("est", "mollitia");
                        put("laborum", "dolores");
                    }};
                    name = "Stacy Champlin";
                    state = EnvironmentStateEnum.UPDATING;
                    updateTime = "nemo";
                    uuid = "5907aff1-a3a2-4fa9-8677-39251aa52c3f";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "aut";
                key = "quasi";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "laborum";
                uploadProtocol = "quasi";
            }};            

            ComposerProjectsLocationsEnvironmentsCreateResponse res = sdk.projects.composerProjectsLocationsEnvironmentsCreate(req, new ComposerProjectsLocationsEnvironmentsCreateSecurity("reiciendis", "voluptatibus") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [composerProjectsLocationsEnvironmentsCreate](docs/projects/README.md#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [composerProjectsLocationsEnvironmentsList](docs/projects/README.md#composerprojectslocationsenvironmentslist) - List environments.
* [composerProjectsLocationsEnvironmentsLoadSnapshot](docs/projects/README.md#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [composerProjectsLocationsEnvironmentsPatch](docs/projects/README.md#composerprojectslocationsenvironmentspatch) - Update an environment.
* [composerProjectsLocationsEnvironmentsSaveSnapshot](docs/projects/README.md#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [composerProjectsLocationsImageVersionsList](docs/projects/README.md#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [composerProjectsLocationsOperationsDelete](docs/projects/README.md#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [composerProjectsLocationsOperationsGet](docs/projects/README.md#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [composerProjectsLocationsOperationsList](docs/projects/README.md#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
