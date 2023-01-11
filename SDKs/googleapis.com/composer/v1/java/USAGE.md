<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new ComposerProjectsLocationsEnvironmentsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new EnvironmentInput() {{
                    config = new EnvironmentConfigInput() {{
                        airflowUri = "dicta";
                        dagGcsPrefix = "debitis";
                        databaseConfig = new DatabaseConfig() {{
                            machineType = "voluptatum";
                        }};
                        encryptionConfig = new EncryptionConfig() {{
                            kmsKeyName = "et";
                        }};
                        environmentSize = "ENVIRONMENT_SIZE_LARGE";
                        gkeCluster = "dolorem";
                        maintenanceWindow = new MaintenanceWindow() {{
                            endTime = "et";
                            recurrence = "voluptate";
                            startTime = "iste";
                        }};
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new openapisdk.models.shared.CidrBlock[]() {{
                                add(new CidrBlock() {{
                                    cidrBlock = "totam";
                                    displayName = "dolores";
                                }}),
                            }};
                            enabled = false;
                        }};
                        nodeConfig = new NodeConfig() {{
                            diskSizeGb = 6392442863481646880;
                            enableIpMasqAgent = false;
                            ipAllocationPolicy = new IpAllocationPolicy() {{
                                clusterIpv4CidrBlock = "odio";
                                clusterSecondaryRangeName = "dolore";
                                servicesIpv4CidrBlock = "id";
                                servicesSecondaryRangeName = "aspernatur";
                                useIpAliases = true;
                            }};
                            location = "totam";
                            machineType = "commodi";
                            network = "quis";
                            oauthScopes = new String[]() {{
                                add("aut"),
                                add("odit"),
                            }};
                            serviceAccount = "non";
                            subnetwork = "voluptas";
                            tags = new String[]() {{
                                add("aut"),
                                add("illo"),
                            }};
                        }};
                        nodeCount = 5558237345453186302;
                        privateEnvironmentConfig = new PrivateEnvironmentConfigInput() {{
                            cloudComposerConnectionSubnetwork = "officiis";
                            cloudComposerNetworkIpv4CidrBlock = "autem";
                            cloudSqlIpv4CidrBlock = "consectetur";
                            enablePrivateEnvironment = false;
                            enablePrivatelyUsedPublicIps = false;
                            networkingConfig = new NetworkingConfig() {{
                                connectionType = "CONNECTION_TYPE_UNSPECIFIED";
                            }};
                            privateClusterConfig = new PrivateClusterConfigInput() {{
                                enablePrivateEndpoint = true;
                                masterIpv4CidrBlock = "at";
                            }};
                            webServerIpv4CidrBlock = "ipsum";
                        }};
                        recoveryConfig = new RecoveryConfig() {{
                            scheduledSnapshotsConfig = new ScheduledSnapshotsConfig() {{
                                enabled = true;
                                snapshotCreationSchedule = "modi";
                                snapshotLocation = "sint";
                                timeZone = "inventore";
                            }};
                        }};
                        softwareConfig = new SoftwareConfig() {{
                            airflowConfigOverrides = new java.util.HashMap<String, String>() {{
                                put("exercitationem", "aut");
                                put("reprehenderit", "tempore");
                                put("maiores", "incidunt");
                            }};
                            envVariables = new java.util.HashMap<String, String>() {{
                                put("beatae", "veritatis");
                                put("in", "et");
                            }};
                            imageVersion = "omnis";
                            pypiPackages = new java.util.HashMap<String, String>() {{
                                put("ex", "dolores");
                            }};
                            pythonVersion = "placeat";
                            schedulerCount = 2118716725206170867;
                        }};
                        webServerConfig = new WebServerConfig() {{
                            machineType = "rerum";
                        }};
                        webServerNetworkAccessControl = new WebServerNetworkAccessControl() {{
                            allowedIpRanges = new openapisdk.models.shared.AllowedIpRange[]() {{
                                add(new AllowedIpRange() {{
                                    description = "voluptas";
                                    value = "quam";
                                }}),
                                add(new AllowedIpRange() {{
                                    description = "reprehenderit";
                                    value = "qui";
                                }}),
                            }};
                        }};
                        workloadsConfig = new WorkloadsConfig() {{
                            scheduler = new SchedulerResource() {{
                                count = 8056746523676181822;
                                cpu = 72.199997;
                                memoryGb = 72.199997;
                                storageGb = 22.100000;
                            }};
                            webServer = new WebServerResource() {{
                                cpu = 12.100000;
                                memoryGb = 76.099998;
                                storageGb = 40.099998;
                            }};
                            worker = new WorkerResource() {{
                                cpu = 28.100000;
                                maxCount = 3604381780091280195;
                                memoryGb = 20.100000;
                                minCount = 759605945513541974;
                                storageGb = 31.200001;
                            }};
                        }};
                    }};
                    createTime = "et";
                    labels = new java.util.HashMap<String, String>() {{
                        put("qui", "earum");
                        put("illo", "omnis");
                        put("ut", "consequatur");
                    }};
                    name = "dolor";
                    state = "DELETING";
                    updateTime = "error";
                    uuid = "reprehenderit";
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