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
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentConfigEnvironmentSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\MasterAuthorizedNetworksConfig;
use \OpenAPI\OpenAPI\Models\Shared\CidrBlock;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\IPAllocationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PrivateEnvironmentConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\NetworkingConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkingConfigConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\RecoveryConfig;
use \OpenAPI\OpenAPI\Models\Shared\ScheduledSnapshotsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareConfig;
use \OpenAPI\OpenAPI\Models\Shared\WebServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\WebServerNetworkAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AllowedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SchedulerResource;
use \OpenAPI\OpenAPI\Models\Shared\WebServerResource;
use \OpenAPI\OpenAPI\Models\Shared\WorkerResource;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsEnvironmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->environmentInput = new EnvironmentInput();
    $request->environmentInput->config = new EnvironmentConfigInput();
    $request->environmentInput->config->airflowUri = 'provident';
    $request->environmentInput->config->dagGcsPrefix = 'distinctio';
    $request->environmentInput->config->databaseConfig = new DatabaseConfig();
    $request->environmentInput->config->databaseConfig->machineType = 'quibusdam';
    $request->environmentInput->config->encryptionConfig = new EncryptionConfig();
    $request->environmentInput->config->encryptionConfig->kmsKeyName = 'unde';
    $request->environmentInput->config->environmentSize = EnvironmentConfigEnvironmentSizeEnum::ENVIRONMENT_SIZE_LARGE;
    $request->environmentInput->config->gkeCluster = 'corrupti';
    $request->environmentInput->config->maintenanceWindow = new MaintenanceWindow();
    $request->environmentInput->config->maintenanceWindow->endTime = 'illum';
    $request->environmentInput->config->maintenanceWindow->recurrence = 'vel';
    $request->environmentInput->config->maintenanceWindow->startTime = 'error';
    $request->environmentInput->config->masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->environmentInput->config->masterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
        new CidrBlock(),
        new CidrBlock(),
    ];
    $request->environmentInput->config->masterAuthorizedNetworksConfig->enabled = false;
    $request->environmentInput->config->nodeConfig = new NodeConfig();
    $request->environmentInput->config->nodeConfig->diskSizeGb = 384382;
    $request->environmentInput->config->nodeConfig->enableIpMasqAgent = false;
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy = new IPAllocationPolicy();
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->clusterIpv4CidrBlock = 'iure';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->clusterSecondaryRangeName = 'magnam';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->servicesIpv4CidrBlock = 'debitis';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->servicesSecondaryRangeName = 'ipsa';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->useIpAliases = false;
    $request->environmentInput->config->nodeConfig->location = 'delectus';
    $request->environmentInput->config->nodeConfig->machineType = 'tempora';
    $request->environmentInput->config->nodeConfig->network = 'suscipit';
    $request->environmentInput->config->nodeConfig->oauthScopes = [
        'minus',
        'placeat',
    ];
    $request->environmentInput->config->nodeConfig->serviceAccount = 'voluptatum';
    $request->environmentInput->config->nodeConfig->subnetwork = 'iusto';
    $request->environmentInput->config->nodeConfig->tags = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->environmentInput->config->nodeCount = 71036;
    $request->environmentInput->config->privateEnvironmentConfig = new PrivateEnvironmentConfigInput();
    $request->environmentInput->config->privateEnvironmentConfig->cloudComposerConnectionSubnetwork = 'quis';
    $request->environmentInput->config->privateEnvironmentConfig->cloudComposerNetworkIpv4CidrBlock = 'veritatis';
    $request->environmentInput->config->privateEnvironmentConfig->cloudSqlIpv4CidrBlock = 'deserunt';
    $request->environmentInput->config->privateEnvironmentConfig->enablePrivateEnvironment = false;
    $request->environmentInput->config->privateEnvironmentConfig->enablePrivatelyUsedPublicIps = false;
    $request->environmentInput->config->privateEnvironmentConfig->networkingConfig = new NetworkingConfig();
    $request->environmentInput->config->privateEnvironmentConfig->networkingConfig->connectionType = NetworkingConfigConnectionTypeEnum::CONNECTION_TYPE_UNSPECIFIED;
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig = new PrivateClusterConfigInput();
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig->enablePrivateEndpoint = false;
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig->masterIpv4CidrBlock = 'ipsam';
    $request->environmentInput->config->privateEnvironmentConfig->webServerIpv4CidrBlock = 'repellendus';
    $request->environmentInput->config->recoveryConfig = new RecoveryConfig();
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig = new ScheduledSnapshotsConfig();
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->enabled = false;
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->snapshotCreationSchedule = 'sapiente';
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->snapshotLocation = 'quo';
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->timeZone = 'odit';
    $request->environmentInput->config->softwareConfig = new SoftwareConfig();
    $request->environmentInput->config->softwareConfig->airflowConfigOverrides = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->environmentInput->config->softwareConfig->envVariables = [
        'dicta' => 'nam',
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
    ];
    $request->environmentInput->config->softwareConfig->imageVersion = 'hic';
    $request->environmentInput->config->softwareConfig->pypiPackages = [
        'totam' => 'beatae',
        'commodi' => 'molestiae',
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->environmentInput->config->softwareConfig->pythonVersion = 'esse';
    $request->environmentInput->config->softwareConfig->schedulerCount = 216550;
    $request->environmentInput->config->webServerConfig = new WebServerConfig();
    $request->environmentInput->config->webServerConfig->machineType = 'excepturi';
    $request->environmentInput->config->webServerNetworkAccessControl = new WebServerNetworkAccessControl();
    $request->environmentInput->config->webServerNetworkAccessControl->allowedIpRanges = [
        new AllowedIpRange(),
    ];
    $request->environmentInput->config->workloadsConfig = new WorkloadsConfig();
    $request->environmentInput->config->workloadsConfig->scheduler = new SchedulerResource();
    $request->environmentInput->config->workloadsConfig->scheduler->count = 18789;
    $request->environmentInput->config->workloadsConfig->scheduler->cpu = 3241.41;
    $request->environmentInput->config->workloadsConfig->scheduler->memoryGb = 6176.36;
    $request->environmentInput->config->workloadsConfig->scheduler->storageGb = 1496.75;
    $request->environmentInput->config->workloadsConfig->webServer = new WebServerResource();
    $request->environmentInput->config->workloadsConfig->webServer->cpu = 6120.96;
    $request->environmentInput->config->workloadsConfig->webServer->memoryGb = 2223.21;
    $request->environmentInput->config->workloadsConfig->webServer->storageGb = 6169.34;
    $request->environmentInput->config->workloadsConfig->worker = new WorkerResource();
    $request->environmentInput->config->workloadsConfig->worker->cpu = 3864.89;
    $request->environmentInput->config->workloadsConfig->worker->maxCount = 943749;
    $request->environmentInput->config->workloadsConfig->worker->memoryGb = 9025.99;
    $request->environmentInput->config->workloadsConfig->worker->minCount = 681820;
    $request->environmentInput->config->workloadsConfig->worker->storageGb = 4499.5;
    $request->environmentInput->createTime = 'corporis';
    $request->environmentInput->labels = [
        'iure' => 'saepe',
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
    ];
    $request->environmentInput->name = 'Shaun Osinski';
    $request->environmentInput->state = EnvironmentStateEnum::RUNNING;
    $request->environmentInput->updateTime = 'explicabo';
    $request->environmentInput->uuid = 'c5955907-aff1-4a3a-afa9-467739251aa5';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'tenetur';
    $request->key = 'ipsam';
    $request->oauthToken = 'id';
    $request->parent = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'error';

    $requestSecurity = new ComposerProjectsLocationsEnvironmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsEnvironmentsCreate($request, $requestSecurity);

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

* [composerProjectsLocationsEnvironmentsCreate](docs/projects/README.md#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [composerProjectsLocationsEnvironmentsList](docs/projects/README.md#composerprojectslocationsenvironmentslist) - List environments.
* [composerProjectsLocationsEnvironmentsLoadSnapshot](docs/projects/README.md#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [composerProjectsLocationsEnvironmentsPatch](docs/projects/README.md#composerprojectslocationsenvironmentspatch) - Update an environment.
* [composerProjectsLocationsEnvironmentsSaveSnapshot](docs/projects/README.md#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [composerProjectsLocationsImageVersionsList](docs/projects/README.md#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [composerProjectsLocationsOperationsDelete](docs/projects/README.md#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [composerProjectsLocationsOperationsGet](docs/projects/README.md#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [composerProjectsLocationsOperationsList](docs/projects/README.md#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
