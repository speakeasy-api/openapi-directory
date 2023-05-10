# projects

### Available Operations

* [composerProjectsLocationsEnvironmentsCheckUpgrade](#composerprojectslocationsenvironmentscheckupgrade) - Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.
* [composerProjectsLocationsEnvironmentsCreate](#composerprojectslocationsenvironmentscreate) - Create a new environment.
* [composerProjectsLocationsEnvironmentsList](#composerprojectslocationsenvironmentslist) - List environments.
* [composerProjectsLocationsEnvironmentsLoadSnapshot](#composerprojectslocationsenvironmentsloadsnapshot) - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* [composerProjectsLocationsEnvironmentsPatch](#composerprojectslocationsenvironmentspatch) - Update an environment.
* [composerProjectsLocationsEnvironmentsRestartWebServer](#composerprojectslocationsenvironmentsrestartwebserver) - Restart Airflow web server.
* [composerProjectsLocationsEnvironmentsSaveSnapshot](#composerprojectslocationsenvironmentssavesnapshot) - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* [composerProjectsLocationsImageVersionsList](#composerprojectslocationsimageversionslist) - List ImageVersions for provided location.
* [composerProjectsLocationsOperationsDelete](#composerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [composerProjectsLocationsOperationsGet](#composerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [composerProjectsLocationsOperationsList](#composerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## composerProjectsLocationsEnvironmentsCheckUpgrade

Check if an upgrade operation on the environment will succeed. In case of problems detailed info can be found in the returned Operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckUpgradeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->checkUpgradeRequest = new CheckUpgradeRequest();
    $request->checkUpgradeRequest->imageVersion = 'magnam';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->environment = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsEnvironmentsCheckUpgrade($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
use \OpenAPI\OpenAPI\Models\Shared\CloudDataLineageIntegration;
use \OpenAPI\OpenAPI\Models\Shared\WebServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\WebServerNetworkAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AllowedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SchedulerResource;
use \OpenAPI\OpenAPI\Models\Shared\TriggererResource;
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
    $request->environmentInput->config->databaseConfig = new DatabaseConfig();
    $request->environmentInput->config->databaseConfig->machineType = 'nisi';
    $request->environmentInput->config->encryptionConfig = new EncryptionConfig();
    $request->environmentInput->config->encryptionConfig->kmsKeyName = 'recusandae';
    $request->environmentInput->config->environmentSize = EnvironmentConfigEnvironmentSizeEnum::ENVIRONMENT_SIZE_LARGE;
    $request->environmentInput->config->maintenanceWindow = new MaintenanceWindow();
    $request->environmentInput->config->maintenanceWindow->endTime = 'ab';
    $request->environmentInput->config->maintenanceWindow->recurrence = 'quis';
    $request->environmentInput->config->maintenanceWindow->startTime = 'veritatis';
    $request->environmentInput->config->masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->environmentInput->config->masterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
        new CidrBlock(),
        new CidrBlock(),
    ];
    $request->environmentInput->config->masterAuthorizedNetworksConfig->enabled = false;
    $request->environmentInput->config->nodeConfig = new NodeConfig();
    $request->environmentInput->config->nodeConfig->diskSizeGb = 20218;
    $request->environmentInput->config->nodeConfig->enableIpMasqAgent = false;
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy = new IPAllocationPolicy();
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->clusterIpv4CidrBlock = 'ipsam';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->clusterSecondaryRangeName = 'repellendus';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->servicesIpv4CidrBlock = 'sapiente';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->servicesSecondaryRangeName = 'quo';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->useIpAliases = false;
    $request->environmentInput->config->nodeConfig->location = 'odit';
    $request->environmentInput->config->nodeConfig->machineType = 'at';
    $request->environmentInput->config->nodeConfig->maxPodsPerNode = 870088;
    $request->environmentInput->config->nodeConfig->network = 'maiores';
    $request->environmentInput->config->nodeConfig->oauthScopes = [
        'quod',
        'quod',
    ];
    $request->environmentInput->config->nodeConfig->serviceAccount = 'esse';
    $request->environmentInput->config->nodeConfig->subnetwork = 'totam';
    $request->environmentInput->config->nodeConfig->tags = [
        'dolorum',
        'dicta',
        'nam',
        'officia',
    ];
    $request->environmentInput->config->nodeCount = 582020;
    $request->environmentInput->config->privateEnvironmentConfig = new PrivateEnvironmentConfigInput();
    $request->environmentInput->config->privateEnvironmentConfig->cloudComposerConnectionSubnetwork = 'fugit';
    $request->environmentInput->config->privateEnvironmentConfig->cloudComposerNetworkIpv4CidrBlock = 'deleniti';
    $request->environmentInput->config->privateEnvironmentConfig->cloudSqlIpv4CidrBlock = 'hic';
    $request->environmentInput->config->privateEnvironmentConfig->enablePrivateEnvironment = false;
    $request->environmentInput->config->privateEnvironmentConfig->enablePrivatelyUsedPublicIps = false;
    $request->environmentInput->config->privateEnvironmentConfig->networkingConfig = new NetworkingConfig();
    $request->environmentInput->config->privateEnvironmentConfig->networkingConfig->connectionType = NetworkingConfigConnectionTypeEnum::PRIVATE_SERVICE_CONNECT;
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig = new PrivateClusterConfigInput();
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig->enablePrivateEndpoint = false;
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig->masterIpv4CidrBlock = 'totam';
    $request->environmentInput->config->privateEnvironmentConfig->webServerIpv4CidrBlock = 'beatae';
    $request->environmentInput->config->recoveryConfig = new RecoveryConfig();
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig = new ScheduledSnapshotsConfig();
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->enabled = false;
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->snapshotCreationSchedule = 'commodi';
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->snapshotLocation = 'molestiae';
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->timeZone = 'modi';
    $request->environmentInput->config->softwareConfig = new SoftwareConfig();
    $request->environmentInput->config->softwareConfig->airflowConfigOverrides = [
        'impedit' => 'cum',
    ];
    $request->environmentInput->config->softwareConfig->cloudDataLineageIntegration = new CloudDataLineageIntegration();
    $request->environmentInput->config->softwareConfig->cloudDataLineageIntegration->enabled = false;
    $request->environmentInput->config->softwareConfig->envVariables = [
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
    ];
    $request->environmentInput->config->softwareConfig->imageVersion = 'ad';
    $request->environmentInput->config->softwareConfig->pypiPackages = [
        'sed' => 'iste',
        'dolor' => 'natus',
        'laboriosam' => 'hic',
    ];
    $request->environmentInput->config->softwareConfig->pythonVersion = 'saepe';
    $request->environmentInput->config->softwareConfig->schedulerCount = 681820;
    $request->environmentInput->config->webServerConfig = new WebServerConfig();
    $request->environmentInput->config->webServerConfig->machineType = 'in';
    $request->environmentInput->config->webServerNetworkAccessControl = new WebServerNetworkAccessControl();
    $request->environmentInput->config->webServerNetworkAccessControl->allowedIpRanges = [
        new AllowedIpRange(),
        new AllowedIpRange(),
    ];
    $request->environmentInput->config->workloadsConfig = new WorkloadsConfig();
    $request->environmentInput->config->workloadsConfig->scheduler = new SchedulerResource();
    $request->environmentInput->config->workloadsConfig->scheduler->count = 613064;
    $request->environmentInput->config->workloadsConfig->scheduler->cpu = 4370.32;
    $request->environmentInput->config->workloadsConfig->scheduler->memoryGb = 9023.49;
    $request->environmentInput->config->workloadsConfig->scheduler->storageGb = 6976.31;
    $request->environmentInput->config->workloadsConfig->triggerer = new TriggererResource();
    $request->environmentInput->config->workloadsConfig->triggerer->count = 99280;
    $request->environmentInput->config->workloadsConfig->triggerer->cpu = 602.25;
    $request->environmentInput->config->workloadsConfig->triggerer->memoryGb = 9698.1;
    $request->environmentInput->config->workloadsConfig->webServer = new WebServerResource();
    $request->environmentInput->config->workloadsConfig->webServer->cpu = 6667.67;
    $request->environmentInput->config->workloadsConfig->webServer->memoryGb = 6531.4;
    $request->environmentInput->config->workloadsConfig->webServer->storageGb = 6706.38;
    $request->environmentInput->config->workloadsConfig->worker = new WorkerResource();
    $request->environmentInput->config->workloadsConfig->worker->cpu = 1709.09;
    $request->environmentInput->config->workloadsConfig->worker->maxCount = 210382;
    $request->environmentInput->config->workloadsConfig->worker->memoryGb = 3581.52;
    $request->environmentInput->config->workloadsConfig->worker->minCount = 128926;
    $request->environmentInput->config->workloadsConfig->worker->storageGb = 7506.86;
    $request->environmentInput->labels = [
        'omnis' => 'nemo',
        'minima' => 'excepturi',
    ];
    $request->environmentInput->name = 'Charlene Nicolas';
    $request->environmentInput->state = EnvironmentStateEnum::STATE_UNSPECIFIED;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'consequuntur';
    $request->key = 'repellat';
    $request->oauthToken = 'mollitia';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';

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
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->pageSize = 656330;
    $request->pageToken = 'enim';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

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
    $request->loadSnapshotRequest->snapshotPath = 'id';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->environment = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

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
use \OpenAPI\OpenAPI\Models\Shared\CloudDataLineageIntegration;
use \OpenAPI\OpenAPI\Models\Shared\WebServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\WebServerNetworkAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\AllowedIpRange;
use \OpenAPI\OpenAPI\Models\Shared\WorkloadsConfig;
use \OpenAPI\OpenAPI\Models\Shared\SchedulerResource;
use \OpenAPI\OpenAPI\Models\Shared\TriggererResource;
use \OpenAPI\OpenAPI\Models\Shared\WebServerResource;
use \OpenAPI\OpenAPI\Models\Shared\WorkerResource;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsEnvironmentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->environmentInput = new EnvironmentInput();
    $request->environmentInput->config = new EnvironmentConfigInput();
    $request->environmentInput->config->databaseConfig = new DatabaseConfig();
    $request->environmentInput->config->databaseConfig->machineType = 'praesentium';
    $request->environmentInput->config->encryptionConfig = new EncryptionConfig();
    $request->environmentInput->config->encryptionConfig->kmsKeyName = 'voluptatibus';
    $request->environmentInput->config->environmentSize = EnvironmentConfigEnvironmentSizeEnum::ENVIRONMENT_SIZE_UNSPECIFIED;
    $request->environmentInput->config->maintenanceWindow = new MaintenanceWindow();
    $request->environmentInput->config->maintenanceWindow->endTime = 'omnis';
    $request->environmentInput->config->maintenanceWindow->recurrence = 'voluptate';
    $request->environmentInput->config->maintenanceWindow->startTime = 'cum';
    $request->environmentInput->config->masterAuthorizedNetworksConfig = new MasterAuthorizedNetworksConfig();
    $request->environmentInput->config->masterAuthorizedNetworksConfig->cidrBlocks = [
        new CidrBlock(),
    ];
    $request->environmentInput->config->masterAuthorizedNetworksConfig->enabled = false;
    $request->environmentInput->config->nodeConfig = new NodeConfig();
    $request->environmentInput->config->nodeConfig->diskSizeGb = 39187;
    $request->environmentInput->config->nodeConfig->enableIpMasqAgent = false;
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy = new IPAllocationPolicy();
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->clusterIpv4CidrBlock = 'reprehenderit';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->clusterSecondaryRangeName = 'ut';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->servicesIpv4CidrBlock = 'maiores';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->servicesSecondaryRangeName = 'dicta';
    $request->environmentInput->config->nodeConfig->ipAllocationPolicy->useIpAliases = false;
    $request->environmentInput->config->nodeConfig->location = 'corporis';
    $request->environmentInput->config->nodeConfig->machineType = 'dolore';
    $request->environmentInput->config->nodeConfig->maxPodsPerNode = 480894;
    $request->environmentInput->config->nodeConfig->network = 'dicta';
    $request->environmentInput->config->nodeConfig->oauthScopes = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->environmentInput->config->nodeConfig->serviceAccount = 'repudiandae';
    $request->environmentInput->config->nodeConfig->subnetwork = 'quae';
    $request->environmentInput->config->nodeConfig->tags = [
        'quidem',
    ];
    $request->environmentInput->config->nodeCount = 565189;
    $request->environmentInput->config->privateEnvironmentConfig = new PrivateEnvironmentConfigInput();
    $request->environmentInput->config->privateEnvironmentConfig->cloudComposerConnectionSubnetwork = 'excepturi';
    $request->environmentInput->config->privateEnvironmentConfig->cloudComposerNetworkIpv4CidrBlock = 'pariatur';
    $request->environmentInput->config->privateEnvironmentConfig->cloudSqlIpv4CidrBlock = 'modi';
    $request->environmentInput->config->privateEnvironmentConfig->enablePrivateEnvironment = false;
    $request->environmentInput->config->privateEnvironmentConfig->enablePrivatelyUsedPublicIps = false;
    $request->environmentInput->config->privateEnvironmentConfig->networkingConfig = new NetworkingConfig();
    $request->environmentInput->config->privateEnvironmentConfig->networkingConfig->connectionType = NetworkingConfigConnectionTypeEnum::VPC_PEERING;
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig = new PrivateClusterConfigInput();
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig->enablePrivateEndpoint = false;
    $request->environmentInput->config->privateEnvironmentConfig->privateClusterConfig->masterIpv4CidrBlock = 'rem';
    $request->environmentInput->config->privateEnvironmentConfig->webServerIpv4CidrBlock = 'voluptates';
    $request->environmentInput->config->recoveryConfig = new RecoveryConfig();
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig = new ScheduledSnapshotsConfig();
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->enabled = false;
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->snapshotCreationSchedule = 'quasi';
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->snapshotLocation = 'repudiandae';
    $request->environmentInput->config->recoveryConfig->scheduledSnapshotsConfig->timeZone = 'sint';
    $request->environmentInput->config->softwareConfig = new SoftwareConfig();
    $request->environmentInput->config->softwareConfig->airflowConfigOverrides = [
        'itaque' => 'incidunt',
    ];
    $request->environmentInput->config->softwareConfig->cloudDataLineageIntegration = new CloudDataLineageIntegration();
    $request->environmentInput->config->softwareConfig->cloudDataLineageIntegration->enabled = false;
    $request->environmentInput->config->softwareConfig->envVariables = [
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
    ];
    $request->environmentInput->config->softwareConfig->imageVersion = 'deserunt';
    $request->environmentInput->config->softwareConfig->pypiPackages = [
        'quibusdam' => 'labore',
        'modi' => 'qui',
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
    $request->environmentInput->config->workloadsConfig->triggerer = new TriggererResource();
    $request->environmentInput->config->workloadsConfig->triggerer->count = 569618;
    $request->environmentInput->config->workloadsConfig->triggerer->cpu = 2700.08;
    $request->environmentInput->config->workloadsConfig->triggerer->memoryGb = 7037.37;
    $request->environmentInput->config->workloadsConfig->webServer = new WebServerResource();
    $request->environmentInput->config->workloadsConfig->webServer->cpu = 7351.94;
    $request->environmentInput->config->workloadsConfig->webServer->memoryGb = 2884.76;
    $request->environmentInput->config->workloadsConfig->webServer->storageGb = 9621.89;
    $request->environmentInput->config->workloadsConfig->worker = new WorkerResource();
    $request->environmentInput->config->workloadsConfig->worker->cpu = 4332.88;
    $request->environmentInput->config->workloadsConfig->worker->maxCount = 248753;
    $request->environmentInput->config->workloadsConfig->worker->memoryGb = 7561.07;
    $request->environmentInput->config->workloadsConfig->worker->minCount = 576157;
    $request->environmentInput->config->workloadsConfig->worker->storageGb = 3960.98;
    $request->environmentInput->labels = [
        'necessitatibus' => 'sint',
        'officia' => 'dolor',
        'debitis' => 'a',
    ];
    $request->environmentInput->name = 'Arnold Kirlin';
    $request->environmentInput->state = EnvironmentStateEnum::DELETING;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'facere';
    $request->key = 'ea';
    $request->name = 'Kayla Thompson';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->updateMask = 'delectus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'provident';

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

## composerProjectsLocationsEnvironmentsRestartWebServer

Restart Airflow web server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsRestartWebServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComposerProjectsLocationsEnvironmentsRestartWebServerRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
        'deserunt' => 'nisi',
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'molestiae';
    $request->key = 'perferendis';
    $request->name = 'Megan Rau';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->composerProjectsLocationsEnvironmentsRestartWebServer($request, $requestSecurity);

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->saveSnapshotRequest = new SaveSnapshotRequest();
    $request->saveSnapshotRequest->snapshotLocation = 'vero';
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->environment = 'et';
    $request->fields = 'excepturi';
    $request->key = 'ullam';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusantium';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->includePastReleases = false;
    $request->key = 'dolor';
    $request->oauthToken = 'necessitatibus';
    $request->pageSize = 141264;
    $request->pageToken = 'nemo';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'in';
    $request->key = 'architecto';
    $request->name = 'Elvira Herman';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'natus';
    $request->key = 'magni';
    $request->name = 'Angelica Stanton';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ea';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'ipsam';
    $request->filter = 'voluptate';
    $request->key = 'autem';
    $request->name = 'Gary Streich';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 855804;
    $request->pageToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'corporis';

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
