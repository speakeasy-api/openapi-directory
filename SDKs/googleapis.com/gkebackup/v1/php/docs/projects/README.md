# projects

### Available Operations

* [gkebackupProjectsLocationsBackupPlansBackupsCreate](#gkebackupprojectslocationsbackupplansbackupscreate) - Creates a Backup for the given BackupPlan.
* [gkebackupProjectsLocationsBackupPlansBackupsList](#gkebackupprojectslocationsbackupplansbackupslist) - Lists the Backups for a given BackupPlan.
* [gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList](#gkebackupprojectslocationsbackupplansbackupsvolumebackupslist) - Lists the VolumeBackups for a given Backup.
* [gkebackupProjectsLocationsBackupPlansCreate](#gkebackupprojectslocationsbackupplanscreate) - Creates a new BackupPlan in a given location.
* [gkebackupProjectsLocationsBackupPlansList](#gkebackupprojectslocationsbackupplanslist) - Lists BackupPlans in a given location.
* [gkebackupProjectsLocationsDeleteOperations](#gkebackupprojectslocationsdeleteoperations) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [gkebackupProjectsLocationsList](#gkebackupprojectslocationslist) - Lists information about the supported locations for this service.
* [gkebackupProjectsLocationsOperationsCancel](#gkebackupprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkebackupProjectsLocationsOperationsList](#gkebackupprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkebackupProjectsLocationsRestorePlansCreate](#gkebackupprojectslocationsrestoreplanscreate) - Creates a new RestorePlan in a given location.
* [gkebackupProjectsLocationsRestorePlansList](#gkebackupprojectslocationsrestoreplanslist) - Lists RestorePlans in a given location.
* [gkebackupProjectsLocationsRestorePlansRestoresCreate](#gkebackupprojectslocationsrestoreplansrestorescreate) - Creates a new Restore for the given RestorePlan.
* [gkebackupProjectsLocationsRestorePlansRestoresDelete](#gkebackupprojectslocationsrestoreplansrestoresdelete) - Deletes an existing Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresList](#gkebackupprojectslocationsrestoreplansrestoreslist) - Lists the Restores for a given RestorePlan.
* [gkebackupProjectsLocationsRestorePlansRestoresPatch](#gkebackupprojectslocationsrestoreplansrestorespatch) - Update a Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresget) - Retrieve the details of a single VolumeRestore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoreslist) - Lists the VolumeRestores for a given Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoressetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions](#gkebackupprojectslocationsrestoreplansrestoresvolumerestorestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## gkebackupProjectsLocationsBackupPlansBackupsCreate

Creates a Backup for the given BackupPlan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansBackupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterMetadata;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedNames;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedName;
use \OpenAPI\OpenAPI\Models\Shared\Namespaces;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsBackupPlansBackupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backupInput = new BackupInput();
    $request->backupInput->clusterMetadata = new ClusterMetadata();
    $request->backupInput->clusterMetadata->anthosVersion = 'odit';
    $request->backupInput->clusterMetadata->backupCrdVersions = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->backupInput->clusterMetadata->cluster = 'dolorum';
    $request->backupInput->clusterMetadata->gkeVersion = 'dicta';
    $request->backupInput->clusterMetadata->k8sVersion = 'nam';
    $request->backupInput->deleteLockDays = 639921;
    $request->backupInput->description = 'occaecati';
    $request->backupInput->encryptionKey = new EncryptionKey();
    $request->backupInput->encryptionKey->gcpKmsEncryptionKey = 'fugit';
    $request->backupInput->labels = [
        'hic' => 'optio',
        'totam' => 'beatae',
        'commodi' => 'molestiae',
    ];
    $request->backupInput->retainDays = 264555;
    $request->backupInput->selectedApplications = new NamespacedNames();
    $request->backupInput->selectedApplications->namespacedNames = [
        new NamespacedName(),
    ];
    $request->backupInput->selectedNamespaces = new Namespaces();
    $request->backupInput->selectedNamespaces->namespaces = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->backupId = 'ad';
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsBackupPlansBackupsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsBackupPlansBackupsList

Lists the Backups for a given BackupPlan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansBackupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansBackupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsBackupPlansBackupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'iure';
    $request->filter = 'saepe';
    $request->key = 'quidem';
    $request->oauthToken = 'architecto';
    $request->orderBy = 'ipsa';
    $request->pageSize = 969810;
    $request->pageToken = 'est';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new GkebackupProjectsLocationsBackupPlansBackupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsBackupPlansBackupsList($request, $requestSecurity);

    if ($response->listBackupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList

Lists the VolumeBackups for a given Backup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'omnis';
    $request->filter = 'nemo';
    $request->key = 'minima';
    $request->oauthToken = 'excepturi';
    $request->orderBy = 'accusantium';
    $request->pageSize = 438601;
    $request->pageToken = 'culpa';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList($request, $requestSecurity);

    if ($response->listVolumeBackupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsBackupPlansCreate

Creates a new BackupPlan in a given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupPlanInput;
use \OpenAPI\OpenAPI\Models\Shared\BackupConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedNames;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedName;
use \OpenAPI\OpenAPI\Models\Shared\Namespaces;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\RetentionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsBackupPlansCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backupPlanInput = new BackupPlanInput();
    $request->backupPlanInput->backupConfig = new BackupConfig();
    $request->backupPlanInput->backupConfig->allNamespaces = false;
    $request->backupPlanInput->backupConfig->encryptionKey = new EncryptionKey();
    $request->backupPlanInput->backupConfig->encryptionKey->gcpKmsEncryptionKey = 'culpa';
    $request->backupPlanInput->backupConfig->includeSecrets = false;
    $request->backupPlanInput->backupConfig->includeVolumeData = false;
    $request->backupPlanInput->backupConfig->selectedApplications = new NamespacedNames();
    $request->backupPlanInput->backupConfig->selectedApplications->namespacedNames = [
        new NamespacedName(),
    ];
    $request->backupPlanInput->backupConfig->selectedNamespaces = new Namespaces();
    $request->backupPlanInput->backupConfig->selectedNamespaces->namespaces = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->backupPlanInput->backupSchedule = new Schedule();
    $request->backupPlanInput->backupSchedule->cronSchedule = 'quam';
    $request->backupPlanInput->backupSchedule->paused = false;
    $request->backupPlanInput->cluster = 'molestiae';
    $request->backupPlanInput->deactivated = false;
    $request->backupPlanInput->description = 'velit';
    $request->backupPlanInput->labels = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->backupPlanInput->retentionPolicy = new RetentionPolicy();
    $request->backupPlanInput->retentionPolicy->backupDeleteLockDays = 138183;
    $request->backupPlanInput->retentionPolicy->backupRetainDays = 778346;
    $request->backupPlanInput->retentionPolicy->locked = false;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->backupPlanId = 'ipsam';
    $request->callback = 'id';
    $request->fields = 'possimus';
    $request->key = 'aut';
    $request->oauthToken = 'quasi';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new GkebackupProjectsLocationsBackupPlansCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsBackupPlansCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsBackupPlansList

Lists BackupPlans in a given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsBackupPlansListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'praesentium';
    $request->filter = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->orderBy = 'voluptate';
    $request->pageSize = 739264;
    $request->pageToken = 'perferendis';
    $request->parent = 'doloremque';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new GkebackupProjectsLocationsBackupPlansListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsBackupPlansList($request, $requestSecurity);

    if ($response->listBackupPlansResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsDeleteOperations

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsDeleteOperationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsDeleteOperationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsDeleteOperationsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'dicta';
    $request->key = 'harum';
    $request->name = 'Sophia Jerde I';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new GkebackupProjectsLocationsDeleteOperationsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsDeleteOperations($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->filter = 'repudiandae';
    $request->key = 'sint';
    $request->name = 'Patti Gottlieb MD';
    $request->oauthToken = 'quibusdam';
    $request->pageSize = 131797;
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new GkebackupProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'aliquid' => 'cupiditate',
    ];
    $request->accessToken = 'quos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'assumenda';
    $request->key = 'ipsam';
    $request->name = 'Denise Pagac';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new GkebackupProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->filter = 'provident';
    $request->key = 'necessitatibus';
    $request->name = 'Luke Fadel';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 447125;
    $request->pageToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new GkebackupProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansCreate

Creates a new RestorePlan in a given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RestorePlanInput;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfigClusterResourceConflictPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterResourceRestoreScope;
use \OpenAPI\OpenAPI\Models\Shared\GroupKind;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfigNamespacedResourceRestoreModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedNames;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedName;
use \OpenAPI\OpenAPI\Models\Shared\Namespaces;
use \OpenAPI\OpenAPI\Models\Shared\SubstitutionRule;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfigVolumeDataRestorePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->restorePlanInput = new RestorePlanInput();
    $request->restorePlanInput->backupPlan = 'magnam';
    $request->restorePlanInput->cluster = 'cumque';
    $request->restorePlanInput->description = 'facere';
    $request->restorePlanInput->labels = [
        'aliquid' => 'laborum',
        'accusamus' => 'non',
    ];
    $request->restorePlanInput->restoreConfig = new RestoreConfig();
    $request->restorePlanInput->restoreConfig->allNamespaces = false;
    $request->restorePlanInput->restoreConfig->clusterResourceConflictPolicy = RestoreConfigClusterResourceConflictPolicyEnum::USE_EXISTING_VERSION;
    $request->restorePlanInput->restoreConfig->clusterResourceRestoreScope = new ClusterResourceRestoreScope();
    $request->restorePlanInput->restoreConfig->clusterResourceRestoreScope->selectedGroupKinds = [
        new GroupKind(),
        new GroupKind(),
    ];
    $request->restorePlanInput->restoreConfig->namespacedResourceRestoreMode = RestoreConfigNamespacedResourceRestoreModeEnum::FAIL_ON_CONFLICT;
    $request->restorePlanInput->restoreConfig->selectedApplications = new NamespacedNames();
    $request->restorePlanInput->restoreConfig->selectedApplications->namespacedNames = [
        new NamespacedName(),
        new NamespacedName(),
        new NamespacedName(),
        new NamespacedName(),
    ];
    $request->restorePlanInput->restoreConfig->selectedNamespaces = new Namespaces();
    $request->restorePlanInput->restoreConfig->selectedNamespaces->namespaces = [
        'provident',
        'nam',
        'id',
    ];
    $request->restorePlanInput->restoreConfig->substitutionRules = [
        new SubstitutionRule(),
        new SubstitutionRule(),
        new SubstitutionRule(),
    ];
    $request->restorePlanInput->restoreConfig->volumeDataRestorePolicy = RestoreConfigVolumeDataRestorePolicyEnum::REUSE_VOLUME_HANDLE_FROM_BACKUP;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->key = 'vel';
    $request->oauthToken = 'natus';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->restorePlanId = 'perferendis';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansList

Lists RestorePlans in a given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->filter = 'natus';
    $request->key = 'nobis';
    $request->oauthToken = 'eum';
    $request->orderBy = 'vero';
    $request->pageSize = 135474;
    $request->pageToken = 'architecto';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansList($request, $requestSecurity);

    if ($response->listRestorePlansResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansRestoresCreate

Creates a new Restore for the given RestorePlan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RestoreInput;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfigClusterResourceConflictPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterResourceRestoreScope;
use \OpenAPI\OpenAPI\Models\Shared\GroupKind;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfigNamespacedResourceRestoreModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedNames;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedName;
use \OpenAPI\OpenAPI\Models\Shared\Namespaces;
use \OpenAPI\OpenAPI\Models\Shared\SubstitutionRule;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfigVolumeDataRestorePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansRestoresCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->restoreInput = new RestoreInput();
    $request->restoreInput->backup = 'quos';
    $request->restoreInput->description = 'sint';
    $request->restoreInput->labels = [
        'mollitia' => 'reiciendis',
    ];
    $request->restoreInput->restoreConfig = new RestoreConfig();
    $request->restoreInput->restoreConfig->allNamespaces = false;
    $request->restoreInput->restoreConfig->clusterResourceConflictPolicy = RestoreConfigClusterResourceConflictPolicyEnum::USE_EXISTING_VERSION;
    $request->restoreInput->restoreConfig->clusterResourceRestoreScope = new ClusterResourceRestoreScope();
    $request->restoreInput->restoreConfig->clusterResourceRestoreScope->selectedGroupKinds = [
        new GroupKind(),
        new GroupKind(),
    ];
    $request->restoreInput->restoreConfig->namespacedResourceRestoreMode = RestoreConfigNamespacedResourceRestoreModeEnum::DELETE_AND_RESTORE;
    $request->restoreInput->restoreConfig->selectedApplications = new NamespacedNames();
    $request->restoreInput->restoreConfig->selectedApplications->namespacedNames = [
        new NamespacedName(),
    ];
    $request->restoreInput->restoreConfig->selectedNamespaces = new Namespaces();
    $request->restoreInput->restoreConfig->selectedNamespaces->namespaces = [
        'odit',
        'nemo',
        'quasi',
        'iure',
    ];
    $request->restoreInput->restoreConfig->substitutionRules = [
        new SubstitutionRule(),
        new SubstitutionRule(),
        new SubstitutionRule(),
        new SubstitutionRule(),
    ];
    $request->restoreInput->restoreConfig->volumeDataRestorePolicy = RestoreConfigVolumeDataRestorePolicyEnum::NO_VOLUME_DATA_RESTORATION;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'facilis';
    $request->key = 'in';
    $request->oauthToken = 'architecto';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->restoreId = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansRestoresCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansRestoresDelete

Deletes an existing Restore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->etag = 'pariatur';
    $request->fields = 'accusantium';
    $request->force = false;
    $request->key = 'consequuntur';
    $request->name = 'Miss Nick Cummerata';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansRestoresDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansRestoresList

Lists the Restores for a given RestorePlan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansRestoresListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'maiores';
    $request->filter = 'quidem';
    $request->key = 'ipsam';
    $request->oauthToken = 'voluptate';
    $request->orderBy = 'autem';
    $request->pageSize = 722056;
    $request->pageToken = 'eaque';
    $request->parent = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansRestoresListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansRestoresList($request, $requestSecurity);

    if ($response->listRestoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansRestoresPatch

Update a Restore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RestoreInput;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfig;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfigClusterResourceConflictPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterResourceRestoreScope;
use \OpenAPI\OpenAPI\Models\Shared\GroupKind;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfigNamespacedResourceRestoreModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedNames;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedName;
use \OpenAPI\OpenAPI\Models\Shared\Namespaces;
use \OpenAPI\OpenAPI\Models\Shared\SubstitutionRule;
use \OpenAPI\OpenAPI\Models\Shared\RestoreConfigVolumeDataRestorePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansRestoresPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->restoreInput = new RestoreInput();
    $request->restoreInput->backup = 'amet';
    $request->restoreInput->description = 'aut';
    $request->restoreInput->labels = [
        'corporis' => 'hic',
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
    ];
    $request->restoreInput->restoreConfig = new RestoreConfig();
    $request->restoreInput->restoreConfig->allNamespaces = false;
    $request->restoreInput->restoreConfig->clusterResourceConflictPolicy = RestoreConfigClusterResourceConflictPolicyEnum::CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED;
    $request->restoreInput->restoreConfig->clusterResourceRestoreScope = new ClusterResourceRestoreScope();
    $request->restoreInput->restoreConfig->clusterResourceRestoreScope->selectedGroupKinds = [
        new GroupKind(),
        new GroupKind(),
    ];
    $request->restoreInput->restoreConfig->namespacedResourceRestoreMode = RestoreConfigNamespacedResourceRestoreModeEnum::NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED;
    $request->restoreInput->restoreConfig->selectedApplications = new NamespacedNames();
    $request->restoreInput->restoreConfig->selectedApplications->namespacedNames = [
        new NamespacedName(),
    ];
    $request->restoreInput->restoreConfig->selectedNamespaces = new Namespaces();
    $request->restoreInput->restoreConfig->selectedNamespaces->namespaces = [
        'dolores',
    ];
    $request->restoreInput->restoreConfig->substitutionRules = [
        new SubstitutionRule(),
        new SubstitutionRule(),
        new SubstitutionRule(),
        new SubstitutionRule(),
    ];
    $request->restoreInput->restoreConfig->volumeDataRestorePolicy = RestoreConfigVolumeDataRestorePolicyEnum::RESTORE_VOLUME_DATA_FROM_BACKUP;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'hic';
    $request->key = 'recusandae';
    $request->name = 'Miss Cesar Metz';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->updateMask = 'eaque';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansRestoresPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansRestoresPatch($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet

Retrieve the details of a single VolumeRestore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'iste';
    $request->key = 'dolorum';
    $request->name = 'Ervin McLaughlin';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet($request, $requestSecurity);

    if ($response->volumeRestore !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'ipsum';
    $request->key = 'hic';
    $request->oauthToken = 'excepturi';
    $request->optionsRequestedPolicyVersion = 739551;
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->resource = 'dignissimos';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList

Lists the VolumeRestores for a given Restore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'ipsa';
    $request->filter = 'iure';
    $request->key = 'odio';
    $request->oauthToken = 'quaerat';
    $request->orderBy = 'accusamus';
    $request->pageSize = 696344;
    $request->pageToken = 'voluptatibus';
    $request->parent = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList($request, $requestSecurity);

    if ($response->listVolumeRestoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'soluta';
    $request->setIamPolicyRequest->policy->version = 679393;
    $request->setIamPolicyRequest->updateMask = 'iusto';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'omnis';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->resource = 'nihil';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'eius',
        'aspernatur',
        'perferendis',
        'amet',
    ];
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'saepe';
    $request->key = 'suscipit';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->resource = 'minima';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
