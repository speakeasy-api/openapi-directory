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
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->bareMetalAdminClusterInput->bareMetalVersion = 'ipsa';
    $request->bareMetalAdminClusterInput->clusterOperations = new BareMetalAdminClusterOperationsConfig();
    $request->bareMetalAdminClusterInput->clusterOperations->enableApplicationLogs = false;
    $request->bareMetalAdminClusterInput->controlPlane = new BareMetalAdminControlPlaneConfig();
    $request->bareMetalAdminClusterInput->controlPlane->apiServerArgs = [
        new BareMetalAdminApiServerArgument(),
        new BareMetalAdminApiServerArgument(),
        new BareMetalAdminApiServerArgument(),
        new BareMetalAdminApiServerArgument(),
    ];
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig = new BareMetalAdminControlPlaneNodePoolConfig();
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig = new BareMetalNodePoolConfig();
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig = new BareMetalKubeletConfig();
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig->registryBurst = 666767;
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig->registryPullQps = 653140;
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig->serializeImagePullsDisabled = false;
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->labels = [
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
        'nobis' => 'enim',
    ];
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->nodeConfigs = [
        new BareMetalNodeConfig(),
        new BareMetalNodeConfig(),
        new BareMetalNodeConfig(),
    ];
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum::OPERATING_SYSTEM_UNSPECIFIED;
    $request->bareMetalAdminClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->taints = [
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->bareMetalAdminClusterInput->description = 'excepturi';
    $request->bareMetalAdminClusterInput->etag = 'accusantium';
    $request->bareMetalAdminClusterInput->loadBalancer = new BareMetalAdminLoadBalancerConfig();
    $request->bareMetalAdminClusterInput->loadBalancer->manualLbConfig = new BareMetalAdminManualLbConfig();
    $request->bareMetalAdminClusterInput->loadBalancer->manualLbConfig->enabled = false;
    $request->bareMetalAdminClusterInput->loadBalancer->portConfig = new BareMetalAdminPortConfig();
    $request->bareMetalAdminClusterInput->loadBalancer->portConfig->controlPlaneLoadBalancerPort = 438601;
    $request->bareMetalAdminClusterInput->loadBalancer->vipConfig = new BareMetalAdminVipConfig();
    $request->bareMetalAdminClusterInput->loadBalancer->vipConfig->controlPlaneVip = 'culpa';
    $request->bareMetalAdminClusterInput->maintenanceConfig = new BareMetalAdminMaintenanceConfig();
    $request->bareMetalAdminClusterInput->maintenanceConfig->maintenanceAddressCidrBlocks = [
        'sapiente',
        'architecto',
        'mollitia',
        'dolorem',
    ];
    $request->bareMetalAdminClusterInput->maintenanceStatus = new BareMetalAdminMaintenanceStatus();
    $request->bareMetalAdminClusterInput->maintenanceStatus->machineDrainStatus = new BareMetalAdminMachineDrainStatus();
    $request->bareMetalAdminClusterInput->maintenanceStatus->machineDrainStatus->drainedMachines = [
        new BareMetalAdminDrainedMachine(),
        new BareMetalAdminDrainedMachine(),
        new BareMetalAdminDrainedMachine(),
    ];
    $request->bareMetalAdminClusterInput->maintenanceStatus->machineDrainStatus->drainingMachines = [
        new BareMetalAdminDrainingMachine(),
    ];
    $request->bareMetalAdminClusterInput->name = 'Shaun McCullough';
    $request->bareMetalAdminClusterInput->networkConfig = new BareMetalAdminNetworkConfig();
    $request->bareMetalAdminClusterInput->networkConfig->islandModeCidr = new BareMetalAdminIslandModeCidrConfig();
    $request->bareMetalAdminClusterInput->networkConfig->islandModeCidr->podAddressCidrBlocks = [
        'molestiae',
        'velit',
    ];
    $request->bareMetalAdminClusterInput->networkConfig->islandModeCidr->serviceAddressCidrBlocks = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->bareMetalAdminClusterInput->nodeAccessConfig = new BareMetalAdminNodeAccessConfig();
    $request->bareMetalAdminClusterInput->nodeAccessConfig->loginUser = 'laborum';
    $request->bareMetalAdminClusterInput->nodeConfig = new BareMetalAdminWorkloadNodeConfig();
    $request->bareMetalAdminClusterInput->nodeConfig->maxPodsPerNode = 'animi';
    $request->bareMetalAdminClusterInput->osEnvironmentConfig = new BareMetalAdminOsEnvironmentConfig();
    $request->bareMetalAdminClusterInput->osEnvironmentConfig->packageRepoExcluded = false;
    $request->bareMetalAdminClusterInput->proxy = new BareMetalAdminProxyConfig();
    $request->bareMetalAdminClusterInput->proxy->noProxy = [
        'odit',
        'quo',
    ];
    $request->bareMetalAdminClusterInput->proxy->uri = 'http://weary-fright.name';
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
    ];
    $request->bareMetalAdminClusterInput->status->errorMessage = 'quasi';
    $request->bareMetalAdminClusterInput->storage = new BareMetalAdminStorageConfig();
    $request->bareMetalAdminClusterInput->storage->lvpNodeMountsConfig = new BareMetalLvpConfig();
    $request->bareMetalAdminClusterInput->storage->lvpNodeMountsConfig->path = 'error';
    $request->bareMetalAdminClusterInput->storage->lvpNodeMountsConfig->storageClass = 'temporibus';
    $request->bareMetalAdminClusterInput->storage->lvpShareConfig = new BareMetalLvpShareConfig();
    $request->bareMetalAdminClusterInput->storage->lvpShareConfig->lvpConfig = new BareMetalLvpConfig();
    $request->bareMetalAdminClusterInput->storage->lvpShareConfig->lvpConfig->path = 'laborum';
    $request->bareMetalAdminClusterInput->storage->lvpShareConfig->lvpConfig->storageClass = 'quasi';
    $request->bareMetalAdminClusterInput->storage->lvpShareConfig->sharedPathPvCount = 971945;
    $request->bareMetalAdminClusterInput->validationCheck = new ValidationCheckInput();
    $request->bareMetalAdminClusterInput->validationCheck->option = ValidationCheckOptionEnum::SKIP_VALIDATION_ALL;
    $request->bareMetalAdminClusterInput->validationCheck->status = new ValidationCheckStatus();
    $request->bareMetalAdminClusterInput->validationCheck->status->result = [
        new ValidationCheckResult(),
        new ValidationCheckResult(),
        new ValidationCheckResult(),
        new ValidationCheckResult(),
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->bareMetalAdminClusterId = 'voluptatibus';
    $request->callback = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->oauthToken = 'cum';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ut';
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

## gkeonpremProjectsLocationsBareMetalAdminClustersEnroll

Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalAdminClustersEnrollRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnrollBareMetalAdminClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalAdminClustersEnrollSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalAdminClustersEnrollRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->enrollBareMetalAdminClusterRequest = new EnrollBareMetalAdminClusterRequest();
    $request->enrollBareMetalAdminClusterRequest->bareMetalAdminClusterId = 'dicta';
    $request->enrollBareMetalAdminClusterRequest->localName = 'corporis';
    $request->enrollBareMetalAdminClusterRequest->membership = 'dolore';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->parent = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalAdminClustersEnrollSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalAdminClustersEnroll($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsBareMetalAdminClustersList

Lists bare metal admin clusters in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalAdminClustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalAdminClustersListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalAdminClustersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalAdminClustersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->pageSize = 93940;
    $request->pageToken = 'repudiandae';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'incidunt';
    $request->view = GkeonpremProjectsLocationsBareMetalAdminClustersListViewEnum::CLUSTER_VIEW_UNSPECIFIED;

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalAdminClustersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalAdminClustersList($request, $requestSecurity);

    if ($response->listBareMetalAdminClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfig

Queries the bare metal admin cluster version config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'deserunt';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->upgradeConfigClusterName = 'qui';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfig($request, $requestSecurity);

    if ($response->queryBareMetalAdminVersionConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreate

Creates a new bare metal node pool in a given project, location and Bare Metal cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodePoolInput;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalKubeletConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodePoolConfigOperatingSystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCondition;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bareMetalNodePoolInput = new BareMetalNodePoolInput();
    $request->bareMetalNodePoolInput->annotations = [
        'magni' => 'assumenda',
    ];
    $request->bareMetalNodePoolInput->displayName = 'ipsam';
    $request->bareMetalNodePoolInput->etag = 'alias';
    $request->bareMetalNodePoolInput->name = 'Sonya Marks';
    $request->bareMetalNodePoolInput->nodePoolConfig = new BareMetalNodePoolConfig();
    $request->bareMetalNodePoolInput->nodePoolConfig->kubeletConfig = new BareMetalKubeletConfig();
    $request->bareMetalNodePoolInput->nodePoolConfig->kubeletConfig->registryBurst = 735194;
    $request->bareMetalNodePoolInput->nodePoolConfig->kubeletConfig->registryPullQps = 288476;
    $request->bareMetalNodePoolInput->nodePoolConfig->kubeletConfig->serializeImagePullsDisabled = false;
    $request->bareMetalNodePoolInput->nodePoolConfig->labels = [
        'eum' => 'non',
        'eligendi' => 'sint',
        'aliquid' => 'provident',
        'necessitatibus' => 'sint',
    ];
    $request->bareMetalNodePoolInput->nodePoolConfig->nodeConfigs = [
        new BareMetalNodeConfig(),
        new BareMetalNodeConfig(),
        new BareMetalNodeConfig(),
    ];
    $request->bareMetalNodePoolInput->nodePoolConfig->operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum::OPERATING_SYSTEM_UNSPECIFIED;
    $request->bareMetalNodePoolInput->nodePoolConfig->taints = [
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->bareMetalNodePoolInput->status = new ResourceStatus();
    $request->bareMetalNodePoolInput->status->conditions = [
        new ResourceCondition(),
        new ResourceCondition(),
        new ResourceCondition(),
        new ResourceCondition(),
    ];
    $request->bareMetalNodePoolInput->status->errorMessage = 'dolorum';
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->bareMetalNodePoolId = 'illum';
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->parent = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquid';
    $request->validateOnly = false;

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnroll

Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnrollBareMetalNodePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->enrollBareMetalNodePoolRequest = new EnrollBareMetalNodePoolRequest();
    $request->enrollBareMetalNodePoolRequest->bareMetalNodePoolId = 'accusamus';
    $request->enrollBareMetalNodePoolRequest->validateOnly = false;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'delectus';
    $request->oauthToken = 'quidem';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnroll($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsList

Lists bare metal node pools in a given project, location and bare metal cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->key = 'vel';
    $request->oauthToken = 'natus';
    $request->pageSize = 606393;
    $request->pageToken = 'molestiae';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsList($request, $requestSecurity);

    if ($response->listBareMetalNodePoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsBareMetalClustersCreate

Creates a new bare metal cluster in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalClusterOperationsConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalControlPlaneConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalApiServerArgument;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalControlPlaneNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalKubeletConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodePoolConfigOperatingSystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalLoadBalancerConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalBgpLbConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalLoadBalancerAddressPool;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalBgpPeerConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalLoadBalancerNodePoolConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalManualLbConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalMetalLbConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalPortConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalVipConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalMaintenanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalMaintenanceStatus;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalMachineDrainStatus;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalDrainedMachine;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalDrainingMachine;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalIslandModeCidrConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalMultipleNetworkInterfacesConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalSrIovConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalNodeAccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalWorkloadNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalWorkloadNodeConfigContainerRuntimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalOsEnvironmentConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalProxyConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalSecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\Authorization;
use \OpenAPI\OpenAPI\Models\Shared\ClusterUser;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCondition;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalLvpConfig;
use \OpenAPI\OpenAPI\Models\Shared\BareMetalLvpShareConfig;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckInput;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckStatus;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckResult;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckResultStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalClustersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bareMetalClusterInput = new BareMetalClusterInput();
    $request->bareMetalClusterInput->adminClusterMembership = 'labore';
    $request->bareMetalClusterInput->annotations = [
        'suscipit' => 'natus',
        'nobis' => 'eum',
    ];
    $request->bareMetalClusterInput->bareMetalVersion = 'vero';
    $request->bareMetalClusterInput->clusterOperations = new BareMetalClusterOperationsConfig();
    $request->bareMetalClusterInput->clusterOperations->enableApplicationLogs = false;
    $request->bareMetalClusterInput->controlPlane = new BareMetalControlPlaneConfig();
    $request->bareMetalClusterInput->controlPlane->apiServerArgs = [
        new BareMetalApiServerArgument(),
    ];
    $request->bareMetalClusterInput->controlPlane->controlPlaneNodePoolConfig = new BareMetalControlPlaneNodePoolConfig();
    $request->bareMetalClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig = new BareMetalNodePoolConfig();
    $request->bareMetalClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig = new BareMetalKubeletConfig();
    $request->bareMetalClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig->registryBurst = 102863;
    $request->bareMetalClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig->registryPullQps = 298282;
    $request->bareMetalClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->kubeletConfig->serializeImagePullsDisabled = false;
    $request->bareMetalClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->labels = [
        'excepturi' => 'ullam',
    ];
    $request->bareMetalClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->nodeConfigs = [
        new BareMetalNodeConfig(),
        new BareMetalNodeConfig(),
        new BareMetalNodeConfig(),
    ];
    $request->bareMetalClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum::LINUX;
    $request->bareMetalClusterInput->controlPlane->controlPlaneNodePoolConfig->nodePoolConfig->taints = [
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->bareMetalClusterInput->description = 'accusantium';
    $request->bareMetalClusterInput->loadBalancer = new BareMetalLoadBalancerConfig();
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig = new BareMetalBgpLbConfig();
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->addressPools = [
        new BareMetalLoadBalancerAddressPool(),
        new BareMetalLoadBalancerAddressPool(),
        new BareMetalLoadBalancerAddressPool(),
    ];
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->asn = 'reiciendis';
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->bgpPeerConfigs = [
        new BareMetalBgpPeerConfig(),
        new BareMetalBgpPeerConfig(),
        new BareMetalBgpPeerConfig(),
    ];
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->loadBalancerNodePoolConfig = new BareMetalLoadBalancerNodePoolConfig();
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->loadBalancerNodePoolConfig->nodePoolConfig = new BareMetalNodePoolConfig();
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->kubeletConfig = new BareMetalKubeletConfig();
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->kubeletConfig->registryBurst = 320997;
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->kubeletConfig->registryPullQps = 431418;
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->kubeletConfig->serializeImagePullsDisabled = false;
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->labels = [
        'necessitatibus' => 'odit',
    ];
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->nodeConfigs = [
        new BareMetalNodeConfig(),
        new BareMetalNodeConfig(),
    ];
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum::OPERATING_SYSTEM_UNSPECIFIED;
    $request->bareMetalClusterInput->loadBalancer->bgpLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->taints = [
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->bareMetalClusterInput->loadBalancer->manualLbConfig = new BareMetalManualLbConfig();
    $request->bareMetalClusterInput->loadBalancer->manualLbConfig->enabled = false;
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig = new BareMetalMetalLbConfig();
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->addressPools = [
        new BareMetalLoadBalancerAddressPool(),
        new BareMetalLoadBalancerAddressPool(),
        new BareMetalLoadBalancerAddressPool(),
        new BareMetalLoadBalancerAddressPool(),
    ];
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->loadBalancerNodePoolConfig = new BareMetalLoadBalancerNodePoolConfig();
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->loadBalancerNodePoolConfig->nodePoolConfig = new BareMetalNodePoolConfig();
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->kubeletConfig = new BareMetalKubeletConfig();
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->kubeletConfig->registryBurst = 891924;
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->kubeletConfig->registryPullQps = 260341;
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->kubeletConfig->serializeImagePullsDisabled = false;
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->labels = [
        'deleniti' => 'facilis',
        'in' => 'architecto',
        'architecto' => 'repudiandae',
        'ullam' => 'expedita',
    ];
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->nodeConfigs = [
        new BareMetalNodeConfig(),
        new BareMetalNodeConfig(),
    ];
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->operatingSystem = BareMetalNodePoolConfigOperatingSystemEnum::LINUX;
    $request->bareMetalClusterInput->loadBalancer->metalLbConfig->loadBalancerNodePoolConfig->nodePoolConfig->taints = [
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
        new NodeTaint(),
    ];
    $request->bareMetalClusterInput->loadBalancer->portConfig = new BareMetalPortConfig();
    $request->bareMetalClusterInput->loadBalancer->portConfig->controlPlaneLoadBalancerPort = 149448;
    $request->bareMetalClusterInput->loadBalancer->vipConfig = new BareMetalVipConfig();
    $request->bareMetalClusterInput->loadBalancer->vipConfig->controlPlaneVip = 'saepe';
    $request->bareMetalClusterInput->loadBalancer->vipConfig->ingressVip = 'pariatur';
    $request->bareMetalClusterInput->maintenanceConfig = new BareMetalMaintenanceConfig();
    $request->bareMetalClusterInput->maintenanceConfig->maintenanceAddressCidrBlocks = [
        'consequuntur',
    ];
    $request->bareMetalClusterInput->maintenanceStatus = new BareMetalMaintenanceStatus();
    $request->bareMetalClusterInput->maintenanceStatus->machineDrainStatus = new BareMetalMachineDrainStatus();
    $request->bareMetalClusterInput->maintenanceStatus->machineDrainStatus->drainedMachines = [
        new BareMetalDrainedMachine(),
        new BareMetalDrainedMachine(),
        new BareMetalDrainedMachine(),
    ];
    $request->bareMetalClusterInput->maintenanceStatus->machineDrainStatus->drainingMachines = [
        new BareMetalDrainingMachine(),
        new BareMetalDrainingMachine(),
        new BareMetalDrainingMachine(),
    ];
    $request->bareMetalClusterInput->name = 'Joan Satterfield';
    $request->bareMetalClusterInput->networkConfig = new BareMetalNetworkConfig();
    $request->bareMetalClusterInput->networkConfig->advancedNetworking = false;
    $request->bareMetalClusterInput->networkConfig->islandModeCidr = new BareMetalIslandModeCidrConfig();
    $request->bareMetalClusterInput->networkConfig->islandModeCidr->podAddressCidrBlocks = [
        'ea',
        'excepturi',
        'odit',
        'ea',
    ];
    $request->bareMetalClusterInput->networkConfig->islandModeCidr->serviceAddressCidrBlocks = [
        'ab',
    ];
    $request->bareMetalClusterInput->networkConfig->multipleNetworkInterfacesConfig = new BareMetalMultipleNetworkInterfacesConfig();
    $request->bareMetalClusterInput->networkConfig->multipleNetworkInterfacesConfig->enabled = false;
    $request->bareMetalClusterInput->networkConfig->srIovConfig = new BareMetalSrIovConfig();
    $request->bareMetalClusterInput->networkConfig->srIovConfig->enabled = false;
    $request->bareMetalClusterInput->nodeAccessConfig = new BareMetalNodeAccessConfig();
    $request->bareMetalClusterInput->nodeAccessConfig->loginUser = 'maiores';
    $request->bareMetalClusterInput->nodeConfig = new BareMetalWorkloadNodeConfig();
    $request->bareMetalClusterInput->nodeConfig->containerRuntime = BareMetalWorkloadNodeConfigContainerRuntimeEnum::CONTAINERD;
    $request->bareMetalClusterInput->nodeConfig->maxPodsPerNode = 'ipsam';
    $request->bareMetalClusterInput->osEnvironmentConfig = new BareMetalOsEnvironmentConfig();
    $request->bareMetalClusterInput->osEnvironmentConfig->packageRepoExcluded = false;
    $request->bareMetalClusterInput->proxy = new BareMetalProxyConfig();
    $request->bareMetalClusterInput->proxy->noProxy = [
        'autem',
        'nam',
    ];
    $request->bareMetalClusterInput->proxy->uri = 'http://tragic-framework.org';
    $request->bareMetalClusterInput->securityConfig = new BareMetalSecurityConfig();
    $request->bareMetalClusterInput->securityConfig->authorization = new Authorization();
    $request->bareMetalClusterInput->securityConfig->authorization->adminUsers = [
        new ClusterUser(),
    ];
    $request->bareMetalClusterInput->status = new ResourceStatus();
    $request->bareMetalClusterInput->status->conditions = [
        new ResourceCondition(),
        new ResourceCondition(),
        new ResourceCondition(),
        new ResourceCondition(),
    ];
    $request->bareMetalClusterInput->status->errorMessage = 'amet';
    $request->bareMetalClusterInput->storage = new BareMetalStorageConfig();
    $request->bareMetalClusterInput->storage->lvpNodeMountsConfig = new BareMetalLvpConfig();
    $request->bareMetalClusterInput->storage->lvpNodeMountsConfig->path = 'aut';
    $request->bareMetalClusterInput->storage->lvpNodeMountsConfig->storageClass = 'cumque';
    $request->bareMetalClusterInput->storage->lvpShareConfig = new BareMetalLvpShareConfig();
    $request->bareMetalClusterInput->storage->lvpShareConfig->lvpConfig = new BareMetalLvpConfig();
    $request->bareMetalClusterInput->storage->lvpShareConfig->lvpConfig->path = 'corporis';
    $request->bareMetalClusterInput->storage->lvpShareConfig->lvpConfig->storageClass = 'hic';
    $request->bareMetalClusterInput->storage->lvpShareConfig->sharedPathPvCount = 729991;
    $request->bareMetalClusterInput->validationCheck = new ValidationCheckInput();
    $request->bareMetalClusterInput->validationCheck->option = ValidationCheckOptionEnum::SKIP_VALIDATION_ALL;
    $request->bareMetalClusterInput->validationCheck->status = new ValidationCheckStatus();
    $request->bareMetalClusterInput->validationCheck->status->result = [
        new ValidationCheckResult(),
    ];
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->bareMetalClusterId = 'dignissimos';
    $request->callback = 'eaque';
    $request->fields = 'quis';
    $request->key = 'nesciunt';
    $request->oauthToken = 'eos';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'quam';
    $request->validateOnly = false;

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalClustersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalClustersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsBareMetalClustersEnroll

Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersEnrollRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnrollBareMetalClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersEnrollSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalClustersEnrollRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->enrollBareMetalClusterRequest = new EnrollBareMetalClusterRequest();
    $request->enrollBareMetalClusterRequest->adminClusterMembership = 'vero';
    $request->enrollBareMetalClusterRequest->bareMetalClusterId = 'nostrum';
    $request->enrollBareMetalClusterRequest->localName = 'hic';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'perspiciatis';
    $request->key = 'voluptatem';
    $request->oauthToken = 'porro';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalClustersEnrollSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalClustersEnroll($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsBareMetalClustersList

Lists bare metal clusters in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalClustersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'earum';
    $request->filter = 'modi';
    $request->key = 'iste';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 535633;
    $request->pageToken = 'pariatur';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'delectus';
    $request->view = GkeonpremProjectsLocationsBareMetalClustersListViewEnum::CLUSTER_VIEW_UNSPECIFIED;

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalClustersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalClustersList($request, $requestSecurity);

    if ($response->listBareMetalClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsBareMetalClustersQueryVersionConfig

Queries the bare metal user cluster version config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->createConfigAdminClusterMembership = 'dolor';
    $request->createConfigAdminClusterName = 'qui';
    $request->fields = 'ipsum';
    $request->key = 'hic';
    $request->oauthToken = 'excepturi';
    $request->parent = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->upgradeConfigClusterName = 'dignissimos';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsBareMetalClustersQueryVersionConfig($request, $requestSecurity);

    if ($response->queryBareMetalVersionConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'ipsa';
    $request->filter = 'iure';
    $request->key = 'odio';
    $request->name = 'Sophia Predovic';
    $request->oauthToken = 'natus';
    $request->pageSize = 179603;
    $request->pageToken = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new GkeonpremProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'iusto' => 'voluptate',
        'dolorum' => 'deleniti',
        'omnis' => 'necessitatibus',
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'ipsum';
    $request->key = 'voluptate';
    $request->name = 'Elbert Gislason I';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new GkeonpremProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareAdminClustersEnroll

Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareAdminClustersEnrollRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnrollVmwareAdminClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareAdminClustersEnrollSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareAdminClustersEnrollRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->enrollVmwareAdminClusterRequest = new EnrollVmwareAdminClusterRequest();
    $request->enrollVmwareAdminClusterRequest->localName = 'deserunt';
    $request->enrollVmwareAdminClusterRequest->membership = 'provident';
    $request->enrollVmwareAdminClusterRequest->vmwareAdminClusterId = 'minima';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'alias';
    $request->key = 'at';
    $request->oauthToken = 'quaerat';
    $request->parent = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareAdminClustersEnrollSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareAdminClustersEnroll($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareAdminClustersList

Lists VMware admin clusters in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareAdminClustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareAdminClustersListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareAdminClustersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareAdminClustersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'harum';
    $request->key = 'iusto';
    $request->oauthToken = 'ipsum';
    $request->pageSize = 788740;
    $request->pageToken = 'tenetur';
    $request->parent = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'numquam';
    $request->view = GkeonpremProjectsLocationsVmwareAdminClustersListViewEnum::CLUSTER_VIEW_UNSPECIFIED;

    $requestSecurity = new GkeonpremProjectsLocationsVmwareAdminClustersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareAdminClustersList($request, $requestSecurity);

    if ($response->listVmwareAdminClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersCreate

Creates a new VMware cluster in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmwareClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\VmwareAAGConfig;
use \OpenAPI\OpenAPI\Models\Shared\Authorization;
use \OpenAPI\OpenAPI\Models\Shared\ClusterUser;
use \OpenAPI\OpenAPI\Models\Shared\VmwareAutoRepairConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareControlPlaneNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareAutoResizeConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareControlPlaneVsphereConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareDataplaneV2Config;
use \OpenAPI\OpenAPI\Models\Shared\VmwareLoadBalancerConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareF5BigIpConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareManualLbConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareMetalLbConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareAddressPool;
use \OpenAPI\OpenAPI\Models\Shared\VmwareVipConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareNetworkConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\VmwareControlPlaneV2Config;
use \OpenAPI\OpenAPI\Models\Shared\VmwareIpBlock;
use \OpenAPI\OpenAPI\Models\Shared\VmwareHostIp;
use \OpenAPI\OpenAPI\Models\Shared\VmwareDhcpIpConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareHostConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareStaticIpConfig;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCondition;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmwareStorageConfig;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckInput;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckStatus;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckResult;
use \OpenAPI\OpenAPI\Models\Shared\ValidationCheckResultStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmwareVCenterConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->vmwareClusterInput = new VmwareClusterInput();
    $request->vmwareClusterInput->adminClusterMembership = 'sapiente';
    $request->vmwareClusterInput->annotations = [
        'nihil' => 'sit',
        'expedita' => 'neque',
        'sed' => 'vel',
    ];
    $request->vmwareClusterInput->antiAffinityGroups = new VmwareAAGConfig();
    $request->vmwareClusterInput->antiAffinityGroups->aagConfigDisabled = false;
    $request->vmwareClusterInput->authorization = new Authorization();
    $request->vmwareClusterInput->authorization->adminUsers = [
        new ClusterUser(),
        new ClusterUser(),
        new ClusterUser(),
    ];
    $request->vmwareClusterInput->autoRepairConfig = new VmwareAutoRepairConfig();
    $request->vmwareClusterInput->autoRepairConfig->enabled = false;
    $request->vmwareClusterInput->controlPlaneNode = new VmwareControlPlaneNodeConfig();
    $request->vmwareClusterInput->controlPlaneNode->autoResizeConfig = new VmwareAutoResizeConfig();
    $request->vmwareClusterInput->controlPlaneNode->autoResizeConfig->enabled = false;
    $request->vmwareClusterInput->controlPlaneNode->cpus = 'voluptas';
    $request->vmwareClusterInput->controlPlaneNode->memory = 'deserunt';
    $request->vmwareClusterInput->controlPlaneNode->replicas = 'quam';
    $request->vmwareClusterInput->controlPlaneNode->vsphereConfig = new VmwareControlPlaneVsphereConfig();
    $request->vmwareClusterInput->controlPlaneNode->vsphereConfig->datastore = 'ipsum';
    $request->vmwareClusterInput->dataplaneV2 = new VmwareDataplaneV2Config();
    $request->vmwareClusterInput->dataplaneV2->advancedNetworking = false;
    $request->vmwareClusterInput->dataplaneV2->dataplaneV2Enabled = false;
    $request->vmwareClusterInput->dataplaneV2->windowsDataplaneV2Enabled = false;
    $request->vmwareClusterInput->description = 'incidunt';
    $request->vmwareClusterInput->enableControlPlaneV2 = false;
    $request->vmwareClusterInput->etag = 'qui';
    $request->vmwareClusterInput->loadBalancer = new VmwareLoadBalancerConfig();
    $request->vmwareClusterInput->loadBalancer->f5Config = new VmwareF5BigIpConfig();
    $request->vmwareClusterInput->loadBalancer->f5Config->address = '8871 Larson Forest';
    $request->vmwareClusterInput->loadBalancer->f5Config->partition = 'aspernatur';
    $request->vmwareClusterInput->loadBalancer->f5Config->snatPool = 'dolores';
    $request->vmwareClusterInput->loadBalancer->manualLbConfig = new VmwareManualLbConfig();
    $request->vmwareClusterInput->loadBalancer->manualLbConfig->controlPlaneNodePort = 716860;
    $request->vmwareClusterInput->loadBalancer->manualLbConfig->ingressHttpNodePort = 704474;
    $request->vmwareClusterInput->loadBalancer->manualLbConfig->ingressHttpsNodePort = 396060;
    $request->vmwareClusterInput->loadBalancer->manualLbConfig->konnectivityServerNodePort = 463150;
    $request->vmwareClusterInput->loadBalancer->metalLbConfig = new VmwareMetalLbConfig();
    $request->vmwareClusterInput->loadBalancer->metalLbConfig->addressPools = [
        new VmwareAddressPool(),
        new VmwareAddressPool(),
        new VmwareAddressPool(),
    ];
    $request->vmwareClusterInput->loadBalancer->vipConfig = new VmwareVipConfig();
    $request->vmwareClusterInput->loadBalancer->vipConfig->controlPlaneVip = 'temporibus';
    $request->vmwareClusterInput->loadBalancer->vipConfig->ingressVip = 'qui';
    $request->vmwareClusterInput->name = 'Beverly Cummerata II';
    $request->vmwareClusterInput->networkConfig = new VmwareNetworkConfigInput();
    $request->vmwareClusterInput->networkConfig->controlPlaneV2Config = new VmwareControlPlaneV2Config();
    $request->vmwareClusterInput->networkConfig->controlPlaneV2Config->controlPlaneIpBlock = new VmwareIpBlock();
    $request->vmwareClusterInput->networkConfig->controlPlaneV2Config->controlPlaneIpBlock->gateway = 'nam';
    $request->vmwareClusterInput->networkConfig->controlPlaneV2Config->controlPlaneIpBlock->ips = [
        new VmwareHostIp(),
        new VmwareHostIp(),
        new VmwareHostIp(),
        new VmwareHostIp(),
    ];
    $request->vmwareClusterInput->networkConfig->controlPlaneV2Config->controlPlaneIpBlock->netmask = 'voluptatem';
    $request->vmwareClusterInput->networkConfig->dhcpIpConfig = new VmwareDhcpIpConfig();
    $request->vmwareClusterInput->networkConfig->dhcpIpConfig->enabled = false;
    $request->vmwareClusterInput->networkConfig->hostConfig = new VmwareHostConfig();
    $request->vmwareClusterInput->networkConfig->hostConfig->dnsSearchDomains = [
        'soluta',
        'nobis',
        'et',
        'saepe',
    ];
    $request->vmwareClusterInput->networkConfig->hostConfig->dnsServers = [
        'veritatis',
    ];
    $request->vmwareClusterInput->networkConfig->hostConfig->ntpServers = [
        'quos',
        'tempore',
        'cupiditate',
    ];
    $request->vmwareClusterInput->networkConfig->podAddressCidrBlocks = [
        'delectus',
    ];
    $request->vmwareClusterInput->networkConfig->serviceAddressCidrBlocks = [
        'dolore',
    ];
    $request->vmwareClusterInput->networkConfig->staticIpConfig = new VmwareStaticIpConfig();
    $request->vmwareClusterInput->networkConfig->staticIpConfig->ipBlocks = [
        new VmwareIpBlock(),
        new VmwareIpBlock(),
    ];
    $request->vmwareClusterInput->onPremVersion = 'adipisci';
    $request->vmwareClusterInput->status = new ResourceStatus();
    $request->vmwareClusterInput->status->conditions = [
        new ResourceCondition(),
        new ResourceCondition(),
        new ResourceCondition(),
    ];
    $request->vmwareClusterInput->status->errorMessage = 'architecto';
    $request->vmwareClusterInput->storage = new VmwareStorageConfig();
    $request->vmwareClusterInput->storage->vsphereCsiDisabled = false;
    $request->vmwareClusterInput->validationCheck = new ValidationCheckInput();
    $request->vmwareClusterInput->validationCheck->option = ValidationCheckOptionEnum::OPTIONS_UNSPECIFIED;
    $request->vmwareClusterInput->validationCheck->status = new ValidationCheckStatus();
    $request->vmwareClusterInput->validationCheck->status->result = [
        new ValidationCheckResult(),
    ];
    $request->vmwareClusterInput->vcenter = new VmwareVCenterConfig();
    $request->vmwareClusterInput->vcenter->address = '9068 Wyman Forge';
    $request->vmwareClusterInput->vcenter->caCertData = 'facilis';
    $request->vmwareClusterInput->vcenter->cluster = 'cupiditate';
    $request->vmwareClusterInput->vcenter->datacenter = 'qui';
    $request->vmwareClusterInput->vcenter->datastore = 'quae';
    $request->vmwareClusterInput->vcenter->folder = 'laudantium';
    $request->vmwareClusterInput->vcenter->resourcePool = 'odio';
    $request->vmwareClusterInput->vmTrackingEnabled = false;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'vero';
    $request->key = 'omnis';
    $request->oauthToken = 'quis';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'consectetur';
    $request->validateOnly = false;
    $request->vmwareClusterId = 'vero';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersEnroll

Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersEnrollRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnrollVmwareClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersEnrollSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersEnrollRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->enrollVmwareClusterRequest = new EnrollVmwareClusterRequest();
    $request->enrollVmwareClusterRequest->adminClusterMembership = 'dignissimos';
    $request->enrollVmwareClusterRequest->localName = 'hic';
    $request->enrollVmwareClusterRequest->validateOnly = false;
    $request->enrollVmwareClusterRequest->vmwareClusterId = 'distinctio';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'facilis';
    $request->key = 'vero';
    $request->oauthToken = 'ducimus';
    $request->parent = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersEnrollSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersEnroll($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersList

Lists VMware Clusters in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->fields = 'exercitationem';
    $request->filter = 'nulla';
    $request->key = 'fugit';
    $request->oauthToken = 'porro';
    $request->pageSize = 981830;
    $request->pageToken = 'doloribus';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'alias';
    $request->view = GkeonpremProjectsLocationsVmwareClustersListViewEnum::BASIC;

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersList($request, $requestSecurity);

    if ($response->listVmwareClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersQueryVersionConfig

Queries the VMware user cluster version config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->createConfigAdminClusterMembership = 'vel';
    $request->createConfigAdminClusterName = 'possimus';
    $request->fields = 'magnam';
    $request->key = 'ratione';
    $request->oauthToken = 'ex';
    $request->parent = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->upgradeConfigClusterName = 'dolor';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersQueryVersionConfig($request, $requestSecurity);

    if ($response->queryVmwareVersionConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreate

Creates a new VMware node pool in a given project, location and VMWare cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmwareNodePoolInput;
use \OpenAPI\OpenAPI\Models\Shared\VmwareNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmwareVsphereConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareVsphereTag;
use \OpenAPI\OpenAPI\Models\Shared\VmwareNodePoolAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCondition;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->vmwareNodePoolInput = new VmwareNodePoolInput();
    $request->vmwareNodePoolInput->annotations = [
        'excepturi' => 'voluptatibus',
        'nostrum' => 'sapiente',
        'quisquam' => 'saepe',
        'ea' => 'impedit',
    ];
    $request->vmwareNodePoolInput->config = new VmwareNodeConfig();
    $request->vmwareNodePoolInput->config->bootDiskSizeGb = 'corporis';
    $request->vmwareNodePoolInput->config->cpus = 'veniam';
    $request->vmwareNodePoolInput->config->enableLoadBalancer = false;
    $request->vmwareNodePoolInput->config->image = 'aliquid';
    $request->vmwareNodePoolInput->config->imageType = 'inventore';
    $request->vmwareNodePoolInput->config->labels = [
        'ea' => 'quo',
        'consectetur' => 'recusandae',
    ];
    $request->vmwareNodePoolInput->config->memoryMb = 'aspernatur';
    $request->vmwareNodePoolInput->config->replicas = 'minima';
    $request->vmwareNodePoolInput->config->taints = [
        new NodeTaint(),
    ];
    $request->vmwareNodePoolInput->config->vsphereConfig = new VmwareVsphereConfig();
    $request->vmwareNodePoolInput->config->vsphereConfig->datastore = 'a';
    $request->vmwareNodePoolInput->config->vsphereConfig->tags = [
        new VmwareVsphereTag(),
        new VmwareVsphereTag(),
        new VmwareVsphereTag(),
    ];
    $request->vmwareNodePoolInput->displayName = 'aut';
    $request->vmwareNodePoolInput->etag = 'aut';
    $request->vmwareNodePoolInput->name = 'Myron Haag';
    $request->vmwareNodePoolInput->nodePoolAutoscaling = new VmwareNodePoolAutoscalingConfig();
    $request->vmwareNodePoolInput->nodePoolAutoscaling->maxReplicas = 79522;
    $request->vmwareNodePoolInput->nodePoolAutoscaling->minReplicas = 250622;
    $request->vmwareNodePoolInput->onPremVersion = 'et';
    $request->vmwareNodePoolInput->status = new ResourceStatus();
    $request->vmwareNodePoolInput->status->conditions = [
        new ResourceCondition(),
        new ResourceCondition(),
        new ResourceCondition(),
    ];
    $request->vmwareNodePoolInput->status->errorMessage = 'laborum';
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'autem';
    $request->key = 'nobis';
    $request->oauthToken = 'quas';
    $request->parent = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'libero';
    $request->validateOnly = false;
    $request->vmwareNodePoolId = 'quasi';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDelete

Deletes a single VMware node pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'numquam';
    $request->allowMissing = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'provident';
    $request->etag = 'ipsa';
    $request->fields = 'molestiae';
    $request->ignoreErrors = false;
    $request->key = 'magnam';
    $request->name = 'Esther Koch';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'fugiat';
    $request->validateOnly = false;

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnroll

Enrolls a VMware node pool to Anthos On-Prem API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnrollVmwareNodePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->enrollVmwareNodePoolRequest = new EnrollVmwareNodePoolRequest();
    $request->enrollVmwareNodePoolRequest->vmwareNodePoolId = 'eum';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eos';
    $request->fields = 'praesentium';
    $request->key = 'quisquam';
    $request->oauthToken = 'veritatis';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'neque';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnroll($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'eius';
    $request->key = 'eos';
    $request->oauthToken = 'voluptas';
    $request->optionsRequestedPolicyVersion = 69859;
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->resource = 'consequatur';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsList

Lists VMware node pools in a given project, location and VMWare cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'esse';
    $request->key = 'recusandae';
    $request->oauthToken = 'aperiam';
    $request->pageSize = 715179;
    $request->pageToken = 'quod';
    $request->parent = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsList($request, $requestSecurity);

    if ($response->listVmwareNodePoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'commodi';
    $request->key = 'sapiente';
    $request->name = 'Miss Rosie Krajcik';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'atque';
    $request->filter = 'explicabo';
    $request->key = 'minima';
    $request->name = 'Denise Will';
    $request->oauthToken = 'explicabo';
    $request->pageSize = 903984;
    $request->pageToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatch

Updates the parameters of a single VMware node pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmwareNodePoolInput;
use \OpenAPI\OpenAPI\Models\Shared\VmwareNodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaint;
use \OpenAPI\OpenAPI\Models\Shared\NodeTaintEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmwareVsphereConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareVsphereTag;
use \OpenAPI\OpenAPI\Models\Shared\VmwareNodePoolAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ResourceStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCondition;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConditionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->vmwareNodePoolInput = new VmwareNodePoolInput();
    $request->vmwareNodePoolInput->annotations = [
        'veritatis' => 'esse',
        'quod' => 'nam',
        'vero' => 'aliquid',
        'quasi' => 'saepe',
    ];
    $request->vmwareNodePoolInput->config = new VmwareNodeConfig();
    $request->vmwareNodePoolInput->config->bootDiskSizeGb = 'vel';
    $request->vmwareNodePoolInput->config->cpus = 'harum';
    $request->vmwareNodePoolInput->config->enableLoadBalancer = false;
    $request->vmwareNodePoolInput->config->image = 'molestiae';
    $request->vmwareNodePoolInput->config->imageType = 'rerum';
    $request->vmwareNodePoolInput->config->labels = [
        'minima' => 'distinctio',
        'eligendi' => 'sit',
        'culpa' => 'tempore',
    ];
    $request->vmwareNodePoolInput->config->memoryMb = 'adipisci';
    $request->vmwareNodePoolInput->config->replicas = 'cumque';
    $request->vmwareNodePoolInput->config->taints = [
        new NodeTaint(),
    ];
    $request->vmwareNodePoolInput->config->vsphereConfig = new VmwareVsphereConfig();
    $request->vmwareNodePoolInput->config->vsphereConfig->datastore = 'consequatur';
    $request->vmwareNodePoolInput->config->vsphereConfig->tags = [
        new VmwareVsphereTag(),
        new VmwareVsphereTag(),
        new VmwareVsphereTag(),
        new VmwareVsphereTag(),
    ];
    $request->vmwareNodePoolInput->displayName = 'quaerat';
    $request->vmwareNodePoolInput->etag = 'sapiente';
    $request->vmwareNodePoolInput->name = 'Joy Labadie';
    $request->vmwareNodePoolInput->nodePoolAutoscaling = new VmwareNodePoolAutoscalingConfig();
    $request->vmwareNodePoolInput->nodePoolAutoscaling->maxReplicas = 857723;
    $request->vmwareNodePoolInput->nodePoolAutoscaling->minReplicas = 557811;
    $request->vmwareNodePoolInput->onPremVersion = 'esse';
    $request->vmwareNodePoolInput->status = new ResourceStatus();
    $request->vmwareNodePoolInput->status->conditions = [
        new ResourceCondition(),
    ];
    $request->vmwareNodePoolInput->status->errorMessage = 'a';
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'possimus';
    $request->key = 'quia';
    $request->name = 'Mr. Marlon Schultz V';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->updateMask = 'tenetur';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'earum';
    $request->validateOnly = false;

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'eius';
    $request->setIamPolicyRequest->policy->version = 727697;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'aliquam';
    $request->key = 'sapiente';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->resource = 'reprehenderit';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'qui',
        'quibusdam',
        'ex',
    ];
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'architecto';
    $request->key = 'omnis';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->resource = 'at';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenroll

Unenrolls a VMware node pool to Anthos On-Prem API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->etag = 'adipisci';
    $request->fields = 'iste';
    $request->force = false;
    $request->key = 'temporibus';
    $request->name = 'Patsy Armstrong';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'non';
    $request->validateOnly = false;

    $requestSecurity = new GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenroll($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
