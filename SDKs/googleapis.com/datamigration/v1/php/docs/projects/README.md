# projects

### Available Operations

* [datamigrationProjectsLocationsConnectionProfilesCreate](#datamigrationprojectslocationsconnectionprofilescreate) - Creates a new connection profile in a given project and location.
* [datamigrationProjectsLocationsConnectionProfilesList](#datamigrationprojectslocationsconnectionprofileslist) - Retrieves a list of all connection profiles in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesApply](#datamigrationprojectslocationsconversionworkspacesapply) - Applies draft tree onto a specific destination database.
* [datamigrationProjectsLocationsConversionWorkspacesCommit](#datamigrationprojectslocationsconversionworkspacescommit) - Marks all the data in the conversion workspace as committed.
* [datamigrationProjectsLocationsConversionWorkspacesConvert](#datamigrationprojectslocationsconversionworkspacesconvert) - Creates a draft tree schema for the destination database.
* [datamigrationProjectsLocationsConversionWorkspacesCreate](#datamigrationprojectslocationsconversionworkspacescreate) - Creates a new conversion workspace in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions](#datamigrationprojectslocationsconversionworkspacesdescribeconversionworkspacerevisions) - Retrieves a list of committed revisions of a specific conversion workspace.
* [datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities](#datamigrationprojectslocationsconversionworkspacesdescribedatabaseentities) - Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
* [datamigrationProjectsLocationsConversionWorkspacesList](#datamigrationprojectslocationsconversionworkspaceslist) - Lists conversion workspaces in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport](#datamigrationprojectslocationsconversionworkspacesmappingrulesimport) - Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
* [datamigrationProjectsLocationsConversionWorkspacesRollback](#datamigrationprojectslocationsconversionworkspacesrollback) - Rolls back a conversion workspace to the last committed snapshot.
* [datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs](#datamigrationprojectslocationsconversionworkspacessearchbackgroundjobs) - Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
* [datamigrationProjectsLocationsConversionWorkspacesSeed](#datamigrationprojectslocationsconversionworkspacesseed) - Imports a snapshot of the source database into the conversion workspace.
* [datamigrationProjectsLocationsFetchStaticIps](#datamigrationprojectslocationsfetchstaticips) - Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
* [datamigrationProjectsLocationsList](#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [datamigrationProjectsLocationsMigrationJobsCreate](#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsGenerateSshScript](#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [datamigrationProjectsLocationsMigrationJobsList](#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsPatch](#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [datamigrationProjectsLocationsMigrationJobsPromote](#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [datamigrationProjectsLocationsMigrationJobsRestart](#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [datamigrationProjectsLocationsMigrationJobsResume](#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [datamigrationProjectsLocationsMigrationJobsStart](#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [datamigrationProjectsLocationsMigrationJobsStop](#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [datamigrationProjectsLocationsMigrationJobsVerify](#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [datamigrationProjectsLocationsOperationsCancel](#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datamigrationProjectsLocationsOperationsList](#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datamigrationProjectsLocationsPrivateConnectionsCreate](#datamigrationprojectslocationsprivateconnectionscreate) - Creates a new private connection in a given project and location.
* [datamigrationProjectsLocationsPrivateConnectionsDelete](#datamigrationprojectslocationsprivateconnectionsdelete) - Deletes a single Database Migration Service private connection.
* [datamigrationProjectsLocationsPrivateConnectionsGet](#datamigrationprojectslocationsprivateconnectionsget) - Gets details of a single private connection.
* [datamigrationProjectsLocationsPrivateConnectionsGetIamPolicy](#datamigrationprojectslocationsprivateconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datamigrationProjectsLocationsPrivateConnectionsList](#datamigrationprojectslocationsprivateconnectionslist) - Retrieves a list of private connections in a given project and location.
* [datamigrationProjectsLocationsPrivateConnectionsSetIamPolicy](#datamigrationprojectslocationsprivateconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datamigrationProjectsLocationsPrivateConnectionsTestIamPermissions](#datamigrationprojectslocationsprivateconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## datamigrationProjectsLocationsConnectionProfilesCreate

Creates a new connection profile in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConnectionProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\AlloyDbConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\AlloyDbSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\UserPasswordInput;
use \OpenAPI\OpenAPI\Models\Shared\PrimaryInstanceSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\MachineConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsActivationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsAvailabilityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsDataDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsDatabaseVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlIpConfig;
use \OpenAPI\OpenAPI\Models\Shared\SqlAclEntry;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\MySqlConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\SslConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\OracleConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\ForwardSshTunnelConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\PrivateConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\PostgreSqlConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\PrivateServiceConnectConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProfileProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProfileStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConnectionProfilesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->connectionProfileInput = new ConnectionProfileInput();
    $request->connectionProfileInput->alloydb = new AlloyDbConnectionProfileInput();
    $request->connectionProfileInput->alloydb->clusterId = 'assumenda';
    $request->connectionProfileInput->alloydb->settings = new AlloyDbSettingsInput();
    $request->connectionProfileInput->alloydb->settings->encryptionConfig = new EncryptionConfig();
    $request->connectionProfileInput->alloydb->settings->encryptionConfig->kmsKeyName = 'ipsam';
    $request->connectionProfileInput->alloydb->settings->initialUser = new UserPasswordInput();
    $request->connectionProfileInput->alloydb->settings->initialUser->password = 'alias';
    $request->connectionProfileInput->alloydb->settings->initialUser->user = 'fugit';
    $request->connectionProfileInput->alloydb->settings->labels = [
        'excepturi' => 'tempora',
        'facilis' => 'tempore',
        'labore' => 'delectus',
    ];
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings = new PrimaryInstanceSettingsInput();
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings->databaseFlags = [
        'non' => 'eligendi',
        'sint' => 'aliquid',
    ];
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings->id = '9e9a3efa-77df-4b14-8d66-ae395efb9ba8';
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings->labels = [
        'sapiente' => 'amet',
        'deserunt' => 'nisi',
        'vel' => 'natus',
    ];
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings->machineConfig = new MachineConfig();
    $request->connectionProfileInput->alloydb->settings->primaryInstanceSettings->machineConfig->cpuCount = 606393;
    $request->connectionProfileInput->alloydb->settings->vpcNetwork = 'molestiae';
    $request->connectionProfileInput->cloudsql = new CloudSqlConnectionProfileInput();
    $request->connectionProfileInput->cloudsql->settings = new CloudSqlSettingsInput();
    $request->connectionProfileInput->cloudsql->settings->activationPolicy = CloudSqlSettingsActivationPolicyEnum::SQL_ACTIVATION_POLICY_UNSPECIFIED;
    $request->connectionProfileInput->cloudsql->settings->autoStorageIncrease = false;
    $request->connectionProfileInput->cloudsql->settings->availabilityType = CloudSqlSettingsAvailabilityTypeEnum::ZONAL;
    $request->connectionProfileInput->cloudsql->settings->cmekKeyName = 'magnam';
    $request->connectionProfileInput->cloudsql->settings->collation = 'distinctio';
    $request->connectionProfileInput->cloudsql->settings->dataDiskSizeGb = 'id';
    $request->connectionProfileInput->cloudsql->settings->dataDiskType = CloudSqlSettingsDataDiskTypeEnum::SQL_DATA_DISK_TYPE_UNSPECIFIED;
    $request->connectionProfileInput->cloudsql->settings->databaseFlags = [
        'suscipit' => 'natus',
        'nobis' => 'eum',
    ];
    $request->connectionProfileInput->cloudsql->settings->databaseVersion = CloudSqlSettingsDatabaseVersionEnum::POSTGRES13;
    $request->connectionProfileInput->cloudsql->settings->ipConfig = new SqlIpConfig();
    $request->connectionProfileInput->cloudsql->settings->ipConfig->allocatedIpRange = 'aspernatur';
    $request->connectionProfileInput->cloudsql->settings->ipConfig->authorizedNetworks = [
        new SqlAclEntry(),
    ];
    $request->connectionProfileInput->cloudsql->settings->ipConfig->enableIpv4 = false;
    $request->connectionProfileInput->cloudsql->settings->ipConfig->privateNetwork = 'magnam';
    $request->connectionProfileInput->cloudsql->settings->ipConfig->requireSsl = false;
    $request->connectionProfileInput->cloudsql->settings->rootPassword = 'et';
    $request->connectionProfileInput->cloudsql->settings->secondaryZone = 'excepturi';
    $request->connectionProfileInput->cloudsql->settings->sourceId = 'ullam';
    $request->connectionProfileInput->cloudsql->settings->storageAutoResizeLimit = 'provident';
    $request->connectionProfileInput->cloudsql->settings->tier = 'quos';
    $request->connectionProfileInput->cloudsql->settings->userLabels = [
        'accusantium' => 'mollitia',
        'reiciendis' => 'mollitia',
        'ad' => 'eum',
    ];
    $request->connectionProfileInput->cloudsql->settings->zone = 'dolor';
    $request->connectionProfileInput->displayName = 'necessitatibus';
    $request->connectionProfileInput->error = new Status();
    $request->connectionProfileInput->error->code = 141264;
    $request->connectionProfileInput->error->details = [
        [
            'iure' => 'doloribus',
        ],
        [
            'eius' => 'maxime',
            'deleniti' => 'facilis',
            'in' => 'architecto',
            'architecto' => 'repudiandae',
        ],
    ];
    $request->connectionProfileInput->error->message = 'ullam';
    $request->connectionProfileInput->labels = [
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->connectionProfileInput->mysql = new MySqlConnectionProfileInput();
    $request->connectionProfileInput->mysql->cloudSqlId = 'accusantium';
    $request->connectionProfileInput->mysql->host = 'consequuntur';
    $request->connectionProfileInput->mysql->password = 'praesentium';
    $request->connectionProfileInput->mysql->port = 615560;
    $request->connectionProfileInput->mysql->ssl = new SslConfigInput();
    $request->connectionProfileInput->mysql->ssl->caCertificate = 'magni';
    $request->connectionProfileInput->mysql->ssl->clientCertificate = 'sunt';
    $request->connectionProfileInput->mysql->ssl->clientKey = 'quo';
    $request->connectionProfileInput->mysql->username = 'Rosendo.Streich56';
    $request->connectionProfileInput->name = 'Dr. Rosemary Bartoletti';
    $request->connectionProfileInput->oracle = new OracleConnectionProfileInput();
    $request->connectionProfileInput->oracle->databaseService = 'ipsam';
    $request->connectionProfileInput->oracle->forwardSshConnectivity = new ForwardSshTunnelConnectivity();
    $request->connectionProfileInput->oracle->forwardSshConnectivity->hostname = 'jealous-hearing.net';
    $request->connectionProfileInput->oracle->forwardSshConnectivity->password = 'eaque';
    $request->connectionProfileInput->oracle->forwardSshConnectivity->port = 866383;
    $request->connectionProfileInput->oracle->forwardSshConnectivity->privateKey = 'nemo';
    $request->connectionProfileInput->oracle->forwardSshConnectivity->username = 'Wendy.Armstrong1';
    $request->connectionProfileInput->oracle->host = 'cumque';
    $request->connectionProfileInput->oracle->password = 'corporis';
    $request->connectionProfileInput->oracle->port = 944124;
    $request->connectionProfileInput->oracle->privateConnectivity = new PrivateConnectivity();
    $request->connectionProfileInput->oracle->privateConnectivity->privateConnection = 'libero';
    $request->connectionProfileInput->oracle->staticServiceIpConnectivity = [
        'dolores' => 'quis',
        'totam' => 'dignissimos',
        'eaque' => 'quis',
    ];
    $request->connectionProfileInput->oracle->username = 'Cody17';
    $request->connectionProfileInput->postgresql = new PostgreSqlConnectionProfileInput();
    $request->connectionProfileInput->postgresql->cloudSqlId = 'minus';
    $request->connectionProfileInput->postgresql->host = 'quam';
    $request->connectionProfileInput->postgresql->password = 'dolor';
    $request->connectionProfileInput->postgresql->port = 874573;
    $request->connectionProfileInput->postgresql->privateServiceConnectConnectivity = new PrivateServiceConnectConnectivity();
    $request->connectionProfileInput->postgresql->privateServiceConnectConnectivity->serviceAttachment = 'nostrum';
    $request->connectionProfileInput->postgresql->ssl = new SslConfigInput();
    $request->connectionProfileInput->postgresql->ssl->caCertificate = 'hic';
    $request->connectionProfileInput->postgresql->ssl->clientCertificate = 'recusandae';
    $request->connectionProfileInput->postgresql->ssl->clientKey = 'omnis';
    $request->connectionProfileInput->postgresql->staticIpConnectivity = [
        'perspiciatis' => 'voluptatem',
        'porro' => 'consequuntur',
        'blanditiis' => 'error',
    ];
    $request->connectionProfileInput->postgresql->username = 'Amber.Mayert99';
    $request->connectionProfileInput->provider = ConnectionProfileProviderEnum::ALLOYDB;
    $request->connectionProfileInput->state = ConnectionProfileStateEnum::CREATING;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->connectionProfileId = 'pariatur';
    $request->fields = 'provident';
    $request->key = 'nobis';
    $request->oauthToken = 'libero';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->requestId = 'quos';
    $request->skipValidation = false;
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'dolorem';
    $request->validateOnly = false;

    $requestSecurity = new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConnectionProfilesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConnectionProfilesList

Retrieves a list of all connection profiles in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConnectionProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConnectionProfilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConnectionProfilesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'hic';
    $request->filter = 'excepturi';
    $request->key = 'cum';
    $request->oauthToken = 'voluptate';
    $request->orderBy = 'dignissimos';
    $request->pageSize = 970237;
    $request->pageToken = 'amet';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new DatamigrationProjectsLocationsConnectionProfilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConnectionProfilesList($request, $requestSecurity);

    if ($response->listConnectionProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesApply

Applies draft tree onto a specific destination database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesApplyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplyConversionWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesApplySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesApplyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->applyConversionWorkspaceRequest = new ApplyConversionWorkspaceRequest();
    $request->applyConversionWorkspaceRequest->connectionProfile = 'iure';
    $request->applyConversionWorkspaceRequest->filter = 'odio';
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'voluptatibus';
    $request->key = 'voluptas';
    $request->name = 'Dr. Craig Littel DDS';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesApplySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesApply($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesCommit

Marks all the data in the conversion workspace as committed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommitConversionWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesCommitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesCommitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->commitConversionWorkspaceRequest = new CommitConversionWorkspaceRequest();
    $request->commitConversionWorkspaceRequest->commitName = 'omnis';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->fields = 'nihil';
    $request->key = 'ipsum';
    $request->name = 'Alberta Ullrich';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesCommitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesCommit($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesConvert

Creates a draft tree schema for the destination database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesConvertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConvertConversionWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesConvertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesConvertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->convertConversionWorkspaceRequest = new ConvertConversionWorkspaceRequest();
    $request->convertConversionWorkspaceRequest->autoCommit = false;
    $request->convertConversionWorkspaceRequest->filter = 'saepe';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'minima';
    $request->key = 'repellendus';
    $request->name = 'Donnie Abbott';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesConvertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesConvert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesCreate

Creates a new conversion workspace in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversionWorkspaceInput;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseEngineInfo;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseEngineInfoEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->conversionWorkspaceInput = new ConversionWorkspaceInput();
    $request->conversionWorkspaceInput->destination = new DatabaseEngineInfo();
    $request->conversionWorkspaceInput->destination->engine = DatabaseEngineInfoEngineEnum::POSTGRESQL;
    $request->conversionWorkspaceInput->destination->version = 'a';
    $request->conversionWorkspaceInput->displayName = 'esse';
    $request->conversionWorkspaceInput->globalSettings = [
        'iusto' => 'ipsum',
        'quisquam' => 'tenetur',
        'amet' => 'tempore',
    ];
    $request->conversionWorkspaceInput->name = 'Francis Haley';
    $request->conversionWorkspaceInput->source = new DatabaseEngineInfo();
    $request->conversionWorkspaceInput->source->engine = DatabaseEngineInfoEngineEnum::POSTGRESQL;
    $request->conversionWorkspaceInput->source->version = 'nihil';
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->conversionWorkspaceId = 'sed';
    $request->fields = 'vel';
    $request->key = 'libero';
    $request->oauthToken = 'voluptas';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->requestId = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions

Retrieves a list of committed revisions of a specific conversion workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->commitId = 'dicta';
    $request->conversionWorkspace = 'laborum';
    $request->fields = 'totam';
    $request->key = 'incidunt';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions($request, $requestSecurity);

    if ($response->describeConversionWorkspaceRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities

Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->commitId = 'qui';
    $request->conversionWorkspace = 'neque';
    $request->fields = 'fugit';
    $request->filter = 'magni';
    $request->key = 'odio';
    $request->oauthToken = 'sunt';
    $request->pageSize = 355613;
    $request->pageToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->tree = DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum::DB_TREE_TYPE_UNSPECIFIED;
    $request->uncommitted = false;
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities($request, $requestSecurity);

    if ($response->describeDatabaseEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesList

Lists conversion workspaces in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'et';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'veritatis';
    $request->filter = 'nobis';
    $request->key = 'quos';
    $request->oauthToken = 'tempore';
    $request->pageSize = 584476;
    $request->pageToken = 'aperiam';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesList($request, $requestSecurity);

    if ($response->listConversionWorkspacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport

Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportMappingRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RulesFile;
use \OpenAPI\OpenAPI\Models\Shared\ImportMappingRulesRequestRulesFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->importMappingRulesRequest = new ImportMappingRulesRequest();
    $request->importMappingRulesRequest->autoCommit = false;
    $request->importMappingRulesRequest->rulesFiles = [
        new RulesFile(),
        new RulesFile(),
        new RulesFile(),
    ];
    $request->importMappingRulesRequest->rulesFormat = ImportMappingRulesRequestRulesFormatEnum::IMPORT_RULES_FILE_FORMAT_UNSPECIFIED;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quas';
    $request->fields = 'itaque';
    $request->key = 'consequatur';
    $request->oauthToken = 'est';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesRollback

Rolls back a conversion workspace to the last committed snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesRollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesRollbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesRollbackRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'qui' => 'quae',
        'laudantium' => 'odio',
        'occaecati' => 'voluptatibus',
    ];
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'quis';
    $request->key = 'ipsum';
    $request->name = 'Karl Feeney';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesRollbackSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesRollback($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs

Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->completedUntilTime = 'ducimus';
    $request->conversionWorkspace = 'dolore';
    $request->fields = 'quibusdam';
    $request->key = 'illum';
    $request->maxSize = 194342;
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->returnMostRecentPerJobType = false;
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs($request, $requestSecurity);

    if ($response->searchBackgroundJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsConversionWorkspacesSeed

Imports a snapshot of the source database into the conversion workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesSeedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SeedConversionWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsConversionWorkspacesSeedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsConversionWorkspacesSeedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->seedConversionWorkspaceRequest = new SeedConversionWorkspaceRequest();
    $request->seedConversionWorkspaceRequest->autoCommit = false;
    $request->seedConversionWorkspaceRequest->destinationConnectionProfile = 'nulla';
    $request->seedConversionWorkspaceRequest->sourceConnectionProfile = 'fugit';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloribus';
    $request->fields = 'iusto';
    $request->key = 'eligendi';
    $request->name = 'Linda Nikolaus';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new DatamigrationProjectsLocationsConversionWorkspacesSeedSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsConversionWorkspacesSeed($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsFetchStaticIps

Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsFetchStaticIpsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsFetchStaticIpsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsFetchStaticIpsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laudantium';
    $request->fields = 'dicta';
    $request->key = 'dolor';
    $request->name = 'Ryan Jaskolski';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 343605;
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new DatamigrationProjectsLocationsFetchStaticIpsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsFetchStaticIps($request, $requestSecurity);

    if ($response->fetchStaticIpsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'inventore';
    $request->filter = 'magnam';
    $request->key = 'ea';
    $request->name = 'Glenn Walter';
    $request->oauthToken = 'eaque';
    $request->pageSize = 952871;
    $request->pageToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new DatamigrationProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsMigrationJobsCreate

Creates a new migration job in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MigrationJobInput;
use \OpenAPI\OpenAPI\Models\Shared\ConversionWorkspaceInfo;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseType;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseTypeEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseTypeProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DumpFlags;
use \OpenAPI\OpenAPI\Models\Shared\DumpFlag;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\ReverseSshConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\MigrationJobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MigrationJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpcPeeringConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->migrationJobInput = new MigrationJobInput();
    $request->migrationJobInput->conversionWorkspace = new ConversionWorkspaceInfo();
    $request->migrationJobInput->conversionWorkspace->commitId = 'aliquam';
    $request->migrationJobInput->conversionWorkspace->name = 'Eloise Block MD';
    $request->migrationJobInput->destination = 'laborum';
    $request->migrationJobInput->destinationDatabase = new DatabaseType();
    $request->migrationJobInput->destinationDatabase->engine = DatabaseTypeEngineEnum::ORACLE;
    $request->migrationJobInput->destinationDatabase->provider = DatabaseTypeProviderEnum::CLOUDSQL;
    $request->migrationJobInput->displayName = 'eum';
    $request->migrationJobInput->dumpFlags = new DumpFlags();
    $request->migrationJobInput->dumpFlags->dumpFlags = [
        new DumpFlag(),
        new DumpFlag(),
    ];
    $request->migrationJobInput->dumpPath = 'nobis';
    $request->migrationJobInput->error = new Status();
    $request->migrationJobInput->error->code = 557369;
    $request->migrationJobInput->error->details = [
        [
            'voluptas' => 'libero',
            'quasi' => 'tempora',
            'numquam' => 'explicabo',
            'provident' => 'ipsa',
        ],
        [
            'magnam' => 'odio',
            'eius' => 'esse',
        ],
        [
            'rem' => 'fuga',
            'reprehenderit' => 'quidem',
        ],
        [
            'ut' => 'eum',
            'suscipit' => 'assumenda',
            'eos' => 'praesentium',
            'quisquam' => 'veritatis',
        ],
    ];
    $request->migrationJobInput->error->message = 'ipsa';
    $request->migrationJobInput->filter = 'id';
    $request->migrationJobInput->labels = [
        'neque' => 'quo',
        'illum' => 'quo',
        'fuga' => 'eius',
    ];
    $request->migrationJobInput->name = 'Brittany Bernier II';
    $request->migrationJobInput->reverseSshConnectivity = new ReverseSshConnectivity();
    $request->migrationJobInput->reverseSshConnectivity->vm = 'debitis';
    $request->migrationJobInput->reverseSshConnectivity->vmIp = 'ipsam';
    $request->migrationJobInput->reverseSshConnectivity->vmPort = 133465;
    $request->migrationJobInput->reverseSshConnectivity->vpc = 'sequi';
    $request->migrationJobInput->source = 'quo';
    $request->migrationJobInput->sourceDatabase = new DatabaseType();
    $request->migrationJobInput->sourceDatabase->engine = DatabaseTypeEngineEnum::MYSQL;
    $request->migrationJobInput->sourceDatabase->provider = DatabaseTypeProviderEnum::ALLOYDB;
    $request->migrationJobInput->state = MigrationJobStateEnum::STATE_UNSPECIFIED;
    $request->migrationJobInput->staticIpConnectivity = [
        'quod' => 'dignissimos',
        'inventore' => 'nihil',
        'totam' => 'accusamus',
    ];
    $request->migrationJobInput->type = MigrationJobTypeEnum::TYPE_UNSPECIFIED;
    $request->migrationJobInput->vpcPeeringConnectivity = new VpcPeeringConnectivity();
    $request->migrationJobInput->vpcPeeringConnectivity->vpc = 'odio';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'dolores';
    $request->key = 'deserunt';
    $request->migrationJobId = 'molestiae';
    $request->oauthToken = 'accusantium';
    $request->parent = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->requestId = 'quas';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsMigrationJobsGenerateSshScript

Generate a SSH configuration script to configure the reverse SSH connectivity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateSshScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\VmCreationConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmSelectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->generateSshScriptRequest = new GenerateSshScriptRequest();
    $request->generateSshScriptRequest->vm = 'fugit';
    $request->generateSshScriptRequest->vmCreationConfig = new VmCreationConfig();
    $request->generateSshScriptRequest->vmCreationConfig->subnet = 'fuga';
    $request->generateSshScriptRequest->vmCreationConfig->vmMachineType = 'mollitia';
    $request->generateSshScriptRequest->vmCreationConfig->vmZone = 'incidunt';
    $request->generateSshScriptRequest->vmPort = 539224;
    $request->generateSshScriptRequest->vmSelectionConfig = new VmSelectionConfig();
    $request->generateSshScriptRequest->vmSelectionConfig->vmZone = 'explicabo';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'sapiente';
    $request->key = 'consequuntur';
    $request->migrationJob = 'ratione';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsGenerateSshScript($request, $requestSecurity);

    if ($response->sshScript !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsMigrationJobsList

Lists migration jobs in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'veritatis';
    $request->filter = 'esse';
    $request->key = 'quod';
    $request->oauthToken = 'nam';
    $request->orderBy = 'vero';
    $request->pageSize = 399025;
    $request->pageToken = 'quasi';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsList($request, $requestSecurity);

    if ($response->listMigrationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsMigrationJobsPatch

Updates the parameters of a single migration job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MigrationJobInput;
use \OpenAPI\OpenAPI\Models\Shared\ConversionWorkspaceInfo;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseType;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseTypeEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseTypeProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DumpFlags;
use \OpenAPI\OpenAPI\Models\Shared\DumpFlag;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\ReverseSshConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\MigrationJobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MigrationJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpcPeeringConnectivity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->migrationJobInput = new MigrationJobInput();
    $request->migrationJobInput->conversionWorkspace = new ConversionWorkspaceInfo();
    $request->migrationJobInput->conversionWorkspace->commitId = 'occaecati';
    $request->migrationJobInput->conversionWorkspace->name = 'Miss Verna Roob';
    $request->migrationJobInput->destination = 'adipisci';
    $request->migrationJobInput->destinationDatabase = new DatabaseType();
    $request->migrationJobInput->destinationDatabase->engine = DatabaseTypeEngineEnum::ORACLE;
    $request->migrationJobInput->destinationDatabase->provider = DatabaseTypeProviderEnum::DATABASE_PROVIDER_UNSPECIFIED;
    $request->migrationJobInput->displayName = 'consequatur';
    $request->migrationJobInput->dumpFlags = new DumpFlags();
    $request->migrationJobInput->dumpFlags->dumpFlags = [
        new DumpFlag(),
        new DumpFlag(),
        new DumpFlag(),
        new DumpFlag(),
    ];
    $request->migrationJobInput->dumpPath = 'quaerat';
    $request->migrationJobInput->error = new Status();
    $request->migrationJobInput->error->code = 959167;
    $request->migrationJobInput->error->details = [
        [
            'blanditiis' => 'provident',
            'a' => 'nulla',
        ],
    ];
    $request->migrationJobInput->error->message = 'quas';
    $request->migrationJobInput->filter = 'esse';
    $request->migrationJobInput->labels = [
        'a' => 'error',
    ];
    $request->migrationJobInput->name = 'Jody Schuster';
    $request->migrationJobInput->reverseSshConnectivity = new ReverseSshConnectivity();
    $request->migrationJobInput->reverseSshConnectivity->vm = 'asperiores';
    $request->migrationJobInput->reverseSshConnectivity->vmIp = 'facere';
    $request->migrationJobInput->reverseSshConnectivity->vmPort = 85001;
    $request->migrationJobInput->reverseSshConnectivity->vpc = 'consequuntur';
    $request->migrationJobInput->source = 'quasi';
    $request->migrationJobInput->sourceDatabase = new DatabaseType();
    $request->migrationJobInput->sourceDatabase->engine = DatabaseTypeEngineEnum::POSTGRESQL;
    $request->migrationJobInput->sourceDatabase->provider = DatabaseTypeProviderEnum::AURORA;
    $request->migrationJobInput->state = MigrationJobStateEnum::FAILED;
    $request->migrationJobInput->staticIpConnectivity = [
        'quae' => 'earum',
        'vel' => 'in',
        'eius' => 'libero',
        'illum' => 'soluta',
    ];
    $request->migrationJobInput->type = MigrationJobTypeEnum::TYPE_UNSPECIFIED;
    $request->migrationJobInput->vpcPeeringConnectivity = new VpcPeeringConnectivity();
    $request->migrationJobInput->vpcPeeringConnectivity->vpc = 'aliquam';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->fields = 'reprehenderit';
    $request->key = 'ullam';
    $request->name = 'Margaret Lemke';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->requestId = 'itaque';
    $request->updateMask = 'dolorum';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'omnis';
    $request->validateOnly = false;

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsMigrationJobsPromote

Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsPromoteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsPromoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsPromoteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'at' => 'et',
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minima';
    $request->fields = 'veritatis';
    $request->key = 'consectetur';
    $request->name = 'Ms. Cora Spencer IV';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'corrupti';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsPromoteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsPromote($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsMigrationJobsRestart

Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsRestartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsRestartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsRestartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'dolor' => 'occaecati',
    ];
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'voluptas';
    $request->key = 'aut';
    $request->name = 'Jean Wunsch';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsRestartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsRestart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsMigrationJobsResume

Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsResumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsResumeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'consequuntur' => 'repellendus',
        'officia' => 'maxime',
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->fields = 'nemo';
    $request->key = 'quae';
    $request->name = 'Robyn Schmitt I';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsResume($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsMigrationJobsStart

Start an already created migration job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsStartRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'recusandae' => 'totam',
        'fugiat' => 'vel',
        'ducimus' => 'quos',
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'possimus';
    $request->fields = 'facilis';
    $request->key = 'cum';
    $request->name = 'Pearl Hessel';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsStart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsMigrationJobsStop

Stops a running migration job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsStopRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'in' => 'exercitationem',
    ];
    $request->accessToken = 'earum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'doloribus';
    $request->key = 'suscipit';
    $request->name = 'Rickey Ullrich';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsStopSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsStop($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsMigrationJobsVerify

Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsVerifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsVerifyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'dignissimos' => 'a',
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'harum';
    $request->key = 'laboriosam';
    $request->name = 'Dr. Silvia Renner';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsVerifySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsVerify($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'nobis' => 'dolorum',
        'adipisci' => 'minus',
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'dolore';
    $request->key = 'aliquam';
    $request->name = 'Lionel Herman';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'nesciunt';

    $requestSecurity = new DatamigrationProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'hic';
    $request->filter = 'exercitationem';
    $request->key = 'nobis';
    $request->name = 'Luz Cormier';
    $request->oauthToken = 'asperiores';
    $request->pageSize = 707918;
    $request->pageToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new DatamigrationProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsPrivateConnectionsCreate

Creates a new private connection in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrivateConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\VpcPeeringConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsPrivateConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->privateConnectionInput = new PrivateConnectionInput();
    $request->privateConnectionInput->displayName = 'laborum';
    $request->privateConnectionInput->error = new Status();
    $request->privateConnectionInput->error->code = 152354;
    $request->privateConnectionInput->error->details = [
        [
            'quidem' => 'explicabo',
            'voluptas' => 'unde',
        ],
        [
            'suscipit' => 'sapiente',
        ],
    ];
    $request->privateConnectionInput->error->message = 'debitis';
    $request->privateConnectionInput->labels = [
        'reiciendis' => 'perferendis',
    ];
    $request->privateConnectionInput->name = 'Emilio Goodwin';
    $request->privateConnectionInput->vpcPeeringConfig = new VpcPeeringConfig();
    $request->privateConnectionInput->vpcPeeringConfig->subnet = 'eius';
    $request->privateConnectionInput->vpcPeeringConfig->vpcName = 'necessitatibus';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'quos';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'tempora';
    $request->parent = 'tempora';
    $request->prettyPrint = false;
    $request->privateConnectionId = 'voluptate';
    $request->quotaUser = 'reiciendis';
    $request->requestId = 'ex';
    $request->skipValidation = false;
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DatamigrationProjectsLocationsPrivateConnectionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsPrivateConnectionsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsPrivateConnectionsDelete

Deletes a single Database Migration Service private connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsPrivateConnectionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'incidunt';
    $request->key = 'ipsam';
    $request->name = 'Ian Balistreri';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->requestId = 'recusandae';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new DatamigrationProjectsLocationsPrivateConnectionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsPrivateConnectionsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsPrivateConnectionsGet

Gets details of a single private connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsPrivateConnectionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'veniam';
    $request->key = 'in';
    $request->name = 'Jack Langworth';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new DatamigrationProjectsLocationsPrivateConnectionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsPrivateConnectionsGet($request, $requestSecurity);

    if ($response->privateConnection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsPrivateConnectionsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'neque';
    $request->key = 'dolorum';
    $request->oauthToken = 'nostrum';
    $request->optionsRequestedPolicyVersion = 639028;
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->resource = 'corrupti';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsPrivateConnectionsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsPrivateConnectionsList

Retrieves a list of private connections in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsPrivateConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'voluptatem';
    $request->filter = 'culpa';
    $request->key = 'expedita';
    $request->oauthToken = 'magnam';
    $request->orderBy = 'consequatur';
    $request->pageSize = 460220;
    $request->pageToken = 'ipsam';
    $request->parent = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new DatamigrationProjectsLocationsPrivateConnectionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsPrivateConnectionsList($request, $requestSecurity);

    if ($response->listPrivateConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsPrivateConnectionsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'ex';
    $request->setIamPolicyRequest->policy->version = 153627;
    $request->setIamPolicyRequest->updateMask = 'sit';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'error';
    $request->key = 'consequatur';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->resource = 'dolorem';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsPrivateConnectionsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsPrivateConnectionsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'labore',
        'quidem',
        'atque',
    ];
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->fields = 'laboriosam';
    $request->key = 'alias';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->resource = 'voluptate';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsPrivateConnectionsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
