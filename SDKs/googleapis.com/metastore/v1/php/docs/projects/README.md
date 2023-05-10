# projects

### Available Operations

* [metastoreProjectsLocationsFederationsCreate](#metastoreprojectslocationsfederationscreate) - Creates a metastore federation in a project and location.
* [metastoreProjectsLocationsFederationsList](#metastoreprojectslocationsfederationslist) - Lists federations in a project and location.
* [metastoreProjectsLocationsList](#metastoreprojectslocationslist) - Lists information about the supported locations for this service.
* [metastoreProjectsLocationsOperationsCancel](#metastoreprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [metastoreProjectsLocationsOperationsList](#metastoreprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* [metastoreProjectsLocationsServicesAlterLocation](#metastoreprojectslocationsservicesalterlocation) - Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.
* [metastoreProjectsLocationsServicesBackupsCreate](#metastoreprojectslocationsservicesbackupscreate) - Creates a new backup in a given project and location.
* [metastoreProjectsLocationsServicesBackupsDelete](#metastoreprojectslocationsservicesbackupsdelete) - Deletes a single backup.
* [metastoreProjectsLocationsServicesBackupsGetIamPolicy](#metastoreprojectslocationsservicesbackupsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [metastoreProjectsLocationsServicesBackupsList](#metastoreprojectslocationsservicesbackupslist) - Lists backups in a service.
* [metastoreProjectsLocationsServicesBackupsSetIamPolicy](#metastoreprojectslocationsservicesbackupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [metastoreProjectsLocationsServicesCreate](#metastoreprojectslocationsservicescreate) - Creates a metastore service in a project and location.
* [metastoreProjectsLocationsServicesExportMetadata](#metastoreprojectslocationsservicesexportmetadata) - Exports metadata from a service.
* [metastoreProjectsLocationsServicesList](#metastoreprojectslocationsserviceslist) - Lists services in a project and location.
* [metastoreProjectsLocationsServicesMetadataImportsCreate](#metastoreprojectslocationsservicesmetadataimportscreate) - Creates a new MetadataImport in a given project and location.
* [metastoreProjectsLocationsServicesMetadataImportsGet](#metastoreprojectslocationsservicesmetadataimportsget) - Gets details of a single import.
* [metastoreProjectsLocationsServicesMetadataImportsList](#metastoreprojectslocationsservicesmetadataimportslist) - Lists imports in a service.
* [metastoreProjectsLocationsServicesMetadataImportsPatch](#metastoreprojectslocationsservicesmetadataimportspatch) - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* [metastoreProjectsLocationsServicesMoveTableToDatabase](#metastoreprojectslocationsservicesmovetabletodatabase) - Move a table to another database.
* [metastoreProjectsLocationsServicesQueryMetadata](#metastoreprojectslocationsservicesquerymetadata) - Query DPMS metadata.
* [metastoreProjectsLocationsServicesRestore](#metastoreprojectslocationsservicesrestore) - Restores a service from a backup.
* [metastoreProjectsLocationsServicesTestIamPermissions](#metastoreprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## metastoreProjectsLocationsFederationsCreate

Creates a metastore federation in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsFederationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FederationInput;
use \OpenAPI\OpenAPI\Models\Shared\BackendMetastore;
use \OpenAPI\OpenAPI\Models\Shared\BackendMetastoreMetastoreTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsFederationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsFederationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->federationInput = new FederationInput();
    $request->federationInput->backendMetastores = [
        'repellendus' => new BackendMetastore(),
        'sapiente' => new BackendMetastore(),
    ];
    $request->federationInput->labels = [
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
    ];
    $request->federationInput->name = 'Miss Lowell Parisian';
    $request->federationInput->version = 'occaecati';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->federationId = 'optio';
    $request->fields = 'totam';
    $request->key = 'beatae';
    $request->oauthToken = 'commodi';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->requestId = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new MetastoreProjectsLocationsFederationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsFederationsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsFederationsList

Lists federations in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsFederationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsFederationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsFederationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->filter = 'ad';
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->orderBy = 'iste';
    $request->pageSize = 222321;
    $request->pageToken = 'natus';
    $request->parent = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new MetastoreProjectsLocationsFederationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsFederationsList($request, $requestSecurity);

    if ($response->listFederationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'saepe';
    $request->filter = 'quidem';
    $request->key = 'architecto';
    $request->name = 'Lela Orn';
    $request->oauthToken = 'dolores';
    $request->pageSize = 210382;
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new MetastoreProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'architecto';
    $request->key = 'mollitia';
    $request->name = 'Cecilia Crooks';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new MetastoreProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->filter = 'vitae';
    $request->key = 'laborum';
    $request->name = 'Bill Conn';
    $request->oauthToken = 'tenetur';
    $request->pageSize = 368725;
    $request->pageToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new MetastoreProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesAlterLocation

Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesAlterLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlterMetadataResourceLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesAlterLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesAlterLocationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->alterMetadataResourceLocationRequest = new AlterMetadataResourceLocationRequest();
    $request->alterMetadataResourceLocationRequest->locationUri = 'temporibus';
    $request->alterMetadataResourceLocationRequest->resourceName = 'laborum';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'vero';
    $request->key = 'nihil';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->service = 'ipsa';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new MetastoreProjectsLocationsServicesAlterLocationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesAlterLocation($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesBackupsCreate

Creates a new backup in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesBackupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceDatabaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\HiveMetastoreConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AuxiliaryVersionConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ConsumerInput;
use \OpenAPI\OpenAPI\Models\Shared\KerberosConfig;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceReleaseChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ScalingConfigInstanceSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TelemetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\TelemetryConfigLogFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesBackupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesBackupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backupInput = new BackupInput();
    $request->backupInput->description = 'perferendis';
    $request->backupInput->name = 'Bessie Grady II';
    $request->backupInput->serviceRevision = new ServiceInput();
    $request->backupInput->serviceRevision->databaseType = ServiceDatabaseTypeEnum::DATABASE_TYPE_UNSPECIFIED;
    $request->backupInput->serviceRevision->encryptionConfig = new EncryptionConfig();
    $request->backupInput->serviceRevision->encryptionConfig->kmsKey = 'iusto';
    $request->backupInput->serviceRevision->hiveMetastoreConfig = new HiveMetastoreConfigInput();
    $request->backupInput->serviceRevision->hiveMetastoreConfig->auxiliaryVersions = [
        'harum' => new AuxiliaryVersionConfigInput(),
    ];
    $request->backupInput->serviceRevision->hiveMetastoreConfig->configOverrides = [
        'accusamus' => 'commodi',
        'repudiandae' => 'quae',
    ];
    $request->backupInput->serviceRevision->hiveMetastoreConfig->kerberosConfig = new KerberosConfig();
    $request->backupInput->serviceRevision->hiveMetastoreConfig->kerberosConfig->keytab = new Secret();
    $request->backupInput->serviceRevision->hiveMetastoreConfig->kerberosConfig->keytab->cloudSecret = 'ipsum';
    $request->backupInput->serviceRevision->hiveMetastoreConfig->kerberosConfig->krb5ConfigGcsUri = 'quidem';
    $request->backupInput->serviceRevision->hiveMetastoreConfig->kerberosConfig->principal = 'molestias';
    $request->backupInput->serviceRevision->hiveMetastoreConfig->version = 'excepturi';
    $request->backupInput->serviceRevision->labels = [
        'modi' => 'praesentium',
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->backupInput->serviceRevision->maintenanceWindow = new MaintenanceWindow();
    $request->backupInput->serviceRevision->maintenanceWindow->dayOfWeek = MaintenanceWindowDayOfWeekEnum::SUNDAY;
    $request->backupInput->serviceRevision->maintenanceWindow->hourOfDay = 277718;
    $request->backupInput->serviceRevision->name = 'Elizabeth Orn';
    $request->backupInput->serviceRevision->network = 'deserunt';
    $request->backupInput->serviceRevision->networkConfig = new NetworkConfigInput();
    $request->backupInput->serviceRevision->networkConfig->consumers = [
        new ConsumerInput(),
        new ConsumerInput(),
        new ConsumerInput(),
    ];
    $request->backupInput->serviceRevision->port = 841386;
    $request->backupInput->serviceRevision->releaseChannel = ServiceReleaseChannelEnum::RELEASE_CHANNEL_UNSPECIFIED;
    $request->backupInput->serviceRevision->scalingConfig = new ScalingConfig();
    $request->backupInput->serviceRevision->scalingConfig->instanceSize = ScalingConfigInstanceSizeEnum::EXTRA_SMALL;
    $request->backupInput->serviceRevision->scalingConfig->scalingFactor = 1831.91;
    $request->backupInput->serviceRevision->telemetryConfig = new TelemetryConfig();
    $request->backupInput->serviceRevision->telemetryConfig->logFormat = TelemetryConfigLogFormatEnum::LEGACY;
    $request->backupInput->serviceRevision->tier = ServiceTierEnum::DEVELOPER;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->backupId = 'magni';
    $request->callback = 'assumenda';
    $request->fields = 'ipsam';
    $request->key = 'alias';
    $request->oauthToken = 'fugit';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->requestId = 'tempora';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new MetastoreProjectsLocationsServicesBackupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesBackupsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesBackupsDelete

Deletes a single backup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesBackupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesBackupsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesBackupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'eligendi';
    $request->key = 'sint';
    $request->name = 'Sherri Tremblay';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->requestId = 'a';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'in';

    $requestSecurity = new MetastoreProjectsLocationsServicesBackupsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesBackupsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesBackupsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesBackupsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rerum';
    $request->fields = 'dicta';
    $request->key = 'magnam';
    $request->oauthToken = 'cumque';
    $request->optionsRequestedPolicyVersion = 813798;
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->resource = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new MetastoreProjectsLocationsServicesBackupsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesBackupsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesBackupsList

Lists backups in a service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesBackupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesBackupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesBackupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'delectus';
    $request->filter = 'quidem';
    $request->key = 'provident';
    $request->oauthToken = 'nam';
    $request->orderBy = 'id';
    $request->pageSize = 501324;
    $request->pageToken = 'deleniti';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new MetastoreProjectsLocationsServicesBackupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesBackupsList($request, $requestSecurity);

    if ($response->listBackupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesBackupsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesBackupsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
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
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'molestiae';
    $request->setIamPolicyRequest->policy->version = 19193;
    $request->setIamPolicyRequest->updateMask = 'nihil';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'labore';
    $request->key = 'labore';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->resource = 'nobis';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new MetastoreProjectsLocationsServicesBackupsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesBackupsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesCreate

Creates a metastore service in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceDatabaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\HiveMetastoreConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AuxiliaryVersionConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ConsumerInput;
use \OpenAPI\OpenAPI\Models\Shared\KerberosConfig;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceReleaseChannelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ScalingConfigInstanceSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TelemetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\TelemetryConfigLogFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serviceInput = new ServiceInput();
    $request->serviceInput->databaseType = ServiceDatabaseTypeEnum::DATABASE_TYPE_UNSPECIFIED;
    $request->serviceInput->encryptionConfig = new EncryptionConfig();
    $request->serviceInput->encryptionConfig->kmsKey = 'magnam';
    $request->serviceInput->hiveMetastoreConfig = new HiveMetastoreConfigInput();
    $request->serviceInput->hiveMetastoreConfig->auxiliaryVersions = [
        'excepturi' => new AuxiliaryVersionConfigInput(),
    ];
    $request->serviceInput->hiveMetastoreConfig->configOverrides = [
        'provident' => 'quos',
        'sint' => 'accusantium',
    ];
    $request->serviceInput->hiveMetastoreConfig->kerberosConfig = new KerberosConfig();
    $request->serviceInput->hiveMetastoreConfig->kerberosConfig->keytab = new Secret();
    $request->serviceInput->hiveMetastoreConfig->kerberosConfig->keytab->cloudSecret = 'mollitia';
    $request->serviceInput->hiveMetastoreConfig->kerberosConfig->krb5ConfigGcsUri = 'reiciendis';
    $request->serviceInput->hiveMetastoreConfig->kerberosConfig->principal = 'mollitia';
    $request->serviceInput->hiveMetastoreConfig->version = 'ad';
    $request->serviceInput->labels = [
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->serviceInput->maintenanceWindow = new MaintenanceWindow();
    $request->serviceInput->maintenanceWindow->dayOfWeek = MaintenanceWindowDayOfWeekEnum::DAY_OF_WEEK_UNSPECIFIED;
    $request->serviceInput->maintenanceWindow->hourOfDay = 435865;
    $request->serviceInput->name = 'Doyle Gibson';
    $request->serviceInput->network = 'facilis';
    $request->serviceInput->networkConfig = new NetworkConfigInput();
    $request->serviceInput->networkConfig->consumers = [
        new ConsumerInput(),
        new ConsumerInput(),
    ];
    $request->serviceInput->port = 100226;
    $request->serviceInput->releaseChannel = ServiceReleaseChannelEnum::RELEASE_CHANNEL_UNSPECIFIED;
    $request->serviceInput->scalingConfig = new ScalingConfig();
    $request->serviceInput->scalingConfig->instanceSize = ScalingConfigInstanceSizeEnum::EXTRA_LARGE;
    $request->serviceInput->scalingConfig->scalingFactor = 3523.12;
    $request->serviceInput->telemetryConfig = new TelemetryConfig();
    $request->serviceInput->telemetryConfig->logFormat = TelemetryConfigLogFormatEnum::JSON;
    $request->serviceInput->tier = ServiceTierEnum::DEVELOPER;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'saepe';
    $request->key = 'pariatur';
    $request->oauthToken = 'accusantium';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->requestId = 'natus';
    $request->serviceId = 'magni';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new MetastoreProjectsLocationsServicesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesExportMetadata

Exports metadata from a service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesExportMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportMetadataRequestDatabaseDumpTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesExportMetadataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesExportMetadataRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->exportMetadataRequest = new ExportMetadataRequest();
    $request->exportMetadataRequest->databaseDumpType = ExportMetadataRequestDatabaseDumpTypeEnum::AVRO;
    $request->exportMetadataRequest->destinationGcsFolder = 'maxime';
    $request->exportMetadataRequest->requestId = 'ea';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'accusantium';
    $request->key = 'ab';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->service = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new MetastoreProjectsLocationsServicesExportMetadataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesExportMetadata($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesList

Lists services in a project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->fields = 'voluptatibus';
    $request->filter = 'perferendis';
    $request->key = 'fugiat';
    $request->oauthToken = 'amet';
    $request->orderBy = 'aut';
    $request->pageSize = 764912;
    $request->pageToken = 'corporis';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new MetastoreProjectsLocationsServicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesList($request, $requestSecurity);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesMetadataImportsCreate

Creates a new MetadataImport in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesMetadataImportsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataImportInput;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseDump;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseDumpDatabaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseDumpTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesMetadataImportsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->metadataImportInput = new MetadataImportInput();
    $request->metadataImportInput->databaseDump = new DatabaseDump();
    $request->metadataImportInput->databaseDump->databaseType = DatabaseDumpDatabaseTypeEnum::MYSQL;
    $request->metadataImportInput->databaseDump->gcsUri = 'dignissimos';
    $request->metadataImportInput->databaseDump->sourceDatabase = 'eaque';
    $request->metadataImportInput->databaseDump->type = DatabaseDumpTypeEnum::MYSQL;
    $request->metadataImportInput->description = 'nesciunt';
    $request->metadataImportInput->name = 'Dorothy Dach';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'hic';
    $request->key = 'recusandae';
    $request->metadataImportId = 'omnis';
    $request->oauthToken = 'facilis';
    $request->parent = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->requestId = 'porro';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesMetadataImportsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesMetadataImportsGet

Gets details of a single import.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesMetadataImportsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesMetadataImportsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesMetadataImportsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rerum';
    $request->fields = 'adipisci';
    $request->key = 'asperiores';
    $request->name = 'Edwin Morar';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new MetastoreProjectsLocationsServicesMetadataImportsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesMetadataImportsGet($request, $requestSecurity);

    if ($response->metadataImport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesMetadataImportsList

Lists imports in a service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesMetadataImportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesMetadataImportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesMetadataImportsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'dolorem';
    $request->filter = 'dolorem';
    $request->key = 'dolor';
    $request->oauthToken = 'qui';
    $request->orderBy = 'ipsum';
    $request->pageSize = 944373;
    $request->pageToken = 'excepturi';
    $request->parent = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new MetastoreProjectsLocationsServicesMetadataImportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesMetadataImportsList($request, $requestSecurity);

    if ($response->listMetadataImportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesMetadataImportsPatch

Updates a single import. Only the description field of MetadataImport is supported to be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesMetadataImportsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataImportInput;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseDump;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseDumpDatabaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseDumpTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesMetadataImportsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->metadataImportInput = new MetadataImportInput();
    $request->metadataImportInput->databaseDump = new DatabaseDump();
    $request->metadataImportInput->databaseDump->databaseType = DatabaseDumpDatabaseTypeEnum::MYSQL;
    $request->metadataImportInput->databaseDump->gcsUri = 'numquam';
    $request->metadataImportInput->databaseDump->sourceDatabase = 'veritatis';
    $request->metadataImportInput->databaseDump->type = DatabaseDumpTypeEnum::TYPE_UNSPECIFIED;
    $request->metadataImportInput->description = 'ipsa';
    $request->metadataImportInput->name = 'Viola Hahn';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'eos';
    $request->key = 'atque';
    $request->name = 'Ginger Bergstrom';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->requestId = 'dolorum';
    $request->updateMask = 'deleniti';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesMetadataImportsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesMoveTableToDatabase

Move a table to another database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MoveTableToDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->moveTableToDatabaseRequest = new MoveTableToDatabaseRequest();
    $request->moveTableToDatabaseRequest->dbName = 'asperiores';
    $request->moveTableToDatabaseRequest->destinationDbName = 'nihil';
    $request->moveTableToDatabaseRequest->tableName = 'ipsum';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'eius';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->service = 'optio';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesMoveTableToDatabase($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesQueryMetadata

Query DPMS metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesQueryMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesQueryMetadataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesQueryMetadataRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queryMetadataRequest = new QueryMetadataRequest();
    $request->queryMetadataRequest->query = 'suscipit';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'repellendus';
    $request->key = 'totam';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->service = 'at';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new MetastoreProjectsLocationsServicesQueryMetadataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesQueryMetadata($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesRestore

Restores a service from a backup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesRestoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RestoreServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreServiceRequestRestoreTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesRestoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesRestoreRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->restoreServiceRequest = new RestoreServiceRequest();
    $request->restoreServiceRequest->backup = 'quod';
    $request->restoreServiceRequest->requestId = 'officiis';
    $request->restoreServiceRequest->restoreType = RestoreServiceRequestRestoreTypeEnum::RESTORE_TYPE_UNSPECIFIED;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'harum';
    $request->key = 'iusto';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->service = 'tenetur';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new MetastoreProjectsLocationsServicesRestoreSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesRestore($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'enim',
        'dolorem',
    ];
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nihil';
    $request->fields = 'sit';
    $request->key = 'expedita';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->resource = 'vel';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new MetastoreProjectsLocationsServicesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
