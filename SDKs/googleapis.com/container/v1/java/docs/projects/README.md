# projects

### Available Operations

* [containerProjectsAggregatedUsableSubnetworksList](#containerprojectsaggregatedusablesubnetworkslist) - Lists subnetworks that are usable for creating clusters in a project.
* [containerProjectsLocationsClustersCompleteIpRotation](#containerprojectslocationsclusterscompleteiprotation) - Completes master IP rotation.
* [containerProjectsLocationsClustersCreate](#containerprojectslocationsclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [containerProjectsLocationsClustersGetJwks](#containerprojectslocationsclustersgetjwks) - Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
* [containerProjectsLocationsClustersList](#containerprojectslocationsclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [containerProjectsLocationsClustersNodePoolsCompleteUpgrade](#containerprojectslocationsclustersnodepoolscompleteupgrade) - CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
* [containerProjectsLocationsClustersNodePoolsCreate](#containerprojectslocationsclustersnodepoolscreate) - Creates a node pool for a cluster.
* [containerProjectsLocationsClustersNodePoolsDelete](#containerprojectslocationsclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [containerProjectsLocationsClustersNodePoolsList](#containerprojectslocationsclustersnodepoolslist) - Lists the node pools for a cluster.
* [containerProjectsLocationsClustersNodePoolsRollback](#containerprojectslocationsclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [containerProjectsLocationsClustersNodePoolsSetAutoscaling](#containerprojectslocationsclustersnodepoolssetautoscaling) - Sets the autoscaling settings for the specified node pool.
* [containerProjectsLocationsClustersNodePoolsSetManagement](#containerprojectslocationsclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [containerProjectsLocationsClustersNodePoolsSetSize](#containerprojectslocationsclustersnodepoolssetsize) - Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [containerProjectsLocationsClustersNodePoolsUpdate](#containerprojectslocationsclustersnodepoolsupdate) - Updates the version and/or image type for the specified node pool.
* [containerProjectsLocationsClustersSetAddons](#containerprojectslocationsclusterssetaddons) - Sets the addons for a specific cluster.
* [containerProjectsLocationsClustersSetLegacyAbac](#containerprojectslocationsclusterssetlegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [containerProjectsLocationsClustersSetLocations](#containerprojectslocationsclusterssetlocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
* [containerProjectsLocationsClustersSetLogging](#containerprojectslocationsclusterssetlogging) - Sets the logging service for a specific cluster.
* [containerProjectsLocationsClustersSetMaintenancePolicy](#containerprojectslocationsclusterssetmaintenancepolicy) - Sets the maintenance policy for a cluster.
* [containerProjectsLocationsClustersSetMasterAuth](#containerprojectslocationsclusterssetmasterauth) - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* [containerProjectsLocationsClustersSetMonitoring](#containerprojectslocationsclusterssetmonitoring) - Sets the monitoring service for a specific cluster.
* [containerProjectsLocationsClustersSetNetworkPolicy](#containerprojectslocationsclusterssetnetworkpolicy) - Enables or disables Network Policy for a cluster.
* [containerProjectsLocationsClustersSetResourceLabels](#containerprojectslocationsclusterssetresourcelabels) - Sets labels on a cluster.
* [containerProjectsLocationsClustersStartIpRotation](#containerprojectslocationsclustersstartiprotation) - Starts master IP rotation.
* [containerProjectsLocationsClustersUpdateMaster](#containerprojectslocationsclustersupdatemaster) - Updates the master for a specific cluster.
* [containerProjectsLocationsClustersWellKnownGetOpenidConfiguration](#containerprojectslocationsclusterswellknowngetopenidconfiguration) - Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
* [containerProjectsLocationsGetServerConfig](#containerprojectslocationsgetserverconfig) - Returns configuration info about the Google Kubernetes Engine service.
* [containerProjectsLocationsOperationsCancel](#containerprojectslocationsoperationscancel) - Cancels the specified operation.
* [containerProjectsLocationsOperationsGet](#containerprojectslocationsoperationsget) - Gets the specified operation.
* [containerProjectsLocationsOperationsList](#containerprojectslocationsoperationslist) - Lists all operations in a project in a specific zone or all zones.
* [containerProjectsZonesClustersAddons](#containerprojectszonesclustersaddons) - Sets the addons for a specific cluster.
* [containerProjectsZonesClustersCompleteIpRotation](#containerprojectszonesclusterscompleteiprotation) - Completes master IP rotation.
* [containerProjectsZonesClustersCreate](#containerprojectszonesclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [containerProjectsZonesClustersDelete](#containerprojectszonesclustersdelete) - Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
* [containerProjectsZonesClustersGet](#containerprojectszonesclustersget) - Gets the details of a specific cluster.
* [containerProjectsZonesClustersLegacyAbac](#containerprojectszonesclusterslegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [containerProjectsZonesClustersList](#containerprojectszonesclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [containerProjectsZonesClustersLocations](#containerprojectszonesclusterslocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
* [containerProjectsZonesClustersLogging](#containerprojectszonesclusterslogging) - Sets the logging service for a specific cluster.
* [containerProjectsZonesClustersMaster](#containerprojectszonesclustersmaster) - Updates the master for a specific cluster.
* [containerProjectsZonesClustersMonitoring](#containerprojectszonesclustersmonitoring) - Sets the monitoring service for a specific cluster.
* [containerProjectsZonesClustersNodePoolsAutoscaling](#containerprojectszonesclustersnodepoolsautoscaling) - Sets the autoscaling settings for the specified node pool.
* [containerProjectsZonesClustersNodePoolsCreate](#containerprojectszonesclustersnodepoolscreate) - Creates a node pool for a cluster.
* [containerProjectsZonesClustersNodePoolsDelete](#containerprojectszonesclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [containerProjectsZonesClustersNodePoolsGet](#containerprojectszonesclustersnodepoolsget) - Retrieves the requested node pool.
* [containerProjectsZonesClustersNodePoolsList](#containerprojectszonesclustersnodepoolslist) - Lists the node pools for a cluster.
* [containerProjectsZonesClustersNodePoolsRollback](#containerprojectszonesclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [containerProjectsZonesClustersNodePoolsSetManagement](#containerprojectszonesclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [containerProjectsZonesClustersNodePoolsSetSize](#containerprojectszonesclustersnodepoolssetsize) - Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [containerProjectsZonesClustersNodePoolsUpdate](#containerprojectszonesclustersnodepoolsupdate) - Updates the version and/or image type for the specified node pool.
* [containerProjectsZonesClustersResourceLabels](#containerprojectszonesclustersresourcelabels) - Sets labels on a cluster.
* [containerProjectsZonesClustersSetMaintenancePolicy](#containerprojectszonesclusterssetmaintenancepolicy) - Sets the maintenance policy for a cluster.
* [containerProjectsZonesClustersSetMasterAuth](#containerprojectszonesclusterssetmasterauth) - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* [containerProjectsZonesClustersSetNetworkPolicy](#containerprojectszonesclusterssetnetworkpolicy) - Enables or disables Network Policy for a cluster.
* [containerProjectsZonesClustersStartIpRotation](#containerprojectszonesclustersstartiprotation) - Starts master IP rotation.
* [containerProjectsZonesClustersUpdate](#containerprojectszonesclustersupdate) - Updates the settings of a specific cluster.
* [containerProjectsZonesGetServerconfig](#containerprojectszonesgetserverconfig) - Returns configuration info about the Google Kubernetes Engine service.
* [containerProjectsZonesOperationsCancel](#containerprojectszonesoperationscancel) - Cancels the specified operation.
* [containerProjectsZonesOperationsGet](#containerprojectszonesoperationsget) - Gets the specified operation.
* [containerProjectsZonesOperationsList](#containerprojectszonesoperationslist) - Lists all operations in a project in a specific zone or all zones.

## containerProjectsAggregatedUsableSubnetworksList

Lists subnetworks that are usable for creating clusters in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListRequest;
import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListResponse;
import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsAggregatedUsableSubnetworksListRequest req = new ContainerProjectsAggregatedUsableSubnetworksListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            ContainerProjectsAggregatedUsableSubnetworksListResponse res = sdk.projects.containerProjectsAggregatedUsableSubnetworksList(req, new ContainerProjectsAggregatedUsableSubnetworksListSecurity("veritatis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUsableSubnetworksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsLocationsClustersCompleteIpRotation

Completes master IP rotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersCompleteIpRotationRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersCompleteIpRotationResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersCompleteIpRotationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompleteIPRotationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersCompleteIpRotationRequest req = new ContainerProjectsLocationsClustersCompleteIpRotationRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                completeIPRotationRequest = new CompleteIPRotationRequest() {{
                    clusterId = "repellendus";
                    name = "Cedric Connelly";
                    projectId = "maiores";
                    zone = "molestiae";
                }};;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                key = "porro";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "nam";
                uploadProtocol = "officia";
            }};            

            ContainerProjectsLocationsClustersCompleteIpRotationResponse res = sdk.projects.containerProjectsLocationsClustersCompleteIpRotation(req, new ContainerProjectsLocationsClustersCompleteIpRotationSecurity("occaecati", "fugit") {{
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

## containerProjectsLocationsClustersCreate

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersCreateRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersCreateResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersCreateSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AdditionalPodRangesConfig;
import org.openapis.openapi.models.shared.AddonsConfig;
import org.openapis.openapi.models.shared.AdvancedMachineFeatures;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthenticatorGroupsConfig;
import org.openapis.openapi.models.shared.AutoUpgradeOptions;
import org.openapis.openapi.models.shared.Autopilot;
import org.openapis.openapi.models.shared.AutoprovisioningNodePoolDefaults;
import org.openapis.openapi.models.shared.BigQueryDestination;
import org.openapis.openapi.models.shared.BinaryAuthorization;
import org.openapis.openapi.models.shared.BinaryAuthorizationEvaluationModeEnum;
import org.openapis.openapi.models.shared.BlueGreenInfo;
import org.openapis.openapi.models.shared.BlueGreenInfoPhaseEnum;
import org.openapis.openapi.models.shared.BlueGreenSettings;
import org.openapis.openapi.models.shared.CidrBlock;
import org.openapis.openapi.models.shared.ClientCertificateConfig;
import org.openapis.openapi.models.shared.CloudRunConfig;
import org.openapis.openapi.models.shared.CloudRunConfigLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.ClusterAutoscaling;
import org.openapis.openapi.models.shared.ClusterAutoscalingAutoscalingProfileEnum;
import org.openapis.openapi.models.shared.ClusterInput;
import org.openapis.openapi.models.shared.ClusterStatusEnum;
import org.openapis.openapi.models.shared.ConfidentialNodes;
import org.openapis.openapi.models.shared.ConfigConnectorConfig;
import org.openapis.openapi.models.shared.ConsumptionMeteringConfig;
import org.openapis.openapi.models.shared.CostManagementConfig;
import org.openapis.openapi.models.shared.CreateClusterRequestInput;
import org.openapis.openapi.models.shared.DNSConfig;
import org.openapis.openapi.models.shared.DNSConfigClusterDNSEnum;
import org.openapis.openapi.models.shared.DNSConfigClusterDNSScopeEnum;
import org.openapis.openapi.models.shared.DailyMaintenanceWindow;
import org.openapis.openapi.models.shared.DatabaseEncryption;
import org.openapis.openapi.models.shared.DatabaseEncryptionStateEnum;
import org.openapis.openapi.models.shared.DefaultSnatStatus;
import org.openapis.openapi.models.shared.DnsCacheConfig;
import org.openapis.openapi.models.shared.EphemeralStorageLocalSsdConfig;
import org.openapis.openapi.models.shared.FastSocket;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterEventTypeEnum;
import org.openapis.openapi.models.shared.Fleet;
import org.openapis.openapi.models.shared.GPUSharingConfig;
import org.openapis.openapi.models.shared.GPUSharingConfigGPUSharingStrategyEnum;
import org.openapis.openapi.models.shared.GatewayAPIConfig;
import org.openapis.openapi.models.shared.GatewayAPIConfigChannelEnum;
import org.openapis.openapi.models.shared.GcePersistentDiskCsiDriverConfig;
import org.openapis.openapi.models.shared.GcfsConfig;
import org.openapis.openapi.models.shared.GcpFilestoreCsiDriverConfig;
import org.openapis.openapi.models.shared.GkeBackupAgentConfig;
import org.openapis.openapi.models.shared.HorizontalPodAutoscaling;
import org.openapis.openapi.models.shared.HttpLoadBalancing;
import org.openapis.openapi.models.shared.IPAllocationPolicyInput;
import org.openapis.openapi.models.shared.IPAllocationPolicyIpv6AccessTypeEnum;
import org.openapis.openapi.models.shared.IPAllocationPolicyStackTypeEnum;
import org.openapis.openapi.models.shared.IdentityServiceConfig;
import org.openapis.openapi.models.shared.KubernetesDashboard;
import org.openapis.openapi.models.shared.LegacyAbac;
import org.openapis.openapi.models.shared.LinuxNodeConfig;
import org.openapis.openapi.models.shared.LinuxNodeConfigCgroupModeEnum;
import org.openapis.openapi.models.shared.LocalNvmeSsdBlockConfig;
import org.openapis.openapi.models.shared.LoggingComponentConfig;
import org.openapis.openapi.models.shared.LoggingComponentConfigEnableComponentsEnum;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfigVariantEnum;
import org.openapis.openapi.models.shared.MaintenanceExclusionOptions;
import org.openapis.openapi.models.shared.MaintenanceExclusionOptionsScopeEnum;
import org.openapis.openapi.models.shared.MaintenancePolicy;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.ManagedPrometheusConfig;
import org.openapis.openapi.models.shared.MasterAuth;
import org.openapis.openapi.models.shared.MasterAuthorizedNetworksConfig;
import org.openapis.openapi.models.shared.MaxPodsConstraint;
import org.openapis.openapi.models.shared.MeshCertificates;
import org.openapis.openapi.models.shared.MonitoringComponentConfig;
import org.openapis.openapi.models.shared.MonitoringComponentConfigEnableComponentsEnum;
import org.openapis.openapi.models.shared.MonitoringConfig;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.NetworkConfigDatapathProviderEnum;
import org.openapis.openapi.models.shared.NetworkConfigPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.NetworkPolicy;
import org.openapis.openapi.models.shared.NetworkPolicyConfig;
import org.openapis.openapi.models.shared.NetworkPolicyProviderEnum;
import org.openapis.openapi.models.shared.NetworkTags;
import org.openapis.openapi.models.shared.NodeConfig;
import org.openapis.openapi.models.shared.NodeConfigDefaults;
import org.openapis.openapi.models.shared.NodeKubeletConfig;
import org.openapis.openapi.models.shared.NodeManagement;
import org.openapis.openapi.models.shared.NodeNetworkConfig;
import org.openapis.openapi.models.shared.NodePool;
import org.openapis.openapi.models.shared.NodePoolAutoConfig;
import org.openapis.openapi.models.shared.NodePoolAutoscaling;
import org.openapis.openapi.models.shared.NodePoolAutoscalingLocationPolicyEnum;
import org.openapis.openapi.models.shared.NodePoolDefaults;
import org.openapis.openapi.models.shared.NodePoolLoggingConfig;
import org.openapis.openapi.models.shared.NodePoolStatusEnum;
import org.openapis.openapi.models.shared.NodeTaint;
import org.openapis.openapi.models.shared.NodeTaintEffectEnum;
import org.openapis.openapi.models.shared.NotificationConfig;
import org.openapis.openapi.models.shared.PlacementPolicy;
import org.openapis.openapi.models.shared.PlacementPolicyTypeEnum;
import org.openapis.openapi.models.shared.PodCIDROverprovisionConfig;
import org.openapis.openapi.models.shared.PrivateClusterConfig;
import org.openapis.openapi.models.shared.PrivateClusterMasterGlobalAccessConfig;
import org.openapis.openapi.models.shared.PubSub;
import org.openapis.openapi.models.shared.RecurringTimeWindow;
import org.openapis.openapi.models.shared.ReleaseChannel;
import org.openapis.openapi.models.shared.ReleaseChannelChannelEnum;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.ResourceLimit;
import org.openapis.openapi.models.shared.ResourceUsageExportConfig;
import org.openapis.openapi.models.shared.SandboxConfig;
import org.openapis.openapi.models.shared.SandboxConfigTypeEnum;
import org.openapis.openapi.models.shared.ServiceExternalIPsConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.ShieldedNodes;
import org.openapis.openapi.models.shared.StandardRolloutPolicy;
import org.openapis.openapi.models.shared.StatusCondition;
import org.openapis.openapi.models.shared.StatusConditionCanonicalCodeEnum;
import org.openapis.openapi.models.shared.StatusConditionCodeEnum;
import org.openapis.openapi.models.shared.TimeWindow;
import org.openapis.openapi.models.shared.UpdateInfo;
import org.openapis.openapi.models.shared.UpgradeSettings;
import org.openapis.openapi.models.shared.UpgradeSettingsStrategyEnum;
import org.openapis.openapi.models.shared.VerticalPodAutoscaling;
import org.openapis.openapi.models.shared.VirtualNIC;
import org.openapis.openapi.models.shared.WindowsNodeConfig;
import org.openapis.openapi.models.shared.WindowsNodeConfigOsVersionEnum;
import org.openapis.openapi.models.shared.WorkloadIdentityConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfigModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersCreateRequest req = new ContainerProjectsLocationsClustersCreateRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                createClusterRequestInput = new CreateClusterRequestInput() {{
                    cluster = new ClusterInput() {{
                        addonsConfig = new AddonsConfig() {{
                            cloudRunConfig = new CloudRunConfig() {{
                                disabled = false;
                                loadBalancerType = CloudRunConfigLoadBalancerTypeEnum.LOAD_BALANCER_TYPE_INTERNAL;
                            }};;
                            configConnectorConfig = new ConfigConnectorConfig() {{
                                enabled = false;
                            }};;
                            dnsCacheConfig = new DnsCacheConfig() {{
                                enabled = false;
                            }};;
                            gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig() {{
                                enabled = false;
                            }};;
                            gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig() {{
                                enabled = false;
                            }};;
                            gkeBackupAgentConfig = new GkeBackupAgentConfig() {{
                                enabled = false;
                            }};;
                            horizontalPodAutoscaling = new HorizontalPodAutoscaling() {{
                                disabled = false;
                            }};;
                            httpLoadBalancing = new HttpLoadBalancing() {{
                                disabled = false;
                            }};;
                            kubernetesDashboard = new KubernetesDashboard() {{
                                disabled = false;
                            }};;
                            networkPolicyConfig = new NetworkPolicyConfig() {{
                                disabled = false;
                            }};;
                        }};;
                        authenticatorGroupsConfig = new AuthenticatorGroupsConfig() {{
                            enabled = false;
                            securityGroup = "totam";
                        }};;
                        autopilot = new Autopilot() {{
                            enabled = false;
                        }};;
                        autoscaling = new ClusterAutoscaling() {{
                            autoprovisioningLocations = new String[]{{
                                add("commodi"),
                            }};
                            autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults() {{
                                bootDiskKmsKey = "molestiae";
                                diskSizeGb = 264555;
                                diskType = "qui";
                                imageType = "impedit";
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "cum";
                                        description = "esse";
                                    }};;
                                }};;
                                minCpuPlatform = "ipsum";
                                oauthScopes = new String[]{{
                                    add("aspernatur"),
                                    add("perferendis"),
                                    add("ad"),
                                }};
                                serviceAccount = "natus";
                                shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                    enableIntegrityMonitoring = false;
                                    enableSecureBoot = false;
                                }};;
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "sed";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 612096;
                                            batchPercentage = 2223.21;
                                            batchSoakDuration = "natus";
                                        }};;
                                    }};;
                                    maxSurge = 386489;
                                    maxUnavailable = 943749;
                                    strategy = UpgradeSettingsStrategyEnum.SURGE;
                                }};;
                            }};;
                            autoscalingProfile = ClusterAutoscalingAutoscalingProfileEnum.BALANCED;
                            enableNodeAutoprovisioning = false;
                            resourceLimits = new org.openapis.openapi.models.shared.ResourceLimit[]{{
                                add(new ResourceLimit() {{
                                    maximum = "corporis";
                                    minimum = "iste";
                                    resourceType = "iure";
                                }}),
                                add(new ResourceLimit() {{
                                    maximum = "saepe";
                                    minimum = "quidem";
                                    resourceType = "architecto";
                                }}),
                            }};
                        }};;
                        binaryAuthorization = new BinaryAuthorization() {{
                            enabled = false;
                            evaluationMode = BinaryAuthorizationEvaluationModeEnum.EVALUATION_MODE_UNSPECIFIED;
                        }};;
                        clusterIpv4Cidr = "reiciendis";
                        conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.ABORTED;
                                code = StatusConditionCodeEnum.SET_BY_OPERATOR;
                                message = "dolores";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.INVALID_ARGUMENT;
                                code = StatusConditionCodeEnum.GKE_SERVICE_ACCOUNT_DELETED;
                                message = "explicabo";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.OUT_OF_RANGE;
                                code = StatusConditionCodeEnum.GKE_SERVICE_ACCOUNT_DELETED;
                                message = "omnis";
                            }}),
                        }};
                        confidentialNodes = new ConfidentialNodes() {{
                            enabled = false;
                        }};;
                        costManagementConfig = new CostManagementConfig() {{
                            enabled = false;
                        }};;
                        createTime = "nemo";
                        currentMasterVersion = "minima";
                        currentNodeCount = 570197;
                        currentNodeVersion = "accusantium";
                        databaseEncryption = new DatabaseEncryption() {{
                            keyName = "iure";
                            state = DatabaseEncryptionStateEnum.ENCRYPTED;
                        }};;
                        defaultMaxPodsConstraint = new MaxPodsConstraint() {{
                            maxPodsPerNode = "doloribus";
                        }};;
                        description = "sapiente";
                        enableKubernetesAlpha = false;
                        enableTpu = false;
                        endpoint = "architecto";
                        etag = "mollitia";
                        expireTime = "dolorem";
                        fleet = new Fleet() {{
                            membership = "culpa";
                            preRegistered = false;
                            project = "consequuntur";
                        }};;
                        identityServiceConfig = new IdentityServiceConfig() {{
                            enabled = false;
                        }};;
                        initialClusterVersion = "repellat";
                        initialNodeCount = 653108;
                        instanceGroupUrls = new String[]{{
                            add("numquam"),
                            add("commodi"),
                            add("quam"),
                        }};
                        ipAllocationPolicy = new IPAllocationPolicyInput() {{
                            additionalPodRangesConfig = new AdditionalPodRangesConfig() {{
                                podRangeNames = new String[]{{
                                    add("velit"),
                                    add("error"),
                                }};
                            }};;
                            clusterIpv4Cidr = "quia";
                            clusterIpv4CidrBlock = "quis";
                            clusterSecondaryRangeName = "vitae";
                            createSubnetwork = false;
                            ipv6AccessType = IPAllocationPolicyIpv6AccessTypeEnum.EXTERNAL;
                            nodeIpv4Cidr = "animi";
                            nodeIpv4CidrBlock = "enim";
                            podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                disable = false;
                            }};;
                            servicesIpv4Cidr = "odit";
                            servicesIpv4CidrBlock = "quo";
                            servicesSecondaryRangeName = "sequi";
                            stackType = IPAllocationPolicyStackTypeEnum.IPV4_IPV6;
                            subnetworkName = "ipsam";
                            tpuIpv4CidrBlock = "id";
                            useIpAliases = false;
                            useRoutes = false;
                        }};;
                        labelFingerprint = "possimus";
                        legacyAbac = new LegacyAbac() {{
                            enabled = false;
                        }};;
                        location = "aut";
                        locations = new String[]{{
                            add("error"),
                        }};
                        loggingConfig = new LoggingConfig() {{
                            componentConfig = new LoggingComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.LoggingComponentConfigEnableComponentsEnum[]{{
                                    add(LoggingComponentConfigEnableComponentsEnum.SCHEDULER),
                                    add(LoggingComponentConfigEnableComponentsEnum.COMPONENT_UNSPECIFIED),
                                    add(LoggingComponentConfigEnableComponentsEnum.CONTROLLER_MANAGER),
                                    add(LoggingComponentConfigEnableComponentsEnum.CONTROLLER_MANAGER),
                                }};
                            }};;
                        }};;
                        loggingService = "vero";
                        maintenancePolicy = new MaintenancePolicy() {{
                            resourceVersion = "nihil";
                            window = new MaintenanceWindow() {{
                                dailyMaintenanceWindow = new DailyMaintenanceWindow() {{
                                    duration = "praesentium";
                                    startTime = "voluptatibus";
                                }};;
                                maintenanceExclusions = new java.util.HashMap<String, org.openapis.openapi.models.shared.TimeWindow>() {{
                                    put("omnis", new TimeWindow() {{
                                        endTime = "voluptate";
                                        maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                            scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_OR_NODE_UPGRADES;
                                        }};
                                        startTime = "perferendis";
                                    }});
                                }};
                                recurringWindow = new RecurringTimeWindow() {{
                                    recurrence = "doloremque";
                                    window = new TimeWindow() {{
                                        endTime = "reprehenderit";
                                        maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                            scope = MaintenanceExclusionOptionsScopeEnum.NO_UPGRADES;
                                        }};;
                                        startTime = "maiores";
                                    }};;
                                }};;
                            }};;
                        }};;
                        masterAuth = new MasterAuth() {{
                            clientCertificate = "dicta";
                            clientCertificateConfig = new ClientCertificateConfig() {{
                                issueClientCertificate = false;
                            }};;
                            clientKey = "corporis";
                            clusterCaCertificate = "dolore";
                            password = "iusto";
                            username = "Birdie88";
                        }};;
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "repudiandae";
                                    displayName = "quae";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "ipsum";
                                    displayName = "quidem";
                                }}),
                            }};
                            enabled = false;
                            gcpPublicCidrsAccessEnabled = false;
                        }};;
                        meshCertificates = new MeshCertificates() {{
                            enableCertificates = false;
                        }};;
                        monitoringConfig = new MonitoringConfig() {{
                            componentConfig = new MonitoringComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.MonitoringComponentConfigEnableComponentsEnum[]{{
                                    add(MonitoringComponentConfigEnableComponentsEnum.APISERVER),
                                    add(MonitoringComponentConfigEnableComponentsEnum.CONTROLLER_MANAGER),
                                    add(MonitoringComponentConfigEnableComponentsEnum.SYSTEM_COMPONENTS),
                                }};
                            }};;
                            managedPrometheusConfig = new ManagedPrometheusConfig() {{
                                enabled = false;
                            }};;
                        }};;
                        monitoringService = "praesentium";
                        name = "Grady Botsford";
                        network = "veritatis";
                        networkConfig = new NetworkConfig() {{
                            datapathProvider = NetworkConfigDatapathProviderEnum.ADVANCED_DATAPATH;
                            defaultSnatStatus = new DefaultSnatStatus() {{
                                disabled = false;
                            }};;
                            dnsConfig = new DNSConfig() {{
                                clusterDns = DNSConfigClusterDNSEnum.PROVIDER_UNSPECIFIED;
                                clusterDnsDomain = "enim";
                                clusterDnsScope = DNSConfigClusterDNSScopeEnum.DNS_SCOPE_UNSPECIFIED;
                            }};;
                            enableIntraNodeVisibility = false;
                            enableL4ilbSubsetting = false;
                            gatewayApiConfig = new GatewayAPIConfig() {{
                                channel = GatewayAPIConfigChannelEnum.CHANNEL_EXPERIMENTAL;
                            }};;
                            network = "quibusdam";
                            privateIpv6GoogleAccess = NetworkConfigPrivateIpv6GoogleAccessEnum.PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED;
                            serviceExternalIpsConfig = new ServiceExternalIPsConfig() {{
                                enabled = false;
                            }};;
                            subnetwork = "deserunt";
                        }};;
                        networkPolicy = new NetworkPolicy() {{
                            enabled = false;
                            provider = NetworkPolicyProviderEnum.CALICO;
                        }};;
                        nodeConfig = new NodeConfig() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "labore";
                                    acceleratorType = "modi";
                                    gpuPartitionSize = "qui";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                        maxSharedClientsPerGpu = "cupiditate";
                                    }};
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "quos";
                                    acceleratorType = "perferendis";
                                    gpuPartitionSize = "magni";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                        maxSharedClientsPerGpu = "ipsam";
                                    }};
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "alias";
                                    acceleratorType = "fugit";
                                    gpuPartitionSize = "dolorum";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                        maxSharedClientsPerGpu = "tempora";
                                    }};
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "facilis";
                                    acceleratorType = "tempore";
                                    gpuPartitionSize = "labore";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                        maxSharedClientsPerGpu = "eum";
                                    }};
                                }}),
                            }};
                            advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                threadsPerCore = "non";
                            }};;
                            bootDiskKmsKey = "eligendi";
                            confidentialNodes = new ConfidentialNodes() {{
                                enabled = false;
                            }};;
                            diskSizeGb = 576157;
                            diskType = "aliquid";
                            ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                localSsdCount = 592042;
                            }};;
                            fastSocket = new FastSocket() {{
                                enabled = false;
                            }};;
                            gcfsConfig = new GcfsConfig() {{
                                enabled = false;
                            }};;
                            gvnic = new VirtualNIC() {{
                                enabled = false;
                            }};;
                            imageType = "necessitatibus";
                            kubeletConfig = new NodeKubeletConfig() {{
                                cpuCfsQuota = false;
                                cpuCfsQuotaPeriod = "sint";
                                cpuManagerPolicy = "officia";
                                podPidsLimit = "dolor";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("a", "dolorum");
                                put("in", "in");
                                put("illum", "maiores");
                                put("rerum", "dicta");
                            }};
                            linuxNodeConfig = new LinuxNodeConfig() {{
                                cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_UNSPECIFIED;
                                sysctls = new java.util.HashMap<String, String>() {{
                                    put("facere", "ea");
                                    put("aliquid", "laborum");
                                    put("accusamus", "non");
                                    put("occaecati", "enim");
                                }};
                            }};;
                            localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                localSsdCount = 881736;
                            }};;
                            localSsdCount = 965417;
                            loggingConfig = new NodePoolLoggingConfig() {{
                                variantConfig = new LoggingVariantConfig() {{
                                    variant = LoggingVariantConfigVariantEnum.MAX_THROUGHPUT;
                                }};;
                            }};;
                            machineType = "provident";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("id", "blanditiis");
                                put("deleniti", "sapiente");
                                put("amet", "deserunt");
                            }};
                            minCpuPlatform = "nisi";
                            nodeGroup = "vel";
                            oauthScopes = new String[]{{
                                add("omnis"),
                                add("molestiae"),
                                add("perferendis"),
                            }};
                            preemptible = false;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                                key = "magnam";
                                values = new String[]{{
                                    add("id"),
                                    add("labore"),
                                    add("labore"),
                                }};
                            }};;
                            resourceLabels = new java.util.HashMap<String, String>() {{
                                put("natus", "nobis");
                                put("eum", "vero");
                            }};
                            sandboxConfig = new SandboxConfig() {{
                                type = SandboxConfigTypeEnum.UNSPECIFIED;
                            }};;
                            serviceAccount = "architecto";
                            shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                            }};;
                            spot = false;
                            tags = new String[]{{
                                add("et"),
                                add("excepturi"),
                            }};
                            taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                    key = "quos";
                                    value = "sint";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                    key = "mollitia";
                                    value = "reiciendis";
                                }}),
                            }};
                            windowsNodeConfig = new WindowsNodeConfig() {{
                                osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2019;
                            }};;
                            workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                mode = WorkloadMetadataConfigModeEnum.MODE_UNSPECIFIED;
                            }};;
                        }};;
                        nodeIpv4CidrSize = 431418;
                        nodePoolAutoConfig = new NodePoolAutoConfig() {{
                            networkTags = new NetworkTags() {{
                                tags = new String[]{{
                                    add("necessitatibus"),
                                }};
                            }};;
                        }};;
                        nodePoolDefaults = new NodePoolDefaults() {{
                            nodeConfigDefaults = new NodeConfigDefaults() {{
                                gcfsConfig = new GcfsConfig() {{
                                    enabled = false;
                                }};;
                                loggingConfig = new NodePoolLoggingConfig() {{
                                    variantConfig = new LoggingVariantConfig() {{
                                        variant = LoggingVariantConfigVariantEnum.VARIANT_UNSPECIFIED;
                                    }};;
                                }};;
                            }};;
                        }};;
                        nodePools = new org.openapis.openapi.models.shared.NodePool[]{{
                            add(new NodePool() {{
                                autoscaling = new NodePoolAutoscaling() {{
                                    autoprovisioned = false;
                                    enabled = false;
                                    locationPolicy = NodePoolAutoscalingLocationPolicyEnum.LOCATION_POLICY_UNSPECIFIED;
                                    maxNodeCount = 435865;
                                    minNodeCount = 984043;
                                    totalMaxNodeCount = 891924;
                                    totalMinNodeCount = 260341;
                                }};
                                conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.RESOURCE_EXHAUSTED;
                                        code = StatusConditionCodeEnum.SET_BY_OPERATOR;
                                        message = "in";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.CANCELLED;
                                        code = StatusConditionCodeEnum.UNKNOWN;
                                        message = "repudiandae";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.NOT_FOUND;
                                        code = StatusConditionCodeEnum.SET_BY_OPERATOR;
                                        message = "nihil";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.DATA_LOSS;
                                        code = StatusConditionCodeEnum.CLOUD_KMS_KEY_ERROR;
                                        message = "sed";
                                    }}),
                                }};
                                config = new NodeConfig() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "pariatur";
                                            acceleratorType = "accusantium";
                                            gpuPartitionSize = "consequuntur";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "natus";
                                            }};
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "magni";
                                            acceleratorType = "sunt";
                                            gpuPartitionSize = "quo";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "pariatur";
                                            }};
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "maxime";
                                            acceleratorType = "ea";
                                            gpuPartitionSize = "excepturi";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                                maxSharedClientsPerGpu = "ea";
                                            }};
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "accusantium";
                                            acceleratorType = "ab";
                                            gpuPartitionSize = "maiores";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "ipsam";
                                            }};
                                        }}),
                                    }};
                                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                        threadsPerCore = "voluptate";
                                    }};
                                    bootDiskKmsKey = "autem";
                                    confidentialNodes = new ConfidentialNodes() {{
                                        enabled = false;
                                    }};
                                    diskSizeGb = 722056;
                                    diskType = "eaque";
                                    ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                        localSsdCount = 866383;
                                    }};
                                    fastSocket = new FastSocket() {{
                                        enabled = false;
                                    }};
                                    gcfsConfig = new GcfsConfig() {{
                                        enabled = false;
                                    }};
                                    gvnic = new VirtualNIC() {{
                                        enabled = false;
                                    }};
                                    imageType = "nemo";
                                    kubeletConfig = new NodeKubeletConfig() {{
                                        cpuCfsQuota = false;
                                        cpuCfsQuotaPeriod = "voluptatibus";
                                        cpuManagerPolicy = "perferendis";
                                        podPidsLimit = "fugiat";
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("aut", "cumque");
                                    }};
                                    linuxNodeConfig = new LinuxNodeConfig() {{
                                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V1;
                                        sysctls = new java.util.HashMap<String, String>() {{
                                            put("libero", "nobis");
                                            put("dolores", "quis");
                                            put("totam", "dignissimos");
                                            put("eaque", "quis");
                                        }};
                                    }};
                                    localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                        localSsdCount = 199996;
                                    }};
                                    localSsdCount = 179490;
                                    loggingConfig = new NodePoolLoggingConfig() {{
                                        variantConfig = new LoggingVariantConfig() {{
                                            variant = LoggingVariantConfigVariantEnum.VARIANT_UNSPECIFIED;
                                        }};
                                    }};
                                    machineType = "dolores";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("quam", "dolor");
                                        put("vero", "nostrum");
                                        put("hic", "recusandae");
                                        put("omnis", "facilis");
                                    }};
                                    minCpuPlatform = "perspiciatis";
                                    nodeGroup = "voluptatem";
                                    oauthScopes = new String[]{{
                                        add("consequuntur"),
                                        add("blanditiis"),
                                        add("error"),
                                        add("eaque"),
                                    }};
                                    preemptible = false;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                                        key = "rerum";
                                        values = new String[]{{
                                            add("asperiores"),
                                        }};
                                    }};
                                    resourceLabels = new java.util.HashMap<String, String>() {{
                                        put("modi", "iste");
                                        put("dolorum", "deleniti");
                                        put("pariatur", "provident");
                                        put("nobis", "libero");
                                    }};
                                    sandboxConfig = new SandboxConfig() {{
                                        type = SandboxConfigTypeEnum.GVISOR;
                                    }};
                                    serviceAccount = "quaerat";
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                    }};
                                    spot = false;
                                    tags = new String[]{{
                                        add("aliquid"),
                                        add("dolorem"),
                                        add("dolorem"),
                                    }};
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                            key = "ipsum";
                                            value = "hic";
                                        }}),
                                    }};
                                    windowsNodeConfig = new WindowsNodeConfig() {{
                                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2019;
                                    }};
                                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                        mode = WorkloadMetadataConfigModeEnum.GKE_METADATA;
                                    }};
                                }};
                                etag = "voluptate";
                                initialNodeCount = 490459;
                                instanceGroupUrls = new String[]{{
                                    add("amet"),
                                    add("dolorum"),
                                    add("numquam"),
                                    add("veritatis"),
                                }};
                                locations = new String[]{{
                                    add("ipsa"),
                                }};
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "iure";
                                        description = "odio";
                                    }};
                                }};
                                maxPodsConstraint = new MaxPodsConstraint() {{
                                    maxPodsPerNode = "quaerat";
                                }};
                                name = "Rickey Wolf";
                                networkConfig = new NodeNetworkConfig() {{
                                    createPodRange = false;
                                    enablePrivateNodes = false;
                                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                                    }};
                                    podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                        disable = false;
                                    }};
                                    podIpv4CidrBlock = "atque";
                                    podRange = "sit";
                                }};
                                placementPolicy = new PlacementPolicy() {{
                                    type = PlacementPolicyTypeEnum.COMPACT;
                                }};
                                podIpv4CidrSize = 67249;
                                selfLink = "soluta";
                                status = NodePoolStatusEnum.RECONCILING;
                                statusMessage = "iusto";
                                updateInfo = new UpdateInfo() {{
                                    blueGreenInfo = new BlueGreenInfo() {{
                                        blueInstanceGroupUrls = new String[]{{
                                            add("dolorum"),
                                            add("deleniti"),
                                        }};
                                        bluePoolDeletionStartTime = "omnis";
                                        greenInstanceGroupUrls = new String[]{{
                                            add("distinctio"),
                                            add("asperiores"),
                                            add("nihil"),
                                            add("ipsum"),
                                        }};
                                        greenPoolVersion = "voluptate";
                                        phase = BlueGreenInfoPhaseEnum.NODE_POOL_SOAKING;
                                    }};
                                }};
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "saepe";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 263322;
                                            batchPercentage = 1372.2;
                                            batchSoakDuration = "perferendis";
                                        }};
                                    }};
                                    maxSurge = 229219;
                                    maxUnavailable = 758379;
                                    strategy = UpgradeSettingsStrategyEnum.SURGE;
                                }};
                                version = "ad";
                            }}),
                            add(new NodePool() {{
                                autoscaling = new NodePoolAutoscaling() {{
                                    autoprovisioned = false;
                                    enabled = false;
                                    locationPolicy = NodePoolAutoscalingLocationPolicyEnum.ANY;
                                    maxNodeCount = 383464;
                                    minNodeCount = 645785;
                                    totalMaxNodeCount = 588317;
                                    totalMinNodeCount = 324683;
                                }};
                                conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.UNAUTHENTICATED;
                                        code = StatusConditionCodeEnum.SET_BY_OPERATOR;
                                        message = "alias";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.INTERNAL;
                                        code = StatusConditionCodeEnum.GKE_SERVICE_ACCOUNT_DELETED;
                                        message = "tempora";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.PERMISSION_DENIED;
                                        code = StatusConditionCodeEnum.CLOUD_KMS_KEY_ERROR;
                                        message = "officiis";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.INVALID_ARGUMENT;
                                        code = StatusConditionCodeEnum.SET_BY_OPERATOR;
                                        message = "a";
                                    }}),
                                }};
                                config = new NodeConfig() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "harum";
                                            acceleratorType = "iusto";
                                            gpuPartitionSize = "ipsum";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "tenetur";
                                            }};
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "amet";
                                            acceleratorType = "tempore";
                                            gpuPartitionSize = "accusamus";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                                maxSharedClientsPerGpu = "enim";
                                            }};
                                        }}),
                                    }};
                                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                        threadsPerCore = "dolorem";
                                    }};
                                    bootDiskKmsKey = "sapiente";
                                    confidentialNodes = new ConfidentialNodes() {{
                                        enabled = false;
                                    }};
                                    diskSizeGb = 518201;
                                    diskType = "nihil";
                                    ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                        localSsdCount = 25662;
                                    }};
                                    fastSocket = new FastSocket() {{
                                        enabled = false;
                                    }};
                                    gcfsConfig = new GcfsConfig() {{
                                        enabled = false;
                                    }};
                                    gvnic = new VirtualNIC() {{
                                        enabled = false;
                                    }};
                                    imageType = "expedita";
                                    kubeletConfig = new NodeKubeletConfig() {{
                                        cpuCfsQuota = false;
                                        cpuCfsQuotaPeriod = "neque";
                                        cpuManagerPolicy = "sed";
                                        podPidsLimit = "vel";
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("voluptas", "deserunt");
                                        put("quam", "ipsum");
                                        put("incidunt", "qui");
                                    }};
                                    linuxNodeConfig = new LinuxNodeConfig() {{
                                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V1;
                                        sysctls = new java.util.HashMap<String, String>() {{
                                            put("pariatur", "soluta");
                                            put("dicta", "laborum");
                                            put("totam", "incidunt");
                                            put("aspernatur", "dolores");
                                        }};
                                    }};
                                    localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                        localSsdCount = 716860;
                                    }};
                                    localSsdCount = 704474;
                                    loggingConfig = new NodePoolLoggingConfig() {{
                                        variantConfig = new LoggingVariantConfig() {{
                                            variant = LoggingVariantConfigVariantEnum.DEFAULT_;
                                        }};
                                    }};
                                    machineType = "quam";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("temporibus", "qui");
                                        put("neque", "fugit");
                                        put("magni", "odio");
                                    }};
                                    minCpuPlatform = "sunt";
                                    nodeGroup = "ullam";
                                    oauthScopes = new String[]{{
                                        add("hic"),
                                        add("voluptatem"),
                                        add("cumque"),
                                    }};
                                    preemptible = false;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                                        key = "nobis";
                                        values = new String[]{{
                                            add("saepe"),
                                        }};
                                    }};
                                    resourceLabels = new java.util.HashMap<String, String>() {{
                                        put("veritatis", "nobis");
                                    }};
                                    sandboxConfig = new SandboxConfig() {{
                                        type = SandboxConfigTypeEnum.GVISOR;
                                    }};
                                    serviceAccount = "tempore";
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                    }};
                                    spot = false;
                                    tags = new String[]{{
                                        add("aperiam"),
                                        add("delectus"),
                                        add("dolorem"),
                                    }};
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                            key = "adipisci";
                                            value = "dolorum";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                            key = "quae";
                                            value = "aut";
                                        }}),
                                    }};
                                    windowsNodeConfig = new WindowsNodeConfig() {{
                                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2019;
                                    }};
                                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                        mode = WorkloadMetadataConfigModeEnum.GKE_METADATA;
                                    }};
                                }};
                                etag = "consequatur";
                                initialNodeCount = 669917;
                                instanceGroupUrls = new String[]{{
                                    add("porro"),
                                    add("doloribus"),
                                    add("ut"),
                                    add("facilis"),
                                }};
                                locations = new String[]{{
                                    add("qui"),
                                    add("quae"),
                                    add("laudantium"),
                                }};
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "odio";
                                        description = "occaecati";
                                    }};
                                }};
                                maxPodsConstraint = new MaxPodsConstraint() {{
                                    maxPodsPerNode = "voluptatibus";
                                }};
                                name = "Ignacio Moen";
                                networkConfig = new NodeNetworkConfig() {{
                                    createPodRange = false;
                                    enablePrivateNodes = false;
                                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                                    }};
                                    podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                        disable = false;
                                    }};
                                    podIpv4CidrBlock = "voluptate";
                                    podRange = "consectetur";
                                }};
                                placementPolicy = new PlacementPolicy() {{
                                    type = PlacementPolicyTypeEnum.COMPACT;
                                }};
                                podIpv4CidrSize = 949319;
                                selfLink = "dignissimos";
                                status = NodePoolStatusEnum.ERROR;
                                statusMessage = "distinctio";
                                updateInfo = new UpdateInfo() {{
                                    blueGreenInfo = new BlueGreenInfo() {{
                                        blueInstanceGroupUrls = new String[]{{
                                            add("odio"),
                                            add("similique"),
                                            add("facilis"),
                                            add("vero"),
                                        }};
                                        bluePoolDeletionStartTime = "ducimus";
                                        greenInstanceGroupUrls = new String[]{{
                                            add("quibusdam"),
                                            add("illum"),
                                        }};
                                        greenPoolVersion = "sequi";
                                        phase = BlueGreenInfoPhaseEnum.DRAINING_BLUE_POOL;
                                    }};
                                }};
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "impedit";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 13236;
                                            batchPercentage = 9742.59;
                                            batchSoakDuration = "exercitationem";
                                        }};
                                    }};
                                    maxSurge = 862310;
                                    maxUnavailable = 148141;
                                    strategy = UpgradeSettingsStrategyEnum.SURGE;
                                }};
                                version = "maiores";
                            }}),
                        }};
                        notificationConfig = new NotificationConfig() {{
                            pubsub = new PubSub() {{
                                enabled = false;
                                filter = new Filter() {{
                                    eventType = new org.openapis.openapi.models.shared.FilterEventTypeEnum[]{{
                                        add(FilterEventTypeEnum.UPGRADE_AVAILABLE_EVENT),
                                        add(FilterEventTypeEnum.SECURITY_BULLETIN_EVENT),
                                        add(FilterEventTypeEnum.UPGRADE_AVAILABLE_EVENT),
                                        add(FilterEventTypeEnum.EVENT_TYPE_UNSPECIFIED),
                                    }};
                                }};;
                                topic = "officia";
                            }};;
                        }};;
                        privateClusterConfig = new PrivateClusterConfig() {{
                            enablePrivateEndpoint = false;
                            enablePrivateNodes = false;
                            masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig() {{
                                enabled = false;
                            }};;
                            masterIpv4CidrBlock = "tempora";
                            peeringName = "ipsam";
                            privateEndpoint = "ea";
                            privateEndpointSubnetwork = "aspernatur";
                            publicEndpoint = "vel";
                        }};;
                        releaseChannel = new ReleaseChannel() {{
                            channel = ReleaseChannelChannelEnum.STABLE;
                        }};;
                        resourceLabels = new java.util.HashMap<String, String>() {{
                            put("ratione", "ex");
                            put("laudantium", "dicta");
                        }};
                        resourceUsageExportConfig = new ResourceUsageExportConfig() {{
                            bigqueryDestination = new BigQueryDestination() {{
                                datasetId = "dolor";
                            }};;
                            consumptionMeteringConfig = new ConsumptionMeteringConfig() {{
                                enabled = false;
                            }};;
                            enableNetworkEgressMetering = false;
                        }};;
                        selfLink = "maiores";
                        servicesIpv4Cidr = "quasi";
                        shieldedNodes = new ShieldedNodes() {{
                            enabled = false;
                        }};;
                        status = ClusterStatusEnum.RUNNING;
                        statusMessage = "nulla";
                        subnetwork = "excepturi";
                        tpuIpv4CidrBlock = "voluptatibus";
                        verticalPodAutoscaling = new VerticalPodAutoscaling() {{
                            enabled = false;
                        }};;
                        workloadIdentityConfig = new WorkloadIdentityConfig() {{
                            workloadPool = "nostrum";
                        }};;
                        zone = "sapiente";
                    }};;
                    parent = "quisquam";
                    projectId = "saepe";
                    zone = "ea";
                }};;
                accessToken = "impedit";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "aliquid";
                key = "inventore";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "quo";
                uploadProtocol = "consectetur";
            }};            

            ContainerProjectsLocationsClustersCreateResponse res = sdk.projects.containerProjectsLocationsClustersCreate(req, new ContainerProjectsLocationsClustersCreateSecurity("recusandae", "aspernatur") {{
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

## containerProjectsLocationsClustersGetJwks

Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersGetJwksRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersGetJwksResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersGetJwksRequest req = new ContainerProjectsLocationsClustersGetJwksRequest("minima") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "aut";
                key = "deleniti";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "fugit";
                uploadProtocol = "accusamus";
            }};            

            ContainerProjectsLocationsClustersGetJwksResponse res = sdk.projects.containerProjectsLocationsClustersGetJwks(req);

            if (res.getJSONWebKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsLocationsClustersList

Lists all clusters owned by a project in either the specified zone or all zones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersListRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersListResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersListRequest req = new ContainerProjectsLocationsClustersListRequest("inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "placeat";
                key = "velit";
                oauthToken = "eum";
                prettyPrint = false;
                projectId = "autem";
                quotaUser = "nobis";
                uploadType = "quas";
                uploadProtocol = "assumenda";
                zone = "nulla";
            }};            

            ContainerProjectsLocationsClustersListResponse res = sdk.projects.containerProjectsLocationsClustersList(req, new ContainerProjectsLocationsClustersListSecurity("voluptas", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsLocationsClustersNodePoolsCompleteUpgrade

CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest req = new ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("explicabo", "provident");
                    put("ipsa", "molestiae");
                }};
                accessToken = "magnam";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "esse";
                key = "esse";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "reprehenderit";
                uploadProtocol = "quidem";
            }};            

            ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsCompleteUpgrade(req, new ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeSecurity("fugiat", "ut") {{
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

## containerProjectsLocationsClustersNodePoolsCreate

Creates a node pool for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsCreateRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsCreateResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsCreateSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AdvancedMachineFeatures;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoUpgradeOptions;
import org.openapis.openapi.models.shared.BlueGreenInfo;
import org.openapis.openapi.models.shared.BlueGreenInfoPhaseEnum;
import org.openapis.openapi.models.shared.BlueGreenSettings;
import org.openapis.openapi.models.shared.ConfidentialNodes;
import org.openapis.openapi.models.shared.CreateNodePoolRequest;
import org.openapis.openapi.models.shared.EphemeralStorageLocalSsdConfig;
import org.openapis.openapi.models.shared.FastSocket;
import org.openapis.openapi.models.shared.GPUSharingConfig;
import org.openapis.openapi.models.shared.GPUSharingConfigGPUSharingStrategyEnum;
import org.openapis.openapi.models.shared.GcfsConfig;
import org.openapis.openapi.models.shared.LinuxNodeConfig;
import org.openapis.openapi.models.shared.LinuxNodeConfigCgroupModeEnum;
import org.openapis.openapi.models.shared.LocalNvmeSsdBlockConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfigVariantEnum;
import org.openapis.openapi.models.shared.MaxPodsConstraint;
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.NodeConfig;
import org.openapis.openapi.models.shared.NodeKubeletConfig;
import org.openapis.openapi.models.shared.NodeManagement;
import org.openapis.openapi.models.shared.NodeNetworkConfig;
import org.openapis.openapi.models.shared.NodePool;
import org.openapis.openapi.models.shared.NodePoolAutoscaling;
import org.openapis.openapi.models.shared.NodePoolAutoscalingLocationPolicyEnum;
import org.openapis.openapi.models.shared.NodePoolLoggingConfig;
import org.openapis.openapi.models.shared.NodePoolStatusEnum;
import org.openapis.openapi.models.shared.NodeTaint;
import org.openapis.openapi.models.shared.NodeTaintEffectEnum;
import org.openapis.openapi.models.shared.PlacementPolicy;
import org.openapis.openapi.models.shared.PlacementPolicyTypeEnum;
import org.openapis.openapi.models.shared.PodCIDROverprovisionConfig;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.SandboxConfig;
import org.openapis.openapi.models.shared.SandboxConfigTypeEnum;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.StandardRolloutPolicy;
import org.openapis.openapi.models.shared.StatusCondition;
import org.openapis.openapi.models.shared.StatusConditionCanonicalCodeEnum;
import org.openapis.openapi.models.shared.StatusConditionCodeEnum;
import org.openapis.openapi.models.shared.UpdateInfo;
import org.openapis.openapi.models.shared.UpgradeSettings;
import org.openapis.openapi.models.shared.UpgradeSettingsStrategyEnum;
import org.openapis.openapi.models.shared.VirtualNIC;
import org.openapis.openapi.models.shared.WindowsNodeConfig;
import org.openapis.openapi.models.shared.WindowsNodeConfigOsVersionEnum;
import org.openapis.openapi.models.shared.WorkloadMetadataConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfigModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsCreateRequest req = new ContainerProjectsLocationsClustersNodePoolsCreateRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                createNodePoolRequest = new CreateNodePoolRequest() {{
                    clusterId = "assumenda";
                    nodePool = new NodePool() {{
                        autoscaling = new NodePoolAutoscaling() {{
                            autoprovisioned = false;
                            enabled = false;
                            locationPolicy = NodePoolAutoscalingLocationPolicyEnum.LOCATION_POLICY_UNSPECIFIED;
                            maxNodeCount = 509342;
                            minNodeCount = 788546;
                            totalMaxNodeCount = 86377;
                            totalMinNodeCount = 56848;
                        }};;
                        conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.ABORTED;
                                code = StatusConditionCodeEnum.GCE_STOCKOUT;
                                message = "quo";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.INTERNAL;
                                code = StatusConditionCodeEnum.CLOUD_KMS_KEY_ERROR;
                                message = "fuga";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.DEADLINE_EXCEEDED;
                                code = StatusConditionCodeEnum.GCE_STOCKOUT;
                                message = "voluptas";
                            }}),
                        }};
                        config = new NodeConfig() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "cupiditate";
                                    acceleratorType = "consequatur";
                                    gpuPartitionSize = "tempora";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                        maxSharedClientsPerGpu = "ipsam";
                                    }};
                                }}),
                            }};
                            advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                threadsPerCore = "aspernatur";
                            }};;
                            bootDiskKmsKey = "sequi";
                            confidentialNodes = new ConfidentialNodes() {{
                                enabled = false;
                            }};;
                            diskSizeGb = 779192;
                            diskType = "esse";
                            ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                localSsdCount = 925164;
                            }};;
                            fastSocket = new FastSocket() {{
                                enabled = false;
                            }};;
                            gcfsConfig = new GcfsConfig() {{
                                enabled = false;
                            }};;
                            gvnic = new VirtualNIC() {{
                                enabled = false;
                            }};;
                            imageType = "aperiam";
                            kubeletConfig = new NodeKubeletConfig() {{
                                cpuCfsQuota = false;
                                cpuCfsQuotaPeriod = "distinctio";
                                cpuManagerPolicy = "quod";
                                podPidsLimit = "dignissimos";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("nihil", "totam");
                            }};
                            linuxNodeConfig = new LinuxNodeConfig() {{
                                cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V2;
                                sysctls = new java.util.HashMap<String, String>() {{
                                    put("odio", "occaecati");
                                    put("commodi", "sapiente");
                                }};
                            }};;
                            localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                localSsdCount = 174112;
                            }};;
                            localSsdCount = 645570;
                            loggingConfig = new NodePoolLoggingConfig() {{
                                variantConfig = new LoggingVariantConfig() {{
                                    variant = LoggingVariantConfigVariantEnum.DEFAULT_;
                                }};;
                            }};;
                            machineType = "accusantium";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("eum", "quas");
                                put("praesentium", "consequuntur");
                                put("deleniti", "fugit");
                                put("fuga", "mollitia");
                            }};
                            minCpuPlatform = "incidunt";
                            nodeGroup = "atque";
                            oauthScopes = new String[]{{
                                add("minima"),
                            }};
                            preemptible = false;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                                key = "fugit";
                                values = new String[]{{
                                    add("consequuntur"),
                                    add("ratione"),
                                    add("explicabo"),
                                    add("saepe"),
                                }};
                            }};;
                            resourceLabels = new java.util.HashMap<String, String>() {{
                                put("atque", "et");
                                put("esse", "eveniet");
                                put("accusamus", "veritatis");
                            }};
                            sandboxConfig = new SandboxConfig() {{
                                type = SandboxConfigTypeEnum.UNSPECIFIED;
                            }};;
                            serviceAccount = "quod";
                            shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                            }};;
                            spot = false;
                            tags = new String[]{{
                                add("vero"),
                                add("aliquid"),
                                add("quasi"),
                            }};
                            taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                    key = "harum";
                                    value = "molestiae";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                    key = "occaecati";
                                    value = "minima";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                    key = "eligendi";
                                    value = "sit";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                    key = "tempore";
                                    value = "adipisci";
                                }}),
                            }};
                            windowsNodeConfig = new WindowsNodeConfig() {{
                                osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2022;
                            }};;
                            workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                mode = WorkloadMetadataConfigModeEnum.MODE_UNSPECIFIED;
                            }};;
                        }};;
                        etag = "consequatur";
                        initialNodeCount = 796392;
                        instanceGroupUrls = new String[]{{
                            add("sapiente"),
                            add("consectetur"),
                        }};
                        locations = new String[]{{
                            add("blanditiis"),
                            add("provident"),
                        }};
                        management = new NodeManagement() {{
                            autoRepair = false;
                            autoUpgrade = false;
                            upgradeOptions = new AutoUpgradeOptions() {{
                                autoUpgradeStartTime = "a";
                                description = "nulla";
                            }};;
                        }};;
                        maxPodsConstraint = new MaxPodsConstraint() {{
                            maxPodsPerNode = "quas";
                        }};;
                        name = "Joyce Wilderman";
                        networkConfig = new NodeNetworkConfig() {{
                            createPodRange = false;
                            enablePrivateNodes = false;
                            networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                            }};;
                            podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                disable = false;
                            }};;
                            podIpv4CidrBlock = "possimus";
                            podRange = "quia";
                        }};;
                        placementPolicy = new PlacementPolicy() {{
                            type = PlacementPolicyTypeEnum.COMPACT;
                        }};;
                        podIpv4CidrSize = 992430;
                        selfLink = "facere";
                        status = NodePoolStatusEnum.STATUS_UNSPECIFIED;
                        statusMessage = "consequuntur";
                        updateInfo = new UpdateInfo() {{
                            blueGreenInfo = new BlueGreenInfo() {{
                                blueInstanceGroupUrls = new String[]{{
                                    add("similique"),
                                }};
                                bluePoolDeletionStartTime = "culpa";
                                greenInstanceGroupUrls = new String[]{{
                                    add("tenetur"),
                                    add("quae"),
                                }};
                                greenPoolVersion = "earum";
                                phase = BlueGreenInfoPhaseEnum.CORDONING_BLUE_POOL;
                            }};;
                        }};;
                        upgradeSettings = new UpgradeSettings() {{
                            blueGreenSettings = new BlueGreenSettings() {{
                                nodePoolSoakDuration = "in";
                                standardRolloutPolicy = new StandardRolloutPolicy() {{
                                    batchNodeCount = 258684;
                                    batchPercentage = 7276.97;
                                    batchSoakDuration = "illum";
                                }};;
                            }};;
                            maxSurge = 742238;
                            maxUnavailable = 33304;
                            strategy = UpgradeSettingsStrategyEnum.NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED;
                        }};;
                        version = "sapiente";
                    }};;
                    parent = "dicta";
                    projectId = "ullam";
                    zone = "reprehenderit";
                }};;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "voluptatum";
                key = "qui";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "deleniti";
                uploadProtocol = "itaque";
            }};            

            ContainerProjectsLocationsClustersNodePoolsCreateResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsCreate(req, new ContainerProjectsLocationsClustersNodePoolsCreateSecurity("dolorum", "architecto") {{
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

## containerProjectsLocationsClustersNodePoolsDelete

Deletes a node pool from a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsDeleteRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsDeleteResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsDeleteRequest req = new ContainerProjectsLocationsClustersNodePoolsDeleteRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "et";
                clusterId = "voluptate";
                fields = "ipsa";
                key = "minima";
                nodePoolId = "veritatis";
                oauthToken = "consectetur";
                prettyPrint = false;
                projectId = "adipisci";
                quotaUser = "iste";
                uploadType = "temporibus";
                uploadProtocol = "accusantium";
                zone = "rem";
            }};            

            ContainerProjectsLocationsClustersNodePoolsDeleteResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsDelete(req, new ContainerProjectsLocationsClustersNodePoolsDeleteSecurity("aut", "laudantium") {{
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

## containerProjectsLocationsClustersNodePoolsList

Lists the node pools for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsListRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsListResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsListRequest req = new ContainerProjectsLocationsClustersNodePoolsListRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "non";
                clusterId = "voluptatem";
                fields = "dolor";
                key = "occaecati";
                oauthToken = "numquam";
                prettyPrint = false;
                projectId = "impedit";
                quotaUser = "explicabo";
                uploadType = "voluptas";
                uploadProtocol = "aut";
                zone = "dignissimos";
            }};            

            ContainerProjectsLocationsClustersNodePoolsListResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsList(req, new ContainerProjectsLocationsClustersNodePoolsListSecurity("dicta", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNodePoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsLocationsClustersNodePoolsRollback

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsRollbackRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsRollbackResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsRollbackSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RollbackNodePoolUpgradeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsRollbackRequest req = new ContainerProjectsLocationsClustersNodePoolsRollbackRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                rollbackNodePoolUpgradeRequest = new RollbackNodePoolUpgradeRequest() {{
                    clusterId = "voluptatibus";
                    name = "Tabitha Bayer";
                    nodePoolId = "consequuntur";
                    projectId = "repellendus";
                    respectPdb = false;
                    zone = "officia";
                }};;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "asperiores";
                key = "nemo";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "porro";
                uploadProtocol = "quod";
            }};            

            ContainerProjectsLocationsClustersNodePoolsRollbackResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsRollback(req, new ContainerProjectsLocationsClustersNodePoolsRollbackSecurity("labore", "ab") {{
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

## containerProjectsLocationsClustersNodePoolsSetAutoscaling

Sets the autoscaling settings for the specified node pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodePoolAutoscaling;
import org.openapis.openapi.models.shared.NodePoolAutoscalingLocationPolicyEnum;
import org.openapis.openapi.models.shared.SetNodePoolAutoscalingRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest req = new ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                setNodePoolAutoscalingRequest = new SetNodePoolAutoscalingRequest() {{
                    autoscaling = new NodePoolAutoscaling() {{
                        autoprovisioned = false;
                        enabled = false;
                        locationPolicy = NodePoolAutoscalingLocationPolicyEnum.BALANCED;
                        maxNodeCount = 380729;
                        minNodeCount = 246063;
                        totalMaxNodeCount = 633931;
                        totalMinNodeCount = 665859;
                    }};;
                    clusterId = "recusandae";
                    name = "Nicolas Kassulke";
                    nodePoolId = "vel";
                    projectId = "labore";
                    zone = "possimus";
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "in";
                key = "corporis";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "nemo";
                uploadProtocol = "recusandae";
            }};            

            ContainerProjectsLocationsClustersNodePoolsSetAutoscalingResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsSetAutoscaling(req, new ContainerProjectsLocationsClustersNodePoolsSetAutoscalingSecurity("aliquid", "aperiam") {{
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

## containerProjectsLocationsClustersNodePoolsSetManagement

Sets the NodeManagement options for a node pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsSetManagementRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsSetManagementResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsSetManagementSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoUpgradeOptions;
import org.openapis.openapi.models.shared.NodeManagement;
import org.openapis.openapi.models.shared.SetNodePoolManagementRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsSetManagementRequest req = new ContainerProjectsLocationsClustersNodePoolsSetManagementRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                setNodePoolManagementRequest = new SetNodePoolManagementRequest() {{
                    clusterId = "in";
                    management = new NodeManagement() {{
                        autoRepair = false;
                        autoUpgrade = false;
                        upgradeOptions = new AutoUpgradeOptions() {{
                            autoUpgradeStartTime = "exercitationem";
                            description = "earum";
                        }};;
                    }};;
                    name = "Jesus Yost";
                    nodePoolId = "quidem";
                    projectId = "saepe";
                    zone = "necessitatibus";
                }};;
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "adipisci";
                key = "non";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "dignissimos";
                uploadProtocol = "a";
            }};            

            ContainerProjectsLocationsClustersNodePoolsSetManagementResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsSetManagement(req, new ContainerProjectsLocationsClustersNodePoolsSetManagementSecurity("debitis", "consectetur") {{
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

## containerProjectsLocationsClustersNodePoolsSetSize

Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsSetSizeRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsSetSizeResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetNodePoolSizeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsSetSizeRequest req = new ContainerProjectsLocationsClustersNodePoolsSetSizeRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                setNodePoolSizeRequest = new SetNodePoolSizeRequest() {{
                    clusterId = "laboriosam";
                    name = "Dr. Silvia Renner";
                    nodeCount = 272437;
                    nodePoolId = "aspernatur";
                    projectId = "voluptas";
                    zone = "voluptas";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "dolorum";
                key = "adipisci";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "blanditiis";
                uploadProtocol = "in";
            }};            

            ContainerProjectsLocationsClustersNodePoolsSetSizeResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsSetSize(req, new ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity("dolore", "aliquam") {{
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

## containerProjectsLocationsClustersNodePoolsUpdate

Updates the version and/or image type for the specified node pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsUpdateRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsUpdateResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersNodePoolsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BlueGreenSettings;
import org.openapis.openapi.models.shared.ConfidentialNodes;
import org.openapis.openapi.models.shared.FastSocket;
import org.openapis.openapi.models.shared.GcfsConfig;
import org.openapis.openapi.models.shared.LinuxNodeConfig;
import org.openapis.openapi.models.shared.LinuxNodeConfigCgroupModeEnum;
import org.openapis.openapi.models.shared.LoggingVariantConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfigVariantEnum;
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.NetworkTags;
import org.openapis.openapi.models.shared.NodeKubeletConfig;
import org.openapis.openapi.models.shared.NodeLabels;
import org.openapis.openapi.models.shared.NodeNetworkConfig;
import org.openapis.openapi.models.shared.NodePoolLoggingConfig;
import org.openapis.openapi.models.shared.NodeTaint;
import org.openapis.openapi.models.shared.NodeTaintEffectEnum;
import org.openapis.openapi.models.shared.NodeTaints;
import org.openapis.openapi.models.shared.PodCIDROverprovisionConfig;
import org.openapis.openapi.models.shared.ResourceLabels;
import org.openapis.openapi.models.shared.StandardRolloutPolicy;
import org.openapis.openapi.models.shared.UpdateNodePoolRequest;
import org.openapis.openapi.models.shared.UpgradeSettings;
import org.openapis.openapi.models.shared.UpgradeSettingsStrategyEnum;
import org.openapis.openapi.models.shared.VirtualNIC;
import org.openapis.openapi.models.shared.WindowsNodeConfig;
import org.openapis.openapi.models.shared.WindowsNodeConfigOsVersionEnum;
import org.openapis.openapi.models.shared.WorkloadMetadataConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfigModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsUpdateRequest req = new ContainerProjectsLocationsClustersNodePoolsUpdateRequest("officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                updateNodePoolRequest = new UpdateNodePoolRequest() {{
                    clusterId = "ullam";
                    confidentialNodes = new ConfidentialNodes() {{
                        enabled = false;
                    }};;
                    etag = "adipisci";
                    fastSocket = new FastSocket() {{
                        enabled = false;
                    }};;
                    gcfsConfig = new GcfsConfig() {{
                        enabled = false;
                    }};;
                    gvnic = new VirtualNIC() {{
                        enabled = false;
                    }};;
                    imageType = "cum";
                    kubeletConfig = new NodeKubeletConfig() {{
                        cpuCfsQuota = false;
                        cpuCfsQuotaPeriod = "blanditiis";
                        cpuManagerPolicy = "quas";
                        podPidsLimit = "hic";
                    }};;
                    labels = new NodeLabels() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("culpa", "corrupti");
                        }};
                    }};;
                    linuxNodeConfig = new LinuxNodeConfig() {{
                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V2;
                        sysctls = new java.util.HashMap<String, String>() {{
                            put("hic", "exercitationem");
                            put("nobis", "sit");
                            put("rerum", "sed");
                        }};
                    }};;
                    locations = new String[]{{
                        add("explicabo"),
                        add("asperiores"),
                        add("facilis"),
                        add("voluptate"),
                    }};
                    loggingConfig = new NodePoolLoggingConfig() {{
                        variantConfig = new LoggingVariantConfig() {{
                            variant = LoggingVariantConfigVariantEnum.MAX_THROUGHPUT;
                        }};;
                    }};;
                    name = "Margarita Greenholt";
                    nodeNetworkConfig = new NodeNetworkConfig() {{
                        createPodRange = false;
                        enablePrivateNodes = false;
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                        }};;
                        podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                            disable = false;
                        }};;
                        podIpv4CidrBlock = "commodi";
                        podRange = "quidem";
                    }};;
                    nodePoolId = "explicabo";
                    nodeVersion = "voluptas";
                    projectId = "unde";
                    resourceLabels = new ResourceLabels() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("suscipit", "sapiente");
                        }};
                    }};;
                    tags = new NetworkTags() {{
                        tags = new String[]{{
                            add("illo"),
                            add("reiciendis"),
                            add("perferendis"),
                            add("corrupti"),
                        }};
                    }};;
                    taints = new NodeTaints() {{
                        taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                key = "sed";
                                value = "provident";
                            }}),
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                key = "necessitatibus";
                                value = "ipsum";
                            }}),
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                key = "occaecati";
                                value = "quos";
                            }}),
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.NO_EXECUTE;
                                key = "tempora";
                                value = "tempora";
                            }}),
                        }};
                    }};;
                    upgradeSettings = new UpgradeSettings() {{
                        blueGreenSettings = new BlueGreenSettings() {{
                            nodePoolSoakDuration = "voluptate";
                            standardRolloutPolicy = new StandardRolloutPolicy() {{
                                batchNodeCount = 970076;
                                batchPercentage = 4017.13;
                                batchSoakDuration = "sit";
                            }};;
                        }};;
                        maxSurge = 248413;
                        maxUnavailable = 888044;
                        strategy = UpgradeSettingsStrategyEnum.BLUE_GREEN;
                    }};;
                    windowsNodeConfig = new WindowsNodeConfig() {{
                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2022;
                    }};;
                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                        mode = WorkloadMetadataConfigModeEnum.MODE_UNSPECIFIED;
                    }};;
                    zone = "incidunt";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "rem";
                fields = "sit";
                key = "nobis";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "minima";
                uploadProtocol = "recusandae";
            }};            

            ContainerProjectsLocationsClustersNodePoolsUpdateResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsUpdate(req, new ContainerProjectsLocationsClustersNodePoolsUpdateSecurity("reiciendis", "nulla") {{
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

## containerProjectsLocationsClustersSetAddons

Sets the addons for a specific cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetAddonsRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetAddonsResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetAddonsSecurity;
import org.openapis.openapi.models.shared.AddonsConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudRunConfig;
import org.openapis.openapi.models.shared.CloudRunConfigLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.ConfigConnectorConfig;
import org.openapis.openapi.models.shared.DnsCacheConfig;
import org.openapis.openapi.models.shared.GcePersistentDiskCsiDriverConfig;
import org.openapis.openapi.models.shared.GcpFilestoreCsiDriverConfig;
import org.openapis.openapi.models.shared.GkeBackupAgentConfig;
import org.openapis.openapi.models.shared.HorizontalPodAutoscaling;
import org.openapis.openapi.models.shared.HttpLoadBalancing;
import org.openapis.openapi.models.shared.KubernetesDashboard;
import org.openapis.openapi.models.shared.NetworkPolicyConfig;
import org.openapis.openapi.models.shared.SetAddonsConfigRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersSetAddonsRequest req = new ContainerProjectsLocationsClustersSetAddonsRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                setAddonsConfigRequest = new SetAddonsConfigRequest() {{
                    addonsConfig = new AddonsConfig() {{
                        cloudRunConfig = new CloudRunConfig() {{
                            disabled = false;
                            loadBalancerType = CloudRunConfigLoadBalancerTypeEnum.LOAD_BALANCER_TYPE_INTERNAL;
                        }};;
                        configConnectorConfig = new ConfigConnectorConfig() {{
                            enabled = false;
                        }};;
                        dnsCacheConfig = new DnsCacheConfig() {{
                            enabled = false;
                        }};;
                        gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig() {{
                            enabled = false;
                        }};;
                        gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig() {{
                            enabled = false;
                        }};;
                        gkeBackupAgentConfig = new GkeBackupAgentConfig() {{
                            enabled = false;
                        }};;
                        horizontalPodAutoscaling = new HorizontalPodAutoscaling() {{
                            disabled = false;
                        }};;
                        httpLoadBalancing = new HttpLoadBalancing() {{
                            disabled = false;
                        }};;
                        kubernetesDashboard = new KubernetesDashboard() {{
                            disabled = false;
                        }};;
                        networkPolicyConfig = new NetworkPolicyConfig() {{
                            disabled = false;
                        }};;
                    }};;
                    clusterId = "numquam";
                    name = "Ms. Pearl Towne";
                    projectId = "praesentium";
                    zone = "cum";
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "error";
                key = "hic";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "neque";
                uploadProtocol = "dolorum";
            }};            

            ContainerProjectsLocationsClustersSetAddonsResponse res = sdk.projects.containerProjectsLocationsClustersSetAddons(req, new ContainerProjectsLocationsClustersSetAddonsSecurity("nostrum", "officia") {{
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

## containerProjectsLocationsClustersSetLegacyAbac

Enables or disables the ABAC authorization mechanism on a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetLegacyAbacRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetLegacyAbacResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetLegacyAbacSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetLegacyAbacRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersSetLegacyAbacRequest req = new ContainerProjectsLocationsClustersSetLegacyAbacRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                setLegacyAbacRequest = new SetLegacyAbacRequest() {{
                    clusterId = "accusamus";
                    enabled = false;
                    name = "Kay Cormier";
                    projectId = "voluptatem";
                    zone = "culpa";
                }};;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "esse";
                key = "ipsam";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "quas";
                uploadProtocol = "repudiandae";
            }};            

            ContainerProjectsLocationsClustersSetLegacyAbacResponse res = sdk.projects.containerProjectsLocationsClustersSetLegacyAbac(req, new ContainerProjectsLocationsClustersSetLegacyAbacSecurity("corporis", "et") {{
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

## containerProjectsLocationsClustersSetLocations

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetLocationsRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetLocationsResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetLocationsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetLocationsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersSetLocationsRequest req = new ContainerProjectsLocationsClustersSetLocationsRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                setLocationsRequest = new SetLocationsRequest() {{
                    clusterId = "sed";
                    locations = new String[]{{
                        add("vel"),
                    }};
                    name = "Mrs. Tricia Mueller";
                    projectId = "dolorem";
                    zone = "harum";
                }};;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "labore";
                key = "quidem";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "nam";
                uploadProtocol = "tenetur";
            }};            

            ContainerProjectsLocationsClustersSetLocationsResponse res = sdk.projects.containerProjectsLocationsClustersSetLocations(req, new ContainerProjectsLocationsClustersSetLocationsSecurity("laboriosam", "alias") {{
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

## containerProjectsLocationsClustersSetLogging

Sets the logging service for a specific cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetLoggingRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetLoggingResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetLoggingSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetLoggingServiceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersSetLoggingRequest req = new ContainerProjectsLocationsClustersSetLoggingRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                setLoggingServiceRequest = new SetLoggingServiceRequest() {{
                    clusterId = "voluptate";
                    loggingService = "unde";
                    name = "Rene Skiles";
                    projectId = "perferendis";
                    zone = "est";
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "facere";
                fields = "fuga";
                key = "praesentium";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "voluptatem";
                uploadProtocol = "quisquam";
            }};            

            ContainerProjectsLocationsClustersSetLoggingResponse res = sdk.projects.containerProjectsLocationsClustersSetLogging(req, new ContainerProjectsLocationsClustersSetLoggingSecurity("repudiandae", "quasi") {{
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

## containerProjectsLocationsClustersSetMaintenancePolicy

Sets the maintenance policy for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetMaintenancePolicyRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetMaintenancePolicyResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetMaintenancePolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DailyMaintenanceWindow;
import org.openapis.openapi.models.shared.MaintenanceExclusionOptions;
import org.openapis.openapi.models.shared.MaintenanceExclusionOptionsScopeEnum;
import org.openapis.openapi.models.shared.MaintenancePolicy;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.RecurringTimeWindow;
import org.openapis.openapi.models.shared.SetMaintenancePolicyRequest;
import org.openapis.openapi.models.shared.TimeWindow;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersSetMaintenancePolicyRequest req = new ContainerProjectsLocationsClustersSetMaintenancePolicyRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                setMaintenancePolicyRequest = new SetMaintenancePolicyRequest() {{
                    clusterId = "asperiores";
                    maintenancePolicy = new MaintenancePolicy() {{
                        resourceVersion = "totam";
                        window = new MaintenanceWindow() {{
                            dailyMaintenanceWindow = new DailyMaintenanceWindow() {{
                                duration = "suscipit";
                                startTime = "quidem";
                            }};;
                            maintenanceExclusions = new java.util.HashMap<String, org.openapis.openapi.models.shared.TimeWindow>() {{
                                put("et", new TimeWindow() {{
                                    endTime = "esse";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_UPGRADES;
                                    }};
                                    startTime = "assumenda";
                                }});
                                put("ea", new TimeWindow() {{
                                    endTime = "atque";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_UPGRADES;
                                    }};
                                    startTime = "officiis";
                                }});
                                put("officiis", new TimeWindow() {{
                                    endTime = "accusamus";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_UPGRADES;
                                    }};
                                    startTime = "minima";
                                }});
                                put("aspernatur", new TimeWindow() {{
                                    endTime = "ex";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_OR_NODE_UPGRADES;
                                    }};
                                    startTime = "corrupti";
                                }});
                            }};
                            recurringWindow = new RecurringTimeWindow() {{
                                recurrence = "at";
                                window = new TimeWindow() {{
                                    endTime = "error";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_UPGRADES;
                                    }};;
                                    startTime = "suscipit";
                                }};;
                            }};;
                        }};;
                    }};;
                    name = "Dr. Ivan Littel";
                    projectId = "repellendus";
                    zone = "labore";
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "repudiandae";
                fields = "dicta";
                key = "accusantium";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "enim";
                uploadProtocol = "laboriosam";
            }};            

            ContainerProjectsLocationsClustersSetMaintenancePolicyResponse res = sdk.projects.containerProjectsLocationsClustersSetMaintenancePolicy(req, new ContainerProjectsLocationsClustersSetMaintenancePolicySecurity("velit", "a") {{
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

## containerProjectsLocationsClustersSetMasterAuth

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetMasterAuthRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetMasterAuthResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetMasterAuthSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientCertificateConfig;
import org.openapis.openapi.models.shared.MasterAuth;
import org.openapis.openapi.models.shared.SetMasterAuthRequest;
import org.openapis.openapi.models.shared.SetMasterAuthRequestActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersSetMasterAuthRequest req = new ContainerProjectsLocationsClustersSetMasterAuthRequest("molestias") {{
                dollarXgafv = XgafvEnum.ONE;
                setMasterAuthRequest = new SetMasterAuthRequest() {{
                    action = SetMasterAuthRequestActionEnum.SET_USERNAME;
                    clusterId = "consequuntur";
                    name = "Frankie Metz";
                    projectId = "eveniet";
                    update = new MasterAuth() {{
                        clientCertificate = "occaecati";
                        clientCertificateConfig = new ClientCertificateConfig() {{
                            issueClientCertificate = false;
                        }};;
                        clientKey = "consequuntur";
                        clusterCaCertificate = "fugit";
                        password = "id";
                        username = "Etha.Kiehn";
                    }};;
                    zone = "corporis";
                }};;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "vero";
                key = "doloremque";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "totam";
                uploadProtocol = "quae";
            }};            

            ContainerProjectsLocationsClustersSetMasterAuthResponse res = sdk.projects.containerProjectsLocationsClustersSetMasterAuth(req, new ContainerProjectsLocationsClustersSetMasterAuthSecurity("molestiae", "eveniet") {{
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

## containerProjectsLocationsClustersSetMonitoring

Sets the monitoring service for a specific cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetMonitoringRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetMonitoringResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetMonitoringSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetMonitoringServiceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersSetMonitoringRequest req = new ContainerProjectsLocationsClustersSetMonitoringRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                setMonitoringServiceRequest = new SetMonitoringServiceRequest() {{
                    clusterId = "iure";
                    monitoringService = "necessitatibus";
                    name = "Maggie Rau";
                    projectId = "aliquam";
                    zone = "ad";
                }};;
                accessToken = "repellat";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "perspiciatis";
                key = "nihil";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "alias";
                uploadProtocol = "maiores";
            }};            

            ContainerProjectsLocationsClustersSetMonitoringResponse res = sdk.projects.containerProjectsLocationsClustersSetMonitoring(req, new ContainerProjectsLocationsClustersSetMonitoringSecurity("reiciendis", "dolores") {{
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

## containerProjectsLocationsClustersSetNetworkPolicy

Enables or disables Network Policy for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetNetworkPolicyRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetNetworkPolicyResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetNetworkPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkPolicy;
import org.openapis.openapi.models.shared.NetworkPolicyProviderEnum;
import org.openapis.openapi.models.shared.SetNetworkPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersSetNetworkPolicyRequest req = new ContainerProjectsLocationsClustersSetNetworkPolicyRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                setNetworkPolicyRequest = new SetNetworkPolicyRequest() {{
                    clusterId = "dolore";
                    name = "Danny Berge";
                    networkPolicy = new NetworkPolicy() {{
                        enabled = false;
                        provider = NetworkPolicyProviderEnum.PROVIDER_UNSPECIFIED;
                    }};;
                    projectId = "molestiae";
                    zone = "ex";
                }};;
                accessToken = "ut";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "debitis";
                key = "laudantium";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "recusandae";
                uploadProtocol = "esse";
            }};            

            ContainerProjectsLocationsClustersSetNetworkPolicyResponse res = sdk.projects.containerProjectsLocationsClustersSetNetworkPolicy(req, new ContainerProjectsLocationsClustersSetNetworkPolicySecurity("provident", "quis") {{
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

## containerProjectsLocationsClustersSetResourceLabels

Sets labels on a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetResourceLabelsRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetResourceLabelsResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersSetResourceLabelsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersSetResourceLabelsRequest req = new ContainerProjectsLocationsClustersSetResourceLabelsRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                setLabelsRequest = new SetLabelsRequest() {{
                    clusterId = "provident";
                    labelFingerprint = "aspernatur";
                    name = "Joyce O'Kon";
                    projectId = "provident";
                    resourceLabels = new java.util.HashMap<String, String>() {{
                        put("animi", "ex");
                        put("aliquid", "accusantium");
                        put("repellat", "doloribus");
                        put("ullam", "in");
                    }};
                    zone = "nam";
                }};;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "placeat";
                key = "modi";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "officiis";
                uploadProtocol = "sapiente";
            }};            

            ContainerProjectsLocationsClustersSetResourceLabelsResponse res = sdk.projects.containerProjectsLocationsClustersSetResourceLabels(req, new ContainerProjectsLocationsClustersSetResourceLabelsSecurity("cumque", "vitae") {{
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

## containerProjectsLocationsClustersStartIpRotation

Starts master IP rotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersStartIpRotationRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersStartIpRotationResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersStartIpRotationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StartIPRotationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersStartIpRotationRequest req = new ContainerProjectsLocationsClustersStartIpRotationRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                startIPRotationRequest = new StartIPRotationRequest() {{
                    clusterId = "quis";
                    name = "Mr. Denise Runolfsdottir";
                    projectId = "aspernatur";
                    rotateCredentials = false;
                    zone = "eum";
                }};;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "impedit";
                key = "eos";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "dicta";
                uploadProtocol = "minima";
            }};            

            ContainerProjectsLocationsClustersStartIpRotationResponse res = sdk.projects.containerProjectsLocationsClustersStartIpRotation(req, new ContainerProjectsLocationsClustersStartIpRotationSecurity("beatae", "cupiditate") {{
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

## containerProjectsLocationsClustersUpdateMaster

Updates the master for a specific cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersUpdateMasterRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersUpdateMasterResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersUpdateMasterSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UpdateMasterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersUpdateMasterRequest req = new ContainerProjectsLocationsClustersUpdateMasterRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                updateMasterRequest = new UpdateMasterRequest() {{
                    clusterId = "soluta";
                    masterVersion = "hic";
                    name = "Timothy Weber";
                    projectId = "debitis";
                    zone = "aliquid";
                }};;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "fugit";
                key = "cumque";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "animi";
                uploadProtocol = "necessitatibus";
            }};            

            ContainerProjectsLocationsClustersUpdateMasterResponse res = sdk.projects.containerProjectsLocationsClustersUpdateMaster(req, new ContainerProjectsLocationsClustersUpdateMasterSecurity("nulla", "consequatur") {{
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

## containerProjectsLocationsClustersWellKnownGetOpenidConfiguration

Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest req = new ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ducimus";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "suscipit";
                key = "adipisci";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "doloribus";
                uploadProtocol = "nulla";
            }};            

            ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse res = sdk.projects.containerProjectsLocationsClustersWellKnownGetOpenidConfiguration(req);

            if (res.getOpenIDConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsLocationsGetServerConfig

Returns configuration info about the Google Kubernetes Engine service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsGetServerConfigRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsGetServerConfigResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsGetServerConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsGetServerConfigRequest req = new ContainerProjectsLocationsGetServerConfigRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "dicta";
                key = "iusto";
                oauthToken = "esse";
                prettyPrint = false;
                projectId = "praesentium";
                quotaUser = "maiores";
                uploadType = "reiciendis";
                uploadProtocol = "vel";
                zone = "architecto";
            }};            

            ContainerProjectsLocationsGetServerConfigResponse res = sdk.projects.containerProjectsLocationsGetServerConfig(req, new ContainerProjectsLocationsGetServerConfigSecurity("fugiat", "doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.serverConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsLocationsOperationsCancel

Cancels the specified operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CancelOperationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsOperationsCancelRequest req = new ContainerProjectsLocationsOperationsCancelRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                cancelOperationRequest = new CancelOperationRequest() {{
                    name = "Joy Jacobson";
                    operationId = "ipsa";
                    projectId = "laborum";
                    zone = "sunt";
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "aliquid";
                key = "officia";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "perferendis";
                uploadProtocol = "eum";
            }};            

            ContainerProjectsLocationsOperationsCancelResponse res = sdk.projects.containerProjectsLocationsOperationsCancel(req, new ContainerProjectsLocationsOperationsCancelSecurity("voluptas", "iste") {{
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

## containerProjectsLocationsOperationsGet

Gets the specified operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsOperationsGetRequest req = new ContainerProjectsLocationsOperationsGetRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "mollitia";
                key = "laborum";
                oauthToken = "libero";
                operationId = "ad";
                prettyPrint = false;
                projectId = "deleniti";
                quotaUser = "enim";
                uploadType = "vitae";
                uploadProtocol = "repellendus";
                zone = "ex";
            }};            

            ContainerProjectsLocationsOperationsGetResponse res = sdk.projects.containerProjectsLocationsOperationsGet(req, new ContainerProjectsLocationsOperationsGetSecurity("quo", "ex") {{
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

## containerProjectsLocationsOperationsList

Lists all operations in a project in a specific zone or all zones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsOperationsListRequest req = new ContainerProjectsLocationsOperationsListRequest("ut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "molestias";
                fields = "cum";
                key = "aliquid";
                oauthToken = "beatae";
                prettyPrint = false;
                projectId = "voluptatum";
                quotaUser = "omnis";
                uploadType = "veritatis";
                uploadProtocol = "rerum";
                zone = "est";
            }};            

            ContainerProjectsLocationsOperationsListResponse res = sdk.projects.containerProjectsLocationsOperationsList(req, new ContainerProjectsLocationsOperationsListSecurity("culpa", "voluptatem") {{
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

## containerProjectsZonesClustersAddons

Sets the addons for a specific cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersAddonsRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersAddonsResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersAddonsSecurity;
import org.openapis.openapi.models.shared.AddonsConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudRunConfig;
import org.openapis.openapi.models.shared.CloudRunConfigLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.ConfigConnectorConfig;
import org.openapis.openapi.models.shared.DnsCacheConfig;
import org.openapis.openapi.models.shared.GcePersistentDiskCsiDriverConfig;
import org.openapis.openapi.models.shared.GcpFilestoreCsiDriverConfig;
import org.openapis.openapi.models.shared.GkeBackupAgentConfig;
import org.openapis.openapi.models.shared.HorizontalPodAutoscaling;
import org.openapis.openapi.models.shared.HttpLoadBalancing;
import org.openapis.openapi.models.shared.KubernetesDashboard;
import org.openapis.openapi.models.shared.NetworkPolicyConfig;
import org.openapis.openapi.models.shared.SetAddonsConfigRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersAddonsRequest req = new ContainerProjectsZonesClustersAddonsRequest("sapiente", "officiis", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                setAddonsConfigRequest = new SetAddonsConfigRequest() {{
                    addonsConfig = new AddonsConfig() {{
                        cloudRunConfig = new CloudRunConfig() {{
                            disabled = false;
                            loadBalancerType = CloudRunConfigLoadBalancerTypeEnum.LOAD_BALANCER_TYPE_INTERNAL;
                        }};;
                        configConnectorConfig = new ConfigConnectorConfig() {{
                            enabled = false;
                        }};;
                        dnsCacheConfig = new DnsCacheConfig() {{
                            enabled = false;
                        }};;
                        gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig() {{
                            enabled = false;
                        }};;
                        gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig() {{
                            enabled = false;
                        }};;
                        gkeBackupAgentConfig = new GkeBackupAgentConfig() {{
                            enabled = false;
                        }};;
                        horizontalPodAutoscaling = new HorizontalPodAutoscaling() {{
                            disabled = false;
                        }};;
                        httpLoadBalancing = new HttpLoadBalancing() {{
                            disabled = false;
                        }};;
                        kubernetesDashboard = new KubernetesDashboard() {{
                            disabled = false;
                        }};;
                        networkPolicyConfig = new NetworkPolicyConfig() {{
                            disabled = false;
                        }};;
                    }};;
                    clusterId = "debitis";
                    name = "Mary Leuschke";
                    projectId = "sapiente";
                    zone = "rem";
                }};;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "ratione";
                key = "ullam";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "totam";
                uploadProtocol = "impedit";
            }};            

            ContainerProjectsZonesClustersAddonsResponse res = sdk.projects.containerProjectsZonesClustersAddons(req, new ContainerProjectsZonesClustersAddonsSecurity("quibusdam", "nam") {{
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

## containerProjectsZonesClustersCompleteIpRotation

Completes master IP rotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersCompleteIpRotationRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersCompleteIpRotationResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersCompleteIpRotationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompleteIPRotationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersCompleteIpRotationRequest req = new ContainerProjectsZonesClustersCompleteIpRotationRequest("ipsam", "culpa", "dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                completeIPRotationRequest = new CompleteIPRotationRequest() {{
                    clusterId = "inventore";
                    name = "Peter Goodwin Sr.";
                    projectId = "sit";
                    zone = "modi";
                }};;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "quae";
                key = "dolor";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "consequuntur";
                uploadProtocol = "ipsa";
            }};            

            ContainerProjectsZonesClustersCompleteIpRotationResponse res = sdk.projects.containerProjectsZonesClustersCompleteIpRotation(req, new ContainerProjectsZonesClustersCompleteIpRotationSecurity("quas", "eveniet") {{
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

## containerProjectsZonesClustersCreate

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersCreateRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersCreateResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersCreateSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AdditionalPodRangesConfig;
import org.openapis.openapi.models.shared.AddonsConfig;
import org.openapis.openapi.models.shared.AdvancedMachineFeatures;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthenticatorGroupsConfig;
import org.openapis.openapi.models.shared.AutoUpgradeOptions;
import org.openapis.openapi.models.shared.Autopilot;
import org.openapis.openapi.models.shared.AutoprovisioningNodePoolDefaults;
import org.openapis.openapi.models.shared.BigQueryDestination;
import org.openapis.openapi.models.shared.BinaryAuthorization;
import org.openapis.openapi.models.shared.BinaryAuthorizationEvaluationModeEnum;
import org.openapis.openapi.models.shared.BlueGreenInfo;
import org.openapis.openapi.models.shared.BlueGreenInfoPhaseEnum;
import org.openapis.openapi.models.shared.BlueGreenSettings;
import org.openapis.openapi.models.shared.CidrBlock;
import org.openapis.openapi.models.shared.ClientCertificateConfig;
import org.openapis.openapi.models.shared.CloudRunConfig;
import org.openapis.openapi.models.shared.CloudRunConfigLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.ClusterAutoscaling;
import org.openapis.openapi.models.shared.ClusterAutoscalingAutoscalingProfileEnum;
import org.openapis.openapi.models.shared.ClusterInput;
import org.openapis.openapi.models.shared.ClusterStatusEnum;
import org.openapis.openapi.models.shared.ConfidentialNodes;
import org.openapis.openapi.models.shared.ConfigConnectorConfig;
import org.openapis.openapi.models.shared.ConsumptionMeteringConfig;
import org.openapis.openapi.models.shared.CostManagementConfig;
import org.openapis.openapi.models.shared.CreateClusterRequestInput;
import org.openapis.openapi.models.shared.DNSConfig;
import org.openapis.openapi.models.shared.DNSConfigClusterDNSEnum;
import org.openapis.openapi.models.shared.DNSConfigClusterDNSScopeEnum;
import org.openapis.openapi.models.shared.DailyMaintenanceWindow;
import org.openapis.openapi.models.shared.DatabaseEncryption;
import org.openapis.openapi.models.shared.DatabaseEncryptionStateEnum;
import org.openapis.openapi.models.shared.DefaultSnatStatus;
import org.openapis.openapi.models.shared.DnsCacheConfig;
import org.openapis.openapi.models.shared.EphemeralStorageLocalSsdConfig;
import org.openapis.openapi.models.shared.FastSocket;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterEventTypeEnum;
import org.openapis.openapi.models.shared.Fleet;
import org.openapis.openapi.models.shared.GPUSharingConfig;
import org.openapis.openapi.models.shared.GPUSharingConfigGPUSharingStrategyEnum;
import org.openapis.openapi.models.shared.GatewayAPIConfig;
import org.openapis.openapi.models.shared.GatewayAPIConfigChannelEnum;
import org.openapis.openapi.models.shared.GcePersistentDiskCsiDriverConfig;
import org.openapis.openapi.models.shared.GcfsConfig;
import org.openapis.openapi.models.shared.GcpFilestoreCsiDriverConfig;
import org.openapis.openapi.models.shared.GkeBackupAgentConfig;
import org.openapis.openapi.models.shared.HorizontalPodAutoscaling;
import org.openapis.openapi.models.shared.HttpLoadBalancing;
import org.openapis.openapi.models.shared.IPAllocationPolicyInput;
import org.openapis.openapi.models.shared.IPAllocationPolicyIpv6AccessTypeEnum;
import org.openapis.openapi.models.shared.IPAllocationPolicyStackTypeEnum;
import org.openapis.openapi.models.shared.IdentityServiceConfig;
import org.openapis.openapi.models.shared.KubernetesDashboard;
import org.openapis.openapi.models.shared.LegacyAbac;
import org.openapis.openapi.models.shared.LinuxNodeConfig;
import org.openapis.openapi.models.shared.LinuxNodeConfigCgroupModeEnum;
import org.openapis.openapi.models.shared.LocalNvmeSsdBlockConfig;
import org.openapis.openapi.models.shared.LoggingComponentConfig;
import org.openapis.openapi.models.shared.LoggingComponentConfigEnableComponentsEnum;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfigVariantEnum;
import org.openapis.openapi.models.shared.MaintenanceExclusionOptions;
import org.openapis.openapi.models.shared.MaintenanceExclusionOptionsScopeEnum;
import org.openapis.openapi.models.shared.MaintenancePolicy;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.ManagedPrometheusConfig;
import org.openapis.openapi.models.shared.MasterAuth;
import org.openapis.openapi.models.shared.MasterAuthorizedNetworksConfig;
import org.openapis.openapi.models.shared.MaxPodsConstraint;
import org.openapis.openapi.models.shared.MeshCertificates;
import org.openapis.openapi.models.shared.MonitoringComponentConfig;
import org.openapis.openapi.models.shared.MonitoringComponentConfigEnableComponentsEnum;
import org.openapis.openapi.models.shared.MonitoringConfig;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.NetworkConfigDatapathProviderEnum;
import org.openapis.openapi.models.shared.NetworkConfigPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.NetworkPolicy;
import org.openapis.openapi.models.shared.NetworkPolicyConfig;
import org.openapis.openapi.models.shared.NetworkPolicyProviderEnum;
import org.openapis.openapi.models.shared.NetworkTags;
import org.openapis.openapi.models.shared.NodeConfig;
import org.openapis.openapi.models.shared.NodeConfigDefaults;
import org.openapis.openapi.models.shared.NodeKubeletConfig;
import org.openapis.openapi.models.shared.NodeManagement;
import org.openapis.openapi.models.shared.NodeNetworkConfig;
import org.openapis.openapi.models.shared.NodePool;
import org.openapis.openapi.models.shared.NodePoolAutoConfig;
import org.openapis.openapi.models.shared.NodePoolAutoscaling;
import org.openapis.openapi.models.shared.NodePoolAutoscalingLocationPolicyEnum;
import org.openapis.openapi.models.shared.NodePoolDefaults;
import org.openapis.openapi.models.shared.NodePoolLoggingConfig;
import org.openapis.openapi.models.shared.NodePoolStatusEnum;
import org.openapis.openapi.models.shared.NodeTaint;
import org.openapis.openapi.models.shared.NodeTaintEffectEnum;
import org.openapis.openapi.models.shared.NotificationConfig;
import org.openapis.openapi.models.shared.PlacementPolicy;
import org.openapis.openapi.models.shared.PlacementPolicyTypeEnum;
import org.openapis.openapi.models.shared.PodCIDROverprovisionConfig;
import org.openapis.openapi.models.shared.PrivateClusterConfig;
import org.openapis.openapi.models.shared.PrivateClusterMasterGlobalAccessConfig;
import org.openapis.openapi.models.shared.PubSub;
import org.openapis.openapi.models.shared.RecurringTimeWindow;
import org.openapis.openapi.models.shared.ReleaseChannel;
import org.openapis.openapi.models.shared.ReleaseChannelChannelEnum;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.ResourceLimit;
import org.openapis.openapi.models.shared.ResourceUsageExportConfig;
import org.openapis.openapi.models.shared.SandboxConfig;
import org.openapis.openapi.models.shared.SandboxConfigTypeEnum;
import org.openapis.openapi.models.shared.ServiceExternalIPsConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.ShieldedNodes;
import org.openapis.openapi.models.shared.StandardRolloutPolicy;
import org.openapis.openapi.models.shared.StatusCondition;
import org.openapis.openapi.models.shared.StatusConditionCanonicalCodeEnum;
import org.openapis.openapi.models.shared.StatusConditionCodeEnum;
import org.openapis.openapi.models.shared.TimeWindow;
import org.openapis.openapi.models.shared.UpdateInfo;
import org.openapis.openapi.models.shared.UpgradeSettings;
import org.openapis.openapi.models.shared.UpgradeSettingsStrategyEnum;
import org.openapis.openapi.models.shared.VerticalPodAutoscaling;
import org.openapis.openapi.models.shared.VirtualNIC;
import org.openapis.openapi.models.shared.WindowsNodeConfig;
import org.openapis.openapi.models.shared.WindowsNodeConfigOsVersionEnum;
import org.openapis.openapi.models.shared.WorkloadIdentityConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfigModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersCreateRequest req = new ContainerProjectsZonesClustersCreateRequest("impedit", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                createClusterRequestInput = new CreateClusterRequestInput() {{
                    cluster = new ClusterInput() {{
                        addonsConfig = new AddonsConfig() {{
                            cloudRunConfig = new CloudRunConfig() {{
                                disabled = false;
                                loadBalancerType = CloudRunConfigLoadBalancerTypeEnum.LOAD_BALANCER_TYPE_INTERNAL;
                            }};;
                            configConnectorConfig = new ConfigConnectorConfig() {{
                                enabled = false;
                            }};;
                            dnsCacheConfig = new DnsCacheConfig() {{
                                enabled = false;
                            }};;
                            gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig() {{
                                enabled = false;
                            }};;
                            gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig() {{
                                enabled = false;
                            }};;
                            gkeBackupAgentConfig = new GkeBackupAgentConfig() {{
                                enabled = false;
                            }};;
                            horizontalPodAutoscaling = new HorizontalPodAutoscaling() {{
                                disabled = false;
                            }};;
                            httpLoadBalancing = new HttpLoadBalancing() {{
                                disabled = false;
                            }};;
                            kubernetesDashboard = new KubernetesDashboard() {{
                                disabled = false;
                            }};;
                            networkPolicyConfig = new NetworkPolicyConfig() {{
                                disabled = false;
                            }};;
                        }};;
                        authenticatorGroupsConfig = new AuthenticatorGroupsConfig() {{
                            enabled = false;
                            securityGroup = "sed";
                        }};;
                        autopilot = new Autopilot() {{
                            enabled = false;
                        }};;
                        autoscaling = new ClusterAutoscaling() {{
                            autoprovisioningLocations = new String[]{{
                                add("nesciunt"),
                                add("expedita"),
                            }};
                            autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults() {{
                                bootDiskKmsKey = "eum";
                                diskSizeGb = 426943;
                                diskType = "voluptatum";
                                imageType = "magnam";
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "exercitationem";
                                        description = "ab";
                                    }};;
                                }};;
                                minCpuPlatform = "porro";
                                oauthScopes = new String[]{{
                                    add("nobis"),
                                    add("laboriosam"),
                                }};
                                serviceAccount = "recusandae";
                                shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                    enableIntegrityMonitoring = false;
                                    enableSecureBoot = false;
                                }};;
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "consequuntur";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 28952;
                                            batchPercentage = 3502.07;
                                            batchSoakDuration = "necessitatibus";
                                        }};;
                                    }};;
                                    maxSurge = 95619;
                                    maxUnavailable = 392569;
                                    strategy = UpgradeSettingsStrategyEnum.SURGE;
                                }};;
                            }};;
                            autoscalingProfile = ClusterAutoscalingAutoscalingProfileEnum.BALANCED;
                            enableNodeAutoprovisioning = false;
                            resourceLimits = new org.openapis.openapi.models.shared.ResourceLimit[]{{
                                add(new ResourceLimit() {{
                                    maximum = "harum";
                                    minimum = "sequi";
                                    resourceType = "doloribus";
                                }}),
                                add(new ResourceLimit() {{
                                    maximum = "repudiandae";
                                    minimum = "optio";
                                    resourceType = "occaecati";
                                }}),
                                add(new ResourceLimit() {{
                                    maximum = "nemo";
                                    minimum = "voluptate";
                                    resourceType = "blanditiis";
                                }}),
                            }};
                        }};;
                        binaryAuthorization = new BinaryAuthorization() {{
                            enabled = false;
                            evaluationMode = BinaryAuthorizationEvaluationModeEnum.DISABLED;
                        }};;
                        clusterIpv4Cidr = "voluptas";
                        conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.ALREADY_EXISTS;
                                code = StatusConditionCodeEnum.GCE_QUOTA_EXCEEDED;
                                message = "eius";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.UNKNOWN;
                                code = StatusConditionCodeEnum.GCE_QUOTA_EXCEEDED;
                                message = "nesciunt";
                            }}),
                        }};
                        confidentialNodes = new ConfidentialNodes() {{
                            enabled = false;
                        }};;
                        costManagementConfig = new CostManagementConfig() {{
                            enabled = false;
                        }};;
                        createTime = "fuga";
                        currentMasterVersion = "laudantium";
                        currentNodeCount = 277340;
                        currentNodeVersion = "quasi";
                        databaseEncryption = new DatabaseEncryption() {{
                            keyName = "rem";
                            state = DatabaseEncryptionStateEnum.DECRYPTED;
                        }};;
                        defaultMaxPodsConstraint = new MaxPodsConstraint() {{
                            maxPodsPerNode = "dicta";
                        }};;
                        description = "nisi";
                        enableKubernetesAlpha = false;
                        enableTpu = false;
                        endpoint = "consequuntur";
                        etag = "consectetur";
                        expireTime = "aperiam";
                        fleet = new Fleet() {{
                            membership = "cupiditate";
                            preRegistered = false;
                            project = "reiciendis";
                        }};;
                        identityServiceConfig = new IdentityServiceConfig() {{
                            enabled = false;
                        }};;
                        initialClusterVersion = "soluta";
                        initialNodeCount = 3860;
                        instanceGroupUrls = new String[]{{
                            add("eos"),
                            add("occaecati"),
                            add("iste"),
                        }};
                        ipAllocationPolicy = new IPAllocationPolicyInput() {{
                            additionalPodRangesConfig = new AdditionalPodRangesConfig() {{
                                podRangeNames = new String[]{{
                                    add("inventore"),
                                }};
                            }};;
                            clusterIpv4Cidr = "fuga";
                            clusterIpv4CidrBlock = "accusamus";
                            clusterSecondaryRangeName = "voluptatibus";
                            createSubnetwork = false;
                            ipv6AccessType = IPAllocationPolicyIpv6AccessTypeEnum.EXTERNAL;
                            nodeIpv4Cidr = "omnis";
                            nodeIpv4CidrBlock = "delectus";
                            podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                disable = false;
                            }};;
                            servicesIpv4Cidr = "minima";
                            servicesIpv4CidrBlock = "praesentium";
                            servicesSecondaryRangeName = "maxime";
                            stackType = IPAllocationPolicyStackTypeEnum.STACK_TYPE_UNSPECIFIED;
                            subnetworkName = "temporibus";
                            tpuIpv4CidrBlock = "quos";
                            useIpAliases = false;
                            useRoutes = false;
                        }};;
                        labelFingerprint = "commodi";
                        legacyAbac = new LegacyAbac() {{
                            enabled = false;
                        }};;
                        location = "itaque";
                        locations = new String[]{{
                            add("totam"),
                            add("earum"),
                        }};
                        loggingConfig = new LoggingConfig() {{
                            componentConfig = new LoggingComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.LoggingComponentConfigEnableComponentsEnum[]{{
                                    add(LoggingComponentConfigEnableComponentsEnum.SCHEDULER),
                                    add(LoggingComponentConfigEnableComponentsEnum.CONTROLLER_MANAGER),
                                }};
                            }};;
                        }};;
                        loggingService = "voluptatem";
                        maintenancePolicy = new MaintenancePolicy() {{
                            resourceVersion = "ipsam";
                            window = new MaintenanceWindow() {{
                                dailyMaintenanceWindow = new DailyMaintenanceWindow() {{
                                    duration = "vel";
                                    startTime = "alias";
                                }};;
                                maintenanceExclusions = new java.util.HashMap<String, org.openapis.openapi.models.shared.TimeWindow>() {{
                                    put("non", new TimeWindow() {{
                                        endTime = "maiores";
                                        maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                            scope = MaintenanceExclusionOptionsScopeEnum.NO_UPGRADES;
                                        }};
                                        startTime = "sint";
                                    }});
                                }};
                                recurringWindow = new RecurringTimeWindow() {{
                                    recurrence = "nulla";
                                    window = new TimeWindow() {{
                                        endTime = "deserunt";
                                        maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                            scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_UPGRADES;
                                        }};;
                                        startTime = "nemo";
                                    }};;
                                }};;
                            }};;
                        }};;
                        masterAuth = new MasterAuth() {{
                            clientCertificate = "reprehenderit";
                            clientCertificateConfig = new ClientCertificateConfig() {{
                                issueClientCertificate = false;
                            }};;
                            clientKey = "est";
                            clusterCaCertificate = "quis";
                            password = "sint";
                            username = "Shanie_Ryan99";
                        }};;
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "voluptas";
                                    displayName = "debitis";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "delectus";
                                    displayName = "quae";
                                }}),
                            }};
                            enabled = false;
                            gcpPublicCidrsAccessEnabled = false;
                        }};;
                        meshCertificates = new MeshCertificates() {{
                            enableCertificates = false;
                        }};;
                        monitoringConfig = new MonitoringConfig() {{
                            componentConfig = new MonitoringComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.MonitoringComponentConfigEnableComponentsEnum[]{{
                                    add(MonitoringComponentConfigEnableComponentsEnum.SCHEDULER),
                                    add(MonitoringComponentConfigEnableComponentsEnum.SCHEDULER),
                                    add(MonitoringComponentConfigEnableComponentsEnum.SYSTEM_COMPONENTS),
                                    add(MonitoringComponentConfigEnableComponentsEnum.SYSTEM_COMPONENTS),
                                }};
                            }};;
                            managedPrometheusConfig = new ManagedPrometheusConfig() {{
                                enabled = false;
                            }};;
                        }};;
                        monitoringService = "atque";
                        name = "Pat Cummerata";
                        network = "nam";
                        networkConfig = new NetworkConfig() {{
                            datapathProvider = NetworkConfigDatapathProviderEnum.DATAPATH_PROVIDER_UNSPECIFIED;
                            defaultSnatStatus = new DefaultSnatStatus() {{
                                disabled = false;
                            }};;
                            dnsConfig = new DNSConfig() {{
                                clusterDns = DNSConfigClusterDNSEnum.PLATFORM_DEFAULT;
                                clusterDnsDomain = "voluptate";
                                clusterDnsScope = DNSConfigClusterDNSScopeEnum.DNS_SCOPE_UNSPECIFIED;
                            }};;
                            enableIntraNodeVisibility = false;
                            enableL4ilbSubsetting = false;
                            gatewayApiConfig = new GatewayAPIConfig() {{
                                channel = GatewayAPIConfigChannelEnum.CHANNEL_DISABLED;
                            }};;
                            network = "neque";
                            privateIpv6GoogleAccess = NetworkConfigPrivateIpv6GoogleAccessEnum.PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL;
                            serviceExternalIpsConfig = new ServiceExternalIPsConfig() {{
                                enabled = false;
                            }};;
                            subnetwork = "deleniti";
                        }};;
                        networkPolicy = new NetworkPolicy() {{
                            enabled = false;
                            provider = NetworkPolicyProviderEnum.CALICO;
                        }};;
                        nodeConfig = new NodeConfig() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "odit";
                                    acceleratorType = "voluptatibus";
                                    gpuPartitionSize = "vel";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                        maxSharedClientsPerGpu = "quibusdam";
                                    }};
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "inventore";
                                    acceleratorType = "facere";
                                    gpuPartitionSize = "libero";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                        maxSharedClientsPerGpu = "voluptatibus";
                                    }};
                                }}),
                            }};
                            advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                threadsPerCore = "quia";
                            }};;
                            bootDiskKmsKey = "porro";
                            confidentialNodes = new ConfidentialNodes() {{
                                enabled = false;
                            }};;
                            diskSizeGb = 304198;
                            diskType = "velit";
                            ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                localSsdCount = 75359;
                            }};;
                            fastSocket = new FastSocket() {{
                                enabled = false;
                            }};;
                            gcfsConfig = new GcfsConfig() {{
                                enabled = false;
                            }};;
                            gvnic = new VirtualNIC() {{
                                enabled = false;
                            }};;
                            imageType = "accusantium";
                            kubeletConfig = new NodeKubeletConfig() {{
                                cpuCfsQuota = false;
                                cpuCfsQuotaPeriod = "vel";
                                cpuManagerPolicy = "ea";
                                podPidsLimit = "beatae";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("excepturi", "eum");
                                put("velit", "ut");
                                put("perspiciatis", "earum");
                                put("dicta", "impedit");
                            }};
                            linuxNodeConfig = new LinuxNodeConfig() {{
                                cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V2;
                                sysctls = new java.util.HashMap<String, String>() {{
                                    put("itaque", "alias");
                                    put("nisi", "itaque");
                                    put("velit", "laborum");
                                }};
                            }};;
                            localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                localSsdCount = 250398;
                            }};;
                            localSsdCount = 224467;
                            loggingConfig = new NodePoolLoggingConfig() {{
                                variantConfig = new LoggingVariantConfig() {{
                                    variant = LoggingVariantConfigVariantEnum.DEFAULT_;
                                }};;
                            }};;
                            machineType = "sit";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("consequatur", "officia");
                            }};
                            minCpuPlatform = "recusandae";
                            nodeGroup = "ea";
                            oauthScopes = new String[]{{
                                add("voluptas"),
                                add("facilis"),
                                add("placeat"),
                            }};
                            preemptible = false;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                                key = "expedita";
                                values = new String[]{{
                                    add("a"),
                                    add("voluptate"),
                                    add("ullam"),
                                }};
                            }};;
                            resourceLabels = new java.util.HashMap<String, String>() {{
                                put("necessitatibus", "animi");
                                put("impedit", "ipsam");
                                put("corporis", "est");
                            }};
                            sandboxConfig = new SandboxConfig() {{
                                type = SandboxConfigTypeEnum.GVISOR;
                            }};;
                            serviceAccount = "esse";
                            shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                            }};;
                            spot = false;
                            tags = new String[]{{
                                add("veritatis"),
                                add("vero"),
                            }};
                            taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                    key = "inventore";
                                    value = "dolorem";
                                }}),
                            }};
                            windowsNodeConfig = new WindowsNodeConfig() {{
                                osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_UNSPECIFIED;
                            }};;
                            workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                mode = WorkloadMetadataConfigModeEnum.MODE_UNSPECIFIED;
                            }};;
                        }};;
                        nodeIpv4CidrSize = 611328;
                        nodePoolAutoConfig = new NodePoolAutoConfig() {{
                            networkTags = new NetworkTags() {{
                                tags = new String[]{{
                                    add("nemo"),
                                    add("soluta"),
                                }};
                            }};;
                        }};;
                        nodePoolDefaults = new NodePoolDefaults() {{
                            nodeConfigDefaults = new NodeConfigDefaults() {{
                                gcfsConfig = new GcfsConfig() {{
                                    enabled = false;
                                }};;
                                loggingConfig = new NodePoolLoggingConfig() {{
                                    variantConfig = new LoggingVariantConfig() {{
                                        variant = LoggingVariantConfigVariantEnum.MAX_THROUGHPUT;
                                    }};;
                                }};;
                            }};;
                        }};;
                        nodePools = new org.openapis.openapi.models.shared.NodePool[]{{
                            add(new NodePool() {{
                                autoscaling = new NodePoolAutoscaling() {{
                                    autoprovisioned = false;
                                    enabled = false;
                                    locationPolicy = NodePoolAutoscalingLocationPolicyEnum.ANY;
                                    maxNodeCount = 487676;
                                    minNodeCount = 144691;
                                    totalMaxNodeCount = 545;
                                    totalMinNodeCount = 168042;
                                }};
                                conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.CANCELLED;
                                        code = StatusConditionCodeEnum.UNKNOWN;
                                        message = "modi";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.INVALID_ARGUMENT;
                                        code = StatusConditionCodeEnum.GKE_SERVICE_ACCOUNT_DELETED;
                                        message = "itaque";
                                    }}),
                                }};
                                config = new NodeConfig() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "ipsum";
                                            acceleratorType = "unde";
                                            gpuPartitionSize = "nulla";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "maxime";
                                            }};
                                        }}),
                                    }};
                                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                        threadsPerCore = "quia";
                                    }};
                                    bootDiskKmsKey = "quia";
                                    confidentialNodes = new ConfidentialNodes() {{
                                        enabled = false;
                                    }};
                                    diskSizeGb = 342137;
                                    diskType = "omnis";
                                    ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                        localSsdCount = 727250;
                                    }};
                                    fastSocket = new FastSocket() {{
                                        enabled = false;
                                    }};
                                    gcfsConfig = new GcfsConfig() {{
                                        enabled = false;
                                    }};
                                    gvnic = new VirtualNIC() {{
                                        enabled = false;
                                    }};
                                    imageType = "dicta";
                                    kubeletConfig = new NodeKubeletConfig() {{
                                        cpuCfsQuota = false;
                                        cpuCfsQuotaPeriod = "id";
                                        cpuManagerPolicy = "libero";
                                        podPidsLimit = "fugiat";
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("quos", "placeat");
                                        put("sit", "iusto");
                                        put("ipsa", "voluptates");
                                    }};
                                    linuxNodeConfig = new LinuxNodeConfig() {{
                                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_UNSPECIFIED;
                                        sysctls = new java.util.HashMap<String, String>() {{
                                            put("totam", "dolore");
                                        }};
                                    }};
                                    localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                        localSsdCount = 755106;
                                    }};
                                    localSsdCount = 715053;
                                    loggingConfig = new NodePoolLoggingConfig() {{
                                        variantConfig = new LoggingVariantConfig() {{
                                            variant = LoggingVariantConfigVariantEnum.VARIANT_UNSPECIFIED;
                                        }};
                                    }};
                                    machineType = "autem";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("dolores", "assumenda");
                                        put("beatae", "est");
                                    }};
                                    minCpuPlatform = "facere";
                                    nodeGroup = "corrupti";
                                    oauthScopes = new String[]{{
                                        add("provident"),
                                        add("accusamus"),
                                    }};
                                    preemptible = false;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.SPECIFIC_RESERVATION;
                                        key = "tempore";
                                        values = new String[]{{
                                            add("ea"),
                                            add("autem"),
                                            add("ipsam"),
                                        }};
                                    }};
                                    resourceLabels = new java.util.HashMap<String, String>() {{
                                        put("laudantium", "corporis");
                                        put("officiis", "voluptatibus");
                                        put("cum", "at");
                                    }};
                                    sandboxConfig = new SandboxConfig() {{
                                        type = SandboxConfigTypeEnum.UNSPECIFIED;
                                    }};
                                    serviceAccount = "quia";
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                    }};
                                    spot = false;
                                    tags = new String[]{{
                                        add("fuga"),
                                        add("repudiandae"),
                                        add("accusantium"),
                                    }};
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_EXECUTE;
                                            key = "eos";
                                            value = "quibusdam";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                            key = "praesentium";
                                            value = "odit";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                            key = "corporis";
                                            value = "error";
                                        }}),
                                    }};
                                    windowsNodeConfig = new WindowsNodeConfig() {{
                                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2022;
                                    }};
                                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                        mode = WorkloadMetadataConfigModeEnum.MODE_UNSPECIFIED;
                                    }};
                                }};
                                etag = "recusandae";
                                initialNodeCount = 630871;
                                instanceGroupUrls = new String[]{{
                                    add("quidem"),
                                    add("quis"),
                                }};
                                locations = new String[]{{
                                    add("unde"),
                                }};
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "molestiae";
                                        description = "delectus";
                                    }};
                                }};
                                maxPodsConstraint = new MaxPodsConstraint() {{
                                    maxPodsPerNode = "cupiditate";
                                }};
                                name = "Elaine Gerhold";
                                networkConfig = new NodeNetworkConfig() {{
                                    createPodRange = false;
                                    enablePrivateNodes = false;
                                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                                    }};
                                    podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                        disable = false;
                                    }};
                                    podIpv4CidrBlock = "dignissimos";
                                    podRange = "optio";
                                }};
                                placementPolicy = new PlacementPolicy() {{
                                    type = PlacementPolicyTypeEnum.COMPACT;
                                }};
                                podIpv4CidrSize = 359111;
                                selfLink = "qui";
                                status = NodePoolStatusEnum.RECONCILING;
                                statusMessage = "voluptatum";
                                updateInfo = new UpdateInfo() {{
                                    blueGreenInfo = new BlueGreenInfo() {{
                                        blueInstanceGroupUrls = new String[]{{
                                            add("minima"),
                                            add("placeat"),
                                            add("enim"),
                                        }};
                                        bluePoolDeletionStartTime = "neque";
                                        greenInstanceGroupUrls = new String[]{{
                                            add("minus"),
                                            add("eum"),
                                        }};
                                        greenPoolVersion = "modi";
                                        phase = BlueGreenInfoPhaseEnum.CREATING_GREEN_POOL;
                                    }};
                                }};
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "magnam";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 914971;
                                            batchPercentage = 9781.73;
                                            batchSoakDuration = "tempore";
                                        }};
                                    }};
                                    maxSurge = 46013;
                                    maxUnavailable = 727547;
                                    strategy = UpgradeSettingsStrategyEnum.NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED;
                                }};
                                version = "labore";
                            }}),
                            add(new NodePool() {{
                                autoscaling = new NodePoolAutoscaling() {{
                                    autoprovisioned = false;
                                    enabled = false;
                                    locationPolicy = NodePoolAutoscalingLocationPolicyEnum.BALANCED;
                                    maxNodeCount = 577709;
                                    minNodeCount = 375994;
                                    totalMaxNodeCount = 779180;
                                    totalMinNodeCount = 242099;
                                }};
                                conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.ABORTED;
                                        code = StatusConditionCodeEnum.GKE_SERVICE_ACCOUNT_DELETED;
                                        message = "est";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.UNIMPLEMENTED;
                                        code = StatusConditionCodeEnum.CA_EXPIRING;
                                        message = "tempore";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.INTERNAL;
                                        code = StatusConditionCodeEnum.UNKNOWN;
                                        message = "repellat";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.INTERNAL;
                                        code = StatusConditionCodeEnum.GKE_SERVICE_ACCOUNT_DELETED;
                                        message = "reprehenderit";
                                    }}),
                                }};
                                config = new NodeConfig() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "odio";
                                            acceleratorType = "minima";
                                            gpuPartitionSize = "in";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                                maxSharedClientsPerGpu = "excepturi";
                                            }};
                                        }}),
                                    }};
                                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                        threadsPerCore = "dolores";
                                    }};
                                    bootDiskKmsKey = "error";
                                    confidentialNodes = new ConfidentialNodes() {{
                                        enabled = false;
                                    }};
                                    diskSizeGb = 85076;
                                    diskType = "ducimus";
                                    ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                        localSsdCount = 452729;
                                    }};
                                    fastSocket = new FastSocket() {{
                                        enabled = false;
                                    }};
                                    gcfsConfig = new GcfsConfig() {{
                                        enabled = false;
                                    }};
                                    gvnic = new VirtualNIC() {{
                                        enabled = false;
                                    }};
                                    imageType = "pariatur";
                                    kubeletConfig = new NodeKubeletConfig() {{
                                        cpuCfsQuota = false;
                                        cpuCfsQuotaPeriod = "itaque";
                                        cpuManagerPolicy = "similique";
                                        podPidsLimit = "optio";
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("quaerat", "commodi");
                                        put("officiis", "placeat");
                                    }};
                                    linuxNodeConfig = new LinuxNodeConfig() {{
                                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V2;
                                        sysctls = new java.util.HashMap<String, String>() {{
                                            put("quam", "dolorem");
                                            put("modi", "ipsa");
                                        }};
                                    }};
                                    localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                        localSsdCount = 575534;
                                    }};
                                    localSsdCount = 876027;
                                    loggingConfig = new NodePoolLoggingConfig() {{
                                        variantConfig = new LoggingVariantConfig() {{
                                            variant = LoggingVariantConfigVariantEnum.VARIANT_UNSPECIFIED;
                                        }};
                                    }};
                                    machineType = "repudiandae";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("dicta", "earum");
                                        put("veniam", "animi");
                                        put("dolores", "nam");
                                    }};
                                    minCpuPlatform = "dicta";
                                    nodeGroup = "consequuntur";
                                    oauthScopes = new String[]{{
                                        add("nobis"),
                                        add("ipsa"),
                                        add("ducimus"),
                                        add("maiores"),
                                    }};
                                    preemptible = false;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.UNSPECIFIED;
                                        key = "quasi";
                                        values = new String[]{{
                                            add("pariatur"),
                                            add("libero"),
                                        }};
                                    }};
                                    resourceLabels = new java.util.HashMap<String, String>() {{
                                        put("occaecati", "nemo");
                                        put("aliquam", "nostrum");
                                        put("doloribus", "eligendi");
                                    }};
                                    sandboxConfig = new SandboxConfig() {{
                                        type = SandboxConfigTypeEnum.GVISOR;
                                    }};
                                    serviceAccount = "enim";
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                    }};
                                    spot = false;
                                    tags = new String[]{{
                                        add("animi"),
                                        add("quas"),
                                        add("totam"),
                                        add("molestias"),
                                    }};
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                            key = "saepe";
                                            value = "architecto";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                            key = "iste";
                                            value = "assumenda";
                                        }}),
                                    }};
                                    windowsNodeConfig = new WindowsNodeConfig() {{
                                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2022;
                                    }};
                                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                        mode = WorkloadMetadataConfigModeEnum.GKE_METADATA;
                                    }};
                                }};
                                etag = "velit";
                                initialNodeCount = 38557;
                                instanceGroupUrls = new String[]{{
                                    add("impedit"),
                                    add("cum"),
                                    add("ipsum"),
                                    add("adipisci"),
                                }};
                                locations = new String[]{{
                                    add("deserunt"),
                                    add("doloremque"),
                                    add("quis"),
                                    add("veniam"),
                                }};
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "libero";
                                        description = "architecto";
                                    }};
                                }};
                                maxPodsConstraint = new MaxPodsConstraint() {{
                                    maxPodsPerNode = "cupiditate";
                                }};
                                name = "Sheri Schuppe";
                                networkConfig = new NodeNetworkConfig() {{
                                    createPodRange = false;
                                    enablePrivateNodes = false;
                                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                                    }};
                                    podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                        disable = false;
                                    }};
                                    podIpv4CidrBlock = "sed";
                                    podRange = "asperiores";
                                }};
                                placementPolicy = new PlacementPolicy() {{
                                    type = PlacementPolicyTypeEnum.TYPE_UNSPECIFIED;
                                }};
                                podIpv4CidrSize = 164532;
                                selfLink = "facere";
                                status = NodePoolStatusEnum.RUNNING_WITH_ERROR;
                                statusMessage = "odit";
                                updateInfo = new UpdateInfo() {{
                                    blueGreenInfo = new BlueGreenInfo() {{
                                        blueInstanceGroupUrls = new String[]{{
                                            add("amet"),
                                            add("exercitationem"),
                                            add("ab"),
                                            add("velit"),
                                        }};
                                        bluePoolDeletionStartTime = "facilis";
                                        greenInstanceGroupUrls = new String[]{{
                                            add("nisi"),
                                            add("voluptatibus"),
                                            add("quaerat"),
                                        }};
                                        greenPoolVersion = "blanditiis";
                                        phase = BlueGreenInfoPhaseEnum.NODE_POOL_SOAKING;
                                    }};
                                }};
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "nisi";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 335977;
                                            batchPercentage = 3919.33;
                                            batchSoakDuration = "libero";
                                        }};
                                    }};
                                    maxSurge = 794507;
                                    maxUnavailable = 815200;
                                    strategy = UpgradeSettingsStrategyEnum.SURGE;
                                }};
                                version = "ipsum";
                            }}),
                            add(new NodePool() {{
                                autoscaling = new NodePoolAutoscaling() {{
                                    autoprovisioned = false;
                                    enabled = false;
                                    locationPolicy = NodePoolAutoscalingLocationPolicyEnum.LOCATION_POLICY_UNSPECIFIED;
                                    maxNodeCount = 973819;
                                    minNodeCount = 974589;
                                    totalMaxNodeCount = 162358;
                                    totalMinNodeCount = 891581;
                                }};
                                conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.ABORTED;
                                        code = StatusConditionCodeEnum.GCE_STOCKOUT;
                                        message = "reprehenderit";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.NOT_FOUND;
                                        code = StatusConditionCodeEnum.GCE_STOCKOUT;
                                        message = "iusto";
                                    }}),
                                }};
                                config = new NodeConfig() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "rem";
                                            acceleratorType = "eligendi";
                                            gpuPartitionSize = "fugiat";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "officiis";
                                            }};
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "ducimus";
                                            acceleratorType = "dolor";
                                            gpuPartitionSize = "dicta";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "porro";
                                            }};
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "vitae";
                                            acceleratorType = "dignissimos";
                                            gpuPartitionSize = "esse";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "ad";
                                            }};
                                        }}),
                                    }};
                                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                        threadsPerCore = "aspernatur";
                                    }};
                                    bootDiskKmsKey = "enim";
                                    confidentialNodes = new ConfidentialNodes() {{
                                        enabled = false;
                                    }};
                                    diskSizeGb = 965090;
                                    diskType = "iusto";
                                    ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                        localSsdCount = 491201;
                                    }};
                                    fastSocket = new FastSocket() {{
                                        enabled = false;
                                    }};
                                    gcfsConfig = new GcfsConfig() {{
                                        enabled = false;
                                    }};
                                    gvnic = new VirtualNIC() {{
                                        enabled = false;
                                    }};
                                    imageType = "libero";
                                    kubeletConfig = new NodeKubeletConfig() {{
                                        cpuCfsQuota = false;
                                        cpuCfsQuotaPeriod = "illo";
                                        cpuManagerPolicy = "ab";
                                        podPidsLimit = "incidunt";
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("saepe", "tempore");
                                        put("veniam", "eos");
                                        put("reiciendis", "earum");
                                        put("reprehenderit", "praesentium");
                                    }};
                                    linuxNodeConfig = new LinuxNodeConfig() {{
                                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V1;
                                        sysctls = new java.util.HashMap<String, String>() {{
                                            put("quisquam", "sequi");
                                            put("nihil", "deleniti");
                                            put("illo", "labore");
                                            put("assumenda", "aliquam");
                                        }};
                                    }};
                                    localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                        localSsdCount = 790463;
                                    }};
                                    localSsdCount = 591065;
                                    loggingConfig = new NodePoolLoggingConfig() {{
                                        variantConfig = new LoggingVariantConfig() {{
                                            variant = LoggingVariantConfigVariantEnum.DEFAULT_;
                                        }};
                                    }};
                                    machineType = "repudiandae";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("maxime", "aspernatur");
                                    }};
                                    minCpuPlatform = "nam";
                                    nodeGroup = "expedita";
                                    oauthScopes = new String[]{{
                                        add("provident"),
                                        add("repudiandae"),
                                        add("rerum"),
                                    }};
                                    preemptible = false;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                                        key = "corporis";
                                        values = new String[]{{
                                            add("similique"),
                                            add("repellendus"),
                                            add("iure"),
                                            add("dolorem"),
                                        }};
                                    }};
                                    resourceLabels = new java.util.HashMap<String, String>() {{
                                        put("impedit", "commodi");
                                        put("aut", "voluptatem");
                                    }};
                                    sandboxConfig = new SandboxConfig() {{
                                        type = SandboxConfigTypeEnum.UNSPECIFIED;
                                    }};
                                    serviceAccount = "quae";
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                    }};
                                    spot = false;
                                    tags = new String[]{{
                                        add("illum"),
                                    }};
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                            key = "cum";
                                            value = "amet";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                            key = "dicta";
                                            value = "laudantium";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                            key = "earum";
                                            value = "iusto";
                                        }}),
                                    }};
                                    windowsNodeConfig = new WindowsNodeConfig() {{
                                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_UNSPECIFIED;
                                    }};
                                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                        mode = WorkloadMetadataConfigModeEnum.GCE_METADATA;
                                    }};
                                }};
                                etag = "dolorum";
                                initialNodeCount = 897956;
                                instanceGroupUrls = new String[]{{
                                    add("repudiandae"),
                                    add("consequatur"),
                                    add("nemo"),
                                }};
                                locations = new String[]{{
                                    add("itaque"),
                                    add("facilis"),
                                }};
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "corrupti";
                                        description = "aperiam";
                                    }};
                                }};
                                maxPodsConstraint = new MaxPodsConstraint() {{
                                    maxPodsPerNode = "sint";
                                }};
                                name = "Mr. Craig Leannon";
                                networkConfig = new NodeNetworkConfig() {{
                                    createPodRange = false;
                                    enablePrivateNodes = false;
                                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                                    }};
                                    podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                        disable = false;
                                    }};
                                    podIpv4CidrBlock = "sunt";
                                    podRange = "a";
                                }};
                                placementPolicy = new PlacementPolicy() {{
                                    type = PlacementPolicyTypeEnum.TYPE_UNSPECIFIED;
                                }};
                                podIpv4CidrSize = 582320;
                                selfLink = "atque";
                                status = NodePoolStatusEnum.STATUS_UNSPECIFIED;
                                statusMessage = "at";
                                updateInfo = new UpdateInfo() {{
                                    blueGreenInfo = new BlueGreenInfo() {{
                                        blueInstanceGroupUrls = new String[]{{
                                            add("minus"),
                                            add("esse"),
                                        }};
                                        bluePoolDeletionStartTime = "voluptatem";
                                        greenInstanceGroupUrls = new String[]{{
                                            add("rerum"),
                                        }};
                                        greenPoolVersion = "ea";
                                        phase = BlueGreenInfoPhaseEnum.PHASE_UNSPECIFIED;
                                    }};
                                }};
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "dignissimos";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 998026;
                                            batchPercentage = 2436.78;
                                            batchSoakDuration = "porro";
                                        }};
                                    }};
                                    maxSurge = 588639;
                                    maxUnavailable = 231382;
                                    strategy = UpgradeSettingsStrategyEnum.SURGE;
                                }};
                                version = "dignissimos";
                            }}),
                        }};
                        notificationConfig = new NotificationConfig() {{
                            pubsub = new PubSub() {{
                                enabled = false;
                                filter = new Filter() {{
                                    eventType = new org.openapis.openapi.models.shared.FilterEventTypeEnum[]{{
                                        add(FilterEventTypeEnum.UPGRADE_EVENT),
                                    }};
                                }};;
                                topic = "natus";
                            }};;
                        }};;
                        privateClusterConfig = new PrivateClusterConfig() {{
                            enablePrivateEndpoint = false;
                            enablePrivateNodes = false;
                            masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig() {{
                                enabled = false;
                            }};;
                            masterIpv4CidrBlock = "temporibus";
                            peeringName = "officia";
                            privateEndpoint = "amet";
                            privateEndpointSubnetwork = "tenetur";
                            publicEndpoint = "aspernatur";
                        }};;
                        releaseChannel = new ReleaseChannel() {{
                            channel = ReleaseChannelChannelEnum.STABLE;
                        }};;
                        resourceLabels = new java.util.HashMap<String, String>() {{
                            put("illum", "laborum");
                            put("dignissimos", "vero");
                            put("qui", "consectetur");
                            put("repellat", "explicabo");
                        }};
                        resourceUsageExportConfig = new ResourceUsageExportConfig() {{
                            bigqueryDestination = new BigQueryDestination() {{
                                datasetId = "explicabo";
                            }};;
                            consumptionMeteringConfig = new ConsumptionMeteringConfig() {{
                                enabled = false;
                            }};;
                            enableNetworkEgressMetering = false;
                        }};;
                        selfLink = "exercitationem";
                        servicesIpv4Cidr = "nihil";
                        shieldedNodes = new ShieldedNodes() {{
                            enabled = false;
                        }};;
                        status = ClusterStatusEnum.PROVISIONING;
                        statusMessage = "ab";
                        subnetwork = "illo";
                        tpuIpv4CidrBlock = "hic";
                        verticalPodAutoscaling = new VerticalPodAutoscaling() {{
                            enabled = false;
                        }};;
                        workloadIdentityConfig = new WorkloadIdentityConfig() {{
                            workloadPool = "deserunt";
                        }};;
                        zone = "delectus";
                    }};;
                    parent = "non";
                    projectId = "distinctio";
                    zone = "in";
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.JSON;
                callback = "numquam";
                fields = "repudiandae";
                key = "modi";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "accusamus";
                uploadProtocol = "rem";
            }};            

            ContainerProjectsZonesClustersCreateResponse res = sdk.projects.containerProjectsZonesClustersCreate(req, new ContainerProjectsZonesClustersCreateSecurity("aperiam", "odit") {{
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

## containerProjectsZonesClustersDelete

Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersDeleteRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersDeleteResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersDeleteRequest req = new ContainerProjectsZonesClustersDeleteRequest("deleniti", "enim", "voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "sit";
                key = "modi";
                name = "Robin O'Hara";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "veniam";
                uploadProtocol = "reiciendis";
            }};            

            ContainerProjectsZonesClustersDeleteResponse res = sdk.projects.containerProjectsZonesClustersDelete(req, new ContainerProjectsZonesClustersDeleteSecurity("ab", "modi") {{
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

## containerProjectsZonesClustersGet

Gets the details of a specific cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersGetRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersGetResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersGetRequest req = new ContainerProjectsZonesClustersGetRequest("aut", "aut", "eveniet") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "possimus";
                key = "voluptate";
                name = "Peggy Hagenes";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "iusto";
                uploadProtocol = "quas";
            }};            

            ContainerProjectsZonesClustersGetResponse res = sdk.projects.containerProjectsZonesClustersGet(req, new ContainerProjectsZonesClustersGetSecurity("et", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsZonesClustersLegacyAbac

Enables or disables the ABAC authorization mechanism on a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersLegacyAbacRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersLegacyAbacResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersLegacyAbacSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetLegacyAbacRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersLegacyAbacRequest req = new ContainerProjectsZonesClustersLegacyAbacRequest("amet", "autem", "fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                setLegacyAbacRequest = new SetLegacyAbacRequest() {{
                    clusterId = "rem";
                    enabled = false;
                    name = "Brandy Langosh Jr.";
                    projectId = "eaque";
                    zone = "saepe";
                }};;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "officia";
                key = "sed";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "eveniet";
                uploadProtocol = "hic";
            }};            

            ContainerProjectsZonesClustersLegacyAbacResponse res = sdk.projects.containerProjectsZonesClustersLegacyAbac(req, new ContainerProjectsZonesClustersLegacyAbacSecurity("voluptatem", "incidunt") {{
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

## containerProjectsZonesClustersList

Lists all clusters owned by a project in either the specified zone or all zones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersListRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersListResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersListRequest req = new ContainerProjectsZonesClustersListRequest("qui", "qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "aliquid";
                key = "modi";
                oauthToken = "optio";
                parent = "voluptatibus";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "officia";
                uploadProtocol = "libero";
            }};            

            ContainerProjectsZonesClustersListResponse res = sdk.projects.containerProjectsZonesClustersList(req, new ContainerProjectsZonesClustersListSecurity("totam", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsZonesClustersLocations

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersLocationsRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersLocationsResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersLocationsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetLocationsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersLocationsRequest req = new ContainerProjectsZonesClustersLocationsRequest("aliquid", "ea", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                setLocationsRequest = new SetLocationsRequest() {{
                    clusterId = "odit";
                    locations = new String[]{{
                        add("reiciendis"),
                    }};
                    name = "Drew Osinski";
                    projectId = "doloremque";
                    zone = "nisi";
                }};;
                accessToken = "rerum";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "non";
                key = "rem";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "quisquam";
                uploadProtocol = "dicta";
            }};            

            ContainerProjectsZonesClustersLocationsResponse res = sdk.projects.containerProjectsZonesClustersLocations(req, new ContainerProjectsZonesClustersLocationsSecurity("voluptatibus", "eligendi") {{
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

## containerProjectsZonesClustersLogging

Sets the logging service for a specific cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersLoggingRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersLoggingResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersLoggingSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetLoggingServiceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersLoggingRequest req = new ContainerProjectsZonesClustersLoggingRequest("quae", "officiis", "architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                setLoggingServiceRequest = new SetLoggingServiceRequest() {{
                    clusterId = "enim";
                    loggingService = "optio";
                    name = "Joseph Purdy";
                    projectId = "iste";
                    zone = "dicta";
                }};;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "modi";
                key = "itaque";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "consequuntur";
                uploadProtocol = "assumenda";
            }};            

            ContainerProjectsZonesClustersLoggingResponse res = sdk.projects.containerProjectsZonesClustersLogging(req, new ContainerProjectsZonesClustersLoggingSecurity("vero", "doloribus") {{
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

## containerProjectsZonesClustersMaster

Updates the master for a specific cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersMasterRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersMasterResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersMasterSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UpdateMasterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersMasterRequest req = new ContainerProjectsZonesClustersMasterRequest("impedit", "porro", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                updateMasterRequest = new UpdateMasterRequest() {{
                    clusterId = "reiciendis";
                    masterVersion = "ab";
                    name = "Javier Koch";
                    projectId = "nesciunt";
                    zone = "debitis";
                }};;
                accessToken = "vel";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "voluptas";
                key = "consequuntur";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "distinctio";
                uploadProtocol = "eius";
            }};            

            ContainerProjectsZonesClustersMasterResponse res = sdk.projects.containerProjectsZonesClustersMaster(req, new ContainerProjectsZonesClustersMasterSecurity("ipsa", "rem") {{
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

## containerProjectsZonesClustersMonitoring

Sets the monitoring service for a specific cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersMonitoringRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersMonitoringResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersMonitoringSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetMonitoringServiceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersMonitoringRequest req = new ContainerProjectsZonesClustersMonitoringRequest("maiores", "accusantium", "veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                setMonitoringServiceRequest = new SetMonitoringServiceRequest() {{
                    clusterId = "neque";
                    monitoringService = "facere";
                    name = "Olga Wyman";
                    projectId = "delectus";
                    zone = "velit";
                }};;
                accessToken = "vitae";
                alt = AltEnum.JSON;
                callback = "similique";
                fields = "illo";
                key = "repellat";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "possimus";
                uploadProtocol = "unde";
            }};            

            ContainerProjectsZonesClustersMonitoringResponse res = sdk.projects.containerProjectsZonesClustersMonitoring(req, new ContainerProjectsZonesClustersMonitoringSecurity("incidunt", "explicabo") {{
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

## containerProjectsZonesClustersNodePoolsAutoscaling

Sets the autoscaling settings for the specified node pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsAutoscalingRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsAutoscalingResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NodePoolAutoscaling;
import org.openapis.openapi.models.shared.NodePoolAutoscalingLocationPolicyEnum;
import org.openapis.openapi.models.shared.SetNodePoolAutoscalingRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsAutoscalingRequest req = new ContainerProjectsZonesClustersNodePoolsAutoscalingRequest("ipsam", "cupiditate", "optio", "alias") {{
                dollarXgafv = XgafvEnum.TWO;
                setNodePoolAutoscalingRequest = new SetNodePoolAutoscalingRequest() {{
                    autoscaling = new NodePoolAutoscaling() {{
                        autoprovisioned = false;
                        enabled = false;
                        locationPolicy = NodePoolAutoscalingLocationPolicyEnum.LOCATION_POLICY_UNSPECIFIED;
                        maxNodeCount = 412433;
                        minNodeCount = 956124;
                        totalMaxNodeCount = 164319;
                        totalMinNodeCount = 330440;
                    }};;
                    clusterId = "debitis";
                    name = "Kirk Goyette";
                    nodePoolId = "adipisci";
                    projectId = "libero";
                    zone = "in";
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "ab";
                key = "beatae";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "quisquam";
                uploadProtocol = "dolor";
            }};            

            ContainerProjectsZonesClustersNodePoolsAutoscalingResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsAutoscaling(req, new ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity("ducimus", "fuga") {{
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

## containerProjectsZonesClustersNodePoolsCreate

Creates a node pool for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsCreateRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsCreateResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsCreateSecurity;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AdvancedMachineFeatures;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoUpgradeOptions;
import org.openapis.openapi.models.shared.BlueGreenInfo;
import org.openapis.openapi.models.shared.BlueGreenInfoPhaseEnum;
import org.openapis.openapi.models.shared.BlueGreenSettings;
import org.openapis.openapi.models.shared.ConfidentialNodes;
import org.openapis.openapi.models.shared.CreateNodePoolRequest;
import org.openapis.openapi.models.shared.EphemeralStorageLocalSsdConfig;
import org.openapis.openapi.models.shared.FastSocket;
import org.openapis.openapi.models.shared.GPUSharingConfig;
import org.openapis.openapi.models.shared.GPUSharingConfigGPUSharingStrategyEnum;
import org.openapis.openapi.models.shared.GcfsConfig;
import org.openapis.openapi.models.shared.LinuxNodeConfig;
import org.openapis.openapi.models.shared.LinuxNodeConfigCgroupModeEnum;
import org.openapis.openapi.models.shared.LocalNvmeSsdBlockConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfigVariantEnum;
import org.openapis.openapi.models.shared.MaxPodsConstraint;
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.NodeConfig;
import org.openapis.openapi.models.shared.NodeKubeletConfig;
import org.openapis.openapi.models.shared.NodeManagement;
import org.openapis.openapi.models.shared.NodeNetworkConfig;
import org.openapis.openapi.models.shared.NodePool;
import org.openapis.openapi.models.shared.NodePoolAutoscaling;
import org.openapis.openapi.models.shared.NodePoolAutoscalingLocationPolicyEnum;
import org.openapis.openapi.models.shared.NodePoolLoggingConfig;
import org.openapis.openapi.models.shared.NodePoolStatusEnum;
import org.openapis.openapi.models.shared.NodeTaint;
import org.openapis.openapi.models.shared.NodeTaintEffectEnum;
import org.openapis.openapi.models.shared.PlacementPolicy;
import org.openapis.openapi.models.shared.PlacementPolicyTypeEnum;
import org.openapis.openapi.models.shared.PodCIDROverprovisionConfig;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.SandboxConfig;
import org.openapis.openapi.models.shared.SandboxConfigTypeEnum;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.StandardRolloutPolicy;
import org.openapis.openapi.models.shared.StatusCondition;
import org.openapis.openapi.models.shared.StatusConditionCanonicalCodeEnum;
import org.openapis.openapi.models.shared.StatusConditionCodeEnum;
import org.openapis.openapi.models.shared.UpdateInfo;
import org.openapis.openapi.models.shared.UpgradeSettings;
import org.openapis.openapi.models.shared.UpgradeSettingsStrategyEnum;
import org.openapis.openapi.models.shared.VirtualNIC;
import org.openapis.openapi.models.shared.WindowsNodeConfig;
import org.openapis.openapi.models.shared.WindowsNodeConfigOsVersionEnum;
import org.openapis.openapi.models.shared.WorkloadMetadataConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfigModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsCreateRequest req = new ContainerProjectsZonesClustersNodePoolsCreateRequest("minima", "architecto", "qui") {{
                dollarXgafv = XgafvEnum.ONE;
                createNodePoolRequest = new CreateNodePoolRequest() {{
                    clusterId = "magni";
                    nodePool = new NodePool() {{
                        autoscaling = new NodePoolAutoscaling() {{
                            autoprovisioned = false;
                            enabled = false;
                            locationPolicy = NodePoolAutoscalingLocationPolicyEnum.LOCATION_POLICY_UNSPECIFIED;
                            maxNodeCount = 240490;
                            minNodeCount = 506343;
                            totalMaxNodeCount = 220528;
                            totalMinNodeCount = 349898;
                        }};;
                        conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.OUT_OF_RANGE;
                                code = StatusConditionCodeEnum.CLOUD_KMS_KEY_ERROR;
                                message = "sit";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.ALREADY_EXISTS;
                                code = StatusConditionCodeEnum.SET_BY_OPERATOR;
                                message = "consequuntur";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.INVALID_ARGUMENT;
                                code = StatusConditionCodeEnum.SET_BY_OPERATOR;
                                message = "modi";
                            }}),
                        }};
                        config = new NodeConfig() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "quod";
                                    acceleratorType = "itaque";
                                    gpuPartitionSize = "a";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                        maxSharedClientsPerGpu = "enim";
                                    }};
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "doloribus";
                                    acceleratorType = "assumenda";
                                    gpuPartitionSize = "officiis";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                        maxSharedClientsPerGpu = "alias";
                                    }};
                                }}),
                            }};
                            advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                threadsPerCore = "culpa";
                            }};;
                            bootDiskKmsKey = "ipsa";
                            confidentialNodes = new ConfidentialNodes() {{
                                enabled = false;
                            }};;
                            diskSizeGb = 751033;
                            diskType = "necessitatibus";
                            ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                localSsdCount = 155978;
                            }};;
                            fastSocket = new FastSocket() {{
                                enabled = false;
                            }};;
                            gcfsConfig = new GcfsConfig() {{
                                enabled = false;
                            }};;
                            gvnic = new VirtualNIC() {{
                                enabled = false;
                            }};;
                            imageType = "dicta";
                            kubeletConfig = new NodeKubeletConfig() {{
                                cpuCfsQuota = false;
                                cpuCfsQuotaPeriod = "vel";
                                cpuManagerPolicy = "perspiciatis";
                                podPidsLimit = "debitis";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("architecto", "accusantium");
                                put("perferendis", "veritatis");
                            }};
                            linuxNodeConfig = new LinuxNodeConfig() {{
                                cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V1;
                                sysctls = new java.util.HashMap<String, String>() {{
                                    put("iure", "quibusdam");
                                    put("quod", "nemo");
                                    put("recusandae", "velit");
                                    put("magnam", "dignissimos");
                                }};
                            }};;
                            localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                localSsdCount = 388404;
                            }};;
                            localSsdCount = 152283;
                            loggingConfig = new NodePoolLoggingConfig() {{
                                variantConfig = new LoggingVariantConfig() {{
                                    variant = LoggingVariantConfigVariantEnum.DEFAULT_;
                                }};;
                            }};;
                            machineType = "natus";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("cum", "doloribus");
                                put("facilis", "quidem");
                                put("itaque", "laboriosam");
                            }};
                            minCpuPlatform = "unde";
                            nodeGroup = "modi";
                            oauthScopes = new String[]{{
                                add("hic"),
                                add("cum"),
                                add("aspernatur"),
                            }};
                            preemptible = false;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                                key = "nam";
                                values = new String[]{{
                                    add("recusandae"),
                                    add("quod"),
                                }};
                            }};;
                            resourceLabels = new java.util.HashMap<String, String>() {{
                                put("saepe", "autem");
                                put("quo", "nesciunt");
                                put("illum", "nemo");
                            }};
                            sandboxConfig = new SandboxConfig() {{
                                type = SandboxConfigTypeEnum.GVISOR;
                            }};;
                            serviceAccount = "facilis";
                            shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                            }};;
                            spot = false;
                            tags = new String[]{{
                                add("mollitia"),
                            }};
                            taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_EXECUTE;
                                    key = "distinctio";
                                    value = "pariatur";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                    key = "facere";
                                    value = "laborum";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_EXECUTE;
                                    key = "laborum";
                                    value = "incidunt";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_EXECUTE;
                                    key = "ipsam";
                                    value = "alias";
                                }}),
                            }};
                            windowsNodeConfig = new WindowsNodeConfig() {{
                                osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2019;
                            }};;
                            workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                mode = WorkloadMetadataConfigModeEnum.GCE_METADATA;
                            }};;
                        }};;
                        etag = "molestias";
                        initialNodeCount = 672889;
                        instanceGroupUrls = new String[]{{
                            add("occaecati"),
                            add("labore"),
                            add("quo"),
                        }};
                        locations = new String[]{{
                            add("fugit"),
                        }};
                        management = new NodeManagement() {{
                            autoRepair = false;
                            autoUpgrade = false;
                            upgradeOptions = new AutoUpgradeOptions() {{
                                autoUpgradeStartTime = "aliquid";
                                description = "magnam";
                            }};;
                        }};;
                        maxPodsConstraint = new MaxPodsConstraint() {{
                            maxPodsPerNode = "quaerat";
                        }};;
                        name = "Moses Heathcote";
                        networkConfig = new NodeNetworkConfig() {{
                            createPodRange = false;
                            enablePrivateNodes = false;
                            networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                            }};;
                            podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                disable = false;
                            }};;
                            podIpv4CidrBlock = "error";
                            podRange = "mollitia";
                        }};;
                        placementPolicy = new PlacementPolicy() {{
                            type = PlacementPolicyTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        podIpv4CidrSize = 344289;
                        selfLink = "esse";
                        status = NodePoolStatusEnum.RUNNING_WITH_ERROR;
                        statusMessage = "fuga";
                        updateInfo = new UpdateInfo() {{
                            blueGreenInfo = new BlueGreenInfo() {{
                                blueInstanceGroupUrls = new String[]{{
                                    add("impedit"),
                                    add("quasi"),
                                    add("deserunt"),
                                    add("quod"),
                                }};
                                bluePoolDeletionStartTime = "laboriosam";
                                greenInstanceGroupUrls = new String[]{{
                                    add("voluptatem"),
                                }};
                                greenPoolVersion = "facere";
                                phase = BlueGreenInfoPhaseEnum.ROLLBACK_STARTED;
                            }};;
                        }};;
                        upgradeSettings = new UpgradeSettings() {{
                            blueGreenSettings = new BlueGreenSettings() {{
                                nodePoolSoakDuration = "maxime";
                                standardRolloutPolicy = new StandardRolloutPolicy() {{
                                    batchNodeCount = 9375;
                                    batchPercentage = 510.07;
                                    batchSoakDuration = "architecto";
                                }};;
                            }};;
                            maxSurge = 627161;
                            maxUnavailable = 783274;
                            strategy = UpgradeSettingsStrategyEnum.BLUE_GREEN;
                        }};;
                        version = "quae";
                    }};;
                    parent = "magni";
                    projectId = "officiis";
                    zone = "sed";
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "excepturi";
                key = "a";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "maiores";
                uploadProtocol = "alias";
            }};            

            ContainerProjectsZonesClustersNodePoolsCreateResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsCreate(req, new ContainerProjectsZonesClustersNodePoolsCreateSecurity("asperiores", "rem") {{
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

## containerProjectsZonesClustersNodePoolsDelete

Deletes a node pool from a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsDeleteRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsDeleteResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsDeleteRequest req = new ContainerProjectsZonesClustersNodePoolsDeleteRequest("dicta", "suscipit", "earum", "doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "eligendi";
                key = "quasi";
                name = "Mr. Leigh Mann";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "dicta";
                uploadProtocol = "odit";
            }};            

            ContainerProjectsZonesClustersNodePoolsDeleteResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsDelete(req, new ContainerProjectsZonesClustersNodePoolsDeleteSecurity("corporis", "rerum") {{
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

## containerProjectsZonesClustersNodePoolsGet

Retrieves the requested node pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsGetRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsGetResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsGetRequest req = new ContainerProjectsZonesClustersNodePoolsGetRequest("alias", "error", "vel", "accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "veritatis";
                key = "ullam";
                name = "Harriet Gottlieb";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "omnis";
                uploadProtocol = "sed";
            }};            

            ContainerProjectsZonesClustersNodePoolsGetResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsGet(req, new ContainerProjectsZonesClustersNodePoolsGetSecurity("nesciunt", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.nodePool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsZonesClustersNodePoolsList

Lists the node pools for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsListRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsListResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsListRequest req = new ContainerProjectsZonesClustersNodePoolsListRequest("quis", "cupiditate", "aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "reiciendis";
                key = "amet";
                oauthToken = "nemo";
                parent = "ipsa";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "tenetur";
                uploadProtocol = "quas";
            }};            

            ContainerProjectsZonesClustersNodePoolsListResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsList(req, new ContainerProjectsZonesClustersNodePoolsListSecurity("molestiae", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNodePoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsZonesClustersNodePoolsRollback

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsRollbackRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsRollbackResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsRollbackSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RollbackNodePoolUpgradeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsRollbackRequest req = new ContainerProjectsZonesClustersNodePoolsRollbackRequest("asperiores", "a", "nobis", "perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                rollbackNodePoolUpgradeRequest = new RollbackNodePoolUpgradeRequest() {{
                    clusterId = "dicta";
                    name = "Edgar Upton";
                    nodePoolId = "quidem";
                    projectId = "modi";
                    respectPdb = false;
                    zone = "voluptates";
                }};;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "sequi";
                fields = "eligendi";
                key = "asperiores";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "sint";
                uploadProtocol = "repellat";
            }};            

            ContainerProjectsZonesClustersNodePoolsRollbackResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsRollback(req, new ContainerProjectsZonesClustersNodePoolsRollbackSecurity("a", "animi") {{
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

## containerProjectsZonesClustersNodePoolsSetManagement

Sets the NodeManagement options for a node pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsSetManagementRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsSetManagementResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsSetManagementSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoUpgradeOptions;
import org.openapis.openapi.models.shared.NodeManagement;
import org.openapis.openapi.models.shared.SetNodePoolManagementRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsSetManagementRequest req = new ContainerProjectsZonesClustersNodePoolsSetManagementRequest("maiores", "itaque", "nulla", "deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                setNodePoolManagementRequest = new SetNodePoolManagementRequest() {{
                    clusterId = "velit";
                    management = new NodeManagement() {{
                        autoRepair = false;
                        autoUpgrade = false;
                        upgradeOptions = new AutoUpgradeOptions() {{
                            autoUpgradeStartTime = "officiis";
                            description = "enim";
                        }};;
                    }};;
                    name = "Elias Keeling MD";
                    nodePoolId = "impedit";
                    projectId = "quasi";
                    zone = "blanditiis";
                }};;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "eos";
                fields = "nobis";
                key = "natus";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "magnam";
                uploadProtocol = "reprehenderit";
            }};            

            ContainerProjectsZonesClustersNodePoolsSetManagementResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsSetManagement(req, new ContainerProjectsZonesClustersNodePoolsSetManagementSecurity("quod", "quos") {{
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

## containerProjectsZonesClustersNodePoolsSetSize

Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsSetSizeRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsSetSizeResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsSetSizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetNodePoolSizeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsSetSizeRequest req = new ContainerProjectsZonesClustersNodePoolsSetSizeRequest("corrupti", "amet", "molestiae", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                setNodePoolSizeRequest = new SetNodePoolSizeRequest() {{
                    clusterId = "modi";
                    name = "Jana Brakus";
                    nodeCount = 125811;
                    nodePoolId = "maiores";
                    projectId = "neque";
                    zone = "odit";
                }};;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "eaque";
                key = "exercitationem";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "ad";
                uploadProtocol = "nisi";
            }};            

            ContainerProjectsZonesClustersNodePoolsSetSizeResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsSetSize(req, new ContainerProjectsZonesClustersNodePoolsSetSizeSecurity("tenetur", "quis") {{
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

## containerProjectsZonesClustersNodePoolsUpdate

Updates the version and/or image type for the specified node pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsUpdateRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsUpdateResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersNodePoolsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BlueGreenSettings;
import org.openapis.openapi.models.shared.ConfidentialNodes;
import org.openapis.openapi.models.shared.FastSocket;
import org.openapis.openapi.models.shared.GcfsConfig;
import org.openapis.openapi.models.shared.LinuxNodeConfig;
import org.openapis.openapi.models.shared.LinuxNodeConfigCgroupModeEnum;
import org.openapis.openapi.models.shared.LoggingVariantConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfigVariantEnum;
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.NetworkTags;
import org.openapis.openapi.models.shared.NodeKubeletConfig;
import org.openapis.openapi.models.shared.NodeLabels;
import org.openapis.openapi.models.shared.NodeNetworkConfig;
import org.openapis.openapi.models.shared.NodePoolLoggingConfig;
import org.openapis.openapi.models.shared.NodeTaint;
import org.openapis.openapi.models.shared.NodeTaintEffectEnum;
import org.openapis.openapi.models.shared.NodeTaints;
import org.openapis.openapi.models.shared.PodCIDROverprovisionConfig;
import org.openapis.openapi.models.shared.ResourceLabels;
import org.openapis.openapi.models.shared.StandardRolloutPolicy;
import org.openapis.openapi.models.shared.UpdateNodePoolRequest;
import org.openapis.openapi.models.shared.UpgradeSettings;
import org.openapis.openapi.models.shared.UpgradeSettingsStrategyEnum;
import org.openapis.openapi.models.shared.VirtualNIC;
import org.openapis.openapi.models.shared.WindowsNodeConfig;
import org.openapis.openapi.models.shared.WindowsNodeConfigOsVersionEnum;
import org.openapis.openapi.models.shared.WorkloadMetadataConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfigModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsUpdateRequest req = new ContainerProjectsZonesClustersNodePoolsUpdateRequest("quibusdam", "nemo", "suscipit", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                updateNodePoolRequest = new UpdateNodePoolRequest() {{
                    clusterId = "quidem";
                    confidentialNodes = new ConfidentialNodes() {{
                        enabled = false;
                    }};;
                    etag = "repellendus";
                    fastSocket = new FastSocket() {{
                        enabled = false;
                    }};;
                    gcfsConfig = new GcfsConfig() {{
                        enabled = false;
                    }};;
                    gvnic = new VirtualNIC() {{
                        enabled = false;
                    }};;
                    imageType = "perferendis";
                    kubeletConfig = new NodeKubeletConfig() {{
                        cpuCfsQuota = false;
                        cpuCfsQuotaPeriod = "id";
                        cpuManagerPolicy = "sapiente";
                        podPidsLimit = "sed";
                    }};;
                    labels = new NodeLabels() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("repellat", "repudiandae");
                            put("architecto", "adipisci");
                            put("pariatur", "harum");
                            put("dolore", "voluptatibus");
                        }};
                    }};;
                    linuxNodeConfig = new LinuxNodeConfig() {{
                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V1;
                        sysctls = new java.util.HashMap<String, String>() {{
                            put("minus", "soluta");
                        }};
                    }};;
                    locations = new String[]{{
                        add("velit"),
                        add("earum"),
                        add("praesentium"),
                    }};
                    loggingConfig = new NodePoolLoggingConfig() {{
                        variantConfig = new LoggingVariantConfig() {{
                            variant = LoggingVariantConfigVariantEnum.DEFAULT_;
                        }};;
                    }};;
                    name = "Joyce O'Connell";
                    nodeNetworkConfig = new NodeNetworkConfig() {{
                        createPodRange = false;
                        enablePrivateNodes = false;
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                            disable = false;
                        }};;
                        podIpv4CidrBlock = "doloremque";
                        podRange = "expedita";
                    }};;
                    nodePoolId = "corrupti";
                    nodeVersion = "eaque";
                    projectId = "deserunt";
                    resourceLabels = new ResourceLabels() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("excepturi", "magni");
                            put("tempora", "possimus");
                        }};
                    }};;
                    tags = new NetworkTags() {{
                        tags = new String[]{{
                            add("rerum"),
                        }};
                    }};;
                    taints = new NodeTaints() {{
                        taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.NO_EXECUTE;
                                key = "optio";
                                value = "delectus";
                            }}),
                        }};
                    }};;
                    upgradeSettings = new UpgradeSettings() {{
                        blueGreenSettings = new BlueGreenSettings() {{
                            nodePoolSoakDuration = "minus";
                            standardRolloutPolicy = new StandardRolloutPolicy() {{
                                batchNodeCount = 774748;
                                batchPercentage = 5503.38;
                                batchSoakDuration = "asperiores";
                            }};;
                        }};;
                        maxSurge = 532326;
                        maxUnavailable = 614770;
                        strategy = UpgradeSettingsStrategyEnum.BLUE_GREEN;
                    }};;
                    windowsNodeConfig = new WindowsNodeConfig() {{
                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_UNSPECIFIED;
                    }};;
                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                        mode = WorkloadMetadataConfigModeEnum.MODE_UNSPECIFIED;
                    }};;
                    zone = "aut";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "possimus";
                key = "neque";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "sapiente";
                uploadProtocol = "mollitia";
            }};            

            ContainerProjectsZonesClustersNodePoolsUpdateResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsUpdate(req, new ContainerProjectsZonesClustersNodePoolsUpdateSecurity("quae", "quos") {{
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

## containerProjectsZonesClustersResourceLabels

Sets labels on a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersResourceLabelsRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersResourceLabelsResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersResourceLabelsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersResourceLabelsRequest req = new ContainerProjectsZonesClustersResourceLabelsRequest("aperiam", "non", "voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                setLabelsRequest = new SetLabelsRequest() {{
                    clusterId = "aliquam";
                    labelFingerprint = "quisquam";
                    name = "Ms. Russell Wunsch";
                    projectId = "est";
                    resourceLabels = new java.util.HashMap<String, String>() {{
                        put("aliquid", "consectetur");
                    }};
                    zone = "cumque";
                }};;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "adipisci";
                key = "recusandae";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "numquam";
                uploadProtocol = "sequi";
            }};            

            ContainerProjectsZonesClustersResourceLabelsResponse res = sdk.projects.containerProjectsZonesClustersResourceLabels(req, new ContainerProjectsZonesClustersResourceLabelsSecurity("voluptatum", "sit") {{
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

## containerProjectsZonesClustersSetMaintenancePolicy

Sets the maintenance policy for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersSetMaintenancePolicyRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersSetMaintenancePolicyResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersSetMaintenancePolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DailyMaintenanceWindow;
import org.openapis.openapi.models.shared.MaintenanceExclusionOptions;
import org.openapis.openapi.models.shared.MaintenanceExclusionOptionsScopeEnum;
import org.openapis.openapi.models.shared.MaintenancePolicy;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.RecurringTimeWindow;
import org.openapis.openapi.models.shared.SetMaintenancePolicyRequest;
import org.openapis.openapi.models.shared.TimeWindow;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersSetMaintenancePolicyRequest req = new ContainerProjectsZonesClustersSetMaintenancePolicyRequest("rerum", "veritatis", "tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                setMaintenancePolicyRequest = new SetMaintenancePolicyRequest() {{
                    clusterId = "quidem";
                    maintenancePolicy = new MaintenancePolicy() {{
                        resourceVersion = "totam";
                        window = new MaintenanceWindow() {{
                            dailyMaintenanceWindow = new DailyMaintenanceWindow() {{
                                duration = "porro";
                                startTime = "deserunt";
                            }};;
                            maintenanceExclusions = new java.util.HashMap<String, org.openapis.openapi.models.shared.TimeWindow>() {{
                                put("nihil", new TimeWindow() {{
                                    endTime = "voluptas";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_UPGRADES;
                                    }};
                                    startTime = "commodi";
                                }});
                            }};
                            recurringWindow = new RecurringTimeWindow() {{
                                recurrence = "alias";
                                window = new TimeWindow() {{
                                    endTime = "fuga";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_UPGRADES;
                                    }};;
                                    startTime = "dolore";
                                }};;
                            }};;
                        }};;
                    }};;
                    name = "Jay Morar";
                    projectId = "placeat";
                    zone = "voluptas";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "illo";
                fields = "nihil";
                key = "inventore";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "quasi";
                uploadProtocol = "cumque";
            }};            

            ContainerProjectsZonesClustersSetMaintenancePolicyResponse res = sdk.projects.containerProjectsZonesClustersSetMaintenancePolicy(req, new ContainerProjectsZonesClustersSetMaintenancePolicySecurity("dicta", "harum") {{
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

## containerProjectsZonesClustersSetMasterAuth

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersSetMasterAuthRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersSetMasterAuthResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersSetMasterAuthSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientCertificateConfig;
import org.openapis.openapi.models.shared.MasterAuth;
import org.openapis.openapi.models.shared.SetMasterAuthRequest;
import org.openapis.openapi.models.shared.SetMasterAuthRequestActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersSetMasterAuthRequest req = new ContainerProjectsZonesClustersSetMasterAuthRequest("facere", "facilis", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                setMasterAuthRequest = new SetMasterAuthRequest() {{
                    action = SetMasterAuthRequestActionEnum.SET_USERNAME;
                    clusterId = "labore";
                    name = "Byron Ledner";
                    projectId = "cum";
                    update = new MasterAuth() {{
                        clientCertificate = "pariatur";
                        clientCertificateConfig = new ClientCertificateConfig() {{
                            issueClientCertificate = false;
                        }};;
                        clientKey = "sapiente";
                        clusterCaCertificate = "quo";
                        password = "incidunt";
                        username = "Phoebe_Schimmel56";
                    }};;
                    zone = "occaecati";
                }};;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "hic";
                key = "maxime";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "fugit";
                uploadProtocol = "pariatur";
            }};            

            ContainerProjectsZonesClustersSetMasterAuthResponse res = sdk.projects.containerProjectsZonesClustersSetMasterAuth(req, new ContainerProjectsZonesClustersSetMasterAuthSecurity("eligendi", "recusandae") {{
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

## containerProjectsZonesClustersSetNetworkPolicy

Enables or disables Network Policy for a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersSetNetworkPolicyRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersSetNetworkPolicyResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersSetNetworkPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkPolicy;
import org.openapis.openapi.models.shared.NetworkPolicyProviderEnum;
import org.openapis.openapi.models.shared.SetNetworkPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersSetNetworkPolicyRequest req = new ContainerProjectsZonesClustersSetNetworkPolicyRequest("veritatis", "aut", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                setNetworkPolicyRequest = new SetNetworkPolicyRequest() {{
                    clusterId = "dolor";
                    name = "Troy Dach Jr.";
                    networkPolicy = new NetworkPolicy() {{
                        enabled = false;
                        provider = NetworkPolicyProviderEnum.PROVIDER_UNSPECIFIED;
                    }};;
                    projectId = "at";
                    zone = "eum";
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "nihil";
                key = "atque";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "atque";
                uploadProtocol = "nostrum";
            }};            

            ContainerProjectsZonesClustersSetNetworkPolicyResponse res = sdk.projects.containerProjectsZonesClustersSetNetworkPolicy(req, new ContainerProjectsZonesClustersSetNetworkPolicySecurity("atque", "architecto") {{
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

## containerProjectsZonesClustersStartIpRotation

Starts master IP rotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersStartIpRotationRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersStartIpRotationResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersStartIpRotationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StartIPRotationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersStartIpRotationRequest req = new ContainerProjectsZonesClustersStartIpRotationRequest("est", "enim", "rem") {{
                dollarXgafv = XgafvEnum.ONE;
                startIPRotationRequest = new StartIPRotationRequest() {{
                    clusterId = "quae";
                    name = "Clark Hamill";
                    projectId = "saepe";
                    rotateCredentials = false;
                    zone = "delectus";
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "cumque";
                fields = "natus";
                key = "quaerat";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "officiis";
                uploadProtocol = "mollitia";
            }};            

            ContainerProjectsZonesClustersStartIpRotationResponse res = sdk.projects.containerProjectsZonesClustersStartIpRotation(req, new ContainerProjectsZonesClustersStartIpRotationSecurity("cumque", "quis") {{
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

## containerProjectsZonesClustersUpdate

Updates the settings of a specific cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersUpdateRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersUpdateResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesClustersUpdateSecurity;
import org.openapis.openapi.models.shared.AdditionalPodRangesConfig;
import org.openapis.openapi.models.shared.AddonsConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthenticatorGroupsConfig;
import org.openapis.openapi.models.shared.AutoUpgradeOptions;
import org.openapis.openapi.models.shared.AutoprovisioningNodePoolDefaults;
import org.openapis.openapi.models.shared.BigQueryDestination;
import org.openapis.openapi.models.shared.BinaryAuthorization;
import org.openapis.openapi.models.shared.BinaryAuthorizationEvaluationModeEnum;
import org.openapis.openapi.models.shared.BlueGreenSettings;
import org.openapis.openapi.models.shared.CidrBlock;
import org.openapis.openapi.models.shared.CloudRunConfig;
import org.openapis.openapi.models.shared.CloudRunConfigLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.ClusterAutoscaling;
import org.openapis.openapi.models.shared.ClusterAutoscalingAutoscalingProfileEnum;
import org.openapis.openapi.models.shared.ClusterUpdate;
import org.openapis.openapi.models.shared.ClusterUpdateDesiredDatapathProviderEnum;
import org.openapis.openapi.models.shared.ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.ClusterUpdateDesiredStackTypeEnum;
import org.openapis.openapi.models.shared.ConfigConnectorConfig;
import org.openapis.openapi.models.shared.ConsumptionMeteringConfig;
import org.openapis.openapi.models.shared.CostManagementConfig;
import org.openapis.openapi.models.shared.DNSConfig;
import org.openapis.openapi.models.shared.DNSConfigClusterDNSEnum;
import org.openapis.openapi.models.shared.DNSConfigClusterDNSScopeEnum;
import org.openapis.openapi.models.shared.DatabaseEncryption;
import org.openapis.openapi.models.shared.DatabaseEncryptionStateEnum;
import org.openapis.openapi.models.shared.DefaultSnatStatus;
import org.openapis.openapi.models.shared.DnsCacheConfig;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterEventTypeEnum;
import org.openapis.openapi.models.shared.Fleet;
import org.openapis.openapi.models.shared.GatewayAPIConfig;
import org.openapis.openapi.models.shared.GatewayAPIConfigChannelEnum;
import org.openapis.openapi.models.shared.GcePersistentDiskCsiDriverConfig;
import org.openapis.openapi.models.shared.GcfsConfig;
import org.openapis.openapi.models.shared.GcpFilestoreCsiDriverConfig;
import org.openapis.openapi.models.shared.GkeBackupAgentConfig;
import org.openapis.openapi.models.shared.HorizontalPodAutoscaling;
import org.openapis.openapi.models.shared.HttpLoadBalancing;
import org.openapis.openapi.models.shared.ILBSubsettingConfig;
import org.openapis.openapi.models.shared.IdentityServiceConfig;
import org.openapis.openapi.models.shared.IntraNodeVisibilityConfig;
import org.openapis.openapi.models.shared.KubernetesDashboard;
import org.openapis.openapi.models.shared.LoggingComponentConfig;
import org.openapis.openapi.models.shared.LoggingComponentConfigEnableComponentsEnum;
import org.openapis.openapi.models.shared.LoggingConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfig;
import org.openapis.openapi.models.shared.LoggingVariantConfigVariantEnum;
import org.openapis.openapi.models.shared.ManagedPrometheusConfig;
import org.openapis.openapi.models.shared.MasterAuthorizedNetworksConfig;
import org.openapis.openapi.models.shared.MeshCertificates;
import org.openapis.openapi.models.shared.MonitoringComponentConfig;
import org.openapis.openapi.models.shared.MonitoringComponentConfigEnableComponentsEnum;
import org.openapis.openapi.models.shared.MonitoringConfig;
import org.openapis.openapi.models.shared.NetworkPolicyConfig;
import org.openapis.openapi.models.shared.NetworkTags;
import org.openapis.openapi.models.shared.NodeManagement;
import org.openapis.openapi.models.shared.NodePoolAutoscaling;
import org.openapis.openapi.models.shared.NodePoolAutoscalingLocationPolicyEnum;
import org.openapis.openapi.models.shared.NodePoolLoggingConfig;
import org.openapis.openapi.models.shared.NotificationConfig;
import org.openapis.openapi.models.shared.PrivateClusterConfig;
import org.openapis.openapi.models.shared.PrivateClusterMasterGlobalAccessConfig;
import org.openapis.openapi.models.shared.PubSub;
import org.openapis.openapi.models.shared.ReleaseChannel;
import org.openapis.openapi.models.shared.ReleaseChannelChannelEnum;
import org.openapis.openapi.models.shared.ResourceLimit;
import org.openapis.openapi.models.shared.ResourceUsageExportConfig;
import org.openapis.openapi.models.shared.ServiceExternalIPsConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.ShieldedNodes;
import org.openapis.openapi.models.shared.StandardRolloutPolicy;
import org.openapis.openapi.models.shared.UpdateClusterRequest;
import org.openapis.openapi.models.shared.UpgradeSettings;
import org.openapis.openapi.models.shared.UpgradeSettingsStrategyEnum;
import org.openapis.openapi.models.shared.VerticalPodAutoscaling;
import org.openapis.openapi.models.shared.WorkloadIdentityConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersUpdateRequest req = new ContainerProjectsZonesClustersUpdateRequest("enim", "eum", "nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                updateClusterRequest = new UpdateClusterRequest() {{
                    clusterId = "nesciunt";
                    name = "Viola Schimmel";
                    projectId = "voluptates";
                    update = new ClusterUpdate() {{
                        additionalPodRangesConfig = new AdditionalPodRangesConfig() {{
                            podRangeNames = new String[]{{
                                add("dicta"),
                                add("fugit"),
                                add("sit"),
                            }};
                        }};;
                        desiredAddonsConfig = new AddonsConfig() {{
                            cloudRunConfig = new CloudRunConfig() {{
                                disabled = false;
                                loadBalancerType = CloudRunConfigLoadBalancerTypeEnum.LOAD_BALANCER_TYPE_EXTERNAL;
                            }};;
                            configConnectorConfig = new ConfigConnectorConfig() {{
                                enabled = false;
                            }};;
                            dnsCacheConfig = new DnsCacheConfig() {{
                                enabled = false;
                            }};;
                            gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig() {{
                                enabled = false;
                            }};;
                            gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig() {{
                                enabled = false;
                            }};;
                            gkeBackupAgentConfig = new GkeBackupAgentConfig() {{
                                enabled = false;
                            }};;
                            horizontalPodAutoscaling = new HorizontalPodAutoscaling() {{
                                disabled = false;
                            }};;
                            httpLoadBalancing = new HttpLoadBalancing() {{
                                disabled = false;
                            }};;
                            kubernetesDashboard = new KubernetesDashboard() {{
                                disabled = false;
                            }};;
                            networkPolicyConfig = new NetworkPolicyConfig() {{
                                disabled = false;
                            }};;
                        }};;
                        desiredAuthenticatorGroupsConfig = new AuthenticatorGroupsConfig() {{
                            enabled = false;
                            securityGroup = "necessitatibus";
                        }};;
                        desiredBinaryAuthorization = new BinaryAuthorization() {{
                            enabled = false;
                            evaluationMode = BinaryAuthorizationEvaluationModeEnum.EVALUATION_MODE_UNSPECIFIED;
                        }};;
                        desiredClusterAutoscaling = new ClusterAutoscaling() {{
                            autoprovisioningLocations = new String[]{{
                                add("sunt"),
                                add("nesciunt"),
                                add("delectus"),
                            }};
                            autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults() {{
                                bootDiskKmsKey = "laborum";
                                diskSizeGb = 303421;
                                diskType = "deserunt";
                                imageType = "modi";
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "sunt";
                                        description = "impedit";
                                    }};;
                                }};;
                                minCpuPlatform = "eius";
                                oauthScopes = new String[]{{
                                    add("ipsa"),
                                    add("at"),
                                    add("dolorem"),
                                }};
                                serviceAccount = "repellat";
                                shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                    enableIntegrityMonitoring = false;
                                    enableSecureBoot = false;
                                }};;
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "aspernatur";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 80284;
                                            batchPercentage = 1932.36;
                                            batchSoakDuration = "fugit";
                                        }};;
                                    }};;
                                    maxSurge = 685467;
                                    maxUnavailable = 943103;
                                    strategy = UpgradeSettingsStrategyEnum.NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED;
                                }};;
                            }};;
                            autoscalingProfile = ClusterAutoscalingAutoscalingProfileEnum.PROFILE_UNSPECIFIED;
                            enableNodeAutoprovisioning = false;
                            resourceLimits = new org.openapis.openapi.models.shared.ResourceLimit[]{{
                                add(new ResourceLimit() {{
                                    maximum = "aperiam";
                                    minimum = "aspernatur";
                                    resourceType = "nulla";
                                }}),
                            }};
                        }};;
                        desiredCostManagementConfig = new CostManagementConfig() {{
                            enabled = false;
                        }};;
                        desiredDatabaseEncryption = new DatabaseEncryption() {{
                            keyName = "enim";
                            state = DatabaseEncryptionStateEnum.UNKNOWN;
                        }};;
                        desiredDatapathProvider = ClusterUpdateDesiredDatapathProviderEnum.DATAPATH_PROVIDER_UNSPECIFIED;
                        desiredDefaultSnatStatus = new DefaultSnatStatus() {{
                            disabled = false;
                        }};;
                        desiredDnsConfig = new DNSConfig() {{
                            clusterDns = DNSConfigClusterDNSEnum.CLOUD_DNS;
                            clusterDnsDomain = "numquam";
                            clusterDnsScope = DNSConfigClusterDNSScopeEnum.VPC_SCOPE;
                        }};;
                        desiredEnablePrivateEndpoint = false;
                        desiredFleet = new Fleet() {{
                            membership = "nobis";
                            preRegistered = false;
                            project = "ex";
                        }};;
                        desiredGatewayApiConfig = new GatewayAPIConfig() {{
                            channel = GatewayAPIConfigChannelEnum.CHANNEL_STANDARD;
                        }};;
                        desiredGcfsConfig = new GcfsConfig() {{
                            enabled = false;
                        }};;
                        desiredIdentityServiceConfig = new IdentityServiceConfig() {{
                            enabled = false;
                        }};;
                        desiredImageType = "quae";
                        desiredIntraNodeVisibilityConfig = new IntraNodeVisibilityConfig() {{
                            enabled = false;
                        }};;
                        desiredL4ilbSubsettingConfig = new ILBSubsettingConfig() {{
                            enabled = false;
                        }};;
                        desiredLocations = new String[]{{
                            add("expedita"),
                            add("hic"),
                            add("excepturi"),
                        }};
                        desiredLoggingConfig = new LoggingConfig() {{
                            componentConfig = new LoggingComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.LoggingComponentConfigEnableComponentsEnum[]{{
                                    add(LoggingComponentConfigEnableComponentsEnum.COMPONENT_UNSPECIFIED),
                                    add(LoggingComponentConfigEnableComponentsEnum.COMPONENT_UNSPECIFIED),
                                }};
                            }};;
                        }};;
                        desiredLoggingService = "similique";
                        desiredMasterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "animi";
                                    displayName = "dolore";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "tenetur";
                                    displayName = "dignissimos";
                                }}),
                            }};
                            enabled = false;
                            gcpPublicCidrsAccessEnabled = false;
                        }};;
                        desiredMasterVersion = "esse";
                        desiredMeshCertificates = new MeshCertificates() {{
                            enableCertificates = false;
                        }};;
                        desiredMonitoringConfig = new MonitoringConfig() {{
                            componentConfig = new MonitoringComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.MonitoringComponentConfigEnableComponentsEnum[]{{
                                    add(MonitoringComponentConfigEnableComponentsEnum.APISERVER),
                                    add(MonitoringComponentConfigEnableComponentsEnum.APISERVER),
                                    add(MonitoringComponentConfigEnableComponentsEnum.CONTROLLER_MANAGER),
                                }};
                            }};;
                            managedPrometheusConfig = new ManagedPrometheusConfig() {{
                                enabled = false;
                            }};;
                        }};;
                        desiredMonitoringService = "earum";
                        desiredNodePoolAutoConfigNetworkTags = new NetworkTags() {{
                            tags = new String[]{{
                                add("officiis"),
                            }};
                        }};;
                        desiredNodePoolAutoscaling = new NodePoolAutoscaling() {{
                            autoprovisioned = false;
                            enabled = false;
                            locationPolicy = NodePoolAutoscalingLocationPolicyEnum.LOCATION_POLICY_UNSPECIFIED;
                            maxNodeCount = 701978;
                            minNodeCount = 930111;
                            totalMaxNodeCount = 489685;
                            totalMinNodeCount = 373449;
                        }};;
                        desiredNodePoolId = "explicabo";
                        desiredNodePoolLoggingConfig = new NodePoolLoggingConfig() {{
                            variantConfig = new LoggingVariantConfig() {{
                                variant = LoggingVariantConfigVariantEnum.MAX_THROUGHPUT;
                            }};;
                        }};;
                        desiredNodeVersion = "aliquid";
                        desiredNotificationConfig = new NotificationConfig() {{
                            pubsub = new PubSub() {{
                                enabled = false;
                                filter = new Filter() {{
                                    eventType = new org.openapis.openapi.models.shared.FilterEventTypeEnum[]{{
                                        add(FilterEventTypeEnum.UPGRADE_EVENT),
                                        add(FilterEventTypeEnum.EVENT_TYPE_UNSPECIFIED),
                                    }};
                                }};;
                                topic = "ut";
                            }};;
                        }};;
                        desiredPrivateClusterConfig = new PrivateClusterConfig() {{
                            enablePrivateEndpoint = false;
                            enablePrivateNodes = false;
                            masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig() {{
                                enabled = false;
                            }};;
                            masterIpv4CidrBlock = "quaerat";
                            peeringName = "architecto";
                            privateEndpoint = "praesentium";
                            privateEndpointSubnetwork = "eveniet";
                            publicEndpoint = "dolor";
                        }};;
                        desiredPrivateIpv6GoogleAccess = ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum.PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE;
                        desiredReleaseChannel = new ReleaseChannel() {{
                            channel = ReleaseChannelChannelEnum.REGULAR;
                        }};;
                        desiredResourceUsageExportConfig = new ResourceUsageExportConfig() {{
                            bigqueryDestination = new BigQueryDestination() {{
                                datasetId = "iste";
                            }};;
                            consumptionMeteringConfig = new ConsumptionMeteringConfig() {{
                                enabled = false;
                            }};;
                            enableNetworkEgressMetering = false;
                        }};;
                        desiredServiceExternalIpsConfig = new ServiceExternalIPsConfig() {{
                            enabled = false;
                        }};;
                        desiredShieldedNodes = new ShieldedNodes() {{
                            enabled = false;
                        }};;
                        desiredStackType = ClusterUpdateDesiredStackTypeEnum.STACK_TYPE_UNSPECIFIED;
                        desiredVerticalPodAutoscaling = new VerticalPodAutoscaling() {{
                            enabled = false;
                        }};;
                        desiredWorkloadIdentityConfig = new WorkloadIdentityConfig() {{
                            workloadPool = "minus";
                        }};;
                        etag = "quos";
                        removedAdditionalPodRangesConfig = new AdditionalPodRangesConfig() {{
                            podRangeNames = new String[]{{
                                add("sint"),
                                add("iusto"),
                                add("enim"),
                                add("accusamus"),
                            }};
                        }};;
                    }};;
                    zone = "aperiam";
                }};;
                accessToken = "voluptates";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "quae";
                key = "omnis";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "tenetur";
                uploadProtocol = "deleniti";
            }};            

            ContainerProjectsZonesClustersUpdateResponse res = sdk.projects.containerProjectsZonesClustersUpdate(req, new ContainerProjectsZonesClustersUpdateSecurity("modi", "earum") {{
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

## containerProjectsZonesGetServerconfig

Returns configuration info about the Google Kubernetes Engine service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesGetServerconfigRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesGetServerconfigResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesGetServerconfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesGetServerconfigRequest req = new ContainerProjectsZonesGetServerconfigRequest("architecto", "aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "consequatur";
                key = "esse";
                name = "Bryant Schamberger";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "ad";
                uploadProtocol = "reiciendis";
            }};            

            ContainerProjectsZonesGetServerconfigResponse res = sdk.projects.containerProjectsZonesGetServerconfig(req, new ContainerProjectsZonesGetServerconfigSecurity("sequi", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.serverConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containerProjectsZonesOperationsCancel

Cancels the specified operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesOperationsCancelRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesOperationsCancelResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CancelOperationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesOperationsCancelRequest req = new ContainerProjectsZonesOperationsCancelRequest("laborum", "nobis", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                cancelOperationRequest = new CancelOperationRequest() {{
                    name = "Roberta Nolan";
                    operationId = "quia";
                    projectId = "necessitatibus";
                    zone = "accusantium";
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "quia";
                key = "laudantium";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "iusto";
                uploadProtocol = "expedita";
            }};            

            ContainerProjectsZonesOperationsCancelResponse res = sdk.projects.containerProjectsZonesOperationsCancel(req, new ContainerProjectsZonesOperationsCancelSecurity("eos", "repellendus") {{
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

## containerProjectsZonesOperationsGet

Gets the specified operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesOperationsGetRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesOperationsGetResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesOperationsGetRequest req = new ContainerProjectsZonesOperationsGetRequest("nesciunt", "ipsa", "sint") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "sapiente";
                key = "quam";
                name = "Tom Wintheiser";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "voluptatibus";
                uploadProtocol = "voluptas";
            }};            

            ContainerProjectsZonesOperationsGetResponse res = sdk.projects.containerProjectsZonesOperationsGet(req, new ContainerProjectsZonesOperationsGetSecurity("non", "ullam") {{
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

## containerProjectsZonesOperationsList

Lists all operations in a project in a specific zone or all zones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsZonesOperationsListRequest;
import org.openapis.openapi.models.operations.ContainerProjectsZonesOperationsListResponse;
import org.openapis.openapi.models.operations.ContainerProjectsZonesOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesOperationsListRequest req = new ContainerProjectsZonesOperationsListRequest("laborum", "voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "animi";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "non";
                key = "necessitatibus";
                oauthToken = "distinctio";
                parent = "maiores";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "voluptatem";
                uploadProtocol = "optio";
            }};            

            ContainerProjectsZonesOperationsListResponse res = sdk.projects.containerProjectsZonesOperationsList(req, new ContainerProjectsZonesOperationsListSecurity("sequi", "sunt") {{
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
