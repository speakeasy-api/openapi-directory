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
use \OpenAPI\OpenAPI\Models\Shared\GkeBackupAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\HttpLoadBalancing;
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
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkTags;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfigDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodePool;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscalingLocationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
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
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterMasterGlobalAccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannel;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannelChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUsageExportConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\ConsumptionMeteringConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedNodes;
use \OpenAPI\OpenAPI\Models\Shared\ClusterStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerticalPodAutoscaling;
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
    $request->createClusterRequestInput->cluster->addonsConfig->gkeBackupAgentConfig = new GkeBackupAgentConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gkeBackupAgentConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->horizontalPodAutoscaling = new HorizontalPodAutoscaling();
    $request->createClusterRequestInput->cluster->addonsConfig->horizontalPodAutoscaling->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->httpLoadBalancing = new HttpLoadBalancing();
    $request->createClusterRequestInput->cluster->addonsConfig->httpLoadBalancing->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->kubernetesDashboard = new KubernetesDashboard();
    $request->createClusterRequestInput->cluster->addonsConfig->kubernetesDashboard->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->networkPolicyConfig = new NetworkPolicyConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->networkPolicyConfig->disabled = false;
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig = new AuthenticatorGroupsConfig();
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig->securityGroup = 'deleniti';
    $request->createClusterRequestInput->cluster->autopilot = new Autopilot();
    $request->createClusterRequestInput->cluster->autopilot->enabled = false;
    $request->createClusterRequestInput->cluster->autoscaling = new ClusterAutoscaling();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningLocations = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->bootDiskKmsKey = 'molestiae';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->diskSizeGb = 264555;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->diskType = 'qui';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->imageType = 'impedit';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management = new NodeManagement();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->autoRepair = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->autoUpgrade = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions = new AutoUpgradeOptions();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->autoUpgradeStartTime = 'cum';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->description = 'esse';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->minCpuPlatform = 'ipsum';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->oauthScopes = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->serviceAccount = 'natus';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings = new UpgradeSettings();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'sed';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 612096;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 2223.21;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'natus';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->maxSurge = 386489;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->maxUnavailable = 943749;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::SURGE;
    $request->createClusterRequestInput->cluster->autoscaling->autoscalingProfile = ClusterAutoscalingAutoscalingProfileEnum::BALANCED;
    $request->createClusterRequestInput->cluster->autoscaling->enableNodeAutoprovisioning = false;
    $request->createClusterRequestInput->cluster->autoscaling->resourceLimits = [
        new ResourceLimit(),
        new ResourceLimit(),
    ];
    $request->createClusterRequestInput->cluster->binaryAuthorization = new BinaryAuthorization();
    $request->createClusterRequestInput->cluster->binaryAuthorization->enabled = false;
    $request->createClusterRequestInput->cluster->binaryAuthorization->evaluationMode = BinaryAuthorizationEvaluationModeEnum::DISABLED;
    $request->createClusterRequestInput->cluster->clusterIpv4Cidr = 'iste';
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
    $request->createClusterRequestInput->cluster->masterAuth = new MasterAuth();
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificate = 'possimus';
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificateConfig = new ClientCertificateConfig();
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificateConfig->issueClientCertificate = false;
    $request->createClusterRequestInput->cluster->masterAuth->clientKey = 'aut';
    $request->createClusterRequestInput->cluster->masterAuth->clusterCaCertificate = 'quasi';
    $request->createClusterRequestInput->cluster->masterAuth->password = 'error';
    $request->createClusterRequestInput->cluster->masterAuth->username = 'Rodrigo97';
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
        new CidrBlock(),
        new CidrBlock(),
        new CidrBlock(),
    ];
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->enabled = false;
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->gcpPublicCidrsAccessEnabled = false;
    $request->createClusterRequestInput->cluster->meshCertificates = new MeshCertificates();
    $request->createClusterRequestInput->cluster->meshCertificates->enableCertificates = false;
    $request->createClusterRequestInput->cluster->monitoringConfig = new MonitoringConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->componentConfig = new MonitoringComponentConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->componentConfig->enableComponents = [
        MonitoringComponentConfigEnableComponentsEnum::APISERVER,
        MonitoringComponentConfigEnableComponentsEnum::APISERVER,
        MonitoringComponentConfigEnableComponentsEnum::CONTROLLER_MANAGER,
        MonitoringComponentConfigEnableComponentsEnum::COMPONENT_UNSPECIFIED,
    ];
    $request->createClusterRequestInput->cluster->monitoringConfig->managedPrometheusConfig = new ManagedPrometheusConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->managedPrometheusConfig->enabled = false;
    $request->createClusterRequestInput->cluster->monitoringService = 'omnis';
    $request->createClusterRequestInput->cluster->name = 'Ms. Karla Aufderhar';
    $request->createClusterRequestInput->cluster->network = 'maiores';
    $request->createClusterRequestInput->cluster->networkConfig = new NetworkConfig();
    $request->createClusterRequestInput->cluster->networkConfig->datapathProvider = NetworkConfigDatapathProviderEnum::DATAPATH_PROVIDER_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->networkConfig->defaultSnatStatus = new DefaultSnatStatus();
    $request->createClusterRequestInput->cluster->networkConfig->defaultSnatStatus->disabled = false;
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig = new DNSConfig();
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDns = DNSConfigClusterDNSEnum::PLATFORM_DEFAULT;
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDnsDomain = 'dolore';
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDnsScope = DNSConfigClusterDNSScopeEnum::CLUSTER_SCOPE;
    $request->createClusterRequestInput->cluster->networkConfig->enableIntraNodeVisibility = false;
    $request->createClusterRequestInput->cluster->networkConfig->enableL4ilbSubsetting = false;
    $request->createClusterRequestInput->cluster->networkConfig->gatewayApiConfig = new GatewayAPIConfig();
    $request->createClusterRequestInput->cluster->networkConfig->gatewayApiConfig->channel = GatewayAPIConfigChannelEnum::CHANNEL_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->networkConfig->network = 'harum';
    $request->createClusterRequestInput->cluster->networkConfig->privateIpv6GoogleAccess = NetworkConfigPrivateIpv6GoogleAccessEnum::PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED;
    $request->createClusterRequestInput->cluster->networkConfig->serviceExternalIpsConfig = new ServiceExternalIPsConfig();
    $request->createClusterRequestInput->cluster->networkConfig->serviceExternalIpsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->networkConfig->subnetwork = 'accusamus';
    $request->createClusterRequestInput->cluster->networkPolicy = new NetworkPolicy();
    $request->createClusterRequestInput->cluster->networkPolicy->enabled = false;
    $request->createClusterRequestInput->cluster->networkPolicy->provider = NetworkPolicyProviderEnum::PROVIDER_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig = new NodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->createClusterRequestInput->cluster->nodeConfig->advancedMachineFeatures->threadsPerCore = 'quae';
    $request->createClusterRequestInput->cluster->nodeConfig->bootDiskKmsKey = 'ipsum';
    $request->createClusterRequestInput->cluster->nodeConfig->confidentialNodes = new ConfidentialNodes();
    $request->createClusterRequestInput->cluster->nodeConfig->confidentialNodes->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->diskSizeGb = 692472;
    $request->createClusterRequestInput->cluster->nodeConfig->diskType = 'molestias';
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageLocalSsdConfig->localSsdCount = 566602;
    $request->createClusterRequestInput->cluster->nodeConfig->fastSocket = new FastSocket();
    $request->createClusterRequestInput->cluster->nodeConfig->fastSocket->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->gcfsConfig = new GcfsConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->gcfsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->gvnic = new VirtualNIC();
    $request->createClusterRequestInput->cluster->nodeConfig->gvnic->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->imageType = 'pariatur';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig = new NodeKubeletConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuCfsQuota = false;
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuCfsQuotaPeriod = 'modi';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuManagerPolicy = 'praesentium';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->podPidsLimit = 'rem';
    $request->createClusterRequestInput->cluster->nodeConfig->labels = [
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
        'itaque' => 'incidunt',
        'enim' => 'consequatur',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig = new LinuxNodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_V2;
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig->sysctls = [
        'explicabo' => 'deserunt',
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->localNvmeSsdBlockConfig->localSsdCount = 586513;
    $request->createClusterRequestInput->cluster->nodeConfig->localSsdCount = 552822;
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig = new NodePoolLoggingConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::VARIANT_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig->machineType = 'magni';
    $request->createClusterRequestInput->cluster->nodeConfig->metadata = [
        'ipsam' => 'alias',
        'fugit' => 'dolorum',
        'excepturi' => 'tempora',
        'facilis' => 'tempore',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->minCpuPlatform = 'labore';
    $request->createClusterRequestInput->cluster->nodeConfig->nodeGroup = 'delectus';
    $request->createClusterRequestInput->cluster->nodeConfig->oauthScopes = [
        'non',
        'eligendi',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->preemptible = false;
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity = new ReservationAffinity();
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::ANY_RESERVATION;
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->key = 'aliquid';
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->values = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->resourceLabels = [
        'debitis' => 'a',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->sandboxConfig = new SandboxConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->sandboxConfig->type = SandboxConfigTypeEnum::GVISOR;
    $request->createClusterRequestInput->cluster->nodeConfig->serviceAccount = 'in';
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createClusterRequestInput->cluster->nodeConfig->spot = false;
    $request->createClusterRequestInput->cluster->nodeConfig->tags = [
        'illum',
        'maiores',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->taints = [
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->windowsNodeConfig = new WindowsNodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::MODE_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeIpv4CidrSize = 767024;
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig = new NodePoolAutoConfig();
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig->networkTags = new NetworkTags();
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig->networkTags->tags = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
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
        FilterEventTypeEnum::SECURITY_BULLETIN_EVENT,
    ];
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->topic = 'quidem';
    $request->createClusterRequestInput->cluster->privateClusterConfig = new PrivateClusterConfig();
    $request->createClusterRequestInput->cluster->privateClusterConfig->enablePrivateEndpoint = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->enablePrivateNodes = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig();
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterGlobalAccessConfig->enabled = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterIpv4CidrBlock = 'provident';
    $request->createClusterRequestInput->cluster->privateClusterConfig->peeringName = 'nam';
    $request->createClusterRequestInput->cluster->privateClusterConfig->privateEndpoint = 'id';
    $request->createClusterRequestInput->cluster->privateClusterConfig->privateEndpointSubnetwork = 'blanditiis';
    $request->createClusterRequestInput->cluster->privateClusterConfig->publicEndpoint = 'deleniti';
    $request->createClusterRequestInput->cluster->releaseChannel = new ReleaseChannel();
    $request->createClusterRequestInput->cluster->releaseChannel->channel = ReleaseChannelChannelEnum::STABLE;
    $request->createClusterRequestInput->cluster->resourceLabels = [
        'deserunt' => 'nisi',
    ];
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig = new ResourceUsageExportConfig();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->bigqueryDestination = new BigQueryDestination();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->bigqueryDestination->datasetId = 'vel';
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->consumptionMeteringConfig = new ConsumptionMeteringConfig();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->consumptionMeteringConfig->enabled = false;
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->enableNetworkEgressMetering = false;
    $request->createClusterRequestInput->cluster->selfLink = 'natus';
    $request->createClusterRequestInput->cluster->servicesIpv4Cidr = 'omnis';
    $request->createClusterRequestInput->cluster->shieldedNodes = new ShieldedNodes();
    $request->createClusterRequestInput->cluster->shieldedNodes->enabled = false;
    $request->createClusterRequestInput->cluster->status = ClusterStatusEnum::RECONCILING;
    $request->createClusterRequestInput->cluster->statusMessage = 'perferendis';
    $request->createClusterRequestInput->cluster->subnetwork = 'nihil';
    $request->createClusterRequestInput->cluster->tpuIpv4CidrBlock = 'magnam';
    $request->createClusterRequestInput->cluster->verticalPodAutoscaling = new VerticalPodAutoscaling();
    $request->createClusterRequestInput->cluster->verticalPodAutoscaling->enabled = false;
    $request->createClusterRequestInput->cluster->workloadIdentityConfig = new WorkloadIdentityConfig();
    $request->createClusterRequestInput->cluster->workloadIdentityConfig->workloadPool = 'distinctio';
    $request->createClusterRequestInput->cluster->zone = 'id';
    $request->createClusterRequestInput->parent = 'labore';
    $request->createClusterRequestInput->projectId = 'labore';
    $request->createClusterRequestInput->zone = 'suscipit';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'vero';
    $request->key = 'aspernatur';
    $request->oauthToken = 'architecto';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'ullam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
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
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->key = 'debitis';
    $request->oauthToken = 'eius';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->projectId = 'deleniti';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'architecto';
    $request->zone = 'architecto';

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
        'expedita' => 'nihil',
        'repellat' => 'quibusdam',
    ];
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'accusantium';
    $request->key = 'consequuntur';
    $request->name = 'Miss Nick Cummerata';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';

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
use \OpenAPI\OpenAPI\Models\Shared\NodeManagement;
use \OpenAPI\OpenAPI\Models\Shared\AutoUpgradeOptions;
use \OpenAPI\OpenAPI\Models\Shared\MaxPodsConstraint;
use \OpenAPI\OpenAPI\Models\Shared\NodeNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
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
    $request->createNodePoolRequest->clusterId = 'ea';
    $request->createNodePoolRequest->nodePool = new NodePool();
    $request->createNodePoolRequest->nodePool->autoscaling = new NodePoolAutoscaling();
    $request->createNodePoolRequest->nodePool->autoscaling->autoprovisioned = false;
    $request->createNodePoolRequest->nodePool->autoscaling->enabled = false;
    $request->createNodePoolRequest->nodePool->autoscaling->locationPolicy = NodePoolAutoscalingLocationPolicyEnum::LOCATION_POLICY_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->autoscaling->maxNodeCount = 69167;
    $request->createNodePoolRequest->nodePool->autoscaling->minNodeCount = 982575;
    $request->createNodePoolRequest->nodePool->autoscaling->totalMaxNodeCount = 697429;
    $request->createNodePoolRequest->nodePool->autoscaling->totalMinNodeCount = 373291;
    $request->createNodePoolRequest->nodePool->conditions = [
        new StatusCondition(),
        new StatusCondition(),
    ];
    $request->createNodePoolRequest->nodePool->config = new NodeConfig();
    $request->createNodePoolRequest->nodePool->config->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->createNodePoolRequest->nodePool->config->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->createNodePoolRequest->nodePool->config->advancedMachineFeatures->threadsPerCore = 'nam';
    $request->createNodePoolRequest->nodePool->config->bootDiskKmsKey = 'eaque';
    $request->createNodePoolRequest->nodePool->config->confidentialNodes = new ConfidentialNodes();
    $request->createNodePoolRequest->nodePool->config->confidentialNodes->enabled = false;
    $request->createNodePoolRequest->nodePool->config->diskSizeGb = 866383;
    $request->createNodePoolRequest->nodePool->config->diskType = 'nemo';
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig();
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageLocalSsdConfig->localSsdCount = 975522;
    $request->createNodePoolRequest->nodePool->config->fastSocket = new FastSocket();
    $request->createNodePoolRequest->nodePool->config->fastSocket->enabled = false;
    $request->createNodePoolRequest->nodePool->config->gcfsConfig = new GcfsConfig();
    $request->createNodePoolRequest->nodePool->config->gcfsConfig->enabled = false;
    $request->createNodePoolRequest->nodePool->config->gvnic = new VirtualNIC();
    $request->createNodePoolRequest->nodePool->config->gvnic->enabled = false;
    $request->createNodePoolRequest->nodePool->config->imageType = 'perferendis';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig = new NodeKubeletConfig();
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuCfsQuota = false;
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuCfsQuotaPeriod = 'fugiat';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuManagerPolicy = 'amet';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->podPidsLimit = 'aut';
    $request->createNodePoolRequest->nodePool->config->labels = [
        'corporis' => 'hic',
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
    ];
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig = new LinuxNodeConfig();
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig->sysctls = [
        'nesciunt' => 'eos',
        'perferendis' => 'dolores',
    ];
    $request->createNodePoolRequest->nodePool->config->localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig();
    $request->createNodePoolRequest->nodePool->config->localNvmeSsdBlockConfig->localSsdCount = 793698;
    $request->createNodePoolRequest->nodePool->config->localSsdCount = 463451;
    $request->createNodePoolRequest->nodePool->config->loggingConfig = new NodePoolLoggingConfig();
    $request->createNodePoolRequest->nodePool->config->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->createNodePoolRequest->nodePool->config->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::VARIANT_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->config->machineType = 'vero';
    $request->createNodePoolRequest->nodePool->config->metadata = [
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->createNodePoolRequest->nodePool->config->minCpuPlatform = 'perspiciatis';
    $request->createNodePoolRequest->nodePool->config->nodeGroup = 'voluptatem';
    $request->createNodePoolRequest->nodePool->config->oauthScopes = [
        'consequuntur',
        'blanditiis',
        'error',
        'eaque',
    ];
    $request->createNodePoolRequest->nodePool->config->preemptible = false;
    $request->createNodePoolRequest->nodePool->config->reservationAffinity = new ReservationAffinity();
    $request->createNodePoolRequest->nodePool->config->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::ANY_RESERVATION;
    $request->createNodePoolRequest->nodePool->config->reservationAffinity->key = 'rerum';
    $request->createNodePoolRequest->nodePool->config->reservationAffinity->values = [
        'asperiores',
    ];
    $request->createNodePoolRequest->nodePool->config->resourceLabels = [
        'modi' => 'iste',
        'dolorum' => 'deleniti',
        'pariatur' => 'provident',
        'nobis' => 'libero',
    ];
    $request->createNodePoolRequest->nodePool->config->sandboxConfig = new SandboxConfig();
    $request->createNodePoolRequest->nodePool->config->sandboxConfig->type = SandboxConfigTypeEnum::GVISOR;
    $request->createNodePoolRequest->nodePool->config->serviceAccount = 'quaerat';
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createNodePoolRequest->nodePool->config->spot = false;
    $request->createNodePoolRequest->nodePool->config->tags = [
        'aliquid',
        'dolorem',
        'dolorem',
    ];
    $request->createNodePoolRequest->nodePool->config->taints = [
        new NodeTaint(),
    ];
    $request->createNodePoolRequest->nodePool->config->windowsNodeConfig = new WindowsNodeConfig();
    $request->createNodePoolRequest->nodePool->config->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->config->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->createNodePoolRequest->nodePool->config->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::MODE_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->etag = 'hic';
    $request->createNodePoolRequest->nodePool->initialNodeCount = 569574;
    $request->createNodePoolRequest->nodePool->instanceGroupUrls = [
        'voluptate',
        'dignissimos',
        'reiciendis',
    ];
    $request->createNodePoolRequest->nodePool->locations = [
        'dolorum',
    ];
    $request->createNodePoolRequest->nodePool->management = new NodeManagement();
    $request->createNodePoolRequest->nodePool->management->autoRepair = false;
    $request->createNodePoolRequest->nodePool->management->autoUpgrade = false;
    $request->createNodePoolRequest->nodePool->management->upgradeOptions = new AutoUpgradeOptions();
    $request->createNodePoolRequest->nodePool->management->upgradeOptions->autoUpgradeStartTime = 'numquam';
    $request->createNodePoolRequest->nodePool->management->upgradeOptions->description = 'veritatis';
    $request->createNodePoolRequest->nodePool->maxPodsConstraint = new MaxPodsConstraint();
    $request->createNodePoolRequest->nodePool->maxPodsConstraint->maxPodsPerNode = 'ipsa';
    $request->createNodePoolRequest->nodePool->name = 'Vera Kuhlman';
    $request->createNodePoolRequest->nodePool->networkConfig = new NodeNetworkConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->createPodRange = false;
    $request->createNodePoolRequest->nodePool->networkConfig->enablePrivateNodes = false;
    $request->createNodePoolRequest->nodePool->networkConfig->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->createNodePoolRequest->nodePool->networkConfig->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->podCidrOverprovisionConfig->disable = false;
    $request->createNodePoolRequest->nodePool->networkConfig->podIpv4CidrBlock = 'voluptatibus';
    $request->createNodePoolRequest->nodePool->networkConfig->podRange = 'voluptas';
    $request->createNodePoolRequest->nodePool->placementPolicy = new PlacementPolicy();
    $request->createNodePoolRequest->nodePool->placementPolicy->type = PlacementPolicyTypeEnum::COMPACT;
    $request->createNodePoolRequest->nodePool->podIpv4CidrSize = 179603;
    $request->createNodePoolRequest->nodePool->selfLink = 'atque';
    $request->createNodePoolRequest->nodePool->status = NodePoolStatusEnum::STATUS_UNSPECIFIED;
    $request->createNodePoolRequest->nodePool->statusMessage = 'fugiat';
    $request->createNodePoolRequest->nodePool->updateInfo = new UpdateInfo();
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo = new BlueGreenInfo();
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->blueInstanceGroupUrls = [
        'soluta',
    ];
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->bluePoolDeletionStartTime = 'dolorum';
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->greenInstanceGroupUrls = [
        'voluptate',
        'dolorum',
    ];
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->greenPoolVersion = 'deleniti';
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->phase = BlueGreenInfoPhaseEnum::DRAINING_BLUE_POOL;
    $request->createNodePoolRequest->nodePool->upgradeSettings = new UpgradeSettings();
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'necessitatibus';
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 714697;
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 9903.39;
    $request->createNodePoolRequest->nodePool->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'nihil';
    $request->createNodePoolRequest->nodePool->upgradeSettings->maxSurge = 216897;
    $request->createNodePoolRequest->nodePool->upgradeSettings->maxUnavailable = 456015;
    $request->createNodePoolRequest->nodePool->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::BLUE_GREEN;
    $request->createNodePoolRequest->nodePool->version = 'saepe';
    $request->createNodePoolRequest->parent = 'eius';
    $request->createNodePoolRequest->projectId = 'aspernatur';
    $request->createNodePoolRequest->zone = 'perferendis';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'ad';
    $request->key = 'saepe';
    $request->oauthToken = 'suscipit';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'repellendus';

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
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->clusterId = 'quaerat';
    $request->fields = 'tempora';
    $request->key = 'vel';
    $request->name = 'Erick Denesik';
    $request->nodePoolId = 'esse';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->projectId = 'iusto';
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'tenetur';
    $request->zone = 'amet';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->clusterId = 'dolorem';
    $request->fields = 'sapiente';
    $request->key = 'totam';
    $request->oauthToken = 'nihil';
    $request->parent = 'sit';
    $request->prettyPrint = false;
    $request->projectId = 'expedita';
    $request->quotaUser = 'neque';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'vel';
    $request->zone = 'libero';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->rollbackNodePoolUpgradeRequest = new RollbackNodePoolUpgradeRequest();
    $request->rollbackNodePoolUpgradeRequest->clusterId = 'deserunt';
    $request->rollbackNodePoolUpgradeRequest->name = 'Tracy Gottlieb';
    $request->rollbackNodePoolUpgradeRequest->nodePoolId = 'maxime';
    $request->rollbackNodePoolUpgradeRequest->projectId = 'pariatur';
    $request->rollbackNodePoolUpgradeRequest->respectPdb = false;
    $request->rollbackNodePoolUpgradeRequest->zone = 'soluta';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'incidunt';
    $request->key = 'aspernatur';
    $request->name = 'Verna Purdy';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'neque';

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

Sets the autoscaling settings for the specified node pool.

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
    $request->setNodePoolAutoscalingRequest->autoscaling->locationPolicy = NodePoolAutoscalingLocationPolicyEnum::LOCATION_POLICY_UNSPECIFIED;
    $request->setNodePoolAutoscalingRequest->autoscaling->maxNodeCount = 488056;
    $request->setNodePoolAutoscalingRequest->autoscaling->minNodeCount = 124833;
    $request->setNodePoolAutoscalingRequest->autoscaling->totalMaxNodeCount = 355613;
    $request->setNodePoolAutoscalingRequest->autoscaling->totalMinNodeCount = 722081;
    $request->setNodePoolAutoscalingRequest->clusterId = 'hic';
    $request->setNodePoolAutoscalingRequest->name = 'Erma Rogahn PhD';
    $request->setNodePoolAutoscalingRequest->nodePoolId = 'ipsum';
    $request->setNodePoolAutoscalingRequest->projectId = 'veritatis';
    $request->setNodePoolAutoscalingRequest->zone = 'nobis';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cupiditate';
    $request->fields = 'aperiam';
    $request->key = 'delectus';
    $request->name = 'Joanne Grant';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quas';

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
    $request->setNodePoolManagementRequest->clusterId = 'consequatur';
    $request->setNodePoolManagementRequest->management = new NodeManagement();
    $request->setNodePoolManagementRequest->management->autoRepair = false;
    $request->setNodePoolManagementRequest->management->autoUpgrade = false;
    $request->setNodePoolManagementRequest->management->upgradeOptions = new AutoUpgradeOptions();
    $request->setNodePoolManagementRequest->management->upgradeOptions->autoUpgradeStartTime = 'est';
    $request->setNodePoolManagementRequest->management->upgradeOptions->description = 'repellendus';
    $request->setNodePoolManagementRequest->name = 'Domingo Grady';
    $request->setNodePoolManagementRequest->nodePoolId = 'qui';
    $request->setNodePoolManagementRequest->projectId = 'quae';
    $request->setNodePoolManagementRequest->zone = 'laudantium';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'quisquam';
    $request->key = 'vero';
    $request->name = 'Tim Erdman';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'dignissimos';

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

Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setNodePoolSizeRequest = new SetNodePoolSizeRequest();
    $request->setNodePoolSizeRequest->clusterId = 'distinctio';
    $request->setNodePoolSizeRequest->name = 'Lonnie Murray';
    $request->setNodePoolSizeRequest->nodeCount = 498140;
    $request->setNodePoolSizeRequest->nodePoolId = 'dolore';
    $request->setNodePoolSizeRequest->projectId = 'quibusdam';
    $request->setNodePoolSizeRequest->zone = 'illum';
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'aut';
    $request->key = 'voluptatibus';
    $request->name = 'Freda Cormier';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'ducimus';

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

Updates the version and/or image type for the specified node pool.

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersNodePoolsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersNodePoolsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->updateNodePoolRequest = new UpdateNodePoolRequest();
    $request->updateNodePoolRequest->clusterId = 'officia';
    $request->updateNodePoolRequest->confidentialNodes = new ConfidentialNodes();
    $request->updateNodePoolRequest->confidentialNodes->enabled = false;
    $request->updateNodePoolRequest->etag = 'tempora';
    $request->updateNodePoolRequest->fastSocket = new FastSocket();
    $request->updateNodePoolRequest->fastSocket->enabled = false;
    $request->updateNodePoolRequest->gcfsConfig = new GcfsConfig();
    $request->updateNodePoolRequest->gcfsConfig->enabled = false;
    $request->updateNodePoolRequest->gvnic = new VirtualNIC();
    $request->updateNodePoolRequest->gvnic->enabled = false;
    $request->updateNodePoolRequest->imageType = 'ipsam';
    $request->updateNodePoolRequest->kubeletConfig = new NodeKubeletConfig();
    $request->updateNodePoolRequest->kubeletConfig->cpuCfsQuota = false;
    $request->updateNodePoolRequest->kubeletConfig->cpuCfsQuotaPeriod = 'ea';
    $request->updateNodePoolRequest->kubeletConfig->cpuManagerPolicy = 'aspernatur';
    $request->updateNodePoolRequest->kubeletConfig->podPidsLimit = 'vel';
    $request->updateNodePoolRequest->labels = new NodeLabels();
    $request->updateNodePoolRequest->labels->labels = [
        'magnam' => 'ratione',
        'ex' => 'laudantium',
        'dicta' => 'dolor',
        'maiores' => 'quasi',
    ];
    $request->updateNodePoolRequest->linuxNodeConfig = new LinuxNodeConfig();
    $request->updateNodePoolRequest->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_V1;
    $request->updateNodePoolRequest->linuxNodeConfig->sysctls = [
        'excepturi' => 'voluptatibus',
        'nostrum' => 'sapiente',
        'quisquam' => 'saepe',
        'ea' => 'impedit',
    ];
    $request->updateNodePoolRequest->locations = [
        'veniam',
        'aliquid',
    ];
    $request->updateNodePoolRequest->loggingConfig = new NodePoolLoggingConfig();
    $request->updateNodePoolRequest->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->updateNodePoolRequest->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::VARIANT_UNSPECIFIED;
    $request->updateNodePoolRequest->name = 'Rosemary Ryan';
    $request->updateNodePoolRequest->nodeNetworkConfig = new NodeNetworkConfig();
    $request->updateNodePoolRequest->nodeNetworkConfig->createPodRange = false;
    $request->updateNodePoolRequest->nodeNetworkConfig->enablePrivateNodes = false;
    $request->updateNodePoolRequest->nodeNetworkConfig->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->updateNodePoolRequest->nodeNetworkConfig->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER_UNSPECIFIED;
    $request->updateNodePoolRequest->nodeNetworkConfig->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->updateNodePoolRequest->nodeNetworkConfig->podCidrOverprovisionConfig->disable = false;
    $request->updateNodePoolRequest->nodeNetworkConfig->podIpv4CidrBlock = 'minima';
    $request->updateNodePoolRequest->nodeNetworkConfig->podRange = 'eaque';
    $request->updateNodePoolRequest->nodePoolId = 'a';
    $request->updateNodePoolRequest->nodeVersion = 'libero';
    $request->updateNodePoolRequest->projectId = 'aut';
    $request->updateNodePoolRequest->resourceLabels = new ResourceLabels();
    $request->updateNodePoolRequest->resourceLabels->labels = [
        'deleniti' => 'impedit',
    ];
    $request->updateNodePoolRequest->tags = new NetworkTags();
    $request->updateNodePoolRequest->tags->tags = [
        'fugit',
        'accusamus',
    ];
    $request->updateNodePoolRequest->taints = new NodeTaints();
    $request->updateNodePoolRequest->taints->taints = [
        new NodeTaint(),
    ];
    $request->updateNodePoolRequest->upgradeSettings = new UpgradeSettings();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'non';
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 89603;
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 6774.12;
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'laborum';
    $request->updateNodePoolRequest->upgradeSettings->maxSurge = 810424;
    $request->updateNodePoolRequest->upgradeSettings->maxUnavailable = 245367;
    $request->updateNodePoolRequest->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::BLUE_GREEN;
    $request->updateNodePoolRequest->windowsNodeConfig = new WindowsNodeConfig();
    $request->updateNodePoolRequest->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_LTSC2019;
    $request->updateNodePoolRequest->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->updateNodePoolRequest->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::GKE_METADATA;
    $request->updateNodePoolRequest->zone = 'quas';
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'libero';
    $request->key = 'quasi';
    $request->name = 'Carrie Cole IV';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'esse';

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
use \OpenAPI\OpenAPI\Models\Shared\GkeBackupAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\HttpLoadBalancing;
use \OpenAPI\OpenAPI\Models\Shared\KubernetesDashboard;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPolicyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainerProjectsLocationsClustersSetAddonsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainerProjectsLocationsClustersSetAddonsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setAddonsConfigRequest = new SetAddonsConfigRequest();
    $request->setAddonsConfigRequest->addonsConfig = new AddonsConfig();
    $request->setAddonsConfigRequest->addonsConfig->cloudRunConfig = new CloudRunConfig();
    $request->setAddonsConfigRequest->addonsConfig->cloudRunConfig->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->cloudRunConfig->loadBalancerType = CloudRunConfigLoadBalancerTypeEnum::LOAD_BALANCER_TYPE_EXTERNAL;
    $request->setAddonsConfigRequest->addonsConfig->configConnectorConfig = new ConfigConnectorConfig();
    $request->setAddonsConfigRequest->addonsConfig->configConnectorConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->dnsCacheConfig = new DnsCacheConfig();
    $request->setAddonsConfigRequest->addonsConfig->dnsCacheConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig();
    $request->setAddonsConfigRequest->addonsConfig->gcePersistentDiskCsiDriverConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig();
    $request->setAddonsConfigRequest->addonsConfig->gcpFilestoreCsiDriverConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gkeBackupAgentConfig = new GkeBackupAgentConfig();
    $request->setAddonsConfigRequest->addonsConfig->gkeBackupAgentConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->horizontalPodAutoscaling = new HorizontalPodAutoscaling();
    $request->setAddonsConfigRequest->addonsConfig->horizontalPodAutoscaling->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->httpLoadBalancing = new HttpLoadBalancing();
    $request->setAddonsConfigRequest->addonsConfig->httpLoadBalancing->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->kubernetesDashboard = new KubernetesDashboard();
    $request->setAddonsConfigRequest->addonsConfig->kubernetesDashboard->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->networkPolicyConfig = new NetworkPolicyConfig();
    $request->setAddonsConfigRequest->addonsConfig->networkPolicyConfig->disabled = false;
    $request->setAddonsConfigRequest->clusterId = 'fuga';
    $request->setAddonsConfigRequest->name = 'Yvette Stehr';
    $request->setAddonsConfigRequest->projectId = 'suscipit';
    $request->setAddonsConfigRequest->zone = 'assumenda';
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quisquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->name = 'Rickey DuBuque';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'eos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setLegacyAbacRequest = new SetLegacyAbacRequest();
    $request->setLegacyAbacRequest->clusterId = 'ab';
    $request->setLegacyAbacRequest->enabled = false;
    $request->setLegacyAbacRequest->name = 'William Goodwin';
    $request->setLegacyAbacRequest->projectId = 'aspernatur';
    $request->setLegacyAbacRequest->zone = 'sequi';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'aperiam';
    $request->key = 'distinctio';
    $request->name = 'Cody Blick';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquam';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'occaecati';

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

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

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
    $request->setLocationsRequest->clusterId = 'sapiente';
    $request->setLocationsRequest->locations = [
        'deserunt',
    ];
    $request->setLocationsRequest->name = 'Carol Sawayn';
    $request->setLocationsRequest->projectId = 'praesentium';
    $request->setLocationsRequest->zone = 'consequuntur';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'mollitia';
    $request->key = 'incidunt';
    $request->name = 'Roy Hansen';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'explicabo';

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
    $request->setLoggingServiceRequest->clusterId = 'occaecati';
    $request->setLoggingServiceRequest->loggingService = 'atque';
    $request->setLoggingServiceRequest->name = 'Tamara Vandervort IV';
    $request->setLoggingServiceRequest->projectId = 'quod';
    $request->setLoggingServiceRequest->zone = 'nam';
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'saepe';
    $request->key = 'vel';
    $request->name = 'Javier Price';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'culpa';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setMaintenancePolicyRequest = new SetMaintenancePolicyRequest();
    $request->setMaintenancePolicyRequest->clusterId = 'adipisci';
    $request->setMaintenancePolicyRequest->maintenancePolicy = new MaintenancePolicy();
    $request->setMaintenancePolicyRequest->maintenancePolicy->resourceVersion = 'cumque';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window = new MaintenanceWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->dailyMaintenanceWindow = new DailyMaintenanceWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->dailyMaintenanceWindow->duration = 'consequuntur';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->dailyMaintenanceWindow->startTime = 'consequatur';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->maintenanceExclusions = [
        'quaerat' => new TimeWindow(),
        'sapiente' => new TimeWindow(),
        'consectetur' => new TimeWindow(),
        'esse' => new TimeWindow(),
    ];
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow = new RecurringTimeWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->recurrence = 'blanditiis';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window = new TimeWindow();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->endTime = 'provident';
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions = new MaintenanceExclusionOptions();
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions->scope = MaintenanceExclusionOptionsScopeEnum::NO_MINOR_OR_NODE_UPGRADES;
    $request->setMaintenancePolicyRequest->maintenancePolicy->window->recurringWindow->window->startTime = 'nulla';
    $request->setMaintenancePolicyRequest->name = 'Cory Boyle';
    $request->setMaintenancePolicyRequest->projectId = 'sint';
    $request->setMaintenancePolicyRequest->zone = 'pariatur';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eveniet';
    $request->fields = 'asperiores';
    $request->key = 'facere';
    $request->name = 'Marilyn Botsford';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'earum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setMasterAuthRequest = new SetMasterAuthRequest();
    $request->setMasterAuthRequest->action = SetMasterAuthRequestActionEnum::SET_PASSWORD;
    $request->setMasterAuthRequest->clusterId = 'eius';
    $request->setMasterAuthRequest->name = 'Mrs. Gilberto Roberts';
    $request->setMasterAuthRequest->projectId = 'dicta';
    $request->setMasterAuthRequest->update = new MasterAuth();
    $request->setMasterAuthRequest->update->clientCertificate = 'ullam';
    $request->setMasterAuthRequest->update->clientCertificateConfig = new ClientCertificateConfig();
    $request->setMasterAuthRequest->update->clientCertificateConfig->issueClientCertificate = false;
    $request->setMasterAuthRequest->update->clientKey = 'reprehenderit';
    $request->setMasterAuthRequest->update->clusterCaCertificate = 'ullam';
    $request->setMasterAuthRequest->update->password = 'nisi';
    $request->setMasterAuthRequest->update->username = 'Agnes84';
    $request->setMasterAuthRequest->zone = 'ex';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'architecto';
    $request->key = 'omnis';
    $request->name = 'Ms. Roger Strosin II';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'iste';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setMonitoringServiceRequest = new SetMonitoringServiceRequest();
    $request->setMonitoringServiceRequest->clusterId = 'accusantium';
    $request->setMonitoringServiceRequest->monitoringService = 'rem';
    $request->setMonitoringServiceRequest->name = 'Marsha Keebler IV';
    $request->setMonitoringServiceRequest->projectId = 'non';
    $request->setMonitoringServiceRequest->zone = 'voluptatem';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'impedit';
    $request->key = 'explicabo';
    $request->name = 'Dr. Maria Kulas';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'asperiores';

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
    $request->setNetworkPolicyRequest->clusterId = 'ea';
    $request->setNetworkPolicyRequest->name = 'Kathryn Sipes';
    $request->setNetworkPolicyRequest->networkPolicy = new NetworkPolicy();
    $request->setNetworkPolicyRequest->networkPolicy->enabled = false;
    $request->setNetworkPolicyRequest->networkPolicy->provider = NetworkPolicyProviderEnum::PROVIDER_UNSPECIFIED;
    $request->setNetworkPolicyRequest->projectId = 'officia';
    $request->setNetworkPolicyRequest->zone = 'asperiores';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quaerat';
    $request->fields = 'porro';
    $request->key = 'quod';
    $request->name = 'Kathleen Flatley';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'est';

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
    $request->setLabelsRequest->clusterId = 'totam';
    $request->setLabelsRequest->labelFingerprint = 'fugiat';
    $request->setLabelsRequest->name = 'Dora Luettgen';
    $request->setLabelsRequest->projectId = 'possimus';
    $request->setLabelsRequest->resourceLabels = [
        'cum' => 'commodi',
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
    $request->cancelOperationRequest->name = 'Ms. Gregory Wisoky';
    $request->cancelOperationRequest->operationId = 'incidunt';
    $request->cancelOperationRequest->projectId = 'sed';
    $request->cancelOperationRequest->zone = 'provident';
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'ea';
    $request->key = 'occaecati';
    $request->name = 'Courtney Goldner';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'non';

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
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'incidunt';
    $request->key = 'ipsam';
    $request->name = 'Ian Balistreri';
    $request->oauthToken = 'veniam';
    $request->operationId = 'minima';
    $request->prettyPrint = false;
    $request->projectId = 'recusandae';
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'magni';
    $request->zone = 'aperiam';

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

Lists all operations in a project in a specific zone or all zones.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'in';
    $request->fields = 'officiis';
    $request->key = 'beatae';
    $request->oauthToken = 'laudantium';
    $request->parent = 'exercitationem';
    $request->prettyPrint = false;
    $request->projectId = 'praesentium';
    $request->quotaUser = 'cum';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'dolorum';
    $request->zone = 'voluptatum';

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
use \OpenAPI\OpenAPI\Models\Shared\GkeBackupAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\HttpLoadBalancing;
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
    $request->setAddonsConfigRequest->addonsConfig->cloudRunConfig->loadBalancerType = CloudRunConfigLoadBalancerTypeEnum::LOAD_BALANCER_TYPE_INTERNAL;
    $request->setAddonsConfigRequest->addonsConfig->configConnectorConfig = new ConfigConnectorConfig();
    $request->setAddonsConfigRequest->addonsConfig->configConnectorConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->dnsCacheConfig = new DnsCacheConfig();
    $request->setAddonsConfigRequest->addonsConfig->dnsCacheConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig();
    $request->setAddonsConfigRequest->addonsConfig->gcePersistentDiskCsiDriverConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig();
    $request->setAddonsConfigRequest->addonsConfig->gcpFilestoreCsiDriverConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->gkeBackupAgentConfig = new GkeBackupAgentConfig();
    $request->setAddonsConfigRequest->addonsConfig->gkeBackupAgentConfig->enabled = false;
    $request->setAddonsConfigRequest->addonsConfig->horizontalPodAutoscaling = new HorizontalPodAutoscaling();
    $request->setAddonsConfigRequest->addonsConfig->horizontalPodAutoscaling->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->httpLoadBalancing = new HttpLoadBalancing();
    $request->setAddonsConfigRequest->addonsConfig->httpLoadBalancing->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->kubernetesDashboard = new KubernetesDashboard();
    $request->setAddonsConfigRequest->addonsConfig->kubernetesDashboard->disabled = false;
    $request->setAddonsConfigRequest->addonsConfig->networkPolicyConfig = new NetworkPolicyConfig();
    $request->setAddonsConfigRequest->addonsConfig->networkPolicyConfig->disabled = false;
    $request->setAddonsConfigRequest->clusterId = 'expedita';
    $request->setAddonsConfigRequest->name = 'Tony Pagac';
    $request->setAddonsConfigRequest->projectId = 'dolorum';
    $request->setAddonsConfigRequest->zone = 'corrupti';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->clusterId = 'fugit';
    $request->fields = 'ut';
    $request->key = 'fugiat';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->projectId = 'culpa';
    $request->quotaUser = 'expedita';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'consequatur';
    $request->zone = 'esse';

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
    $request->completeIPRotationRequest->clusterId = 'sit';
    $request->completeIPRotationRequest->name = 'Willard Walker IV';
    $request->completeIPRotationRequest->projectId = 'ex';
    $request->completeIPRotationRequest->zone = 'sed';
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->clusterId = 'saepe';
    $request->fields = 'error';
    $request->key = 'consequatur';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->projectId = 'reiciendis';
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'dicta';
    $request->zone = 'architecto';

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
use \OpenAPI\OpenAPI\Models\Shared\GkeBackupAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\HttpLoadBalancing;
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
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkTags;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfigDefaults;
use \OpenAPI\OpenAPI\Models\Shared\NodePool;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\NodePoolAutoscalingLocationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
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
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterMasterGlobalAccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannel;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannelChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUsageExportConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\ConsumptionMeteringConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedNodes;
use \OpenAPI\OpenAPI\Models\Shared\ClusterStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerticalPodAutoscaling;
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
    $request->createClusterRequestInput->cluster->addonsConfig->cloudRunConfig->loadBalancerType = CloudRunConfigLoadBalancerTypeEnum::LOAD_BALANCER_TYPE_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->addonsConfig->configConnectorConfig = new ConfigConnectorConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->configConnectorConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->dnsCacheConfig = new DnsCacheConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->dnsCacheConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gcePersistentDiskCsiDriverConfig = new GcePersistentDiskCsiDriverConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gcePersistentDiskCsiDriverConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gcpFilestoreCsiDriverConfig = new GcpFilestoreCsiDriverConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gcpFilestoreCsiDriverConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->gkeBackupAgentConfig = new GkeBackupAgentConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->gkeBackupAgentConfig->enabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->horizontalPodAutoscaling = new HorizontalPodAutoscaling();
    $request->createClusterRequestInput->cluster->addonsConfig->horizontalPodAutoscaling->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->httpLoadBalancing = new HttpLoadBalancing();
    $request->createClusterRequestInput->cluster->addonsConfig->httpLoadBalancing->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->kubernetesDashboard = new KubernetesDashboard();
    $request->createClusterRequestInput->cluster->addonsConfig->kubernetesDashboard->disabled = false;
    $request->createClusterRequestInput->cluster->addonsConfig->networkPolicyConfig = new NetworkPolicyConfig();
    $request->createClusterRequestInput->cluster->addonsConfig->networkPolicyConfig->disabled = false;
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig = new AuthenticatorGroupsConfig();
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->authenticatorGroupsConfig->securityGroup = 'quidem';
    $request->createClusterRequestInput->cluster->autopilot = new Autopilot();
    $request->createClusterRequestInput->cluster->autopilot->enabled = false;
    $request->createClusterRequestInput->cluster->autoscaling = new ClusterAutoscaling();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningLocations = [
        'laborum',
        'nam',
        'tenetur',
    ];
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->bootDiskKmsKey = 'laboriosam';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->diskSizeGb = 2703;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->diskType = 'amet';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->imageType = 'deserunt';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management = new NodeManagement();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->autoRepair = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->autoUpgrade = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions = new AutoUpgradeOptions();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->autoUpgradeStartTime = 'voluptate';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->description = 'unde';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->minCpuPlatform = 'reiciendis';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->oauthScopes = [
        'repellendus',
        'delectus',
        'voluptates',
    ];
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->serviceAccount = 'perferendis';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings = new UpgradeSettings();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'est';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 696483;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 4406.66;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'facere';
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->maxSurge = 685092;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->maxUnavailable = 509807;
    $request->createClusterRequestInput->cluster->autoscaling->autoprovisioningNodePoolDefaults->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::BLUE_GREEN;
    $request->createClusterRequestInput->cluster->autoscaling->autoscalingProfile = ClusterAutoscalingAutoscalingProfileEnum::OPTIMIZE_UTILIZATION;
    $request->createClusterRequestInput->cluster->autoscaling->enableNodeAutoprovisioning = false;
    $request->createClusterRequestInput->cluster->autoscaling->resourceLimits = [
        new ResourceLimit(),
    ];
    $request->createClusterRequestInput->cluster->binaryAuthorization = new BinaryAuthorization();
    $request->createClusterRequestInput->cluster->binaryAuthorization->enabled = false;
    $request->createClusterRequestInput->cluster->binaryAuthorization->evaluationMode = BinaryAuthorizationEvaluationModeEnum::PROJECT_SINGLETON_POLICY_ENFORCE;
    $request->createClusterRequestInput->cluster->clusterIpv4Cidr = 'repudiandae';
    $request->createClusterRequestInput->cluster->conditions = [
        new StatusCondition(),
    ];
    $request->createClusterRequestInput->cluster->confidentialNodes = new ConfidentialNodes();
    $request->createClusterRequestInput->cluster->confidentialNodes->enabled = false;
    $request->createClusterRequestInput->cluster->costManagementConfig = new CostManagementConfig();
    $request->createClusterRequestInput->cluster->costManagementConfig->enabled = false;
    $request->createClusterRequestInput->cluster->createTime = 'atque';
    $request->createClusterRequestInput->cluster->currentMasterVersion = 'reprehenderit';
    $request->createClusterRequestInput->cluster->currentNodeCount = 991142;
    $request->createClusterRequestInput->cluster->currentNodeVersion = 'totam';
    $request->createClusterRequestInput->cluster->databaseEncryption = new DatabaseEncryption();
    $request->createClusterRequestInput->cluster->databaseEncryption->keyName = 'suscipit';
    $request->createClusterRequestInput->cluster->databaseEncryption->state = DatabaseEncryptionStateEnum::DECRYPTED;
    $request->createClusterRequestInput->cluster->defaultMaxPodsConstraint = new MaxPodsConstraint();
    $request->createClusterRequestInput->cluster->defaultMaxPodsConstraint->maxPodsPerNode = 'maxime';
    $request->createClusterRequestInput->cluster->description = 'et';
    $request->createClusterRequestInput->cluster->enableKubernetesAlpha = false;
    $request->createClusterRequestInput->cluster->enableTpu = false;
    $request->createClusterRequestInput->cluster->endpoint = 'esse';
    $request->createClusterRequestInput->cluster->etag = 'amet';
    $request->createClusterRequestInput->cluster->expireTime = 'assumenda';
    $request->createClusterRequestInput->cluster->fleet = new Fleet();
    $request->createClusterRequestInput->cluster->fleet->membership = 'ea';
    $request->createClusterRequestInput->cluster->fleet->preRegistered = false;
    $request->createClusterRequestInput->cluster->fleet->project = 'atque';
    $request->createClusterRequestInput->cluster->identityServiceConfig = new IdentityServiceConfig();
    $request->createClusterRequestInput->cluster->identityServiceConfig->enabled = false;
    $request->createClusterRequestInput->cluster->initialClusterVersion = 'error';
    $request->createClusterRequestInput->cluster->initialNodeCount = 887265;
    $request->createClusterRequestInput->cluster->instanceGroupUrls = [
        'accusamus',
        'natus',
        'minima',
        'aspernatur',
    ];
    $request->createClusterRequestInput->cluster->ipAllocationPolicy = new IPAllocationPolicyInput();
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->additionalPodRangesConfig = new AdditionalPodRangesConfig();
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->additionalPodRangesConfig->podRangeNames = [
        'maiores',
        'corrupti',
    ];
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->clusterIpv4Cidr = 'at';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->clusterIpv4CidrBlock = 'error';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->clusterSecondaryRangeName = 'blanditiis';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->createSubnetwork = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->ipv6AccessType = IPAllocationPolicyIpv6AccessTypeEnum::INTERNAL;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->nodeIpv4Cidr = 'repudiandae';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->nodeIpv4CidrBlock = 'atque';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->podCidrOverprovisionConfig->disable = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->servicesIpv4Cidr = 'atque';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->servicesIpv4CidrBlock = 'sunt';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->servicesSecondaryRangeName = 'recusandae';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->stackType = IPAllocationPolicyStackTypeEnum::IPV4_IPV6;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->subnetworkName = 'repellendus';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->tpuIpv4CidrBlock = 'labore';
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->useIpAliases = false;
    $request->createClusterRequestInput->cluster->ipAllocationPolicy->useRoutes = false;
    $request->createClusterRequestInput->cluster->labelFingerprint = 'reiciendis';
    $request->createClusterRequestInput->cluster->legacyAbac = new LegacyAbac();
    $request->createClusterRequestInput->cluster->legacyAbac->enabled = false;
    $request->createClusterRequestInput->cluster->location = 'doloremque';
    $request->createClusterRequestInput->cluster->locations = [
        'dicta',
        'accusantium',
        'beatae',
        'dolores',
    ];
    $request->createClusterRequestInput->cluster->loggingConfig = new LoggingConfig();
    $request->createClusterRequestInput->cluster->loggingConfig->componentConfig = new LoggingComponentConfig();
    $request->createClusterRequestInput->cluster->loggingConfig->componentConfig->enableComponents = [
        LoggingComponentConfigEnableComponentsEnum::WORKLOADS,
        LoggingComponentConfigEnableComponentsEnum::SYSTEM_COMPONENTS,
    ];
    $request->createClusterRequestInput->cluster->loggingService = 'a';
    $request->createClusterRequestInput->cluster->maintenancePolicy = new MaintenancePolicy();
    $request->createClusterRequestInput->cluster->maintenancePolicy->resourceVersion = 'molestias';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window = new MaintenanceWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->dailyMaintenanceWindow = new DailyMaintenanceWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->dailyMaintenanceWindow->duration = 'magnam';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->dailyMaintenanceWindow->startTime = 'saepe';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->maintenanceExclusions = [
        'occaecati' => new TimeWindow(),
    ];
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow = new RecurringTimeWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->recurrence = 'officiis';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window = new TimeWindow();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->endTime = 'perspiciatis';
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions = new MaintenanceExclusionOptions();
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->maintenanceExclusionOptions->scope = MaintenanceExclusionOptionsScopeEnum::NO_MINOR_UPGRADES;
    $request->createClusterRequestInput->cluster->maintenancePolicy->window->recurringWindow->window->startTime = 'adipisci';
    $request->createClusterRequestInput->cluster->masterAuth = new MasterAuth();
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificate = 'eveniet';
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificateConfig = new ClientCertificateConfig();
    $request->createClusterRequestInput->cluster->masterAuth->clientCertificateConfig->issueClientCertificate = false;
    $request->createClusterRequestInput->cluster->masterAuth->clientKey = 'occaecati';
    $request->createClusterRequestInput->cluster->masterAuth->clusterCaCertificate = 'consequuntur';
    $request->createClusterRequestInput->cluster->masterAuth->password = 'fugit';
    $request->createClusterRequestInput->cluster->masterAuth->username = 'Maia_Harvey';
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
    ];
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->enabled = false;
    $request->createClusterRequestInput->cluster->masterAuthorizedNetworksConfig->gcpPublicCidrsAccessEnabled = false;
    $request->createClusterRequestInput->cluster->meshCertificates = new MeshCertificates();
    $request->createClusterRequestInput->cluster->meshCertificates->enableCertificates = false;
    $request->createClusterRequestInput->cluster->monitoringConfig = new MonitoringConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->componentConfig = new MonitoringComponentConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->componentConfig->enableComponents = [
        MonitoringComponentConfigEnableComponentsEnum::SCHEDULER,
        MonitoringComponentConfigEnableComponentsEnum::CONTROLLER_MANAGER,
    ];
    $request->createClusterRequestInput->cluster->monitoringConfig->managedPrometheusConfig = new ManagedPrometheusConfig();
    $request->createClusterRequestInput->cluster->monitoringConfig->managedPrometheusConfig->enabled = false;
    $request->createClusterRequestInput->cluster->monitoringService = 'non';
    $request->createClusterRequestInput->cluster->name = 'Ms. Brian Kerluke IV';
    $request->createClusterRequestInput->cluster->network = 'eveniet';
    $request->createClusterRequestInput->cluster->networkConfig = new NetworkConfig();
    $request->createClusterRequestInput->cluster->networkConfig->datapathProvider = NetworkConfigDatapathProviderEnum::DATAPATH_PROVIDER_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->networkConfig->defaultSnatStatus = new DefaultSnatStatus();
    $request->createClusterRequestInput->cluster->networkConfig->defaultSnatStatus->disabled = false;
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig = new DNSConfig();
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDns = DNSConfigClusterDNSEnum::CLOUD_DNS;
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDnsDomain = 'iure';
    $request->createClusterRequestInput->cluster->networkConfig->dnsConfig->clusterDnsScope = DNSConfigClusterDNSScopeEnum::VPC_SCOPE;
    $request->createClusterRequestInput->cluster->networkConfig->enableIntraNodeVisibility = false;
    $request->createClusterRequestInput->cluster->networkConfig->enableL4ilbSubsetting = false;
    $request->createClusterRequestInput->cluster->networkConfig->gatewayApiConfig = new GatewayAPIConfig();
    $request->createClusterRequestInput->cluster->networkConfig->gatewayApiConfig->channel = GatewayAPIConfigChannelEnum::CHANNEL_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->networkConfig->network = 'laborum';
    $request->createClusterRequestInput->cluster->networkConfig->privateIpv6GoogleAccess = NetworkConfigPrivateIpv6GoogleAccessEnum::PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE;
    $request->createClusterRequestInput->cluster->networkConfig->serviceExternalIpsConfig = new ServiceExternalIPsConfig();
    $request->createClusterRequestInput->cluster->networkConfig->serviceExternalIpsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->networkConfig->subnetwork = 'voluptatum';
    $request->createClusterRequestInput->cluster->networkPolicy = new NetworkPolicy();
    $request->createClusterRequestInput->cluster->networkPolicy->enabled = false;
    $request->createClusterRequestInput->cluster->networkPolicy->provider = NetworkPolicyProviderEnum::CALICO;
    $request->createClusterRequestInput->cluster->nodeConfig = new NodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->createClusterRequestInput->cluster->nodeConfig->advancedMachineFeatures->threadsPerCore = 'ad';
    $request->createClusterRequestInput->cluster->nodeConfig->bootDiskKmsKey = 'repellat';
    $request->createClusterRequestInput->cluster->nodeConfig->confidentialNodes = new ConfidentialNodes();
    $request->createClusterRequestInput->cluster->nodeConfig->confidentialNodes->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->diskSizeGb = 3099;
    $request->createClusterRequestInput->cluster->nodeConfig->diskType = 'corporis';
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->ephemeralStorageLocalSsdConfig->localSsdCount = 597303;
    $request->createClusterRequestInput->cluster->nodeConfig->fastSocket = new FastSocket();
    $request->createClusterRequestInput->cluster->nodeConfig->fastSocket->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->gcfsConfig = new GcfsConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->gcfsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->gvnic = new VirtualNIC();
    $request->createClusterRequestInput->cluster->nodeConfig->gvnic->enabled = false;
    $request->createClusterRequestInput->cluster->nodeConfig->imageType = 'nihil';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig = new NodeKubeletConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuCfsQuota = false;
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuCfsQuotaPeriod = 'mollitia';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->cpuManagerPolicy = 'voluptas';
    $request->createClusterRequestInput->cluster->nodeConfig->kubeletConfig->podPidsLimit = 'alias';
    $request->createClusterRequestInput->cluster->nodeConfig->labels = [
        'reiciendis' => 'dolores',
        'id' => 'minima',
        'dolore' => 'dolorum',
        'nesciunt' => 'quae',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig = new LinuxNodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_V2;
    $request->createClusterRequestInput->cluster->nodeConfig->linuxNodeConfig->sysctls = [
        'quaerat' => 'molestiae',
        'ex' => 'ut',
        'culpa' => 'adipisci',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->localNvmeSsdBlockConfig = new LocalNvmeSsdBlockConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->localNvmeSsdBlockConfig->localSsdCount = 890653;
    $request->createClusterRequestInput->cluster->nodeConfig->localSsdCount = 514513;
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig = new NodePoolLoggingConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::DEFAULT;
    $request->createClusterRequestInput->cluster->nodeConfig->machineType = 'nemo';
    $request->createClusterRequestInput->cluster->nodeConfig->metadata = [
        'esse' => 'provident',
        'quis' => 'eum',
        'reiciendis' => 'provident',
        'aspernatur' => 'ullam',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->minCpuPlatform = 'quasi';
    $request->createClusterRequestInput->cluster->nodeConfig->nodeGroup = 'animi';
    $request->createClusterRequestInput->cluster->nodeConfig->oauthScopes = [
        'mollitia',
        'provident',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->preemptible = false;
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity = new ReservationAffinity();
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->consumeReservationType = ReservationAffinityConsumeReservationTypeEnum::SPECIFIC_RESERVATION;
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->key = 'animi';
    $request->createClusterRequestInput->cluster->nodeConfig->reservationAffinity->values = [
        'aliquid',
        'accusantium',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->resourceLabels = [
        'doloribus' => 'ullam',
        'in' => 'nam',
        'earum' => 'officia',
        'laborum' => 'placeat',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->sandboxConfig = new SandboxConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->sandboxConfig->type = SandboxConfigTypeEnum::UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeConfig->serviceAccount = 'voluptatibus';
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createClusterRequestInput->cluster->nodeConfig->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createClusterRequestInput->cluster->nodeConfig->spot = false;
    $request->createClusterRequestInput->cluster->nodeConfig->tags = [
        'officiis',
        'sapiente',
        'cumque',
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->taints = [
        new NodeTaint(),
    ];
    $request->createClusterRequestInput->cluster->nodeConfig->windowsNodeConfig = new WindowsNodeConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_LTSC2022;
    $request->createClusterRequestInput->cluster->nodeConfig->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->createClusterRequestInput->cluster->nodeConfig->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::MODE_UNSPECIFIED;
    $request->createClusterRequestInput->cluster->nodeIpv4CidrSize = 335498;
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig = new NodePoolAutoConfig();
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig->networkTags = new NetworkTags();
    $request->createClusterRequestInput->cluster->nodePoolAutoConfig->networkTags->tags = [
        'fugit',
    ];
    $request->createClusterRequestInput->cluster->nodePoolDefaults = new NodePoolDefaults();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults = new NodeConfigDefaults();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->gcfsConfig = new GcfsConfig();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->gcfsConfig->enabled = false;
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->loggingConfig = new NodePoolLoggingConfig();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->loggingConfig->variantConfig = new LoggingVariantConfig();
    $request->createClusterRequestInput->cluster->nodePoolDefaults->nodeConfigDefaults->loggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::MAX_THROUGHPUT;
    $request->createClusterRequestInput->cluster->nodePools = [
        new NodePool(),
    ];
    $request->createClusterRequestInput->cluster->notificationConfig = new NotificationConfig();
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub = new PubSub();
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->enabled = false;
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->filter = new Filter();
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->filter->eventType = [
        FilterEventTypeEnum::EVENT_TYPE_UNSPECIFIED,
    ];
    $request->createClusterRequestInput->cluster->notificationConfig->pubsub->topic = 'aspernatur';
    $request->createClusterRequestInput->cluster->privateClusterConfig = new PrivateClusterConfig();
    $request->createClusterRequestInput->cluster->privateClusterConfig->enablePrivateEndpoint = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->enablePrivateNodes = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig();
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterGlobalAccessConfig->enabled = false;
    $request->createClusterRequestInput->cluster->privateClusterConfig->masterIpv4CidrBlock = 'eum';
    $request->createClusterRequestInput->cluster->privateClusterConfig->peeringName = 'eius';
    $request->createClusterRequestInput->cluster->privateClusterConfig->privateEndpoint = 'rem';
    $request->createClusterRequestInput->cluster->privateClusterConfig->privateEndpointSubnetwork = 'at';
    $request->createClusterRequestInput->cluster->privateClusterConfig->publicEndpoint = 'impedit';
    $request->createClusterRequestInput->cluster->releaseChannel = new ReleaseChannel();
    $request->createClusterRequestInput->cluster->releaseChannel->channel = ReleaseChannelChannelEnum::UNSPECIFIED;
    $request->createClusterRequestInput->cluster->resourceLabels = [
        'eum' => 'dicta',
        'minima' => 'beatae',
        'cupiditate' => 'provident',
        'earum' => 'soluta',
    ];
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig = new ResourceUsageExportConfig();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->bigqueryDestination = new BigQueryDestination();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->bigqueryDestination->datasetId = 'hic';
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->consumptionMeteringConfig = new ConsumptionMeteringConfig();
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->consumptionMeteringConfig->enabled = false;
    $request->createClusterRequestInput->cluster->resourceUsageExportConfig->enableNetworkEgressMetering = false;
    $request->createClusterRequestInput->cluster->selfLink = 'illum';
    $request->createClusterRequestInput->cluster->servicesIpv4Cidr = 'eaque';
    $request->createClusterRequestInput->cluster->shieldedNodes = new ShieldedNodes();
    $request->createClusterRequestInput->cluster->shieldedNodes->enabled = false;
    $request->createClusterRequestInput->cluster->status = ClusterStatusEnum::DEGRADED;
    $request->createClusterRequestInput->cluster->statusMessage = 'perspiciatis';
    $request->createClusterRequestInput->cluster->subnetwork = 'maiores';
    $request->createClusterRequestInput->cluster->tpuIpv4CidrBlock = 'debitis';
    $request->createClusterRequestInput->cluster->verticalPodAutoscaling = new VerticalPodAutoscaling();
    $request->createClusterRequestInput->cluster->verticalPodAutoscaling->enabled = false;
    $request->createClusterRequestInput->cluster->workloadIdentityConfig = new WorkloadIdentityConfig();
    $request->createClusterRequestInput->cluster->workloadIdentityConfig->workloadPool = 'aliquid';
    $request->createClusterRequestInput->cluster->zone = 'porro';
    $request->createClusterRequestInput->parent = 'suscipit';
    $request->createClusterRequestInput->projectId = 'dolorem';
    $request->createClusterRequestInput->zone = 'fugit';
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ratione';
    $request->fields = 'animi';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->projectId = 'consequatur';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'ducimus';
    $request->zone = 'natus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->clusterId = 'magni';
    $request->fields = 'doloribus';
    $request->key = 'nulla';
    $request->name = 'Jeffrey Goldner';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->projectId = 'iusto';
    $request->quotaUser = 'esse';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'maiores';
    $request->zone = 'reiciendis';

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

Gets the details of a specific cluster.

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
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloremque';
    $request->clusterId = 'dicta';
    $request->fields = 'odio';
    $request->key = 'tempora';
    $request->name = 'Carla Feil MD';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->projectId = 'nostrum';
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'aliquid';
    $request->zone = 'officia';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setLegacyAbacRequest = new SetLegacyAbacRequest();
    $request->setLegacyAbacRequest->clusterId = 'aliquid';
    $request->setLegacyAbacRequest->enabled = false;
    $request->setLegacyAbacRequest->name = 'Natalie Hirthe';
    $request->setLegacyAbacRequest->projectId = 'ab';
    $request->setLegacyAbacRequest->zone = 'error';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->clusterId = 'laborum';
    $request->fields = 'libero';
    $request->key = 'ad';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->projectId = 'enim';
    $request->quotaUser = 'vitae';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'ex';
    $request->zone = 'quo';

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
    $request->accessToken = 'ut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'expedita';
    $request->fields = 'voluptatem';
    $request->key = 'molestias';
    $request->oauthToken = 'cum';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->projectId = 'beatae';
    $request->quotaUser = 'voluptatum';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'veritatis';
    $request->zone = 'rerum';

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

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

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
    $request->setLocationsRequest->clusterId = 'culpa';
    $request->setLocationsRequest->locations = [
        'sapiente',
    ];
    $request->setLocationsRequest->name = 'Juan Parker';
    $request->setLocationsRequest->projectId = 'voluptatem';
    $request->setLocationsRequest->zone = 'alias';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->clusterId = 'sapiente';
    $request->fields = 'rem';
    $request->key = 'minus';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->projectId = 'asperiores';
    $request->quotaUser = 'ratione';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'perferendis';
    $request->zone = 'illum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setLoggingServiceRequest = new SetLoggingServiceRequest();
    $request->setLoggingServiceRequest->clusterId = 'impedit';
    $request->setLoggingServiceRequest->loggingService = 'quibusdam';
    $request->setLoggingServiceRequest->name = 'Clyde Nader';
    $request->setLoggingServiceRequest->projectId = 'inventore';
    $request->setLoggingServiceRequest->zone = 'deleniti';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->clusterId = 'consequatur';
    $request->fields = 'architecto';
    $request->key = 'sit';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->projectId = 'fugit';
    $request->quotaUser = 'ab';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'quae';
    $request->zone = 'dolor';

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
    $request->updateMasterRequest->clusterId = 'ipsam';
    $request->updateMasterRequest->masterVersion = 'consequuntur';
    $request->updateMasterRequest->name = 'Tracey Vandervort';
    $request->updateMasterRequest->projectId = 'esse';
    $request->updateMasterRequest->zone = 'necessitatibus';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->clusterId = 'expedita';
    $request->fields = 'eum';
    $request->key = 'vel';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->projectId = 'magnam';
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'porro';
    $request->zone = 'autem';

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
    $request->setMonitoringServiceRequest->clusterId = 'laboriosam';
    $request->setMonitoringServiceRequest->monitoringService = 'recusandae';
    $request->setMonitoringServiceRequest->name = 'Helen Heller III';
    $request->setMonitoringServiceRequest->projectId = 'at';
    $request->setMonitoringServiceRequest->zone = 'vero';
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->clusterId = 'doloribus';
    $request->fields = 'repudiandae';
    $request->key = 'optio';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->projectId = 'nemo';
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'officia';
    $request->zone = 'voluptas';

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

Sets the autoscaling settings for the specified node pool.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setNodePoolAutoscalingRequest = new SetNodePoolAutoscalingRequest();
    $request->setNodePoolAutoscalingRequest->autoscaling = new NodePoolAutoscaling();
    $request->setNodePoolAutoscalingRequest->autoscaling->autoprovisioned = false;
    $request->setNodePoolAutoscalingRequest->autoscaling->enabled = false;
    $request->setNodePoolAutoscalingRequest->autoscaling->locationPolicy = NodePoolAutoscalingLocationPolicyEnum::BALANCED;
    $request->setNodePoolAutoscalingRequest->autoscaling->maxNodeCount = 551079;
    $request->setNodePoolAutoscalingRequest->autoscaling->minNodeCount = 260904;
    $request->setNodePoolAutoscalingRequest->autoscaling->totalMaxNodeCount = 131903;
    $request->setNodePoolAutoscalingRequest->autoscaling->totalMinNodeCount = 495970;
    $request->setNodePoolAutoscalingRequest->clusterId = 'nesciunt';
    $request->setNodePoolAutoscalingRequest->name = 'Ms. Armando Gottlieb';
    $request->setNodePoolAutoscalingRequest->nodePoolId = 'dicta';
    $request->setNodePoolAutoscalingRequest->projectId = 'nisi';
    $request->setNodePoolAutoscalingRequest->zone = 'consequuntur';
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cupiditate';
    $request->clusterId = 'reiciendis';
    $request->fields = 'soluta';
    $request->key = 'alias';
    $request->nodePoolId = 'omnis';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->projectId = 'occaecati';
    $request->quotaUser = 'iste';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'inventore';
    $request->zone = 'fuga';

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
use \OpenAPI\OpenAPI\Models\Shared\NodeManagement;
use \OpenAPI\OpenAPI\Models\Shared\AutoUpgradeOptions;
use \OpenAPI\OpenAPI\Models\Shared\MaxPodsConstraint;
use \OpenAPI\OpenAPI\Models\Shared\NodeNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPerformanceConfig;
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
    $request->createNodePoolRequest->clusterId = 'voluptatibus';
    $request->createNodePoolRequest->nodePool = new NodePool();
    $request->createNodePoolRequest->nodePool->autoscaling = new NodePoolAutoscaling();
    $request->createNodePoolRequest->nodePool->autoscaling->autoprovisioned = false;
    $request->createNodePoolRequest->nodePool->autoscaling->enabled = false;
    $request->createNodePoolRequest->nodePool->autoscaling->locationPolicy = NodePoolAutoscalingLocationPolicyEnum::ANY;
    $request->createNodePoolRequest->nodePool->autoscaling->maxNodeCount = 608593;
    $request->createNodePoolRequest->nodePool->autoscaling->minNodeCount = 966390;
    $request->createNodePoolRequest->nodePool->autoscaling->totalMaxNodeCount = 328379;
    $request->createNodePoolRequest->nodePool->autoscaling->totalMinNodeCount = 507636;
    $request->createNodePoolRequest->nodePool->conditions = [
        new StatusCondition(),
        new StatusCondition(),
        new StatusCondition(),
        new StatusCondition(),
    ];
    $request->createNodePoolRequest->nodePool->config = new NodeConfig();
    $request->createNodePoolRequest->nodePool->config->accelerators = [
        new AcceleratorConfig(),
        new AcceleratorConfig(),
    ];
    $request->createNodePoolRequest->nodePool->config->advancedMachineFeatures = new AdvancedMachineFeatures();
    $request->createNodePoolRequest->nodePool->config->advancedMachineFeatures->threadsPerCore = 'temporibus';
    $request->createNodePoolRequest->nodePool->config->bootDiskKmsKey = 'quos';
    $request->createNodePoolRequest->nodePool->config->confidentialNodes = new ConfidentialNodes();
    $request->createNodePoolRequest->nodePool->config->confidentialNodes->enabled = false;
    $request->createNodePoolRequest->nodePool->config->diskSizeGb = 415280;
    $request->createNodePoolRequest->nodePool->config->diskType = 'itaque';
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageLocalSsdConfig = new EphemeralStorageLocalSsdConfig();
    $request->createNodePoolRequest->nodePool->config->ephemeralStorageLocalSsdConfig->localSsdCount = 415608;
    $request->createNodePoolRequest->nodePool->config->fastSocket = new FastSocket();
    $request->createNodePoolRequest->nodePool->config->fastSocket->enabled = false;
    $request->createNodePoolRequest->nodePool->config->gcfsConfig = new GcfsConfig();
    $request->createNodePoolRequest->nodePool->config->gcfsConfig->enabled = false;
    $request->createNodePoolRequest->nodePool->config->gvnic = new VirtualNIC();
    $request->createNodePoolRequest->nodePool->config->gvnic->enabled = false;
    $request->createNodePoolRequest->nodePool->config->imageType = 'totam';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig = new NodeKubeletConfig();
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuCfsQuota = false;
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuCfsQuotaPeriod = 'earum';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->cpuManagerPolicy = 'modi';
    $request->createNodePoolRequest->nodePool->config->kubeletConfig->podPidsLimit = 'nam';
    $request->createNodePoolRequest->nodePool->config->labels = [
        'voluptatem' => 'ipsam',
        'vel' => 'alias',
        'quasi' => 'non',
        'maiores' => 'enim',
    ];
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig = new LinuxNodeConfig();
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig->cgroupMode = LinuxNodeConfigCgroupModeEnum::CGROUP_MODE_V1;
    $request->createNodePoolRequest->nodePool->config->linuxNodeConfig->sysctls = [
        'deserunt' => 'esse',
        'nemo' => 'reprehenderit',
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
    $request->createNodePoolRequest->nodePool->config->sandboxConfig->type = SandboxConfigTypeEnum::GVISOR;
    $request->createNodePoolRequest->nodePool->config->serviceAccount = 'quibusdam';
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->createNodePoolRequest->nodePool->config->shieldedInstanceConfig->enableSecureBoot = false;
    $request->createNodePoolRequest->nodePool->config->spot = false;
    $request->createNodePoolRequest->nodePool->config->tags = [
        'odit',
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
    $request->createNodePoolRequest->nodePool->etag = 'inventore';
    $request->createNodePoolRequest->nodePool->initialNodeCount = 818034;
    $request->createNodePoolRequest->nodePool->instanceGroupUrls = [
        'architecto',
        'voluptatibus',
        'quia',
    ];
    $request->createNodePoolRequest->nodePool->locations = [
        'aliquam',
        'velit',
        'illo',
        'accusantium',
    ];
    $request->createNodePoolRequest->nodePool->management = new NodeManagement();
    $request->createNodePoolRequest->nodePool->management->autoRepair = false;
    $request->createNodePoolRequest->nodePool->management->autoUpgrade = false;
    $request->createNodePoolRequest->nodePool->management->upgradeOptions = new AutoUpgradeOptions();
    $request->createNodePoolRequest->nodePool->management->upgradeOptions->autoUpgradeStartTime = 'vel';
    $request->createNodePoolRequest->nodePool->management->upgradeOptions->description = 'ea';
    $request->createNodePoolRequest->nodePool->maxPodsConstraint = new MaxPodsConstraint();
    $request->createNodePoolRequest->nodePool->maxPodsConstraint->maxPodsPerNode = 'beatae';
    $request->createNodePoolRequest->nodePool->name = 'Marshall Kemmer';
    $request->createNodePoolRequest->nodePool->networkConfig = new NodeNetworkConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->createPodRange = false;
    $request->createNodePoolRequest->nodePool->networkConfig->enablePrivateNodes = false;
    $request->createNodePoolRequest->nodePool->networkConfig->networkPerformanceConfig = new NetworkPerformanceConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->createNodePoolRequest->nodePool->networkConfig->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->createNodePoolRequest->nodePool->networkConfig->podCidrOverprovisionConfig->disable = false;
    $request->createNodePoolRequest->nodePool->networkConfig->podIpv4CidrBlock = 'earum';
    $request->createNodePoolRequest->nodePool->networkConfig->podRange = 'dicta';
    $request->createNodePoolRequest->nodePool->placementPolicy = new PlacementPolicy();
    $request->createNodePoolRequest->nodePool->placementPolicy->type = PlacementPolicyTypeEnum::COMPACT;
    $request->createNodePoolRequest->nodePool->podIpv4CidrSize = 975884;
    $request->createNodePoolRequest->nodePool->selfLink = 'iste';
    $request->createNodePoolRequest->nodePool->status = NodePoolStatusEnum::ERROR;
    $request->createNodePoolRequest->nodePool->statusMessage = 'alias';
    $request->createNodePoolRequest->nodePool->updateInfo = new UpdateInfo();
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo = new BlueGreenInfo();
    $request->createNodePoolRequest->nodePool->updateInfo->blueGreenInfo->blueInstanceGroupUrls = [
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

Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

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

Updates the version and/or image type for the specified node pool.

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
    $request->updateNodePoolRequest->nodeNetworkConfig->networkPerformanceConfig->totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum::TIER1;
    $request->updateNodePoolRequest->nodeNetworkConfig->podCidrOverprovisionConfig = new PodCIDROverprovisionConfig();
    $request->updateNodePoolRequest->nodeNetworkConfig->podCidrOverprovisionConfig->disable = false;
    $request->updateNodePoolRequest->nodeNetworkConfig->podIpv4CidrBlock = 'vero';
    $request->updateNodePoolRequest->nodeNetworkConfig->podRange = 'odit';
    $request->updateNodePoolRequest->nodePoolId = 'repellat';
    $request->updateNodePoolRequest->nodeVersion = 'pariatur';
    $request->updateNodePoolRequest->projectId = 'nemo';
    $request->updateNodePoolRequest->resourceLabels = new ResourceLabels();
    $request->updateNodePoolRequest->resourceLabels->labels = [
        'aperiam' => 'odio',
        'minima' => 'in',
    ];
    $request->updateNodePoolRequest->tags = new NetworkTags();
    $request->updateNodePoolRequest->tags->tags = [
        'excepturi',
        'dolores',
    ];
    $request->updateNodePoolRequest->taints = new NodeTaints();
    $request->updateNodePoolRequest->taints->taints = [
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->updateNodePoolRequest->upgradeSettings = new UpgradeSettings();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings = new BlueGreenSettings();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->nodePoolSoakDuration = 'veritatis';
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy = new StandardRolloutPolicy();
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchNodeCount = 498180;
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchPercentage = 4527.29;
    $request->updateNodePoolRequest->upgradeSettings->blueGreenSettings->standardRolloutPolicy->batchSoakDuration = 'pariatur';
    $request->updateNodePoolRequest->upgradeSettings->maxSurge = 932666;
    $request->updateNodePoolRequest->upgradeSettings->maxUnavailable = 627735;
    $request->updateNodePoolRequest->upgradeSettings->strategy = UpgradeSettingsStrategyEnum::SURGE;
    $request->updateNodePoolRequest->windowsNodeConfig = new WindowsNodeConfig();
    $request->updateNodePoolRequest->windowsNodeConfig->osVersion = WindowsNodeConfigOsVersionEnum::OS_VERSION_LTSC2019;
    $request->updateNodePoolRequest->workloadMetadataConfig = new WorkloadMetadataConfig();
    $request->updateNodePoolRequest->workloadMetadataConfig->mode = WorkloadMetadataConfigModeEnum::MODE_UNSPECIFIED;
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

Updates the settings of a specific cluster.

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
use \OpenAPI\OpenAPI\Models\Shared\GkeBackupAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\HorizontalPodAutoscaling;
use \OpenAPI\OpenAPI\Models\Shared\HttpLoadBalancing;
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
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterMasterGlobalAccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannel;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseChannelChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUsageExportConfig;
use \OpenAPI\OpenAPI\Models\Shared\BigQueryDestination;
use \OpenAPI\OpenAPI\Models\Shared\ConsumptionMeteringConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceExternalIPsConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedNodes;
use \OpenAPI\OpenAPI\Models\Shared\ClusterUpdateDesiredStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerticalPodAutoscaling;
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
    $request->updateClusterRequest->update->desiredAddonsConfig->gkeBackupAgentConfig = new GkeBackupAgentConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->gkeBackupAgentConfig->enabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->horizontalPodAutoscaling = new HorizontalPodAutoscaling();
    $request->updateClusterRequest->update->desiredAddonsConfig->horizontalPodAutoscaling->disabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->httpLoadBalancing = new HttpLoadBalancing();
    $request->updateClusterRequest->update->desiredAddonsConfig->httpLoadBalancing->disabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->kubernetesDashboard = new KubernetesDashboard();
    $request->updateClusterRequest->update->desiredAddonsConfig->kubernetesDashboard->disabled = false;
    $request->updateClusterRequest->update->desiredAddonsConfig->networkPolicyConfig = new NetworkPolicyConfig();
    $request->updateClusterRequest->update->desiredAddonsConfig->networkPolicyConfig->disabled = false;
    $request->updateClusterRequest->update->desiredAuthenticatorGroupsConfig = new AuthenticatorGroupsConfig();
    $request->updateClusterRequest->update->desiredAuthenticatorGroupsConfig->enabled = false;
    $request->updateClusterRequest->update->desiredAuthenticatorGroupsConfig->securityGroup = 'aliquam';
    $request->updateClusterRequest->update->desiredBinaryAuthorization = new BinaryAuthorization();
    $request->updateClusterRequest->update->desiredBinaryAuthorization->enabled = false;
    $request->updateClusterRequest->update->desiredBinaryAuthorization->evaluationMode = BinaryAuthorizationEvaluationModeEnum::PROJECT_SINGLETON_POLICY_ENFORCE;
    $request->updateClusterRequest->update->desiredClusterAutoscaling = new ClusterAutoscaling();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningLocations = [
        'laudantium',
        'repudiandae',
        'consequatur',
    ];
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults = new AutoprovisioningNodePoolDefaults();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->bootDiskKmsKey = 'maxime';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->diskSizeGb = 136357;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->diskType = 'nam';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->imageType = 'expedita';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management = new NodeManagement();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management->autoRepair = false;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management->autoUpgrade = false;
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions = new AutoUpgradeOptions();
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->autoUpgradeStartTime = 'quas';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->management->upgradeOptions->description = 'provident';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->minCpuPlatform = 'repudiandae';
    $request->updateClusterRequest->update->desiredClusterAutoscaling->autoprovisioningNodePoolDefaults->oauthScopes = [
        'dignissimos',
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
    $request->updateClusterRequest->update->desiredCostManagementConfig = new CostManagementConfig();
    $request->updateClusterRequest->update->desiredCostManagementConfig->enabled = false;
    $request->updateClusterRequest->update->desiredDatabaseEncryption = new DatabaseEncryption();
    $request->updateClusterRequest->update->desiredDatabaseEncryption->keyName = 'quae';
    $request->updateClusterRequest->update->desiredDatabaseEncryption->state = DatabaseEncryptionStateEnum::UNKNOWN;
    $request->updateClusterRequest->update->desiredDatapathProvider = ClusterUpdateDesiredDatapathProviderEnum::ADVANCED_DATAPATH;
    $request->updateClusterRequest->update->desiredDefaultSnatStatus = new DefaultSnatStatus();
    $request->updateClusterRequest->update->desiredDefaultSnatStatus->disabled = false;
    $request->updateClusterRequest->update->desiredDnsConfig = new DNSConfig();
    $request->updateClusterRequest->update->desiredDnsConfig->clusterDns = DNSConfigClusterDNSEnum::PLATFORM_DEFAULT;
    $request->updateClusterRequest->update->desiredDnsConfig->clusterDnsDomain = 'quidem';
    $request->updateClusterRequest->update->desiredDnsConfig->clusterDnsScope = DNSConfigClusterDNSScopeEnum::VPC_SCOPE;
    $request->updateClusterRequest->update->desiredEnablePrivateEndpoint = false;
    $request->updateClusterRequest->update->desiredFleet = new Fleet();
    $request->updateClusterRequest->update->desiredFleet->membership = 'amet';
    $request->updateClusterRequest->update->desiredFleet->preRegistered = false;
    $request->updateClusterRequest->update->desiredFleet->project = 'quasi';
    $request->updateClusterRequest->update->desiredGatewayApiConfig = new GatewayAPIConfig();
    $request->updateClusterRequest->update->desiredGatewayApiConfig->channel = GatewayAPIConfigChannelEnum::CHANNEL_UNSPECIFIED;
    $request->updateClusterRequest->update->desiredGcfsConfig = new GcfsConfig();
    $request->updateClusterRequest->update->desiredGcfsConfig->enabled = false;
    $request->updateClusterRequest->update->desiredIdentityServiceConfig = new IdentityServiceConfig();
    $request->updateClusterRequest->update->desiredIdentityServiceConfig->enabled = false;
    $request->updateClusterRequest->update->desiredImageType = 'laudantium';
    $request->updateClusterRequest->update->desiredIntraNodeVisibilityConfig = new IntraNodeVisibilityConfig();
    $request->updateClusterRequest->update->desiredIntraNodeVisibilityConfig->enabled = false;
    $request->updateClusterRequest->update->desiredL4ilbSubsettingConfig = new ILBSubsettingConfig();
    $request->updateClusterRequest->update->desiredL4ilbSubsettingConfig->enabled = false;
    $request->updateClusterRequest->update->desiredLocations = [
        'earum',
    ];
    $request->updateClusterRequest->update->desiredLoggingConfig = new LoggingConfig();
    $request->updateClusterRequest->update->desiredLoggingConfig->componentConfig = new LoggingComponentConfig();
    $request->updateClusterRequest->update->desiredLoggingConfig->componentConfig->enableComponents = [
        LoggingComponentConfigEnableComponentsEnum::SYSTEM_COMPONENTS,
        LoggingComponentConfigEnableComponentsEnum::APISERVER,
    ];
    $request->updateClusterRequest->update->desiredLoggingService = 'dolorum';
    $request->updateClusterRequest->update->desiredMasterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->updateClusterRequest->update->desiredMasterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
        new CidrBlock(),
        new CidrBlock(),
        new CidrBlock(),
    ];
    $request->updateClusterRequest->update->desiredMasterAuthorizedNetworksConfig->enabled = false;
    $request->updateClusterRequest->update->desiredMasterAuthorizedNetworksConfig->gcpPublicCidrsAccessEnabled = false;
    $request->updateClusterRequest->update->desiredMasterVersion = 'provident';
    $request->updateClusterRequest->update->desiredMeshCertificates = new MeshCertificates();
    $request->updateClusterRequest->update->desiredMeshCertificates->enableCertificates = false;
    $request->updateClusterRequest->update->desiredMonitoringConfig = new MonitoringConfig();
    $request->updateClusterRequest->update->desiredMonitoringConfig->componentConfig = new MonitoringComponentConfig();
    $request->updateClusterRequest->update->desiredMonitoringConfig->componentConfig->enableComponents = [
        MonitoringComponentConfigEnableComponentsEnum::COMPONENT_UNSPECIFIED,
        MonitoringComponentConfigEnableComponentsEnum::SYSTEM_COMPONENTS,
        MonitoringComponentConfigEnableComponentsEnum::APISERVER,
        MonitoringComponentConfigEnableComponentsEnum::CONTROLLER_MANAGER,
    ];
    $request->updateClusterRequest->update->desiredMonitoringConfig->managedPrometheusConfig = new ManagedPrometheusConfig();
    $request->updateClusterRequest->update->desiredMonitoringConfig->managedPrometheusConfig->enabled = false;
    $request->updateClusterRequest->update->desiredMonitoringService = 'facilis';
    $request->updateClusterRequest->update->desiredNodePoolAutoConfigNetworkTags = new NetworkTags();
    $request->updateClusterRequest->update->desiredNodePoolAutoConfigNetworkTags->tags = [
        'aperiam',
        'sint',
        'accusamus',
    ];
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling = new NodePoolAutoscaling();
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->autoprovisioned = false;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->enabled = false;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->locationPolicy = NodePoolAutoscalingLocationPolicyEnum::LOCATION_POLICY_UNSPECIFIED;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->maxNodeCount = 520081;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->minNodeCount = 115861;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->totalMaxNodeCount = 30661;
    $request->updateClusterRequest->update->desiredNodePoolAutoscaling->totalMinNodeCount = 244376;
    $request->updateClusterRequest->update->desiredNodePoolId = 'dolor';
    $request->updateClusterRequest->update->desiredNodePoolLoggingConfig = new NodePoolLoggingConfig();
    $request->updateClusterRequest->update->desiredNodePoolLoggingConfig->variantConfig = new LoggingVariantConfig();
    $request->updateClusterRequest->update->desiredNodePoolLoggingConfig->variantConfig->variant = LoggingVariantConfigVariantEnum::VARIANT_UNSPECIFIED;
    $request->updateClusterRequest->update->desiredNodeVersion = 'a';
    $request->updateClusterRequest->update->desiredNotificationConfig = new NotificationConfig();
    $request->updateClusterRequest->update->desiredNotificationConfig->pubsub = new PubSub();
    $request->updateClusterRequest->update->desiredNotificationConfig->pubsub->enabled = false;
    $request->updateClusterRequest->update->desiredNotificationConfig->pubsub->filter = new Filter();
    $request->updateClusterRequest->update->desiredNotificationConfig->pubsub->filter->eventType = [
        FilterEventTypeEnum::UPGRADE_EVENT,
    ];
    $request->updateClusterRequest->update->desiredNotificationConfig->pubsub->topic = 'atque';
    $request->updateClusterRequest->update->desiredPrivateClusterConfig = new PrivateClusterConfig();
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->enablePrivateEndpoint = false;
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->enablePrivateNodes = false;
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->masterGlobalAccessConfig = new PrivateClusterMasterGlobalAccessConfig();
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->masterGlobalAccessConfig->enabled = false;
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->masterIpv4CidrBlock = 'beatae';
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->peeringName = 'at';
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->privateEndpoint = 'labore';
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->privateEndpointSubnetwork = 'minus';
    $request->updateClusterRequest->update->desiredPrivateClusterConfig->publicEndpoint = 'esse';
    $request->updateClusterRequest->update->desiredPrivateIpv6GoogleAccess = ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum::PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED;
    $request->updateClusterRequest->update->desiredReleaseChannel = new ReleaseChannel();
    $request->updateClusterRequest->update->desiredReleaseChannel->channel = ReleaseChannelChannelEnum::UNSPECIFIED;
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig = new ResourceUsageExportConfig();
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig->bigqueryDestination = new BigQueryDestination();
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig->bigqueryDestination->datasetId = 'rerum';
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig->consumptionMeteringConfig = new ConsumptionMeteringConfig();
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig->consumptionMeteringConfig->enabled = false;
    $request->updateClusterRequest->update->desiredResourceUsageExportConfig->enableNetworkEgressMetering = false;
    $request->updateClusterRequest->update->desiredServiceExternalIpsConfig = new ServiceExternalIPsConfig();
    $request->updateClusterRequest->update->desiredServiceExternalIpsConfig->enabled = false;
    $request->updateClusterRequest->update->desiredShieldedNodes = new ShieldedNodes();
    $request->updateClusterRequest->update->desiredShieldedNodes->enabled = false;
    $request->updateClusterRequest->update->desiredStackType = ClusterUpdateDesiredStackTypeEnum::IPV4;
    $request->updateClusterRequest->update->desiredVerticalPodAutoscaling = new VerticalPodAutoscaling();
    $request->updateClusterRequest->update->desiredVerticalPodAutoscaling->enabled = false;
    $request->updateClusterRequest->update->desiredWorkloadIdentityConfig = new WorkloadIdentityConfig();
    $request->updateClusterRequest->update->desiredWorkloadIdentityConfig->workloadPool = 'aperiam';
    $request->updateClusterRequest->update->etag = 'dignissimos';
    $request->updateClusterRequest->update->removedAdditionalPodRangesConfig = new AdditionalPodRangesConfig();
    $request->updateClusterRequest->update->removedAdditionalPodRangesConfig->podRangeNames = [
        'velit',
        'porro',
        'provident',
        'consectetur',
    ];
    $request->updateClusterRequest->zone = 'eligendi';
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->clusterId = 'natus';
    $request->fields = 'temporibus';
    $request->key = 'officia';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->projectId = 'tenetur';
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'itaque';
    $request->zone = 'illum';

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
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->fields = 'consectetur';
    $request->key = 'repellat';
    $request->name = 'Rose Heller';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->projectId = 'illo';
    $request->quotaUser = 'hic';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'delectus';
    $request->zone = 'non';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->cancelOperationRequest = new CancelOperationRequest();
    $request->cancelOperationRequest->name = 'Annette Green';
    $request->cancelOperationRequest->operationId = 'modi';
    $request->cancelOperationRequest->projectId = 'in';
    $request->cancelOperationRequest->zone = 'explicabo';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'odit';
    $request->key = 'deleniti';
    $request->oauthToken = 'enim';
    $request->operationId = 'voluptate';
    $request->prettyPrint = false;
    $request->projectId = 'similique';
    $request->quotaUser = 'minima';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'magnam';
    $request->zone = 'sit';

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
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dignissimos';
    $request->key = 'fugiat';
    $request->name = 'Nellie Harris I';
    $request->oauthToken = 'aut';
    $request->operationId = 'aut';
    $request->prettyPrint = false;
    $request->projectId = 'eveniet';
    $request->quotaUser = 'odio';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'numquam';
    $request->zone = 'dolorum';

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

Lists all operations in a project in a specific zone or all zones.

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
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->fields = 'quaerat';
    $request->key = 'itaque';
    $request->oauthToken = 'minus';
    $request->parent = 'sunt';
    $request->prettyPrint = false;
    $request->projectId = 'distinctio';
    $request->quotaUser = 'iusto';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'et';
    $request->zone = 'facilis';

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
