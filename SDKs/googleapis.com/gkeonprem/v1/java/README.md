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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [gkeonpremProjectsLocationsBareMetalAdminClustersCreate](docs/projects/README.md#gkeonpremprojectslocationsbaremetaladminclusterscreate) - Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment
* [gkeonpremProjectsLocationsBareMetalAdminClustersEnroll](docs/projects/README.md#gkeonpremprojectslocationsbaremetaladminclustersenroll) - Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
* [gkeonpremProjectsLocationsBareMetalAdminClustersList](docs/projects/README.md#gkeonpremprojectslocationsbaremetaladminclusterslist) - Lists bare metal admin clusters in a given project and location.
* [gkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfig](docs/projects/README.md#gkeonpremprojectslocationsbaremetaladminclustersqueryversionconfig) - Queries the bare metal admin cluster version config.
* [gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreate](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolscreate) - Creates a new bare metal node pool in a given project, location and Bare Metal cluster.
* [gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnroll](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolsenroll) - Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.
* [gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsList](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolslist) - Lists bare metal node pools in a given project, location and bare metal cluster.
* [gkeonpremProjectsLocationsBareMetalClustersCreate](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclusterscreate) - Creates a new bare metal cluster in a given project and location.
* [gkeonpremProjectsLocationsBareMetalClustersEnroll](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclustersenroll) - Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
* [gkeonpremProjectsLocationsBareMetalClustersList](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclusterslist) - Lists bare metal clusters in a given project and location.
* [gkeonpremProjectsLocationsBareMetalClustersQueryVersionConfig](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclustersqueryversionconfig) - Queries the bare metal user cluster version config.
* [gkeonpremProjectsLocationsList](docs/projects/README.md#gkeonpremprojectslocationslist) - Lists information about the supported locations for this service.
* [gkeonpremProjectsLocationsOperationsCancel](docs/projects/README.md#gkeonpremprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkeonpremProjectsLocationsVmwareAdminClustersEnroll](docs/projects/README.md#gkeonpremprojectslocationsvmwareadminclustersenroll) - Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
* [gkeonpremProjectsLocationsVmwareAdminClustersList](docs/projects/README.md#gkeonpremprojectslocationsvmwareadminclusterslist) - Lists VMware admin clusters in a given project and location.
* [gkeonpremProjectsLocationsVmwareClustersCreate](docs/projects/README.md#gkeonpremprojectslocationsvmwareclusterscreate) - Creates a new VMware cluster in a given project and location.
* [gkeonpremProjectsLocationsVmwareClustersEnroll](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersenroll) - Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
* [gkeonpremProjectsLocationsVmwareClustersList](docs/projects/README.md#gkeonpremprojectslocationsvmwareclusterslist) - Lists VMware Clusters in a given project and location.
* [gkeonpremProjectsLocationsVmwareClustersQueryVersionConfig](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersqueryversionconfig) - Queries the VMware user cluster version config.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreate](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolscreate) - Creates a new VMware node pool in a given project, location and VMWare cluster.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDelete](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsdelete) - Deletes a single VMware node pool.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnroll](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsenroll) - Enrolls a VMware node pool to Anthos On-Prem API
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicy](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsList](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolslist) - Lists VMware node pools in a given project, location and VMWare cluster.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGet](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsList](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatch](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolspatch) - Updates the parameters of a single VMware node pool.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicy](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissions](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenroll](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsunenroll) - Unenrolls a VMware node pool to Anthos On-Prem API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
