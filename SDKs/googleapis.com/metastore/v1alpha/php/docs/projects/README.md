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
* [metastoreProjectsLocationsServicesBackupsList](#metastoreprojectslocationsservicesbackupslist) - Lists backups in a service.
* [metastoreProjectsLocationsServicesCreate](#metastoreprojectslocationsservicescreate) - Creates a metastore service in a project and location.
* [metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy](#metastoreprojectslocationsservicesdatabasestablesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy](#metastoreprojectslocationsservicesdatabasestablessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [metastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions](#metastoreprojectslocationsservicesdatabasestablestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [metastoreProjectsLocationsServicesExportMetadata](#metastoreprojectslocationsservicesexportmetadata) - Exports metadata from a service.
* [metastoreProjectsLocationsServicesList](#metastoreprojectslocationsserviceslist) - Lists services in a project and location.
* [metastoreProjectsLocationsServicesMetadataImportsCreate](#metastoreprojectslocationsservicesmetadataimportscreate) - Creates a new MetadataImport in a given project and location.
* [metastoreProjectsLocationsServicesMetadataImportsGet](#metastoreprojectslocationsservicesmetadataimportsget) - Gets details of a single import.
* [metastoreProjectsLocationsServicesMetadataImportsList](#metastoreprojectslocationsservicesmetadataimportslist) - Lists imports in a service.
* [metastoreProjectsLocationsServicesMetadataImportsPatch](#metastoreprojectslocationsservicesmetadataimportspatch) - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* [metastoreProjectsLocationsServicesMoveTableToDatabase](#metastoreprojectslocationsservicesmovetabletodatabase) - Move a table to another database.
* [metastoreProjectsLocationsServicesQueryMetadata](#metastoreprojectslocationsservicesquerymetadata) - Query DPMS metadata.
* [metastoreProjectsLocationsServicesRemoveIamPolicy](#metastoreprojectslocationsservicesremoveiampolicy) - Removes the attached IAM policies for a resource
* [metastoreProjectsLocationsServicesRestore](#metastoreprojectslocationsservicesrestore) - Restores a service from a backup.

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
use \OpenAPI\OpenAPI\Models\Shared\HiveMetastoreConfigEndpointProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\KerberosConfig;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataIntegration;
use \OpenAPI\OpenAPI\Models\Shared\DataCatalogConfig;
use \OpenAPI\OpenAPI\Models\Shared\DataplexConfig;
use \OpenAPI\OpenAPI\Models\Shared\Lake;
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
    $request->backupInput->serviceRevision->hiveMetastoreConfig->endpointProtocol = HiveMetastoreConfigEndpointProtocolEnum::ENDPOINT_PROTOCOL_UNSPECIFIED;
    $request->backupInput->serviceRevision->hiveMetastoreConfig->kerberosConfig = new KerberosConfig();
    $request->backupInput->serviceRevision->hiveMetastoreConfig->kerberosConfig->keytab = new Secret();
    $request->backupInput->serviceRevision->hiveMetastoreConfig->kerberosConfig->keytab->cloudSecret = 'quidem';
    $request->backupInput->serviceRevision->hiveMetastoreConfig->kerberosConfig->krb5ConfigGcsUri = 'molestias';
    $request->backupInput->serviceRevision->hiveMetastoreConfig->kerberosConfig->principal = 'excepturi';
    $request->backupInput->serviceRevision->hiveMetastoreConfig->version = 'pariatur';
    $request->backupInput->serviceRevision->labels = [
        'praesentium' => 'rem',
        'voluptates' => 'quasi',
    ];
    $request->backupInput->serviceRevision->maintenanceWindow = new MaintenanceWindow();
    $request->backupInput->serviceRevision->maintenanceWindow->dayOfWeek = MaintenanceWindowDayOfWeekEnum::SUNDAY;
    $request->backupInput->serviceRevision->maintenanceWindow->hourOfDay = 575947;
    $request->backupInput->serviceRevision->metadataIntegration = new MetadataIntegration();
    $request->backupInput->serviceRevision->metadataIntegration->dataCatalogConfig = new DataCatalogConfig();
    $request->backupInput->serviceRevision->metadataIntegration->dataCatalogConfig->enabled = false;
    $request->backupInput->serviceRevision->metadataIntegration->dataplexConfig = new DataplexConfig();
    $request->backupInput->serviceRevision->metadataIntegration->dataplexConfig->lakeResources = [
        'itaque' => new Lake(),
    ];
    $request->backupInput->serviceRevision->name = 'Erin Altenwerth';
    $request->backupInput->serviceRevision->network = 'explicabo';
    $request->backupInput->serviceRevision->networkConfig = new NetworkConfigInput();
    $request->backupInput->serviceRevision->networkConfig->consumers = [
        new ConsumerInput(),
        new ConsumerInput(),
        new ConsumerInput(),
    ];
    $request->backupInput->serviceRevision->networkConfig->customRoutesEnabled = false;
    $request->backupInput->serviceRevision->port = 716327;
    $request->backupInput->serviceRevision->releaseChannel = ServiceReleaseChannelEnum::STABLE;
    $request->backupInput->serviceRevision->scalingConfig = new ScalingConfig();
    $request->backupInput->serviceRevision->scalingConfig->instanceSize = ScalingConfigInstanceSizeEnum::EXTRA_SMALL;
    $request->backupInput->serviceRevision->scalingConfig->scalingFactor = 2647.3;
    $request->backupInput->serviceRevision->telemetryConfig = new TelemetryConfig();
    $request->backupInput->serviceRevision->telemetryConfig->logFormat = TelemetryConfigLogFormatEnum::LOG_FORMAT_UNSPECIFIED;
    $request->backupInput->serviceRevision->tier = ServiceTierEnum::DEVELOPER;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->backupId = 'perferendis';
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->key = 'ipsam';
    $request->oauthToken = 'alias';
    $request->parent = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->requestId = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'non';
    $request->key = 'eligendi';
    $request->name = 'Gilbert Medhurst';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->requestId = 'debitis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'dolorum';

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
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->filter = 'dicta';
    $request->key = 'magnam';
    $request->oauthToken = 'cumque';
    $request->orderBy = 'facere';
    $request->pageSize = 411820;
    $request->pageToken = 'aliquid';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'occaecati';

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
use \OpenAPI\OpenAPI\Models\Shared\HiveMetastoreConfigEndpointProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\KerberosConfig;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindowDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataIntegration;
use \OpenAPI\OpenAPI\Models\Shared\DataCatalogConfig;
use \OpenAPI\OpenAPI\Models\Shared\DataplexConfig;
use \OpenAPI\OpenAPI\Models\Shared\Lake;
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
    $request->serviceInput->databaseType = ServiceDatabaseTypeEnum::SPANNER;
    $request->serviceInput->encryptionConfig = new EncryptionConfig();
    $request->serviceInput->encryptionConfig->kmsKey = 'delectus';
    $request->serviceInput->hiveMetastoreConfig = new HiveMetastoreConfigInput();
    $request->serviceInput->hiveMetastoreConfig->auxiliaryVersions = [
        'provident' => new AuxiliaryVersionConfigInput(),
        'nam' => new AuxiliaryVersionConfigInput(),
        'id' => new AuxiliaryVersionConfigInput(),
    ];
    $request->serviceInput->hiveMetastoreConfig->configOverrides = [
        'deleniti' => 'sapiente',
        'amet' => 'deserunt',
        'nisi' => 'vel',
    ];
    $request->serviceInput->hiveMetastoreConfig->endpointProtocol = HiveMetastoreConfigEndpointProtocolEnum::THRIFT;
    $request->serviceInput->hiveMetastoreConfig->kerberosConfig = new KerberosConfig();
    $request->serviceInput->hiveMetastoreConfig->kerberosConfig->keytab = new Secret();
    $request->serviceInput->hiveMetastoreConfig->kerberosConfig->keytab->cloudSecret = 'omnis';
    $request->serviceInput->hiveMetastoreConfig->kerberosConfig->krb5ConfigGcsUri = 'molestiae';
    $request->serviceInput->hiveMetastoreConfig->kerberosConfig->principal = 'perferendis';
    $request->serviceInput->hiveMetastoreConfig->version = 'nihil';
    $request->serviceInput->labels = [
        'distinctio' => 'id',
        'labore' => 'labore',
    ];
    $request->serviceInput->maintenanceWindow = new MaintenanceWindow();
    $request->serviceInput->maintenanceWindow->dayOfWeek = MaintenanceWindowDayOfWeekEnum::WEDNESDAY;
    $request->serviceInput->maintenanceWindow->hourOfDay = 618016;
    $request->serviceInput->metadataIntegration = new MetadataIntegration();
    $request->serviceInput->metadataIntegration->dataCatalogConfig = new DataCatalogConfig();
    $request->serviceInput->metadataIntegration->dataCatalogConfig->enabled = false;
    $request->serviceInput->metadataIntegration->dataplexConfig = new DataplexConfig();
    $request->serviceInput->metadataIntegration->dataplexConfig->lakeResources = [
        'eum' => new Lake(),
        'vero' => new Lake(),
        'aspernatur' => new Lake(),
    ];
    $request->serviceInput->name = 'Danielle Bosco';
    $request->serviceInput->network = 'provident';
    $request->serviceInput->networkConfig = new NetworkConfigInput();
    $request->serviceInput->networkConfig->consumers = [
        new ConsumerInput(),
        new ConsumerInput(),
        new ConsumerInput(),
    ];
    $request->serviceInput->networkConfig->customRoutesEnabled = false;
    $request->serviceInput->port = 574325;
    $request->serviceInput->releaseChannel = ServiceReleaseChannelEnum::RELEASE_CHANNEL_UNSPECIFIED;
    $request->serviceInput->scalingConfig = new ScalingConfig();
    $request->serviceInput->scalingConfig->instanceSize = ScalingConfigInstanceSizeEnum::MEDIUM;
    $request->serviceInput->scalingConfig->scalingFactor = 9689.62;
    $request->serviceInput->telemetryConfig = new TelemetryConfig();
    $request->serviceInput->telemetryConfig->logFormat = TelemetryConfigLogFormatEnum::LEGACY;
    $request->serviceInput->tier = ServiceTierEnum::TIER_UNSPECIFIED;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->fields = 'odit';
    $request->key = 'nemo';
    $request->oauthToken = 'quasi';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->requestId = 'debitis';
    $request->serviceId = 'eius';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'deleniti';

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

## metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'repudiandae';
    $request->key = 'ullam';
    $request->oauthToken = 'expedita';
    $request->optionsRequestedPolicyVersion = 469249;
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->resource = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'praesentium';
    $request->setIamPolicyRequest->policy->version = 615560;
    $request->setIamPolicyRequest->updateMask = 'magni';
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'pariatur';
    $request->key = 'maxime';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->resource = 'odit';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## metastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'quidem',
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'pariatur';
    $request->fields = 'nemo';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->resource = 'amet';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->exportMetadataRequest = new ExportMetadataRequest();
    $request->exportMetadataRequest->databaseDumpType = ExportMetadataRequestDatabaseDumpTypeEnum::AVRO;
    $request->exportMetadataRequest->destinationGcsFolder = 'libero';
    $request->exportMetadataRequest->requestId = 'nobis';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'dignissimos';
    $request->key = 'eaque';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->service = 'eos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'dolores';

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
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'nostrum';
    $request->filter = 'hic';
    $request->key = 'recusandae';
    $request->oauthToken = 'omnis';
    $request->orderBy = 'facilis';
    $request->pageSize = 596656;
    $request->pageToken = 'voluptatem';
    $request->parent = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'error';

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
    $request->metadataImportInput->databaseDump->gcsUri = 'rerum';
    $request->metadataImportInput->databaseDump->sourceDatabase = 'adipisci';
    $request->metadataImportInput->databaseDump->type = DatabaseDumpTypeEnum::AVRO;
    $request->metadataImportInput->description = 'earum';
    $request->metadataImportInput->name = 'Sheryl Parisian';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'delectus';
    $request->key = 'quaerat';
    $request->metadataImportId = 'quos';
    $request->oauthToken = 'aliquid';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->requestId = 'dolor';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'ipsum';

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
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'dignissimos';
    $request->key = 'reiciendis';
    $request->name = 'Mr. Lee Funk III';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'quidem';

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
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'atque';
    $request->filter = 'sit';
    $request->key = 'fugiat';
    $request->oauthToken = 'ab';
    $request->orderBy = 'soluta';
    $request->pageSize = 679393;
    $request->pageToken = 'iusto';
    $request->parent = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'omnis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->metadataImportInput = new MetadataImportInput();
    $request->metadataImportInput->databaseDump = new DatabaseDump();
    $request->metadataImportInput->databaseDump->databaseType = DatabaseDumpDatabaseTypeEnum::MYSQL;
    $request->metadataImportInput->databaseDump->gcsUri = 'asperiores';
    $request->metadataImportInput->databaseDump->sourceDatabase = 'nihil';
    $request->metadataImportInput->databaseDump->type = DatabaseDumpTypeEnum::TYPE_UNSPECIFIED;
    $request->metadataImportInput->description = 'voluptate';
    $request->metadataImportInput->name = 'Elbert Gislason I';
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'saepe';
    $request->key = 'suscipit';
    $request->name = 'Rene Hane';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->requestId = 'at';
    $request->updateMask = 'quaerat';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'vel';

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
    $request->moveTableToDatabaseRequest->dbName = 'officiis';
    $request->moveTableToDatabaseRequest->destinationDbName = 'qui';
    $request->moveTableToDatabaseRequest->tableName = 'dolorum';
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'harum';
    $request->fields = 'iusto';
    $request->key = 'ipsum';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->service = 'amet';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'accusamus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->queryMetadataRequest = new QueryMetadataRequest();
    $request->queryMetadataRequest->query = 'enim';
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'nihil';
    $request->key = 'sit';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->service = 'sed';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'libero';

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

## metastoreProjectsLocationsServicesRemoveIamPolicy

Removes the attached IAM policies for a resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesRemoveIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MetastoreProjectsLocationsServicesRemoveIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MetastoreProjectsLocationsServicesRemoveIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeIamPolicyRequest = new RemoveIamPolicyRequest();
    $request->removeIamPolicyRequest->asynchronous = false;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'incidunt';
    $request->key = 'qui';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->resource = 'pariatur';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new MetastoreProjectsLocationsServicesRemoveIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->metastoreProjectsLocationsServicesRemoveIamPolicy($request, $requestSecurity);

    if ($response->removeIamPolicyResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->restoreServiceRequest = new RestoreServiceRequest();
    $request->restoreServiceRequest->backup = 'totam';
    $request->restoreServiceRequest->requestId = 'incidunt';
    $request->restoreServiceRequest->restoreType = RestoreServiceRequestRestoreTypeEnum::RESTORE_TYPE_UNSPECIFIED;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'aliquid';
    $request->key = 'quam';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->service = 'qui';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'fugit';

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
