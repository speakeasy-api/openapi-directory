<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCreateSecurity;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCreatePathParams;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCreateQueryParams;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCreateRequest;
import org.openapis.openapi.models.operations.ComposerProjectsLocationsEnvironmentsCreateResponse;
import org.openapis.openapi.models.shared.EnvironmentStateEnum;
import org.openapis.openapi.models.shared.EnvironmentInput;
import org.openapis.openapi.models.shared.EnvironmentConfigEnvironmentSizeEnum;
import org.openapis.openapi.models.shared.EnvironmentConfigInput;
import org.openapis.openapi.models.shared.WorkloadsConfig;
import org.openapis.openapi.models.shared.WorkerResource;
import org.openapis.openapi.models.shared.WebServerResource;
import org.openapis.openapi.models.shared.SchedulerResource;
import org.openapis.openapi.models.shared.WebServerNetworkAccessControl;
import org.openapis.openapi.models.shared.AllowedIpRange;
import org.openapis.openapi.models.shared.WebServerConfig;
import org.openapis.openapi.models.shared.SoftwareConfig;
import org.openapis.openapi.models.shared.RecoveryConfig;
import org.openapis.openapi.models.shared.ScheduledSnapshotsConfig;
import org.openapis.openapi.models.shared.PrivateEnvironmentConfigInput;
import org.openapis.openapi.models.shared.PrivateClusterConfigInput;
import org.openapis.openapi.models.shared.NetworkingConfigConnectionTypeEnum;
import org.openapis.openapi.models.shared.NetworkingConfig;
import org.openapis.openapi.models.shared.NodeConfig;
import org.openapis.openapi.models.shared.IPAllocationPolicy;
import org.openapis.openapi.models.shared.MasterAuthorizedNetworksConfig;
import org.openapis.openapi.models.shared.CidrBlock;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.DatabaseConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComposerProjectsLocationsEnvironmentsCreateRequest req = new ComposerProjectsLocationsEnvironmentsCreateRequest() {{
                security = new ComposerProjectsLocationsEnvironmentsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ComposerProjectsLocationsEnvironmentsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new ComposerProjectsLocationsEnvironmentsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new EnvironmentInput() {{
                    config = new EnvironmentConfigInput() {{
                        airflowUri = "suscipit";
                        dagGcsPrefix = "iure";
                        databaseConfig = new DatabaseConfig() {{
                            machineType = "magnam";
                        }};
                        encryptionConfig = new EncryptionConfig() {{
                            kmsKeyName = "debitis";
                        }};
                        environmentSize = "ENVIRONMENT_SIZE_UNSPECIFIED";
                        gkeCluster = "delectus";
                        maintenanceWindow = new MaintenanceWindow() {{
                            endTime = "tempora";
                            recurrence = "suscipit";
                            startTime = "molestiae";
                        }};
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "placeat";
                                    displayName = "voluptatum";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "iusto";
                                    displayName = "excepturi";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "nisi";
                                    displayName = "recusandae";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "temporibus";
                                    displayName = "ab";
                                }}),
                            }};
                            enabled = false;
                        }};
                        nodeConfig = new NodeConfig() {{
                            diskSizeGb = 337396;
                            enableIpMasqAgent = false;
                            ipAllocationPolicy = new IPAllocationPolicy() {{
                                clusterIpv4CidrBlock = "veritatis";
                                clusterSecondaryRangeName = "deserunt";
                                servicesIpv4CidrBlock = "perferendis";
                                servicesSecondaryRangeName = "ipsam";
                                useIpAliases = false;
                            }};
                            location = "repellendus";
                            machineType = "sapiente";
                            network = "quo";
                            oauthScopes = new String[]{{
                                add("at"),
                            }};
                            serviceAccount = "at";
                            subnetwork = "maiores";
                            tags = new String[]{{
                                add("quod"),
                                add("quod"),
                            }};
                        }};
                        nodeCount = 461479;
                        privateEnvironmentConfig = new PrivateEnvironmentConfigInput() {{
                            cloudComposerConnectionSubnetwork = "totam";
                            cloudComposerNetworkIpv4CidrBlock = "porro";
                            cloudSqlIpv4CidrBlock = "dolorum";
                            enablePrivateEnvironment = false;
                            enablePrivatelyUsedPublicIps = false;
                            networkingConfig = new NetworkingConfig() {{
                                connectionType = "CONNECTION_TYPE_UNSPECIFIED";
                            }};
                            privateClusterConfig = new PrivateClusterConfigInput() {{
                                enablePrivateEndpoint = false;
                                masterIpv4CidrBlock = "nam";
                            }};
                            webServerIpv4CidrBlock = "officia";
                        }};
                        recoveryConfig = new RecoveryConfig() {{
                            scheduledSnapshotsConfig = new ScheduledSnapshotsConfig() {{
                                enabled = false;
                                snapshotCreationSchedule = "occaecati";
                                snapshotLocation = "fugit";
                                timeZone = "deleniti";
                            }};
                        }};
                        softwareConfig = new SoftwareConfig() {{
                            airflowConfigOverrides = new java.util.HashMap<String, String>() {{
                                put("optio", "totam");
                                put("beatae", "commodi");
                                put("molestiae", "modi");
                                put("qui", "impedit");
                            }};
                            envVariables = new java.util.HashMap<String, String>() {{
                                put("esse", "ipsum");
                                put("excepturi", "aspernatur");
                                put("perferendis", "ad");
                            }};
                            imageVersion = "natus";
                            pypiPackages = new java.util.HashMap<String, String>() {{
                                put("iste", "dolor");
                            }};
                            pythonVersion = "natus";
                            schedulerCount = 386489;
                        }};
                        webServerConfig = new WebServerConfig() {{
                            machineType = "hic";
                        }};
                        webServerNetworkAccessControl = new WebServerNetworkAccessControl() {{
                            allowedIpRanges = new org.openapis.openapi.models.shared.AllowedIpRange[]{{
                                add(new AllowedIpRange() {{
                                    description = "fuga";
                                    value = "in";
                                }}),
                                add(new AllowedIpRange() {{
                                    description = "corporis";
                                    value = "iste";
                                }}),
                                add(new AllowedIpRange() {{
                                    description = "iure";
                                    value = "saepe";
                                }}),
                                add(new AllowedIpRange() {{
                                    description = "quidem";
                                    value = "architecto";
                                }}),
                            }};
                        }};
                        workloadsConfig = new WorkloadsConfig() {{
                            scheduler = new SchedulerResource() {{
                                count = 60225;
                                cpu = 9698.1;
                                memoryGb = 6667.67;
                                storageGb = 6531.4;
                            }};
                            webServer = new WebServerResource() {{
                                cpu = 6706.38;
                                memoryGb = 1709.09;
                                storageGb = 2103.82;
                            }};
                            worker = new WorkerResource() {{
                                cpu = 3581.52;
                                maxCount = 128926;
                                memoryGb = 7506.86;
                                minCount = 315428;
                                storageGb = 6078.31;
                            }};
                        }};
                    }};
                    createTime = "nemo";
                    labels = new java.util.HashMap<String, String>() {{
                        put("excepturi", "accusantium");
                        put("iure", "culpa");
                    }};
                    name = "doloribus";
                    state = "ERROR";
                    updateTime = "architecto";
                    uuid = "a3a2fa94-6773-4925-9aa5-2c3f5ad019da";
                }};
            }};            

            ComposerProjectsLocationsEnvironmentsCreateResponse res = sdk.projects.composerProjectsLocationsEnvironmentsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->