# projects

### Available Operations

* [fileProjectsLocationsBackupsCreate](#fileprojectslocationsbackupscreate) - Creates a backup.
* [fileProjectsLocationsBackupsList](#fileprojectslocationsbackupslist) - Lists all backups in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesCreate](#fileprojectslocationsinstancescreate) - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [fileProjectsLocationsInstancesList](#fileprojectslocationsinstanceslist) - Lists all instances in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesRestore](#fileprojectslocationsinstancesrestore) - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [fileProjectsLocationsInstancesRevert](#fileprojectslocationsinstancesrevert) - Revert an existing instance's file system to a specified snapshot.
* [fileProjectsLocationsInstancesSharesCreate](#fileprojectslocationsinstancessharescreate) - Creates a share.
* [fileProjectsLocationsInstancesSharesList](#fileprojectslocationsinstancesshareslist) - Lists all shares for a specified instance.
* [fileProjectsLocationsInstancesSnapshotsCreate](#fileprojectslocationsinstancessnapshotscreate) - Creates a snapshot.
* [fileProjectsLocationsInstancesSnapshotsList](#fileprojectslocationsinstancessnapshotslist) - Lists all snapshots in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesSnapshotsPatch](#fileprojectslocationsinstancessnapshotspatch) - Updates the settings of a specific snapshot.
* [fileProjectsLocationsList](#fileprojectslocationslist) - Lists information about the supported locations for this service.
* [fileProjectsLocationsOperationsCancel](#fileprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [fileProjectsLocationsOperationsDelete](#fileprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [fileProjectsLocationsOperationsGet](#fileprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [fileProjectsLocationsOperationsList](#fileprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## fileProjectsLocationsBackupsCreate

Creates a backup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsBackupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsBackupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsBackupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backupInput = new BackupInput();
    $request->backupInput->description = 'recusandae';
    $request->backupInput->kmsKeyName = 'temporibus';
    $request->backupInput->labels = [
        'quis' => 'veritatis',
    ];
    $request->backupInput->sourceFileShare = 'deserunt';
    $request->backupInput->sourceInstance = 'perferendis';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->backupId = 'sapiente';
    $request->callback = 'quo';
    $request->fields = 'odit';
    $request->key = 'at';
    $request->oauthToken = 'at';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new FileProjectsLocationsBackupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsBackupsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsBackupsList

Lists all backups in a project for either a specified location or for all locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsBackupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsBackupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsBackupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->filter = 'nam';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->orderBy = 'fugit';
    $request->pageSize = 537373;
    $request->pageToken = 'hic';
    $request->parent = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new FileProjectsLocationsBackupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsBackupsList($request, $requestSecurity);

    if ($response->listBackupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsInstancesCreate

Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\DirectoryServicesConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedActiveDirectoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileShareConfig;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportOptionsAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportOptionsSecurityFlavorsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportOptionsSquashModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigConnectModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigModesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->capacityGb = 'modi';
    $request->instanceInput->description = 'qui';
    $request->instanceInput->directoryServices = new DirectoryServicesConfig();
    $request->instanceInput->directoryServices->managedActiveDirectory = new ManagedActiveDirectoryConfig();
    $request->instanceInput->directoryServices->managedActiveDirectory->computer = 'impedit';
    $request->instanceInput->directoryServices->managedActiveDirectory->domain = 'cum';
    $request->instanceInput->etag = 'esse';
    $request->instanceInput->fileShares = [
        new FileShareConfig(),
    ];
    $request->instanceInput->kmsKeyName = 'excepturi';
    $request->instanceInput->labels = [
        'perferendis' => 'ad',
    ];
    $request->instanceInput->maxShareCount = 'natus';
    $request->instanceInput->multiShareEnabled = false;
    $request->instanceInput->networks = [
        new NetworkConfigInput(),
    ];
    $request->instanceInput->protocol = InstanceProtocolEnum::NFS_V3;
    $request->instanceInput->tier = InstanceTierEnum::STANDARD;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'saepe';
    $request->instanceId = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new FileProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsInstancesList

Lists all instances in a project for either a specified location or for all locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->filter = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->orderBy = 'corporis';
    $request->pageSize = 128926;
    $request->pageToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new FileProjectsLocationsInstancesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsInstancesList($request, $requestSecurity);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsInstancesRestore

Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesRestoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RestoreInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesRestoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsInstancesRestoreRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->restoreInstanceRequest = new RestoreInstanceRequest();
    $request->restoreInstanceRequest->fileShare = 'accusantium';
    $request->restoreInstanceRequest->sourceBackup = 'iure';
    $request->restoreInstanceRequest->sourceSnapshot = 'culpa';
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'mollitia';
    $request->key = 'dolorem';
    $request->name = 'Carlos Ziemann';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new FileProjectsLocationsInstancesRestoreSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsInstancesRestore($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsInstancesRevert

Revert an existing instance's file system to a specified snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesRevertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RevertInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesRevertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsInstancesRevertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->revertInstanceRequest = new RevertInstanceRequest();
    $request->revertInstanceRequest->targetSnapshotId = 'error';
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->name = 'Christina Satterfield';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new FileProjectsLocationsInstancesRevertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsInstancesRevert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsInstancesSharesCreate

Creates a share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesSharesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShareInput;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportOptionsAccessModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportOptionsSecurityFlavorsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportOptionsSquashModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesSharesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsInstancesSharesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->shareInput = new ShareInput();
    $request->shareInput->backup = 'error';
    $request->shareInput->capacityGb = 'temporibus';
    $request->shareInput->description = 'laborum';
    $request->shareInput->labels = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->shareInput->mountName = 'vero';
    $request->shareInput->nfsExportOptions = [
        new NfsExportOptions(),
        new NfsExportOptions(),
    ];
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->oauthToken = 'cum';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->shareId = 'reprehenderit';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new FileProjectsLocationsInstancesSharesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsInstancesSharesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsInstancesSharesList

Lists all shares for a specified instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesSharesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesSharesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsInstancesSharesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'dicta';
    $request->filter = 'harum';
    $request->key = 'enim';
    $request->oauthToken = 'accusamus';
    $request->orderBy = 'commodi';
    $request->pageSize = 918236;
    $request->pageToken = 'quae';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new FileProjectsLocationsInstancesSharesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsInstancesSharesList($request, $requestSecurity);

    if ($response->listSharesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsInstancesSnapshotsCreate

Creates a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesSnapshotsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesSnapshotsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsInstancesSnapshotsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->snapshotInput = new SnapshotInput();
    $request->snapshotInput->description = 'modi';
    $request->snapshotInput->labels = [
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'quibusdam';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->snapshotId = 'distinctio';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new FileProjectsLocationsInstancesSnapshotsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsInstancesSnapshotsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsInstancesSnapshotsList

Lists all snapshots in a project for either a specified location or for all locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesSnapshotsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesSnapshotsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsInstancesSnapshotsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cupiditate';
    $request->fields = 'quos';
    $request->filter = 'perferendis';
    $request->key = 'magni';
    $request->oauthToken = 'assumenda';
    $request->orderBy = 'ipsam';
    $request->pageSize = 4695;
    $request->pageToken = 'fugit';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new FileProjectsLocationsInstancesSnapshotsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsInstancesSnapshotsList($request, $requestSecurity);

    if ($response->listSnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsInstancesSnapshotsPatch

Updates the settings of a specific snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesSnapshotsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsInstancesSnapshotsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsInstancesSnapshotsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->snapshotInput = new SnapshotInput();
    $request->snapshotInput->description = 'labore';
    $request->snapshotInput->labels = [
        'eum' => 'non',
        'eligendi' => 'sint',
        'aliquid' => 'provident',
        'necessitatibus' => 'sint',
    ];
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'a';
    $request->key = 'dolorum';
    $request->name = 'Arlene Stamm';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->updateMask = 'cumque';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new FileProjectsLocationsInstancesSnapshotsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsInstancesSnapshotsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'non';
    $request->fields = 'occaecati';
    $request->filter = 'enim';
    $request->includeUnrevealedLocations = false;
    $request->key = 'accusamus';
    $request->name = 'Abraham McKenzie';
    $request->oauthToken = 'blanditiis';
    $request->pageSize = 533206;
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new FileProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'omnis' => 'molestiae',
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->key = 'natus';
    $request->name = 'Duane Thiel II';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new FileProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'reiciendis';
    $request->force = false;
    $request->key = 'mollitia';
    $request->name = 'Natalie Ernser';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new FileProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'facilis';
    $request->key = 'in';
    $request->name = 'Diane VonRueden';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new FileProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FileProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'praesentium';
    $request->filter = 'natus';
    $request->key = 'magni';
    $request->name = 'Angelica Stanton';
    $request->oauthToken = 'ea';
    $request->pageSize = 569101;
    $request->pageToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new FileProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->fileProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
