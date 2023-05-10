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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsAggregatedUsableSubnetworksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsAggregatedUsableSubnetworksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsAggregatedUsableSubnetworksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new ContainerProjectsAggregatedUsableSubnetworksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsAggregatedUsableSubnetworksList($request, $requestSecurity);

    if ($response->listUsableSubnetworksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersCompleteIpRotation

Completes master IP rotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersCompleteIpRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompleteIPRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersCompleteIpRotationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersCompleteIpRotationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->completeIPRotationRequest = new CompleteIPRotationRequest();
    $request->completeIPRotationRequest->clusterId = 'quis';
    $request->completeIPRotationRequest->name = 'Iris Aufderhar';
    $request->completeIPRotationRequest->projectId = 'sapiente';
    $request->completeIPRotationRequest->zone = 'quo';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->name = 'Forrest Koepp';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new ContainerProjectsLocationsClustersCompleteIpRotationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersCompleteIpRotation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersCreate

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateClusterRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\AddonsConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfigLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigConnectorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DnsCacheConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcePersistentDiskCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcpFilestoreCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsFuseCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeBackupAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\HttpLoadBalancing;
use \OpenAPI\OpenAPI\Models\Shared\IstioConfig;
use \OpenAPI\OpenAPI\Models\Shared\IstioConfigAuthEnum;
use \OpenAPI\OpenAPI\Models\Shared\KalmConfig;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesDashboard;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticatorGroupsConfig;
use \OpenAPI\OpenAPI\Models\Shared\Autopilot;
use \OpenAPI\OpenAPI\Models\Shared\ClusterAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\AutoprovisioningNodePoolDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodeManagement;
use \OpenAPI\OpenAPI\Models\Shared\AutoUpgradeOptions;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettings;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenSettings;
use \OpenAPI\OpenAPI\Models\Shared\StandardRolloutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettingsStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterAutoscalingAutoscalingProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceLimit;
use \OpenAPI\OpenAPI\Models\Shared\BinaryAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\BinaryAuthorizationEvaluationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterTelemetry;
use \OpenAPI\OpenAPI\Models\Shared\ClusterTelemetryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusCondition;
use \OpenAPI\OpenAPI\Models\Shared\StatusConditionCanonicalCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusConditionCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialNodes;
use \OpenAPI\OpenAPI\Models\Shared\CostManagementConfig;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseEncryption;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseEncryptionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaxPodsConstraint;
use \OpenAPI\OpenAPI\Models\Shared\Fleet;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\IPAllocationPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalPodRangesConfig;
use \OpenAPI\OpenAPI\Models\Shared\IPAllocationPolicyIpv6AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PodCIDROverprovisionConfig;
use \OpenAPI\OpenAPI\Models\Shared\IPAllocationPolicyStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LegacyAbac;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingComponentConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingComponentConfigEnableComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaintenancePolicy;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\DailyMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\TimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceExclusionOptions;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceExclusionOptionsScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecurringTimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\MasterAuth;
use \OpenAPI\OpenAPI\Models\Shared\ClientCertificateConfig;
use \OpenAPI\OpenAPI\Models\Shared\MasterAuthorizedNetworksConfig;
use \OpenAPI\OpenAPI\Models\Shared\CidrBlock;
use \OpenAPI\OpenAPI\Models\Shared\MeshCertificates;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringComponentConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringComponentConfigEnableComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedPrometheusConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigDatapathProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultSnatStatus;
use \OpenAPI\OpenAPI\Models\Shared\DNSConfig;
use \OpenAPI\OpenAPI\Models\Shared\DNSConfigClusterDNSEnum;
use \OpenAPI\OpenAPI\Models\Shared\DNSConfigClusterDNSScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewayAPIConfig;
use \OpenAPI\OpenAPI\Models\Shared\GatewayAPIConfigChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceExternalIPsConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicy;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicyProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GPUSharingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GPUSharingConfigGPUSharingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedMachineFeatures;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorageLocalSsdConfig;
use \OpenAPI\OpenAPI\Models\Shared\FastSocket;
use \OpenAPI\OpenAPI\Models\Shared\GcfsConfig;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNIC;
use \OpenAPI\OpenAPI\Models\Shared\NodeKubeletConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfigCgroupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalNvmeSsdBlockConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfigVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SandboxConfig;
use \OpenAPI\OpenAPI\Models\Shared\SandboxConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfigOsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigNodeMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkTags;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfigDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodePool;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscalingLocationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInfo;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenInfo;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenInfoPhaseEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\PubSub;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PodSecurityPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterMasterGlobalAccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProtectConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadConfigAuditModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectConfigWorkloadVulnerabilityModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannel;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannelChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUsageExportConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\ConsumptionMeteringConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedNodes;
use \OpenAPI\OpenAPI\Models\Shared\ClusterStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TpuConfig;
use \OpenAPI\OpenAPI\Models\Shared\VerticalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadALTSConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadCertificates;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadIdentityConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createClusterRequestInput = new CreateClusterRequestInput();
    $request->createClusterRequestInput->cluster = new ClusterInput();
    $request->createClusterRequestInput->cluster->addonsConfig = new AddonsConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->cloudRunConfig = new CloudRunConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->cloudRunConfig->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->cloudRunConfig->loadBalancerType = CloudRunConfigLoadBalancerTypeEnum::LOAD_BALANCER_TYPE_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->addonsConfig->configConnectorConfig = new ConfigConnectorConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->configConnectorConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->dnsCacheConfig = new DnsCacheConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->dnsCacheConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gcePersistentDiskCsiDriverConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gcpFilestoreCsiDriverConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gcsFuseCsiDriverConfig = new GcsFuseCsiDriverConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gcsFuseCsiDriverConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gkeBackupAgentConfig = new GkeBackupAgentConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gkeBackupAgentConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->horizontalPodAutoscaling = new HorizontalPodAutoscaling();
    $request->createClusterRequestInput->cluster->addonsConfig->horizontalPodAutoscaling->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->httpLoadBalancing = new HttpLoadBalancing();
    $request->createClusterRequestInput->cluster->addonsConfig->httpLoadBalancing->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->istioConfig = new IstioConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->istioConfig->auth = IstioConfigAuthEnum::AUTH_MUTUAL_TLS;
    $request->createClusterRequestInput->cluster->addonsConfig->istioConfig->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->kalmConfig = new KalmConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->kalmConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->kubernetesDashboard = new KubernetesDashboard();
    $request->createClusterRequestInput->cluster->addonsConfig->kubernetesDashboard->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->networkPolicyConfig = new NetworkPolicyConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->networkPolicyConfig->disabled = false;
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig = new AuthenticatorGroupsConfig();
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig->securityGroup = 'hic';
    $request->createClusterRequestInput->cluster->autopilot = new Autopilot();
    $request->createClusterRequestInput->cluster->autopilot->enabled = false;
    $request->createClusterRequestInput->cluster->autoscaling = new ClusterAutoscaling();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningLocations = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->bootDiskKmsKey = 'modi';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->diskSizeGb = 186332;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->diskType = 'impedit';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->imageType = 'cum';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management = new NodeManagement();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->autoRepair = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->autoUpgrade = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions = new AutoUpgradeOptions();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->autoUpgradeStartTime = 'esse';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->description = 'ipsum';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->minCpuPlatform = 'excepturi';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->oauthScopes = [
        'perferendis',
    ];
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->serviceAccount = 'ad';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings = new UpgradeSettings();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'natus';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 149675;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 6120.96;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'dolor';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->maxSurge = 616934;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->maxUnavailable = 386489;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::SURGE;
    $request->createClusterRequestInput->cluster->autoscaling->autoscalingProfile = ClusterAutoscalingAutoscalingProfileEnum::BALANCED;
    $request->createClusterRequestInput->cluster->autoscaling->enableNodeAutoprovisioning = false;
    $request->createClusterRequestInput->cluster->autoscaling->resourceLimits = [
        new ResourceLimit(),
        new ResourceLimit(),
        new ResourceLimit(),
    ];
    $request->createClusterRequestInput->cluster->binaryAuthorization = new BinaryAuthorization();
    $request->createClusterRequestInput->cluster->binaryAuthorization->enabled = false;
    $request->createClusterRequestInput->cluster->binaryAuthorization->evaluationMode = BinaryAuthorizationEvaluationModeEnum::DISABLED;
    $request->createClusterRequestInput->cluster->clusterIpv4Cidr = 'corporis';
    $request->createClusterRequestInput->cluster->clusterTelemetry = new ClusterTelemetry();
    $request->createClusterRequestInput->cluster->clusterTelemetry->type = ClusterTelemetryTypeEnum::ENABLED;
    $request->createClusterRequestInput->cluster->conditions = [
        new StatusCondition(),
        new StatusCondition(),
    ];
    $request->createClusterRequestInput->cluster->confidentialNodes = new ConfidentialNodes();
    $request->createClusterRequestInput->cluster->confidentialNodes->enabled = false;
    $request->createClusterRequestInput->cluster->costManagementConfig = new CostManagementConfig();
    $request->createClusterRequestInput->cluster->costManagementConfig->enabled = false;
    $request->createClusterRequestInput->cluster->createTime = 'saepe';
    $request->createClusterRequestInput->cluster->currentMasterVersion = 'quidem';
    $request->createClusterRequestInput->cluster->currentNodeCount = 99280;
    $request->createClusterRequestInput->cluster->currentNodeVersion = 'ipsa';
    $request->createClusterRequestInput->cluster->databaseEncryption = new DatabaseEncryption();
    $request->createClusterRequestInput->cluster->databaseEncryption->keyName = 'reiciendis';
    $request->createClusterRequestInput->cluster->databaseEncryption->state = DatabaseEncryptionStateEnum::DECRYPTED;
    $request->createClusterRequestInput->cluster->defaultMaxPodsConstraint = new MaxPodsConstraint();
    $request->createClusterRequestInput->cluster->defaultMaxPodsConstraint->maxPodsPerNode = 'mollitia';
    $request->createClusterRequestInput->cluster->description = 'laborum';
    $request->createClusterRequestInput->cluster->enableKubernetesAlpha = false;
    $request->createClusterRequestInput->cluster->enableTpu = false;
    $request->createClusterRequestInput->cluster->endpoint = 'dolores';
    $request->createClusterRequestInput->cluster->etag = 'dolorem';
    $request->createClusterRequestInput->cluster->expireTime = 'corporis';
    $request->createClusterRequestInput->cluster->fleet = new Fleet();
    $request->createClusterRequestInput->cluster->fleet->membership = 'explicabo';
    $request->createClusterRequestInput->cluster->fleet->preRegistered = false;
    $request->createClusterRequestInput->cluster->fleet->project = 'nobis';
    $request->createClusterRequestInput->cluster->identityServiceConfig = new IdentityServiceConfig();
    $request->createClusterRequestInput->cluster->identityServiceConfig->enabled = false;
    $request->createClusterRequestInput->cluster->initialClusterVersion = 'enim';
    $request->createClusterRequestInput->cluster->initialNodeCount = 607831;
    $request->createClusterRequestInput->cluster->instanceGroupUrls = [
        'minima',
        'excepturi',
    ];
    $request->createClusterRequestInput->cluster->ipAllocationPolicy = new IPAllocationPolicyInput();
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->additionalPodRangesConfig = new AdditionalPodRangesConfig();
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->additionalPodRangesConfig->podRangeNames = [
        'iure',
    ];
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->allowRouteOverlap = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->clusterIpv4Cidr = 'culpa';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->clusterIpv4CidrBlock = 'doloribus';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->clusterSecondaryRangeName = 'sapiente';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->createSubnetwork = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->ipv6AccessType = IPAllocationPolicyIpv6AccessTypeEnum::IPV6_ACCESS_TYPE_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->nodeIpv4Cidr = 'mollitia';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->nodeIpv4CidrBlock = 'dolorem';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->podCidrOverprovisionConfig->disable = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->servicesIpv4Cidr = 'culpa';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->servicesIpv4CidrBlock = 'consequuntur';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->servicesSecondaryRangeName = 'repellat';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->stackType = IPAllocationPolicyStackTypeEnum::IPV4;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->subnetworkName = 'occaecati';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->tpuIpv4CidrBlock = 'numquam';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->useIpAliases = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->useRoutes = false;
    $request->createClusterRequestInput->cluster->labelFingerprint = 'commodi';
    $request->createClusterRequestInput->cluster->legacyAbac = new LegacyAbac();
    $request->createClusterRequestInput->cluster->legacyAbac->enabled = false;
    $request->createClusterRequestInput->cluster->location = 'quam';
    $request->createClusterRequestInput->cluster->locations = [
        'velit',
        'error',
    ];
    $request->createClusterRequestInput->cluster->loggingConfig = new LoggingConfig();
    $request->createClusterRequestInput->cluster->loggingConfig->componentConfig = new LoggingComponentConfig();
    $request->createClusterRequestInput->cluster->loggingConfig->componentConfig->enableComponents = [
        LoggingComponentConfigEnableComponentsEnum::WORKLOADS,
    ];
    $request->createClusterRequestInput->cluster->loggingService = 'vitae';
    $request->createClusterRequestInput->cluster->maintenancePolicy = new MaintenancePolicy();
    $request->createClusterRequestInput->cluster->maintenancePolicy->resourceVersion = 'laborum';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window = new MaintenanceWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->dailyMaintenanceWindow = new DailyMaintenanceWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->dailyMaintenanceWindow->duration = 'animi';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->dailyMaintenanceWindow->startTime = 'enim';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->maintenanceExclusions = [
        'quo' => new TimeWindow(),
    ];
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow = new RecurringTimeWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->recurrence = 'sequi';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window = new TimeWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->endTime = 'tenetur';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions = new MaintenanceExclusionOptions();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions->scope = MaintenanceExclusionOptionsScopeEnum::NO_MINOR_UPGRADES;
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->startTime = 'id';
    $request->createClusterRequestInput->cluster->master = [
        'aut' => 'quasi',
        'error' => 'temporibus',
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
    ];
    $request->createClusterRequestInput->cluster->masterAuth = new MasterAuth();
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificate = 'vero';
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificateConfig = new ClientCertificateConfig();
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificateConfig->issueClientCertificate = false;
    $request->createClusterRequestInput->cluster->masterAuth->clientKey = 'nihil';
    $request->createClusterRequestInput->cluster->masterAuth->clusterCaCertificate = 'praesentium';
    $request->createClusterRequestInput->cluster->masterAuth->password = 'voluptatibus';
    $request->createClusterRequestInput->cluster->masterAuth->username = 'Ana_Moen';
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
    ];
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->enabled = false;
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->gcpPublicCidrsAccessEnabled = false;
    $request->createClusterRequestInput->cluster->masterIpv4CidrBlock = 'doloremque';
    $request->createClusterRequestInput->cluster->meshCertificates = new MeshCertificates();
    $request->createClusterRequestInput->cluster->meshCertificates->enableCertificates = false;
    $request->createClusterRequestInput->cluster->monitoringConfig = new MonitoringConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->componentConfig = new MonitoringComponentConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->componentConfig->enableComponents = [
        MonitoringComponentConfigEnableComponentsEnum::SYSTEM_COMPONENTS,
        MonitoringComponentConfigEnableComponentsEnum::CONTROLLER_MANAGER,
    ];
    $request->createClusterRequestInput->cluster->monitoringConfig->managedPrometheusConfig = new ManagedPrometheusConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->managedPrometheusConfig->enabled = false;
    $request->createClusterRequestInput->cluster->monitoringService = 'dicta';
    $request->createClusterRequestInput->cluster->name = 'Miss Valerie Kshlerin';
    $request->createClusterRequestInput->cluster->network = 'accusamus';
    $request->createClusterRequestInput->cluster->networkConfig = new NetworkConfig();
    $request->createClusterRequestInput->cluster->networkConfig->datapathProvider = NetworkConfigDatapathProviderEnum::LEGACY_DATAPATH;
    $request->createClusterRequestInput->cluster->networkConfig->defaultSnatStatus = new DefaultSnatStatus();
    $request->createClusterRequestInput->cluster->networkConfig->defaultSnatStatus->disabled = false;
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig = new DNSConfig();
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDns = DNSConfigClusterDNSEnum::CLOUD_DNS;
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDnsDomain = 'quae';
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDnsScope = DNSConfigClusterDNSScopeEnum::DNS_SCOPE_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->networkConfig->enableIntraNodeVisibility = false;
    $request->createClusterRequestInput->cluster->networkConfig->enableL4ilbSubsetting = false;
    $request->createClusterRequestInput->cluster->networkConfig->gatewayApiConfig = new GatewayAPIConfig();
    $request->createClusterRequestInput->cluster->networkConfig->gatewayApiConfig->channel = GatewayAPIConfigChannelEnum::CHANNEL_EXPERIMENTAL;
    $request->createClusterRequestInput->cluster->networkConfig->network = 'molestias';
    $request->createClusterRequestInput->cluster->networkConfig->privateIpv6GoogleAccess = NetworkConfigPrivateIpv6GoogleAccessEnum::PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE;
    $request->createClusterRequestInput->cluster->networkConfig->serviceExternalIpsConfig = new ServiceExternalIPsConfig();
    $request->createClusterRequestInput->cluster->networkConfig->serviceExternalIpsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->networkConfig->subnetwork = 'pariatur';
    $request->createClusterRequestInput->cluster->networkPolicy = new NetworkPolicy();
    $request->createClusterRequestInput->cluster->networkPolicy->enabled = false;
    $request->createClusterRequestInput->cluster->networkPolicy->provider = NetworkPolicyProviderEnum::PROVIDER_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig = new NodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->createClusterRequestInput->cluster->nodeConfig->advancedMachineFeatures->threadsPerCore = 'rem';
    $request->createClusterRequestInput->cluster->nodeConfig->bootDiskKmsKey = 'voluptates';
    $request->createClusterRequestInput->cluster->nodeConfig->confidentialNodes = new ConfidentialNodes();
    $request->createClusterRequestInput->cluster->nodeConfig->confidentialNodes->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->diskSizeGb = 93940;
    $request->createClusterRequestInput->cluster->nodeConfig->diskType = 'repudiandae';
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageConfig = new EphemeralStorageConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageConfig->localSsdCount = 575947;
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageLocalSsdConfig->localSsdCount = 83112;
    $request->createClusterRequestInput->cluster->nodeConfig->fastSocket = new FastSocket();
    $request->createClusterRequestInput->cluster->nodeConfig->fastSocket->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->gcfsConfig = new GcfsConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->gcfsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->gvnic = new VirtualNIC();
    $request->createClusterRequestInput->cluster->nodeConfig->gvnic->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->imageType = 'itaque';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig = new NodeKubeletConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuCfsQuota = false;
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuCfsQuotaPeriod = 'incidunt';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuManagerPolicy = 'enim';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->podPidsLimit = 'consequatur';
    $request->createClusterRequestInput->cluster->nodeConfig->labels = [
        'quibusdam' => 'explicabo',
        'deserunt' => 'distinctio',
        'quibusdam' => 'labore',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig = new LinuxNodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig->sysctls = [
        'aliquid' => 'cupiditate',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->localNvmeSsdBlockConfig->localSsdCount = 552822;
    $request->createClusterRequestInput->cluster->nodeConfig->localSsdCount = 20107;
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig = new NodePoolLoggingConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::VARIANT_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig->machineType = 'assumenda';
    $request->createClusterRequestInput->cluster->nodeConfig->metadata = [
        'alias' => 'fugit',
        'dolorum' => 'excepturi',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->minCpuPlatform = 'tempora';
    $request->createClusterRequestInput->cluster->nodeConfig->nodeGroup = 'facilis';
    $request->createClusterRequestInput->cluster->nodeConfig->oauthScopes = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->preemptible = false;
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity = new ReservationAffinity();
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->key = 'eligendi';
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->values = [
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->resourceLabels = [
        'officia' => 'dolor',
        'debitis' => 'a',
        'dolorum' => 'in',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->sandboxConfig = new SandboxConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->sandboxConfig->sandboxType = 'in';
    $request->createClusterRequestInput->cluster->nodeConfig->sandboxConfig->type = SandboxConfigTypeEnum::GVISOR;
    $request->createClusterRequestInput->cluster->nodeConfig->serviceAccount = 'maiores';
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createClusterRequestInput->cluster->nodeConfig->spot = false;
    $request->createClusterRequestInput->cluster->nodeConfig->tags = [
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->taints = [
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->windowsNodeConfig = new WindowsNodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_LTSC2019;
    $request->createClusterRequestInput->cluster->nodeConfig->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::GCE_METADATA;
    $request->createClusterRequestInput->cluster->nodeConfig->workloadMetadataConfig->nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum::EXPOSE;
    $request->createClusterRequestInput->cluster->nodeIpv4CidrSize = 881104;
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig = new NodePoolAutoConfig();
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig->networkTags = new NetworkTags();
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig->networkTags->tags = [
        'occaecati',
    ];
    $request->createClusterRequestInput->cluster->nodePoolDefaults = new NodePoolDefaults();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults = new NodeConfigDefaults();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->gcfsConfig = new GcfsConfig();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->gcfsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->loggingConfig = new NodePoolLoggingConfig();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::VARIANT_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodePools = [
        new NodePool(),
        new NodePool(),
        new NodePool(),
        new NodePool(),
    ];
    $request->createClusterRequestInput->cluster->notificationConfig = new NotificationConfig();
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub = new PubSub();
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->enabled = false;
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->filter = new Filter();
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->filter->eventType = [
        FilterEventTypeEnum::UPGRADE_EVENT,
        FilterEventTypeEnum::UPGRADE_EVENT,
        FilterEventTypeEnum::UPGRADE_EVENT,
        FilterEventTypeEnum::UPGRADE_EVENT,
    ];
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->topic = 'blanditiis';
    $request->createClusterRequestInput->cluster->podSecurityPolicyConfig = new PodSecurityPolicyConfig();
    $request->createClusterRequestInput->cluster->podSecurityPolicyConfig->enabled = false;
    $request->createClusterRequestInput->cluster->privateCluster = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig = new PrivateClusterConfig();
    $request->createClusterRequestInput->cluster->privateClusterConfig->enablePrivateEndpoint = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->enablePrivateNodes = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig();
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterGlobalAccessConfig->enabled = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterIpv4CidrBlock = 'deleniti';
    $request->createClusterRequestInput->cluster->privateClusterConfig->peeringName = 'sapiente';
    $request->createClusterRequestInput->cluster->privateClusterConfig->privateEndpoint = 'amet';
    $request->createClusterRequestInput->cluster->privateClusterConfig->privateEndpointSubnetwork = 'deserunt';
    $request->createClusterRequestInput->cluster->privateClusterConfig->publicEndpoint = 'nisi';
    $request->createClusterRequestInput->cluster->protectConfig = new ProtectConfig();
    $request->createClusterRequestInput->cluster->protectConfig->workloadConfig = new WorkloadConfig();
    $request->createClusterRequestInput->cluster->protectConfig->workloadConfig->auditMode = WorkloadConfigAuditModeEnum::BASIC;
    $request->createClusterRequestInput->cluster->protectConfig->workloadVulnerabilityMode = ProtectConfigWorkloadVulnerabilityModeEnum::DISABLED;
    $request->createClusterRequestInput->cluster->releaseChannel = new ReleaseChannel();
    $request->createClusterRequestInput->cluster->releaseChannel->channel = ReleaseChannelChannelEnum::REGULAR;
    $request->createClusterRequestInput->cluster->resourceLabels = [
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig = new ResourceUsageExportConfig();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->bigqueryDestination = new BigQueryDestination();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->bigqueryDestination->datasetId = 'id';
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->consumptionMeteringConfig = new ConsumptionMeteringConfig();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->consumptionMeteringConfig->enabled = false;
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->enableNetworkEgressMetering = false;
    $request->createClusterRequestInput->cluster->selfLink = 'labore';
    $request->createClusterRequestInput->cluster->servicesIpv4Cidr = 'labore';
    $request->createClusterRequestInput->cluster->shieldedNodes = new ShieldedNodes();
    $request->createClusterRequestInput->cluster->shieldedNodes->enabled = false;
    $request->createClusterRequestInput->cluster->status = ClusterStatusEnum::RUNNING;
    $request->createClusterRequestInput->cluster->statusMessage = 'natus';
    $request->createClusterRequestInput->cluster->subnetwork = 'nobis';
    $request->createClusterRequestInput->cluster->tpuConfig = new TpuConfig();
    $request->createClusterRequestInput->cluster->tpuConfig->enabled = false;
    $request->createClusterRequestInput->cluster->tpuConfig->ipv4CidrBlock = 'eum';
    $request->createClusterRequestInput->cluster->tpuConfig->useServiceNetworking = false;
    $request->createClusterRequestInput->cluster->tpuIpv4CidrBlock = 'vero';
    $request->createClusterRequestInput->cluster->verticalPodAutoscaling = new VerticalPodAutoscaling();
    $request->createClusterRequestInput->cluster->verticalPodAutoscaling->enabled = false;
    $request->createClusterRequestInput->cluster->workloadAltsConfig = new WorkloadALTSConfig();
    $request->createClusterRequestInput->cluster->workloadAltsConfig->enableAlts = false;
    $request->createClusterRequestInput->cluster->workloadCertificates = new WorkloadCertificates();
    $request->createClusterRequestInput->cluster->workloadCertificates->enableCertificates = false;
    $request->createClusterRequestInput->cluster->workloadIdentityConfig = new WorkloadIdentityConfig();
    $request->createClusterRequestInput->cluster->workloadIdentityConfig->identityNamespace = 'aspernatur';
    $request->createClusterRequestInput->cluster->workloadIdentityConfig->identityProvider = 'architecto';
    $request->createClusterRequestInput->cluster->workloadIdentityConfig->workloadPool = 'magnam';
    $request->createClusterRequestInput->cluster->zone = 'et';
    $request->createClusterRequestInput->parent = 'excepturi';
    $request->createClusterRequestInput->projectId = 'ullam';
    $request->createClusterRequestInput->zone = 'provident';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'mollitia';
    $request->key = 'reiciendis';
    $request->oauthToken = 'mollitia';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new ContainerProjectsLocationsClustersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersGetJwks

Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersGetJwksRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersGetJwksRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->key = 'debitis';
    $request->oauthToken = 'eius';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $response = $sdk->projects->containerProjectsLocationsClustersGetJwks($request);

    if ($response->getJSONWebKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersList

Lists all clusters owned by a project in either the specified zone or all zones.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->fields = 'expedita';
    $request->key = 'nihil';
    $request->oauthToken = 'repellat';
    $request->parent = 'quibusdam';
    $request->prettyPrint = false;
    $request->projectId = 'sed';
    $request->quotaUser = 'saepe';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'accusantium';
    $request->zone = 'consequuntur';

    $requestSecurity = new ContainerProjectsLocationsClustersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersList($request, $requestSecurity);

    if ($response->listClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersNodePoolsCompleteUpgrade

CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'magni' => 'sunt',
        'quo' => 'illum',
        'pariatur' => 'maxime',
    ];
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'ea';
    $request->key = 'accusantium';
    $request->name = 'Ebony Predovic';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersNodePoolsCompleteUpgrade($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersNodePoolsCreate

Creates a node pool for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateNodePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodePool;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscalingLocationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusCondition;
use \OpenAPI\OpenAPI\Models\Shared\StatusConditionCanonicalCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusConditionCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GPUSharingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GPUSharingConfigGPUSharingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedMachineFeatures;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialNodes;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorageLocalSsdConfig;
use \OpenAPI\OpenAPI\Models\Shared\FastSocket;
use \OpenAPI\OpenAPI\Models\Shared\GcfsConfig;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNIC;
use \OpenAPI\OpenAPI\Models\Shared\NodeKubeletConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfigCgroupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalNvmeSsdBlockConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfigVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SandboxConfig;
use \OpenAPI\OpenAPI\Models\Shared\SandboxConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfigOsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigNodeMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeManagement;
use \OpenAPI\OpenAPI\Models\Shared\AutoUpgradeOptions;
use \OpenAPI\OpenAPI\Models\Shared\MaxPodsConstraint;
use \OpenAPI\OpenAPI\Models\Shared\NodeNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\PodCIDROverprovisionConfig;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInfo;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenInfo;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenInfoPhaseEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettings;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenSettings;
use \OpenAPI\OpenAPI\Models\Shared\StandardRolloutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettingsStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersNodePoolsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createNodePoolRequest = new CreateNodePoolRequest();
    $request->createNodePoolRequest->clusterId = 'voluptatibus';
    $request->createNodePoolRequest->nodePool = new NodePool();
    $request->createNodePoolRequest->nodePool->autoscaling = new NodePoolAutoscaling();
    $request->createNodePoolRequest->nodePool->autoscaling->autoprovisioned = false;
    $request->createNodePoolRequest->nodePool->autoscaling->enabled = false;
    $request->createNodePoolRequest->nodePool->autoscaling->locationPolicy = NodePoolAutoscalingLocationPolicyEnum::LOCATION_POLICY_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->autoscaling->maxNodeCount = 855804;
    $request->createNodePoolRequest->nodePool->autoscaling->minNodeCount = 230742;
    $request->createNodePoolRequest->nodePool->autoscaling->totalMaxNodeCount = 11714;
    $request->createNodePoolRequest->nodePool->autoscaling->totalMinNodeCount = 764912;
    $request->createNodePoolRequest->nodePool->conditions = [
        new StatusCondition(),
        new StatusCondition(),
    ];
    $request->createNodePoolRequest->nodePool->config = new NodeConfig();
    $request->createNodePoolRequest->nodePool->config->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->createNodePoolRequest->nodePool->config->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->createNodePoolRequest->nodePool->config->advancedMachineFeatures->threadsPerCore = 'libero';
    $request->createNodePoolRequest->nodePool->config->bootDiskKmsKey = 'nobis';
    $request->createNodePoolRequest->nodePool->config->confidentialNodes = new ConfidentialNodes();
    $request->createNodePoolRequest->nodePool->config->confidentialNodes->enabled = false;
    $request->createNodePoolRequest->nodePool->config->diskSizeGb = 171629;
    $request->createNodePoolRequest->nodePool->config->diskType = 'quis';
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageConfig = new EphemeralStorageConfig();
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageConfig->localSsdCount = 521037;
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig();
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageLocalSsdConfig->localSsdCount = 489549;
    $request->createNodePoolRequest->nodePool->config->fastSocket = new FastSocket();
    $request->createNodePoolRequest->nodePool->config->fastSocket->enabled = false;
    $request->createNodePoolRequest->nodePool->config->gcfsConfig = new GcfsConfig();
    $request->createNodePoolRequest->nodePool->config->gcfsConfig->enabled = false;
    $request->createNodePoolRequest->nodePool->config->gvnic = new VirtualNIC();
    $request->createNodePoolRequest->nodePool->config->gvnic->enabled = false;
    $request->createNodePoolRequest->nodePool->config->imageType = 'eaque';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig = new NodeKubeletConfig();
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuCfsQuota = false;
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuCfsQuotaPeriod = 'quis';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuManagerPolicy = 'nesciunt';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->podPidsLimit = 'eos';
    $request->createNodePoolRequest->nodePool->config->labels = [
        'dolores' => 'minus',
    ];
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig = new LinuxNodeConfig();
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_V1;
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig->sysctls = [
        'vero' => 'nostrum',
    ];
    $request->createNodePoolRequest->nodePool->config->localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig();
    $request->createNodePoolRequest->nodePool->config->localNvmeSsdBlockConfig->localSsdCount = 944120;
    $request->createNodePoolRequest->nodePool->config->localSsdCount = 928082;
    $request->createNodePoolRequest->nodePool->config->loggingConfig = new NodePoolLoggingConfig();
    $request->createNodePoolRequest->nodePool->config->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->createNodePoolRequest->nodePool->config->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::DEFAULT;
    $request->createNodePoolRequest->nodePool->config->machineType = 'facilis';
    $request->createNodePoolRequest->nodePool->config->metadata = [
        'voluptatem' => 'porro',
        'consequuntur' => 'blanditiis',
        'error' => 'eaque',
    ];
    $request->createNodePoolRequest->nodePool->config->minCpuPlatform = 'occaecati';
    $request->createNodePoolRequest->nodePool->config->nodeGroup = 'rerum';
    $request->createNodePoolRequest->nodePool->config->oauthScopes = [
        'asperiores',
    ];
    $request->createNodePoolRequest->nodePool->config->preemptible = false;
    $request->createNodePoolRequest->nodePool->config->reservationAffinity = new ReservationAffinity();
    $request->createNodePoolRequest->nodePool->config->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_RESERVATION;
    $request->createNodePoolRequest->nodePool->config->reservationAffinity->key = 'modi';
    $request->createNodePoolRequest->nodePool->config->reservationAffinity->values = [
        'dolorum',
        'deleniti',
        'pariatur',
    ];
    $request->createNodePoolRequest->nodePool->config->resourceLabels = [
        'nobis' => 'libero',
        'delectus' => 'quaerat',
        'quos' => 'aliquid',
    ];
    $request->createNodePoolRequest->nodePool->config->sandboxConfig = new SandboxConfig();
    $request->createNodePoolRequest->nodePool->config->sandboxConfig->sandboxType = 'dolorem';
    $request->createNodePoolRequest->nodePool->config->sandboxConfig->type = SandboxConfigTypeEnum::UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->config->serviceAccount = 'dolor';
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createNodePoolRequest->nodePool->config->spot = false;
    $request->createNodePoolRequest->nodePool->config->tags = [
        'ipsum',
    ];
    $request->createNodePoolRequest->nodePool->config->taints = [
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->createNodePoolRequest->nodePool->config->windowsNodeConfig = new WindowsNodeConfig();
    $request->createNodePoolRequest->nodePool->config->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_LTSC2019;
    $request->createNodePoolRequest->nodePool->config->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->createNodePoolRequest->nodePool->config->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::GKE_METADATA;
    $request->createNodePoolRequest->nodePool->config->workloadMetadataConfig->nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum::SECURE;
    $request->createNodePoolRequest->nodePool->etag = 'dignissimos';
    $request->createNodePoolRequest->nodePool->initialNodeCount = 970237;
    $request->createNodePoolRequest->nodePool->instanceGroupUrls = [
        'dolorum',
    ];
    $request->createNodePoolRequest->nodePool->locations = [
        'veritatis',
        'ipsa',
    ];
    $request->createNodePoolRequest->nodePool->management = new NodeManagement();
    $request->createNodePoolRequest->nodePool->management->autoRepair = false;
    $request->createNodePoolRequest->nodePool->management->autoUpgrade = false;
    $request->createNodePoolRequest->nodePool->management->upgradeOptions = new AutoUpgradeOptions();
    $request->createNodePoolRequest->nodePool->management->upgradeOptions->autoUpgradeStartTime = 'ipsa';
    $request->createNodePoolRequest->nodePool->management->upgradeOptions->description = 'iure';
    $request->createNodePoolRequest->nodePool->maxPodsConstraint = new MaxPodsConstraint();
    $request->createNodePoolRequest->nodePool->maxPodsConstraint->maxPodsPerNode = 'odio';
    $request->createNodePoolRequest->nodePool->name = 'Sophia Predovic';
    $request->createNodePoolRequest->nodePool->networkConfig = new NodeNetworkConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->createPodRange = false;
    $request->createNodePoolRequest->nodePool->networkConfig->enablePrivateNodes = false;
    $request->createNodePoolRequest->nodePool->networkConfig->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::TIER1;
    $request->createNodePoolRequest->nodePool->networkConfig->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->networkConfig->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->podCidrOverprovisionConfig->disable = false;
    $request->createNodePoolRequest->nodePool->networkConfig->podIpv4CidrBlock = 'atque';
    $request->createNodePoolRequest->nodePool->networkConfig->podRange = 'sit';
    $request->createNodePoolRequest->nodePool->placementPolicy = new PlacementPolicy();
    $request->createNodePoolRequest->nodePool->placementPolicy->type = PlacementPolicyTypeEnum::COMPACT;
    $request->createNodePoolRequest->nodePool->podIpv4CidrSize = 67249;
    $request->createNodePoolRequest->nodePool->selfLink = 'soluta';
    $request->createNodePoolRequest->nodePool->status = NodePoolStatusEnum::RECONCILING;
    $request->createNodePoolRequest->nodePool->statusMessage = 'iusto';
    $request->createNodePoolRequest->nodePool->updateInfo = new UpdateInfo();
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo = new BlueGreenInfo();
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->blueInstanceGroupUrls = [
        'dolorum',
        'deleniti',
    ];
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->bluePoolDeletionStartTime = 'omnis';
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->greenInstanceGroupUrls = [
        'distinctio',
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->greenPoolVersion = 'voluptate';
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->phase = BlueGreenInfoPhaseEnum::NODE_POOL_SOAKING;
    $request->createNodePoolRequest->nodePool->upgradeSettings = new UpgradeSettings();
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'saepe';
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 263322;
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 1372.2;
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'perferendis';
    $request->createNodePoolRequest->nodePool->upgradeSettings->maxSurge = 229219;
    $request->createNodePoolRequest->nodePool->upgradeSettings->maxUnavailable = 758379;
    $request->createNodePoolRequest->nodePool->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::SURGE;
    $request->createNodePoolRequest->nodePool->version = 'ad';
    $request->createNodePoolRequest->parent = 'saepe';
    $request->createNodePoolRequest->projectId = 'suscipit';
    $request->createNodePoolRequest->zone = 'deserunt';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->fields = 'totam';
    $request->key = 'similique';
    $request->oauthToken = 'alias';
    $request->parent = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new ContainerProjectsLocationsClustersNodePoolsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersNodePoolsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersNodePoolsDelete

Deletes a node pool from a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersNodePoolsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->clusterId = 'a';
    $request->fields = 'esse';
    $request->key = 'harum';
    $request->name = 'Tracy Schamberger';
    $request->nodePoolId = 'tempore';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->projectId = 'numquam';
    $request->quotaUser = 'enim';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'sapiente';
    $request->zone = 'totam';

    $requestSecurity = new ContainerProjectsLocationsClustersNodePoolsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersNodePoolsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersNodePoolsList

Lists the node pools for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersNodePoolsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->clusterId = 'sed';
    $request->fields = 'vel';
    $request->key = 'libero';
    $request->oauthToken = 'voluptas';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->projectId = 'quam';
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';
    $request->zone = 'cupiditate';

    $requestSecurity = new ContainerProjectsLocationsClustersNodePoolsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersNodePoolsList($request, $requestSecurity);

    if ($response->listNodePoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersNodePoolsRollback

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsRollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RollbackNodePoolUpgradeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsRollbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersNodePoolsRollbackRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->rollbackNodePoolUpgradeRequest = new RollbackNodePoolUpgradeRequest();
    $request->rollbackNodePoolUpgradeRequest->clusterId = 'pariatur';
    $request->rollbackNodePoolUpgradeRequest->name = 'Keith Padberg';
    $request->rollbackNodePoolUpgradeRequest->nodePoolId = 'aspernatur';
    $request->rollbackNodePoolUpgradeRequest->projectId = 'dolores';
    $request->rollbackNodePoolUpgradeRequest->respectPdb = false;
    $request->rollbackNodePoolUpgradeRequest->zone = 'distinctio';
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestias';
    $request->key = 'temporibus';
    $request->name = 'Gladys Considine';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ContainerProjectsLocationsClustersNodePoolsRollbackSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersNodePoolsRollback($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersNodePoolsSetAutoscaling

Sets the autoscaling settings of a specific node pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetNodePoolAutoscalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscalingLocationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsSetAutoscalingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setNodePoolAutoscalingRequest = new SetNodePoolAutoscalingRequest();
    $request->setNodePoolAutoscalingRequest->autoscaling = new NodePoolAutoscaling();
    $request->setNodePoolAutoscalingRequest->autoscaling->autoprovisioned = false;
    $request->setNodePoolAutoscalingRequest->autoscaling->enabled = false;
    $request->setNodePoolAutoscalingRequest->autoscaling->locationPolicy = NodePoolAutoscalingLocationPolicyEnum::ANY;
    $request->setNodePoolAutoscalingRequest->autoscaling->maxNodeCount = 746994;
    $request->setNodePoolAutoscalingRequest->autoscaling->minNodeCount = 748664;
    $request->setNodePoolAutoscalingRequest->autoscaling->totalMaxNodeCount = 92596;
    $request->setNodePoolAutoscalingRequest->autoscaling->totalMinNodeCount = 903720;
    $request->setNodePoolAutoscalingRequest->clusterId = 'ipsum';
    $request->setNodePoolAutoscalingRequest->name = 'Gayle Lueilwitz';
    $request->setNodePoolAutoscalingRequest->nodePoolId = 'aperiam';
    $request->setNodePoolAutoscalingRequest->projectId = 'delectus';
    $request->setNodePoolAutoscalingRequest->zone = 'dolorem';
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'dolorum';
    $request->key = 'architecto';
    $request->name = 'Margaret Luettgen MD';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new ContainerProjectsLocationsClustersNodePoolsSetAutoscalingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersNodePoolsSetAutoscaling($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersNodePoolsSetManagement

Sets the NodeManagement options for a node pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsSetManagementRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetNodePoolManagementRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodeManagement;
use \OpenAPI\OpenAPI\Models\Shared\AutoUpgradeOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsSetManagementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersNodePoolsSetManagementRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setNodePoolManagementRequest = new SetNodePoolManagementRequest();
    $request->setNodePoolManagementRequest->clusterId = 'cupiditate';
    $request->setNodePoolManagementRequest->management = new NodeManagement();
    $request->setNodePoolManagementRequest->management->autoRepair = false;
    $request->setNodePoolManagementRequest->management->autoUpgrade = false;
    $request->setNodePoolManagementRequest->management->upgradeOptions = new AutoUpgradeOptions();
    $request->setNodePoolManagementRequest->management->upgradeOptions->autoUpgradeStartTime = 'qui';
    $request->setNodePoolManagementRequest->management->upgradeOptions->description = 'quae';
    $request->setNodePoolManagementRequest->name = 'Darren McClure';
    $request->setNodePoolManagementRequest->nodePoolId = 'vero';
    $request->setNodePoolManagementRequest->projectId = 'omnis';
    $request->setNodePoolManagementRequest->zone = 'quis';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'consectetur';
    $request->key = 'vero';
    $request->name = 'Julio Weissnat';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new ContainerProjectsLocationsClustersNodePoolsSetManagementSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersNodePoolsSetManagement($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersNodePoolsSetSize

SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsSetSizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetNodePoolSizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersNodePoolsSetSizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setNodePoolSizeRequest = new SetNodePoolSizeRequest();
    $request->setNodePoolSizeRequest->clusterId = 'dolore';
    $request->setNodePoolSizeRequest->name = 'Gilberto Dickinson';
    $request->setNodePoolSizeRequest->nodeCount = 13236;
    $request->setNodePoolSizeRequest->nodePoolId = 'voluptatibus';
    $request->setNodePoolSizeRequest->projectId = 'exercitationem';
    $request->setNodePoolSizeRequest->zone = 'nulla';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'doloribus';
    $request->key = 'iusto';
    $request->name = 'Kurt Abernathy';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersNodePoolsSetSize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersNodePoolsUpdate

Updates the version and/or image type of a specific node pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNodePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialNodes;
use \OpenAPI\OpenAPI\Models\Shared\FastSocket;
use \OpenAPI\OpenAPI\Models\Shared\GcfsConfig;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNIC;
use \OpenAPI\OpenAPI\Models\Shared\NodeKubeletConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeLabels;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfigCgroupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfigVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\PodCIDROverprovisionConfig;
use \OpenAPI\OpenAPI\Models\Shared\ResourceLabels;
use \OpenAPI\OpenAPI\Models\Shared\NetworkTags;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaints;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettings;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenSettings;
use \OpenAPI\OpenAPI\Models\Shared\StandardRolloutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettingsStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfigOsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigNodeMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersNodePoolsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateNodePoolRequest = new UpdateNodePoolRequest();
    $request->updateNodePoolRequest->clusterId = 'magnam';
    $request->updateNodePoolRequest->confidentialNodes = new ConfidentialNodes();
    $request->updateNodePoolRequest->confidentialNodes->enabled = false;
    $request->updateNodePoolRequest->etag = 'ratione';
    $request->updateNodePoolRequest->fastSocket = new FastSocket();
    $request->updateNodePoolRequest->fastSocket->enabled = false;
    $request->updateNodePoolRequest->gcfsConfig = new GcfsConfig();
    $request->updateNodePoolRequest->gcfsConfig->enabled = false;
    $request->updateNodePoolRequest->gvnic = new VirtualNIC();
    $request->updateNodePoolRequest->gvnic->enabled = false;
    $request->updateNodePoolRequest->imageType = 'ex';
    $request->updateNodePoolRequest->kubeletConfig = new NodeKubeletConfig();
    $request->updateNodePoolRequest->kubeletConfig->cpuCfsQuota = false;
    $request->updateNodePoolRequest->kubeletConfig->cpuCfsQuotaPeriod = 'laudantium';
    $request->updateNodePoolRequest->kubeletConfig->cpuManagerPolicy = 'dicta';
    $request->updateNodePoolRequest->kubeletConfig->podPidsLimit = 'dolor';
    $request->updateNodePoolRequest->labels = new NodeLabels();
    $request->updateNodePoolRequest->labels->labels = [
        'quasi' => 'ex',
        'nulla' => 'excepturi',
        'voluptatibus' => 'nostrum',
        'sapiente' => 'quisquam',
    ];
    $request->updateNodePoolRequest->linuxNodeConfig = new LinuxNodeConfig();
    $request->updateNodePoolRequest->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_V2;
    $request->updateNodePoolRequest->linuxNodeConfig->sysctls = [
        'impedit' => 'corporis',
        'veniam' => 'aliquid',
    ];
    $request->updateNodePoolRequest->locations = [
        'magnam',
    ];
    $request->updateNodePoolRequest->loggingConfig = new NodePoolLoggingConfig();
    $request->updateNodePoolRequest->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->updateNodePoolRequest->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::DEFAULT;
    $request->updateNodePoolRequest->name = 'Glenn Walter';
    $request->updateNodePoolRequest->nodeNetworkConfig = new NodeNetworkConfig();
    $request->updateNodePoolRequest->nodeNetworkConfig->createPodRange = false;
    $request->updateNodePoolRequest->nodeNetworkConfig->enablePrivateNodes = false;
    $request->updateNodePoolRequest->nodeNetworkConfig->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->updateNodePoolRequest->nodeNetworkConfig->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::TIER_UNSPECIFIED;
    $request->updateNodePoolRequest->nodeNetworkConfig->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->updateNodePoolRequest->nodeNetworkConfig->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->updateNodePoolRequest->nodeNetworkConfig->podCidrOverprovisionConfig->disable = false;
    $request->updateNodePoolRequest->nodeNetworkConfig->podIpv4CidrBlock = 'libero';
    $request->updateNodePoolRequest->nodeNetworkConfig->podRange = 'aut';
    $request->updateNodePoolRequest->nodePoolId = 'aut';
    $request->updateNodePoolRequest->nodeVersion = 'deleniti';
    $request->updateNodePoolRequest->projectId = 'impedit';
    $request->updateNodePoolRequest->resourceLabels = new ResourceLabels();
    $request->updateNodePoolRequest->resourceLabels->labels = [
        'fugit' => 'accusamus',
        'inventore' => 'non',
    ];
    $request->updateNodePoolRequest->tags = new NetworkTags();
    $request->updateNodePoolRequest->tags->tags = [
        'dolorum',
    ];
    $request->updateNodePoolRequest->taints = new NodeTaints();
    $request->updateNodePoolRequest->taints->taints = [
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->updateNodePoolRequest->upgradeSettings = new UpgradeSettings();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'placeat';
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 245367;
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 4321.48;
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'autem';
    $request->updateNodePoolRequest->upgradeSettings->maxSurge = 752135;
    $request->updateNodePoolRequest->upgradeSettings->maxUnavailable = 557369;
    $request->updateNodePoolRequest->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::SURGE;
    $request->updateNodePoolRequest->windowsNodeConfig = new WindowsNodeConfig();
    $request->updateNodePoolRequest->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_LTSC2022;
    $request->updateNodePoolRequest->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->updateNodePoolRequest->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::GCE_METADATA;
    $request->updateNodePoolRequest->workloadMetadataConfig->nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum::EXPOSE;
    $request->updateNodePoolRequest->zone = 'quasi';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'provident';
    $request->key = 'ipsa';
    $request->name = 'Megan Kuhlman';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'reprehenderit';

    $requestSecurity = new ContainerProjectsLocationsClustersNodePoolsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersNodePoolsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersSetAddons

Sets the addons for a specific cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetAddonsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetAddonsConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddonsConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfigLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigConnectorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DnsCacheConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcePersistentDiskCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcpFilestoreCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsFuseCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeBackupAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\HttpLoadBalancing;
use \OpenAPI\OpenAPI\Models\Shared\IstioConfig;
use \OpenAPI\OpenAPI\Models\Shared\IstioConfigAuthEnum;
use \OpenAPI\OpenAPI\Models\Shared\KalmConfig;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesDashboard;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetAddonsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersSetAddonsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setAddonsConfigRequest = new SetAddonsConfigRequest();
    $request->setAddonsConfigRequest->addonsConfig = new AddonsConfig();
    $request->setAddonsConfigRequest->addonsConfig->cloudRunConfig = new CloudRunConfig();
    $request->setAddonsConfigRequest->addonsConfig->cloudRunConfig->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->cloudRunConfig->loadBalancerType = CloudRunConfigLoadBalancerTypeEnum::LOAD_BALANCER_TYPE_INTERNAL;
    $request->setAddonsConfigRequest->addonsConfig->configConnectorConfig = new ConfigConnectorConfig();
    $request->setAddonsConfigRequest->addonsConfig->configConnectorConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->dnsCacheConfig = new DnsCacheConfig();
    $request->setAddonsConfigRequest->addonsConfig->dnsCacheConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig();
    $request->setAddonsConfigRequest->addonsConfig->gcePersistentDiskCsiDriverConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig();
    $request->setAddonsConfigRequest->addonsConfig->gcpFilestoreCsiDriverConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gcsFuseCsiDriverConfig = new GcsFuseCsiDriverConfig();
    $request->setAddonsConfigRequest->addonsConfig->gcsFuseCsiDriverConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gkeBackupAgentConfig = new GkeBackupAgentConfig();
    $request->setAddonsConfigRequest->addonsConfig->gkeBackupAgentConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->horizontalPodAutoscaling = new HorizontalPodAutoscaling();
    $request->setAddonsConfigRequest->addonsConfig->horizontalPodAutoscaling->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->httpLoadBalancing = new HttpLoadBalancing();
    $request->setAddonsConfigRequest->addonsConfig->httpLoadBalancing->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->istioConfig = new IstioConfig();
    $request->setAddonsConfigRequest->addonsConfig->istioConfig->auth = IstioConfigAuthEnum::AUTH_NONE;
    $request->setAddonsConfigRequest->addonsConfig->istioConfig->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->kalmConfig = new KalmConfig();
    $request->setAddonsConfigRequest->addonsConfig->kalmConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->kubernetesDashboard = new KubernetesDashboard();
    $request->setAddonsConfigRequest->addonsConfig->kubernetesDashboard->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->networkPolicyConfig = new NetworkPolicyConfig();
    $request->setAddonsConfigRequest->addonsConfig->networkPolicyConfig->disabled = false;
    $request->setAddonsConfigRequest->clusterId = 'eum';
    $request->setAddonsConfigRequest->name = 'Angelina Davis';
    $request->setAddonsConfigRequest->projectId = 'veritatis';
    $request->setAddonsConfigRequest->zone = 'ipsa';
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->name = 'Wilbur Gerlach';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new ContainerProjectsLocationsClustersSetAddonsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersSetAddons($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersSetLegacyAbac

Enables or disables the ABAC authorization mechanism on a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetLegacyAbacRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetLegacyAbacRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetLegacyAbacSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersSetLegacyAbacRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setLegacyAbacRequest = new SetLegacyAbacRequest();
    $request->setLegacyAbacRequest->clusterId = 'ipsam';
    $request->setLegacyAbacRequest->enabled = false;
    $request->setLegacyAbacRequest->name = 'Emily Satterfield';
    $request->setLegacyAbacRequest->projectId = 'aperiam';
    $request->setLegacyAbacRequest->zone = 'distinctio';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'inventore';
    $request->fields = 'nihil';
    $request->key = 'totam';
    $request->name = 'Tom Kuhn';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new ContainerProjectsLocationsClustersSetLegacyAbacSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersSetLegacyAbac($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersSetLocations

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetLocationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersSetLocationsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setLocationsRequest = new SetLocationsRequest();
    $request->setLocationsRequest->clusterId = 'porro';
    $request->setLocationsRequest->locations = [
        'quas',
        'praesentium',
    ];
    $request->setLocationsRequest->name = 'Cassandra Considine';
    $request->setLocationsRequest->projectId = 'incidunt';
    $request->setLocationsRequest->zone = 'atque';
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nisi';
    $request->fields = 'fugit';
    $request->key = 'sapiente';
    $request->name = 'Norma Christiansen';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'eveniet';

    $requestSecurity = new ContainerProjectsLocationsClustersSetLocationsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersSetLocations($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersSetLogging

Sets the logging service for a specific cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetLoggingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetLoggingServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetLoggingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersSetLoggingRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setLoggingServiceRequest = new SetLoggingServiceRequest();
    $request->setLoggingServiceRequest->clusterId = 'veritatis';
    $request->setLoggingServiceRequest->loggingService = 'esse';
    $request->setLoggingServiceRequest->name = 'Marco Terry PhD';
    $request->setLoggingServiceRequest->projectId = 'vel';
    $request->setLoggingServiceRequest->zone = 'harum';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->fields = 'minima';
    $request->key = 'distinctio';
    $request->name = 'Mark Nicolas';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new ContainerProjectsLocationsClustersSetLoggingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersSetLogging($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersSetMaintenancePolicy

Sets the maintenance policy for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetMaintenancePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetMaintenancePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenancePolicy;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\DailyMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\TimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceExclusionOptions;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceExclusionOptionsScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecurringTimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetMaintenancePolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersSetMaintenancePolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setMaintenancePolicyRequest = new SetMaintenancePolicyRequest();
    $request->setMaintenancePolicyRequest->clusterId = 'sapiente';
    $request->setMaintenancePolicyRequest->maintenancePolicy = new MaintenancePolicy();
    $request->setMaintenancePolicyRequest->maintenancePolicy->resourceVersion = 'consectetur';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window = new MaintenanceWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->dailyMaintenanceWindow = new DailyMaintenanceWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->dailyMaintenanceWindow->duration = 'esse';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->dailyMaintenanceWindow->startTime = 'blanditiis';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->maintenanceExclusions = [
        'a' => new TimeWindow(),
        'nulla' => new TimeWindow(),
        'quas' => new TimeWindow(),
    ];
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow = new RecurringTimeWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->recurrence = 'esse';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window = new TimeWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->endTime = 'quasi';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions = new MaintenanceExclusionOptions();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions->scope = MaintenanceExclusionOptionsScopeEnum::NO_MINOR_OR_NODE_UPGRADES;
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->startTime = 'error';
    $request->setMaintenancePolicyRequest->name = 'Jody Schuster';
    $request->setMaintenancePolicyRequest->projectId = 'asperiores';
    $request->setMaintenancePolicyRequest->zone = 'facere';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'similique';
    $request->key = 'culpa';
    $request->name = 'Mandy Berge';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new ContainerProjectsLocationsClustersSetMaintenancePolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersSetMaintenancePolicy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersSetMasterAuth

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetMasterAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetMasterAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetMasterAuthRequestActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\MasterAuth;
use \OpenAPI\OpenAPI\Models\Shared\ClientCertificateConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetMasterAuthSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersSetMasterAuthRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setMasterAuthRequest = new SetMasterAuthRequest();
    $request->setMasterAuthRequest->action = SetMasterAuthRequestActionEnum::UNKNOWN;
    $request->setMasterAuthRequest->clusterId = 'aliquam';
    $request->setMasterAuthRequest->name = 'Samuel Hermiston';
    $request->setMasterAuthRequest->projectId = 'nisi';
    $request->setMasterAuthRequest->update = new MasterAuth();
    $request->setMasterAuthRequest->update->clientCertificate = 'aut';
    $request->setMasterAuthRequest->update->clientCertificateConfig = new ClientCertificateConfig();
    $request->setMasterAuthRequest->update->clientCertificateConfig->issueClientCertificate = false;
    $request->setMasterAuthRequest->update->clientKey = 'voluptatum';
    $request->setMasterAuthRequest->update->clusterCaCertificate = 'qui';
    $request->setMasterAuthRequest->update->password = 'quibusdam';
    $request->setMasterAuthRequest->update->username = 'Greta_Leuschke9';
    $request->setMasterAuthRequest->zone = 'omnis';
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'et';
    $request->key = 'voluptate';
    $request->name = 'Joann Bogan';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new ContainerProjectsLocationsClustersSetMasterAuthSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersSetMasterAuth($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersSetMonitoring

Sets the monitoring service for a specific cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetMonitoringRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetMonitoringServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetMonitoringSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersSetMonitoringRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setMonitoringServiceRequest = new SetMonitoringServiceRequest();
    $request->setMonitoringServiceRequest->clusterId = 'laudantium';
    $request->setMonitoringServiceRequest->monitoringService = 'eum';
    $request->setMonitoringServiceRequest->name = 'Andrew Little I';
    $request->setMonitoringServiceRequest->projectId = 'occaecati';
    $request->setMonitoringServiceRequest->zone = 'numquam';
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->fields = 'aut';
    $request->key = 'dignissimos';
    $request->name = 'Elisa Mosciski';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new ContainerProjectsLocationsClustersSetMonitoringSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersSetMonitoring($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersSetNetworkPolicy

Enables or disables Network Policy for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetNetworkPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetNetworkPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicy;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicyProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetNetworkPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersSetNetworkPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setNetworkPolicyRequest = new SetNetworkPolicyRequest();
    $request->setNetworkPolicyRequest->clusterId = 'consequuntur';
    $request->setNetworkPolicyRequest->name = 'Luke Schoen';
    $request->setNetworkPolicyRequest->networkPolicy = new NetworkPolicy();
    $request->setNetworkPolicyRequest->networkPolicy->enabled = false;
    $request->setNetworkPolicyRequest->networkPolicy->provider = NetworkPolicyProviderEnum::CALICO;
    $request->setNetworkPolicyRequest->projectId = 'nemo';
    $request->setNetworkPolicyRequest->zone = 'quae';
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'labore';
    $request->key = 'ab';
    $request->name = 'Kristine Ondricka';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new ContainerProjectsLocationsClustersSetNetworkPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersSetNetworkPolicy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersSetResourceLabels

Sets labels on a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetResourceLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetResourceLabelsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersSetResourceLabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setLabelsRequest = new SetLabelsRequest();
    $request->setLabelsRequest->clusterId = 'vel';
    $request->setLabelsRequest->labelFingerprint = 'ducimus';
    $request->setLabelsRequest->name = 'Cecil Grant';
    $request->setLabelsRequest->projectId = 'cum';
    $request->setLabelsRequest->resourceLabels = [
        'in' => 'corporis',
        'reiciendis' => 'assumenda',
    ];
    $request->setLabelsRequest->zone = 'nemo';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'cum';
    $request->key = 'consectetur';
    $request->name = 'Annette Wehner';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new ContainerProjectsLocationsClustersSetResourceLabelsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersSetResourceLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersStartIpRotation

Starts master IP rotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersStartIpRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartIPRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersStartIpRotationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersStartIpRotationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->startIPRotationRequest = new StartIPRotationRequest();
    $request->startIPRotationRequest->clusterId = 'necessitatibus';
    $request->startIPRotationRequest->name = 'Katherine Zemlak';
    $request->startIPRotationRequest->projectId = 'amet';
    $request->startIPRotationRequest->rotateCredentials = false;
    $request->startIPRotationRequest->zone = 'beatae';
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'consectetur';
    $request->key = 'corporis';
    $request->name = 'Rick Beer';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new ContainerProjectsLocationsClustersStartIpRotationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersStartIpRotation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersUpdateMaster

Updates the master for a specific cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersUpdateMasterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMasterRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersUpdateMasterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersUpdateMasterRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->updateMasterRequest = new UpdateMasterRequest();
    $request->updateMasterRequest->clusterId = 'voluptas';
    $request->updateMasterRequest->masterVersion = 'voluptas';
    $request->updateMasterRequest->name = 'Cathy Rohan';
    $request->updateMasterRequest->projectId = 'minus';
    $request->updateMasterRequest->zone = 'dolores';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'aliquam';
    $request->key = 'officiis';
    $request->name = 'Dustin Ferry';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new ContainerProjectsLocationsClustersUpdateMasterSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsClustersUpdateMaster($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsClustersWellKnownGetOpenidConfiguration

Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'exercitationem';
    $request->key = 'nobis';
    $request->oauthToken = 'sit';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'explicabo';

    $response = $sdk->projects->containerProjectsLocationsClustersWellKnownGetOpenidConfiguration($request);

    if ($response->getOpenIDConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsGetServerConfig

Returns configuration info about the Google Kubernetes Engine service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsGetServerConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsGetServerConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsGetServerConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'ab';
    $request->key = 'iste';
    $request->name = 'Janie Cremin';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->projectId = 'explicabo';
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'architecto';
    $request->zone = 'suscipit';

    $requestSecurity = new ContainerProjectsLocationsGetServerConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsGetServerConfig($request, $requestSecurity);

    if ($response->serverConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsList

Fetches locations that offer Google Kubernetes Engine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'perferendis';
    $request->key = 'corrupti';
    $request->oauthToken = 'maiores';
    $request->parent = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new ContainerProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsOperationsCancel

Cancels the specified operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CancelOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->cancelOperationRequest = new CancelOperationRequest();
    $request->cancelOperationRequest->name = 'Rosemary McClure';
    $request->cancelOperationRequest->operationId = 'tempora';
    $request->cancelOperationRequest->projectId = 'tempora';
    $request->cancelOperationRequest->zone = 'voluptate';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'non';
    $request->key = 'officiis';
    $request->name = 'Malcolm Hagenes';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new ContainerProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsOperationsGet

Gets the specified operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'reiciendis';
    $request->key = 'nulla';
    $request->name = 'Deborah Turcotte';
    $request->oauthToken = 'in';
    $request->operationId = 'officiis';
    $request->prettyPrint = false;
    $request->projectId = 'beatae';
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'praesentium';
    $request->zone = 'cum';

    $requestSecurity = new ContainerProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsLocationsOperationsList

Lists all operations in a project in the specified zone or all zones.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'hic';
    $request->key = 'expedita';
    $request->oauthToken = 'debitis';
    $request->parent = 'neque';
    $request->prettyPrint = false;
    $request->projectId = 'dolorum';
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'dolorum';
    $request->zone = 'corrupti';

    $requestSecurity = new ContainerProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersAddons

Sets the addons for a specific cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersAddonsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetAddonsConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddonsConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfigLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigConnectorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DnsCacheConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcePersistentDiskCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcpFilestoreCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsFuseCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeBackupAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\HttpLoadBalancing;
use \OpenAPI\OpenAPI\Models\Shared\IstioConfig;
use \OpenAPI\OpenAPI\Models\Shared\IstioConfigAuthEnum;
use \OpenAPI\OpenAPI\Models\Shared\KalmConfig;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesDashboard;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersAddonsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersAddonsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setAddonsConfigRequest = new SetAddonsConfigRequest();
    $request->setAddonsConfigRequest->addonsConfig = new AddonsConfig();
    $request->setAddonsConfigRequest->addonsConfig->cloudRunConfig = new CloudRunConfig();
    $request->setAddonsConfigRequest->addonsConfig->cloudRunConfig->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->cloudRunConfig->loadBalancerType = CloudRunConfigLoadBalancerTypeEnum::LOAD_BALANCER_TYPE_UNSPECIFIED;
    $request->setAddonsConfigRequest->addonsConfig->configConnectorConfig = new ConfigConnectorConfig();
    $request->setAddonsConfigRequest->addonsConfig->configConnectorConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->dnsCacheConfig = new DnsCacheConfig();
    $request->setAddonsConfigRequest->addonsConfig->dnsCacheConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig();
    $request->setAddonsConfigRequest->addonsConfig->gcePersistentDiskCsiDriverConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig();
    $request->setAddonsConfigRequest->addonsConfig->gcpFilestoreCsiDriverConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gcsFuseCsiDriverConfig = new GcsFuseCsiDriverConfig();
    $request->setAddonsConfigRequest->addonsConfig->gcsFuseCsiDriverConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gkeBackupAgentConfig = new GkeBackupAgentConfig();
    $request->setAddonsConfigRequest->addonsConfig->gkeBackupAgentConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->horizontalPodAutoscaling = new HorizontalPodAutoscaling();
    $request->setAddonsConfigRequest->addonsConfig->horizontalPodAutoscaling->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->httpLoadBalancing = new HttpLoadBalancing();
    $request->setAddonsConfigRequest->addonsConfig->httpLoadBalancing->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->istioConfig = new IstioConfig();
    $request->setAddonsConfigRequest->addonsConfig->istioConfig->auth = IstioConfigAuthEnum::AUTH_MUTUAL_TLS;
    $request->setAddonsConfigRequest->addonsConfig->istioConfig->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->kalmConfig = new KalmConfig();
    $request->setAddonsConfigRequest->addonsConfig->kalmConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->kubernetesDashboard = new KubernetesDashboard();
    $request->setAddonsConfigRequest->addonsConfig->kubernetesDashboard->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->networkPolicyConfig = new NetworkPolicyConfig();
    $request->setAddonsConfigRequest->addonsConfig->networkPolicyConfig->disabled = false;
    $request->setAddonsConfigRequest->clusterId = 'fugit';
    $request->setAddonsConfigRequest->name = 'Janis Bartell';
    $request->setAddonsConfigRequest->projectId = 'magnam';
    $request->setAddonsConfigRequest->zone = 'consequatur';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->clusterId = 'voluptatum';
    $request->fields = 'quas';
    $request->key = 'repudiandae';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->projectId = 'et';
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'sed';
    $request->zone = 'sit';

    $requestSecurity = new ContainerProjectsZonesClustersAddonsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersAddons($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersCompleteIpRotation

Completes master IP rotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersCompleteIpRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompleteIPRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersCompleteIpRotationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersCompleteIpRotationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->completeIPRotationRequest = new CompleteIPRotationRequest();
    $request->completeIPRotationRequest->clusterId = 'nostrum';
    $request->completeIPRotationRequest->name = 'Evan Altenwerth';
    $request->completeIPRotationRequest->projectId = 'dolorem';
    $request->completeIPRotationRequest->zone = 'harum';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->clusterId = 'labore';
    $request->fields = 'quidem';
    $request->key = 'atque';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->projectId = 'nam';
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'alias';
    $request->zone = 'amet';

    $requestSecurity = new ContainerProjectsZonesClustersCompleteIpRotationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersCompleteIpRotation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersCreate

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateClusterRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\AddonsConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfigLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigConnectorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DnsCacheConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcePersistentDiskCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcpFilestoreCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsFuseCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeBackupAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\HttpLoadBalancing;
use \OpenAPI\OpenAPI\Models\Shared\IstioConfig;
use \OpenAPI\OpenAPI\Models\Shared\IstioConfigAuthEnum;
use \OpenAPI\OpenAPI\Models\Shared\KalmConfig;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesDashboard;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticatorGroupsConfig;
use \OpenAPI\OpenAPI\Models\Shared\Autopilot;
use \OpenAPI\OpenAPI\Models\Shared\ClusterAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\AutoprovisioningNodePoolDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodeManagement;
use \OpenAPI\OpenAPI\Models\Shared\AutoUpgradeOptions;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettings;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenSettings;
use \OpenAPI\OpenAPI\Models\Shared\StandardRolloutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettingsStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterAutoscalingAutoscalingProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceLimit;
use \OpenAPI\OpenAPI\Models\Shared\BinaryAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\BinaryAuthorizationEvaluationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterTelemetry;
use \OpenAPI\OpenAPI\Models\Shared\ClusterTelemetryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusCondition;
use \OpenAPI\OpenAPI\Models\Shared\StatusConditionCanonicalCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusConditionCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialNodes;
use \OpenAPI\OpenAPI\Models\Shared\CostManagementConfig;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseEncryption;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseEncryptionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaxPodsConstraint;
use \OpenAPI\OpenAPI\Models\Shared\Fleet;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\IPAllocationPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalPodRangesConfig;
use \OpenAPI\OpenAPI\Models\Shared\IPAllocationPolicyIpv6AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PodCIDROverprovisionConfig;
use \OpenAPI\OpenAPI\Models\Shared\IPAllocationPolicyStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LegacyAbac;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingComponentConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingComponentConfigEnableComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaintenancePolicy;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\DailyMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\TimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceExclusionOptions;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceExclusionOptionsScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecurringTimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\MasterAuth;
use \OpenAPI\OpenAPI\Models\Shared\ClientCertificateConfig;
use \OpenAPI\OpenAPI\Models\Shared\MasterAuthorizedNetworksConfig;
use \OpenAPI\OpenAPI\Models\Shared\CidrBlock;
use \OpenAPI\OpenAPI\Models\Shared\MeshCertificates;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringComponentConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringComponentConfigEnableComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedPrometheusConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigDatapathProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultSnatStatus;
use \OpenAPI\OpenAPI\Models\Shared\DNSConfig;
use \OpenAPI\OpenAPI\Models\Shared\DNSConfigClusterDNSEnum;
use \OpenAPI\OpenAPI\Models\Shared\DNSConfigClusterDNSScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewayAPIConfig;
use \OpenAPI\OpenAPI\Models\Shared\GatewayAPIConfigChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceExternalIPsConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicy;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicyProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GPUSharingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GPUSharingConfigGPUSharingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedMachineFeatures;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorageLocalSsdConfig;
use \OpenAPI\OpenAPI\Models\Shared\FastSocket;
use \OpenAPI\OpenAPI\Models\Shared\GcfsConfig;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNIC;
use \OpenAPI\OpenAPI\Models\Shared\NodeKubeletConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfigCgroupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalNvmeSsdBlockConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfigVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SandboxConfig;
use \OpenAPI\OpenAPI\Models\Shared\SandboxConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfigOsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigNodeMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkTags;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfigDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodePool;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscalingLocationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInfo;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenInfo;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenInfoPhaseEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\PubSub;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PodSecurityPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterMasterGlobalAccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProtectConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadConfigAuditModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectConfigWorkloadVulnerabilityModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannel;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannelChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUsageExportConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\ConsumptionMeteringConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedNodes;
use \OpenAPI\OpenAPI\Models\Shared\ClusterStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TpuConfig;
use \OpenAPI\OpenAPI\Models\Shared\VerticalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadALTSConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadCertificates;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadIdentityConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createClusterRequestInput = new CreateClusterRequestInput();
    $request->createClusterRequestInput->cluster = new ClusterInput();
    $request->createClusterRequestInput->cluster->addonsConfig = new AddonsConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->cloudRunConfig = new CloudRunConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->cloudRunConfig->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->cloudRunConfig->loadBalancerType = CloudRunConfigLoadBalancerTypeEnum::LOAD_BALANCER_TYPE_EXTERNAL;
    $request->createClusterRequestInput->cluster->addonsConfig->configConnectorConfig = new ConfigConnectorConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->configConnectorConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->dnsCacheConfig = new DnsCacheConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->dnsCacheConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gcePersistentDiskCsiDriverConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gcpFilestoreCsiDriverConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gcsFuseCsiDriverConfig = new GcsFuseCsiDriverConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gcsFuseCsiDriverConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gkeBackupAgentConfig = new GkeBackupAgentConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gkeBackupAgentConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->horizontalPodAutoscaling = new HorizontalPodAutoscaling();
    $request->createClusterRequestInput->cluster->addonsConfig->horizontalPodAutoscaling->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->httpLoadBalancing = new HttpLoadBalancing();
    $request->createClusterRequestInput->cluster->addonsConfig->httpLoadBalancing->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->istioConfig = new IstioConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->istioConfig->auth = IstioConfigAuthEnum::AUTH_MUTUAL_TLS;
    $request->createClusterRequestInput->cluster->addonsConfig->istioConfig->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->kalmConfig = new KalmConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->kalmConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->kubernetesDashboard = new KubernetesDashboard();
    $request->createClusterRequestInput->cluster->addonsConfig->kubernetesDashboard->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->networkPolicyConfig = new NetworkPolicyConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->networkPolicyConfig->disabled = false;
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig = new AuthenticatorGroupsConfig();
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig->securityGroup = 'reiciendis';
    $request->createClusterRequestInput->cluster->autopilot = new Autopilot();
    $request->createClusterRequestInput->cluster->autopilot->enabled = false;
    $request->createClusterRequestInput->cluster->autoscaling = new ClusterAutoscaling();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningLocations = [
        'repellendus',
        'delectus',
        'voluptates',
    ];
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->bootDiskKmsKey = 'perferendis';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->diskSizeGb = 667285;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->diskType = 'quidem';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->imageType = 'reprehenderit';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management = new NodeManagement();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->autoRepair = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->autoUpgrade = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions = new AutoUpgradeOptions();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->autoUpgradeStartTime = 'facere';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->description = 'fuga';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->minCpuPlatform = 'praesentium';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->oauthScopes = [
        'veniam',
        'voluptatem',
        'quisquam',
    ];
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->serviceAccount = 'repudiandae';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings = new UpgradeSettings();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'quasi';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 542457;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 4420.36;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'asperiores';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->maxSurge = 519952;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->maxUnavailable = 383103;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::SURGE;
    $request->createClusterRequestInput->cluster->autoscaling->autoscalingProfile = ClusterAutoscalingAutoscalingProfileEnum::BALANCED;
    $request->createClusterRequestInput->cluster->autoscaling->enableNodeAutoprovisioning = false;
    $request->createClusterRequestInput->cluster->autoscaling->resourceLimits = [
        new ResourceLimit(),
    ];
    $request->createClusterRequestInput->cluster->binaryAuthorization = new BinaryAuthorization();
    $request->createClusterRequestInput->cluster->binaryAuthorization->enabled = false;
    $request->createClusterRequestInput->cluster->binaryAuthorization->evaluationMode = BinaryAuthorizationEvaluationModeEnum::DISABLED;
    $request->createClusterRequestInput->cluster->clusterIpv4Cidr = 'amet';
    $request->createClusterRequestInput->cluster->clusterTelemetry = new ClusterTelemetry();
    $request->createClusterRequestInput->cluster->clusterTelemetry->type = ClusterTelemetryTypeEnum::SYSTEM_ONLY;
    $request->createClusterRequestInput->cluster->conditions = [
        new StatusCondition(),
        new StatusCondition(),
    ];
    $request->createClusterRequestInput->cluster->confidentialNodes = new ConfidentialNodes();
    $request->createClusterRequestInput->cluster->confidentialNodes->enabled = false;
    $request->createClusterRequestInput->cluster->costManagementConfig = new CostManagementConfig();
    $request->createClusterRequestInput->cluster->costManagementConfig->enabled = false;
    $request->createClusterRequestInput->cluster->createTime = 'atque';
    $request->createClusterRequestInput->cluster->currentMasterVersion = 'error';
    $request->createClusterRequestInput->cluster->currentNodeCount = 887265;
    $request->createClusterRequestInput->cluster->currentNodeVersion = 'officiis';
    $request->createClusterRequestInput->cluster->databaseEncryption = new DatabaseEncryption();
    $request->createClusterRequestInput->cluster->databaseEncryption->keyName = 'accusamus';
    $request->createClusterRequestInput->cluster->databaseEncryption->state = DatabaseEncryptionStateEnum::ENCRYPTED;
    $request->createClusterRequestInput->cluster->defaultMaxPodsConstraint = new MaxPodsConstraint();
    $request->createClusterRequestInput->cluster->defaultMaxPodsConstraint->maxPodsPerNode = 'minima';
    $request->createClusterRequestInput->cluster->description = 'aspernatur';
    $request->createClusterRequestInput->cluster->enableKubernetesAlpha = false;
    $request->createClusterRequestInput->cluster->enableTpu = false;
    $request->createClusterRequestInput->cluster->endpoint = 'ex';
    $request->createClusterRequestInput->cluster->etag = 'maiores';
    $request->createClusterRequestInput->cluster->expireTime = 'corrupti';
    $request->createClusterRequestInput->cluster->fleet = new Fleet();
    $request->createClusterRequestInput->cluster->fleet->membership = 'at';
    $request->createClusterRequestInput->cluster->fleet->preRegistered = false;
    $request->createClusterRequestInput->cluster->fleet->project = 'error';
    $request->createClusterRequestInput->cluster->identityServiceConfig = new IdentityServiceConfig();
    $request->createClusterRequestInput->cluster->identityServiceConfig->enabled = false;
    $request->createClusterRequestInput->cluster->initialClusterVersion = 'blanditiis';
    $request->createClusterRequestInput->cluster->initialNodeCount = 379356;
    $request->createClusterRequestInput->cluster->instanceGroupUrls = [
        'atque',
        'atque',
        'sunt',
        'recusandae',
    ];
    $request->createClusterRequestInput->cluster->ipAllocationPolicy = new IPAllocationPolicyInput();
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->additionalPodRangesConfig = new AdditionalPodRangesConfig();
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->additionalPodRangesConfig->podRangeNames = [
        'repellendus',
        'labore',
        'reiciendis',
    ];
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->allowRouteOverlap = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->clusterIpv4Cidr = 'doloremque';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->clusterIpv4CidrBlock = 'repudiandae';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->clusterSecondaryRangeName = 'dicta';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->createSubnetwork = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->ipv6AccessType = IPAllocationPolicyIpv6AccessTypeEnum::IPV6_ACCESS_TYPE_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->nodeIpv4Cidr = 'beatae';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->nodeIpv4CidrBlock = 'dolores';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->podCidrOverprovisionConfig->disable = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->servicesIpv4Cidr = 'enim';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->servicesIpv4CidrBlock = 'laboriosam';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->servicesSecondaryRangeName = 'velit';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->stackType = IPAllocationPolicyStackTypeEnum::IPV4_IPV6;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->subnetworkName = 'molestias';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->tpuIpv4CidrBlock = 'magnam';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->useIpAliases = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->useRoutes = false;
    $request->createClusterRequestInput->cluster->labelFingerprint = 'saepe';
    $request->createClusterRequestInput->cluster->legacyAbac = new LegacyAbac();
    $request->createClusterRequestInput->cluster->legacyAbac->enabled = false;
    $request->createClusterRequestInput->cluster->location = 'consequuntur';
    $request->createClusterRequestInput->cluster->locations = [
        'officiis',
        'perspiciatis',
        'in',
    ];
    $request->createClusterRequestInput->cluster->loggingConfig = new LoggingConfig();
    $request->createClusterRequestInput->cluster->loggingConfig->componentConfig = new LoggingComponentConfig();
    $request->createClusterRequestInput->cluster->loggingConfig->componentConfig->enableComponents = [
        LoggingComponentConfigEnableComponentsEnum::CONTROLLER_MANAGER,
    ];
    $request->createClusterRequestInput->cluster->loggingService = 'occaecati';
    $request->createClusterRequestInput->cluster->maintenancePolicy = new MaintenancePolicy();
    $request->createClusterRequestInput->cluster->maintenancePolicy->resourceVersion = 'consequuntur';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window = new MaintenanceWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->dailyMaintenanceWindow = new DailyMaintenanceWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->dailyMaintenanceWindow->duration = 'fugit';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->dailyMaintenanceWindow->startTime = 'id';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->maintenanceExclusions = [
        'reprehenderit' => new TimeWindow(),
        'error' => new TimeWindow(),
    ];
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow = new RecurringTimeWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->recurrence = 'illo';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window = new TimeWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->endTime = 'corporis';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions = new MaintenanceExclusionOptions();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions->scope = MaintenanceExclusionOptionsScopeEnum::NO_MINOR_OR_NODE_UPGRADES;
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->startTime = 'eveniet';
    $request->createClusterRequestInput->cluster->master = [
        'vero' => 'doloremque',
    ];
    $request->createClusterRequestInput->cluster->masterAuth = new MasterAuth();
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificate = 'iure';
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificateConfig = new ClientCertificateConfig();
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificateConfig->issueClientCertificate = false;
    $request->createClusterRequestInput->cluster->masterAuth->clientKey = 'ipsa';
    $request->createClusterRequestInput->cluster->masterAuth->clusterCaCertificate = 'totam';
    $request->createClusterRequestInput->cluster->masterAuth->password = 'quae';
    $request->createClusterRequestInput->cluster->masterAuth->username = 'Jarred73';
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
        new CidrBlock(),
    ];
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->enabled = false;
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->gcpPublicCidrsAccessEnabled = false;
    $request->createClusterRequestInput->cluster->masterIpv4CidrBlock = 'necessitatibus';
    $request->createClusterRequestInput->cluster->meshCertificates = new MeshCertificates();
    $request->createClusterRequestInput->cluster->meshCertificates->enableCertificates = false;
    $request->createClusterRequestInput->cluster->monitoringConfig = new MonitoringConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->componentConfig = new MonitoringComponentConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->componentConfig->enableComponents = [
        MonitoringComponentConfigEnableComponentsEnum::SCHEDULER,
    ];
    $request->createClusterRequestInput->cluster->monitoringConfig->managedPrometheusConfig = new ManagedPrometheusConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->managedPrometheusConfig->enabled = false;
    $request->createClusterRequestInput->cluster->monitoringService = 'distinctio';
    $request->createClusterRequestInput->cluster->name = 'Jordan Haag';
    $request->createClusterRequestInput->cluster->network = 'alias';
    $request->createClusterRequestInput->cluster->networkConfig = new NetworkConfig();
    $request->createClusterRequestInput->cluster->networkConfig->datapathProvider = NetworkConfigDatapathProviderEnum::LEGACY_DATAPATH;
    $request->createClusterRequestInput->cluster->networkConfig->defaultSnatStatus = new DefaultSnatStatus();
    $request->createClusterRequestInput->cluster->networkConfig->defaultSnatStatus->disabled = false;
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig = new DNSConfig();
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDns = DNSConfigClusterDNSEnum::PLATFORM_DEFAULT;
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDnsDomain = 'nihil';
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDnsScope = DNSConfigClusterDNSScopeEnum::CLUSTER_SCOPE;
    $request->createClusterRequestInput->cluster->networkConfig->enableIntraNodeVisibility = false;
    $request->createClusterRequestInput->cluster->networkConfig->enableL4ilbSubsetting = false;
    $request->createClusterRequestInput->cluster->networkConfig->gatewayApiConfig = new GatewayAPIConfig();
    $request->createClusterRequestInput->cluster->networkConfig->gatewayApiConfig->channel = GatewayAPIConfigChannelEnum::CHANNEL_DISABLED;
    $request->createClusterRequestInput->cluster->networkConfig->network = 'alias';
    $request->createClusterRequestInput->cluster->networkConfig->privateIpv6GoogleAccess = NetworkConfigPrivateIpv6GoogleAccessEnum::PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL;
    $request->createClusterRequestInput->cluster->networkConfig->serviceExternalIpsConfig = new ServiceExternalIPsConfig();
    $request->createClusterRequestInput->cluster->networkConfig->serviceExternalIpsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->networkConfig->subnetwork = 'reiciendis';
    $request->createClusterRequestInput->cluster->networkPolicy = new NetworkPolicy();
    $request->createClusterRequestInput->cluster->networkPolicy->enabled = false;
    $request->createClusterRequestInput->cluster->networkPolicy->provider = NetworkPolicyProviderEnum::PROVIDER_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig = new NodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->createClusterRequestInput->cluster->nodeConfig->advancedMachineFeatures->threadsPerCore = 'minima';
    $request->createClusterRequestInput->cluster->nodeConfig->bootDiskKmsKey = 'dolore';
    $request->createClusterRequestInput->cluster->nodeConfig->confidentialNodes = new ConfidentialNodes();
    $request->createClusterRequestInput->cluster->nodeConfig->confidentialNodes->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->diskSizeGb = 680349;
    $request->createClusterRequestInput->cluster->nodeConfig->diskType = 'nesciunt';
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageConfig = new EphemeralStorageConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageConfig->localSsdCount = 63207;
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageLocalSsdConfig->localSsdCount = 925703;
    $request->createClusterRequestInput->cluster->nodeConfig->fastSocket = new FastSocket();
    $request->createClusterRequestInput->cluster->nodeConfig->fastSocket->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->gcfsConfig = new GcfsConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->gcfsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->gvnic = new VirtualNIC();
    $request->createClusterRequestInput->cluster->nodeConfig->gvnic->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->imageType = 'omnis';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig = new NodeKubeletConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuCfsQuota = false;
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuCfsQuotaPeriod = 'quaerat';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuManagerPolicy = 'molestiae';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->podPidsLimit = 'ex';
    $request->createClusterRequestInput->cluster->nodeConfig->labels = [
        'culpa' => 'adipisci',
        'debitis' => 'laudantium',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig = new LinuxNodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_V1;
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig->sysctls = [
        'recusandae' => 'esse',
        'provident' => 'quis',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->localNvmeSsdBlockConfig->localSsdCount = 431785;
    $request->createClusterRequestInput->cluster->nodeConfig->localSsdCount = 970494;
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig = new NodePoolLoggingConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::DEFAULT;
    $request->createClusterRequestInput->cluster->nodeConfig->machineType = 'aspernatur';
    $request->createClusterRequestInput->cluster->nodeConfig->metadata = [
        'quasi' => 'animi',
        'nostrum' => 'mollitia',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->minCpuPlatform = 'provident';
    $request->createClusterRequestInput->cluster->nodeConfig->nodeGroup = 'possimus';
    $request->createClusterRequestInput->cluster->nodeConfig->oauthScopes = [
        'ex',
        'aliquid',
        'accusantium',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->preemptible = false;
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity = new ReservationAffinity();
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_RESERVATION;
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->key = 'doloribus';
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->values = [
        'in',
        'nam',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->resourceLabels = [
        'officia' => 'laborum',
        'placeat' => 'modi',
        'voluptatibus' => 'molestias',
        'officiis' => 'sapiente',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->sandboxConfig = new SandboxConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->sandboxConfig->sandboxType = 'cumque';
    $request->createClusterRequestInput->cluster->nodeConfig->sandboxConfig->type = SandboxConfigTypeEnum::UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig->serviceAccount = 'rerum';
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createClusterRequestInput->cluster->nodeConfig->spot = false;
    $request->createClusterRequestInput->cluster->nodeConfig->tags = [
        'quis',
        'inventore',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->taints = [
        new NodeTaint(),
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->windowsNodeConfig = new WindowsNodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_LTSC2022;
    $request->createClusterRequestInput->cluster->nodeConfig->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::MODE_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig->workloadMetadataConfig->nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum::UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeIpv4CidrSize = 241901;
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig = new NodePoolAutoConfig();
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig->networkTags = new NetworkTags();
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig->networkTags->tags = [
        'eum',
    ];
    $request->createClusterRequestInput->cluster->nodePoolDefaults = new NodePoolDefaults();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults = new NodeConfigDefaults();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->gcfsConfig = new GcfsConfig();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->gcfsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->loggingConfig = new NodePoolLoggingConfig();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::VARIANT_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodePools = [
        new NodePool(),
        new NodePool(),
        new NodePool(),
    ];
    $request->createClusterRequestInput->cluster->notificationConfig = new NotificationConfig();
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub = new PubSub();
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->enabled = false;
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->filter = new Filter();
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->filter->eventType = [
        FilterEventTypeEnum::SECURITY_BULLETIN_EVENT,
        FilterEventTypeEnum::EVENT_TYPE_UNSPECIFIED,
        FilterEventTypeEnum::SECURITY_BULLETIN_EVENT,
        FilterEventTypeEnum::UPGRADE_AVAILABLE_EVENT,
    ];
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->topic = 'dicta';
    $request->createClusterRequestInput->cluster->podSecurityPolicyConfig = new PodSecurityPolicyConfig();
    $request->createClusterRequestInput->cluster->podSecurityPolicyConfig->enabled = false;
    $request->createClusterRequestInput->cluster->privateCluster = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig = new PrivateClusterConfig();
    $request->createClusterRequestInput->cluster->privateClusterConfig->enablePrivateEndpoint = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->enablePrivateNodes = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig();
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterGlobalAccessConfig->enabled = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterIpv4CidrBlock = 'minima';
    $request->createClusterRequestInput->cluster->privateClusterConfig->peeringName = 'beatae';
    $request->createClusterRequestInput->cluster->privateClusterConfig->privateEndpoint = 'cupiditate';
    $request->createClusterRequestInput->cluster->privateClusterConfig->privateEndpointSubnetwork = 'provident';
    $request->createClusterRequestInput->cluster->privateClusterConfig->publicEndpoint = 'earum';
    $request->createClusterRequestInput->cluster->protectConfig = new ProtectConfig();
    $request->createClusterRequestInput->cluster->protectConfig->workloadConfig = new WorkloadConfig();
    $request->createClusterRequestInput->cluster->protectConfig->workloadConfig->auditMode = WorkloadConfigAuditModeEnum::BASELINE;
    $request->createClusterRequestInput->cluster->protectConfig->workloadVulnerabilityMode = ProtectConfigWorkloadVulnerabilityModeEnum::BASIC;
    $request->createClusterRequestInput->cluster->releaseChannel = new ReleaseChannel();
    $request->createClusterRequestInput->cluster->releaseChannel->channel = ReleaseChannelChannelEnum::STABLE;
    $request->createClusterRequestInput->cluster->resourceLabels = [
        'earum' => 'perspiciatis',
    ];
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig = new ResourceUsageExportConfig();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->bigqueryDestination = new BigQueryDestination();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->bigqueryDestination->datasetId = 'maiores';
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->consumptionMeteringConfig = new ConsumptionMeteringConfig();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->consumptionMeteringConfig->enabled = false;
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->enableNetworkEgressMetering = false;
    $request->createClusterRequestInput->cluster->selfLink = 'debitis';
    $request->createClusterRequestInput->cluster->servicesIpv4Cidr = 'aliquid';
    $request->createClusterRequestInput->cluster->shieldedNodes = new ShieldedNodes();
    $request->createClusterRequestInput->cluster->shieldedNodes->enabled = false;
    $request->createClusterRequestInput->cluster->status = ClusterStatusEnum::ERROR;
    $request->createClusterRequestInput->cluster->statusMessage = 'suscipit';
    $request->createClusterRequestInput->cluster->subnetwork = 'dolorem';
    $request->createClusterRequestInput->cluster->tpuConfig = new TpuConfig();
    $request->createClusterRequestInput->cluster->tpuConfig->enabled = false;
    $request->createClusterRequestInput->cluster->tpuConfig->ipv4CidrBlock = 'fugit';
    $request->createClusterRequestInput->cluster->tpuConfig->useServiceNetworking = false;
    $request->createClusterRequestInput->cluster->tpuIpv4CidrBlock = 'cumque';
    $request->createClusterRequestInput->cluster->verticalPodAutoscaling = new VerticalPodAutoscaling();
    $request->createClusterRequestInput->cluster->verticalPodAutoscaling->enabled = false;
    $request->createClusterRequestInput->cluster->workloadAltsConfig = new WorkloadALTSConfig();
    $request->createClusterRequestInput->cluster->workloadAltsConfig->enableAlts = false;
    $request->createClusterRequestInput->cluster->workloadCertificates = new WorkloadCertificates();
    $request->createClusterRequestInput->cluster->workloadCertificates->enableCertificates = false;
    $request->createClusterRequestInput->cluster->workloadIdentityConfig = new WorkloadIdentityConfig();
    $request->createClusterRequestInput->cluster->workloadIdentityConfig->identityNamespace = 'fuga';
    $request->createClusterRequestInput->cluster->workloadIdentityConfig->identityProvider = 'ratione';
    $request->createClusterRequestInput->cluster->workloadIdentityConfig->workloadPool = 'animi';
    $request->createClusterRequestInput->cluster->zone = 'necessitatibus';
    $request->createClusterRequestInput->parent = 'nulla';
    $request->createClusterRequestInput->projectId = 'consequatur';
    $request->createClusterRequestInput->zone = 'quasi';
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'occaecati';
    $request->key = 'suscipit';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->projectId = 'quasi';
    $request->quotaUser = 'magni';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'nulla';
    $request->zone = 'necessitatibus';

    $requestSecurity = new ContainerProjectsZonesClustersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersDelete

Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->clusterId = 'dicta';
    $request->fields = 'iusto';
    $request->key = 'esse';
    $request->name = 'Emilio Wisoky PhD';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->projectId = 'dicta';
    $request->quotaUser = 'odio';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'esse';
    $request->zone = 'ex';

    $requestSecurity = new ContainerProjectsZonesClustersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersGet

Gets the details for a specific cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->clusterId = 'sunt';
    $request->fields = 'nostrum';
    $request->key = 'fugiat';
    $request->name = 'Gene Nikolaus';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->projectId = 'eum';
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'id';
    $request->zone = 'ab';

    $requestSecurity = new ContainerProjectsZonesClustersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersGet($request, $requestSecurity);

    if ($response->cluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersLegacyAbac

Enables or disables the ABAC authorization mechanism on a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersLegacyAbacRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetLegacyAbacRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersLegacyAbacSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersLegacyAbacRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setLegacyAbacRequest = new SetLegacyAbacRequest();
    $request->setLegacyAbacRequest->clusterId = 'possimus';
    $request->setLegacyAbacRequest->enabled = false;
    $request->setLegacyAbacRequest->name = 'Shaun Osinski';
    $request->setLegacyAbacRequest->projectId = 'deleniti';
    $request->setLegacyAbacRequest->zone = 'enim';
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->clusterId = 'quo';
    $request->fields = 'ex';
    $request->key = 'ut';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->projectId = 'expedita';
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'cum';
    $request->zone = 'aliquid';

    $requestSecurity = new ContainerProjectsZonesClustersLegacyAbacSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersLegacyAbac($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersList

Lists all clusters owned by a project in either the specified zone or all zones.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'rerum';
    $request->key = 'est';
    $request->oauthToken = 'culpa';
    $request->parent = 'voluptatem';
    $request->prettyPrint = false;
    $request->projectId = 'sapiente';
    $request->quotaUser = 'officiis';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'fuga';
    $request->zone = 'pariatur';

    $requestSecurity = new ContainerProjectsZonesClustersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersList($request, $requestSecurity);

    if ($response->listClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersLocations

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersLocationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersLocationsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setLocationsRequest = new SetLocationsRequest();
    $request->setLocationsRequest->clusterId = 'voluptatem';
    $request->setLocationsRequest->locations = [
        'deleniti',
    ];
    $request->setLocationsRequest->name = 'Ruben Williamson';
    $request->setLocationsRequest->projectId = 'nemo';
    $request->setLocationsRequest->zone = 'asperiores';
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->clusterId = 'illum';
    $request->fields = 'totam';
    $request->key = 'impedit';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->projectId = 'nam';
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'dolor';
    $request->zone = 'aliquam';

    $requestSecurity = new ContainerProjectsZonesClustersLocationsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersLocations($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersLogging

Sets the logging service for a specific cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersLoggingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetLoggingServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersLoggingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersLoggingRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setLoggingServiceRequest = new SetLoggingServiceRequest();
    $request->setLoggingServiceRequest->clusterId = 'deleniti';
    $request->setLoggingServiceRequest->loggingService = 'veritatis';
    $request->setLoggingServiceRequest->name = 'Mr. Carmen Altenwerth';
    $request->setLoggingServiceRequest->projectId = 'fugit';
    $request->setLoggingServiceRequest->zone = 'ab';
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->clusterId = 'fugiat';
    $request->fields = 'ipsam';
    $request->key = 'consequuntur';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->projectId = 'quas';
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'officiis';
    $request->zone = 'esse';

    $requestSecurity = new ContainerProjectsZonesClustersLoggingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersLogging($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersMaster

Updates the master for a specific cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersMasterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMasterRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersMasterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersMasterRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateMasterRequest = new UpdateMasterRequest();
    $request->updateMasterRequest->clusterId = 'sed';
    $request->updateMasterRequest->masterVersion = 'veniam';
    $request->updateMasterRequest->name = 'Lula Kemmer';
    $request->updateMasterRequest->projectId = 'magnam';
    $request->updateMasterRequest->zone = 'exercitationem';
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'autem';
    $request->clusterId = 'nobis';
    $request->fields = 'laboriosam';
    $request->key = 'recusandae';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->projectId = 'voluptatem';
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'quasi';
    $request->zone = 'nisi';

    $requestSecurity = new ContainerProjectsZonesClustersMasterSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersMaster($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersMonitoring

Sets the monitoring service for a specific cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersMonitoringRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetMonitoringServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersMonitoringSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersMonitoringRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setMonitoringServiceRequest = new SetMonitoringServiceRequest();
    $request->setMonitoringServiceRequest->clusterId = 'vero';
    $request->setMonitoringServiceRequest->monitoringService = 'est';
    $request->setMonitoringServiceRequest->name = 'Johnny Yundt';
    $request->setMonitoringServiceRequest->projectId = 'occaecati';
    $request->setMonitoringServiceRequest->zone = 'nemo';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->clusterId = 'voluptas';
    $request->fields = 'numquam';
    $request->key = 'nemo';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->projectId = 'eius';
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'nesciunt';
    $request->zone = 'fuga';

    $requestSecurity = new ContainerProjectsZonesClustersMonitoringSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersMonitoring($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersNodePoolsAutoscaling

Sets the autoscaling settings of a specific node pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsAutoscalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetNodePoolAutoscalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscalingLocationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersNodePoolsAutoscalingRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setNodePoolAutoscalingRequest = new SetNodePoolAutoscalingRequest();
    $request->setNodePoolAutoscalingRequest->autoscaling = new NodePoolAutoscaling();
    $request->setNodePoolAutoscalingRequest->autoscaling->autoprovisioned = false;
    $request->setNodePoolAutoscalingRequest->autoscaling->enabled = false;
    $request->setNodePoolAutoscalingRequest->autoscaling->locationPolicy = NodePoolAutoscalingLocationPolicyEnum::LOCATION_POLICY_UNSPECIFIED;
    $request->setNodePoolAutoscalingRequest->autoscaling->maxNodeCount = 97493;
    $request->setNodePoolAutoscalingRequest->autoscaling->minNodeCount = 524380;
    $request->setNodePoolAutoscalingRequest->autoscaling->totalMaxNodeCount = 851854;
    $request->setNodePoolAutoscalingRequest->autoscaling->totalMinNodeCount = 117380;
    $request->setNodePoolAutoscalingRequest->clusterId = 'nisi';
    $request->setNodePoolAutoscalingRequest->name = 'Edith Beahan';
    $request->setNodePoolAutoscalingRequest->nodePoolId = 'soluta';
    $request->setNodePoolAutoscalingRequest->projectId = 'alias';
    $request->setNodePoolAutoscalingRequest->zone = 'omnis';
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->clusterId = 'magni';
    $request->fields = 'inventore';
    $request->key = 'fuga';
    $request->nodePoolId = 'accusamus';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->projectId = 'distinctio';
    $request->quotaUser = 'omnis';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'minima';
    $request->zone = 'praesentium';

    $requestSecurity = new ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersNodePoolsAutoscaling($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersNodePoolsCreate

Creates a node pool for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateNodePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodePool;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscalingLocationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusCondition;
use \OpenAPI\OpenAPI\Models\Shared\StatusConditionCanonicalCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusConditionCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\GPUSharingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GPUSharingConfigGPUSharingStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedMachineFeatures;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialNodes;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\EphemeralStorageLocalSsdConfig;
use \OpenAPI\OpenAPI\Models\Shared\FastSocket;
use \OpenAPI\OpenAPI\Models\Shared\GcfsConfig;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNIC;
use \OpenAPI\OpenAPI\Models\Shared\NodeKubeletConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfigCgroupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalNvmeSsdBlockConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfigVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinity;
use \OpenAPI\OpenAPI\Models\Shared\ReservationAffinityConsumeReservationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SandboxConfig;
use \OpenAPI\OpenAPI\Models\Shared\SandboxConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfigOsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigNodeMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeManagement;
use \OpenAPI\OpenAPI\Models\Shared\AutoUpgradeOptions;
use \OpenAPI\OpenAPI\Models\Shared\MaxPodsConstraint;
use \OpenAPI\OpenAPI\Models\Shared\NodeNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\PodCIDROverprovisionConfig;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInfo;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenInfo;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenInfoPhaseEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettings;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenSettings;
use \OpenAPI\OpenAPI\Models\Shared\StandardRolloutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettingsStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersNodePoolsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createNodePoolRequest = new CreateNodePoolRequest();
    $request->createNodePoolRequest->clusterId = 'magnam';
    $request->createNodePoolRequest->nodePool = new NodePool();
    $request->createNodePoolRequest->nodePool->autoscaling = new NodePoolAutoscaling();
    $request->createNodePoolRequest->nodePool->autoscaling->autoprovisioned = false;
    $request->createNodePoolRequest->nodePool->autoscaling->enabled = false;
    $request->createNodePoolRequest->nodePool->autoscaling->locationPolicy = NodePoolAutoscalingLocationPolicyEnum::ANY;
    $request->createNodePoolRequest->nodePool->autoscaling->maxNodeCount = 549501;
    $request->createNodePoolRequest->nodePool->autoscaling->minNodeCount = 415280;
    $request->createNodePoolRequest->nodePool->autoscaling->totalMaxNodeCount = 930819;
    $request->createNodePoolRequest->nodePool->autoscaling->totalMinNodeCount = 415608;
    $request->createNodePoolRequest->nodePool->conditions = [
        new StatusCondition(),
        new StatusCondition(),
        new StatusCondition(),
    ];
    $request->createNodePoolRequest->nodePool->config = new NodeConfig();
    $request->createNodePoolRequest->nodePool->config->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->createNodePoolRequest->nodePool->config->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->createNodePoolRequest->nodePool->config->advancedMachineFeatures->threadsPerCore = 'modi';
    $request->createNodePoolRequest->nodePool->config->bootDiskKmsKey = 'nam';
    $request->createNodePoolRequest->nodePool->config->confidentialNodes = new ConfidentialNodes();
    $request->createNodePoolRequest->nodePool->config->confidentialNodes->enabled = false;
    $request->createNodePoolRequest->nodePool->config->diskSizeGb = 877399;
    $request->createNodePoolRequest->nodePool->config->diskType = 'voluptatem';
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageConfig = new EphemeralStorageConfig();
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageConfig->localSsdCount = 371919;
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig();
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageLocalSsdConfig->localSsdCount = 425946;
    $request->createNodePoolRequest->nodePool->config->fastSocket = new FastSocket();
    $request->createNodePoolRequest->nodePool->config->fastSocket->enabled = false;
    $request->createNodePoolRequest->nodePool->config->gcfsConfig = new GcfsConfig();
    $request->createNodePoolRequest->nodePool->config->gcfsConfig->enabled = false;
    $request->createNodePoolRequest->nodePool->config->gvnic = new VirtualNIC();
    $request->createNodePoolRequest->nodePool->config->gvnic->enabled = false;
    $request->createNodePoolRequest->nodePool->config->imageType = 'alias';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig = new NodeKubeletConfig();
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuCfsQuota = false;
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuCfsQuotaPeriod = 'quasi';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuManagerPolicy = 'non';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->podPidsLimit = 'maiores';
    $request->createNodePoolRequest->nodePool->config->labels = [
        'sint' => 'nulla',
        'deserunt' => 'esse',
    ];
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig = new LinuxNodeConfig();
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_V1;
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig->sysctls = [
        'est' => 'quis',
        'sint' => 'accusamus',
    ];
    $request->createNodePoolRequest->nodePool->config->localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig();
    $request->createNodePoolRequest->nodePool->config->localNvmeSsdBlockConfig->localSsdCount = 774684;
    $request->createNodePoolRequest->nodePool->config->localSsdCount = 945027;
    $request->createNodePoolRequest->nodePool->config->loggingConfig = new NodePoolLoggingConfig();
    $request->createNodePoolRequest->nodePool->config->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->createNodePoolRequest->nodePool->config->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::MAX_THROUGHPUT;
    $request->createNodePoolRequest->nodePool->config->machineType = 'asperiores';
    $request->createNodePoolRequest->nodePool->config->metadata = [
        'voluptas' => 'debitis',
        'delectus' => 'quae',
    ];
    $request->createNodePoolRequest->nodePool->config->minCpuPlatform = 'minus';
    $request->createNodePoolRequest->nodePool->config->nodeGroup = 'fuga';
    $request->createNodePoolRequest->nodePool->config->oauthScopes = [
        'consectetur',
        'velit',
        'atque',
    ];
    $request->createNodePoolRequest->nodePool->config->preemptible = false;
    $request->createNodePoolRequest->nodePool->config->reservationAffinity = new ReservationAffinity();
    $request->createNodePoolRequest->nodePool->config->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->config->reservationAffinity->key = 'impedit';
    $request->createNodePoolRequest->nodePool->config->reservationAffinity->values = [
        'soluta',
    ];
    $request->createNodePoolRequest->nodePool->config->resourceLabels = [
        'nam' => 'dolore',
        'iusto' => 'voluptate',
        'sequi' => 'dignissimos',
        'neque' => 'quo',
    ];
    $request->createNodePoolRequest->nodePool->config->sandboxConfig = new SandboxConfig();
    $request->createNodePoolRequest->nodePool->config->sandboxConfig->sandboxType = 'deleniti';
    $request->createNodePoolRequest->nodePool->config->sandboxConfig->type = SandboxConfigTypeEnum::GVISOR;
    $request->createNodePoolRequest->nodePool->config->serviceAccount = 'iure';
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createNodePoolRequest->nodePool->config->spot = false;
    $request->createNodePoolRequest->nodePool->config->tags = [
        'voluptatibus',
    ];
    $request->createNodePoolRequest->nodePool->config->taints = [
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->createNodePoolRequest->nodePool->config->windowsNodeConfig = new WindowsNodeConfig();
    $request->createNodePoolRequest->nodePool->config->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->config->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->createNodePoolRequest->nodePool->config->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::GKE_METADATA;
    $request->createNodePoolRequest->nodePool->config->workloadMetadataConfig->nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum::UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->etag = 'facere';
    $request->createNodePoolRequest->nodePool->initialNodeCount = 726878;
    $request->createNodePoolRequest->nodePool->instanceGroupUrls = [
        'voluptatibus',
    ];
    $request->createNodePoolRequest->nodePool->locations = [
        'porro',
    ];
    $request->createNodePoolRequest->nodePool->management = new NodeManagement();
    $request->createNodePoolRequest->nodePool->management->autoRepair = false;
    $request->createNodePoolRequest->nodePool->management->autoUpgrade = false;
    $request->createNodePoolRequest->nodePool->management->upgradeOptions = new AutoUpgradeOptions();
    $request->createNodePoolRequest->nodePool->management->upgradeOptions->autoUpgradeStartTime = 'aliquam';
    $request->createNodePoolRequest->nodePool->management->upgradeOptions->description = 'velit';
    $request->createNodePoolRequest->nodePool->maxPodsConstraint = new MaxPodsConstraint();
    $request->createNodePoolRequest->nodePool->maxPodsConstraint->maxPodsPerNode = 'illo';
    $request->createNodePoolRequest->nodePool->name = 'Dr. Gina Jaskolski';
    $request->createNodePoolRequest->nodePool->networkConfig = new NodeNetworkConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->createPodRange = false;
    $request->createNodePoolRequest->nodePool->networkConfig->enablePrivateNodes = false;
    $request->createNodePoolRequest->nodePool->networkConfig->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::TIER_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->networkConfig->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->networkConfig->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->podCidrOverprovisionConfig->disable = false;
    $request->createNodePoolRequest->nodePool->networkConfig->podIpv4CidrBlock = 'ut';
    $request->createNodePoolRequest->nodePool->networkConfig->podRange = 'perspiciatis';
    $request->createNodePoolRequest->nodePool->placementPolicy = new PlacementPolicy();
    $request->createNodePoolRequest->nodePool->placementPolicy->type = PlacementPolicyTypeEnum::COMPACT;
    $request->createNodePoolRequest->nodePool->podIpv4CidrSize = 117525;
    $request->createNodePoolRequest->nodePool->selfLink = 'impedit';
    $request->createNodePoolRequest->nodePool->status = NodePoolStatusEnum::ERROR;
    $request->createNodePoolRequest->nodePool->statusMessage = 'iste';
    $request->createNodePoolRequest->nodePool->updateInfo = new UpdateInfo();
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo = new BlueGreenInfo();
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->blueInstanceGroupUrls = [
        'alias',
        'nisi',
        'itaque',
        'velit',
    ];
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->bluePoolDeletionStartTime = 'laborum';
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->greenInstanceGroupUrls = [
        'dolor',
        'iusto',
    ];
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->greenPoolVersion = 'sit';
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->phase = BlueGreenInfoPhaseEnum::PHASE_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->upgradeSettings = new UpgradeSettings();
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'consequatur';
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 639705;
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 9274.03;
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'ea';
    $request->createNodePoolRequest->nodePool->upgradeSettings->maxSurge = 693153;
    $request->createNodePoolRequest->nodePool->upgradeSettings->maxUnavailable = 377406;
    $request->createNodePoolRequest->nodePool->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::SURGE;
    $request->createNodePoolRequest->nodePool->version = 'placeat';
    $request->createNodePoolRequest->parent = 'perspiciatis';
    $request->createNodePoolRequest->projectId = 'expedita';
    $request->createNodePoolRequest->zone = 'deleniti';
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->clusterId = 'unde';
    $request->fields = 'necessitatibus';
    $request->key = 'animi';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->projectId = 'ipsam';
    $request->quotaUser = 'corporis';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'error';
    $request->zone = 'esse';

    $requestSecurity = new ContainerProjectsZonesClustersNodePoolsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersNodePoolsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersNodePoolsDelete

Deletes a node pool from a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersNodePoolsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->clusterId = 'vitae';
    $request->fields = 'inventore';
    $request->key = 'dolorem';
    $request->name = 'Tina Moore';
    $request->nodePoolId = 'soluta';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->projectId = 'rem';
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'fugit';
    $request->zone = 'alias';

    $requestSecurity = new ContainerProjectsZonesClustersNodePoolsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersNodePoolsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersNodePoolsGet

Retrieves the requested node pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersNodePoolsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->clusterId = 'modi';
    $request->fields = 'neque';
    $request->key = 'exercitationem';
    $request->name = 'Douglas Emard';
    $request->nodePoolId = 'distinctio';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->projectId = 'quia';
    $request->quotaUser = 'quia';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'omnis';
    $request->zone = 'libero';

    $requestSecurity = new ContainerProjectsZonesClustersNodePoolsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersNodePoolsGet($request, $requestSecurity);

    if ($response->nodePool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersNodePoolsList

Lists the node pools for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersNodePoolsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugiat';
    $request->clusterId = 'officia';
    $request->fields = 'quos';
    $request->key = 'placeat';
    $request->oauthToken = 'sit';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->projectId = 'ipsa';
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'aperiam';
    $request->zone = 'totam';

    $requestSecurity = new ContainerProjectsZonesClustersNodePoolsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersNodePoolsList($request, $requestSecurity);

    if ($response->listNodePoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersNodePoolsRollback

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsRollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RollbackNodePoolUpgradeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsRollbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersNodePoolsRollbackRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->rollbackNodePoolUpgradeRequest = new RollbackNodePoolUpgradeRequest();
    $request->rollbackNodePoolUpgradeRequest->clusterId = 'eligendi';
    $request->rollbackNodePoolUpgradeRequest->name = 'Kenneth Johnson';
    $request->rollbackNodePoolUpgradeRequest->nodePoolId = 'assumenda';
    $request->rollbackNodePoolUpgradeRequest->projectId = 'beatae';
    $request->rollbackNodePoolUpgradeRequest->respectPdb = false;
    $request->rollbackNodePoolUpgradeRequest->zone = 'est';
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->clusterId = 'provident';
    $request->fields = 'accusamus';
    $request->key = 'necessitatibus';
    $request->nodePoolId = 'tempore';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->projectId = 'ea';
    $request->quotaUser = 'autem';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'rerum';
    $request->zone = 'laudantium';

    $requestSecurity = new ContainerProjectsZonesClustersNodePoolsRollbackSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersNodePoolsRollback($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersNodePoolsSetManagement

Sets the NodeManagement options for a node pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsSetManagementRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetNodePoolManagementRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodeManagement;
use \OpenAPI\OpenAPI\Models\Shared\AutoUpgradeOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsSetManagementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersNodePoolsSetManagementRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setNodePoolManagementRequest = new SetNodePoolManagementRequest();
    $request->setNodePoolManagementRequest->clusterId = 'officiis';
    $request->setNodePoolManagementRequest->management = new NodeManagement();
    $request->setNodePoolManagementRequest->management->autoRepair = false;
    $request->setNodePoolManagementRequest->management->autoUpgrade = false;
    $request->setNodePoolManagementRequest->management->upgradeOptions = new AutoUpgradeOptions();
    $request->setNodePoolManagementRequest->management->upgradeOptions->autoUpgradeStartTime = 'voluptatibus';
    $request->setNodePoolManagementRequest->management->upgradeOptions->description = 'cum';
    $request->setNodePoolManagementRequest->name = 'Robert Crona';
    $request->setNodePoolManagementRequest->nodePoolId = 'repudiandae';
    $request->setNodePoolManagementRequest->projectId = 'accusantium';
    $request->setNodePoolManagementRequest->zone = 'expedita';
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->clusterId = 'odio';
    $request->fields = 'praesentium';
    $request->key = 'odit';
    $request->nodePoolId = 'explicabo';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->projectId = 'error';
    $request->quotaUser = 'earum';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'recusandae';
    $request->zone = 'similique';

    $requestSecurity = new ContainerProjectsZonesClustersNodePoolsSetManagementSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersNodePoolsSetManagement($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersNodePoolsSetSize

SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsSetSizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetNodePoolSizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsSetSizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersNodePoolsSetSizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setNodePoolSizeRequest = new SetNodePoolSizeRequest();
    $request->setNodePoolSizeRequest->clusterId = 'quidem';
    $request->setNodePoolSizeRequest->name = 'Teresa Miller';
    $request->setNodePoolSizeRequest->nodeCount = 585593;
    $request->setNodePoolSizeRequest->nodePoolId = 'fugit';
    $request->setNodePoolSizeRequest->projectId = 'numquam';
    $request->setNodePoolSizeRequest->zone = 'numquam';
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->clusterId = 'dignissimos';
    $request->fields = 'optio';
    $request->key = 'necessitatibus';
    $request->nodePoolId = 'corporis';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->projectId = 'expedita';
    $request->quotaUser = 'voluptatum';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'minima';
    $request->zone = 'placeat';

    $requestSecurity = new ContainerProjectsZonesClustersNodePoolsSetSizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersNodePoolsSetSize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersNodePoolsUpdate

Updates the version and/or image type of a specific node pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNodePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialNodes;
use \OpenAPI\OpenAPI\Models\Shared\FastSocket;
use \OpenAPI\OpenAPI\Models\Shared\GcfsConfig;
use \OpenAPI\OpenAPI\Models\Shared\VirtualNIC;
use \OpenAPI\OpenAPI\Models\Shared\NodeKubeletConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeLabels;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\LinuxNodeConfigCgroupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfigVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\PodCIDROverprovisionConfig;
use \OpenAPI\OpenAPI\Models\Shared\ResourceLabels;
use \OpenAPI\OpenAPI\Models\Shared\NetworkTags;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaints;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettings;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenSettings;
use \OpenAPI\OpenAPI\Models\Shared\StandardRolloutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettingsStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\WindowsNodeConfigOsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadMetadataConfigNodeMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersNodePoolsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersNodePoolsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->updateNodePoolRequest = new UpdateNodePoolRequest();
    $request->updateNodePoolRequest->clusterId = 'neque';
    $request->updateNodePoolRequest->confidentialNodes = new ConfidentialNodes();
    $request->updateNodePoolRequest->confidentialNodes->enabled = false;
    $request->updateNodePoolRequest->etag = 'in';
    $request->updateNodePoolRequest->fastSocket = new FastSocket();
    $request->updateNodePoolRequest->fastSocket->enabled = false;
    $request->updateNodePoolRequest->gcfsConfig = new GcfsConfig();
    $request->updateNodePoolRequest->gcfsConfig->enabled = false;
    $request->updateNodePoolRequest->gvnic = new VirtualNIC();
    $request->updateNodePoolRequest->gvnic->enabled = false;
    $request->updateNodePoolRequest->imageType = 'minus';
    $request->updateNodePoolRequest->kubeletConfig = new NodeKubeletConfig();
    $request->updateNodePoolRequest->kubeletConfig->cpuCfsQuota = false;
    $request->updateNodePoolRequest->kubeletConfig->cpuCfsQuotaPeriod = 'eum';
    $request->updateNodePoolRequest->kubeletConfig->cpuManagerPolicy = 'modi';
    $request->updateNodePoolRequest->kubeletConfig->podPidsLimit = 'corporis';
    $request->updateNodePoolRequest->labels = new NodeLabels();
    $request->updateNodePoolRequest->labels->labels = [
        'voluptates' => 'maiores',
        'tempore' => 'aperiam',
    ];
    $request->updateNodePoolRequest->linuxNodeConfig = new LinuxNodeConfig();
    $request->updateNodePoolRequest->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_V2;
    $request->updateNodePoolRequest->linuxNodeConfig->sysctls = [
        'labore' => 'totam',
    ];
    $request->updateNodePoolRequest->locations = [
        'voluptas',
        'quo',
        'velit',
    ];
    $request->updateNodePoolRequest->loggingConfig = new NodePoolLoggingConfig();
    $request->updateNodePoolRequest->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->updateNodePoolRequest->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::MAX_THROUGHPUT;
    $request->updateNodePoolRequest->name = 'Dean Ortiz';
    $request->updateNodePoolRequest->nodeNetworkConfig = new NodeNetworkConfig();
    $request->updateNodePoolRequest->nodeNetworkConfig->createPodRange = false;
    $request->updateNodePoolRequest->nodeNetworkConfig->enablePrivateNodes = false;
    $request->updateNodePoolRequest->nodeNetworkConfig->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->updateNodePoolRequest->nodeNetworkConfig->networkPerformanceConfig->externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum::TIER1;
    $request->updateNodePoolRequest->nodeNetworkConfig->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->updateNodePoolRequest->nodeNetworkConfig->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->updateNodePoolRequest->nodeNetworkConfig->podCidrOverprovisionConfig->disable = false;
    $request->updateNodePoolRequest->nodeNetworkConfig->podIpv4CidrBlock = 'odit';
    $request->updateNodePoolRequest->nodeNetworkConfig->podRange = 'repellat';
    $request->updateNodePoolRequest->nodePoolId = 'pariatur';
    $request->updateNodePoolRequest->nodeVersion = 'nemo';
    $request->updateNodePoolRequest->projectId = 'reprehenderit';
    $request->updateNodePoolRequest->resourceLabels = new ResourceLabels();
    $request->updateNodePoolRequest->resourceLabels->labels = [
        'odio' => 'minima',
    ];
    $request->updateNodePoolRequest->tags = new NetworkTags();
    $request->updateNodePoolRequest->tags->tags = [
        'ducimus',
        'excepturi',
    ];
    $request->updateNodePoolRequest->taints = new NodeTaints();
    $request->updateNodePoolRequest->taints->taints = [
        new NodeTaint(),
    ];
    $request->updateNodePoolRequest->upgradeSettings = new UpgradeSettings();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'error';
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 85076;
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 4981.8;
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'voluptate';
    $request->updateNodePoolRequest->upgradeSettings->maxSurge = 866789;
    $request->updateNodePoolRequest->upgradeSettings->maxUnavailable = 932666;
    $request->updateNodePoolRequest->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::BLUE_GREEN;
    $request->updateNodePoolRequest->windowsNodeConfig = new WindowsNodeConfig();
    $request->updateNodePoolRequest->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_LTSC2022;
    $request->updateNodePoolRequest->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->updateNodePoolRequest->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::GCE_METADATA;
    $request->updateNodePoolRequest->workloadMetadataConfig->nodeMetadata = WorkloadMetadataConfigNodeMetadataEnum::SECURE;
    $request->updateNodePoolRequest->zone = 'commodi';
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->clusterId = 'exercitationem';
    $request->fields = 'quam';
    $request->key = 'dolorem';
    $request->nodePoolId = 'modi';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->projectId = 'sint';
    $request->quotaUser = 'vero';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'repudiandae';
    $request->zone = 'cum';

    $requestSecurity = new ContainerProjectsZonesClustersNodePoolsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersNodePoolsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersResourceLabels

Sets labels on a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersResourceLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersResourceLabelsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersResourceLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setLabelsRequest = new SetLabelsRequest();
    $request->setLabelsRequest->clusterId = 'earum';
    $request->setLabelsRequest->labelFingerprint = 'veniam';
    $request->setLabelsRequest->name = 'Mr. Todd Reilly';
    $request->setLabelsRequest->projectId = 'nobis';
    $request->setLabelsRequest->resourceLabels = [
        'ducimus' => 'maiores',
    ];
    $request->setLabelsRequest->zone = 'veritatis';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->clusterId = 'libero';
    $request->fields = 'excepturi';
    $request->key = 'occaecati';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->projectId = 'aliquam';
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'eligendi';
    $request->zone = 'sint';

    $requestSecurity = new ContainerProjectsZonesClustersResourceLabelsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersResourceLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersSetMaintenancePolicy

Sets the maintenance policy for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersSetMaintenancePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetMaintenancePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\MaintenancePolicy;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\DailyMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\TimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceExclusionOptions;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceExclusionOptionsScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecurringTimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersSetMaintenancePolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersSetMaintenancePolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setMaintenancePolicyRequest = new SetMaintenancePolicyRequest();
    $request->setMaintenancePolicyRequest->clusterId = 'hic';
    $request->setMaintenancePolicyRequest->maintenancePolicy = new MaintenancePolicy();
    $request->setMaintenancePolicyRequest->maintenancePolicy->resourceVersion = 'animi';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window = new MaintenanceWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->dailyMaintenanceWindow = new DailyMaintenanceWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->dailyMaintenanceWindow->duration = 'quas';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->dailyMaintenanceWindow->startTime = 'totam';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->maintenanceExclusions = [
        'odio' => new TimeWindow(),
        'eaque' => new TimeWindow(),
        'saepe' => new TimeWindow(),
    ];
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow = new RecurringTimeWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->recurrence = 'architecto';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window = new TimeWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->endTime = 'quos';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions = new MaintenanceExclusionOptions();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions->scope = MaintenanceExclusionOptionsScopeEnum::NO_MINOR_UPGRADES;
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->startTime = 'assumenda';
    $request->setMaintenancePolicyRequest->name = 'Dr. Marco Frami';
    $request->setMaintenancePolicyRequest->projectId = 'cum';
    $request->setMaintenancePolicyRequest->zone = 'ipsum';
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deserunt';
    $request->clusterId = 'doloremque';
    $request->fields = 'quis';
    $request->key = 'veniam';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->projectId = 'architecto';
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'eligendi';
    $request->zone = 'possimus';

    $requestSecurity = new ContainerProjectsZonesClustersSetMaintenancePolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersSetMaintenancePolicy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersSetMasterAuth

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersSetMasterAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetMasterAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetMasterAuthRequestActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\MasterAuth;
use \OpenAPI\OpenAPI\Models\Shared\ClientCertificateConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersSetMasterAuthSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersSetMasterAuthRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setMasterAuthRequest = new SetMasterAuthRequest();
    $request->setMasterAuthRequest->action = SetMasterAuthRequestActionEnum::SET_PASSWORD;
    $request->setMasterAuthRequest->clusterId = 'itaque';
    $request->setMasterAuthRequest->name = 'Ollie Harris';
    $request->setMasterAuthRequest->projectId = 'laudantium';
    $request->setMasterAuthRequest->update = new MasterAuth();
    $request->setMasterAuthRequest->update->clientCertificate = 'odit';
    $request->setMasterAuthRequest->update->clientCertificateConfig = new ClientCertificateConfig();
    $request->setMasterAuthRequest->update->clientCertificateConfig->issueClientCertificate = false;
    $request->setMasterAuthRequest->update->clientKey = 'pariatur';
    $request->setMasterAuthRequest->update->clusterCaCertificate = 'amet';
    $request->setMasterAuthRequest->update->password = 'exercitationem';
    $request->setMasterAuthRequest->update->username = 'Annette_Flatley39';
    $request->setMasterAuthRequest->zone = 'voluptatibus';
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->clusterId = 'nisi';
    $request->fields = 'quis';
    $request->key = 'nisi';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->projectId = 'minus';
    $request->quotaUser = 'facere';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'ipsum';
    $request->zone = 'ad';

    $requestSecurity = new ContainerProjectsZonesClustersSetMasterAuthSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersSetMasterAuth($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersSetNetworkPolicy

Enables or disables Network Policy for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersSetNetworkPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetNetworkPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicy;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicyProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersSetNetworkPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersSetNetworkPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setNetworkPolicyRequest = new SetNetworkPolicyRequest();
    $request->setNetworkPolicyRequest->clusterId = 'voluptatibus';
    $request->setNetworkPolicyRequest->name = 'Raquel Greenfelder';
    $request->setNetworkPolicyRequest->networkPolicy = new NetworkPolicy();
    $request->setNetworkPolicyRequest->networkPolicy->enabled = false;
    $request->setNetworkPolicyRequest->networkPolicy->provider = NetworkPolicyProviderEnum::PROVIDER_UNSPECIFIED;
    $request->setNetworkPolicyRequest->projectId = 'nostrum';
    $request->setNetworkPolicyRequest->zone = 'neque';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->clusterId = 'eligendi';
    $request->fields = 'fugiat';
    $request->key = 'unde';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->projectId = 'ducimus';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'error';
    $request->zone = 'porro';

    $requestSecurity = new ContainerProjectsZonesClustersSetNetworkPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersSetNetworkPolicy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersStartIpRotation

Starts master IP rotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersStartIpRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartIPRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersStartIpRotationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersStartIpRotationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->startIPRotationRequest = new StartIPRotationRequest();
    $request->startIPRotationRequest->clusterId = 'dignissimos';
    $request->startIPRotationRequest->name = 'Ginger Hand';
    $request->startIPRotationRequest->projectId = 'delectus';
    $request->startIPRotationRequest->rotateCredentials = false;
    $request->startIPRotationRequest->zone = 'iusto';
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illo';
    $request->clusterId = 'ab';
    $request->fields = 'incidunt';
    $request->key = 'accusamus';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->projectId = 'tempore';
    $request->quotaUser = 'veniam';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'reiciendis';
    $request->zone = 'earum';

    $requestSecurity = new ContainerProjectsZonesClustersStartIpRotationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersStartIpRotation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesClustersUpdate

Updates the settings for a specific cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalPodRangesConfig;
use \OpenAPI\OpenAPI\Models\Shared\AddonsConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunConfigLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigConnectorConfig;
use \OpenAPI\OpenAPI\Models\Shared\DnsCacheConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcePersistentDiskCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcpFilestoreCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsFuseCsiDriverConfig;
use \OpenAPI\OpenAPI\Models\Shared\GkeBackupAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\HttpLoadBalancing;
use \OpenAPI\OpenAPI\Models\Shared\IstioConfig;
use \OpenAPI\OpenAPI\Models\Shared\IstioConfigAuthEnum;
use \OpenAPI\OpenAPI\Models\Shared\KalmConfig;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesDashboard;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticatorGroupsConfig;
use \OpenAPI\OpenAPI\Models\Shared\BinaryAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\BinaryAuthorizationEvaluationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\AutoprovisioningNodePoolDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodeManagement;
use \OpenAPI\OpenAPI\Models\Shared\AutoUpgradeOptions;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettings;
use \OpenAPI\OpenAPI\Models\Shared\BlueGreenSettings;
use \OpenAPI\OpenAPI\Models\Shared\StandardRolloutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeSettingsStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterAutoscalingAutoscalingProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceLimit;
use \OpenAPI\OpenAPI\Models\Shared\ClusterTelemetry;
use \OpenAPI\OpenAPI\Models\Shared\ClusterTelemetryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostManagementConfig;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseEncryption;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseEncryptionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterUpdateDesiredDatapathProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DefaultSnatStatus;
use \OpenAPI\OpenAPI\Models\Shared\DNSConfig;
use \OpenAPI\OpenAPI\Models\Shared\DNSConfigClusterDNSEnum;
use \OpenAPI\OpenAPI\Models\Shared\DNSConfigClusterDNSScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Fleet;
use \OpenAPI\OpenAPI\Models\Shared\GatewayAPIConfig;
use \OpenAPI\OpenAPI\Models\Shared\GatewayAPIConfigChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\GcfsConfig;
use \OpenAPI\OpenAPI\Models\Shared\IdentityServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\IntraNodeVisibilityConfig;
use \OpenAPI\OpenAPI\Models\Shared\ILBSubsettingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingComponentConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingComponentConfigEnableComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MasterAuthorizedNetworksConfig;
use \OpenAPI\OpenAPI\Models\Shared\CidrBlock;
use \OpenAPI\OpenAPI\Models\Shared\MeshCertificates;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringComponentConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringComponentConfigEnableComponentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedPrometheusConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkTags;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscalingLocationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfig;
use \OpenAPI\OpenAPI\Models\Shared\LoggingVariantConfigVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\PubSub;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PodSecurityPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterMasterGlobalAccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadConfigAuditModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectConfigWorkloadVulnerabilityModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannel;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannelChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUsageExportConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\ConsumptionMeteringConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceExternalIPsConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedNodes;
use \OpenAPI\OpenAPI\Models\Shared\ClusterUpdateDesiredStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TpuConfig;
use \OpenAPI\OpenAPI\Models\Shared\VerticalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadALTSConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadCertificates;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadIdentityConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesClustersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesClustersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->updateClusterRequest = new UpdateClusterRequest();
    $request->updateClusterRequest->clusterId = 'praesentium';
    $request->updateClusterRequest->name = 'Kristie Schamberger';
    $request->updateClusterRequest->projectId = 'deleniti';
    $request->updateClusterRequest->update = new ClusterUpdate();
    $request->updateClusterRequest->update->additionalPodRangesConfig = new AdditionalPodRangesConfig();
    $request->updateClusterRequest->update->additionalPodRangesConfig->podRangeNames = [
        'labore',
    ];
    $request->updateClusterRequest->update->desiredAddonsConfig = new AddonsConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->cloudRunConfig = new CloudRunConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->cloudRunConfig->disabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->cloudRunConfig->loadBalancerType = CloudRunConfigLoadBalancerTypeEnum::LOAD_BALANCER_TYPE_INTERNAL;
    $request->updateClusterRequest->update->desiredAddonsConfig->configConnectorConfig = new ConfigConnectorConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->configConnectorConfig->enabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->dnsCacheConfig = new DnsCacheConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->dnsCacheConfig->enabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->gcePersistentDiskCsiDriverConfig->enabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->gcpFilestoreCsiDriverConfig->enabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->gcsFuseCsiDriverConfig = new GcsFuseCsiDriverConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->gcsFuseCsiDriverConfig->enabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->gkeBackupAgentConfig = new GkeBackupAgentConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->gkeBackupAgentConfig->enabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->horizontalPodAutoscaling = new HorizontalPodAutoscaling();
    $request->updateClusterRequest->update->desiredAddonsConfig->horizontalPodAutoscaling->disabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->httpLoadBalancing = new HttpLoadBalancing();
    $request->updateClusterRequest->update->desiredAddonsConfig->httpLoadBalancing->disabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->istioConfig = new IstioConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->istioConfig->auth = IstioConfigAuthEnum::AUTH_NONE;
    $request->updateClusterRequest->update->desiredAddonsConfig->istioConfig->disabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->kalmConfig = new KalmConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->kalmConfig->enabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->kubernetesDashboard = new KubernetesDashboard();
    $request->updateClusterRequest->update->desiredAddonsConfig->kubernetesDashboard->disabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->networkPolicyConfig = new NetworkPolicyConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->networkPolicyConfig->disabled = false;
    $request->updateClusterRequest->update->desiredAuthenticatorGroupsConfig = new AuthenticatorGroupsConfig();
    $request->updateClusterRequest->update->desiredAuthenticatorGroupsConfig->enabled = false;
    $request->updateClusterRequest->update->desiredAuthenticatorGroupsConfig->securityGroup = 'quisquam';
    $request->updateClusterRequest->update->desiredBinaryAuthorization = new BinaryAuthorization();
    $request->updateClusterRequest->update->desiredBinaryAuthorization->enabled = false;
    $request->updateClusterRequest->update->desiredBinaryAuthorization->evaluationMode = BinaryAuthorizationEvaluationModeEnum::DISABLED;
    $request->updateClusterRequest->update->desiredClusterAutoscaling = new ClusterAutoscaling();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningLocations = [
        'repudiandae',
        'consequatur',
        'maxime',
    ];
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->bootDiskKmsKey = 'aspernatur';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->diskSizeGb = 723942;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->diskType = 'expedita';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->imageType = 'quas';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management = new NodeManagement();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management->autoRepair = false;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management->autoUpgrade = false;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions = new AutoUpgradeOptions();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->autoUpgradeStartTime = 'provident';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->description = 'repudiandae';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->minCpuPlatform = 'rerum';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->oauthScopes = [
        'corporis',
        'vero',
    ];
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->serviceAccount = 'similique';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig->enableSecureBoot = false;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->upgradeSettings = new UpgradeSettings();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'repellendus';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 434827;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 2138.35;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'commodi';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->maxSurge = 771226;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->maxUnavailable = 415033;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoscalingProfile = ClusterAutoscalingAutoscalingProfileEnum::PROFILE_UNSPECIFIED;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->enableNodeAutoprovisioning = false;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->resourceLimits = [
        new ResourceLimit(),
        new ResourceLimit(),
    ];
    $request->updateClusterRequest->update->desiredClusterTelemetry = new ClusterTelemetry();
    $request->updateClusterRequest->update->desiredClusterTelemetry->type = ClusterTelemetryTypeEnum::UNSPECIFIED;
    $request->updateClusterRequest->update->desiredCostManagementConfig = new CostManagementConfig();
    $request->updateClusterRequest->update->desiredCostManagementConfig->enabled = false;
    $request->updateClusterRequest->update->desiredDatabaseEncryption = new DatabaseEncryption();
    $request->updateClusterRequest->update->desiredDatabaseEncryption->keyName = 'amet';
    $request->updateClusterRequest->update->desiredDatabaseEncryption->state = DatabaseEncryptionStateEnum::DECRYPTED;
    $request->updateClusterRequest->update->desiredDatapathProvider = ClusterUpdateDesiredDatapathProviderEnum::LEGACY_DATAPATH;
    $request->updateClusterRequest->update->desiredDefaultSnatStatus = new DefaultSnatStatus();
    $request->updateClusterRequest->update->desiredDefaultSnatStatus->disabled = false;
    $request->updateClusterRequest->update->desiredDnsConfig = new DNSConfig();
    $request->updateClusterRequest->update->desiredDnsConfig->clusterDns = DNSConfigClusterDNSEnum::CLOUD_DNS;
    $request->updateClusterRequest->update->desiredDnsConfig->clusterDnsDomain = 'cum';
    $request->updateClusterRequest->update->desiredDnsConfig->clusterDnsScope = DNSConfigClusterDNSScopeEnum::DNS_SCOPE_UNSPECIFIED;
    $request->updateClusterRequest->update->desiredEnablePrivateEndpoint = false;
    $request->updateClusterRequest->update->desiredFleet = new Fleet();
    $request->updateClusterRequest->update->desiredFleet->membership = 'quasi';
    $request->updateClusterRequest->update->desiredFleet->preRegistered = false;
    $request->updateClusterRequest->update->desiredFleet->project = 'dicta';
    $request->updateClusterRequest->update->desiredGatewayApiConfig = new GatewayAPIConfig();
    $request->updateClusterRequest->update->desiredGatewayApiConfig->channel = GatewayAPIConfigChannelEnum::CHANNEL_EXPERIMENTAL;
    $request->updateClusterRequest->update->desiredGcfsConfig = new GcfsConfig();
    $request->updateClusterRequest->update->desiredGcfsConfig->enabled = false;
    $request->updateClusterRequest->update->desiredIdentityServiceConfig = new IdentityServiceConfig();
    $request->updateClusterRequest->update->desiredIdentityServiceConfig->enabled = false;
    $request->updateClusterRequest->update->desiredImageType = 'doloremque';
    $request->updateClusterRequest->update->desiredIntraNodeVisibilityConfig = new IntraNodeVisibilityConfig();
    $request->updateClusterRequest->update->desiredIntraNodeVisibilityConfig->enabled = false;
    $request->updateClusterRequest->update->desiredL4ilbSubsettingConfig = new ILBSubsettingConfig();
    $request->updateClusterRequest->update->desiredL4ilbSubsettingConfig->enabled = false;
    $request->updateClusterRequest->update->desiredLocations = [
        'iusto',
        'amet',
        'provident',
        'dolorum',
    ];
    $request->updateClusterRequest->update->desiredLoggingConfig = new LoggingConfig();
    $request->updateClusterRequest->update->desiredLoggingConfig->componentConfig = new LoggingComponentConfig();
    $request->updateClusterRequest->update->desiredLoggingConfig->componentConfig->enableComponents = [
        LoggingComponentConfigEnableComponentsEnum::APISERVER,
        LoggingComponentConfigEnableComponentsEnum::CONTROLLER_MANAGER,
        LoggingComponentConfigEnableComponentsEnum::COMPONENT_UNSPECIFIED,
        LoggingComponentConfigEnableComponentsEnum::WORKLOADS,
    ];
    $request->updateClusterRequest->update->desiredLoggingService = 'molestiae';
    $request->updateClusterRequest->update->desiredMaster = [
        'facilis' => 'corrupti',
        'aperiam' => 'sint',
        'accusamus' => 'eos',
        'totam' => 'dicta',
    ];
    $request->updateClusterRequest->update->desiredMasterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->updateClusterRequest->update->desiredMasterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
    ];
    $request->updateClusterRequest->update->desiredMasterAuthorizedNetworksConfig->enabled = false;
    $request->updateClusterRequest->update->desiredMasterAuthorizedNetworksConfig->gcpPublicCidrsAccessEnabled = false;
    $request->updateClusterRequest->update->desiredMasterVersion = 'velit';
    $request->updateClusterRequest->update->desiredMeshCertificates = new MeshCertificates();
    $request->updateClusterRequest->update->desiredMeshCertificates->enableCertificates = false;
    $request->updateClusterRequest->update->desiredMonitoringConfig = new MonitoringConfig();
    $request->updateClusterRequest->update->desiredMonitoringConfig->componentConfig = new MonitoringComponentConfig();
    $request->updateClusterRequest->update->desiredMonitoringConfig->componentConfig->enableComponents = [
        MonitoringComponentConfigEnableComponentsEnum::COMPONENT_UNSPECIFIED,
    ];
    $request->updateClusterRequest->update->desiredMonitoringConfig->managedPrometheusConfig = new ManagedPrometheusConfig();
    $request->updateClusterRequest->update->desiredMonitoringConfig->managedPrometheusConfig->enabled = false;
    $request->updateClusterRequest->update->desiredMonitoringService = 'a';
    $request->updateClusterRequest->update->desiredNodePoolAutoConfigNetworkTags = new NetworkTags();
    $request->updateClusterRequest->update->desiredNodePoolAutoConfigNetworkTags->tags = [
        'occaecati',
    ];
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling = new NodePoolAutoscaling();
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->autoprovisioned = false;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->enabled = false;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->locationPolicy = NodePoolAutoscalingLocationPolicyEnum::BALANCED;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->maxNodeCount = 107472;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->minNodeCount = 868255;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->totalMaxNodeCount = 287544;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->totalMinNodeCount = 794988;
    $request->updateClusterRequest->update->desiredNodePoolId = 'esse';
    $request->updateClusterRequest->update->desiredNodePoolLoggingConfig = new NodePoolLoggingConfig();
    $request->updateClusterRequest->update->desiredNodePoolLoggingConfig->variantConfig = new LoggingVariantConfig();
    $request->updateClusterRequest->update->desiredNodePoolLoggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::VARIANT_UNSPECIFIED;
    $request->updateClusterRequest->update->desiredNodeVersion = 'perferendis';
    $request->updateClusterRequest->update->desiredNotificationConfig = new NotificationConfig();
    $request->updateClusterRequest->update->desiredNotificationConfig->pubsub = new PubSub();
    $request->updateClusterRequest->update->desiredNotificationConfig->pubsub->enabled = false;
    $request->updateClusterRequest->update->desiredNotificationConfig->pubsub->filter = new Filter();
    $request->updateClusterRequest->update->desiredNotificationConfig->pubsub->filter->eventType = [
        FilterEventTypeEnum::UPGRADE_AVAILABLE_EVENT,
        FilterEventTypeEnum::EVENT_TYPE_UNSPECIFIED,
        FilterEventTypeEnum::UPGRADE_AVAILABLE_EVENT,
    ];
    $request->updateClusterRequest->update->desiredNotificationConfig->pubsub->topic = 'repellat';
    $request->updateClusterRequest->update->desiredPodSecurityPolicyConfig = new PodSecurityPolicyConfig();
    $request->updateClusterRequest->update->desiredPodSecurityPolicyConfig->enabled = false;
    $request->updateClusterRequest->update->desiredPrivateClusterConfig = new PrivateClusterConfig();
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->enablePrivateEndpoint = false;
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->enablePrivateNodes = false;
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig();
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->masterGlobalAccessConfig->enabled = false;
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->masterIpv4CidrBlock = 'velit';
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->peeringName = 'porro';
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->privateEndpoint = 'provident';
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->privateEndpointSubnetwork = 'consectetur';
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->publicEndpoint = 'eligendi';
    $request->updateClusterRequest->update->desiredPrivateIpv6GoogleAccess = ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum::PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED;
    $request->updateClusterRequest->update->desiredProtectConfig = new ProtectConfig();
    $request->updateClusterRequest->update->desiredProtectConfig->workloadConfig = new WorkloadConfig();
    $request->updateClusterRequest->update->desiredProtectConfig->workloadConfig->auditMode = WorkloadConfigAuditModeEnum::DISABLED;
    $request->updateClusterRequest->update->desiredProtectConfig->workloadVulnerabilityMode = ProtectConfigWorkloadVulnerabilityModeEnum::BASIC;
    $request->updateClusterRequest->update->desiredReleaseChannel = new ReleaseChannel();
    $request->updateClusterRequest->update->desiredReleaseChannel->channel = ReleaseChannelChannelEnum::REGULAR;
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig = new ResourceUsageExportConfig();
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig->bigqueryDestination = new BigQueryDestination();
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig->bigqueryDestination->datasetId = 'temporibus';
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig->consumptionMeteringConfig = new ConsumptionMeteringConfig();
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig->consumptionMeteringConfig->enabled = false;
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig->enableNetworkEgressMetering = false;
    $request->updateClusterRequest->update->desiredServiceExternalIpsConfig = new ServiceExternalIPsConfig();
    $request->updateClusterRequest->update->desiredServiceExternalIpsConfig->enabled = false;
    $request->updateClusterRequest->update->desiredShieldedNodes = new ShieldedNodes();
    $request->updateClusterRequest->update->desiredShieldedNodes->enabled = false;
    $request->updateClusterRequest->update->desiredStackType = ClusterUpdateDesiredStackTypeEnum::IPV4;
    $request->updateClusterRequest->update->desiredTpuConfig = new TpuConfig();
    $request->updateClusterRequest->update->desiredTpuConfig->enabled = false;
    $request->updateClusterRequest->update->desiredTpuConfig->ipv4CidrBlock = 'amet';
    $request->updateClusterRequest->update->desiredTpuConfig->useServiceNetworking = false;
    $request->updateClusterRequest->update->desiredVerticalPodAutoscaling = new VerticalPodAutoscaling();
    $request->updateClusterRequest->update->desiredVerticalPodAutoscaling->enabled = false;
    $request->updateClusterRequest->update->desiredWorkloadAltsConfig = new WorkloadALTSConfig();
    $request->updateClusterRequest->update->desiredWorkloadAltsConfig->enableAlts = false;
    $request->updateClusterRequest->update->desiredWorkloadCertificates = new WorkloadCertificates();
    $request->updateClusterRequest->update->desiredWorkloadCertificates->enableCertificates = false;
    $request->updateClusterRequest->update->desiredWorkloadIdentityConfig = new WorkloadIdentityConfig();
    $request->updateClusterRequest->update->desiredWorkloadIdentityConfig->identityNamespace = 'tenetur';
    $request->updateClusterRequest->update->desiredWorkloadIdentityConfig->identityProvider = 'aspernatur';
    $request->updateClusterRequest->update->desiredWorkloadIdentityConfig->workloadPool = 'quo';
    $request->updateClusterRequest->update->etag = 'itaque';
    $request->updateClusterRequest->update->removedAdditionalPodRangesConfig = new AdditionalPodRangesConfig();
    $request->updateClusterRequest->update->removedAdditionalPodRangesConfig->podRangeNames = [
        'laborum',
        'dignissimos',
        'vero',
        'qui',
    ];
    $request->updateClusterRequest->zone = 'consectetur';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->clusterId = 'exercitationem';
    $request->fields = 'nihil';
    $request->key = 'non';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->projectId = 'illo';
    $request->quotaUser = 'hic';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'delectus';
    $request->zone = 'non';

    $requestSecurity = new ContainerProjectsZonesClustersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesClustersUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesGetServerconfig

Returns configuration info about the Google Kubernetes Engine service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesGetServerconfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesGetServerconfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesGetServerconfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'numquam';
    $request->key = 'repudiandae';
    $request->name = 'Maureen Champlin';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->projectId = 'odit';
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'voluptate';
    $request->zone = 'similique';

    $requestSecurity = new ContainerProjectsZonesGetServerconfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesGetServerconfig($request, $requestSecurity);

    if ($response->serverConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesOperationsCancel

Cancels the specified operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CancelOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->cancelOperationRequest = new CancelOperationRequest();
    $request->cancelOperationRequest->name = 'Oscar Bailey';
    $request->cancelOperationRequest->operationId = 'nesciunt';
    $request->cancelOperationRequest->projectId = 'mollitia';
    $request->cancelOperationRequest->zone = 'dignissimos';
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'veniam';
    $request->key = 'reiciendis';
    $request->oauthToken = 'ab';
    $request->operationId = 'modi';
    $request->prettyPrint = false;
    $request->projectId = 'aut';
    $request->quotaUser = 'aut';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'odio';
    $request->zone = 'commodi';

    $requestSecurity = new ContainerProjectsZonesOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesOperationsGet

Gets the specified operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'consectetur';
    $request->key = 'nesciunt';
    $request->name = 'Miss Patti Schiller';
    $request->oauthToken = 'quas';
    $request->operationId = 'et';
    $request->prettyPrint = false;
    $request->projectId = 'facilis';
    $request->quotaUser = 'amet';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'fuga';
    $request->zone = 'alias';

    $requestSecurity = new ContainerProjectsZonesOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containerProjectsZonesOperationsList

Lists all operations in a project in the specified zone or all zones.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsZonesOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsZonesOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laudantium';
    $request->fields = 'repellendus';
    $request->key = 'veritatis';
    $request->oauthToken = 'quae';
    $request->parent = 'eaque';
    $request->prettyPrint = false;
    $request->projectId = 'saepe';
    $request->quotaUser = 'delectus';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'nulla';
    $request->zone = 'officia';

    $requestSecurity = new ContainerProjectsZonesOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->containerProjectsZonesOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
