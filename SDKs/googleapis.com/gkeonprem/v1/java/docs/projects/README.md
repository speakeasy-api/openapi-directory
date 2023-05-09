# projects

### Available Operations

* [gkeonpremProjectsLocationsBareMetalAdminClustersCreate](#gkeonpremprojectslocationsbaremetaladminclusterscreate) - Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment
* [gkeonpremProjectsLocationsBareMetalAdminClustersEnroll](#gkeonpremprojectslocationsbaremetaladminclustersenroll) - Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
* [gkeonpremProjectsLocationsBareMetalAdminClustersList](#gkeonpremprojectslocationsbaremetaladminclusterslist) - Lists bare metal admin clusters in a given project and location.
* [gkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfig](#gkeonpremprojectslocationsbaremetaladminclustersqueryversionconfig) - Queries the bare metal admin cluster version config.
* [gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreate](#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolscreate) - Creates a new bare metal node pool in a given project, location and Bare Metal cluster.
* [gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnroll](#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolsenroll) - Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.
* [gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsList](#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolslist) - Lists bare metal node pools in a given project, location and bare metal cluster.
* [gkeonpremProjectsLocationsBareMetalClustersCreate](#gkeonpremprojectslocationsbaremetalclusterscreate) - Creates a new bare metal cluster in a given project and location.
* [gkeonpremProjectsLocationsBareMetalClustersEnroll](#gkeonpremprojectslocationsbaremetalclustersenroll) - Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
* [gkeonpremProjectsLocationsBareMetalClustersList](#gkeonpremprojectslocationsbaremetalclusterslist) - Lists bare metal clusters in a given project and location.
* [gkeonpremProjectsLocationsBareMetalClustersQueryVersionConfig](#gkeonpremprojectslocationsbaremetalclustersqueryversionconfig) - Queries the bare metal user cluster version config.
* [gkeonpremProjectsLocationsList](#gkeonpremprojectslocationslist) - Lists information about the supported locations for this service.
* [gkeonpremProjectsLocationsOperationsCancel](#gkeonpremprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkeonpremProjectsLocationsVmwareAdminClustersEnroll](#gkeonpremprojectslocationsvmwareadminclustersenroll) - Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
* [gkeonpremProjectsLocationsVmwareAdminClustersList](#gkeonpremprojectslocationsvmwareadminclusterslist) - Lists VMware admin clusters in a given project and location.
* [gkeonpremProjectsLocationsVmwareClustersCreate](#gkeonpremprojectslocationsvmwareclusterscreate) - Creates a new VMware cluster in a given project and location.
* [gkeonpremProjectsLocationsVmwareClustersEnroll](#gkeonpremprojectslocationsvmwareclustersenroll) - Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
* [gkeonpremProjectsLocationsVmwareClustersList](#gkeonpremprojectslocationsvmwareclusterslist) - Lists VMware Clusters in a given project and location.
* [gkeonpremProjectsLocationsVmwareClustersQueryVersionConfig](#gkeonpremprojectslocationsvmwareclustersqueryversionconfig) - Queries the VMware user cluster version config.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreate](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolscreate) - Creates a new VMware node pool in a given project, location and VMWare cluster.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDelete](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsdelete) - Deletes a single VMware node pool.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnroll](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsenroll) - Enrolls a VMware node pool to Anthos On-Prem API
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicy](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsList](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolslist) - Lists VMware node pools in a given project, location and VMWare cluster.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGet](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsList](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatch](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolspatch) - Updates the parameters of a single VMware node pool.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicy](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissions](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenroll](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsunenroll) - Unenrolls a VMware node pool to Anthos On-Prem API

## gkeonpremProjectsLocationsBareMetalAdminClustersCreate

Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment

### Example Usage

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

            GkeonpremProjectsLocationsBareMetalAdminClustersCreateRequest req = new GkeonpremProjectsLocationsBareMetalAdminClustersCreateRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.ONE;
                bareMetalAdminClusterInput = new BareMetalAdminClusterInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("dicta", "corporis");
                        put("dolore", "iusto");
                        put("dicta", "harum");
                        put("enim", "accusamus");
                    }};
                    bareMetalVersion = "commodi";
                    clusterOperations = new BareMetalAdminClusterOperationsConfig() {{
                        enableApplicationLogs = false;
                    }};;
                    controlPlane = new BareMetalAdminControlPlaneConfig() {{
                        apiServerArgs = new org.openapis.openapi.models.shared.BareMetalAdminApiServerArgument[]{{
                            add(new BareMetalAdminApiServerArgument() {{
                                argument = "quae";
                                value = "ipsum";
                            }}),
                            add(new BareMetalAdminApiServerArgument() {{
                                argument = "quidem";
                                value = "molestias";
                            }}),
                            add(new BareMetalAdminApiServerArgument() {{
                                argument = "excepturi";
                                value = "pariatur";
                            }}),
                            add(new BareMetalAdminApiServerArgument() {{
                                argument = "modi";
                                value = "praesentium";
                            }}),
                        }};
                        controlPlaneNodePoolConfig = new BareMetalAdminControlPlaneNodePoolConfig() {{
                            nodePoolConfig = new BareMetalNodePoolConfig() {{
                                kubeletConfig = new BareMetalKubeletConfig() {{
                                    registryBurst = 523248;
                                    registryPullQps = 916723;
                                    serializeImagePullsDisabled = false;
                                }};;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("repudiandae", "sint");
                                }};
                                nodeConfigs = new org.openapis.openapi.models.shared.BareMetalNodeConfig[]{{
                                    add(new BareMetalNodeConfig() {{
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("incidunt", "enim");
                                            put("consequatur", "est");
                                            put("quibusdam", "explicabo");
                                            put("deserunt", "distinctio");
                                        }};
                                        nodeIp = "quibusdam";
                                    }}),
                                }};
                                operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum.OPERATING_SYSTEM_UNSPECIFIED;
                                taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                    add(new NodeTaint() {{
                                        effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                        key = "aliquid";
                                        value = "cupiditate";
                                    }}),
                                    add(new NodeTaint() {{
                                        effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                        key = "perferendis";
                                        value = "magni";
                                    }}),
                                }};
                            }};;
                        }};;
                    }};;
                    description = "assumenda";
                    etag = "ipsam";
                    loadBalancer = new BareMetalAdminLoadBalancerConfig() {{
                        manualLbConfig = new BareMetalAdminManualLbConfig() {{
                            enabled = false;
                        }};;
                        portConfig = new BareMetalAdminPortConfig() {{
                            controlPlaneLoadBalancerPort = 4695;
                        }};;
                        vipConfig = new BareMetalAdminVipConfig() {{
                            controlPlaneVip = "fugit";
                        }};;
                    }};;
                    maintenanceConfig = new BareMetalAdminMaintenanceConfig() {{
                        maintenanceAddressCidrBlocks = new String[]{{
                            add("excepturi"),
                            add("tempora"),
                            add("facilis"),
                        }};
                    }};;
                    maintenanceStatus = new BareMetalAdminMaintenanceStatus() {{
                        machineDrainStatus = new BareMetalAdminMachineDrainStatus() {{
                            drainedMachines = new org.openapis.openapi.models.shared.BareMetalAdminDrainedMachine[]{{
                                add(new BareMetalAdminDrainedMachine() {{
                                    nodeIp = "labore";
                                }}),
                                add(new BareMetalAdminDrainedMachine() {{
                                    nodeIp = "delectus";
                                }}),
                                add(new BareMetalAdminDrainedMachine() {{
                                    nodeIp = "eum";
                                }}),
                            }};
                            drainingMachines = new org.openapis.openapi.models.shared.BareMetalAdminDrainingMachine[]{{
                                add(new BareMetalAdminDrainingMachine() {{
                                    nodeIp = "eligendi";
                                    podCount = 576157;
                                }}),
                            }};
                        }};;
                    }};;
                    name = "Sherri Tremblay";
                    networkConfig = new BareMetalAdminNetworkConfig() {{
                        islandModeCidr = new BareMetalAdminIslandModeCidrConfig() {{
                            podAddressCidrBlocks = new String[]{{
                                add("debitis"),
                            }};
                            serviceAddressCidrBlocks = new String[]{{
                                add("dolorum"),
                                add("in"),
                                add("in"),
                                add("illum"),
                            }};
                        }};;
                    }};;
                    nodeAccessConfig = new BareMetalAdminNodeAccessConfig() {{
                        loginUser = "maiores";
                    }};;
                    nodeConfig = new BareMetalAdminWorkloadNodeConfig() {{
                        maxPodsPerNode = "rerum";
                    }};;
                    osEnvironmentConfig = new BareMetalAdminOsEnvironmentConfig() {{
                        packageRepoExcluded = false;
                    }};;
                    proxy = new BareMetalAdminProxyConfig() {{
                        noProxy = new String[]{{
                            add("magnam"),
                        }};
                        uri = "https://stupendous-handmaiden.info";
                    }};;
                    securityConfig = new BareMetalAdminSecurityConfig() {{
                        authorization = new Authorization() {{
                            adminUsers = new org.openapis.openapi.models.shared.ClusterUser[]{{
                                add(new ClusterUser() {{
                                    username = "Shaniya.Friesen";
                                }}),
                                add(new ClusterUser() {{
                                    username = "Shannon_Wintheiser72";
                                }}),
                                add(new ClusterUser() {{
                                    username = "Magdalena_Kuvalis";
                                }}),
                            }};
                        }};;
                    }};;
                    status = new ResourceStatus() {{
                        conditions = new org.openapis.openapi.models.shared.ResourceCondition[]{{
                            add(new ResourceCondition() {{
                                lastTransitionTime = "deserunt";
                                message = "nisi";
                                reason = "vel";
                                state = ResourceConditionStateEnum.STATE_FALSE;
                                type = "omnis";
                            }}),
                        }};
                        errorMessage = "molestiae";
                    }};;
                    storage = new BareMetalAdminStorageConfig() {{
                        lvpNodeMountsConfig = new BareMetalLvpConfig() {{
                            path = "perferendis";
                            storageClass = "nihil";
                        }};;
                        lvpShareConfig = new BareMetalLvpShareConfig() {{
                            lvpConfig = new BareMetalLvpConfig() {{
                                path = "magnam";
                                storageClass = "distinctio";
                            }};;
                            sharedPathPvCount = 660174;
                        }};;
                    }};;
                    validationCheck = new ValidationCheckInput() {{
                        option = ValidationCheckOptionEnum.OPTIONS_UNSPECIFIED;
                        status = new ValidationCheckStatus() {{
                            result = new org.openapis.openapi.models.shared.ValidationCheckResult[]{{
                                add(new ValidationCheckResult() {{
                                    category = "suscipit";
                                    description = "natus";
                                    details = "nobis";
                                    reason = "eum";
                                    state = ValidationCheckResultStateEnum.STATE_WARNING;
                                }}),
                                add(new ValidationCheckResult() {{
                                    category = "aspernatur";
                                    description = "architecto";
                                    details = "magnam";
                                    reason = "et";
                                    state = ValidationCheckResultStateEnum.STATE_SKIPPED;
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                bareMetalAdminClusterId = "quos";
                callback = "sint";
                fields = "accusantium";
                key = "mollitia";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "ad";
                uploadProtocol = "eum";
                validateOnly = false;
            }};            

            GkeonpremProjectsLocationsBareMetalAdminClustersCreateResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalAdminClustersCreate(req, new GkeonpremProjectsLocationsBareMetalAdminClustersCreateSecurity("dolor", "necessitatibus") {{
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

## gkeonpremProjectsLocationsBareMetalAdminClustersEnroll

Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersEnrollRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersEnrollResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersEnrollSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnrollBareMetalAdminClusterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsBareMetalAdminClustersEnrollRequest req = new GkeonpremProjectsLocationsBareMetalAdminClustersEnrollRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                enrollBareMetalAdminClusterRequest = new EnrollBareMetalAdminClusterRequest() {{
                    bareMetalAdminClusterId = "quasi";
                    localName = "iure";
                    membership = "doloribus";
                }};;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "maxime";
                fields = "deleniti";
                key = "facilis";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "architecto";
                uploadProtocol = "repudiandae";
            }};            

            GkeonpremProjectsLocationsBareMetalAdminClustersEnrollResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalAdminClustersEnroll(req, new GkeonpremProjectsLocationsBareMetalAdminClustersEnrollSecurity("ullam", "expedita") {{
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

## gkeonpremProjectsLocationsBareMetalAdminClustersList

Lists bare metal admin clusters in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersListRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersListResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersListSecurity;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsBareMetalAdminClustersListRequest req = new GkeonpremProjectsLocationsBareMetalAdminClustersListRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "pariatur";
                key = "accusantium";
                oauthToken = "consequuntur";
                pageSize = 508315L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "sunt";
                uploadProtocol = "quo";
                view = GkeonpremProjectsLocationsBareMetalAdminClustersListViewEnum.FULL;
            }};            

            GkeonpremProjectsLocationsBareMetalAdminClustersListResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalAdminClustersList(req, new GkeonpremProjectsLocationsBareMetalAdminClustersListSecurity("pariatur", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBareMetalAdminClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfig

Queries the bare metal admin cluster version config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigRequest req = new GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "ab";
                key = "maiores";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "ipsam";
                upgradeConfigClusterName = "voluptate";
                uploadType = "autem";
                uploadProtocol = "nam";
            }};            

            GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfig(req, new GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigSecurity("eaque", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queryBareMetalAdminVersionConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreate

Creates a new bare metal node pool in a given project, location and Bare Metal cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BareMetalKubeletConfig;
import org.openapis.openapi.models.shared.BareMetalNodeConfig;
import org.openapis.openapi.models.shared.BareMetalNodePoolConfig;
import org.openapis.openapi.models.shared.BareMetalNodePoolConfigOperatingSystemEnum;
import org.openapis.openapi.models.shared.BareMetalNodePoolInput;
import org.openapis.openapi.models.shared.NodeTaint;
import org.openapis.openapi.models.shared.NodeTaintEffectEnum;
import org.openapis.openapi.models.shared.ResourceCondition;
import org.openapis.openapi.models.shared.ResourceConditionStateEnum;
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateRequest req = new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateRequest("nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                bareMetalNodePoolInput = new BareMetalNodePoolInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("fugiat", "amet");
                    }};
                    displayName = "aut";
                    etag = "cumque";
                    name = "Mindy Renner";
                    nodePoolConfig = new BareMetalNodePoolConfig() {{
                        kubeletConfig = new BareMetalKubeletConfig() {{
                            registryBurst = 339404;
                            registryPullQps = 521037;
                            serializeImagePullsDisabled = false;
                        }};;
                        labels = new java.util.HashMap<String, String>() {{
                            put("eaque", "quis");
                            put("nesciunt", "eos");
                        }};
                        nodeConfigs = new org.openapis.openapi.models.shared.BareMetalNodeConfig[]{{
                            add(new BareMetalNodeConfig() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("minus", "quam");
                                }};
                                nodeIp = "dolor";
                            }}),
                        }};
                        operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum.LINUX;
                        taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.NO_EXECUTE;
                                key = "recusandae";
                                value = "omnis";
                            }}),
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                key = "perspiciatis";
                                value = "voluptatem";
                            }}),
                        }};
                    }};;
                    status = new ResourceStatus() {{
                        conditions = new org.openapis.openapi.models.shared.ResourceCondition[]{{
                            add(new ResourceCondition() {{
                                lastTransitionTime = "consequuntur";
                                message = "blanditiis";
                                reason = "error";
                                state = ResourceConditionStateEnum.STATE_UNSPECIFIED;
                                type = "occaecati";
                            }}),
                            add(new ResourceCondition() {{
                                lastTransitionTime = "rerum";
                                message = "adipisci";
                                reason = "asperiores";
                                state = ResourceConditionStateEnum.STATE_UNKNOWN;
                                type = "modi";
                            }}),
                            add(new ResourceCondition() {{
                                lastTransitionTime = "iste";
                                message = "dolorum";
                                reason = "deleniti";
                                state = ResourceConditionStateEnum.STATE_UNKNOWN;
                                type = "provident";
                            }}),
                            add(new ResourceCondition() {{
                                lastTransitionTime = "nobis";
                                message = "libero";
                                reason = "delectus";
                                state = ResourceConditionStateEnum.STATE_TRUE;
                                type = "quos";
                            }}),
                        }};
                        errorMessage = "aliquid";
                    }};;
                }};;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                bareMetalNodePoolId = "dolor";
                callback = "qui";
                fields = "ipsum";
                key = "hic";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "voluptate";
                uploadProtocol = "dignissimos";
                validateOnly = false;
            }};            

            GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreate(req, new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateSecurity("reiciendis", "amet") {{
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

## gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnroll

Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnrollBareMetalNodePoolRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollRequest req = new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                enrollBareMetalNodePoolRequest = new EnrollBareMetalNodePoolRequest() {{
                    bareMetalNodePoolId = "veritatis";
                    validateOnly = false;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "odio";
                key = "quaerat";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "voluptatibus";
                uploadProtocol = "voluptas";
            }};            

            GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnroll(req, new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollSecurity("natus", "eos") {{
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

## gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsList

Lists bare metal node pools in a given project, location and bare metal cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListRequest req = new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "soluta";
                fields = "dolorum";
                key = "iusto";
                oauthToken = "voluptate";
                pageSize = 677082L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "necessitatibus";
                uploadProtocol = "distinctio";
            }};            

            GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsList(req, new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListSecurity("asperiores", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBareMetalNodePoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkeonpremProjectsLocationsBareMetalClustersCreate

Creates a new bare metal cluster in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersCreateRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersCreateResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Authorization;
import org.openapis.openapi.models.shared.BareMetalApiServerArgument;
import org.openapis.openapi.models.shared.BareMetalBgpLbConfig;
import org.openapis.openapi.models.shared.BareMetalBgpPeerConfig;
import org.openapis.openapi.models.shared.BareMetalClusterInput;
import org.openapis.openapi.models.shared.BareMetalClusterOperationsConfig;
import org.openapis.openapi.models.shared.BareMetalControlPlaneConfig;
import org.openapis.openapi.models.shared.BareMetalControlPlaneNodePoolConfig;
import org.openapis.openapi.models.shared.BareMetalDrainedMachine;
import org.openapis.openapi.models.shared.BareMetalDrainingMachine;
import org.openapis.openapi.models.shared.BareMetalIslandModeCidrConfig;
import org.openapis.openapi.models.shared.BareMetalKubeletConfig;
import org.openapis.openapi.models.shared.BareMetalLoadBalancerAddressPool;
import org.openapis.openapi.models.shared.BareMetalLoadBalancerConfig;
import org.openapis.openapi.models.shared.BareMetalLoadBalancerNodePoolConfig;
import org.openapis.openapi.models.shared.BareMetalLvpConfig;
import org.openapis.openapi.models.shared.BareMetalLvpShareConfig;
import org.openapis.openapi.models.shared.BareMetalMachineDrainStatus;
import org.openapis.openapi.models.shared.BareMetalMaintenanceConfig;
import org.openapis.openapi.models.shared.BareMetalMaintenanceStatus;
import org.openapis.openapi.models.shared.BareMetalManualLbConfig;
import org.openapis.openapi.models.shared.BareMetalMetalLbConfig;
import org.openapis.openapi.models.shared.BareMetalMultipleNetworkInterfacesConfig;
import org.openapis.openapi.models.shared.BareMetalNetworkConfig;
import org.openapis.openapi.models.shared.BareMetalNodeAccessConfig;
import org.openapis.openapi.models.shared.BareMetalNodeConfig;
import org.openapis.openapi.models.shared.BareMetalNodePoolConfig;
import org.openapis.openapi.models.shared.BareMetalNodePoolConfigOperatingSystemEnum;
import org.openapis.openapi.models.shared.BareMetalOsEnvironmentConfig;
import org.openapis.openapi.models.shared.BareMetalPortConfig;
import org.openapis.openapi.models.shared.BareMetalProxyConfig;
import org.openapis.openapi.models.shared.BareMetalSecurityConfig;
import org.openapis.openapi.models.shared.BareMetalSrIovConfig;
import org.openapis.openapi.models.shared.BareMetalStorageConfig;
import org.openapis.openapi.models.shared.BareMetalVipConfig;
import org.openapis.openapi.models.shared.BareMetalWorkloadNodeConfig;
import org.openapis.openapi.models.shared.BareMetalWorkloadNodeConfigContainerRuntimeEnum;
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

            GkeonpremProjectsLocationsBareMetalClustersCreateRequest req = new GkeonpremProjectsLocationsBareMetalClustersCreateRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                bareMetalClusterInput = new BareMetalClusterInput() {{
                    adminClusterMembership = "id";
                    annotations = new java.util.HashMap<String, String>() {{
                        put("eius", "aspernatur");
                        put("perferendis", "amet");
                        put("optio", "accusamus");
                        put("ad", "saepe");
                    }};
                    bareMetalVersion = "suscipit";
                    clusterOperations = new BareMetalClusterOperationsConfig() {{
                        enableApplicationLogs = false;
                    }};;
                    controlPlane = new BareMetalControlPlaneConfig() {{
                        apiServerArgs = new org.openapis.openapi.models.shared.BareMetalApiServerArgument[]{{
                            add(new BareMetalApiServerArgument() {{
                                argument = "provident";
                                value = "minima";
                            }}),
                            add(new BareMetalApiServerArgument() {{
                                argument = "repellendus";
                                value = "totam";
                            }}),
                            add(new BareMetalApiServerArgument() {{
                                argument = "similique";
                                value = "alias";
                            }}),
                        }};
                        controlPlaneNodePoolConfig = new BareMetalControlPlaneNodePoolConfig() {{
                            nodePoolConfig = new BareMetalNodePoolConfig() {{
                                kubeletConfig = new BareMetalKubeletConfig() {{
                                    registryBurst = 872651;
                                    registryPullQps = 311860;
                                    serializeImagePullsDisabled = false;
                                }};;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("vel", "quod");
                                    put("officiis", "qui");
                                }};
                                nodeConfigs = new org.openapis.openapi.models.shared.BareMetalNodeConfig[]{{
                                    add(new BareMetalNodeConfig() {{
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("esse", "harum");
                                            put("iusto", "ipsum");
                                            put("quisquam", "tenetur");
                                            put("amet", "tempore");
                                        }};
                                        nodeIp = "accusamus";
                                    }}),
                                    add(new BareMetalNodeConfig() {{
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("enim", "dolorem");
                                            put("sapiente", "totam");
                                        }};
                                        nodeIp = "nihil";
                                    }}),
                                    add(new BareMetalNodeConfig() {{
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("expedita", "neque");
                                        }};
                                        nodeIp = "sed";
                                    }}),
                                }};
                                operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum.OPERATING_SYSTEM_UNSPECIFIED;
                                taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                    add(new NodeTaint() {{
                                        effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                        key = "deserunt";
                                        value = "quam";
                                    }}),
                                    add(new NodeTaint() {{
                                        effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                        key = "incidunt";
                                        value = "qui";
                                    }}),
                                    add(new NodeTaint() {{
                                        effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                        key = "maxime";
                                        value = "pariatur";
                                    }}),
                                }};
                            }};;
                        }};;
                    }};;
                    description = "soluta";
                    loadBalancer = new BareMetalLoadBalancerConfig() {{
                        bgpLbConfig = new BareMetalBgpLbConfig() {{
                            addressPools = new org.openapis.openapi.models.shared.BareMetalLoadBalancerAddressPool[]{{
                                add(new BareMetalLoadBalancerAddressPool() {{
                                    addresses = new String[]{{
                                        add("totam"),
                                        add("incidunt"),
                                        add("aspernatur"),
                                    }};
                                    avoidBuggyIps = false;
                                    manualAssign = false;
                                    pool = "dolores";
                                }}),
                            }};
                            asn = "distinctio";
                            bgpPeerConfigs = new org.openapis.openapi.models.shared.BareMetalBgpPeerConfig[]{{
                                add(new BareMetalBgpPeerConfig() {{
                                    asn = "aliquid";
                                    controlPlaneNodes = new String[]{{
                                        add("molestias"),
                                        add("temporibus"),
                                    }};
                                    ipAddress = "qui";
                                }}),
                                add(new BareMetalBgpPeerConfig() {{
                                    asn = "neque";
                                    controlPlaneNodes = new String[]{{
                                        add("magni"),
                                    }};
                                    ipAddress = "odio";
                                }}),
                                add(new BareMetalBgpPeerConfig() {{
                                    asn = "sunt";
                                    controlPlaneNodes = new String[]{{
                                        add("nam"),
                                        add("hic"),
                                    }};
                                    ipAddress = "voluptatem";
                                }}),
                            }};
                            loadBalancerNodePoolConfig = new BareMetalLoadBalancerNodePoolConfig() {{
                                nodePoolConfig = new BareMetalNodePoolConfig() {{
                                    kubeletConfig = new BareMetalKubeletConfig() {{
                                        registryBurst = 765326;
                                        registryPullQps = 746994;
                                        serializeImagePullsDisabled = false;
                                    }};;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("et", "saepe");
                                        put("ipsum", "veritatis");
                                        put("nobis", "quos");
                                    }};
                                    nodeConfigs = new org.openapis.openapi.models.shared.BareMetalNodeConfig[]{{
                                        add(new BareMetalNodeConfig() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("aperiam", "delectus");
                                                put("dolorem", "dolore");
                                                put("labore", "adipisci");
                                            }};
                                            nodeIp = "dolorum";
                                        }}),
                                        add(new BareMetalNodeConfig() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("quae", "aut");
                                            }};
                                            nodeIp = "quas";
                                        }}),
                                        add(new BareMetalNodeConfig() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("consequatur", "est");
                                                put("repellendus", "porro");
                                                put("doloribus", "ut");
                                                put("facilis", "cupiditate");
                                            }};
                                            nodeIp = "qui";
                                        }}),
                                    }};
                                    operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum.OPERATING_SYSTEM_UNSPECIFIED;
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                            key = "occaecati";
                                            value = "voluptatibus";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_EXECUTE;
                                            key = "vero";
                                            value = "omnis";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                            key = "ipsum";
                                            value = "delectus";
                                        }}),
                                    }};
                                }};;
                            }};;
                        }};;
                        manualLbConfig = new BareMetalManualLbConfig() {{
                            enabled = false;
                        }};;
                        metalLbConfig = new BareMetalMetalLbConfig() {{
                            addressPools = new org.openapis.openapi.models.shared.BareMetalLoadBalancerAddressPool[]{{
                                add(new BareMetalLoadBalancerAddressPool() {{
                                    addresses = new String[]{{
                                        add("vero"),
                                    }};
                                    avoidBuggyIps = false;
                                    manualAssign = false;
                                    pool = "tenetur";
                                }}),
                                add(new BareMetalLoadBalancerAddressPool() {{
                                    addresses = new String[]{{
                                        add("hic"),
                                        add("distinctio"),
                                    }};
                                    avoidBuggyIps = false;
                                    manualAssign = false;
                                    pool = "quod";
                                }}),
                            }};
                            loadBalancerNodePoolConfig = new BareMetalLoadBalancerNodePoolConfig() {{
                                nodePoolConfig = new BareMetalNodePoolConfig() {{
                                    kubeletConfig = new BareMetalKubeletConfig() {{
                                        registryBurst = 486160;
                                        registryPullQps = 630448;
                                        serializeImagePullsDisabled = false;
                                    }};;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("vero", "ducimus");
                                        put("dolore", "quibusdam");
                                        put("illum", "sequi");
                                    }};
                                    nodeConfigs = new org.openapis.openapi.models.shared.BareMetalNodeConfig[]{{
                                        add(new BareMetalNodeConfig() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("aut", "voluptatibus");
                                                put("exercitationem", "nulla");
                                                put("fugit", "porro");
                                                put("maiores", "doloribus");
                                            }};
                                            nodeIp = "iusto";
                                        }}),
                                        add(new BareMetalNodeConfig() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("ducimus", "alias");
                                                put("officia", "tempora");
                                                put("ipsam", "ea");
                                                put("aspernatur", "vel");
                                            }};
                                            nodeIp = "possimus";
                                        }}),
                                        add(new BareMetalNodeConfig() {{
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("ratione", "ex");
                                                put("laudantium", "dicta");
                                            }};
                                            nodeIp = "dolor";
                                        }}),
                                    }};
                                    operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum.LINUX;
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                            key = "nulla";
                                            value = "excepturi";
                                        }}),
                                    }};
                                }};;
                            }};;
                        }};;
                        portConfig = new BareMetalPortConfig() {{
                            controlPlaneLoadBalancerPort = 972920;
                        }};;
                        vipConfig = new BareMetalVipConfig() {{
                            controlPlaneVip = "nostrum";
                            ingressVip = "sapiente";
                        }};;
                    }};;
                    maintenanceConfig = new BareMetalMaintenanceConfig() {{
                        maintenanceAddressCidrBlocks = new String[]{{
                            add("saepe"),
                            add("ea"),
                            add("impedit"),
                            add("corporis"),
                        }};
                    }};;
                    maintenanceStatus = new BareMetalMaintenanceStatus() {{
                        machineDrainStatus = new BareMetalMachineDrainStatus() {{
                            drainedMachines = new org.openapis.openapi.models.shared.BareMetalDrainedMachine[]{{
                                add(new BareMetalDrainedMachine() {{
                                    nodeIp = "aliquid";
                                }}),
                                add(new BareMetalDrainedMachine() {{
                                    nodeIp = "inventore";
                                }}),
                            }};
                            drainingMachines = new org.openapis.openapi.models.shared.BareMetalDrainingMachine[]{{
                                add(new BareMetalDrainingMachine() {{
                                    nodeIp = "ea";
                                    podCount = 775220;
                                }}),
                                add(new BareMetalDrainingMachine() {{
                                    nodeIp = "consectetur";
                                    podCount = 926213;
                                }}),
                            }};
                        }};;
                    }};;
                    name = "Cathy Becker";
                    networkConfig = new BareMetalNetworkConfig() {{
                        advancedNetworking = false;
                        islandModeCidr = new BareMetalIslandModeCidrConfig() {{
                            podAddressCidrBlocks = new String[]{{
                                add("aut"),
                            }};
                            serviceAddressCidrBlocks = new String[]{{
                                add("impedit"),
                                add("aliquam"),
                                add("fugit"),
                            }};
                        }};;
                        multipleNetworkInterfacesConfig = new BareMetalMultipleNetworkInterfacesConfig() {{
                            enabled = false;
                        }};;
                        srIovConfig = new BareMetalSrIovConfig() {{
                            enabled = false;
                        }};;
                    }};;
                    nodeAccessConfig = new BareMetalNodeAccessConfig() {{
                        loginUser = "accusamus";
                    }};;
                    nodeConfig = new BareMetalWorkloadNodeConfig() {{
                        containerRuntime = BareMetalWorkloadNodeConfigContainerRuntimeEnum.CONTAINER_RUNTIME_UNSPECIFIED;
                        maxPodsPerNode = "non";
                    }};;
                    osEnvironmentConfig = new BareMetalOsEnvironmentConfig() {{
                        packageRepoExcluded = false;
                    }};;
                    proxy = new BareMetalProxyConfig() {{
                        noProxy = new String[]{{
                            add("dolorum"),
                        }};
                        uri = "https://striped-deduce.info";
                    }};;
                    securityConfig = new BareMetalSecurityConfig() {{
                        authorization = new Authorization() {{
                            adminUsers = new org.openapis.openapi.models.shared.ClusterUser[]{{
                                add(new ClusterUser() {{
                                    username = "Nia_Lynch37";
                                }}),
                                add(new ClusterUser() {{
                                    username = "Mona25";
                                }}),
                            }};
                        }};;
                    }};;
                    status = new ResourceStatus() {{
                        conditions = new org.openapis.openapi.models.shared.ResourceCondition[]{{
                            add(new ResourceCondition() {{
                                lastTransitionTime = "provident";
                                message = "ipsa";
                                reason = "molestiae";
                                state = ResourceConditionStateEnum.STATE_TRUE;
                                type = "odio";
                            }}),
                        }};
                        errorMessage = "eius";
                    }};;
                    storage = new BareMetalStorageConfig() {{
                        lvpNodeMountsConfig = new BareMetalLvpConfig() {{
                            path = "esse";
                            storageClass = "esse";
                        }};;
                        lvpShareConfig = new BareMetalLvpShareConfig() {{
                            lvpConfig = new BareMetalLvpConfig() {{
                                path = "rem";
                                storageClass = "fuga";
                            }};;
                            sharedPathPvCount = 442015;
                        }};;
                    }};;
                    validationCheck = new ValidationCheckInput() {{
                        option = ValidationCheckOptionEnum.SKIP_VALIDATION_ALL;
                        status = new ValidationCheckStatus() {{
                            result = new org.openapis.openapi.models.shared.ValidationCheckResult[]{{
                                add(new ValidationCheckResult() {{
                                    category = "ut";
                                    description = "eum";
                                    details = "suscipit";
                                    reason = "assumenda";
                                    state = ValidationCheckResultStateEnum.STATE_UNKNOWN;
                                }}),
                                add(new ValidationCheckResult() {{
                                    category = "praesentium";
                                    description = "quisquam";
                                    details = "veritatis";
                                    reason = "ipsa";
                                    state = ValidationCheckResultStateEnum.STATE_FATAL;
                                }}),
                                add(new ValidationCheckResult() {{
                                    category = "quidem";
                                    description = "neque";
                                    details = "quo";
                                    reason = "illum";
                                    state = ValidationCheckResultStateEnum.STATE_FATAL;
                                }}),
                                add(new ValidationCheckResult() {{
                                    category = "fuga";
                                    description = "eius";
                                    details = "eos";
                                    reason = "voluptas";
                                    state = ValidationCheckResultStateEnum.STATE_UNKNOWN;
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                bareMetalClusterId = "tempora";
                callback = "debitis";
                fields = "ipsam";
                key = "aspernatur";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "esse";
                uploadProtocol = "recusandae";
                validateOnly = false;
            }};            

            GkeonpremProjectsLocationsBareMetalClustersCreateResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalClustersCreate(req, new GkeonpremProjectsLocationsBareMetalClustersCreateSecurity("aperiam", "distinctio") {{
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

## gkeonpremProjectsLocationsBareMetalClustersEnroll

Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersEnrollRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersEnrollResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersEnrollSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnrollBareMetalClusterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsBareMetalClustersEnrollRequest req = new GkeonpremProjectsLocationsBareMetalClustersEnrollRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                enrollBareMetalClusterRequest = new EnrollBareMetalClusterRequest() {{
                    adminClusterMembership = "inventore";
                    bareMetalClusterId = "nihil";
                    localName = "totam";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "occaecati";
                key = "commodi";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "deserunt";
                uploadProtocol = "molestiae";
            }};            

            GkeonpremProjectsLocationsBareMetalClustersEnrollResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalClustersEnroll(req, new GkeonpremProjectsLocationsBareMetalClustersEnrollSecurity("accusantium", "porro") {{
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

## gkeonpremProjectsLocationsBareMetalClustersList

Lists bare metal clusters in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersListRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersListResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersListSecurity;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsBareMetalClustersListRequest req = new GkeonpremProjectsLocationsBareMetalClustersListRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "fugit";
                filter = "fuga";
                key = "mollitia";
                oauthToken = "incidunt";
                pageSize = 539224L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "nisi";
                uploadProtocol = "fugit";
                view = GkeonpremProjectsLocationsBareMetalClustersListViewEnum.FULL;
            }};            

            GkeonpremProjectsLocationsBareMetalClustersListResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalClustersList(req, new GkeonpremProjectsLocationsBareMetalClustersListSecurity("consequuntur", "ratione") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBareMetalClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkeonpremProjectsLocationsBareMetalClustersQueryVersionConfig

Queries the bare metal user cluster version config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigRequest req = new GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "et";
                createConfigAdminClusterMembership = "esse";
                createConfigAdminClusterName = "eveniet";
                fields = "accusamus";
                key = "veritatis";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "quod";
                upgradeConfigClusterName = "nam";
                uploadType = "vero";
                uploadProtocol = "aliquid";
            }};            

            GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigResponse res = sdk.projects.gkeonpremProjectsLocationsBareMetalClustersQueryVersionConfig(req, new GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigSecurity("quasi", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queryBareMetalVersionConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkeonpremProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsListRequest req = new GkeonpremProjectsLocationsListRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "minima";
                filter = "distinctio";
                key = "eligendi";
                oauthToken = "sit";
                pageSize = 636061L;
                pageToken = "tempore";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "cumque";
                uploadProtocol = "consequuntur";
            }};            

            GkeonpremProjectsLocationsListResponse res = sdk.projects.gkeonpremProjectsLocationsList(req, new GkeonpremProjectsLocationsListSecurity("consequatur", "minus") {{
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

## gkeonpremProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsOperationsCancelRequest req = new GkeonpremProjectsLocationsOperationsCancelRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("esse", "blanditiis");
                }};
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "quas";
                key = "esse";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "error";
                uploadProtocol = "sint";
            }};            

            GkeonpremProjectsLocationsOperationsCancelResponse res = sdk.projects.gkeonpremProjectsLocationsOperationsCancel(req, new GkeonpremProjectsLocationsOperationsCancelSecurity("pariatur", "possimus") {{
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

## gkeonpremProjectsLocationsVmwareAdminClustersEnroll

Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareAdminClustersEnrollRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareAdminClustersEnrollResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareAdminClustersEnrollSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnrollVmwareAdminClusterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareAdminClustersEnrollRequest req = new GkeonpremProjectsLocationsVmwareAdminClustersEnrollRequest("quia") {{
                dollarXgafv = XgafvEnum.TWO;
                enrollVmwareAdminClusterRequest = new EnrollVmwareAdminClusterRequest() {{
                    localName = "asperiores";
                    membership = "facere";
                    vmwareAdminClusterId = "veritatis";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "similique";
                fields = "culpa";
                key = "aliquid";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "earum";
                uploadProtocol = "vel";
            }};            

            GkeonpremProjectsLocationsVmwareAdminClustersEnrollResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareAdminClustersEnroll(req, new GkeonpremProjectsLocationsVmwareAdminClustersEnrollSecurity("in", "eius") {{
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

## gkeonpremProjectsLocationsVmwareAdminClustersList

Lists VMware admin clusters in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareAdminClustersListRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareAdminClustersListResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareAdminClustersListSecurity;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareAdminClustersListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareAdminClustersListRequest req = new GkeonpremProjectsLocationsVmwareAdminClustersListRequest("libero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "sapiente";
                key = "dicta";
                oauthToken = "ullam";
                pageSize = 443879L;
                pageToken = "ullam";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "aut";
                uploadProtocol = "voluptatum";
                view = GkeonpremProjectsLocationsVmwareAdminClustersListViewEnum.CLUSTER_VIEW_UNSPECIFIED;
            }};            

            GkeonpremProjectsLocationsVmwareAdminClustersListResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareAdminClustersList(req, new GkeonpremProjectsLocationsVmwareAdminClustersListSecurity("quibusdam", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listVmwareAdminClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkeonpremProjectsLocationsVmwareClustersCreate

Creates a new VMware cluster in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersCreateRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersCreateResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Authorization;
import org.openapis.openapi.models.shared.ClusterUser;
import org.openapis.openapi.models.shared.ResourceCondition;
import org.openapis.openapi.models.shared.ResourceConditionStateEnum;
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.ValidationCheckInput;
import org.openapis.openapi.models.shared.ValidationCheckOptionEnum;
import org.openapis.openapi.models.shared.ValidationCheckResult;
import org.openapis.openapi.models.shared.ValidationCheckResultStateEnum;
import org.openapis.openapi.models.shared.ValidationCheckStatus;
import org.openapis.openapi.models.shared.VmwareAAGConfig;
import org.openapis.openapi.models.shared.VmwareAddressPool;
import org.openapis.openapi.models.shared.VmwareAutoRepairConfig;
import org.openapis.openapi.models.shared.VmwareAutoResizeConfig;
import org.openapis.openapi.models.shared.VmwareClusterInput;
import org.openapis.openapi.models.shared.VmwareControlPlaneNodeConfig;
import org.openapis.openapi.models.shared.VmwareControlPlaneV2Config;
import org.openapis.openapi.models.shared.VmwareControlPlaneVsphereConfig;
import org.openapis.openapi.models.shared.VmwareDataplaneV2Config;
import org.openapis.openapi.models.shared.VmwareDhcpIpConfig;
import org.openapis.openapi.models.shared.VmwareF5BigIpConfig;
import org.openapis.openapi.models.shared.VmwareHostConfig;
import org.openapis.openapi.models.shared.VmwareHostIp;
import org.openapis.openapi.models.shared.VmwareIpBlock;
import org.openapis.openapi.models.shared.VmwareLoadBalancerConfig;
import org.openapis.openapi.models.shared.VmwareManualLbConfig;
import org.openapis.openapi.models.shared.VmwareMetalLbConfig;
import org.openapis.openapi.models.shared.VmwareNetworkConfigInput;
import org.openapis.openapi.models.shared.VmwareStaticIpConfig;
import org.openapis.openapi.models.shared.VmwareStorageConfig;
import org.openapis.openapi.models.shared.VmwareVCenterConfig;
import org.openapis.openapi.models.shared.VmwareVipConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersCreateRequest req = new GkeonpremProjectsLocationsVmwareClustersCreateRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                vmwareClusterInput = new VmwareClusterInput() {{
                    adminClusterMembership = "dolorum";
                    annotations = new java.util.HashMap<String, String>() {{
                        put("omnis", "tenetur");
                    }};
                    antiAffinityGroups = new VmwareAAGConfig() {{
                        aagConfigDisabled = false;
                    }};;
                    authorization = new Authorization() {{
                        adminUsers = new org.openapis.openapi.models.shared.ClusterUser[]{{
                            add(new ClusterUser() {{
                                username = "Santino.Bosco";
                            }}),
                        }};
                    }};;
                    autoRepairConfig = new VmwareAutoRepairConfig() {{
                        enabled = false;
                    }};;
                    controlPlaneNode = new VmwareControlPlaneNodeConfig() {{
                        autoResizeConfig = new VmwareAutoResizeConfig() {{
                            enabled = false;
                        }};;
                        cpus = "minima";
                        memory = "veritatis";
                        replicas = "consectetur";
                        vsphereConfig = new VmwareControlPlaneVsphereConfig() {{
                            datastore = "adipisci";
                        }};;
                    }};;
                    dataplaneV2 = new VmwareDataplaneV2Config() {{
                        advancedNetworking = false;
                        dataplaneV2Enabled = false;
                        windowsDataplaneV2Enabled = false;
                    }};;
                    description = "iste";
                    enableControlPlaneV2 = false;
                    etag = "temporibus";
                    loadBalancer = new VmwareLoadBalancerConfig() {{
                        f5Config = new VmwareF5BigIpConfig() {{
                            address = "50546 Karlee Flat";
                            partition = "voluptatem";
                            snatPool = "dolor";
                        }};;
                        manualLbConfig = new VmwareManualLbConfig() {{
                            controlPlaneNodePort = 580152;
                            ingressHttpNodePort = 253191;
                            ingressHttpsNodePort = 771089;
                            konnectivityServerNodePort = 131055;
                        }};;
                        metalLbConfig = new VmwareMetalLbConfig() {{
                            addressPools = new org.openapis.openapi.models.shared.VmwareAddressPool[]{{
                                add(new VmwareAddressPool() {{
                                    addresses = new String[]{{
                                        add("dignissimos"),
                                    }};
                                    avoidBuggyIps = false;
                                    manualAssign = false;
                                    pool = "dicta";
                                }}),
                                add(new VmwareAddressPool() {{
                                    addresses = new String[]{{
                                        add("natus"),
                                        add("velit"),
                                        add("voluptatibus"),
                                        add("voluptas"),
                                    }};
                                    avoidBuggyIps = false;
                                    manualAssign = false;
                                    pool = "asperiores";
                                }}),
                            }};
                        }};;
                        vipConfig = new VmwareVipConfig() {{
                            controlPlaneVip = "aperiam";
                            ingressVip = "ea";
                        }};;
                    }};;
                    name = "Kathryn Sipes";
                    networkConfig = new VmwareNetworkConfigInput() {{
                        controlPlaneV2Config = new VmwareControlPlaneV2Config() {{
                            controlPlaneIpBlock = new VmwareIpBlock() {{
                                gateway = "dignissimos";
                                ips = new org.openapis.openapi.models.shared.VmwareHostIp[]{{
                                    add(new VmwareHostIp() {{
                                        hostname = "wretched-friend.com";
                                        ip = "quaerat";
                                    }}),
                                    add(new VmwareHostIp() {{
                                        hostname = "spanish-show-stopper.biz";
                                        ip = "ab";
                                    }}),
                                    add(new VmwareHostIp() {{
                                        hostname = "essential-poultry.name";
                                        ip = "suscipit";
                                    }}),
                                }};
                                netmask = "velit";
                            }};;
                        }};;
                        dhcpIpConfig = new VmwareDhcpIpConfig() {{
                            enabled = false;
                        }};;
                        hostConfig = new VmwareHostConfig() {{
                            dnsSearchDomains = new String[]{{
                                add("est"),
                                add("recusandae"),
                                add("totam"),
                            }};
                            dnsServers = new String[]{{
                                add("vel"),
                                add("ducimus"),
                                add("quos"),
                                add("vel"),
                            }};
                            ntpServers = new String[]{{
                                add("possimus"),
                                add("facilis"),
                            }};
                        }};;
                        podAddressCidrBlocks = new String[]{{
                            add("commodi"),
                            add("in"),
                            add("corporis"),
                        }};
                        serviceAddressCidrBlocks = new String[]{{
                            add("assumenda"),
                            add("nemo"),
                            add("recusandae"),
                            add("aliquid"),
                        }};
                        staticIpConfig = new VmwareStaticIpConfig() {{
                            ipBlocks = new org.openapis.openapi.models.shared.VmwareIpBlock[]{{
                                add(new VmwareIpBlock() {{
                                    gateway = "cum";
                                    ips = new org.openapis.openapi.models.shared.VmwareHostIp[]{{
                                        add(new VmwareHostIp() {{
                                            hostname = "irritating-fishbone.org";
                                            ip = "facere";
                                        }}),
                                    }};
                                    netmask = "numquam";
                                }}),
                            }};
                        }};;
                    }};;
                    onPremVersion = "doloribus";
                    status = new ResourceStatus() {{
                        conditions = new org.openapis.openapi.models.shared.ResourceCondition[]{{
                            add(new ResourceCondition() {{
                                lastTransitionTime = "reiciendis";
                                message = "quidem";
                                reason = "saepe";
                                state = ResourceConditionStateEnum.STATE_UNKNOWN;
                                type = "dolore";
                            }}),
                            add(new ResourceCondition() {{
                                lastTransitionTime = "sunt";
                                message = "asperiores";
                                reason = "adipisci";
                                state = ResourceConditionStateEnum.STATE_UNSPECIFIED;
                                type = "amet";
                            }}),
                        }};
                        errorMessage = "beatae";
                    }};;
                    storage = new VmwareStorageConfig() {{
                        vsphereCsiDisabled = false;
                    }};;
                    validationCheck = new ValidationCheckInput() {{
                        option = ValidationCheckOptionEnum.SKIP_VALIDATION_CHECK_BLOCKING;
                        status = new ValidationCheckStatus() {{
                            result = new org.openapis.openapi.models.shared.ValidationCheckResult[]{{
                                add(new ValidationCheckResult() {{
                                    category = "debitis";
                                    description = "consectetur";
                                    details = "corporis";
                                    reason = "harum";
                                    state = ValidationCheckResultStateEnum.STATE_FAILURE;
                                }}),
                                add(new ValidationCheckResult() {{
                                    category = "ipsa";
                                    description = "voluptates";
                                    details = "libero";
                                    reason = "vitae";
                                    state = ValidationCheckResultStateEnum.STATE_WARNING;
                                }}),
                                add(new ValidationCheckResult() {{
                                    category = "similique";
                                    description = "tempora";
                                    details = "aspernatur";
                                    reason = "voluptas";
                                    state = ValidationCheckResultStateEnum.STATE_FAILURE;
                                }}),
                                add(new ValidationCheckResult() {{
                                    category = "voluptas";
                                    description = "minima";
                                    details = "nobis";
                                    reason = "dolorum";
                                    state = ValidationCheckResultStateEnum.STATE_FAILURE;
                                }}),
                            }};
                        }};;
                    }};;
                    vcenter = new VmwareVCenterConfig() {{
                        address = "154 Elliott Trail";
                        caCertData = "temporibus";
                        cluster = "ullam";
                        datacenter = "adipisci";
                        datastore = "cum";
                        folder = "blanditiis";
                        resourcePool = "quas";
                    }};;
                    vmTrackingEnabled = false;
                }};;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "corrupti";
                key = "pariatur";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "exercitationem";
                uploadProtocol = "nobis";
                validateOnly = false;
                vmwareClusterId = "sit";
            }};            

            GkeonpremProjectsLocationsVmwareClustersCreateResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersCreate(req, new GkeonpremProjectsLocationsVmwareClustersCreateSecurity("rerum", "sed") {{
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

## gkeonpremProjectsLocationsVmwareClustersEnroll

Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersEnrollRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersEnrollResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersEnrollSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnrollVmwareClusterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersEnrollRequest req = new GkeonpremProjectsLocationsVmwareClustersEnrollRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                enrollVmwareClusterRequest = new EnrollVmwareClusterRequest() {{
                    adminClusterMembership = "asperiores";
                    localName = "facilis";
                    validateOnly = false;
                    vmwareClusterId = "voluptate";
                }};;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolore";
                key = "laborum";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "commodi";
                uploadProtocol = "quidem";
            }};            

            GkeonpremProjectsLocationsVmwareClustersEnrollResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersEnroll(req, new GkeonpremProjectsLocationsVmwareClustersEnrollSecurity("explicabo", "voluptas") {{
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

## gkeonpremProjectsLocationsVmwareClustersList

Lists VMware Clusters in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersListRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersListResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersListSecurity;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersListRequest req = new GkeonpremProjectsLocationsVmwareClustersListRequest("unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "illo";
                filter = "reiciendis";
                key = "perferendis";
                oauthToken = "corrupti";
                pageSize = 979574L;
                pageToken = "incidunt";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "provident";
                uploadProtocol = "eius";
                view = GkeonpremProjectsLocationsVmwareClustersListViewEnum.FULL;
            }};            

            GkeonpremProjectsLocationsVmwareClustersListResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersList(req, new GkeonpremProjectsLocationsVmwareClustersListSecurity("ipsum", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listVmwareClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkeonpremProjectsLocationsVmwareClustersQueryVersionConfig

Queries the VMware user cluster version config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigRequest req = new GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "tempora";
                createConfigAdminClusterMembership = "voluptate";
                createConfigAdminClusterName = "reiciendis";
                fields = "ex";
                key = "sit";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "officiis";
                upgradeConfigClusterName = "praesentium";
                uploadType = "facilis";
                uploadProtocol = "quaerat";
            }};            

            GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersQueryVersionConfig(req, new GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigSecurity("incidunt", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queryVmwareVersionConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreate

Creates a new VMware node pool in a given project, location and VMWare cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodeTaint;
import org.openapis.openapi.models.shared.NodeTaintEffectEnum;
import org.openapis.openapi.models.shared.ResourceCondition;
import org.openapis.openapi.models.shared.ResourceConditionStateEnum;
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.VmwareNodeConfig;
import org.openapis.openapi.models.shared.VmwareNodePoolAutoscalingConfig;
import org.openapis.openapi.models.shared.VmwareNodePoolInput;
import org.openapis.openapi.models.shared.VmwareVsphereConfig;
import org.openapis.openapi.models.shared.VmwareVsphereTag;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                vmwareNodePoolInput = new VmwareNodePoolInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("nobis", "error");
                    }};
                    config = new VmwareNodeConfig() {{
                        bootDiskSizeGb = "veniam";
                        cpus = "minima";
                        enableLoadBalancer = false;
                        image = "recusandae";
                        imageType = "reiciendis";
                        labels = new java.util.HashMap<String, String>() {{
                            put("magni", "aperiam");
                            put("saepe", "numquam");
                            put("veniam", "in");
                            put("officiis", "beatae");
                        }};
                        memoryMb = "laudantium";
                        replicas = "exercitationem";
                        taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                key = "laboriosam";
                                value = "dolorum";
                            }}),
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                key = "error";
                                value = "hic";
                            }}),
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                key = "debitis";
                                value = "neque";
                            }}),
                        }};
                        vsphereConfig = new VmwareVsphereConfig() {{
                            datastore = "dolorum";
                            tags = new org.openapis.openapi.models.shared.VmwareVsphereTag[]{{
                                add(new VmwareVsphereTag() {{
                                    category = "officia";
                                    tag = "dolorum";
                                }}),
                                add(new VmwareVsphereTag() {{
                                    category = "corrupti";
                                    tag = "accusamus";
                                }}),
                            }};
                        }};;
                    }};;
                    displayName = "tempora";
                    etag = "atque";
                    name = "Miss April Stiedemann";
                    nodePoolAutoscaling = new VmwareNodePoolAutoscalingConfig() {{
                        maxReplicas = 299643;
                        minReplicas = 7884;
                    }};;
                    onPremVersion = "esse";
                    status = new ResourceStatus() {{
                        conditions = new org.openapis.openapi.models.shared.ResourceCondition[]{{
                            add(new ResourceCondition() {{
                                lastTransitionTime = "sit";
                                message = "voluptatum";
                                reason = "quas";
                                state = ResourceConditionStateEnum.STATE_UNKNOWN;
                                type = "corporis";
                            }}),
                            add(new ResourceCondition() {{
                                lastTransitionTime = "et";
                                message = "blanditiis";
                                reason = "ex";
                                state = ResourceConditionStateEnum.STATE_UNSPECIFIED;
                                type = "sit";
                            }}),
                        }};
                        errorMessage = "vel";
                    }};;
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "error";
                fields = "consequatur";
                key = "incidunt";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "harum";
                uploadProtocol = "dicta";
                validateOnly = false;
                vmwareNodePoolId = "architecto";
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreate(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateSecurity("occaecati", "labore") {{
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

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDelete

Deletes a single VMware node pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                allowMissing = false;
                alt = AltEnum.PROTO;
                callback = "tenetur";
                etag = "laboriosam";
                fields = "alias";
                ignoreErrors = false;
                key = "amet";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "unde";
                uploadProtocol = "reiciendis";
                validateOnly = false;
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDelete(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteSecurity("provident", "repellendus") {{
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

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnroll

Enrolls a VMware node pool to Anthos On-Prem API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnrollVmwareNodePoolRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                enrollVmwareNodePoolRequest = new EnrollVmwareNodePoolRequest() {{
                    vmwareNodePoolId = "perferendis";
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "reprehenderit";
                fields = "facere";
                key = "fuga";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "veniam";
                uploadProtocol = "voluptatem";
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnroll(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollSecurity("quisquam", "repudiandae") {{
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

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicyRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicyRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "suscipit";
                key = "quidem";
                oauthToken = "maxime";
                optionsRequestedPolicyVersion = 90885L;
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "amet";
                uploadProtocol = "assumenda";
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicyResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicy(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicySecurity("ea", "atque") {{
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

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsList

Lists VMware node pools in a given project, location and VMWare cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "natus";
                fields = "minima";
                key = "aspernatur";
                oauthToken = "ex";
                pageSize = 980581L;
                pageToken = "corrupti";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "error";
                uploadProtocol = "blanditiis";
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsList(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListSecurity("suscipit", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listVmwareNodePoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetRequest("atque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "repellendus";
                key = "labore";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "repudiandae";
                uploadProtocol = "dicta";
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGet(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetSecurity("accusantium", "beatae") {{
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

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.JSON;
                callback = "a";
                fields = "molestias";
                filter = "magnam";
                key = "saepe";
                oauthToken = "consequuntur";
                pageSize = 580107L;
                pageToken = "officiis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "in";
                uploadProtocol = "adipisci";
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsList(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListSecurity("eveniet", "occaecati") {{
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

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatch

Updates the parameters of a single VMware node pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodeTaint;
import org.openapis.openapi.models.shared.NodeTaintEffectEnum;
import org.openapis.openapi.models.shared.ResourceCondition;
import org.openapis.openapi.models.shared.ResourceConditionStateEnum;
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.VmwareNodeConfig;
import org.openapis.openapi.models.shared.VmwareNodePoolAutoscalingConfig;
import org.openapis.openapi.models.shared.VmwareNodePoolInput;
import org.openapis.openapi.models.shared.VmwareVsphereConfig;
import org.openapis.openapi.models.shared.VmwareVsphereTag;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                vmwareNodePoolInput = new VmwareNodePoolInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("quis", "reprehenderit");
                        put("error", "illo");
                        put("corporis", "quidem");
                    }};
                    config = new VmwareNodeConfig() {{
                        bootDiskSizeGb = "eveniet";
                        cpus = "non";
                        enableLoadBalancer = false;
                        image = "vero";
                        imageType = "doloremque";
                        labels = new java.util.HashMap<String, String>() {{
                            put("ipsa", "totam");
                            put("quae", "molestiae");
                        }};
                        memoryMb = "eveniet";
                        replicas = "qui";
                        taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                key = "necessitatibus";
                                value = "ratione";
                            }}),
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                key = "distinctio";
                                value = "voluptatum";
                            }}),
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                key = "aliquam";
                                value = "ad";
                            }}),
                        }};
                        vsphereConfig = new VmwareVsphereConfig() {{
                            datastore = "repellat";
                            tags = new org.openapis.openapi.models.shared.VmwareVsphereTag[]{{
                                add(new VmwareVsphereTag() {{
                                    category = "corporis";
                                    tag = "perspiciatis";
                                }}),
                            }};
                        }};;
                    }};;
                    displayName = "nihil";
                    etag = "mollitia";
                    name = "Linda Wuckert";
                    nodePoolAutoscaling = new VmwareNodePoolAutoscalingConfig() {{
                        maxReplicas = 663866;
                        minReplicas = 327988;
                    }};;
                    onPremVersion = "dolore";
                    status = new ResourceStatus() {{
                        conditions = new org.openapis.openapi.models.shared.ResourceCondition[]{{
                            add(new ResourceCondition() {{
                                lastTransitionTime = "nesciunt";
                                message = "quae";
                                reason = "recusandae";
                                state = ResourceConditionStateEnum.STATE_FALSE;
                                type = "quaerat";
                            }}),
                            add(new ResourceCondition() {{
                                lastTransitionTime = "molestiae";
                                message = "ex";
                                reason = "ut";
                                state = ResourceConditionStateEnum.STATE_FALSE;
                                type = "adipisci";
                            }}),
                            add(new ResourceCondition() {{
                                lastTransitionTime = "debitis";
                                message = "laudantium";
                                reason = "eum";
                                state = ResourceConditionStateEnum.STATE_TRUE;
                                type = "recusandae";
                            }}),
                        }};
                        errorMessage = "esse";
                    }};;
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "reiciendis";
                key = "provident";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "ullam";
                updateMask = "quasi";
                uploadType = "animi";
                uploadProtocol = "nostrum";
                validateOnly = false;
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatch(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchSecurity("mollitia", "provident") {{
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

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicySecurity;
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

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicyRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicyRequest("possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "aliquid";
                                    expression = "accusantium";
                                    location = "repellat";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("in"),
                                    add("nam"),
                                }};
                                role = "earum";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "officia";
                                    expression = "laborum";
                                    location = "placeat";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("molestias"),
                                    add("officiis"),
                                    add("sapiente"),
                                    add("cumque"),
                                }};
                                role = "vitae";
                            }}),
                        }};
                        etag = "rerum";
                        version = 272229;
                    }};;
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "cumque";
                key = "quae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "aspernatur";
                uploadProtocol = "eum";
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicyResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicy(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicySecurity("eius", "rem") {{
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

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("sapiente"),
                    }};
                }};;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "beatae";
                key = "cupiditate";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "soluta";
                uploadProtocol = "hic";
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissions(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsSecurity("illum", "eaque") {{
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

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenroll

Unenrolls a VMware node pool to Anthos On-Prem API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollRequest;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollResponse;
import org.openapis.openapi.models.operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollRequest req = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollRequest("earum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                etag = "porro";
                fields = "suscipit";
                force = false;
                key = "dolorem";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "fuga";
                uploadProtocol = "ratione";
                validateOnly = false;
            }};            

            GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollResponse res = sdk.projects.gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenroll(req, new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollSecurity("animi", "necessitatibus") {{
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
