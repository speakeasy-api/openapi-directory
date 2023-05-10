<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalAdminClustersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminClusterOperationsConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminControlPlaneConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminApiServerArgument;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminControlPlaneNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalKubeletConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodePoolConfigOperatingSystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminLoadBalancerConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminManualLbConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminPortConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminVipConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminMaintenanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminMaintenanceStatus;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminMachineDrainStatus;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminDrainedMachine;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminDrainingMachine;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminIslandModeCidrConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminNodeAccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminWorkloadNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminOsEnvironmentConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminProxyConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminSecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\Authorization;
use \OpenAPI\OpenAPI\Models\Shared\ClusterUser;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCondition;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalAdminStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalLvpConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalLvpShareConfig;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckInput;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckStatus;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckResult;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckResultStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalAdminClustersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalAdminClustersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bareMetalAdminClusterInput = new BareMetalAdminClusterInput();
    $request->bareMetalAdminClusterInput->annotations = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->bareMetalAdminClusterInput->bareMetalVersion = 'vel';
    $request->bareMetalAdminClusterInput->clusterOperations = new BareMetalAdminClusterOperationsConfig();
    $request->bareMetalAdminClusterInput->clusterOperations->enableApplicationLogs = false;
    $request->bareMetalAdminClusterInput->controlPlane = new BareMetalAdminControlPlaneConfig();
    $request->bareMetalAdminClusterInput->controlPlane->apiServerArgs = [
        new BareMetalAdminApiServerArgument(),
        new BareMetalAdminApiServerArgument(),
        new BareMetalAdminApiServerArgument(),
    ];
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig = new BareMetalAdminControlPlaneNodePoolConfig();
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig = new BareMetalNodePoolConfig();
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig = new BareMetalKubeletConfig();
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig->registryBurst = 645894;
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig->registryPullQps = 384382;
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig->serializeImagePullsDisabled = false;
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->labels = [
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->nodeConfigs = [
        new BareMetalNodeConfig(),
        new BareMetalNodeConfig(),
    ];
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum::OPERATING_SYSTEM_UNSPECIFIED;
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->taints = [
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->bareMetalAdminClusterInput->description = 'minus';
    $request->bareMetalAdminClusterInput->etag = 'placeat';
    $request->bareMetalAdminClusterInput->loadBalancer = new BareMetalAdminLoadBalancerConfig();
    $request->bareMetalAdminClusterInput->loadBalancer->manualLbConfig = new BareMetalAdminManualLbConfig();
    $request->bareMetalAdminClusterInput->loadBalancer->manualLbConfig->enabled = false;
    $request->bareMetalAdminClusterInput->loadBalancer->portConfig = new BareMetalAdminPortConfig();
    $request->bareMetalAdminClusterInput->loadBalancer->portConfig->controlPlaneLoadBalancerPort = 528895;
    $request->bareMetalAdminClusterInput->loadBalancer->vipConfig = new BareMetalAdminVipConfig();
    $request->bareMetalAdminClusterInput->loadBalancer->vipConfig->controlPlaneVip = 'iusto';
    $request->bareMetalAdminClusterInput->maintenanceConfig = new BareMetalAdminMaintenanceConfig();
    $request->bareMetalAdminClusterInput->maintenanceConfig->maintenanceAddressCidrBlocks = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->bareMetalAdminClusterInput->maintenanceStatus = new BareMetalAdminMaintenanceStatus();
    $request->bareMetalAdminClusterInput->maintenanceStatus->machineDrainStatus = new BareMetalAdminMachineDrainStatus();
    $request->bareMetalAdminClusterInput->maintenanceStatus->machineDrainStatus->drainedMachines = [
        new BareMetalAdminDrainedMachine(),
    ];
    $request->bareMetalAdminClusterInput->maintenanceStatus->machineDrainStatus->drainingMachines = [
        new BareMetalAdminDrainingMachine(),
        new BareMetalAdminDrainingMachine(),
    ];
    $request->bareMetalAdminClusterInput->name = 'Iris Aufderhar';
    $request->bareMetalAdminClusterInput->networkConfig = new BareMetalAdminNetworkConfig();
    $request->bareMetalAdminClusterInput->networkConfig->islandModeCidr = new BareMetalAdminIslandModeCidrConfig();
    $request->bareMetalAdminClusterInput->networkConfig->islandModeCidr->podAddressCidrBlocks = [
        'quo',
        'odit',
        'at',
        'at',
    ];
    $request->bareMetalAdminClusterInput->networkConfig->islandModeCidr->serviceAddressCidrBlocks = [
        'molestiae',
        'quod',
        'quod',
        'esse',
    ];
    $request->bareMetalAdminClusterInput->nodeAccessConfig = new BareMetalAdminNodeAccessConfig();
    $request->bareMetalAdminClusterInput->nodeAccessConfig->loginUser = 'totam';
    $request->bareMetalAdminClusterInput->nodeConfig = new BareMetalAdminWorkloadNodeConfig();
    $request->bareMetalAdminClusterInput->nodeConfig->maxPodsPerNode = 'porro';
    $request->bareMetalAdminClusterInput->osEnvironmentConfig = new BareMetalAdminOsEnvironmentConfig();
    $request->bareMetalAdminClusterInput->osEnvironmentConfig->packageRepoExcluded = false;
    $request->bareMetalAdminClusterInput->proxy = new BareMetalAdminProxyConfig();
    $request->bareMetalAdminClusterInput->proxy->noProxy = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->bareMetalAdminClusterInput->proxy->uri = 'https://cool-mandarin.org';
    $request->bareMetalAdminClusterInput->securityConfig = new BareMetalAdminSecurityConfig();
    $request->bareMetalAdminClusterInput->securityConfig->authorization = new Authorization();
    $request->bareMetalAdminClusterInput->securityConfig->authorization->adminUsers = [
        new ClusterUser(),
        new ClusterUser(),
        new ClusterUser(),
        new ClusterUser(),
    ];
    $request->bareMetalAdminClusterInput->status = new ResourceStatus();
    $request->bareMetalAdminClusterInput->status->conditions = [
        new ResourceCondition(),
        new ResourceCondition(),
        new ResourceCondition(),
    ];
    $request->bareMetalAdminClusterInput->status->errorMessage = 'beatae';
    $request->bareMetalAdminClusterInput->storage = new BareMetalAdminStorageConfig();
    $request->bareMetalAdminClusterInput->storage->lvpNodeMountsConfig = new BareMetalLvpConfig();
    $request->bareMetalAdminClusterInput->storage->lvpNodeMountsConfig->path = 'commodi';
    $request->bareMetalAdminClusterInput->storage->lvpNodeMountsConfig->storageClass = 'molestiae';
    $request->bareMetalAdminClusterInput->storage->lvpShareConfig = new BareMetalLvpShareConfig();
    $request->bareMetalAdminClusterInput->storage->lvpShareConfig->lvpConfig = new BareMetalLvpConfig();
    $request->bareMetalAdminClusterInput->storage->lvpShareConfig->lvpConfig->path = 'modi';
    $request->bareMetalAdminClusterInput->storage->lvpShareConfig->lvpConfig->storageClass = 'qui';
    $request->bareMetalAdminClusterInput->storage->lvpShareConfig->sharedPathPvCount = 774234;
    $request->bareMetalAdminClusterInput->validationCheck = new ValidationCheckInput();
    $request->bareMetalAdminClusterInput->validationCheck->option = ValidationCheckOptionEnum::SKIP_VALIDATION_ALL;
    $request->bareMetalAdminClusterInput->validationCheck->status = new ValidationCheckStatus();
    $request->bareMetalAdminClusterInput->validationCheck->status->result = [
        new ValidationCheckResult(),
        new ValidationCheckResult(),
    ];
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->bareMetalAdminClusterId = 'aspernatur';
    $request->callback = 'perferendis';
    $request->fields = 'ad';
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';
    $request->validateOnly = false;

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalAdminClustersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalAdminClustersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->