# projects

### Available Operations

* [composerProjectsLocationsEnvironmentsCreate](#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [composerProjectsLocationsEnvironmentsList](#composerprojectslocationsenvironmentslist) - List environments.
* [composerProjectsLocationsEnvironmentsLoadSnapshot](#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [composerProjectsLocationsEnvironmentsPatch](#composerprojectslocationsenvironmentspatch) - Update an environment.
* [composerProjectsLocationsEnvironmentsSaveSnapshot](#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [composerProjectsLocationsImageVersionsList](#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [composerProjectsLocationsOperationsDelete](#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [composerProjectsLocationsOperationsGet](#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [composerProjectsLocationsOperationsList](#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## composerProjectsLocationsEnvironmentsCreate

Create a new environment.

### Example Usage

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
    $request->environmentInput->config->airflowUri = 'laborum';
    $request->environmentInput->config->dagGcsPrefix = 'quasi';
    $request->environmentInput->config->databaseConfig = new DatabaseConfig();
    $request->environmentInput->config->databaseConfig->machineType = 'reiciendis';
    $request->environmentInput->config->encryptionConfig = new EncryptionConfig();
    $request->environmentInput->config->encryptionConfig->kmsKeyName = 'voluptatibus';
    $request->environmentInput->config->environmentSize = EnvironmentConfigEnvironmentSizeEnum::ENVIRONMENT_SIZE_LARGE;
    $request->environmentInput->config->gkeCluster = 'nihil';
    $request->environmentInput->config->maintenanceWindow = new MaintenanceWindow();
    $request->environmentInput->config->maintenanceWindow->endTime = 'praesentium';
    $request->environmentInput->config->maintenanceWindow->recurrence = 'voluptatibus';
    $request->environmentInput->config->maintenanceWindow->startTime = 'ipsa';
    $request->environmentInput->config->masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->environmentInput->config->masterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
        new CidrBlock(),
        new CidrBlock(),
    ];
    $request->environmentInput->config->masterAuthorizedNetworksConfig->enabled = false;
    $request->environmentInput->config->nodeConfig = new NodeConfig();
    $request->environmentInput->config->nodeConfig->diskSizeGb = 451159;
    $request->environmentInput->config->nodeConfig->enableIpMasqAgent = false;
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy = new IPAllocationPolicy();
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->clusterIpv4CidrBlock = 'cum';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->clusterSecondaryRangeName = 'perferendis';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->servicesIpv4CidrBlock = 'doloremque';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->servicesSecondaryRangeName = 'reprehenderit';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->useIpAliases = false;
    $request->environmentInput->config->nodeConfig->location = 'ut';
    $request->environmentInput->config->nodeConfig->machineType = 'maiores';
    $request->environmentInput->config->nodeConfig->network = 'dicta';
    $request->environmentInput->config->nodeConfig->oauthScopes = [
        'dolore',
        'iusto',
    ];
    $request->environmentInput->config->nodeConfig->serviceAccount = 'dicta';
    $request->environmentInput->config->nodeConfig->subnetwork = 'harum';
    $request->environmentInput->config->nodeConfig->tags = [
        'accusamus',
        'commodi',
    ];
    $request->environmentInput->config->nodeCount = 918236;
    $request->environmentInput->config->privateEnvironmentConfig = new PrivateEnvironmentConfigInput();
    $request->environmentInput->config->privateEnvironmentConfig->cloudComposerConnectionSubnetwork = 'quae';
    $request->environmentInput->config->privateEnvironmentConfig->cloudComposerNetworkIpv4CidrBlock = 'ipsum';
    $request->environmentInput->config->privateEnvironmentConfig->cloudSqlIpv4CidrBlock = 'quidem';
    $request->environmentInput->config->privateEnvironmentConfig->enablePrivateEnvironment = false;
    $request->environmentInput->config->privateEnvironmentConfig->enablePrivatelyUsedPublicIps = false;
    $request->environmentInput->config->privateEnvironmentConfig->networkingConfig = new NetworkingConfig();
    $request->environmentInput->config->privateEnvironmentConfig->networkingConfig->connectionType = NetworkingConfigConnectionTypeEnum::VPC_PEERING;
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig = new PrivateClusterConfigInput();
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig->enablePrivateEndpoint = false;
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig->masterIpv4CidrBlock = 'excepturi';
    $request->environmentInput->config->privateEnvironmentConfig->webServerIpv4CidrBlock = 'pariatur';
    $request->environmentInput->config->recoveryConfig = new RecoveryConfig();
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig = new ScheduledSnapshotsConfig();
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->enabled = false;
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->snapshotCreationSchedule = 'modi';
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->snapshotLocation = 'praesentium';
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->timeZone = 'rem';
    $request->environmentInput->config->softwareConfig = new SoftwareConfig();
    $request->environmentInput->config->softwareConfig->airflowConfigOverrides = [
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
        'itaque' => 'incidunt',
        'enim' => 'consequatur',
    ];
    $request->environmentInput->config->softwareConfig->envVariables = [
        'quibusdam' => 'explicabo',
        'deserunt' => 'distinctio',
        'quibusdam' => 'labore',
    ];
    $request->environmentInput->config->softwareConfig->imageVersion = 'modi';
    $request->environmentInput->config->softwareConfig->pypiPackages = [
        'aliquid' => 'cupiditate',
    ];
    $request->environmentInput->config->softwareConfig->pythonVersion = 'quos';
    $request->environmentInput->config->softwareConfig->schedulerCount = 20107;
    $request->environmentInput->config->webServerConfig = new WebServerConfig();
    $request->environmentInput->config->webServerConfig->machineType = 'magni';
    $request->environmentInput->config->webServerNetworkAccessControl = new WebServerNetworkAccessControl();
    $request->environmentInput->config->webServerNetworkAccessControl->allowedIpRanges = [
        new AllowedIpRange(),
        new AllowedIpRange(),
        new AllowedIpRange(),
        new AllowedIpRange(),
    ];
    $request->environmentInput->config->workloadsConfig = new WorkloadsConfig();
    $request->environmentInput->config->workloadsConfig->scheduler = new SchedulerResource();
    $request->environmentInput->config->workloadsConfig->scheduler->count = 369808;
    $request->environmentInput->config->workloadsConfig->scheduler->cpu = 46.95;
    $request->environmentInput->config->workloadsConfig->scheduler->memoryGb = 1464.41;
    $request->environmentInput->config->workloadsConfig->scheduler->storageGb = 6778.17;
    $request->environmentInput->config->workloadsConfig->webServer = new WebServerResource();
    $request->environmentInput->config->workloadsConfig->webServer->cpu = 5696.18;
    $request->environmentInput->config->workloadsConfig->webServer->memoryGb = 2700.08;
    $request->environmentInput->config->workloadsConfig->webServer->storageGb = 7037.37;
    $request->environmentInput->config->workloadsConfig->worker = new WorkerResource();
    $request->environmentInput->config->workloadsConfig->worker->cpu = 7351.94;
    $request->environmentInput->config->workloadsConfig->worker->maxCount = 288476;
    $request->environmentInput->config->workloadsConfig->worker->memoryGb = 9621.89;
    $request->environmentInput->config->workloadsConfig->worker->minCount = 433288;
    $request->environmentInput->config->workloadsConfig->worker->storageGb = 2487.53;
    $request->environmentInput->createTime = 'eligendi';
    $request->environmentInput->labels = [
        'aliquid' => 'provident',
        'necessitatibus' => 'sint',
        'officia' => 'dolor',
    ];
    $request->environmentInput->name = 'Randal Parisian';
    $request->environmentInput->state = EnvironmentStateEnum::ERROR;
    $request->environmentInput->updateTime = 'maiores';
    $request->environmentInput->uuid = 'b14cd66a-e395-4efb-9ba8-8f3a66997074';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->key = 'suscipit';
    $request->oauthToken = 'natus';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aspernatur';

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

## composerProjectsLocationsEnvironmentsList

List environments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsEnvironmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'ullam';
    $request->key = 'provident';
    $request->oauthToken = 'quos';
    $request->pageSize = 574325;
    $request->pageToken = 'accusantium';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new ComposerProjectsLocationsEnvironmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsEnvironmentsList($request, $requestSecurity);

    if ($response->listEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## composerProjectsLocationsEnvironmentsLoadSnapshot

Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoadSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->loadSnapshotRequest = new LoadSnapshotRequest();
    $request->loadSnapshotRequest->skipAirflowOverridesSetting = false;
    $request->loadSnapshotRequest->skipEnvironmentVariablesSetting = false;
    $request->loadSnapshotRequest->skipGcsDataCopying = false;
    $request->loadSnapshotRequest->skipPypiPackagesInstallation = false;
    $request->loadSnapshotRequest->snapshotPath = 'dolor';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->environment = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsEnvironmentsLoadSnapshot($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## composerProjectsLocationsEnvironmentsPatch

Update an environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsEnvironmentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->environmentInput = new EnvironmentInput();
    $request->environmentInput->config = new EnvironmentConfigInput();
    $request->environmentInput->config->airflowUri = 'in';
    $request->environmentInput->config->dagGcsPrefix = 'architecto';
    $request->environmentInput->config->databaseConfig = new DatabaseConfig();
    $request->environmentInput->config->databaseConfig->machineType = 'architecto';
    $request->environmentInput->config->encryptionConfig = new EncryptionConfig();
    $request->environmentInput->config->encryptionConfig->kmsKeyName = 'repudiandae';
    $request->environmentInput->config->environmentSize = EnvironmentConfigEnvironmentSizeEnum::ENVIRONMENT_SIZE_SMALL;
    $request->environmentInput->config->gkeCluster = 'expedita';
    $request->environmentInput->config->maintenanceWindow = new MaintenanceWindow();
    $request->environmentInput->config->maintenanceWindow->endTime = 'nihil';
    $request->environmentInput->config->maintenanceWindow->recurrence = 'repellat';
    $request->environmentInput->config->maintenanceWindow->startTime = 'quibusdam';
    $request->environmentInput->config->masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->environmentInput->config->masterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
    ];
    $request->environmentInput->config->masterAuthorizedNetworksConfig->enabled = false;
    $request->environmentInput->config->nodeConfig = new NodeConfig();
    $request->environmentInput->config->nodeConfig->diskSizeGb = 904648;
    $request->environmentInput->config->nodeConfig->enableIpMasqAgent = false;
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy = new IPAllocationPolicy();
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->clusterIpv4CidrBlock = 'pariatur';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->clusterSecondaryRangeName = 'accusantium';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->servicesIpv4CidrBlock = 'consequuntur';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->servicesSecondaryRangeName = 'praesentium';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->useIpAliases = false;
    $request->environmentInput->config->nodeConfig->location = 'natus';
    $request->environmentInput->config->nodeConfig->machineType = 'magni';
    $request->environmentInput->config->nodeConfig->network = 'sunt';
    $request->environmentInput->config->nodeConfig->oauthScopes = [
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->environmentInput->config->nodeConfig->serviceAccount = 'excepturi';
    $request->environmentInput->config->nodeConfig->subnetwork = 'odit';
    $request->environmentInput->config->nodeConfig->tags = [
        'accusantium',
        'ab',
    ];
    $request->environmentInput->config->nodeCount = 982575;
    $request->environmentInput->config->privateEnvironmentConfig = new PrivateEnvironmentConfigInput();
    $request->environmentInput->config->privateEnvironmentConfig->cloudComposerConnectionSubnetwork = 'quidem';
    $request->environmentInput->config->privateEnvironmentConfig->cloudComposerNetworkIpv4CidrBlock = 'ipsam';
    $request->environmentInput->config->privateEnvironmentConfig->cloudSqlIpv4CidrBlock = 'voluptate';
    $request->environmentInput->config->privateEnvironmentConfig->enablePrivateEnvironment = false;
    $request->environmentInput->config->privateEnvironmentConfig->enablePrivatelyUsedPublicIps = false;
    $request->environmentInput->config->privateEnvironmentConfig->networkingConfig = new NetworkingConfig();
    $request->environmentInput->config->privateEnvironmentConfig->networkingConfig->connectionType = NetworkingConfigConnectionTypeEnum::VPC_PEERING;
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig = new PrivateClusterConfigInput();
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig->enablePrivateEndpoint = false;
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig->masterIpv4CidrBlock = 'nam';
    $request->environmentInput->config->privateEnvironmentConfig->webServerIpv4CidrBlock = 'eaque';
    $request->environmentInput->config->recoveryConfig = new RecoveryConfig();
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig = new ScheduledSnapshotsConfig();
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->enabled = false;
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->snapshotCreationSchedule = 'pariatur';
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->snapshotLocation = 'nemo';
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->timeZone = 'voluptatibus';
    $request->environmentInput->config->softwareConfig = new SoftwareConfig();
    $request->environmentInput->config->softwareConfig->airflowConfigOverrides = [
        'fugiat' => 'amet',
    ];
    $request->environmentInput->config->softwareConfig->envVariables = [
        'cumque' => 'corporis',
    ];
    $request->environmentInput->config->softwareConfig->imageVersion = 'hic';
    $request->environmentInput->config->softwareConfig->pypiPackages = [
        'nobis' => 'dolores',
        'quis' => 'totam',
        'dignissimos' => 'eaque',
    ];
    $request->environmentInput->config->softwareConfig->pythonVersion = 'quis';
    $request->environmentInput->config->softwareConfig->schedulerCount = 199996;
    $request->environmentInput->config->webServerConfig = new WebServerConfig();
    $request->environmentInput->config->webServerConfig->machineType = 'eos';
    $request->environmentInput->config->webServerNetworkAccessControl = new WebServerNetworkAccessControl();
    $request->environmentInput->config->webServerNetworkAccessControl->allowedIpRanges = [
        new AllowedIpRange(),
    ];
    $request->environmentInput->config->workloadsConfig = new WorkloadsConfig();
    $request->environmentInput->config->workloadsConfig->scheduler = new SchedulerResource();
    $request->environmentInput->config->workloadsConfig->scheduler->count = 170986;
    $request->environmentInput->config->workloadsConfig->scheduler->cpu = 7936.98;
    $request->environmentInput->config->workloadsConfig->scheduler->memoryGb = 4634.51;
    $request->environmentInput->config->workloadsConfig->scheduler->storageGb = 2239.24;
    $request->environmentInput->config->workloadsConfig->webServer = new WebServerResource();
    $request->environmentInput->config->workloadsConfig->webServer->cpu = 8745.73;
    $request->environmentInput->config->workloadsConfig->webServer->memoryGb = 3453.52;
    $request->environmentInput->config->workloadsConfig->webServer->storageGb = 9441.2;
    $request->environmentInput->config->workloadsConfig->worker = new WorkerResource();
    $request->environmentInput->config->workloadsConfig->worker->cpu = 9280.82;
    $request->environmentInput->config->workloadsConfig->worker->maxCount = 608253;
    $request->environmentInput->config->workloadsConfig->worker->memoryGb = 7044.15;
    $request->environmentInput->config->workloadsConfig->worker->minCount = 596656;
    $request->environmentInput->config->workloadsConfig->worker->storageGb = 318.38;
    $request->environmentInput->createTime = 'porro';
    $request->environmentInput->labels = [
        'blanditiis' => 'error',
    ];
    $request->environmentInput->name = 'Violet Price';
    $request->environmentInput->state = EnvironmentStateEnum::ERROR;
    $request->environmentInput->updateTime = 'modi';
    $request->environmentInput->uuid = '9a8d9cbf-4863-4332-bf9b-77f3a4100674';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'voluptas';
    $request->key = 'natus';
    $request->name = 'Kay Bailey DDS';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->updateMask = 'voluptate';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new ComposerProjectsLocationsEnvironmentsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsEnvironmentsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## composerProjectsLocationsEnvironmentsSaveSnapshot

Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SaveSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsEnvironmentsSaveSnapshotRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->saveSnapshotRequest = new SaveSnapshotRequest();
    $request->saveSnapshotRequest->snapshotLocation = 'necessitatibus';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->environment = 'ipsum';
    $request->fields = 'voluptate';
    $request->key = 'id';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new ComposerProjectsLocationsEnvironmentsSaveSnapshotSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsEnvironmentsSaveSnapshot($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## composerProjectsLocationsImageVersionsList

List ImageVersions for provided location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsImageVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsImageVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsImageVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'saepe';
    $request->includePastReleases = false;
    $request->key = 'suscipit';
    $request->oauthToken = 'deserunt';
    $request->pageSize = 588317;
    $request->pageToken = 'minima';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new ComposerProjectsLocationsImageVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsImageVersionsList($request, $requestSecurity);

    if ($response->listImageVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## composerProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'quod';
    $request->key = 'officiis';
    $request->name = 'Jan Wilderman';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new ComposerProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## composerProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'enim';
    $request->key = 'dolorem';
    $request->name = 'Miss Jimmie Kozey';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new ComposerProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## composerProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'qui';
    $request->filter = 'cupiditate';
    $request->key = 'maxime';
    $request->name = 'Dominic Carroll';
    $request->oauthToken = 'incidunt';
    $request->pageSize = 132068;
    $request->pageToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new ComposerProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
