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