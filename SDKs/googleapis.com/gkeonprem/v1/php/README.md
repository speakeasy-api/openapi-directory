# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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
