# projects

### Available Operations

* [containerProjectsAggregatedUsableSubnetworksList](#containerprojectsaggregatedusablesubnetworkslist) - Lists subnetworks that can be used for creating clusters in a project.
* [containerProjectsLocationsClustersCompleteIpRotation](#containerprojectslocationsclusterscompleteiprotation) - Completes master IP rotation.
* [containerProjectsLocationsClustersCreate](#containerprojectslocationsclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [containerProjectsLocationsClustersGetJwks](#containerprojectslocationsclustersgetjwks) - Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
* [containerProjectsLocationsClustersList](#containerprojectslocationsclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [containerProjectsLocationsClustersNodePoolsCompleteUpgrade](#containerprojectslocationsclustersnodepoolscompleteupgrade) - CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
* [containerProjectsLocationsClustersNodePoolsCreate](#containerprojectslocationsclustersnodepoolscreate) - Creates a node pool for a cluster.
* [containerProjectsLocationsClustersNodePoolsDelete](#containerprojectslocationsclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [containerProjectsLocationsClustersNodePoolsList](#containerprojectslocationsclustersnodepoolslist) - Lists the node pools for a cluster.
* [containerProjectsLocationsClustersNodePoolsRollback](#containerprojectslocationsclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [containerProjectsLocationsClustersNodePoolsSetAutoscaling](#containerprojectslocationsclustersnodepoolssetautoscaling) - Sets the autoscaling settings of a specific node pool.
* [containerProjectsLocationsClustersNodePoolsSetManagement](#containerprojectslocationsclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [containerProjectsLocationsClustersNodePoolsSetSize](#containerprojectslocationsclustersnodepoolssetsize) - SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [containerProjectsLocationsClustersNodePoolsUpdate](#containerprojectslocationsclustersnodepoolsupdate) - Updates the version and/or image type of a specific node pool.
* [containerProjectsLocationsClustersSetAddons](#containerprojectslocationsclusterssetaddons) - Sets the addons for a specific cluster.
* [containerProjectsLocationsClustersSetLegacyAbac](#containerprojectslocationsclusterssetlegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [containerProjectsLocationsClustersSetLocations](#containerprojectslocationsclusterssetlocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
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
* [containerProjectsLocationsList](#containerprojectslocationslist) - Fetches locations that offer Google Kubernetes Engine.
* [containerProjectsLocationsOperationsCancel](#containerprojectslocationsoperationscancel) - Cancels the specified operation.
* [containerProjectsLocationsOperationsGet](#containerprojectslocationsoperationsget) - Gets the specified operation.
* [containerProjectsLocationsOperationsList](#containerprojectslocationsoperationslist) - Lists all operations in a project in the specified zone or all zones.
* [containerProjectsZonesClustersAddons](#containerprojectszonesclustersaddons) - Sets the addons for a specific cluster.
* [containerProjectsZonesClustersCompleteIpRotation](#containerprojectszonesclusterscompleteiprotation) - Completes master IP rotation.
* [containerProjectsZonesClustersCreate](#containerprojectszonesclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [containerProjectsZonesClustersDelete](#containerprojectszonesclustersdelete) - Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
* [containerProjectsZonesClustersGet](#containerprojectszonesclustersget) - Gets the details for a specific cluster.
* [containerProjectsZonesClustersLegacyAbac](#containerprojectszonesclusterslegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [containerProjectsZonesClustersList](#containerprojectszonesclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [containerProjectsZonesClustersLocations](#containerprojectszonesclusterslocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
* [containerProjectsZonesClustersLogging](#containerprojectszonesclusterslogging) - Sets the logging service for a specific cluster.
* [containerProjectsZonesClustersMaster](#containerprojectszonesclustersmaster) - Updates the master for a specific cluster.
* [containerProjectsZonesClustersMonitoring](#containerprojectszonesclustersmonitoring) - Sets the monitoring service for a specific cluster.
* [containerProjectsZonesClustersNodePoolsAutoscaling](#containerprojectszonesclustersnodepoolsautoscaling) - Sets the autoscaling settings of a specific node pool.
* [containerProjectsZonesClustersNodePoolsCreate](#containerprojectszonesclustersnodepoolscreate) - Creates a node pool for a cluster.
* [containerProjectsZonesClustersNodePoolsDelete](#containerprojectszonesclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [containerProjectsZonesClustersNodePoolsGet](#containerprojectszonesclustersnodepoolsget) - Retrieves the requested node pool.
* [containerProjectsZonesClustersNodePoolsList](#containerprojectszonesclustersnodepoolslist) - Lists the node pools for a cluster.
* [containerProjectsZonesClustersNodePoolsRollback](#containerprojectszonesclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [containerProjectsZonesClustersNodePoolsSetManagement](#containerprojectszonesclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [containerProjectsZonesClustersNodePoolsSetSize](#containerprojectszonesclustersnodepoolssetsize) - SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [containerProjectsZonesClustersNodePoolsUpdate](#containerprojectszonesclustersnodepoolsupdate) - Updates the version and/or image type of a specific node pool.
* [containerProjectsZonesClustersResourceLabels](#containerprojectszonesclustersresourcelabels) - Sets labels on a cluster.
* [containerProjectsZonesClustersSetMaintenancePolicy](#containerprojectszonesclusterssetmaintenancepolicy) - Sets the maintenance policy for a cluster.
* [containerProjectsZonesClustersSetMasterAuth](#containerprojectszonesclusterssetmasterauth) - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* [containerProjectsZonesClustersSetNetworkPolicy](#containerprojectszonesclusterssetnetworkpolicy) - Enables or disables Network Policy for a cluster.
* [containerProjectsZonesClustersStartIpRotation](#containerprojectszonesclustersstartiprotation) - Starts master IP rotation.
* [containerProjectsZonesClustersUpdate](#containerprojectszonesclustersupdate) - Updates the settings for a specific cluster.
* [containerProjectsZonesGetServerconfig](#containerprojectszonesgetserverconfig) - Returns configuration info about the Google Kubernetes Engine service.
* [containerProjectsZonesOperationsCancel](#containerprojectszonesoperationscancel) - Cancels the specified operation.
* [containerProjectsZonesOperationsGet](#containerprojectszonesoperationsget) - Gets the specified operation.
* [containerProjectsZonesOperationsList](#containerprojectszonesoperationslist) - Lists all operations in a project in the specified zone or all zones.

## containerProjectsAggregatedUsableSubnetworksList

Lists subnetworks that can be used for creating clusters in a project.

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
import org.openapis.openapi.models.shared.ClusterTelemetry;
import org.openapis.openapi.models.shared.ClusterTelemetryTypeEnum;
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
import org.openapis.openapi.models.shared.EphemeralStorageConfig;
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
import org.openapis.openapi.models.shared.GcsFuseCsiDriverConfig;
import org.openapis.openapi.models.shared.GkeBackupAgentConfig;
import org.openapis.openapi.models.shared.HorizontalPodAutoscaling;
import org.openapis.openapi.models.shared.HttpLoadBalancing;
import org.openapis.openapi.models.shared.IPAllocationPolicyInput;
import org.openapis.openapi.models.shared.IPAllocationPolicyIpv6AccessTypeEnum;
import org.openapis.openapi.models.shared.IPAllocationPolicyStackTypeEnum;
import org.openapis.openapi.models.shared.IdentityServiceConfig;
import org.openapis.openapi.models.shared.IstioConfig;
import org.openapis.openapi.models.shared.IstioConfigAuthEnum;
import org.openapis.openapi.models.shared.KalmConfig;
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
import org.openapis.openapi.models.shared.NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
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
import org.openapis.openapi.models.shared.PodSecurityPolicyConfig;
import org.openapis.openapi.models.shared.PrivateClusterConfig;
import org.openapis.openapi.models.shared.PrivateClusterMasterGlobalAccessConfig;
import org.openapis.openapi.models.shared.ProtectConfig;
import org.openapis.openapi.models.shared.ProtectConfigWorkloadVulnerabilityModeEnum;
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
import org.openapis.openapi.models.shared.TpuConfig;
import org.openapis.openapi.models.shared.UpdateInfo;
import org.openapis.openapi.models.shared.UpgradeSettings;
import org.openapis.openapi.models.shared.UpgradeSettingsStrategyEnum;
import org.openapis.openapi.models.shared.VerticalPodAutoscaling;
import org.openapis.openapi.models.shared.VirtualNIC;
import org.openapis.openapi.models.shared.WindowsNodeConfig;
import org.openapis.openapi.models.shared.WindowsNodeConfigOsVersionEnum;
import org.openapis.openapi.models.shared.WorkloadALTSConfig;
import org.openapis.openapi.models.shared.WorkloadCertificates;
import org.openapis.openapi.models.shared.WorkloadConfig;
import org.openapis.openapi.models.shared.WorkloadConfigAuditModeEnum;
import org.openapis.openapi.models.shared.WorkloadIdentityConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfigModeEnum;
import org.openapis.openapi.models.shared.WorkloadMetadataConfigNodeMetadataEnum;
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
                            gcsFuseCsiDriverConfig = new GcsFuseCsiDriverConfig() {{
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
                            istioConfig = new IstioConfig() {{
                                auth = IstioConfigAuthEnum.AUTH_MUTUAL_TLS;
                                disabled = false;
                            }};;
                            kalmConfig = new KalmConfig() {{
                                enabled = false;
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
                            securityGroup = "beatae";
                        }};;
                        autopilot = new Autopilot() {{
                            enabled = false;
                        }};;
                        autoscaling = new ClusterAutoscaling() {{
                            autoprovisioningLocations = new String[]{{
                                add("molestiae"),
                                add("modi"),
                            }};
                            autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults() {{
                                bootDiskKmsKey = "qui";
                                diskSizeGb = 774234;
                                diskType = "cum";
                                imageType = "esse";
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "ipsum";
                                        description = "excepturi";
                                    }};;
                                }};;
                                minCpuPlatform = "aspernatur";
                                oauthScopes = new String[]{{
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
                        clusterTelemetry = new ClusterTelemetry() {{
                            type = ClusterTelemetryTypeEnum.ENABLED;
                        }};;
                        conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.ABORTED;
                                code = StatusConditionCodeEnum.GCE_STOCKOUT;
                                message = "dolorem";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.ALREADY_EXISTS;
                                code = StatusConditionCodeEnum.UNKNOWN;
                                message = "nobis";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.NOT_FOUND;
                                code = StatusConditionCodeEnum.SET_BY_OPERATOR;
                                message = "nemo";
                            }}),
                        }};
                        confidentialNodes = new ConfidentialNodes() {{
                            enabled = false;
                        }};;
                        costManagementConfig = new CostManagementConfig() {{
                            enabled = false;
                        }};;
                        createTime = "minima";
                        currentMasterVersion = "excepturi";
                        currentNodeCount = 38425;
                        currentNodeVersion = "iure";
                        databaseEncryption = new DatabaseEncryption() {{
                            keyName = "culpa";
                            state = DatabaseEncryptionStateEnum.DECRYPTED;
                        }};;
                        defaultMaxPodsConstraint = new MaxPodsConstraint() {{
                            maxPodsPerNode = "sapiente";
                        }};;
                        description = "architecto";
                        enableKubernetesAlpha = false;
                        enableTpu = false;
                        endpoint = "mollitia";
                        etag = "dolorem";
                        expireTime = "culpa";
                        fleet = new Fleet() {{
                            membership = "consequuntur";
                            preRegistered = false;
                            project = "repellat";
                        }};;
                        identityServiceConfig = new IdentityServiceConfig() {{
                            enabled = false;
                        }};;
                        initialClusterVersion = "mollitia";
                        initialNodeCount = 581850;
                        instanceGroupUrls = new String[]{{
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
                            allowRouteOverlap = false;
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
                        master = new java.util.HashMap<String, Object>() {{
                            put("corporis", "dolore");
                        }};
                        masterAuth = new MasterAuth() {{
                            clientCertificate = "iusto";
                            clientCertificateConfig = new ClientCertificateConfig() {{
                                issueClientCertificate = false;
                            }};;
                            clientKey = "dicta";
                            clusterCaCertificate = "harum";
                            password = "enim";
                            username = "Shania.Jerde21";
                        }};;
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "molestias";
                                    displayName = "excepturi";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "pariatur";
                                    displayName = "modi";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "praesentium";
                                    displayName = "rem";
                                }}),
                            }};
                            enabled = false;
                            gcpPublicCidrsAccessEnabled = false;
                        }};;
                        masterIpv4CidrBlock = "voluptates";
                        meshCertificates = new MeshCertificates() {{
                            enableCertificates = false;
                        }};;
                        monitoringConfig = new MonitoringConfig() {{
                            componentConfig = new MonitoringComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.MonitoringComponentConfigEnableComponentsEnum[]{{
                                    add(MonitoringComponentConfigEnableComponentsEnum.CONTROLLER_MANAGER),
                                }};
                            }};;
                            managedPrometheusConfig = new ManagedPrometheusConfig() {{
                                enabled = false;
                            }};;
                        }};;
                        monitoringService = "sint";
                        name = "Patti Gottlieb MD";
                        network = "quibusdam";
                        networkConfig = new NetworkConfig() {{
                            datapathProvider = NetworkConfigDatapathProviderEnum.DATAPATH_PROVIDER_UNSPECIFIED;
                            defaultSnatStatus = new DefaultSnatStatus() {{
                                disabled = false;
                            }};;
                            dnsConfig = new DNSConfig() {{
                                clusterDns = DNSConfigClusterDNSEnum.PLATFORM_DEFAULT;
                                clusterDnsDomain = "distinctio";
                                clusterDnsScope = DNSConfigClusterDNSScopeEnum.VPC_SCOPE;
                            }};;
                            enableIntraNodeVisibility = false;
                            enableL4ilbSubsetting = false;
                            gatewayApiConfig = new GatewayAPIConfig() {{
                                channel = GatewayAPIConfigChannelEnum.CHANNEL_DISABLED;
                            }};;
                            network = "modi";
                            privateIpv6GoogleAccess = NetworkConfigPrivateIpv6GoogleAccessEnum.PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED;
                            serviceExternalIpsConfig = new ServiceExternalIPsConfig() {{
                                enabled = false;
                            }};;
                            subnetwork = "aliquid";
                        }};;
                        networkPolicy = new NetworkPolicy() {{
                            enabled = false;
                            provider = NetworkPolicyProviderEnum.CALICO;
                        }};;
                        nodeConfig = new NodeConfig() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "perferendis";
                                    acceleratorType = "magni";
                                    gpuPartitionSize = "assumenda";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                        maxSharedClientsPerGpu = "alias";
                                    }};
                                    maxTimeSharedClientsPerGpu = "fugit";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "dolorum";
                                    acceleratorType = "excepturi";
                                    gpuPartitionSize = "tempora";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                        maxSharedClientsPerGpu = "tempore";
                                    }};
                                    maxTimeSharedClientsPerGpu = "labore";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "delectus";
                                    acceleratorType = "eum";
                                    gpuPartitionSize = "non";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                        maxSharedClientsPerGpu = "sint";
                                    }};
                                    maxTimeSharedClientsPerGpu = "aliquid";
                                }}),
                            }};
                            advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                threadsPerCore = "provident";
                            }};;
                            bootDiskKmsKey = "necessitatibus";
                            confidentialNodes = new ConfidentialNodes() {{
                                enabled = false;
                            }};;
                            diskSizeGb = 572252;
                            diskType = "officia";
                            ephemeralStorageConfig = new EphemeralStorageConfig() {{
                                localSsdCount = 223081;
                            }};;
                            ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                localSsdCount = 891555;
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
                            imageType = "a";
                            kubeletConfig = new NodeKubeletConfig() {{
                                cpuCfsQuota = false;
                                cpuCfsQuotaPeriod = "dolorum";
                                cpuManagerPolicy = "in";
                                podPidsLimit = "in";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("maiores", "rerum");
                                put("dicta", "magnam");
                                put("cumque", "facere");
                                put("ea", "aliquid");
                            }};
                            linuxNodeConfig = new LinuxNodeConfig() {{
                                cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V2;
                                sysctls = new java.util.HashMap<String, String>() {{
                                    put("non", "occaecati");
                                    put("enim", "accusamus");
                                    put("delectus", "quidem");
                                    put("provident", "nam");
                                }};
                            }};;
                            localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                localSsdCount = 659669;
                            }};;
                            localSsdCount = 501324;
                            loggingConfig = new NodePoolLoggingConfig() {{
                                variantConfig = new LoggingVariantConfig() {{
                                    variant = LoggingVariantConfigVariantEnum.DEFAULT_;
                                }};;
                            }};;
                            machineType = "sapiente";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("deserunt", "nisi");
                            }};
                            minCpuPlatform = "vel";
                            nodeGroup = "natus";
                            oauthScopes = new String[]{{
                                add("molestiae"),
                                add("perferendis"),
                                add("nihil"),
                            }};
                            preemptible = false;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                                key = "distinctio";
                                values = new String[]{{
                                    add("labore"),
                                    add("labore"),
                                    add("suscipit"),
                                }};
                            }};;
                            resourceLabels = new java.util.HashMap<String, String>() {{
                                put("nobis", "eum");
                                put("vero", "aspernatur");
                                put("architecto", "magnam");
                            }};
                            sandboxConfig = new SandboxConfig() {{
                                sandboxType = "et";
                                type = SandboxConfigTypeEnum.GVISOR;
                            }};;
                            serviceAccount = "ullam";
                            shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                            }};;
                            spot = false;
                            tags = new String[]{{
                                add("quos"),
                                add("sint"),
                                add("accusantium"),
                            }};
                            taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_EXECUTE;
                                    key = "mollitia";
                                    value = "ad";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                    key = "dolor";
                                    value = "necessitatibus";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                    key = "nemo";
                                    value = "quasi";
                                }}),
                            }};
                            windowsNodeConfig = new WindowsNodeConfig() {{
                                osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2019;
                            }};;
                            workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                mode = WorkloadMetadataConfigModeEnum.GKE_METADATA;
                                nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.GKE_METADATA_SERVER;
                            }};;
                        }};;
                        nodeIpv4CidrSize = 260341;
                        nodePoolAutoConfig = new NodePoolAutoConfig() {{
                            networkTags = new NetworkTags() {{
                                tags = new String[]{{
                                    add("deleniti"),
                                    add("facilis"),
                                    add("in"),
                                    add("architecto"),
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
                                    locationPolicy = NodePoolAutoscalingLocationPolicyEnum.BALANCED;
                                    maxNodeCount = 714242;
                                    minNodeCount = 469249;
                                    totalMaxNodeCount = 998848;
                                    totalMinNodeCount = 841140;
                                }};
                                conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.UNAVAILABLE;
                                        code = StatusConditionCodeEnum.CA_EXPIRING;
                                        message = "accusantium";
                                    }}),
                                }};
                                config = new NodeConfig() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "praesentium";
                                            acceleratorType = "natus";
                                            gpuPartitionSize = "magni";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                                maxSharedClientsPerGpu = "quo";
                                            }};
                                            maxTimeSharedClientsPerGpu = "illum";
                                        }}),
                                    }};
                                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                        threadsPerCore = "pariatur";
                                    }};
                                    bootDiskKmsKey = "maxime";
                                    confidentialNodes = new ConfidentialNodes() {{
                                        enabled = false;
                                    }};
                                    diskSizeGb = 411397;
                                    diskType = "excepturi";
                                    ephemeralStorageConfig = new EphemeralStorageConfig() {{
                                        localSsdCount = 139972;
                                    }};
                                    ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                        localSsdCount = 407183;
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
                                    imageType = "accusantium";
                                    kubeletConfig = new NodeKubeletConfig() {{
                                        cpuCfsQuota = false;
                                        cpuCfsQuotaPeriod = "ab";
                                        cpuManagerPolicy = "maiores";
                                        podPidsLimit = "quidem";
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("voluptate", "autem");
                                        put("nam", "eaque");
                                    }};
                                    linuxNodeConfig = new LinuxNodeConfig() {{
                                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V2;
                                        sysctls = new java.util.HashMap<String, String>() {{
                                            put("voluptatibus", "perferendis");
                                            put("fugiat", "amet");
                                        }};
                                    }};
                                    localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                        localSsdCount = 11714;
                                    }};
                                    localSsdCount = 764912;
                                    loggingConfig = new NodePoolLoggingConfig() {{
                                        variantConfig = new LoggingVariantConfig() {{
                                            variant = LoggingVariantConfigVariantEnum.DEFAULT_;
                                        }};
                                    }};
                                    machineType = "hic";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("nobis", "dolores");
                                        put("quis", "totam");
                                        put("dignissimos", "eaque");
                                    }};
                                    minCpuPlatform = "quis";
                                    nodeGroup = "nesciunt";
                                    oauthScopes = new String[]{{
                                        add("perferendis"),
                                    }};
                                    preemptible = false;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.UNSPECIFIED;
                                        key = "minus";
                                        values = new String[]{{
                                            add("dolor"),
                                            add("vero"),
                                        }};
                                    }};
                                    resourceLabels = new java.util.HashMap<String, String>() {{
                                        put("hic", "recusandae");
                                        put("omnis", "facilis");
                                    }};
                                    sandboxConfig = new SandboxConfig() {{
                                        sandboxType = "perspiciatis";
                                        type = SandboxConfigTypeEnum.UNSPECIFIED;
                                    }};
                                    serviceAccount = "porro";
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                    }};
                                    spot = false;
                                    tags = new String[]{{
                                        add("blanditiis"),
                                    }};
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                            key = "occaecati";
                                            value = "rerum";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                            key = "asperiores";
                                            value = "earum";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                            key = "iste";
                                            value = "dolorum";
                                        }}),
                                    }};
                                    windowsNodeConfig = new WindowsNodeConfig() {{
                                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2019;
                                    }};
                                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                        mode = WorkloadMetadataConfigModeEnum.GKE_METADATA;
                                        nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.EXPOSE;
                                    }};
                                }};
                                etag = "nobis";
                                initialNodeCount = 730122;
                                instanceGroupUrls = new String[]{{
                                    add("quaerat"),
                                    add("quos"),
                                    add("aliquid"),
                                    add("dolorem"),
                                }};
                                locations = new String[]{{
                                    add("dolor"),
                                }};
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "qui";
                                        description = "ipsum";
                                    }};
                                }};
                                maxPodsConstraint = new MaxPodsConstraint() {{
                                    maxPodsPerNode = "hic";
                                }};
                                name = "Felipe Klein";
                                networkConfig = new NodeNetworkConfig() {{
                                    createPodRange = false;
                                    enablePrivateNodes = false;
                                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                        externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                                    }};
                                    podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                        disable = false;
                                    }};
                                    podIpv4CidrBlock = "numquam";
                                    podRange = "veritatis";
                                }};
                                placementPolicy = new PlacementPolicy() {{
                                    type = PlacementPolicyTypeEnum.TYPE_UNSPECIFIED;
                                }};
                                podIpv4CidrSize = 56418;
                                selfLink = "iure";
                                status = NodePoolStatusEnum.RUNNING_WITH_ERROR;
                                statusMessage = "quaerat";
                                updateInfo = new UpdateInfo() {{
                                    blueGreenInfo = new BlueGreenInfo() {{
                                        blueInstanceGroupUrls = new String[]{{
                                            add("quidem"),
                                            add("voluptatibus"),
                                            add("voluptas"),
                                            add("natus"),
                                        }};
                                        bluePoolDeletionStartTime = "eos";
                                        greenInstanceGroupUrls = new String[]{{
                                            add("sit"),
                                            add("fugiat"),
                                            add("ab"),
                                        }};
                                        greenPoolVersion = "soluta";
                                        phase = BlueGreenInfoPhaseEnum.NODE_POOL_SOAKING;
                                    }};
                                }};
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "iusto";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 453697;
                                            batchPercentage = 6770.82;
                                            batchSoakDuration = "deleniti";
                                        }};
                                    }};
                                    maxSurge = 607045;
                                    maxUnavailable = 896672;
                                    strategy = UpgradeSettingsStrategyEnum.SURGE;
                                }};
                                version = "asperiores";
                            }}),
                            add(new NodePool() {{
                                autoscaling = new NodePoolAutoscaling() {{
                                    autoprovisioned = false;
                                    enabled = false;
                                    locationPolicy = NodePoolAutoscalingLocationPolicyEnum.BALANCED;
                                    maxNodeCount = 216897;
                                    minNodeCount = 456015;
                                    totalMaxNodeCount = 663078;
                                    totalMinNodeCount = 906418;
                                }};
                                conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.UNKNOWN;
                                        code = StatusConditionCodeEnum.UNKNOWN;
                                        message = "amet";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.OUT_OF_RANGE;
                                        code = StatusConditionCodeEnum.CA_EXPIRING;
                                        message = "ad";
                                    }}),
                                }};
                                config = new NodeConfig() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "suscipit";
                                            acceleratorType = "deserunt";
                                            gpuPartitionSize = "provident";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                                maxSharedClientsPerGpu = "repellendus";
                                            }};
                                            maxTimeSharedClientsPerGpu = "totam";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "similique";
                                            acceleratorType = "alias";
                                            gpuPartitionSize = "at";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                                maxSharedClientsPerGpu = "tempora";
                                            }};
                                            maxTimeSharedClientsPerGpu = "vel";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "quod";
                                            acceleratorType = "officiis";
                                            gpuPartitionSize = "qui";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "a";
                                            }};
                                            maxTimeSharedClientsPerGpu = "esse";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "harum";
                                            acceleratorType = "iusto";
                                            gpuPartitionSize = "ipsum";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "tenetur";
                                            }};
                                            maxTimeSharedClientsPerGpu = "amet";
                                        }}),
                                    }};
                                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                        threadsPerCore = "tempore";
                                    }};
                                    bootDiskKmsKey = "accusamus";
                                    confidentialNodes = new ConfidentialNodes() {{
                                        enabled = false;
                                    }};
                                    diskSizeGb = 253941;
                                    diskType = "enim";
                                    ephemeralStorageConfig = new EphemeralStorageConfig() {{
                                        localSsdCount = 213312;
                                    }};
                                    ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                        localSsdCount = 957451;
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
                                    imageType = "totam";
                                    kubeletConfig = new NodeKubeletConfig() {{
                                        cpuCfsQuota = false;
                                        cpuCfsQuotaPeriod = "nihil";
                                        cpuManagerPolicy = "sit";
                                        podPidsLimit = "expedita";
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("sed", "vel");
                                    }};
                                    linuxNodeConfig = new LinuxNodeConfig() {{
                                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V2;
                                        sysctls = new java.util.HashMap<String, String>() {{
                                            put("deserunt", "quam");
                                            put("ipsum", "incidunt");
                                        }};
                                    }};
                                    localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                        localSsdCount = 186458;
                                    }};
                                    localSsdCount = 586784;
                                    loggingConfig = new NodePoolLoggingConfig() {{
                                        variantConfig = new LoggingVariantConfig() {{
                                            variant = LoggingVariantConfigVariantEnum.MAX_THROUGHPUT;
                                        }};
                                    }};
                                    machineType = "pariatur";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("dicta", "laborum");
                                        put("totam", "incidunt");
                                        put("aspernatur", "dolores");
                                    }};
                                    minCpuPlatform = "distinctio";
                                    nodeGroup = "facilis";
                                    oauthScopes = new String[]{{
                                        add("quam"),
                                        add("molestias"),
                                    }};
                                    preemptible = false;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.SPECIFIC_RESERVATION;
                                        key = "qui";
                                        values = new String[]{{
                                            add("fugit"),
                                        }};
                                    }};
                                    resourceLabels = new java.util.HashMap<String, String>() {{
                                        put("odio", "sunt");
                                    }};
                                    sandboxConfig = new SandboxConfig() {{
                                        sandboxType = "ullam";
                                        type = SandboxConfigTypeEnum.GVISOR;
                                    }};
                                    serviceAccount = "hic";
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                    }};
                                    spot = false;
                                    tags = new String[]{{
                                        add("cumque"),
                                    }};
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                            key = "et";
                                            value = "saepe";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                            key = "veritatis";
                                            value = "nobis";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                            key = "tempore";
                                            value = "cupiditate";
                                        }}),
                                    }};
                                    windowsNodeConfig = new WindowsNodeConfig() {{
                                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_UNSPECIFIED;
                                    }};
                                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                        mode = WorkloadMetadataConfigModeEnum.GKE_METADATA;
                                        nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.UNSPECIFIED;
                                    }};
                                }};
                                etag = "dolore";
                                initialNodeCount = 286915;
                                instanceGroupUrls = new String[]{{
                                    add("dolorum"),
                                }};
                                locations = new String[]{{
                                    add("quae"),
                                }};
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "aut";
                                        description = "quas";
                                    }};
                                }};
                                maxPodsConstraint = new MaxPodsConstraint() {{
                                    maxPodsPerNode = "itaque";
                                }};
                                name = "Jodi Skiles";
                                networkConfig = new NodeNetworkConfig() {{
                                    createPodRange = false;
                                    enablePrivateNodes = false;
                                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                        externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                                    }};
                                    podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                        disable = false;
                                    }};
                                    podIpv4CidrBlock = "cupiditate";
                                    podRange = "qui";
                                }};
                                placementPolicy = new PlacementPolicy() {{
                                    type = PlacementPolicyTypeEnum.TYPE_UNSPECIFIED;
                                }};
                                podIpv4CidrSize = 512393;
                                selfLink = "odio";
                                status = NodePoolStatusEnum.RECONCILING;
                                statusMessage = "voluptatibus";
                                updateInfo = new UpdateInfo() {{
                                    blueGreenInfo = new BlueGreenInfo() {{
                                        blueInstanceGroupUrls = new String[]{{
                                            add("vero"),
                                            add("omnis"),
                                            add("quis"),
                                            add("ipsum"),
                                        }};
                                        bluePoolDeletionStartTime = "delectus";
                                        greenInstanceGroupUrls = new String[]{{
                                            add("consectetur"),
                                            add("vero"),
                                        }};
                                        greenPoolVersion = "tenetur";
                                        phase = BlueGreenInfoPhaseEnum.CORDONING_BLUE_POOL;
                                    }};
                                }};
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "hic";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 715561;
                                            batchPercentage = 7992.03;
                                            batchSoakDuration = "odio";
                                        }};
                                    }};
                                    maxSurge = 630448;
                                    maxUnavailable = 708548;
                                    strategy = UpgradeSettingsStrategyEnum.SURGE;
                                }};
                                version = "ducimus";
                            }}),
                            add(new NodePool() {{
                                autoscaling = new NodePoolAutoscaling() {{
                                    autoprovisioned = false;
                                    enabled = false;
                                    locationPolicy = NodePoolAutoscalingLocationPolicyEnum.LOCATION_POLICY_UNSPECIFIED;
                                    maxNodeCount = 844550;
                                    minNodeCount = 848944;
                                    totalMaxNodeCount = 194342;
                                    totalMinNodeCount = 617877;
                                }};
                                conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.OK;
                                        code = StatusConditionCodeEnum.CA_EXPIRING;
                                        message = "exercitationem";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.INTERNAL;
                                        code = StatusConditionCodeEnum.GCE_STOCKOUT;
                                        message = "porro";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.DATA_LOSS;
                                        code = StatusConditionCodeEnum.CA_EXPIRING;
                                        message = "iusto";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.OUT_OF_RANGE;
                                        code = StatusConditionCodeEnum.GCE_QUOTA_EXCEEDED;
                                        message = "alias";
                                    }}),
                                }};
                                config = new NodeConfig() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "tempora";
                                            acceleratorType = "ipsam";
                                            gpuPartitionSize = "ea";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                                maxSharedClientsPerGpu = "vel";
                                            }};
                                            maxTimeSharedClientsPerGpu = "possimus";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "magnam";
                                            acceleratorType = "ratione";
                                            gpuPartitionSize = "ex";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "dicta";
                                            }};
                                            maxTimeSharedClientsPerGpu = "dolor";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "maiores";
                                            acceleratorType = "quasi";
                                            gpuPartitionSize = "ex";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "excepturi";
                                            }};
                                            maxTimeSharedClientsPerGpu = "voluptatibus";
                                        }}),
                                    }};
                                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                        threadsPerCore = "nostrum";
                                    }};
                                    bootDiskKmsKey = "sapiente";
                                    confidentialNodes = new ConfidentialNodes() {{
                                        enabled = false;
                                    }};
                                    diskSizeGb = 788873;
                                    diskType = "saepe";
                                    ephemeralStorageConfig = new EphemeralStorageConfig() {{
                                        localSsdCount = 411372;
                                    }};
                                    ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                        localSsdCount = 774048;
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
                                    imageType = "corporis";
                                    kubeletConfig = new NodeKubeletConfig() {{
                                        cpuCfsQuota = false;
                                        cpuCfsQuotaPeriod = "veniam";
                                        cpuManagerPolicy = "aliquid";
                                        podPidsLimit = "inventore";
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("ea", "quo");
                                        put("consectetur", "recusandae");
                                    }};
                                    linuxNodeConfig = new LinuxNodeConfig() {{
                                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_UNSPECIFIED;
                                        sysctls = new java.util.HashMap<String, String>() {{
                                            put("eaque", "a");
                                            put("libero", "aut");
                                        }};
                                    }};
                                    localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                        localSsdCount = 11427;
                                    }};
                                    localSsdCount = 533466;
                                    loggingConfig = new NodePoolLoggingConfig() {{
                                        variantConfig = new LoggingVariantConfig() {{
                                            variant = LoggingVariantConfigVariantEnum.MAX_THROUGHPUT;
                                        }};
                                    }};
                                    machineType = "aliquam";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("accusamus", "inventore");
                                    }};
                                    minCpuPlatform = "non";
                                    nodeGroup = "et";
                                    oauthScopes = new String[]{{
                                        add("laborum"),
                                        add("placeat"),
                                        add("velit"),
                                    }};
                                    preemptible = false;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                                        key = "autem";
                                        values = new String[]{{
                                            add("quas"),
                                            add("assumenda"),
                                            add("nulla"),
                                            add("voluptas"),
                                        }};
                                    }};
                                    resourceLabels = new java.util.HashMap<String, String>() {{
                                        put("quasi", "tempora");
                                        put("numquam", "explicabo");
                                        put("provident", "ipsa");
                                    }};
                                    sandboxConfig = new SandboxConfig() {{
                                        sandboxType = "molestiae";
                                        type = SandboxConfigTypeEnum.UNSPECIFIED;
                                    }};
                                    serviceAccount = "odio";
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                    }};
                                    spot = false;
                                    tags = new String[]{{
                                        add("esse"),
                                        add("esse"),
                                    }};
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                            key = "reprehenderit";
                                            value = "quidem";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_EXECUTE;
                                            key = "ut";
                                            value = "eum";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                            key = "assumenda";
                                            value = "eos";
                                        }}),
                                    }};
                                    windowsNodeConfig = new WindowsNodeConfig() {{
                                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2019;
                                    }};
                                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                        mode = WorkloadMetadataConfigModeEnum.GKE_METADATA;
                                        nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.UNSPECIFIED;
                                    }};
                                }};
                                etag = "ipsa";
                                initialNodeCount = 660040;
                                instanceGroupUrls = new String[]{{
                                    add("neque"),
                                    add("quo"),
                                    add("illum"),
                                }};
                                locations = new String[]{{
                                    add("fuga"),
                                    add("eius"),
                                    add("eos"),
                                    add("voluptas"),
                                }};
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "ab";
                                        description = "cupiditate";
                                    }};
                                }};
                                maxPodsConstraint = new MaxPodsConstraint() {{
                                    maxPodsPerNode = "consequatur";
                                }};
                                name = "Henrietta Hilpert";
                                networkConfig = new NodeNetworkConfig() {{
                                    createPodRange = false;
                                    enablePrivateNodes = false;
                                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                        externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER1;
                                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                                    }};
                                    podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                        disable = false;
                                    }};
                                    podIpv4CidrBlock = "recusandae";
                                    podRange = "aperiam";
                                }};
                                placementPolicy = new PlacementPolicy() {{
                                    type = PlacementPolicyTypeEnum.COMPACT;
                                }};
                                podIpv4CidrSize = 799796;
                                selfLink = "dignissimos";
                                status = NodePoolStatusEnum.STATUS_UNSPECIFIED;
                                statusMessage = "nihil";
                                updateInfo = new UpdateInfo() {{
                                    blueGreenInfo = new BlueGreenInfo() {{
                                        blueInstanceGroupUrls = new String[]{{
                                            add("accusamus"),
                                            add("aliquam"),
                                            add("odio"),
                                        }};
                                        bluePoolDeletionStartTime = "occaecati";
                                        greenInstanceGroupUrls = new String[]{{
                                            add("sapiente"),
                                            add("dolores"),
                                        }};
                                        greenPoolVersion = "deserunt";
                                        phase = BlueGreenInfoPhaseEnum.CORDONING_BLUE_POOL;
                                    }};
                                }};
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "accusantium";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 783648;
                                            batchPercentage = 4304.02;
                                            batchSoakDuration = "quas";
                                        }};
                                    }};
                                    maxSurge = 510017;
                                    maxUnavailable = 159867;
                                    strategy = UpgradeSettingsStrategyEnum.BLUE_GREEN;
                                }};
                                version = "fugit";
                            }}),
                            add(new NodePool() {{
                                autoscaling = new NodePoolAutoscaling() {{
                                    autoprovisioned = false;
                                    enabled = false;
                                    locationPolicy = NodePoolAutoscalingLocationPolicyEnum.ANY;
                                    maxNodeCount = 649463;
                                    minNodeCount = 277596;
                                    totalMaxNodeCount = 539224;
                                    totalMinNodeCount = 128860;
                                }};
                                conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.ALREADY_EXISTS;
                                        code = StatusConditionCodeEnum.GCE_STOCKOUT;
                                        message = "sapiente";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.UNKNOWN;
                                        code = StatusConditionCodeEnum.GCE_STOCKOUT;
                                        message = "explicabo";
                                    }}),
                                }};
                                config = new NodeConfig() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "occaecati";
                                            acceleratorType = "atque";
                                            gpuPartitionSize = "et";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                                maxSharedClientsPerGpu = "eveniet";
                                            }};
                                            maxTimeSharedClientsPerGpu = "accusamus";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "veritatis";
                                            acceleratorType = "esse";
                                            gpuPartitionSize = "quod";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "vero";
                                            }};
                                            maxTimeSharedClientsPerGpu = "aliquid";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "quasi";
                                            acceleratorType = "saepe";
                                            gpuPartitionSize = "vel";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "molestiae";
                                            }};
                                            maxTimeSharedClientsPerGpu = "rerum";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "occaecati";
                                            acceleratorType = "minima";
                                            gpuPartitionSize = "distinctio";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "sit";
                                            }};
                                            maxTimeSharedClientsPerGpu = "culpa";
                                        }}),
                                    }};
                                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                        threadsPerCore = "tempore";
                                    }};
                                    bootDiskKmsKey = "adipisci";
                                    confidentialNodes = new ConfidentialNodes() {{
                                        enabled = false;
                                    }};
                                    diskSizeGb = 766964;
                                    diskType = "consequuntur";
                                    ephemeralStorageConfig = new EphemeralStorageConfig() {{
                                        localSsdCount = 9766;
                                    }};
                                    ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                        localSsdCount = 796392;
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
                                    imageType = "quaerat";
                                    kubeletConfig = new NodeKubeletConfig() {{
                                        cpuCfsQuota = false;
                                        cpuCfsQuotaPeriod = "sapiente";
                                        cpuManagerPolicy = "consectetur";
                                        podPidsLimit = "esse";
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("provident", "a");
                                        put("nulla", "quas");
                                        put("esse", "quasi");
                                    }};
                                    linuxNodeConfig = new LinuxNodeConfig() {{
                                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V2;
                                        sysctls = new java.util.HashMap<String, String>() {{
                                            put("sint", "pariatur");
                                            put("possimus", "quia");
                                            put("eveniet", "asperiores");
                                        }};
                                    }};
                                    localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                        localSsdCount = 815524;
                                    }};
                                    localSsdCount = 85001;
                                    loggingConfig = new NodePoolLoggingConfig() {{
                                        variantConfig = new LoggingVariantConfig() {{
                                            variant = LoggingVariantConfigVariantEnum.VARIANT_UNSPECIFIED;
                                        }};
                                    }};
                                    machineType = "quasi";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("culpa", "aliquid");
                                        put("tenetur", "quae");
                                        put("earum", "vel");
                                    }};
                                    minCpuPlatform = "in";
                                    nodeGroup = "eius";
                                    oauthScopes = new String[]{{
                                        add("illum"),
                                        add("soluta"),
                                        add("accusantium"),
                                    }};
                                    preemptible = false;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                                        key = "sapiente";
                                        values = new String[]{{
                                            add("ullam"),
                                        }};
                                    }};
                                    resourceLabels = new java.util.HashMap<String, String>() {{
                                        put("ullam", "nisi");
                                        put("aut", "voluptatum");
                                    }};
                                    sandboxConfig = new SandboxConfig() {{
                                        sandboxType = "qui";
                                        type = SandboxConfigTypeEnum.GVISOR;
                                    }};
                                    serviceAccount = "ex";
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                    }};
                                    spot = false;
                                    tags = new String[]{{
                                        add("itaque"),
                                        add("dolorum"),
                                        add("architecto"),
                                    }};
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_EXECUTE;
                                            key = "quasi";
                                            value = "at";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                            key = "voluptate";
                                            value = "ipsa";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                            key = "veritatis";
                                            value = "consectetur";
                                        }}),
                                    }};
                                    windowsNodeConfig = new WindowsNodeConfig() {{
                                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_UNSPECIFIED;
                                    }};
                                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                        mode = WorkloadMetadataConfigModeEnum.GCE_METADATA;
                                        nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.GKE_METADATA_SERVER;
                                    }};
                                }};
                                etag = "accusantium";
                                initialNodeCount = 522371;
                                instanceGroupUrls = new String[]{{
                                    add("laudantium"),
                                }};
                                locations = new String[]{{
                                    add("mollitia"),
                                    add("ab"),
                                }};
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "corrupti";
                                        description = "non";
                                    }};
                                }};
                                maxPodsConstraint = new MaxPodsConstraint() {{
                                    maxPodsPerNode = "voluptatem";
                                }};
                                name = "Toni Fritsch";
                                networkConfig = new NodeNetworkConfig() {{
                                    createPodRange = false;
                                    enablePrivateNodes = false;
                                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                        externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                                    }};
                                    podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                        disable = false;
                                    }};
                                    podIpv4CidrBlock = "dignissimos";
                                    podRange = "dicta";
                                }};
                                placementPolicy = new PlacementPolicy() {{
                                    type = PlacementPolicyTypeEnum.COMPACT;
                                }};
                                podIpv4CidrSize = 618480;
                                selfLink = "velit";
                                status = NodePoolStatusEnum.ERROR;
                                statusMessage = "voluptas";
                                updateInfo = new UpdateInfo() {{
                                    blueGreenInfo = new BlueGreenInfo() {{
                                        blueInstanceGroupUrls = new String[]{{
                                            add("aperiam"),
                                            add("ea"),
                                            add("quaerat"),
                                            add("consequuntur"),
                                        }};
                                        bluePoolDeletionStartTime = "repellendus";
                                        greenInstanceGroupUrls = new String[]{{
                                            add("maxime"),
                                            add("dignissimos"),
                                            add("officia"),
                                        }};
                                        greenPoolVersion = "asperiores";
                                        phase = BlueGreenInfoPhaseEnum.CREATING_GREEN_POOL;
                                    }};
                                }};
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "quae";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 312753;
                                            batchPercentage = 7832.35;
                                            batchSoakDuration = "quod";
                                        }};
                                    }};
                                    maxSurge = 288398;
                                    maxUnavailable = 70447;
                                    strategy = UpgradeSettingsStrategyEnum.NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED;
                                }};
                                version = "fuga";
                            }}),
                        }};
                        notificationConfig = new NotificationConfig() {{
                            pubsub = new PubSub() {{
                                enabled = false;
                                filter = new Filter() {{
                                    eventType = new org.openapis.openapi.models.shared.FilterEventTypeEnum[]{{
                                        add(FilterEventTypeEnum.UPGRADE_AVAILABLE_EVENT),
                                        add(FilterEventTypeEnum.EVENT_TYPE_UNSPECIFIED),
                                        add(FilterEventTypeEnum.UPGRADE_EVENT),
                                    }};
                                }};;
                                topic = "est";
                            }};;
                        }};;
                        podSecurityPolicyConfig = new PodSecurityPolicyConfig() {{
                            enabled = false;
                        }};;
                        privateCluster = false;
                        privateClusterConfig = new PrivateClusterConfig() {{
                            enablePrivateEndpoint = false;
                            enablePrivateNodes = false;
                            masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig() {{
                                enabled = false;
                            }};;
                            masterIpv4CidrBlock = "recusandae";
                            peeringName = "totam";
                            privateEndpoint = "fugiat";
                            privateEndpointSubnetwork = "vel";
                            publicEndpoint = "ducimus";
                        }};;
                        protectConfig = new ProtectConfig() {{
                            workloadConfig = new WorkloadConfig() {{
                                auditMode = WorkloadConfigAuditModeEnum.BASIC;
                            }};;
                            workloadVulnerabilityMode = ProtectConfigWorkloadVulnerabilityModeEnum.DISABLED;
                        }};;
                        releaseChannel = new ReleaseChannel() {{
                            channel = ReleaseChannelChannelEnum.RAPID;
                        }};;
                        resourceLabels = new java.util.HashMap<String, String>() {{
                            put("facilis", "cum");
                            put("commodi", "in");
                            put("corporis", "reiciendis");
                            put("assumenda", "nemo");
                        }};
                        resourceUsageExportConfig = new ResourceUsageExportConfig() {{
                            bigqueryDestination = new BigQueryDestination() {{
                                datasetId = "recusandae";
                            }};;
                            consumptionMeteringConfig = new ConsumptionMeteringConfig() {{
                                enabled = false;
                            }};;
                            enableNetworkEgressMetering = false;
                        }};;
                        selfLink = "aliquid";
                        servicesIpv4Cidr = "aperiam";
                        shieldedNodes = new ShieldedNodes() {{
                            enabled = false;
                        }};;
                        status = ClusterStatusEnum.ERROR;
                        statusMessage = "consectetur";
                        subnetwork = "in";
                        tpuConfig = new TpuConfig() {{
                            enabled = false;
                            ipv4CidrBlock = "exercitationem";
                            useServiceNetworking = false;
                        }};;
                        tpuIpv4CidrBlock = "earum";
                        verticalPodAutoscaling = new VerticalPodAutoscaling() {{
                            enabled = false;
                        }};;
                        workloadAltsConfig = new WorkloadALTSConfig() {{
                            enableAlts = false;
                        }};;
                        workloadCertificates = new WorkloadCertificates() {{
                            enableCertificates = false;
                        }};;
                        workloadIdentityConfig = new WorkloadIdentityConfig() {{
                            identityNamespace = "facere";
                            identityProvider = "numquam";
                            workloadPool = "doloribus";
                        }};;
                        zone = "suscipit";
                    }};;
                    parent = "reiciendis";
                    projectId = "quidem";
                    zone = "saepe";
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "sunt";
                fields = "asperiores";
                key = "adipisci";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "beatae";
                uploadProtocol = "dignissimos";
            }};            

            ContainerProjectsLocationsClustersCreateResponse res = sdk.projects.containerProjectsLocationsClustersCreate(req, new ContainerProjectsLocationsClustersCreateSecurity("a", "debitis") {{
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

            ContainerProjectsLocationsClustersGetJwksRequest req = new ContainerProjectsLocationsClustersGetJwksRequest("consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "voluptates";
                key = "libero";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "similique";
                uploadProtocol = "tempora";
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

            ContainerProjectsLocationsClustersListRequest req = new ContainerProjectsLocationsClustersListRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "nobis";
                key = "dolorum";
                oauthToken = "adipisci";
                prettyPrint = false;
                projectId = "minus";
                quotaUser = "dolores";
                uploadType = "blanditiis";
                uploadProtocol = "in";
                zone = "dolore";
            }};            

            ContainerProjectsLocationsClustersListResponse res = sdk.projects.containerProjectsLocationsClustersList(req, new ContainerProjectsLocationsClustersListSecurity("aliquam", "officiis") {{
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

            ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest req = new ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest("temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("cum", "blanditiis");
                }};
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "culpa";
                key = "corrupti";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "hic";
                uploadProtocol = "exercitationem";
            }};            

            ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsCompleteUpgrade(req, new ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeSecurity("nobis", "sit") {{
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
import org.openapis.openapi.models.shared.EphemeralStorageConfig;
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
import org.openapis.openapi.models.shared.NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
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
import org.openapis.openapi.models.shared.WorkloadMetadataConfigNodeMetadataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsCreateRequest req = new ContainerProjectsLocationsClustersNodePoolsCreateRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                createNodePoolRequest = new CreateNodePoolRequest() {{
                    clusterId = "reiciendis";
                    nodePool = new NodePool() {{
                        autoscaling = new NodePoolAutoscaling() {{
                            autoprovisioned = false;
                            enabled = false;
                            locationPolicy = NodePoolAutoscalingLocationPolicyEnum.LOCATION_POLICY_UNSPECIFIED;
                            maxNodeCount = 994401;
                            minNodeCount = 707918;
                            totalMaxNodeCount = 451822;
                            totalMinNodeCount = 709072;
                        }};;
                        conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.FAILED_PRECONDITION;
                                code = StatusConditionCodeEnum.GKE_SERVICE_ACCOUNT_DELETED;
                                message = "laborum";
                            }}),
                        }};
                        config = new NodeConfig() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "in";
                                    acceleratorType = "commodi";
                                    gpuPartitionSize = "quidem";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                        maxSharedClientsPerGpu = "voluptas";
                                    }};
                                    maxTimeSharedClientsPerGpu = "unde";
                                }}),
                            }};
                            advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                threadsPerCore = "architecto";
                            }};;
                            bootDiskKmsKey = "suscipit";
                            confidentialNodes = new ConfidentialNodes() {{
                                enabled = false;
                            }};;
                            diskSizeGb = 960257;
                            diskType = "debitis";
                            ephemeralStorageConfig = new EphemeralStorageConfig() {{
                                localSsdCount = 72434;
                            }};;
                            ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                localSsdCount = 967795;
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
                            imageType = "perferendis";
                            kubeletConfig = new NodeKubeletConfig() {{
                                cpuCfsQuota = false;
                                cpuCfsQuotaPeriod = "corrupti";
                                cpuManagerPolicy = "maiores";
                                podPidsLimit = "incidunt";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("provident", "eius");
                            }};
                            linuxNodeConfig = new LinuxNodeConfig() {{
                                cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V2;
                                sysctls = new java.util.HashMap<String, String>() {{
                                    put("ea", "occaecati");
                                }};
                            }};;
                            localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                localSsdCount = 552078;
                            }};;
                            localSsdCount = 975752;
                            loggingConfig = new NodePoolLoggingConfig() {{
                                variantConfig = new LoggingVariantConfig() {{
                                    variant = LoggingVariantConfigVariantEnum.VARIANT_UNSPECIFIED;
                                }};;
                            }};;
                            machineType = "tempora";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("reiciendis", "ex");
                                put("sit", "non");
                            }};
                            minCpuPlatform = "officiis";
                            nodeGroup = "praesentium";
                            oauthScopes = new String[]{{
                                add("quaerat"),
                                add("incidunt"),
                                add("ipsam"),
                            }};
                            preemptible = false;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.SPECIFIC_RESERVATION;
                                key = "rem";
                                values = new String[]{{
                                    add("nobis"),
                                }};
                            }};;
                            resourceLabels = new java.util.HashMap<String, String>() {{
                                put("veniam", "minima");
                                put("recusandae", "reiciendis");
                                put("nulla", "magni");
                            }};
                            sandboxConfig = new SandboxConfig() {{
                                sandboxType = "aperiam";
                                type = SandboxConfigTypeEnum.GVISOR;
                            }};;
                            serviceAccount = "numquam";
                            shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                            }};;
                            spot = false;
                            tags = new String[]{{
                                add("in"),
                                add("officiis"),
                            }};
                            taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.PREFER_NO_SCHEDULE;
                                    key = "exercitationem";
                                    value = "praesentium";
                                }}),
                            }};
                            windowsNodeConfig = new WindowsNodeConfig() {{
                                osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2022;
                            }};;
                            workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                mode = WorkloadMetadataConfigModeEnum.GCE_METADATA;
                                nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.EXPOSE;
                            }};;
                        }};;
                        etag = "voluptatum";
                        initialNodeCount = 622385;
                        instanceGroupUrls = new String[]{{
                            add("expedita"),
                            add("debitis"),
                            add("neque"),
                            add("dolorum"),
                        }};
                        locations = new String[]{{
                            add("officia"),
                            add("dolorum"),
                        }};
                        management = new NodeManagement() {{
                            autoRepair = false;
                            autoUpgrade = false;
                            upgradeOptions = new AutoUpgradeOptions() {{
                                autoUpgradeStartTime = "corrupti";
                                description = "accusamus";
                            }};;
                        }};;
                        maxPodsConstraint = new MaxPodsConstraint() {{
                            maxPodsPerNode = "tempora";
                        }};;
                        name = "Louis Grady V";
                        networkConfig = new NodeNetworkConfig() {{
                            createPodRange = false;
                            enablePrivateNodes = false;
                            networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER1;
                                totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                            }};;
                            podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                disable = false;
                            }};;
                            podIpv4CidrBlock = "consequatur";
                            podRange = "esse";
                        }};;
                        placementPolicy = new PlacementPolicy() {{
                            type = PlacementPolicyTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        podIpv4CidrSize = 24527;
                        selfLink = "voluptatum";
                        status = NodePoolStatusEnum.RUNNING_WITH_ERROR;
                        statusMessage = "repudiandae";
                        updateInfo = new UpdateInfo() {{
                            blueGreenInfo = new BlueGreenInfo() {{
                                blueInstanceGroupUrls = new String[]{{
                                    add("et"),
                                    add("blanditiis"),
                                }};
                                bluePoolDeletionStartTime = "ex";
                                greenInstanceGroupUrls = new String[]{{
                                    add("sit"),
                                }};
                                greenPoolVersion = "vel";
                                phase = BlueGreenInfoPhaseEnum.CREATING_GREEN_POOL;
                            }};;
                        }};;
                        upgradeSettings = new UpgradeSettings() {{
                            blueGreenSettings = new BlueGreenSettings() {{
                                nodePoolSoakDuration = "saepe";
                                standardRolloutPolicy = new StandardRolloutPolicy() {{
                                    batchNodeCount = 622231;
                                    batchPercentage = 85.11;
                                    batchSoakDuration = "incidunt";
                                }};;
                            }};;
                            maxSurge = 968865;
                            maxUnavailable = 209750;
                            strategy = UpgradeSettingsStrategyEnum.SURGE;
                        }};;
                        version = "dicta";
                    }};;
                    parent = "architecto";
                    projectId = "occaecati";
                    zone = "labore";
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "nam";
                key = "tenetur";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "amet";
                uploadProtocol = "deserunt";
            }};            

            ContainerProjectsLocationsClustersNodePoolsCreateResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsCreate(req, new ContainerProjectsLocationsClustersNodePoolsCreateSecurity("voluptate", "unde") {{
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

            ContainerProjectsLocationsClustersNodePoolsDeleteRequest req = new ContainerProjectsLocationsClustersNodePoolsDeleteRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                clusterId = "perferendis";
                fields = "est";
                key = "quidem";
                nodePoolId = "reprehenderit";
                oauthToken = "facere";
                prettyPrint = false;
                projectId = "fuga";
                quotaUser = "praesentium";
                uploadType = "mollitia";
                uploadProtocol = "veniam";
                zone = "voluptatem";
            }};            

            ContainerProjectsLocationsClustersNodePoolsDeleteResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsDelete(req, new ContainerProjectsLocationsClustersNodePoolsDeleteSecurity("quisquam", "repudiandae") {{
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

            ContainerProjectsLocationsClustersNodePoolsListRequest req = new ContainerProjectsLocationsClustersNodePoolsListRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "totam";
                clusterId = "suscipit";
                fields = "quidem";
                key = "maxime";
                oauthToken = "et";
                prettyPrint = false;
                projectId = "esse";
                quotaUser = "amet";
                uploadType = "assumenda";
                uploadProtocol = "ea";
                zone = "atque";
            }};            

            ContainerProjectsLocationsClustersNodePoolsListResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsList(req, new ContainerProjectsLocationsClustersNodePoolsListSecurity("error", "officiis") {{
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

            ContainerProjectsLocationsClustersNodePoolsRollbackRequest req = new ContainerProjectsLocationsClustersNodePoolsRollbackRequest("officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                rollbackNodePoolUpgradeRequest = new RollbackNodePoolUpgradeRequest() {{
                    clusterId = "natus";
                    name = "Kelly Jakubowski";
                    nodePoolId = "at";
                    projectId = "error";
                    respectPdb = false;
                    zone = "blanditiis";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "atque";
                key = "sunt";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "repellendus";
                uploadProtocol = "labore";
            }};            

            ContainerProjectsLocationsClustersNodePoolsRollbackResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsRollback(req, new ContainerProjectsLocationsClustersNodePoolsRollbackSecurity("reiciendis", "doloremque") {{
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

Sets the autoscaling settings of a specific node pool.

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

            ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest req = new ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                setNodePoolAutoscalingRequest = new SetNodePoolAutoscalingRequest() {{
                    autoscaling = new NodePoolAutoscaling() {{
                        autoprovisioned = false;
                        enabled = false;
                        locationPolicy = NodePoolAutoscalingLocationPolicyEnum.LOCATION_POLICY_UNSPECIFIED;
                        maxNodeCount = 106429;
                        minNodeCount = 174772;
                        totalMaxNodeCount = 316488;
                        totalMinNodeCount = 389135;
                    }};;
                    clusterId = "velit";
                    name = "Ross Gusikowski";
                    nodePoolId = "occaecati";
                    projectId = "officiis";
                    zone = "perspiciatis";
                }};;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "eveniet";
                fields = "occaecati";
                key = "consequuntur";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "quis";
                uploadProtocol = "reprehenderit";
            }};            

            ContainerProjectsLocationsClustersNodePoolsSetAutoscalingResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsSetAutoscaling(req, new ContainerProjectsLocationsClustersNodePoolsSetAutoscalingSecurity("error", "illo") {{
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

            ContainerProjectsLocationsClustersNodePoolsSetManagementRequest req = new ContainerProjectsLocationsClustersNodePoolsSetManagementRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                setNodePoolManagementRequest = new SetNodePoolManagementRequest() {{
                    clusterId = "eveniet";
                    management = new NodeManagement() {{
                        autoRepair = false;
                        autoUpgrade = false;
                        upgradeOptions = new AutoUpgradeOptions() {{
                            autoUpgradeStartTime = "non";
                            description = "vero";
                        }};;
                    }};;
                    name = "Vera Beier IV";
                    nodePoolId = "eveniet";
                    projectId = "qui";
                    zone = "cum";
                }};;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "laborum";
                key = "distinctio";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "aliquam";
                uploadProtocol = "ad";
            }};            

            ContainerProjectsLocationsClustersNodePoolsSetManagementResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsSetManagement(req, new ContainerProjectsLocationsClustersNodePoolsSetManagementSecurity("repellat", "alias") {{
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

SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

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
                    clusterId = "nihil";
                    name = "Shane Abshire";
                    nodeCount = 174658;
                    nodePoolId = "id";
                    projectId = "minima";
                    zone = "dolore";
                }};;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "recusandae";
                key = "omnis";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "ex";
                uploadProtocol = "ut";
            }};            

            ContainerProjectsLocationsClustersNodePoolsSetSizeResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsSetSize(req, new ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity("culpa", "adipisci") {{
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

Updates the version and/or image type of a specific node pool.

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
import org.openapis.openapi.models.shared.NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
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
import org.openapis.openapi.models.shared.WorkloadMetadataConfigNodeMetadataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersNodePoolsUpdateRequest req = new ContainerProjectsLocationsClustersNodePoolsUpdateRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                updateNodePoolRequest = new UpdateNodePoolRequest() {{
                    clusterId = "eum";
                    confidentialNodes = new ConfidentialNodes() {{
                        enabled = false;
                    }};;
                    etag = "nemo";
                    fastSocket = new FastSocket() {{
                        enabled = false;
                    }};;
                    gcfsConfig = new GcfsConfig() {{
                        enabled = false;
                    }};;
                    gvnic = new VirtualNIC() {{
                        enabled = false;
                    }};;
                    imageType = "recusandae";
                    kubeletConfig = new NodeKubeletConfig() {{
                        cpuCfsQuota = false;
                        cpuCfsQuotaPeriod = "esse";
                        cpuManagerPolicy = "provident";
                        podPidsLimit = "quis";
                    }};;
                    labels = new NodeLabels() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("reiciendis", "provident");
                            put("aspernatur", "ullam");
                        }};
                    }};;
                    linuxNodeConfig = new LinuxNodeConfig() {{
                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_UNSPECIFIED;
                        sysctls = new java.util.HashMap<String, String>() {{
                            put("nostrum", "mollitia");
                            put("provident", "possimus");
                            put("animi", "ex");
                        }};
                    }};;
                    locations = new String[]{{
                        add("accusantium"),
                        add("repellat"),
                    }};
                    loggingConfig = new NodePoolLoggingConfig() {{
                        variantConfig = new LoggingVariantConfig() {{
                            variant = LoggingVariantConfigVariantEnum.MAX_THROUGHPUT;
                        }};;
                    }};;
                    name = "Arlene Reichert";
                    nodeNetworkConfig = new NodeNetworkConfig() {{
                        createPodRange = false;
                        enablePrivateNodes = false;
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER1;
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                            disable = false;
                        }};;
                        podIpv4CidrBlock = "modi";
                        podRange = "voluptatibus";
                    }};;
                    nodePoolId = "molestias";
                    nodeVersion = "officiis";
                    projectId = "sapiente";
                    resourceLabels = new ResourceLabels() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("vitae", "rerum");
                            put("tempora", "quis");
                            put("inventore", "fugit");
                            put("cumque", "quae");
                        }};
                    }};;
                    tags = new NetworkTags() {{
                        tags = new String[]{{
                            add("velit"),
                        }};
                    }};;
                    taints = new NodeTaints() {{
                        taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                key = "eius";
                                value = "rem";
                            }}),
                        }};
                    }};;
                    upgradeSettings = new UpgradeSettings() {{
                        blueGreenSettings = new BlueGreenSettings() {{
                            nodePoolSoakDuration = "at";
                            standardRolloutPolicy = new StandardRolloutPolicy() {{
                                batchNodeCount = 773084;
                                batchPercentage = 1794.1;
                                batchSoakDuration = "sapiente";
                            }};;
                        }};;
                        maxSurge = 433279;
                        maxUnavailable = 117320;
                        strategy = UpgradeSettingsStrategyEnum.NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED;
                    }};;
                    windowsNodeConfig = new WindowsNodeConfig() {{
                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_UNSPECIFIED;
                    }};;
                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                        mode = WorkloadMetadataConfigModeEnum.GCE_METADATA;
                        nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.EXPOSE;
                    }};;
                    zone = "earum";
                }};;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "eaque";
                key = "earum";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "debitis";
                uploadProtocol = "aliquid";
            }};            

            ContainerProjectsLocationsClustersNodePoolsUpdateResponse res = sdk.projects.containerProjectsLocationsClustersNodePoolsUpdate(req, new ContainerProjectsLocationsClustersNodePoolsUpdateSecurity("porro", "suscipit") {{
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
import org.openapis.openapi.models.shared.GcsFuseCsiDriverConfig;
import org.openapis.openapi.models.shared.GkeBackupAgentConfig;
import org.openapis.openapi.models.shared.HorizontalPodAutoscaling;
import org.openapis.openapi.models.shared.HttpLoadBalancing;
import org.openapis.openapi.models.shared.IstioConfig;
import org.openapis.openapi.models.shared.IstioConfigAuthEnum;
import org.openapis.openapi.models.shared.KalmConfig;
import org.openapis.openapi.models.shared.KubernetesDashboard;
import org.openapis.openapi.models.shared.NetworkPolicyConfig;
import org.openapis.openapi.models.shared.SetAddonsConfigRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsClustersSetAddonsRequest req = new ContainerProjectsLocationsClustersSetAddonsRequest("dolorem") {{
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
                        gcsFuseCsiDriverConfig = new GcsFuseCsiDriverConfig() {{
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
                        istioConfig = new IstioConfig() {{
                            auth = IstioConfigAuthEnum.AUTH_MUTUAL_TLS;
                            disabled = false;
                        }};;
                        kalmConfig = new KalmConfig() {{
                            enabled = false;
                        }};;
                        kubernetesDashboard = new KubernetesDashboard() {{
                            disabled = false;
                        }};;
                        networkPolicyConfig = new NetworkPolicyConfig() {{
                            disabled = false;
                        }};;
                    }};;
                    clusterId = "ratione";
                    name = "Mr. Santiago Stoltenberg IV";
                    projectId = "natus";
                    zone = "occaecati";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "magni";
                key = "doloribus";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "ipsa";
                uploadProtocol = "tempora";
            }};            

            ContainerProjectsLocationsClustersSetAddonsResponse res = sdk.projects.containerProjectsLocationsClustersSetAddons(req, new ContainerProjectsLocationsClustersSetAddonsSecurity("nihil", "molestiae") {{
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

            ContainerProjectsLocationsClustersSetLegacyAbacRequest req = new ContainerProjectsLocationsClustersSetLegacyAbacRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                setLegacyAbacRequest = new SetLegacyAbacRequest() {{
                    clusterId = "esse";
                    enabled = false;
                    name = "Emilio Wisoky PhD";
                    projectId = "doloremque";
                    zone = "dicta";
                }};;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "ex";
                key = "consectetur";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "laborum";
                uploadProtocol = "sunt";
            }};            

            ContainerProjectsLocationsClustersSetLegacyAbacResponse res = sdk.projects.containerProjectsLocationsClustersSetLegacyAbac(req, new ContainerProjectsLocationsClustersSetLegacyAbacSecurity("nostrum", "fugiat") {{
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

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.

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

            ContainerProjectsLocationsClustersSetLocationsRequest req = new ContainerProjectsLocationsClustersSetLocationsRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                setLocationsRequest = new SetLocationsRequest() {{
                    clusterId = "officia";
                    locations = new String[]{{
                        add("aliquid"),
                        add("perferendis"),
                    }};
                    name = "Melanie Morar V";
                    projectId = "possimus";
                    zone = "voluptates";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "ad";
                key = "deleniti";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "repellendus";
                uploadProtocol = "ex";
            }};            

            ContainerProjectsLocationsClustersSetLocationsResponse res = sdk.projects.containerProjectsLocationsClustersSetLocations(req, new ContainerProjectsLocationsClustersSetLocationsSecurity("quo", "ex") {{
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

            ContainerProjectsLocationsClustersSetLoggingRequest req = new ContainerProjectsLocationsClustersSetLoggingRequest("ut") {{
                dollarXgafv = XgafvEnum.ONE;
                setLoggingServiceRequest = new SetLoggingServiceRequest() {{
                    clusterId = "expedita";
                    loggingService = "voluptatem";
                    name = "Ms. Jonathon Jacobs";
                    projectId = "veritatis";
                    zone = "rerum";
                }};;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "sapiente";
                key = "officiis";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "pariatur";
                uploadProtocol = "debitis";
            }};            

            ContainerProjectsLocationsClustersSetLoggingResponse res = sdk.projects.containerProjectsLocationsClustersSetLogging(req, new ContainerProjectsLocationsClustersSetLoggingSecurity("voluptatem", "alias") {{
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

            ContainerProjectsLocationsClustersSetMaintenancePolicyRequest req = new ContainerProjectsLocationsClustersSetMaintenancePolicyRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                setMaintenancePolicyRequest = new SetMaintenancePolicyRequest() {{
                    clusterId = "ex";
                    maintenancePolicy = new MaintenancePolicy() {{
                        resourceVersion = "sapiente";
                        window = new MaintenanceWindow() {{
                            dailyMaintenanceWindow = new DailyMaintenanceWindow() {{
                                duration = "rem";
                                startTime = "minus";
                            }};;
                            maintenanceExclusions = new java.util.HashMap<String, org.openapis.openapi.models.shared.TimeWindow>() {{
                                put("asperiores", new TimeWindow() {{
                                    endTime = "ratione";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_UPGRADES;
                                    }};
                                    startTime = "perferendis";
                                }});
                                put("illum", new TimeWindow() {{
                                    endTime = "totam";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_OR_NODE_UPGRADES;
                                    }};
                                    startTime = "quibusdam";
                                }});
                            }};
                            recurringWindow = new RecurringTimeWindow() {{
                                recurrence = "nam";
                                window = new TimeWindow() {{
                                    endTime = "ipsam";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_UPGRADES;
                                    }};;
                                    startTime = "dolor";
                                }};;
                            }};;
                        }};;
                    }};;
                    name = "Mrs. Stephanie Lind";
                    projectId = "consequatur";
                    zone = "architecto";
                }};;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "ab";
                key = "laudantium";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "fugiat";
                uploadProtocol = "ipsam";
            }};            

            ContainerProjectsLocationsClustersSetMaintenancePolicyResponse res = sdk.projects.containerProjectsLocationsClustersSetMaintenancePolicy(req, new ContainerProjectsLocationsClustersSetMaintenancePolicySecurity("consequuntur", "ipsa") {{
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

            ContainerProjectsLocationsClustersSetMasterAuthRequest req = new ContainerProjectsLocationsClustersSetMasterAuthRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                setMasterAuthRequest = new SetMasterAuthRequest() {{
                    action = SetMasterAuthRequestActionEnum.SET_USERNAME;
                    clusterId = "officiis";
                    name = "Jana Cremin";
                    projectId = "expedita";
                    update = new MasterAuth() {{
                        clientCertificate = "eum";
                        clientCertificateConfig = new ClientCertificateConfig() {{
                            issueClientCertificate = false;
                        }};;
                        clientKey = "vel";
                        clusterCaCertificate = "voluptatum";
                        password = "magnam";
                        username = "Fay.Bernier75";
                    }};;
                    zone = "laboriosam";
                }};;
                accessToken = "recusandae";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                fields = "exercitationem";
                key = "necessitatibus";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "at";
                uploadProtocol = "vero";
            }};            

            ContainerProjectsLocationsClustersSetMasterAuthResponse res = sdk.projects.containerProjectsLocationsClustersSetMasterAuth(req, new ContainerProjectsLocationsClustersSetMasterAuthSecurity("est", "harum") {{
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

            ContainerProjectsLocationsClustersSetMonitoringRequest req = new ContainerProjectsLocationsClustersSetMonitoringRequest("sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                setMonitoringServiceRequest = new SetMonitoringServiceRequest() {{
                    clusterId = "repudiandae";
                    monitoringService = "optio";
                    name = "Herman Klocko";
                    projectId = "voluptas";
                    zone = "numquam";
                }};;
                accessToken = "nemo";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "aspernatur";
                key = "ducimus";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "laudantium";
                uploadProtocol = "incidunt";
            }};            

            ContainerProjectsLocationsClustersSetMonitoringResponse res = sdk.projects.containerProjectsLocationsClustersSetMonitoring(req, new ContainerProjectsLocationsClustersSetMonitoringSecurity("quasi", "rem") {{
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

            ContainerProjectsLocationsClustersSetNetworkPolicyRequest req = new ContainerProjectsLocationsClustersSetNetworkPolicyRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                setNetworkPolicyRequest = new SetNetworkPolicyRequest() {{
                    clusterId = "nisi";
                    name = "Edith Beahan";
                    networkPolicy = new NetworkPolicy() {{
                        enabled = false;
                        provider = NetworkPolicyProviderEnum.CALICO;
                    }};;
                    projectId = "alias";
                    zone = "omnis";
                }};;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "magni";
                key = "inventore";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "voluptatibus";
                uploadProtocol = "distinctio";
            }};            

            ContainerProjectsLocationsClustersSetNetworkPolicyResponse res = sdk.projects.containerProjectsLocationsClustersSetNetworkPolicy(req, new ContainerProjectsLocationsClustersSetNetworkPolicySecurity("omnis", "delectus") {{
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

            ContainerProjectsLocationsClustersSetResourceLabelsRequest req = new ContainerProjectsLocationsClustersSetResourceLabelsRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                setLabelsRequest = new SetLabelsRequest() {{
                    clusterId = "maxime";
                    labelFingerprint = "magnam";
                    name = "Byron Johns";
                    projectId = "totam";
                    resourceLabels = new java.util.HashMap<String, String>() {{
                        put("modi", "nam");
                        put("vero", "voluptatem");
                        put("ipsam", "vel");
                        put("alias", "quasi");
                    }};
                    zone = "non";
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "nulla";
                key = "deserunt";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "reprehenderit";
                uploadProtocol = "est";
            }};            

            ContainerProjectsLocationsClustersSetResourceLabelsResponse res = sdk.projects.containerProjectsLocationsClustersSetResourceLabels(req, new ContainerProjectsLocationsClustersSetResourceLabelsSecurity("quis", "sint") {{
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

            ContainerProjectsLocationsClustersStartIpRotationRequest req = new ContainerProjectsLocationsClustersStartIpRotationRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                startIPRotationRequest = new StartIPRotationRequest() {{
                    clusterId = "hic";
                    name = "Emmett Jakubowski";
                    projectId = "delectus";
                    rotateCredentials = false;
                    zone = "quae";
                }};;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "consectetur";
                key = "velit";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "impedit";
                uploadProtocol = "magni";
            }};            

            ContainerProjectsLocationsClustersStartIpRotationResponse res = sdk.projects.containerProjectsLocationsClustersStartIpRotation(req, new ContainerProjectsLocationsClustersStartIpRotationSecurity("soluta", "repudiandae") {{
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

            ContainerProjectsLocationsClustersUpdateMasterRequest req = new ContainerProjectsLocationsClustersUpdateMasterRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                updateMasterRequest = new UpdateMasterRequest() {{
                    clusterId = "iusto";
                    masterVersion = "voluptate";
                    name = "Stella DuBuque";
                    projectId = "quibusdam";
                    zone = "iure";
                }};;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "magnam";
                key = "quibusdam";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "libero";
                uploadProtocol = "architecto";
            }};            

            ContainerProjectsLocationsClustersUpdateMasterResponse res = sdk.projects.containerProjectsLocationsClustersUpdateMaster(req, new ContainerProjectsLocationsClustersUpdateMasterSecurity("voluptatibus", "quia") {{
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

            ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest req = new ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.JSON;
                callback = "accusantium";
                fields = "vel";
                key = "ea";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "excepturi";
                uploadProtocol = "eum";
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

            ContainerProjectsLocationsGetServerConfigRequest req = new ContainerProjectsLocationsGetServerConfigRequest("velit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "impedit";
                key = "voluptatibus";
                oauthToken = "iste";
                prettyPrint = false;
                projectId = "itaque";
                quotaUser = "alias";
                uploadType = "nisi";
                uploadProtocol = "itaque";
                zone = "velit";
            }};            

            ContainerProjectsLocationsGetServerConfigResponse res = sdk.projects.containerProjectsLocationsGetServerConfig(req, new ContainerProjectsLocationsGetServerConfigSecurity("laborum", "non") {{
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

## containerProjectsLocationsList

Fetches locations that offer Google Kubernetes Engine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ContainerProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsLocationsListRequest req = new ContainerProjectsLocationsListRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "officia";
                key = "recusandae";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "voluptas";
                uploadProtocol = "facilis";
            }};            

            ContainerProjectsLocationsListResponse res = sdk.projects.containerProjectsLocationsList(req, new ContainerProjectsLocationsListSecurity("placeat", "perspiciatis") {{
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

            ContainerProjectsLocationsOperationsCancelRequest req = new ContainerProjectsLocationsOperationsCancelRequest("expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                cancelOperationRequest = new CancelOperationRequest() {{
                    name = "Karl Herman";
                    operationId = "animi";
                    projectId = "impedit";
                    zone = "ipsam";
                }};;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "error";
                fields = "esse";
                key = "labore";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "consectetur";
                uploadProtocol = "vitae";
            }};            

            ContainerProjectsLocationsOperationsCancelResponse res = sdk.projects.containerProjectsLocationsOperationsCancel(req, new ContainerProjectsLocationsOperationsCancelSecurity("inventore", "dolorem") {{
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

            ContainerProjectsLocationsOperationsGetRequest req = new ContainerProjectsLocationsOperationsGetRequest("ad") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "soluta";
                key = "libero";
                oauthToken = "rem";
                operationId = "dolorum";
                prettyPrint = false;
                projectId = "odio";
                quotaUser = "fugit";
                uploadType = "alias";
                uploadProtocol = "magni";
                zone = "vel";
            }};            

            ContainerProjectsLocationsOperationsGetResponse res = sdk.projects.containerProjectsLocationsOperationsGet(req, new ContainerProjectsLocationsOperationsGetSecurity("quae", "quae") {{
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

Lists all operations in a project in the specified zone or all zones.

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

            ContainerProjectsLocationsOperationsListRequest req = new ContainerProjectsLocationsOperationsListRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "et";
                fields = "ipsum";
                key = "unde";
                oauthToken = "nulla";
                prettyPrint = false;
                projectId = "distinctio";
                quotaUser = "maxime";
                uploadType = "quia";
                uploadProtocol = "quia";
                zone = "nostrum";
            }};            

            ContainerProjectsLocationsOperationsListResponse res = sdk.projects.containerProjectsLocationsOperationsList(req, new ContainerProjectsLocationsOperationsListSecurity("omnis", "libero") {{
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
import org.openapis.openapi.models.shared.GcsFuseCsiDriverConfig;
import org.openapis.openapi.models.shared.GkeBackupAgentConfig;
import org.openapis.openapi.models.shared.HorizontalPodAutoscaling;
import org.openapis.openapi.models.shared.HttpLoadBalancing;
import org.openapis.openapi.models.shared.IstioConfig;
import org.openapis.openapi.models.shared.IstioConfigAuthEnum;
import org.openapis.openapi.models.shared.KalmConfig;
import org.openapis.openapi.models.shared.KubernetesDashboard;
import org.openapis.openapi.models.shared.NetworkPolicyConfig;
import org.openapis.openapi.models.shared.SetAddonsConfigRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersAddonsRequest req = new ContainerProjectsZonesClustersAddonsRequest("dicta", "id", "libero") {{
                dollarXgafv = XgafvEnum.TWO;
                setAddonsConfigRequest = new SetAddonsConfigRequest() {{
                    addonsConfig = new AddonsConfig() {{
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
                        gcsFuseCsiDriverConfig = new GcsFuseCsiDriverConfig() {{
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
                        istioConfig = new IstioConfig() {{
                            auth = IstioConfigAuthEnum.AUTH_MUTUAL_TLS;
                            disabled = false;
                        }};;
                        kalmConfig = new KalmConfig() {{
                            enabled = false;
                        }};;
                        kubernetesDashboard = new KubernetesDashboard() {{
                            disabled = false;
                        }};;
                        networkPolicyConfig = new NetworkPolicyConfig() {{
                            disabled = false;
                        }};;
                    }};;
                    clusterId = "placeat";
                    name = "Marlene Beer Jr.";
                    projectId = "totam";
                    zone = "dolore";
                }};;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "autem";
                key = "esse";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "beatae";
                uploadProtocol = "est";
            }};            

            ContainerProjectsZonesClustersAddonsResponse res = sdk.projects.containerProjectsZonesClustersAddons(req, new ContainerProjectsZonesClustersAddonsSecurity("facere", "corrupti") {{
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

            ContainerProjectsZonesClustersCompleteIpRotationRequest req = new ContainerProjectsZonesClustersCompleteIpRotationRequest("molestiae", "provident", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                completeIPRotationRequest = new CompleteIPRotationRequest() {{
                    clusterId = "tempore";
                    name = "Angel Jones";
                    projectId = "laudantium";
                    zone = "corporis";
                }};;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "at";
                key = "alias";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "fuga";
                uploadProtocol = "repudiandae";
            }};            

            ContainerProjectsZonesClustersCompleteIpRotationResponse res = sdk.projects.containerProjectsZonesClustersCompleteIpRotation(req, new ContainerProjectsZonesClustersCompleteIpRotationSecurity("accusantium", "expedita") {{
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
import org.openapis.openapi.models.shared.ClusterTelemetry;
import org.openapis.openapi.models.shared.ClusterTelemetryTypeEnum;
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
import org.openapis.openapi.models.shared.EphemeralStorageConfig;
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
import org.openapis.openapi.models.shared.GcsFuseCsiDriverConfig;
import org.openapis.openapi.models.shared.GkeBackupAgentConfig;
import org.openapis.openapi.models.shared.HorizontalPodAutoscaling;
import org.openapis.openapi.models.shared.HttpLoadBalancing;
import org.openapis.openapi.models.shared.IPAllocationPolicyInput;
import org.openapis.openapi.models.shared.IPAllocationPolicyIpv6AccessTypeEnum;
import org.openapis.openapi.models.shared.IPAllocationPolicyStackTypeEnum;
import org.openapis.openapi.models.shared.IdentityServiceConfig;
import org.openapis.openapi.models.shared.IstioConfig;
import org.openapis.openapi.models.shared.IstioConfigAuthEnum;
import org.openapis.openapi.models.shared.KalmConfig;
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
import org.openapis.openapi.models.shared.NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
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
import org.openapis.openapi.models.shared.PodSecurityPolicyConfig;
import org.openapis.openapi.models.shared.PrivateClusterConfig;
import org.openapis.openapi.models.shared.PrivateClusterMasterGlobalAccessConfig;
import org.openapis.openapi.models.shared.ProtectConfig;
import org.openapis.openapi.models.shared.ProtectConfigWorkloadVulnerabilityModeEnum;
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
import org.openapis.openapi.models.shared.TpuConfig;
import org.openapis.openapi.models.shared.UpdateInfo;
import org.openapis.openapi.models.shared.UpgradeSettings;
import org.openapis.openapi.models.shared.UpgradeSettingsStrategyEnum;
import org.openapis.openapi.models.shared.VerticalPodAutoscaling;
import org.openapis.openapi.models.shared.VirtualNIC;
import org.openapis.openapi.models.shared.WindowsNodeConfig;
import org.openapis.openapi.models.shared.WindowsNodeConfigOsVersionEnum;
import org.openapis.openapi.models.shared.WorkloadALTSConfig;
import org.openapis.openapi.models.shared.WorkloadCertificates;
import org.openapis.openapi.models.shared.WorkloadConfig;
import org.openapis.openapi.models.shared.WorkloadConfigAuditModeEnum;
import org.openapis.openapi.models.shared.WorkloadIdentityConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfig;
import org.openapis.openapi.models.shared.WorkloadMetadataConfigModeEnum;
import org.openapis.openapi.models.shared.WorkloadMetadataConfigNodeMetadataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersCreateRequest req = new ContainerProjectsZonesClustersCreateRequest("officiis", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                createClusterRequestInput = new CreateClusterRequestInput() {{
                    cluster = new ClusterInput() {{
                        addonsConfig = new AddonsConfig() {{
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
                            gcsFuseCsiDriverConfig = new GcsFuseCsiDriverConfig() {{
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
                            istioConfig = new IstioConfig() {{
                                auth = IstioConfigAuthEnum.AUTH_MUTUAL_TLS;
                                disabled = false;
                            }};;
                            kalmConfig = new KalmConfig() {{
                                enabled = false;
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
                            securityGroup = "odit";
                        }};;
                        autopilot = new Autopilot() {{
                            enabled = false;
                        }};;
                        autoscaling = new ClusterAutoscaling() {{
                            autoprovisioningLocations = new String[]{{
                                add("corporis"),
                            }};
                            autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults() {{
                                bootDiskKmsKey = "error";
                                diskSizeGb = 937117;
                                diskType = "adipisci";
                                imageType = "recusandae";
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "similique";
                                        description = "ut";
                                    }};;
                                }};;
                                minCpuPlatform = "quidem";
                                oauthScopes = new String[]{{
                                    add("beatae"),
                                    add("unde"),
                                }};
                                serviceAccount = "molestiae";
                                shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                    enableIntegrityMonitoring = false;
                                    enableSecureBoot = false;
                                }};;
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "delectus";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 585593;
                                            batchPercentage = 1478.01;
                                            batchSoakDuration = "numquam";
                                        }};;
                                    }};;
                                    maxSurge = 256916;
                                    maxUnavailable = 201010;
                                    strategy = UpgradeSettingsStrategyEnum.SURGE;
                                }};;
                            }};;
                            autoscalingProfile = ClusterAutoscalingAutoscalingProfileEnum.OPTIMIZE_UTILIZATION;
                            enableNodeAutoprovisioning = false;
                            resourceLimits = new org.openapis.openapi.models.shared.ResourceLimit[]{{
                                add(new ResourceLimit() {{
                                    maximum = "optio";
                                    minimum = "necessitatibus";
                                    resourceType = "corporis";
                                }}),
                                add(new ResourceLimit() {{
                                    maximum = "qui";
                                    minimum = "expedita";
                                    resourceType = "voluptatum";
                                }}),
                            }};
                        }};;
                        binaryAuthorization = new BinaryAuthorization() {{
                            enabled = false;
                            evaluationMode = BinaryAuthorizationEvaluationModeEnum.DISABLED;
                        }};;
                        clusterIpv4Cidr = "minima";
                        clusterTelemetry = new ClusterTelemetry() {{
                            type = ClusterTelemetryTypeEnum.SYSTEM_ONLY;
                        }};;
                        conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.INVALID_ARGUMENT;
                                code = StatusConditionCodeEnum.GCE_QUOTA_EXCEEDED;
                                message = "minus";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.PERMISSION_DENIED;
                                code = StatusConditionCodeEnum.GCE_STOCKOUT;
                                message = "corporis";
                            }}),
                        }};
                        confidentialNodes = new ConfidentialNodes() {{
                            enabled = false;
                        }};;
                        costManagementConfig = new CostManagementConfig() {{
                            enabled = false;
                        }};;
                        createTime = "magnam";
                        currentMasterVersion = "voluptates";
                        currentNodeCount = 978173;
                        currentNodeVersion = "tempore";
                        databaseEncryption = new DatabaseEncryption() {{
                            keyName = "aperiam";
                            state = DatabaseEncryptionStateEnum.DECRYPTED;
                        }};;
                        defaultMaxPodsConstraint = new MaxPodsConstraint() {{
                            maxPodsPerNode = "ratione";
                        }};;
                        description = "labore";
                        enableKubernetesAlpha = false;
                        enableTpu = false;
                        endpoint = "totam";
                        etag = "occaecati";
                        expireTime = "voluptas";
                        fleet = new Fleet() {{
                            membership = "quo";
                            preRegistered = false;
                            project = "velit";
                        }};;
                        identityServiceConfig = new IdentityServiceConfig() {{
                            enabled = false;
                        }};;
                        initialClusterVersion = "minus";
                        initialNodeCount = 684553;
                        instanceGroupUrls = new String[]{{
                            add("est"),
                            add("impedit"),
                        }};
                        ipAllocationPolicy = new IPAllocationPolicyInput() {{
                            additionalPodRangesConfig = new AdditionalPodRangesConfig() {{
                                podRangeNames = new String[]{{
                                    add("tempore"),
                                    add("vero"),
                                    add("odit"),
                                    add("repellat"),
                                }};
                            }};;
                            allowRouteOverlap = false;
                            clusterIpv4Cidr = "pariatur";
                            clusterIpv4CidrBlock = "nemo";
                            clusterSecondaryRangeName = "reprehenderit";
                            createSubnetwork = false;
                            ipv6AccessType = IPAllocationPolicyIpv6AccessTypeEnum.IPV6_ACCESS_TYPE_UNSPECIFIED;
                            nodeIpv4Cidr = "odio";
                            nodeIpv4CidrBlock = "minima";
                            podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                disable = false;
                            }};;
                            servicesIpv4Cidr = "in";
                            servicesIpv4CidrBlock = "ducimus";
                            servicesSecondaryRangeName = "excepturi";
                            stackType = IPAllocationPolicyStackTypeEnum.STACK_TYPE_UNSPECIFIED;
                            subnetworkName = "error";
                            tpuIpv4CidrBlock = "veritatis";
                            useIpAliases = false;
                            useRoutes = false;
                        }};;
                        labelFingerprint = "ducimus";
                        legacyAbac = new LegacyAbac() {{
                            enabled = false;
                        }};;
                        location = "voluptate";
                        locations = new String[]{{
                            add("itaque"),
                            add("similique"),
                            add("optio"),
                            add("ex"),
                        }};
                        loggingConfig = new LoggingConfig() {{
                            componentConfig = new LoggingComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.LoggingComponentConfigEnableComponentsEnum[]{{
                                    add(LoggingComponentConfigEnableComponentsEnum.WORKLOADS),
                                    add(LoggingComponentConfigEnableComponentsEnum.CONTROLLER_MANAGER),
                                }};
                            }};;
                        }};;
                        loggingService = "placeat";
                        maintenancePolicy = new MaintenancePolicy() {{
                            resourceVersion = "quidem";
                            window = new MaintenanceWindow() {{
                                dailyMaintenanceWindow = new DailyMaintenanceWindow() {{
                                    duration = "exercitationem";
                                    startTime = "quam";
                                }};;
                                maintenanceExclusions = new java.util.HashMap<String, org.openapis.openapi.models.shared.TimeWindow>() {{
                                    put("modi", new TimeWindow() {{
                                        endTime = "ipsa";
                                        maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                            scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_UPGRADES;
                                        }};
                                        startTime = "vero";
                                    }});
                                }};
                                recurringWindow = new RecurringTimeWindow() {{
                                    recurrence = "sequi";
                                    window = new TimeWindow() {{
                                        endTime = "repudiandae";
                                        maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                            scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_OR_NODE_UPGRADES;
                                        }};;
                                        startTime = "dicta";
                                    }};;
                                }};;
                            }};;
                        }};;
                        master = new java.util.HashMap<String, Object>() {{
                            put("veniam", "animi");
                            put("dolores", "nam");
                            put("dicta", "consequuntur");
                            put("necessitatibus", "nobis");
                        }};
                        masterAuth = new MasterAuth() {{
                            clientCertificate = "ipsa";
                            clientCertificateConfig = new ClientCertificateConfig() {{
                                issueClientCertificate = false;
                            }};;
                            clientKey = "ducimus";
                            clusterCaCertificate = "maiores";
                            password = "veritatis";
                            username = "Autumn_Howe56";
                        }};;
                        masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "nemo";
                                    displayName = "aliquam";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "nostrum";
                                    displayName = "doloribus";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "eligendi";
                                    displayName = "sint";
                                }}),
                            }};
                            enabled = false;
                            gcpPublicCidrsAccessEnabled = false;
                        }};;
                        masterIpv4CidrBlock = "enim";
                        meshCertificates = new MeshCertificates() {{
                            enableCertificates = false;
                        }};;
                        monitoringConfig = new MonitoringConfig() {{
                            componentConfig = new MonitoringComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.MonitoringComponentConfigEnableComponentsEnum[]{{
                                    add(MonitoringComponentConfigEnableComponentsEnum.APISERVER),
                                    add(MonitoringComponentConfigEnableComponentsEnum.APISERVER),
                                    add(MonitoringComponentConfigEnableComponentsEnum.APISERVER),
                                    add(MonitoringComponentConfigEnableComponentsEnum.APISERVER),
                                }};
                            }};;
                            managedPrometheusConfig = new ManagedPrometheusConfig() {{
                                enabled = false;
                            }};;
                        }};;
                        monitoringService = "odio";
                        name = "Gwen Braun";
                        network = "assumenda";
                        networkConfig = new NetworkConfig() {{
                            datapathProvider = NetworkConfigDatapathProviderEnum.ADVANCED_DATAPATH;
                            defaultSnatStatus = new DefaultSnatStatus() {{
                                disabled = false;
                            }};;
                            dnsConfig = new DNSConfig() {{
                                clusterDns = DNSConfigClusterDNSEnum.CLOUD_DNS;
                                clusterDnsDomain = "velit";
                                clusterDnsScope = DNSConfigClusterDNSScopeEnum.DNS_SCOPE_UNSPECIFIED;
                            }};;
                            enableIntraNodeVisibility = false;
                            enableL4ilbSubsetting = false;
                            gatewayApiConfig = new GatewayAPIConfig() {{
                                channel = GatewayAPIConfigChannelEnum.CHANNEL_STANDARD;
                            }};;
                            network = "impedit";
                            privateIpv6GoogleAccess = NetworkConfigPrivateIpv6GoogleAccessEnum.PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE;
                            serviceExternalIpsConfig = new ServiceExternalIPsConfig() {{
                                enabled = false;
                            }};;
                            subnetwork = "ipsum";
                        }};;
                        networkPolicy = new NetworkPolicy() {{
                            enabled = false;
                            provider = NetworkPolicyProviderEnum.PROVIDER_UNSPECIFIED;
                        }};;
                        nodeConfig = new NodeConfig() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "deserunt";
                                    acceleratorType = "doloremque";
                                    gpuPartitionSize = "quis";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                        maxSharedClientsPerGpu = "libero";
                                    }};
                                    maxTimeSharedClientsPerGpu = "architecto";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "cupiditate";
                                    acceleratorType = "molestiae";
                                    gpuPartitionSize = "eligendi";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                        maxSharedClientsPerGpu = "non";
                                    }};
                                    maxTimeSharedClientsPerGpu = "magnam";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "itaque";
                                    acceleratorType = "sed";
                                    gpuPartitionSize = "asperiores";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                        maxSharedClientsPerGpu = "consequuntur";
                                    }};
                                    maxTimeSharedClientsPerGpu = "facere";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "laudantium";
                                    acceleratorType = "odit";
                                    gpuPartitionSize = "pariatur";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                        maxSharedClientsPerGpu = "exercitationem";
                                    }};
                                    maxTimeSharedClientsPerGpu = "ab";
                                }}),
                            }};
                            advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                threadsPerCore = "velit";
                            }};;
                            bootDiskKmsKey = "facilis";
                            confidentialNodes = new ConfidentialNodes() {{
                                enabled = false;
                            }};;
                            diskSizeGb = 731065;
                            diskType = "nisi";
                            ephemeralStorageConfig = new EphemeralStorageConfig() {{
                                localSsdCount = 977518;
                            }};;
                            ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                localSsdCount = 310840;
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
                            imageType = "blanditiis";
                            kubeletConfig = new NodeKubeletConfig() {{
                                cpuCfsQuota = false;
                                cpuCfsQuotaPeriod = "distinctio";
                                cpuManagerPolicy = "nisi";
                                podPidsLimit = "quis";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("libero", "minus");
                                put("facere", "facilis");
                            }};
                            linuxNodeConfig = new LinuxNodeConfig() {{
                                cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_UNSPECIFIED;
                                sysctls = new java.util.HashMap<String, String>() {{
                                    put("voluptatibus", "voluptatibus");
                                    put("consequuntur", "debitis");
                                }};
                            }};;
                            localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                localSsdCount = 290841;
                            }};;
                            localSsdCount = 700928;
                            loggingConfig = new NodePoolLoggingConfig() {{
                                variantConfig = new LoggingVariantConfig() {{
                                    variant = LoggingVariantConfigVariantEnum.VARIANT_UNSPECIFIED;
                                }};;
                            }};;
                            machineType = "reprehenderit";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("neque", "iusto");
                                put("est", "rem");
                            }};
                            minCpuPlatform = "eligendi";
                            nodeGroup = "fugiat";
                            oauthScopes = new String[]{{
                                add("officiis"),
                                add("ducimus"),
                                add("dolor"),
                            }};
                            preemptible = false;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.UNSPECIFIED;
                                key = "error";
                                values = new String[]{{
                                    add("vitae"),
                                    add("dignissimos"),
                                    add("esse"),
                                    add("fugiat"),
                                }};
                            }};;
                            resourceLabels = new java.util.HashMap<String, String>() {{
                                put("aspernatur", "enim");
                                put("delectus", "iusto");
                            }};
                            sandboxConfig = new SandboxConfig() {{
                                sandboxType = "dignissimos";
                                type = SandboxConfigTypeEnum.GVISOR;
                            }};;
                            serviceAccount = "illo";
                            shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                            }};;
                            spot = false;
                            tags = new String[]{{
                                add("incidunt"),
                            }};
                            taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_EXECUTE;
                                    key = "tempore";
                                    value = "veniam";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                    key = "reiciendis";
                                    value = "earum";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                    key = "praesentium";
                                    value = "nemo";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_EXECUTE;
                                    key = "quisquam";
                                    value = "sequi";
                                }}),
                            }};
                            windowsNodeConfig = new WindowsNodeConfig() {{
                                osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2019;
                            }};;
                            workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                mode = WorkloadMetadataConfigModeEnum.GCE_METADATA;
                                nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.UNSPECIFIED;
                            }};;
                        }};;
                        nodeIpv4CidrSize = 290248;
                        nodePoolAutoConfig = new NodePoolAutoConfig() {{
                            networkTags = new NetworkTags() {{
                                tags = new String[]{{
                                    add("aliquam"),
                                    add("quisquam"),
                                    add("provident"),
                                    add("laudantium"),
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
                                    maxNodeCount = 136357;
                                    minNodeCount = 723942;
                                    totalMaxNodeCount = 711991;
                                    totalMinNodeCount = 559174;
                                }};
                                conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.UNAVAILABLE;
                                        code = StatusConditionCodeEnum.SET_BY_OPERATOR;
                                        message = "dignissimos";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.ALREADY_EXISTS;
                                        code = StatusConditionCodeEnum.CA_EXPIRING;
                                        message = "similique";
                                    }}),
                                    add(new StatusCondition() {{
                                        canonicalCode = StatusConditionCanonicalCodeEnum.INTERNAL;
                                        code = StatusConditionCodeEnum.GCE_QUOTA_EXCEEDED;
                                        message = "dolorem";
                                    }}),
                                }};
                                config = new NodeConfig() {{
                                    accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "impedit";
                                            acceleratorType = "commodi";
                                            gpuPartitionSize = "aut";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.GPU_SHARING_STRATEGY_UNSPECIFIED;
                                                maxSharedClientsPerGpu = "ad";
                                            }};
                                            maxTimeSharedClientsPerGpu = "quae";
                                        }}),
                                        add(new AcceleratorConfig() {{
                                            acceleratorCount = "amet";
                                            acceleratorType = "illum";
                                            gpuPartitionSize = "praesentium";
                                            gpuSharingConfig = new GPUSharingConfig() {{
                                                gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                                maxSharedClientsPerGpu = "cum";
                                            }};
                                            maxTimeSharedClientsPerGpu = "amet";
                                        }}),
                                    }};
                                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                        threadsPerCore = "quasi";
                                    }};
                                    bootDiskKmsKey = "dicta";
                                    confidentialNodes = new ConfidentialNodes() {{
                                        enabled = false;
                                    }};
                                    diskSizeGb = 514922;
                                    diskType = "doloremque";
                                    ephemeralStorageConfig = new EphemeralStorageConfig() {{
                                        localSsdCount = 938412;
                                    }};
                                    ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                        localSsdCount = 479707;
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
                                    imageType = "amet";
                                    kubeletConfig = new NodeKubeletConfig() {{
                                        cpuCfsQuota = false;
                                        cpuCfsQuotaPeriod = "provident";
                                        cpuManagerPolicy = "dolorum";
                                        podPidsLimit = "necessitatibus";
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("repudiandae", "consequatur");
                                        put("nemo", "molestiae");
                                        put("itaque", "facilis");
                                    }};
                                    linuxNodeConfig = new LinuxNodeConfig() {{
                                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_V1;
                                        sysctls = new java.util.HashMap<String, String>() {{
                                            put("sint", "accusamus");
                                        }};
                                    }};
                                    localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                        localSsdCount = 178635;
                                    }};
                                    localSsdCount = 520081;
                                    loggingConfig = new NodePoolLoggingConfig() {{
                                        variantConfig = new LoggingVariantConfig() {{
                                            variant = LoggingVariantConfigVariantEnum.VARIANT_UNSPECIFIED;
                                        }};
                                    }};
                                    machineType = "voluptatem";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("dolor", "sunt");
                                    }};
                                    minCpuPlatform = "a";
                                    nodeGroup = "dolor";
                                    oauthScopes = new String[]{{
                                        add("atque"),
                                        add("beatae"),
                                        add("at"),
                                    }};
                                    preemptible = false;
                                    reservationAffinity = new ReservationAffinity() {{
                                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                                        key = "minus";
                                        values = new String[]{{
                                            add("voluptatem"),
                                            add("perferendis"),
                                        }};
                                    }};
                                    resourceLabels = new java.util.HashMap<String, String>() {{
                                        put("ea", "aperiam");
                                        put("dignissimos", "repellat");
                                        put("velit", "porro");
                                    }};
                                    sandboxConfig = new SandboxConfig() {{
                                        sandboxType = "provident";
                                        type = SandboxConfigTypeEnum.UNSPECIFIED;
                                    }};
                                    serviceAccount = "eligendi";
                                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                        enableIntegrityMonitoring = false;
                                        enableSecureBoot = false;
                                    }};
                                    spot = false;
                                    tags = new String[]{{
                                        add("consectetur"),
                                        add("soluta"),
                                    }};
                                    taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_EXECUTE;
                                            key = "officia";
                                            value = "amet";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_EXECUTE;
                                            key = "aspernatur";
                                            value = "quo";
                                        }}),
                                        add(new NodeTaint() {{
                                            effect = NodeTaintEffectEnum.NO_EXECUTE;
                                            key = "illum";
                                            value = "laborum";
                                        }}),
                                    }};
                                    windowsNodeConfig = new WindowsNodeConfig() {{
                                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_LTSC2019;
                                    }};
                                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                        mode = WorkloadMetadataConfigModeEnum.GKE_METADATA;
                                        nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.UNSPECIFIED;
                                    }};
                                }};
                                etag = "consectetur";
                                initialNodeCount = 995816;
                                instanceGroupUrls = new String[]{{
                                    add("explicabo"),
                                }};
                                locations = new String[]{{
                                    add("nihil"),
                                    add("non"),
                                }};
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "ab";
                                        description = "illo";
                                    }};
                                }};
                                maxPodsConstraint = new MaxPodsConstraint() {{
                                    maxPodsPerNode = "hic";
                                }};
                                name = "Toby Friesen";
                                networkConfig = new NodeNetworkConfig() {{
                                    createPodRange = false;
                                    enablePrivateNodes = false;
                                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                        externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                                    }};
                                    podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                        disable = false;
                                    }};
                                    podIpv4CidrBlock = "numquam";
                                    podRange = "repudiandae";
                                }};
                                placementPolicy = new PlacementPolicy() {{
                                    type = PlacementPolicyTypeEnum.TYPE_UNSPECIFIED;
                                }};
                                podIpv4CidrSize = 450209;
                                selfLink = "explicabo";
                                status = NodePoolStatusEnum.ERROR;
                                statusMessage = "rem";
                                updateInfo = new UpdateInfo() {{
                                    blueGreenInfo = new BlueGreenInfo() {{
                                        blueInstanceGroupUrls = new String[]{{
                                            add("odit"),
                                        }};
                                        bluePoolDeletionStartTime = "deleniti";
                                        greenInstanceGroupUrls = new String[]{{
                                            add("voluptate"),
                                            add("similique"),
                                        }};
                                        greenPoolVersion = "minima";
                                        phase = BlueGreenInfoPhaseEnum.NODE_POOL_SOAKING;
                                    }};
                                }};
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "magnam";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 24272;
                                            batchPercentage = 2667.88;
                                            batchSoakDuration = "eum";
                                        }};
                                    }};
                                    maxSurge = 199529;
                                    maxUnavailable = 652125;
                                    strategy = UpgradeSettingsStrategyEnum.BLUE_GREEN;
                                }};
                                version = "fugiat";
                            }}),
                        }};
                        notificationConfig = new NotificationConfig() {{
                            pubsub = new PubSub() {{
                                enabled = false;
                                filter = new Filter() {{
                                    eventType = new org.openapis.openapi.models.shared.FilterEventTypeEnum[]{{
                                        add(FilterEventTypeEnum.UPGRADE_AVAILABLE_EVENT),
                                        add(FilterEventTypeEnum.UPGRADE_AVAILABLE_EVENT),
                                    }};
                                }};;
                                topic = "reiciendis";
                            }};;
                        }};;
                        podSecurityPolicyConfig = new PodSecurityPolicyConfig() {{
                            enabled = false;
                        }};;
                        privateCluster = false;
                        privateClusterConfig = new PrivateClusterConfig() {{
                            enablePrivateEndpoint = false;
                            enablePrivateNodes = false;
                            masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig() {{
                                enabled = false;
                            }};;
                            masterIpv4CidrBlock = "ab";
                            peeringName = "modi";
                            privateEndpoint = "aut";
                            privateEndpointSubnetwork = "aut";
                            publicEndpoint = "eveniet";
                        }};;
                        protectConfig = new ProtectConfig() {{
                            workloadConfig = new WorkloadConfig() {{
                                auditMode = WorkloadConfigAuditModeEnum.BASIC;
                            }};;
                            workloadVulnerabilityMode = ProtectConfigWorkloadVulnerabilityModeEnum.DISABLED;
                        }};;
                        releaseChannel = new ReleaseChannel() {{
                            channel = ReleaseChannelChannelEnum.RAPID;
                        }};;
                        resourceLabels = new java.util.HashMap<String, String>() {{
                            put("possimus", "voluptate");
                            put("consectetur", "nesciunt");
                            put("quaerat", "itaque");
                        }};
                        resourceUsageExportConfig = new ResourceUsageExportConfig() {{
                            bigqueryDestination = new BigQueryDestination() {{
                                datasetId = "minus";
                            }};;
                            consumptionMeteringConfig = new ConsumptionMeteringConfig() {{
                                enabled = false;
                            }};;
                            enableNetworkEgressMetering = false;
                        }};;
                        selfLink = "sunt";
                        servicesIpv4Cidr = "distinctio";
                        shieldedNodes = new ShieldedNodes() {{
                            enabled = false;
                        }};;
                        status = ClusterStatusEnum.RECONCILING;
                        statusMessage = "quas";
                        subnetwork = "et";
                        tpuConfig = new TpuConfig() {{
                            enabled = false;
                            ipv4CidrBlock = "facilis";
                            useServiceNetworking = false;
                        }};;
                        tpuIpv4CidrBlock = "amet";
                        verticalPodAutoscaling = new VerticalPodAutoscaling() {{
                            enabled = false;
                        }};;
                        workloadAltsConfig = new WorkloadALTSConfig() {{
                            enableAlts = false;
                        }};;
                        workloadCertificates = new WorkloadCertificates() {{
                            enableCertificates = false;
                        }};;
                        workloadIdentityConfig = new WorkloadIdentityConfig() {{
                            identityNamespace = "autem";
                            identityProvider = "fuga";
                            workloadPool = "alias";
                        }};;
                        zone = "rem";
                    }};;
                    parent = "aut";
                    projectId = "quos";
                    zone = "laudantium";
                }};;
                accessToken = "repellendus";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "eaque";
                key = "saepe";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "nulla";
                uploadProtocol = "officia";
            }};            

            ContainerProjectsZonesClustersCreateResponse res = sdk.projects.containerProjectsZonesClustersCreate(req, new ContainerProjectsZonesClustersCreateSecurity("sed", "voluptatem") {{
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

            ContainerProjectsZonesClustersDeleteRequest req = new ContainerProjectsZonesClustersDeleteRequest("alias", "eveniet", "hic") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "necessitatibus";
                key = "harum";
                name = "Doris Jacobi";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "officia";
                uploadProtocol = "libero";
            }};            

            ContainerProjectsZonesClustersDeleteResponse res = sdk.projects.containerProjectsZonesClustersDelete(req, new ContainerProjectsZonesClustersDeleteSecurity("totam", "sequi") {{
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

Gets the details for a specific cluster.

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

            ContainerProjectsZonesClustersGetRequest req = new ContainerProjectsZonesClustersGetRequest("aliquid", "ea", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odit";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "repellat";
                key = "nulla";
                name = "Mrs. Luther Torp";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "non";
                uploadProtocol = "rem";
            }};            

            ContainerProjectsZonesClustersGetResponse res = sdk.projects.containerProjectsZonesClustersGet(req, new ContainerProjectsZonesClustersGetSecurity("quia", "ullam") {{
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

            ContainerProjectsZonesClustersLegacyAbacRequest req = new ContainerProjectsZonesClustersLegacyAbacRequest("quisquam", "dicta", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                setLegacyAbacRequest = new SetLegacyAbacRequest() {{
                    clusterId = "quae";
                    enabled = false;
                    name = "Joe Bradtke";
                    projectId = "rem";
                    zone = "perferendis";
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "iste";
                key = "dicta";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "dolore";
                uploadProtocol = "modi";
            }};            

            ContainerProjectsZonesClustersLegacyAbacResponse res = sdk.projects.containerProjectsZonesClustersLegacyAbac(req, new ContainerProjectsZonesClustersLegacyAbacSecurity("itaque", "maxime") {{
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

            ContainerProjectsZonesClustersListRequest req = new ContainerProjectsZonesClustersListRequest("modi", "consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "porro";
                key = "accusamus";
                oauthToken = "totam";
                parent = "reiciendis";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "sint";
                uploadProtocol = "nihil";
            }};            

            ContainerProjectsZonesClustersListResponse res = sdk.projects.containerProjectsZonesClustersList(req, new ContainerProjectsZonesClustersListSecurity("esse", "iure") {{
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

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.

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

            ContainerProjectsZonesClustersLocationsRequest req = new ContainerProjectsZonesClustersLocationsRequest("odio", "nesciunt", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                setLocationsRequest = new SetLocationsRequest() {{
                    clusterId = "neque";
                    locations = new String[]{{
                        add("voluptas"),
                        add("consequuntur"),
                    }};
                    name = "Ron Rau IV";
                    projectId = "maiores";
                    zone = "accusantium";
                }};;
                accessToken = "veniam";
                alt = AltEnum.PROTO;
                callback = "neque";
                fields = "facere";
                key = "aliquam";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "fugiat";
                uploadProtocol = "est";
            }};            

            ContainerProjectsZonesClustersLocationsResponse res = sdk.projects.containerProjectsZonesClustersLocations(req, new ContainerProjectsZonesClustersLocationsSecurity("delectus", "velit") {{
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

            ContainerProjectsZonesClustersLoggingRequest req = new ContainerProjectsZonesClustersLoggingRequest("vitae", "nesciunt", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                setLoggingServiceRequest = new SetLoggingServiceRequest() {{
                    clusterId = "repellat";
                    loggingService = "nemo";
                    name = "Woodrow Mitchell III";
                    projectId = "cupiditate";
                    zone = "optio";
                }};;
                accessToken = "alias";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "commodi";
                key = "sapiente";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "debitis";
                uploadProtocol = "officia";
            }};            

            ContainerProjectsZonesClustersLoggingResponse res = sdk.projects.containerProjectsZonesClustersLogging(req, new ContainerProjectsZonesClustersLoggingSecurity("sint", "ut") {{
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

            ContainerProjectsZonesClustersMasterRequest req = new ContainerProjectsZonesClustersMasterRequest("numquam", "tenetur", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                updateMasterRequest = new UpdateMasterRequest() {{
                    clusterId = "in";
                    masterVersion = "minima";
                    name = "Dr. Alexandra Bernhard";
                    projectId = "quisquam";
                    zone = "dolor";
                }};;
                accessToken = "ducimus";
                alt = AltEnum.PROTO;
                callback = "minima";
                fields = "architecto";
                key = "qui";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "incidunt";
                uploadProtocol = "adipisci";
            }};            

            ContainerProjectsZonesClustersMasterResponse res = sdk.projects.containerProjectsZonesClustersMaster(req, new ContainerProjectsZonesClustersMasterSecurity("praesentium", "dolor") {{
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

            ContainerProjectsZonesClustersMonitoringRequest req = new ContainerProjectsZonesClustersMonitoringRequest("exercitationem", "expedita", "facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                setMonitoringServiceRequest = new SetMonitoringServiceRequest() {{
                    clusterId = "sit";
                    monitoringService = "nemo";
                    name = "Eugene Feeney";
                    projectId = "veniam";
                    zone = "quod";
                }};;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "quisquam";
                fields = "enim";
                key = "doloribus";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "architecto";
                uploadProtocol = "alias";
            }};            

            ContainerProjectsZonesClustersMonitoringResponse res = sdk.projects.containerProjectsZonesClustersMonitoring(req, new ContainerProjectsZonesClustersMonitoringSecurity("culpa", "ipsa") {{
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

Sets the autoscaling settings of a specific node pool.

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

            ContainerProjectsZonesClustersNodePoolsAutoscalingRequest req = new ContainerProjectsZonesClustersNodePoolsAutoscalingRequest("nobis", "necessitatibus", "quia", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                setNodePoolAutoscalingRequest = new SetNodePoolAutoscalingRequest() {{
                    autoscaling = new NodePoolAutoscaling() {{
                        autoprovisioned = false;
                        enabled = false;
                        locationPolicy = NodePoolAutoscalingLocationPolicyEnum.BALANCED;
                        maxNodeCount = 892708;
                        minNodeCount = 354821;
                        totalMaxNodeCount = 103578;
                        totalMinNodeCount = 33771;
                    }};;
                    clusterId = "perferendis";
                    name = "Ramona Runolfsson";
                    nodePoolId = "quod";
                    projectId = "nemo";
                    zone = "recusandae";
                }};;
                accessToken = "velit";
                alt = AltEnum.JSON;
                callback = "dignissimos";
                fields = "laboriosam";
                key = "sed";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "provident";
                uploadProtocol = "cum";
            }};            

            ContainerProjectsZonesClustersNodePoolsAutoscalingResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsAutoscaling(req, new ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity("doloribus", "facilis") {{
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
import org.openapis.openapi.models.shared.EphemeralStorageConfig;
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
import org.openapis.openapi.models.shared.NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
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
import org.openapis.openapi.models.shared.WorkloadMetadataConfigNodeMetadataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsCreateRequest req = new ContainerProjectsZonesClustersNodePoolsCreateRequest("quidem", "itaque", "laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                createNodePoolRequest = new CreateNodePoolRequest() {{
                    clusterId = "modi";
                    nodePool = new NodePool() {{
                        autoscaling = new NodePoolAutoscaling() {{
                            autoprovisioned = false;
                            enabled = false;
                            locationPolicy = NodePoolAutoscalingLocationPolicyEnum.BALANCED;
                            maxNodeCount = 944626;
                            minNodeCount = 736985;
                            totalMaxNodeCount = 135548;
                            totalMinNodeCount = 725784;
                        }};;
                        conditions = new org.openapis.openapi.models.shared.StatusCondition[]{{
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.DEADLINE_EXCEEDED;
                                code = StatusConditionCodeEnum.CA_EXPIRING;
                                message = "quod";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.ABORTED;
                                code = StatusConditionCodeEnum.CA_EXPIRING;
                                message = "autem";
                            }}),
                            add(new StatusCondition() {{
                                canonicalCode = StatusConditionCanonicalCodeEnum.UNIMPLEMENTED;
                                code = StatusConditionCodeEnum.GCE_STOCKOUT;
                                message = "illum";
                            }}),
                        }};
                        config = new NodeConfig() {{
                            accelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "illum";
                                    acceleratorType = "facilis";
                                    gpuPartitionSize = "non";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                        maxSharedClientsPerGpu = "assumenda";
                                    }};
                                    maxTimeSharedClientsPerGpu = "recusandae";
                                }}),
                                add(new AcceleratorConfig() {{
                                    acceleratorCount = "distinctio";
                                    acceleratorType = "pariatur";
                                    gpuPartitionSize = "ad";
                                    gpuSharingConfig = new GPUSharingConfig() {{
                                        gpuSharingStrategy = GPUSharingConfigGPUSharingStrategyEnum.TIME_SHARING;
                                        maxSharedClientsPerGpu = "laborum";
                                    }};
                                    maxTimeSharedClientsPerGpu = "eveniet";
                                }}),
                            }};
                            advancedMachineFeatures = new AdvancedMachineFeatures() {{
                                threadsPerCore = "laborum";
                            }};;
                            bootDiskKmsKey = "incidunt";
                            confidentialNodes = new ConfidentialNodes() {{
                                enabled = false;
                            }};;
                            diskSizeGb = 802356;
                            diskType = "ipsam";
                            ephemeralStorageConfig = new EphemeralStorageConfig() {{
                                localSsdCount = 60;
                            }};;
                            ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig() {{
                                localSsdCount = 379894;
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
                            imageType = "deserunt";
                            kubeletConfig = new NodeKubeletConfig() {{
                                cpuCfsQuota = false;
                                cpuCfsQuotaPeriod = "molestias";
                                cpuManagerPolicy = "laborum";
                                podPidsLimit = "est";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("labore", "quo");
                                put("perferendis", "fugit");
                                put("aliquid", "magnam");
                            }};
                            linuxNodeConfig = new LinuxNodeConfig() {{
                                cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_UNSPECIFIED;
                                sysctls = new java.util.HashMap<String, String>() {{
                                    put("hic", "nostrum");
                                    put("officiis", "unde");
                                    put("nulla", "error");
                                    put("mollitia", "magnam");
                                }};
                            }};;
                            localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig() {{
                                localSsdCount = 344289;
                            }};;
                            localSsdCount = 460909;
                            loggingConfig = new NodePoolLoggingConfig() {{
                                variantConfig = new LoggingVariantConfig() {{
                                    variant = LoggingVariantConfigVariantEnum.DEFAULT_;
                                }};;
                            }};;
                            machineType = "fuga";
                            metadata = new java.util.HashMap<String, String>() {{
                                put("impedit", "quasi");
                                put("deserunt", "quod");
                                put("laboriosam", "doloremque");
                                put("voluptatem", "facere");
                            }};
                            minCpuPlatform = "necessitatibus";
                            nodeGroup = "maxime";
                            oauthScopes = new String[]{{
                                add("eaque"),
                            }};
                            preemptible = false;
                            reservationAffinity = new ReservationAffinity() {{
                                consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.UNSPECIFIED;
                                key = "similique";
                                values = new String[]{{
                                    add("blanditiis"),
                                    add("quae"),
                                    add("magni"),
                                    add("officiis"),
                                }};
                            }};;
                            resourceLabels = new java.util.HashMap<String, String>() {{
                                put("necessitatibus", "impedit");
                            }};
                            sandboxConfig = new SandboxConfig() {{
                                sandboxType = "ipsa";
                                type = SandboxConfigTypeEnum.GVISOR;
                            }};;
                            serviceAccount = "a";
                            shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                enableIntegrityMonitoring = false;
                                enableSecureBoot = false;
                            }};;
                            spot = false;
                            tags = new String[]{{
                                add("laudantium"),
                                add("maiores"),
                                add("alias"),
                                add("asperiores"),
                            }};
                            taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.EFFECT_UNSPECIFIED;
                                    key = "suscipit";
                                    value = "earum";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_EXECUTE;
                                    key = "velit";
                                    value = "eius";
                                }}),
                                add(new NodeTaint() {{
                                    effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                    key = "in";
                                    value = "eligendi";
                                }}),
                            }};
                            windowsNodeConfig = new WindowsNodeConfig() {{
                                osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_UNSPECIFIED;
                            }};;
                            workloadMetadataConfig = new WorkloadMetadataConfig() {{
                                mode = WorkloadMetadataConfigModeEnum.MODE_UNSPECIFIED;
                                nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.GKE_METADATA_SERVER;
                            }};;
                        }};;
                        etag = "excepturi";
                        initialNodeCount = 37534;
                        instanceGroupUrls = new String[]{{
                            add("impedit"),
                        }};
                        locations = new String[]{{
                            add("incidunt"),
                        }};
                        management = new NodeManagement() {{
                            autoRepair = false;
                            autoUpgrade = false;
                            upgradeOptions = new AutoUpgradeOptions() {{
                                autoUpgradeStartTime = "dicta";
                                description = "odit";
                            }};;
                        }};;
                        maxPodsConstraint = new MaxPodsConstraint() {{
                            maxPodsPerNode = "corporis";
                        }};;
                        name = "Robert Muller MD";
                        networkConfig = new NodeNetworkConfig() {{
                            createPodRange = false;
                            enablePrivateNodes = false;
                            networkPerformanceConfig = new NetworkPerformanceConfig() {{
                                externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                                totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                            }};;
                            podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                                disable = false;
                            }};;
                            podIpv4CidrBlock = "quas";
                            podRange = "veritatis";
                        }};;
                        placementPolicy = new PlacementPolicy() {{
                            type = PlacementPolicyTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        podIpv4CidrSize = 62688;
                        selfLink = "similique";
                        status = NodePoolStatusEnum.PROVISIONING;
                        statusMessage = "quam";
                        updateInfo = new UpdateInfo() {{
                            blueGreenInfo = new BlueGreenInfo() {{
                                blueInstanceGroupUrls = new String[]{{
                                    add("deserunt"),
                                }};
                                bluePoolDeletionStartTime = "delectus";
                                greenInstanceGroupUrls = new String[]{{
                                    add("sed"),
                                    add("nesciunt"),
                                    add("maxime"),
                                }};
                                greenPoolVersion = "quis";
                                phase = BlueGreenInfoPhaseEnum.DRAINING_BLUE_POOL;
                            }};;
                        }};;
                        upgradeSettings = new UpgradeSettings() {{
                            blueGreenSettings = new BlueGreenSettings() {{
                                nodePoolSoakDuration = "aliquam";
                                standardRolloutPolicy = new StandardRolloutPolicy() {{
                                    batchNodeCount = 569287;
                                    batchPercentage = 9804.1;
                                    batchSoakDuration = "laudantium";
                                }};;
                            }};;
                            maxSurge = 243904;
                            maxUnavailable = 971764;
                            strategy = UpgradeSettingsStrategyEnum.NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED;
                        }};;
                        version = "nemo";
                    }};;
                    parent = "ipsa";
                    projectId = "quisquam";
                    zone = "tenetur";
                }};;
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "asperiores";
                key = "a";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "accusantium";
                uploadProtocol = "dicta";
            }};            

            ContainerProjectsZonesClustersNodePoolsCreateResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsCreate(req, new ContainerProjectsZonesClustersNodePoolsCreateSecurity("minus", "commodi") {{
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

            ContainerProjectsZonesClustersNodePoolsDeleteRequest req = new ContainerProjectsZonesClustersNodePoolsDeleteRequest("eveniet", "porro", "tempore", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptates";
                alt = AltEnum.JSON;
                callback = "eius";
                fields = "sequi";
                key = "eligendi";
                name = "Claude Kutch";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "maiores";
                uploadProtocol = "itaque";
            }};            

            ContainerProjectsZonesClustersNodePoolsDeleteResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsDelete(req, new ContainerProjectsZonesClustersNodePoolsDeleteSecurity("nulla", "deserunt") {{
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

            ContainerProjectsZonesClustersNodePoolsGetRequest req = new ContainerProjectsZonesClustersNodePoolsGetRequest("corporis", "velit", "officiis", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "accusantium";
                key = "officia";
                name = "Ryan Kuvalis";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "natus";
                uploadProtocol = "minus";
            }};            

            ContainerProjectsZonesClustersNodePoolsGetResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsGet(req, new ContainerProjectsZonesClustersNodePoolsGetSecurity("quia", "magnam") {{
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

            ContainerProjectsZonesClustersNodePoolsListRequest req = new ContainerProjectsZonesClustersNodePoolsListRequest("reprehenderit", "quod", "quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "amet";
                fields = "laborum";
                key = "modi";
                oauthToken = "perferendis";
                parent = "necessitatibus";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "molestias";
                uploadProtocol = "dolore";
            }};            

            ContainerProjectsZonesClustersNodePoolsListResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsList(req, new ContainerProjectsZonesClustersNodePoolsListSecurity("sunt", "maiores") {{
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

            ContainerProjectsZonesClustersNodePoolsRollbackRequest req = new ContainerProjectsZonesClustersNodePoolsRollbackRequest("neque", "odit", "earum", "veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                rollbackNodePoolUpgradeRequest = new RollbackNodePoolUpgradeRequest() {{
                    clusterId = "eaque";
                    name = "Lynn Kovacek";
                    nodePoolId = "tenetur";
                    projectId = "quis";
                    respectPdb = false;
                    zone = "quibusdam";
                }};;
                accessToken = "nemo";
                alt = AltEnum.MEDIA;
                callback = "pariatur";
                fields = "sit";
                key = "quidem";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "id";
                uploadProtocol = "sapiente";
            }};            

            ContainerProjectsZonesClustersNodePoolsRollbackResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsRollback(req, new ContainerProjectsZonesClustersNodePoolsRollbackSecurity("sed", "possimus") {{
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

            ContainerProjectsZonesClustersNodePoolsSetManagementRequest req = new ContainerProjectsZonesClustersNodePoolsSetManagementRequest("repellat", "repudiandae", "architecto", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                setNodePoolManagementRequest = new SetNodePoolManagementRequest() {{
                    clusterId = "harum";
                    management = new NodeManagement() {{
                        autoRepair = false;
                        autoUpgrade = false;
                        upgradeOptions = new AutoUpgradeOptions() {{
                            autoUpgradeStartTime = "dolore";
                            description = "voluptatibus";
                        }};;
                    }};;
                    name = "Judith Schinner";
                    nodePoolId = "velit";
                    projectId = "earum";
                    zone = "praesentium";
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "mollitia";
                key = "accusamus";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "doloremque";
                uploadProtocol = "expedita";
            }};            

            ContainerProjectsZonesClustersNodePoolsSetManagementResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsSetManagement(req, new ContainerProjectsZonesClustersNodePoolsSetManagementSecurity("corrupti", "eaque") {{
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

SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

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

            ContainerProjectsZonesClustersNodePoolsSetSizeRequest req = new ContainerProjectsZonesClustersNodePoolsSetSizeRequest("deserunt", "aliquid", "excepturi", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                setNodePoolSizeRequest = new SetNodePoolSizeRequest() {{
                    clusterId = "possimus";
                    name = "Susie Cremin";
                    nodeCount = 966576;
                    nodePoolId = "minus";
                    projectId = "quo";
                    zone = "quos";
                }};;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "corporis";
                key = "accusantium";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "doloribus";
                uploadProtocol = "nostrum";
            }};            

            ContainerProjectsZonesClustersNodePoolsSetSizeResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsSetSize(req, new ContainerProjectsZonesClustersNodePoolsSetSizeSecurity("at", "possimus") {{
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

Updates the version and/or image type of a specific node pool.

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
import org.openapis.openapi.models.shared.NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
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
import org.openapis.openapi.models.shared.WorkloadMetadataConfigNodeMetadataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersNodePoolsUpdateRequest req = new ContainerProjectsZonesClustersNodePoolsUpdateRequest("neque", "pariatur", "vel", "sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                updateNodePoolRequest = new UpdateNodePoolRequest() {{
                    clusterId = "quae";
                    confidentialNodes = new ConfidentialNodes() {{
                        enabled = false;
                    }};;
                    etag = "quos";
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
                        cpuCfsQuotaPeriod = "non";
                        cpuManagerPolicy = "voluptates";
                        podPidsLimit = "ad";
                    }};;
                    labels = new NodeLabels() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("quisquam", "quas");
                            put("consequuntur", "maiores");
                        }};
                    }};;
                    linuxNodeConfig = new LinuxNodeConfig() {{
                        cgroupMode = LinuxNodeConfigCgroupModeEnum.CGROUP_MODE_UNSPECIFIED;
                        sysctls = new java.util.HashMap<String, String>() {{
                            put("laudantium", "est");
                            put("dolor", "aliquid");
                        }};
                    }};;
                    locations = new String[]{{
                        add("cumque"),
                    }};
                    loggingConfig = new NodePoolLoggingConfig() {{
                        variantConfig = new LoggingVariantConfig() {{
                            variant = LoggingVariantConfigVariantEnum.DEFAULT_;
                        }};;
                    }};;
                    name = "Allan Ferry";
                    nodeNetworkConfig = new NodeNetworkConfig() {{
                        createPodRange = false;
                        enablePrivateNodes = false;
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER1;
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER_UNSPECIFIED;
                        }};;
                        podCidrOverprovisionConfig = new PodCIDROverprovisionConfig() {{
                            disable = false;
                        }};;
                        podIpv4CidrBlock = "sequi";
                        podRange = "voluptatum";
                    }};;
                    nodePoolId = "sit";
                    nodeVersion = "rerum";
                    projectId = "veritatis";
                    resourceLabels = new ResourceLabels() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("autem", "quidem");
                            put("totam", "porro");
                            put("deserunt", "magni");
                            put("nihil", "voluptas");
                        }};
                    }};;
                    tags = new NetworkTags() {{
                        tags = new String[]{{
                            add("commodi"),
                            add("alias"),
                            add("fuga"),
                        }};
                    }};;
                    taints = new NodeTaints() {{
                        taints = new org.openapis.openapi.models.shared.NodeTaint[]{{
                            add(new NodeTaint() {{
                                effect = NodeTaintEffectEnum.NO_SCHEDULE;
                                key = "maxime";
                                value = "aliquam";
                            }}),
                        }};
                    }};;
                    upgradeSettings = new UpgradeSettings() {{
                        blueGreenSettings = new BlueGreenSettings() {{
                            nodePoolSoakDuration = "iste";
                            standardRolloutPolicy = new StandardRolloutPolicy() {{
                                batchNodeCount = 355889;
                                batchPercentage = 7557.38;
                                batchSoakDuration = "placeat";
                            }};;
                        }};;
                        maxSurge = 378403;
                        maxUnavailable = 577590;
                        strategy = UpgradeSettingsStrategyEnum.BLUE_GREEN;
                    }};;
                    windowsNodeConfig = new WindowsNodeConfig() {{
                        osVersion = WindowsNodeConfigOsVersionEnum.OS_VERSION_UNSPECIFIED;
                    }};;
                    workloadMetadataConfig = new WorkloadMetadataConfig() {{
                        mode = WorkloadMetadataConfigModeEnum.GCE_METADATA;
                        nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum.UNSPECIFIED;
                    }};;
                    zone = "libero";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "dicta";
                key = "harum";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "beatae";
                uploadProtocol = "cumque";
            }};            

            ContainerProjectsZonesClustersNodePoolsUpdateResponse res = sdk.projects.containerProjectsZonesClustersNodePoolsUpdate(req, new ContainerProjectsZonesClustersNodePoolsUpdateSecurity("delectus", "labore") {{
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

            ContainerProjectsZonesClustersResourceLabelsRequest req = new ContainerProjectsZonesClustersResourceLabelsRequest("expedita", "corrupti", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                setLabelsRequest = new SetLabelsRequest() {{
                    clusterId = "officiis";
                    labelFingerprint = "cum";
                    name = "Timmy Ryan";
                    projectId = "minus";
                    resourceLabels = new java.util.HashMap<String, String>() {{
                        put("id", "excepturi");
                        put("occaecati", "libero");
                        put("quo", "esse");
                        put("hic", "maxime");
                    }};
                    zone = "accusantium";
                }};;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "eligendi";
                key = "recusandae";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "laudantium";
                uploadProtocol = "iusto";
            }};            

            ContainerProjectsZonesClustersResourceLabelsResponse res = sdk.projects.containerProjectsZonesClustersResourceLabels(req, new ContainerProjectsZonesClustersResourceLabelsSecurity("dolor", "voluptates") {{
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

            ContainerProjectsZonesClustersSetMaintenancePolicyRequest req = new ContainerProjectsZonesClustersSetMaintenancePolicyRequest("tempora", "magni", "rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                setMaintenancePolicyRequest = new SetMaintenancePolicyRequest() {{
                    clusterId = "voluptatem";
                    maintenancePolicy = new MaintenancePolicy() {{
                        resourceVersion = "eum";
                        window = new MaintenanceWindow() {{
                            dailyMaintenanceWindow = new DailyMaintenanceWindow() {{
                                duration = "at";
                                startTime = "eum";
                            }};;
                            maintenanceExclusions = new java.util.HashMap<String, org.openapis.openapi.models.shared.TimeWindow>() {{
                                put("voluptatum", new TimeWindow() {{
                                    endTime = "blanditiis";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_UPGRADES;
                                    }};
                                    startTime = "atque";
                                }});
                                put("rerum", new TimeWindow() {{
                                    endTime = "deserunt";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_UPGRADES;
                                    }};
                                    startTime = "nostrum";
                                }});
                            }};
                            recurringWindow = new RecurringTimeWindow() {{
                                recurrence = "atque";
                                window = new TimeWindow() {{
                                    endTime = "architecto";
                                    maintenanceExclusionOptions = new MaintenanceExclusionOptions() {{
                                        scope = MaintenanceExclusionOptionsScopeEnum.NO_MINOR_OR_NODE_UPGRADES;
                                    }};;
                                    startTime = "enim";
                                }};;
                            }};;
                        }};;
                    }};;
                    name = "Martin Berge";
                    projectId = "enim";
                    zone = "labore";
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "officia";
                key = "natus";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "quaerat";
                uploadProtocol = "doloribus";
            }};            

            ContainerProjectsZonesClustersSetMaintenancePolicyResponse res = sdk.projects.containerProjectsZonesClustersSetMaintenancePolicy(req, new ContainerProjectsZonesClustersSetMaintenancePolicySecurity("quia", "officiis") {{
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

            ContainerProjectsZonesClustersSetMasterAuthRequest req = new ContainerProjectsZonesClustersSetMasterAuthRequest("mollitia", "cumque", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                setMasterAuthRequest = new SetMasterAuthRequest() {{
                    action = SetMasterAuthRequestActionEnum.SET_PASSWORD;
                    clusterId = "nemo";
                    name = "Danny Bahringer";
                    projectId = "asperiores";
                    update = new MasterAuth() {{
                        clientCertificate = "recusandae";
                        clientCertificateConfig = new ClientCertificateConfig() {{
                            issueClientCertificate = false;
                        }};;
                        clientKey = "voluptates";
                        clusterCaCertificate = "praesentium";
                        password = "dicta";
                        username = "Buford_Bailey";
                    }};;
                    zone = "sed";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "nesciunt";
                fields = "delectus";
                key = "laborum";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "modi";
                uploadProtocol = "sunt";
            }};            

            ContainerProjectsZonesClustersSetMasterAuthResponse res = sdk.projects.containerProjectsZonesClustersSetMasterAuth(req, new ContainerProjectsZonesClustersSetMasterAuthSecurity("impedit", "eius") {{
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

            ContainerProjectsZonesClustersSetNetworkPolicyRequest req = new ContainerProjectsZonesClustersSetNetworkPolicyRequest("voluptatum", "ipsa", "at") {{
                dollarXgafv = XgafvEnum.ONE;
                setNetworkPolicyRequest = new SetNetworkPolicyRequest() {{
                    clusterId = "repellat";
                    name = "Stephanie Dickinson";
                    networkPolicy = new NetworkPolicy() {{
                        enabled = false;
                        provider = NetworkPolicyProviderEnum.CALICO;
                    }};;
                    projectId = "eaque";
                    zone = "dolorem";
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "nulla";
                key = "enim";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "delectus";
                uploadProtocol = "numquam";
            }};            

            ContainerProjectsZonesClustersSetNetworkPolicyResponse res = sdk.projects.containerProjectsZonesClustersSetNetworkPolicy(req, new ContainerProjectsZonesClustersSetNetworkPolicySecurity("optio", "nobis") {{
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

            ContainerProjectsZonesClustersStartIpRotationRequest req = new ContainerProjectsZonesClustersStartIpRotationRequest("ex", "repellat", "quae") {{
                dollarXgafv = XgafvEnum.TWO;
                startIPRotationRequest = new StartIPRotationRequest() {{
                    clusterId = "expedita";
                    name = "Marshall Hyatt V";
                    projectId = "ea";
                    rotateCredentials = false;
                    zone = "animi";
                }};;
                accessToken = "dolore";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                fields = "esse";
                key = "animi";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "eveniet";
                uploadProtocol = "earum";
            }};            

            ContainerProjectsZonesClustersStartIpRotationResponse res = sdk.projects.containerProjectsZonesClustersStartIpRotation(req, new ContainerProjectsZonesClustersStartIpRotationSecurity("velit", "officiis") {{
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

Updates the settings for a specific cluster.

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
import org.openapis.openapi.models.shared.ClusterTelemetry;
import org.openapis.openapi.models.shared.ClusterTelemetryTypeEnum;
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
import org.openapis.openapi.models.shared.GcsFuseCsiDriverConfig;
import org.openapis.openapi.models.shared.GkeBackupAgentConfig;
import org.openapis.openapi.models.shared.HorizontalPodAutoscaling;
import org.openapis.openapi.models.shared.HttpLoadBalancing;
import org.openapis.openapi.models.shared.ILBSubsettingConfig;
import org.openapis.openapi.models.shared.IdentityServiceConfig;
import org.openapis.openapi.models.shared.IntraNodeVisibilityConfig;
import org.openapis.openapi.models.shared.IstioConfig;
import org.openapis.openapi.models.shared.IstioConfigAuthEnum;
import org.openapis.openapi.models.shared.KalmConfig;
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
import org.openapis.openapi.models.shared.PodSecurityPolicyConfig;
import org.openapis.openapi.models.shared.PrivateClusterConfig;
import org.openapis.openapi.models.shared.PrivateClusterMasterGlobalAccessConfig;
import org.openapis.openapi.models.shared.ProtectConfig;
import org.openapis.openapi.models.shared.ProtectConfigWorkloadVulnerabilityModeEnum;
import org.openapis.openapi.models.shared.PubSub;
import org.openapis.openapi.models.shared.ReleaseChannel;
import org.openapis.openapi.models.shared.ReleaseChannelChannelEnum;
import org.openapis.openapi.models.shared.ResourceLimit;
import org.openapis.openapi.models.shared.ResourceUsageExportConfig;
import org.openapis.openapi.models.shared.ServiceExternalIPsConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.ShieldedNodes;
import org.openapis.openapi.models.shared.StandardRolloutPolicy;
import org.openapis.openapi.models.shared.TpuConfig;
import org.openapis.openapi.models.shared.UpdateClusterRequest;
import org.openapis.openapi.models.shared.UpgradeSettings;
import org.openapis.openapi.models.shared.UpgradeSettingsStrategyEnum;
import org.openapis.openapi.models.shared.VerticalPodAutoscaling;
import org.openapis.openapi.models.shared.WorkloadALTSConfig;
import org.openapis.openapi.models.shared.WorkloadCertificates;
import org.openapis.openapi.models.shared.WorkloadConfig;
import org.openapis.openapi.models.shared.WorkloadConfigAuditModeEnum;
import org.openapis.openapi.models.shared.WorkloadIdentityConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsZonesClustersUpdateRequest req = new ContainerProjectsZonesClustersUpdateRequest("eius", "rerum", "itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                updateClusterRequest = new UpdateClusterRequest() {{
                    clusterId = "ipsam";
                    name = "Leticia Hyatt";
                    projectId = "ipsum";
                    update = new ClusterUpdate() {{
                        additionalPodRangesConfig = new AdditionalPodRangesConfig() {{
                            podRangeNames = new String[]{{
                                add("quaerat"),
                                add("architecto"),
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
                            gcsFuseCsiDriverConfig = new GcsFuseCsiDriverConfig() {{
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
                            istioConfig = new IstioConfig() {{
                                auth = IstioConfigAuthEnum.AUTH_MUTUAL_TLS;
                                disabled = false;
                            }};;
                            kalmConfig = new KalmConfig() {{
                                enabled = false;
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
                            securityGroup = "dolor";
                        }};;
                        desiredBinaryAuthorization = new BinaryAuthorization() {{
                            enabled = false;
                            evaluationMode = BinaryAuthorizationEvaluationModeEnum.PROJECT_SINGLETON_POLICY_ENFORCE;
                        }};;
                        desiredClusterAutoscaling = new ClusterAutoscaling() {{
                            autoprovisioningLocations = new String[]{{
                                add("iste"),
                                add("illo"),
                                add("minus"),
                            }};
                            autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults() {{
                                bootDiskKmsKey = "quos";
                                diskSizeGb = 835646;
                                diskType = "sint";
                                imageType = "iusto";
                                management = new NodeManagement() {{
                                    autoRepair = false;
                                    autoUpgrade = false;
                                    upgradeOptions = new AutoUpgradeOptions() {{
                                        autoUpgradeStartTime = "enim";
                                        description = "accusamus";
                                    }};;
                                }};;
                                minCpuPlatform = "aperiam";
                                oauthScopes = new String[]{{
                                    add("laudantium"),
                                    add("tempora"),
                                    add("quae"),
                                    add("omnis"),
                                }};
                                serviceAccount = "illum";
                                shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                                    enableIntegrityMonitoring = false;
                                    enableSecureBoot = false;
                                }};;
                                upgradeSettings = new UpgradeSettings() {{
                                    blueGreenSettings = new BlueGreenSettings() {{
                                        nodePoolSoakDuration = "rem";
                                        standardRolloutPolicy = new StandardRolloutPolicy() {{
                                            batchNodeCount = 949370;
                                            batchPercentage = 5379.46;
                                            batchSoakDuration = "modi";
                                        }};;
                                    }};;
                                    maxSurge = 937664;
                                    maxUnavailable = 101374;
                                    strategy = UpgradeSettingsStrategyEnum.NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED;
                                }};;
                            }};;
                            autoscalingProfile = ClusterAutoscalingAutoscalingProfileEnum.PROFILE_UNSPECIFIED;
                            enableNodeAutoprovisioning = false;
                            resourceLimits = new org.openapis.openapi.models.shared.ResourceLimit[]{{
                                add(new ResourceLimit() {{
                                    maximum = "sequi";
                                    minimum = "saepe";
                                    resourceType = "consequatur";
                                }}),
                                add(new ResourceLimit() {{
                                    maximum = "esse";
                                    minimum = "debitis";
                                    resourceType = "facere";
                                }}),
                                add(new ResourceLimit() {{
                                    maximum = "quisquam";
                                    minimum = "cumque";
                                    resourceType = "aliquam";
                                }}),
                                add(new ResourceLimit() {{
                                    maximum = "dolorum";
                                    minimum = "deserunt";
                                    resourceType = "ad";
                                }}),
                            }};
                        }};;
                        desiredClusterTelemetry = new ClusterTelemetry() {{
                            type = ClusterTelemetryTypeEnum.SYSTEM_ONLY;
                        }};;
                        desiredCostManagementConfig = new CostManagementConfig() {{
                            enabled = false;
                        }};;
                        desiredDatabaseEncryption = new DatabaseEncryption() {{
                            keyName = "sequi";
                            state = DatabaseEncryptionStateEnum.DECRYPTED;
                        }};;
                        desiredDatapathProvider = ClusterUpdateDesiredDatapathProviderEnum.ADVANCED_DATAPATH;
                        desiredDefaultSnatStatus = new DefaultSnatStatus() {{
                            disabled = false;
                        }};;
                        desiredDnsConfig = new DNSConfig() {{
                            clusterDns = DNSConfigClusterDNSEnum.CLOUD_DNS;
                            clusterDnsDomain = "quibusdam";
                            clusterDnsScope = DNSConfigClusterDNSScopeEnum.CLUSTER_SCOPE;
                        }};;
                        desiredEnablePrivateEndpoint = false;
                        desiredFleet = new Fleet() {{
                            membership = "aut";
                            preRegistered = false;
                            project = "ipsam";
                        }};;
                        desiredGatewayApiConfig = new GatewayAPIConfig() {{
                            channel = GatewayAPIConfigChannelEnum.CHANNEL_EXPERIMENTAL;
                        }};;
                        desiredGcfsConfig = new GcfsConfig() {{
                            enabled = false;
                        }};;
                        desiredIdentityServiceConfig = new IdentityServiceConfig() {{
                            enabled = false;
                        }};;
                        desiredImageType = "cupiditate";
                        desiredIntraNodeVisibilityConfig = new IntraNodeVisibilityConfig() {{
                            enabled = false;
                        }};;
                        desiredL4ilbSubsettingConfig = new ILBSubsettingConfig() {{
                            enabled = false;
                        }};;
                        desiredLocations = new String[]{{
                            add("quia"),
                            add("necessitatibus"),
                        }};
                        desiredLoggingConfig = new LoggingConfig() {{
                            componentConfig = new LoggingComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.LoggingComponentConfigEnableComponentsEnum[]{{
                                    add(LoggingComponentConfigEnableComponentsEnum.SYSTEM_COMPONENTS),
                                }};
                            }};;
                        }};;
                        desiredLoggingService = "nisi";
                        desiredMaster = new java.util.HashMap<String, Object>() {{
                            put("quia", "laudantium");
                            put("sed", "odit");
                        }};
                        desiredMasterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig() {{
                            cidrBlocks = new org.openapis.openapi.models.shared.CidrBlock[]{{
                                add(new CidrBlock() {{
                                    cidrBlock = "expedita";
                                    displayName = "eos";
                                }}),
                                add(new CidrBlock() {{
                                    cidrBlock = "repellendus";
                                    displayName = "nesciunt";
                                }}),
                            }};
                            enabled = false;
                            gcpPublicCidrsAccessEnabled = false;
                        }};;
                        desiredMasterVersion = "ipsa";
                        desiredMeshCertificates = new MeshCertificates() {{
                            enableCertificates = false;
                        }};;
                        desiredMonitoringConfig = new MonitoringConfig() {{
                            componentConfig = new MonitoringComponentConfig() {{
                                enableComponents = new org.openapis.openapi.models.shared.MonitoringComponentConfigEnableComponentsEnum[]{{
                                    add(MonitoringComponentConfigEnableComponentsEnum.SYSTEM_COMPONENTS),
                                    add(MonitoringComponentConfigEnableComponentsEnum.WORKLOADS),
                                    add(MonitoringComponentConfigEnableComponentsEnum.COMPONENT_UNSPECIFIED),
                                }};
                            }};;
                            managedPrometheusConfig = new ManagedPrometheusConfig() {{
                                enabled = false;
                            }};;
                        }};;
                        desiredMonitoringService = "distinctio";
                        desiredNodePoolAutoConfigNetworkTags = new NetworkTags() {{
                            tags = new String[]{{
                                add("quam"),
                                add("est"),
                                add("aliquam"),
                                add("delectus"),
                            }};
                        }};;
                        desiredNodePoolAutoscaling = new NodePoolAutoscaling() {{
                            autoprovisioned = false;
                            enabled = false;
                            locationPolicy = NodePoolAutoscalingLocationPolicyEnum.BALANCED;
                            maxNodeCount = 531494;
                            minNodeCount = 482628;
                            totalMaxNodeCount = 802069;
                            totalMinNodeCount = 977583;
                        }};;
                        desiredNodePoolId = "voluptas";
                        desiredNodePoolLoggingConfig = new NodePoolLoggingConfig() {{
                            variantConfig = new LoggingVariantConfig() {{
                                variant = LoggingVariantConfigVariantEnum.VARIANT_UNSPECIFIED;
                            }};;
                        }};;
                        desiredNodeVersion = "ullam";
                        desiredNotificationConfig = new NotificationConfig() {{
                            pubsub = new PubSub() {{
                                enabled = false;
                                filter = new Filter() {{
                                    eventType = new org.openapis.openapi.models.shared.FilterEventTypeEnum[]{{
                                        add(FilterEventTypeEnum.UPGRADE_AVAILABLE_EVENT),
                                        add(FilterEventTypeEnum.SECURITY_BULLETIN_EVENT),
                                        add(FilterEventTypeEnum.UPGRADE_EVENT),
                                    }};
                                }};;
                                topic = "recusandae";
                            }};;
                        }};;
                        desiredPodSecurityPolicyConfig = new PodSecurityPolicyConfig() {{
                            enabled = false;
                        }};;
                        desiredPrivateClusterConfig = new PrivateClusterConfig() {{
                            enablePrivateEndpoint = false;
                            enablePrivateNodes = false;
                            masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig() {{
                                enabled = false;
                            }};;
                            masterIpv4CidrBlock = "corporis";
                            peeringName = "non";
                            privateEndpoint = "necessitatibus";
                            privateEndpointSubnetwork = "distinctio";
                            publicEndpoint = "maiores";
                        }};;
                        desiredPrivateIpv6GoogleAccess = ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum.PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED;
                        desiredProtectConfig = new ProtectConfig() {{
                            workloadConfig = new WorkloadConfig() {{
                                auditMode = WorkloadConfigAuditModeEnum.MODE_UNSPECIFIED;
                            }};;
                            workloadVulnerabilityMode = ProtectConfigWorkloadVulnerabilityModeEnum.BASIC;
                        }};;
                        desiredReleaseChannel = new ReleaseChannel() {{
                            channel = ReleaseChannelChannelEnum.UNSPECIFIED;
                        }};;
                        desiredResourceUsageExportConfig = new ResourceUsageExportConfig() {{
                            bigqueryDestination = new BigQueryDestination() {{
                                datasetId = "sunt";
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
                        desiredTpuConfig = new TpuConfig() {{
                            enabled = false;
                            ipv4CidrBlock = "voluptatibus";
                            useServiceNetworking = false;
                        }};;
                        desiredVerticalPodAutoscaling = new VerticalPodAutoscaling() {{
                            enabled = false;
                        }};;
                        desiredWorkloadAltsConfig = new WorkloadALTSConfig() {{
                            enableAlts = false;
                        }};;
                        desiredWorkloadCertificates = new WorkloadCertificates() {{
                            enableCertificates = false;
                        }};;
                        desiredWorkloadIdentityConfig = new WorkloadIdentityConfig() {{
                            identityNamespace = "doloremque";
                            identityProvider = "sed";
                            workloadPool = "amet";
                        }};;
                        etag = "rerum";
                        removedAdditionalPodRangesConfig = new AdditionalPodRangesConfig() {{
                            podRangeNames = new String[]{{
                                add("nostrum"),
                                add("temporibus"),
                            }};
                        }};;
                    }};;
                    zone = "ratione";
                }};;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "reiciendis";
                key = "itaque";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "accusantium";
                uploadProtocol = "quod";
            }};            

            ContainerProjectsZonesClustersUpdateResponse res = sdk.projects.containerProjectsZonesClustersUpdate(req, new ContainerProjectsZonesClustersUpdateSecurity("minus", "quos") {{
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

            ContainerProjectsZonesGetServerconfigRequest req = new ContainerProjectsZonesGetServerconfigRequest("possimus", "maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "aperiam";
                fields = "similique";
                key = "nesciunt";
                name = "Ruben Sipes DDS";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "labore";
                uploadProtocol = "expedita";
            }};            

            ContainerProjectsZonesGetServerconfigResponse res = sdk.projects.containerProjectsZonesGetServerconfig(req, new ContainerProjectsZonesGetServerconfigSecurity("in", "quisquam") {{
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

            ContainerProjectsZonesOperationsCancelRequest req = new ContainerProjectsZonesOperationsCancelRequest("sunt", "enim", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                cancelOperationRequest = new CancelOperationRequest() {{
                    name = "Hubert Russel V";
                    operationId = "blanditiis";
                    projectId = "cum";
                    zone = "dicta";
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "eveniet";
                fields = "repudiandae";
                key = "sed";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "impedit";
                uploadProtocol = "vel";
            }};            

            ContainerProjectsZonesOperationsCancelResponse res = sdk.projects.containerProjectsZonesOperationsCancel(req, new ContainerProjectsZonesOperationsCancelSecurity("eligendi", "recusandae") {{
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

            ContainerProjectsZonesOperationsGetRequest req = new ContainerProjectsZonesOperationsGetRequest("ex", "beatae", "veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "illo";
                key = "quo";
                name = "Alexandra Raynor";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "earum";
                uploadProtocol = "quod";
            }};            

            ContainerProjectsZonesOperationsGetResponse res = sdk.projects.containerProjectsZonesOperationsGet(req, new ContainerProjectsZonesOperationsGetSecurity("nihil", "quaerat") {{
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

Lists all operations in a project in the specified zone or all zones.

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

            ContainerProjectsZonesOperationsListRequest req = new ContainerProjectsZonesOperationsListRequest("ipsum", "ducimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "ad";
                key = "sequi";
                oauthToken = "beatae";
                parent = "iusto";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "magnam";
                uploadProtocol = "odio";
            }};            

            ContainerProjectsZonesOperationsListResponse res = sdk.projects.containerProjectsZonesOperationsList(req, new ContainerProjectsZonesOperationsListSecurity("nulla", "impedit") {{
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
