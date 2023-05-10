# projects

### Available Operations

* [datamigrationProjectsLocationsConnectionProfilesCreate](#datamigrationprojectslocationsconnectionprofilescreate) - Creates a new connection profile in a given project and location.
* [datamigrationProjectsLocationsConnectionProfilesList](#datamigrationprojectslocationsconnectionprofileslist) - Retrieve a list of all connection profiles in a given project and location.
* [datamigrationProjectsLocationsList](#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [datamigrationProjectsLocationsMigrationJobsCreate](#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsGenerateSshScript](#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [datamigrationProjectsLocationsMigrationJobsGetIamPolicy](#datamigrationprojectslocationsmigrationjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datamigrationProjectsLocationsMigrationJobsList](#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsPatch](#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [datamigrationProjectsLocationsMigrationJobsPromote](#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [datamigrationProjectsLocationsMigrationJobsRestart](#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [datamigrationProjectsLocationsMigrationJobsResume](#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [datamigrationProjectsLocationsMigrationJobsSetIamPolicy](#datamigrationprojectslocationsmigrationjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datamigrationProjectsLocationsMigrationJobsStart](#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [datamigrationProjectsLocationsMigrationJobsStop](#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [datamigrationProjectsLocationsMigrationJobsTestIamPermissions](#datamigrationprojectslocationsmigrationjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [datamigrationProjectsLocationsMigrationJobsVerify](#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [datamigrationProjectsLocationsOperationsCancel](#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datamigrationProjectsLocationsOperationsDelete](#datamigrationprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datamigrationProjectsLocationsOperationsGet](#datamigrationprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datamigrationProjectsLocationsOperationsList](#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsActivationPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsDataDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudSqlSettingsDatabaseVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlIpConfig;
use \OpenAPI\OpenAPI\Models\Shared\SqlAclEntry;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\MySqlConnectionProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\SslConfigInput;
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
    $request->connectionProfileInput->cloudsql = new CloudSqlConnectionProfileInput();
    $request->connectionProfileInput->cloudsql->settings = new CloudSqlSettingsInput();
    $request->connectionProfileInput->cloudsql->settings->activationPolicy = CloudSqlSettingsActivationPolicyEnum::SQL_ACTIVATION_POLICY_UNSPECIFIED;
    $request->connectionProfileInput->cloudsql->settings->autoStorageIncrease = false;
    $request->connectionProfileInput->cloudsql->settings->dataDiskSizeGb = 'nobis';
    $request->connectionProfileInput->cloudsql->settings->dataDiskType = CloudSqlSettingsDataDiskTypeEnum::SQL_DATA_DISK_TYPE_UNSPECIFIED;
    $request->connectionProfileInput->cloudsql->settings->databaseFlags = [
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->connectionProfileInput->cloudsql->settings->databaseVersion = CloudSqlSettingsDatabaseVersionEnum::MYSQL80;
    $request->connectionProfileInput->cloudsql->settings->ipConfig = new SqlIpConfig();
    $request->connectionProfileInput->cloudsql->settings->ipConfig->authorizedNetworks = [
        new SqlAclEntry(),
        new SqlAclEntry(),
        new SqlAclEntry(),
        new SqlAclEntry(),
    ];
    $request->connectionProfileInput->cloudsql->settings->ipConfig->enableIpv4 = false;
    $request->connectionProfileInput->cloudsql->settings->ipConfig->privateNetwork = 'architecto';
    $request->connectionProfileInput->cloudsql->settings->ipConfig->requireSsl = false;
    $request->connectionProfileInput->cloudsql->settings->rootPassword = 'mollitia';
    $request->connectionProfileInput->cloudsql->settings->sourceId = 'dolorem';
    $request->connectionProfileInput->cloudsql->settings->storageAutoResizeLimit = 'culpa';
    $request->connectionProfileInput->cloudsql->settings->tier = 'consequuntur';
    $request->connectionProfileInput->cloudsql->settings->userLabels = [
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->connectionProfileInput->cloudsql->settings->zone = 'quia';
    $request->connectionProfileInput->displayName = 'quis';
    $request->connectionProfileInput->error = new Status();
    $request->connectionProfileInput->error->code = 110375;
    $request->connectionProfileInput->error->details = [
        [
            'enim' => 'odit',
            'quo' => 'sequi',
            'tenetur' => 'ipsam',
        ],
        [
            'possimus' => 'aut',
            'quasi' => 'error',
            'temporibus' => 'laborum',
        ],
        [
            'reiciendis' => 'voluptatibus',
        ],
    ];
    $request->connectionProfileInput->error->message = 'vero';
    $request->connectionProfileInput->labels = [
        'praesentium' => 'voluptatibus',
        'ipsa' => 'omnis',
    ];
    $request->connectionProfileInput->mysql = new MySqlConnectionProfileInput();
    $request->connectionProfileInput->mysql->cloudSqlId = 'voluptate';
    $request->connectionProfileInput->mysql->host = 'cum';
    $request->connectionProfileInput->mysql->password = 'perferendis';
    $request->connectionProfileInput->mysql->port = 39187;
    $request->connectionProfileInput->mysql->ssl = new SslConfigInput();
    $request->connectionProfileInput->mysql->ssl->caCertificate = 'reprehenderit';
    $request->connectionProfileInput->mysql->ssl->clientCertificate = 'ut';
    $request->connectionProfileInput->mysql->ssl->clientKey = 'maiores';
    $request->connectionProfileInput->mysql->username = 'Blanche48';
    $request->connectionProfileInput->name = 'Maryann Hamill';
    $request->connectionProfileInput->provider = ConnectionProfileProviderEnum::RDS;
    $request->connectionProfileInput->state = ConnectionProfileStateEnum::STATE_UNSPECIFIED;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->connectionProfileId = 'excepturi';
    $request->fields = 'pariatur';
    $request->key = 'modi';
    $request->oauthToken = 'praesentium';
    $request->parent = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->requestId = 'quasi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'sint';

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

Retrieve a list of all connection profiles in a given project and location.

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
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'consequatur';
    $request->filter = 'est';
    $request->key = 'quibusdam';
    $request->oauthToken = 'explicabo';
    $request->orderBy = 'deserunt';
    $request->pageSize = 716327;
    $request->pageToken = 'quibusdam';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

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
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->filter = 'ipsam';
    $request->key = 'alias';
    $request->name = 'Sonya Marks';
    $request->oauthToken = 'tempore';
    $request->pageSize = 288476;
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'eligendi';

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
use \OpenAPI\OpenAPI\Models\Shared\DatabaseType;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseTypeEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseTypeProviderEnum;
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
    $request->migrationJobInput->destination = 'aliquid';
    $request->migrationJobInput->destinationDatabase = new DatabaseType();
    $request->migrationJobInput->destinationDatabase->engine = DatabaseTypeEngineEnum::MYSQL;
    $request->migrationJobInput->destinationDatabase->provider = DatabaseTypeProviderEnum::RDS;
    $request->migrationJobInput->displayName = 'sint';
    $request->migrationJobInput->dumpPath = 'officia';
    $request->migrationJobInput->error = new Status();
    $request->migrationJobInput->error->code = 223081;
    $request->migrationJobInput->error->details = [
        [
            'dolorum' => 'in',
            'in' => 'illum',
            'maiores' => 'rerum',
            'dicta' => 'magnam',
        ],
        [
            'facere' => 'ea',
            'aliquid' => 'laborum',
            'accusamus' => 'non',
            'occaecati' => 'enim',
        ],
        [
            'delectus' => 'quidem',
            'provident' => 'nam',
            'id' => 'blanditiis',
            'deleniti' => 'sapiente',
        ],
        [
            'deserunt' => 'nisi',
        ],
    ];
    $request->migrationJobInput->error->message = 'vel';
    $request->migrationJobInput->labels = [
        'omnis' => 'molestiae',
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->migrationJobInput->name = 'Leroy Greenfelder';
    $request->migrationJobInput->reverseSshConnectivity = new ReverseSshConnectivity();
    $request->migrationJobInput->reverseSshConnectivity->vm = 'nobis';
    $request->migrationJobInput->reverseSshConnectivity->vmIp = 'eum';
    $request->migrationJobInput->reverseSshConnectivity->vmPort = 878453;
    $request->migrationJobInput->reverseSshConnectivity->vpc = 'aspernatur';
    $request->migrationJobInput->source = 'architecto';
    $request->migrationJobInput->sourceDatabase = new DatabaseType();
    $request->migrationJobInput->sourceDatabase->engine = DatabaseTypeEngineEnum::DATABASE_ENGINE_UNSPECIFIED;
    $request->migrationJobInput->sourceDatabase->provider = DatabaseTypeProviderEnum::DATABASE_PROVIDER_UNSPECIFIED;
    $request->migrationJobInput->state = MigrationJobStateEnum::STOPPING;
    $request->migrationJobInput->staticIpConnectivity = [
        'provident' => 'quos',
        'sint' => 'accusantium',
    ];
    $request->migrationJobInput->type = MigrationJobTypeEnum::ONE_TIME;
    $request->migrationJobInput->vpcPeeringConnectivity = new VpcPeeringConnectivity();
    $request->migrationJobInput->vpcPeeringConnectivity->vpc = 'reiciendis';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'dolor';
    $request->key = 'necessitatibus';
    $request->migrationJobId = 'odit';
    $request->oauthToken = 'nemo';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->requestId = 'doloribus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eius';

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
    $request->generateSshScriptRequest->vm = 'deleniti';
    $request->generateSshScriptRequest->vmCreationConfig = new VmCreationConfig();
    $request->generateSshScriptRequest->vmCreationConfig->subnet = 'facilis';
    $request->generateSshScriptRequest->vmCreationConfig->vmMachineType = 'in';
    $request->generateSshScriptRequest->vmCreationConfig->vmZone = 'architecto';
    $request->generateSshScriptRequest->vmPort = 99569;
    $request->generateSshScriptRequest->vmSelectionConfig = new VmSelectionConfig();
    $request->generateSshScriptRequest->vmSelectionConfig->vmZone = 'repudiandae';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'repellat';
    $request->key = 'quibusdam';
    $request->migrationJob = 'sed';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'consequuntur';

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

## datamigrationProjectsLocationsMigrationJobsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->optionsRequestedPolicyVersion = 807319;
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->resource = 'excepturi';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
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
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'ipsam';
    $request->filter = 'voluptate';
    $request->key = 'autem';
    $request->oauthToken = 'nam';
    $request->orderBy = 'eaque';
    $request->pageSize = 866383;
    $request->pageToken = 'nemo';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'amet';

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
use \OpenAPI\OpenAPI\Models\Shared\DatabaseType;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseTypeEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseTypeProviderEnum;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->migrationJobInput = new MigrationJobInput();
    $request->migrationJobInput->destination = 'cumque';
    $request->migrationJobInput->destinationDatabase = new DatabaseType();
    $request->migrationJobInput->destinationDatabase->engine = DatabaseTypeEngineEnum::DATABASE_ENGINE_UNSPECIFIED;
    $request->migrationJobInput->destinationDatabase->provider = DatabaseTypeProviderEnum::RDS;
    $request->migrationJobInput->displayName = 'libero';
    $request->migrationJobInput->dumpPath = 'nobis';
    $request->migrationJobInput->error = new Status();
    $request->migrationJobInput->error->code = 171629;
    $request->migrationJobInput->error->details = [
        [
            'dignissimos' => 'eaque',
            'quis' => 'nesciunt',
            'eos' => 'perferendis',
        ],
        [
            'minus' => 'quam',
        ],
    ];
    $request->migrationJobInput->error->message = 'dolor';
    $request->migrationJobInput->labels = [
        'nostrum' => 'hic',
        'recusandae' => 'omnis',
        'facilis' => 'perspiciatis',
        'voluptatem' => 'porro',
    ];
    $request->migrationJobInput->name = 'Ms. Vickie Mraz';
    $request->migrationJobInput->reverseSshConnectivity = new ReverseSshConnectivity();
    $request->migrationJobInput->reverseSshConnectivity->vm = 'adipisci';
    $request->migrationJobInput->reverseSshConnectivity->vmIp = 'asperiores';
    $request->migrationJobInput->reverseSshConnectivity->vmPort = 934214;
    $request->migrationJobInput->reverseSshConnectivity->vpc = 'modi';
    $request->migrationJobInput->source = 'iste';
    $request->migrationJobInput->sourceDatabase = new DatabaseType();
    $request->migrationJobInput->sourceDatabase->engine = DatabaseTypeEngineEnum::MYSQL;
    $request->migrationJobInput->sourceDatabase->provider = DatabaseTypeProviderEnum::CLOUDSQL;
    $request->migrationJobInput->state = MigrationJobStateEnum::STARTING;
    $request->migrationJobInput->staticIpConnectivity = [
        'nobis' => 'libero',
        'delectus' => 'quaerat',
        'quos' => 'aliquid',
    ];
    $request->migrationJobInput->type = MigrationJobTypeEnum::TYPE_UNSPECIFIED;
    $request->migrationJobInput->vpcPeeringConnectivity = new VpcPeeringConnectivity();
    $request->migrationJobInput->vpcPeeringConnectivity->vpc = 'dolorem';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'hic';
    $request->key = 'excepturi';
    $request->name = 'Adrian Kuhn';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->requestId = 'veritatis';
    $request->updateMask = 'ipsa';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'iure';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'accusamus' => 'quidem',
        'voluptatibus' => 'voluptas',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->fields = 'sit';
    $request->key = 'fugiat';
    $request->name = 'Latoya Parisian';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'necessitatibus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'nihil' => 'ipsum',
        'voluptate' => 'id',
        'saepe' => 'eius',
        'aspernatur' => 'perferendis',
    ];
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'ad';
    $request->key = 'saepe';
    $request->name = 'Rosie McKenzie';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'at';

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
        'vel' => 'quod',
        'officiis' => 'qui',
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'harum';
    $request->key = 'iusto';
    $request->name = 'Rosalie White';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'dolorem';

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

## datamigrationProjectsLocationsMigrationJobsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'sit';
    $request->setIamPolicyRequest->policy->version = 711584;
    $request->setIamPolicyRequest->updateMask = 'neque';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'libero';
    $request->fields = 'voluptas';
    $request->key = 'deserunt';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->resource = 'incidunt';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
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
        'soluta' => 'dicta',
        'laborum' => 'totam',
        'incidunt' => 'aspernatur',
        'dolores' => 'distinctio',
    ];
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'soluta' => 'nobis',
        'et' => 'saepe',
        'ipsum' => 'veritatis',
        'nobis' => 'quos',
    ];
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'delectus';
    $request->key = 'dolorem';
    $request->name = 'Clara Fisher Jr.';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'consequatur';

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

## datamigrationProjectsLocationsMigrationJobsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'laudantium';
    $request->key = 'odio';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->resource = 'quisquam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsMigrationJobsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
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
        'delectus' => 'voluptate',
    ];
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->fields = 'dignissimos';
    $request->key = 'hic';
    $request->name = 'Jermaine Kuhic';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'quibusdam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'natus' => 'impedit',
    ];
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'exercitationem';
    $request->fields = 'nulla';
    $request->key = 'fugit';
    $request->name = 'Elijah Wyman';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'tempora';

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

## datamigrationProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'possimus';
    $request->force = false;
    $request->key = 'magnam';
    $request->name = 'Mrs. Vicki Langosh';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->requestId = 'nulla';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new DatamigrationProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datamigrationProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatamigrationProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatamigrationProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'ea';
    $request->key = 'impedit';
    $request->name = 'Mrs. Sally Jacobi';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new DatamigrationProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datamigrationProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'aut';
    $request->filter = 'aut';
    $request->key = 'deleniti';
    $request->name = 'Jim Corkery I';
    $request->oauthToken = 'et';
    $request->pageSize = 677412;
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'eum';

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
