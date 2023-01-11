# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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
                    parent = "quam";
                }};
                queryParams = new ComposerProjectsLocationsEnvironmentsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dolores";
                    alt = "proto";
                    callback = "non";
                    fields = "culpa";
                    key = "animi";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "natus";
                    uploadType = "accusantium";
                    uploadProtocol = "sapiente";
                }};
                request = new EnvironmentInput() {{
                    config = new EnvironmentConfigInput() {{
                        airflowUri = "iure";
                        dagGcsPrefix = "assumenda";
                        databaseConfig = new DatabaseConfig() {{
                            machineType = "dolore";
                        }};
                        encryptionConfig = new EncryptionConfig() {{
                            kmsKeyName = "nobis";
                        }};
                        environmentSize = "ENVIRONMENT_SIZE_LARGE";
                        gkeCluster = "qui";
                        maintenanceWindow = new MaintenanceWindow() {{
                            endTime = "in";
                            recurrence = "tempora";
                            startTime = "molestiae";
                        }};
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new openapisdk.models.shared.CidrBlock[]() {{
                                add(new CidrBlock() {{
                                    cidrBlock = "sit";
                                    displayName = "ut";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "iste";
                                    displayName = "mollitia";
                                }}),
                            }};
                            enabled = true;
                        }};
                        nodeConfig = new NodeConfig() {{
                            diskSizeGb = 3778572643604528969;
                            enableIpMasqAgent = true;
                            ipAllocationPolicy = new IpAllocationPolicy() {{
                                clusterIpv4CidrBlock = "ea";
                                clusterSecondaryRangeName = "ullam";
                                servicesIpv4CidrBlock = "laborum";
                                servicesSecondaryRangeName = "impedit";
                                useIpAliases = false;
                            }};
                            location = "id";
                            machineType = "eius";
                            network = "fugiat";
                            oauthScopes = new String[]() {{
                                add("praesentium"),
                                add("et"),
                            }};
                            serviceAccount = "vel";
                            subnetwork = "exercitationem";
                            tags = new String[]() {{
                                add("voluptatem"),
                                add("porro"),
                                add("amet"),
                            }};
                        }};
                        nodeCount = 8716268311825613191;
                        privateEnvironmentConfig = new PrivateEnvironmentConfigInput() {{
                            cloudComposerConnectionSubnetwork = "nihil";
                            cloudComposerNetworkIpv4CidrBlock = "dicta";
                            cloudSqlIpv4CidrBlock = "impedit";
                            enablePrivateEnvironment = true;
                            enablePrivatelyUsedPublicIps = true;
                            networkingConfig = new NetworkingConfig() {{
                                connectionType = "CONNECTION_TYPE_UNSPECIFIED";
                            }};
                            privateClusterConfig = new PrivateClusterConfigInput() {{
                                enablePrivateEndpoint = true;
                                masterIpv4CidrBlock = "repellendus";
                            }};
                            webServerIpv4CidrBlock = "possimus";
                        }};
                        recoveryConfig = new RecoveryConfig() {{
                            scheduledSnapshotsConfig = new ScheduledSnapshotsConfig() {{
                                enabled = true;
                                snapshotCreationSchedule = "ipsum";
                                snapshotLocation = "id";
                                timeZone = "aut";
                            }};
                        }};
                        softwareConfig = new SoftwareConfig() {{
                            airflowConfigOverrides = new java.util.HashMap<String, String>() {{
                                put("ex", "magnam");
                                put("aspernatur", "laudantium");
                                put("quod", "sint");
                            }};
                            envVariables = new java.util.HashMap<String, String>() {{
                                put("pariatur", "odit");
                            }};
                            imageVersion = "ducimus";
                            pypiPackages = new java.util.HashMap<String, String>() {{
                                put("nihil", "cumque");
                                put("recusandae", "omnis");
                            }};
                            pythonVersion = "voluptas";
                            schedulerCount = 2800729644002869954;
                        }};
                        webServerConfig = new WebServerConfig() {{
                            machineType = "reprehenderit";
                        }};
                        webServerNetworkAccessControl = new WebServerNetworkAccessControl() {{
                            allowedIpRanges = new openapisdk.models.shared.AllowedIpRange[]() {{
                                add(new AllowedIpRange() {{
                                    description = "est";
                                    value = "quia";
                                }}),
                            }};
                        }};
                        workloadsConfig = new WorkloadsConfig() {{
                            scheduler = new SchedulerResource() {{
                                count = 9211526077211213276;
                                cpu = 36.200001;
                                memoryGb = 16.200001;
                                storageGb = 77.099998;
                            }};
                            webServer = new WebServerResource() {{
                                cpu = 94.099998;
                                memoryGb = 97.099998;
                                storageGb = 67.199997;
                            }};
                            worker = new WorkerResource() {{
                                cpu = 63.099998;
                                maxCount = 1395179033932601674;
                                memoryGb = 80.099998;
                                minCount = 4096823187563723360;
                                storageGb = 51.200001;
                            }};
                        }};
                    }};
                    createTime = "molestiae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("eligendi", "dolores");
                        put("minus", "minus");
                        put("consequatur", "labore");
                    }};
                    name = "eveniet";
                    state = "DELETING";
                    updateTime = "quis";
                    uuid = "sint";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `composerProjectsLocationsEnvironmentsCreate` - Create a new environment.
* `composerProjectsLocationsEnvironmentsList` - List environments.
* `composerProjectsLocationsEnvironmentsLoadSnapshot` - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* `composerProjectsLocationsEnvironmentsPatch` - Update an environment.
* `composerProjectsLocationsEnvironmentsSaveSnapshot` - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* `composerProjectsLocationsImageVersionsList` - List ImageVersions for provided location.
* `composerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `composerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `composerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
