<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersCreateRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersCreateResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Authorization;
import org.openapis.openapi.models.shared.BareMetalAdminApiServerArgument;
import org.openapis.openapi.models.shared.BareMetalAdminClusterInput;
import org.openapis.openapi.models.shared.BareMetalAdminClusterOperationsConfig;
import org.openapis.openapi.models.shared.BareMetalAdminControlPlaneConfig;
import org.openapis.openapi.models.shared.BareMetalAdminControlPlaneNodePoolConfig;
import org.openapis.openapi.models.shared.BareMetalAdminDrainedMachine;
import org.openapis.openapi.models.shared.BareMetalAdminDrainingMachine;
import org.openapis.openapi.models.shared.BareMetalAdminIslandModeCidrConfig;
import org.openapis.openapi.models.shared.BareMetalAdminLoadBalancerConfig;
import org.openapis.openapi.models.shared.BareMetalAdminMachineDrainStatus;
import org.openapis.openapi.models.shared.BareMetalAdminMaintenanceConfig;
import org.openapis.openapi.models.shared.BareMetalAdminMaintenanceStatus;
import org.openapis.openapi.models.shared.BareMetalAdminManualLbConfig;
import org.openapis.openapi.models.shared.BareMetalAdminNetworkConfig;
import org.openapis.openapi.models.shared.BareMetalAdminNodeAccessConfig;
import org.openapis.openapi.models.shared.BareMetalAdminOsEnvironmentConfig;
import org.openapis.openapi.models.shared.BareMetalAdminPortConfig;
import org.openapis.openapi.models.shared.BareMetalAdminProxyConfig;
import org.openapis.openapi.models.shared.BareMetalAdminSecurityConfig;
import org.openapis.openapi.models.shared.BareMetalAdminStorageConfig;
import org.openapis.openapi.models.shared.BareMetalAdminVipConfig;
import org.openapis.openapi.models.shared.BareMetalAdminWorkloadNodeConfig;
import org.openapis.openapi.models.shared.BareMetalKubeletConfig;
import org.openapis.openapi.models.shared.BareMetalLvpConfig;
import org.openapis.openapi.models.shared.BareMetalLvpShareConfig;
import org.openapis.openapi.models.shared.BareMetalNodeConfig;
import org.openapis.openapi.models.shared.BareMetalNodePoolConfig;
import org.openapis.openapi.models.shared.BareMetalNodePoolConfigOperatingSystemEnum;
import org.openapis.openapi.models.shared.ClusterUser;
import org.openapis.openapi.models.shared.NodeTaint;
import org.openapis.openapi.models.shared.NodeTaintEffectEnum;
import org.openapis.openapi.models.shared.ResourceCondition;
import org.openapis.openapi.models.shared.ResourceConditionStateEnum;
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.ValidationCheckInput;
import org.openapis.openapi.models.shared.ValidationCheckOptionEnum;
import org.openapis.openapi.models.shared.ValidationCheckResult;
import org.openapis.openapi.models.shared.ValidationCheckResultStateEnum;
import org.openapis.openapi.models.shared.ValidationCheckStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsBareMetalAdminClustersCreateRequest req = new GkeonpremProjectsLocationsBareMetalAdminClustersCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                bareMetalAdminClusterInput = new BareMetalAdminClusterInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                    bareMetalVersion = "error";
                    clusterOperations = new BareMetalAdminClusterOperationsConfig() {{
                        enableApplicationLogs = false;
                    }};;
                    controlPlane = new BareMetalAdminControlPlaneConfig() {{
                        apiServerArgs = new org.openapis.openapi.models.shared.BareMetalAdminApiServerArgument[]{{
                            add(new BareMetalAdminApiServerArgument() {{
                                argument = "suscipit";
                                value = "iure";
                            }}),
                            add(new BareMetalAdminApiServerArgument() {{
                                argument = "magnam";
                                value = "debitis";
                            }}),
                            add(new BareMetalAdminApiServerArgument() {{
                                argument = "ipsa";
                                value = "delectus";
                            }}),
                        }};
                        controlPlaneNodePoolConfig = new BareMetalAdminControlPlaneNodePoolConfig() {{
                            nodePoolConfig = new BareMetalNodePoolConfig() {{
                                kubeletConfig = new BareMetalKubeletConfig() {{
                                    registryBurst = 272656;
                                    registryPullQps = 383441;
                                    serializeImagePullsDisabled = false;
                                }};;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("minus", "placeat");
                                    put("voluptatum", "iusto");
                                }};
                                nodeConfigs = new org.openapis.openapi.models.shared.BareMetalNodeConfig[]{{
                                    add(new BareMetalNodeConfig() {{
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("recusandae", "temporibus");
                                            put("ab", "quis");
                                        }};
                                        nodeIp = "veritatis";
                                    }}),
                                    add(new BareMetalNodeConfig() {{
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("perferendis", "ipsam");
                                            put("repellendus", "sapiente");
                                            put("quo", "odit");
                                        }};
                                        nodeIp = "at";
                                    }}),
                                    add(new BareMetalNodeConfig() {{
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("maiores", "molestiae");
                                            put("quod", "quod");
                                            put("esse", "totam");
                                            put("porro", "dolorum");
                                        }};
                                        nodeIp = "dicta";
                                    }}),
                                }};
                                operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum.LINUX;
                                taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                    add(new NodeTaint() {{
                                        effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                        key = "fugit";
                                        value = "deleniti";
                                    }}),
                                    add(new NodeTaint() {{
                                        effect = NodeTaintEffectEnum.NO_EXECUTE;
                                        key = "optio";
                                        value = "totam";
                                    }}),
                                    add(new NodeTaint() {{
                                        effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                        key = "commodi";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};;
                        }};;
                    }};;
                    description = "modi";
                    etag = "qui";
                    loadBalancer = new BareMetalAdminLoadBalancerConfig() {{
                        manualLbConfig = new BareMetalAdminManualLbConfig() {{
                            enabled = false;
                        }};;
                        portConfig = new BareMetalAdminPortConfig() {{
                            controlPlaneLoadBalancerPort = 774234;
                        }};;
                        vipConfig = new BareMetalAdminVipConfig() {{
                            controlPlaneVip = "cum";
                        }};;
                    }};;
                    maintenanceConfig = new BareMetalAdminMaintenanceConfig() {{
                        maintenanceAddressCidrBlocks = new String[]{{
                            add("ipsum"),
                            add("excepturi"),
                        }};
                    }};;
                    maintenanceStatus = new BareMetalAdminMaintenanceStatus() {{
                        machineDrainStatus = new BareMetalAdminMachineDrainStatus() {{
                            drainedMachines = new org.openapis.openapi.models.shared.BareMetalAdminDrainedMachine[]{{
                                add(new BareMetalAdminDrainedMachine() {{
                                    nodeIp = "perferendis";
                                }}),
                            }};
                            drainingMachines = new org.openapis.openapi.models.shared.BareMetalAdminDrainingMachine[]{{
                                add(new BareMetalAdminDrainingMachine() {{
                                    nodeIp = "natus";
                                    podCount = 149675;
                                }}),
                                add(new BareMetalAdminDrainingMachine() {{
                                    nodeIp = "iste";
                                    podCount = 222321;
                                }}),
                            }};
                        }};;
                    }};;
                    name = "Lester Welch";
                    networkConfig = new BareMetalAdminNetworkConfig() {{
                        islandModeCidr = new BareMetalAdminIslandModeCidrConfig() {{
                            podAddressCidrBlocks = new String[]{{
                                add("corporis"),
                                add("iste"),
                            }};
                            serviceAddressCidrBlocks = new String[]{{
                                add("saepe"),
                                add("quidem"),
                            }};
                        }};;
                    }};;
                    nodeAccessConfig = new BareMetalAdminNodeAccessConfig() {{
                        loginUser = "architecto";
                    }};;
                    nodeConfig = new BareMetalAdminWorkloadNodeConfig() {{
                        maxPodsPerNode = "ipsa";
                    }};;
                    osEnvironmentConfig = new BareMetalAdminOsEnvironmentConfig() {{
                        packageRepoExcluded = false;
                    }};;
                    proxy = new BareMetalAdminProxyConfig() {{
                        noProxy = new String[]{{
                            add("est"),
                            add("mollitia"),
                            add("laborum"),
                            add("dolores"),
                        }};
                        uri = "http://growing-cappelletti.net";
                    }};;
                    securityConfig = new BareMetalAdminSecurityConfig() {{
                        authorization = new Authorization() {{
                            adminUsers = new org.openapis.openapi.models.shared.ClusterUser[]{{
                                add(new ClusterUser() {{
                                    username = "Lenore57";
                                }}),
                                add(new ClusterUser() {{
                                    username = "Alisa_Kessler";
                                }}),
                            }};
                        }};;
                    }};;
                    status = new ResourceStatus() {{
                        conditions = new org.openapis.openapi.models.shared.ResourceCondition[]{{
                            add(new ResourceCondition() {{
                                lastTransitionTime = "architecto";
                                message = "mollitia";
                                reason = "dolorem";
                                state = ResourceConditionStateEnum.STATE_FALSE;
                                type = "consequuntur";
                            }}),
                            add(new ResourceCondition() {{
                                lastTransitionTime = "repellat";
                                message = "mollitia";
                                reason = "occaecati";
                                state = ResourceConditionStateEnum.STATE_TRUE;
                                type = "commodi";
                            }}),
                            add(new ResourceCondition() {{
                                lastTransitionTime = "quam";
                                message = "molestiae";
                                reason = "velit";
                                state = ResourceConditionStateEnum.STATE_FALSE;
                                type = "quia";
                            }}),
                            add(new ResourceCondition() {{
                                lastTransitionTime = "quis";
                                message = "vitae";
                                reason = "laborum";
                                state = ResourceConditionStateEnum.STATE_FALSE;
                                type = "enim";
                            }}),
                        }};
                        errorMessage = "odit";
                    }};;
                    storage = new BareMetalAdminStorageConfig() {{
                        lvpNodeMountsConfig = new BareMetalLvpConfig() {{
                            path = "quo";
                            storageClass = "sequi";
                        }};;
                        lvpShareConfig = new BareMetalLvpShareConfig() {{
                            lvpConfig = new BareMetalLvpConfig() {{
                                path = "tenetur";
                                storageClass = "ipsam";
                            }};;
                            sharedPathPvCount = 662527;
                        }};;
                    }};;
                    validationCheck = new ValidationCheckInput() {{
                        option = ValidationCheckOptionEnum.SKIP_VALIDATION_ALL;
                        status = new ValidationCheckStatus() {{
                            result = new org.openapis.openapi.models.shared.ValidationCheckResult[]{{
                                add(new ValidationCheckResult() {{
                                    category = "quasi";
                                    description = "error";
                                    details = "temporibus";
                                    reason = "laborum";
                                    state = ValidationCheckResultStateEnum.STATE_UNKNOWN;
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                bareMetalAdminClusterId = "vero";
                callback = "nihil";
                fields = "praesentium";
                key = "voluptatibus";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "voluptate";
                uploadProtocol = "cum";
                validateOnly = false;
            }};            

            GkeonpremProjectsLocationsBareMetalAdminClustersCreateResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalAdminClustersCreate(req, new GkeonpremProjectsLocationsBareMetalAdminClustersCreateSecurity("perferendis", "doloremque") {{
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