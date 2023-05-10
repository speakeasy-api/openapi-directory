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
    $request->backupInput->clusterMetadata->anthosVersion = 'provident';
    $request->backupInput->clusterMetadata->backupCrdVersions = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->backupInput->clusterMetadata->cluster = 'error';
    $request->backupInput->clusterMetadata->gkeVersion = 'deserunt';
    $request->backupInput->clusterMetadata->k8sVersion = 'suscipit';
    $request->backupInput->deleteLockDays = 437587;
    $request->backupInput->description = 'magnam';
    $request->backupInput->encryptionKey = new EncryptionKey();
    $request->backupInput->encryptionKey->gcpKmsEncryptionKey = 'debitis';
    $request->backupInput->labels = [
        'delectus' => 'tempora',
    ];
    $request->backupInput->retainDays = 383441;
    $request->backupInput->selectedApplications = new NamespacedNames();
    $request->backupInput->selectedApplications->namespacedNames = [
        new NamespacedName(),
        new NamespacedName(),
    ];
    $request->backupInput->selectedNamespaces = new Namespaces();
    $request->backupInput->selectedNamespaces->namespaces = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->backupId = 'temporibus';
    $request->callback = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [gkebackupProjectsLocationsBackupPlansBackupsCreate](docs/projects/README.md#gkebackupprojectslocationsbackupplansbackupscreate) - Creates a Backup for the given BackupPlan.
* [gkebackupProjectsLocationsBackupPlansBackupsList](docs/projects/README.md#gkebackupprojectslocationsbackupplansbackupslist) - Lists the Backups for a given BackupPlan.
* [gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList](docs/projects/README.md#gkebackupprojectslocationsbackupplansbackupsvolumebackupslist) - Lists the VolumeBackups for a given Backup.
* [gkebackupProjectsLocationsBackupPlansCreate](docs/projects/README.md#gkebackupprojectslocationsbackupplanscreate) - Creates a new BackupPlan in a given location.
* [gkebackupProjectsLocationsBackupPlansList](docs/projects/README.md#gkebackupprojectslocationsbackupplanslist) - Lists BackupPlans in a given location.
* [gkebackupProjectsLocationsDeleteOperations](docs/projects/README.md#gkebackupprojectslocationsdeleteoperations) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [gkebackupProjectsLocationsList](docs/projects/README.md#gkebackupprojectslocationslist) - Lists information about the supported locations for this service.
* [gkebackupProjectsLocationsOperationsCancel](docs/projects/README.md#gkebackupprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkebackupProjectsLocationsOperationsList](docs/projects/README.md#gkebackupprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkebackupProjectsLocationsRestorePlansCreate](docs/projects/README.md#gkebackupprojectslocationsrestoreplanscreate) - Creates a new RestorePlan in a given location.
* [gkebackupProjectsLocationsRestorePlansList](docs/projects/README.md#gkebackupprojectslocationsrestoreplanslist) - Lists RestorePlans in a given location.
* [gkebackupProjectsLocationsRestorePlansRestoresCreate](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestorescreate) - Creates a new Restore for the given RestorePlan.
* [gkebackupProjectsLocationsRestorePlansRestoresDelete](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresdelete) - Deletes an existing Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresList](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoreslist) - Lists the Restores for a given RestorePlan.
* [gkebackupProjectsLocationsRestorePlansRestoresPatch](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestorespatch) - Update a Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresget) - Retrieve the details of a single VolumeRestore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoreslist) - Lists the VolumeRestores for a given Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestoressetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions](docs/projects/README.md#gkebackupprojectslocationsrestoreplansrestoresvolumerestorestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
