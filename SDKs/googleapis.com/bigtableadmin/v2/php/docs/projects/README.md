# projects

### Available Operations

* [bigtableadminProjectsInstancesAppProfilesCreate](#bigtableadminprojectsinstancesappprofilescreate) - Creates an app profile within an instance.
* [bigtableadminProjectsInstancesAppProfilesList](#bigtableadminprojectsinstancesappprofileslist) - Lists information about app profiles in an instance.
* [bigtableadminProjectsInstancesClustersBackupsCopy](#bigtableadminprojectsinstancesclustersbackupscopy) - Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
* [bigtableadminProjectsInstancesClustersBackupsCreate](#bigtableadminprojectsinstancesclustersbackupscreate) - Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
* [bigtableadminProjectsInstancesClustersBackupsList](#bigtableadminprojectsinstancesclustersbackupslist) - Lists Cloud Bigtable backups. Returns both completed and pending backups.
* [bigtableadminProjectsInstancesClustersCreate](#bigtableadminprojectsinstancesclusterscreate) - Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* [bigtableadminProjectsInstancesClustersHotTabletsList](#bigtableadminprojectsinstancesclustershottabletslist) - Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.
* [bigtableadminProjectsInstancesClustersList](#bigtableadminprojectsinstancesclusterslist) - Lists information about clusters in an instance.
* [bigtableadminProjectsInstancesClustersUpdate](#bigtableadminprojectsinstancesclustersupdate) - Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.
* [bigtableadminProjectsInstancesCreate](#bigtableadminprojectsinstancescreate) - Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* [bigtableadminProjectsInstancesList](#bigtableadminprojectsinstanceslist) - Lists information about instances in a project.
* [bigtableadminProjectsInstancesTablesCheckConsistency](#bigtableadminprojectsinstancestablescheckconsistency) - Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
* [bigtableadminProjectsInstancesTablesCreate](#bigtableadminprojectsinstancestablescreate) - Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
* [bigtableadminProjectsInstancesTablesDelete](#bigtableadminprojectsinstancestablesdelete) - Permanently deletes a specified table and all of its data.
* [bigtableadminProjectsInstancesTablesDropRowRange](#bigtableadminprojectsinstancestablesdroprowrange) - Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
* [bigtableadminProjectsInstancesTablesGenerateConsistencyToken](#bigtableadminprojectsinstancestablesgenerateconsistencytoken) - Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
* [bigtableadminProjectsInstancesTablesGetIamPolicy](#bigtableadminprojectsinstancestablesgetiampolicy) - Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.
* [bigtableadminProjectsInstancesTablesList](#bigtableadminprojectsinstancestableslist) - Lists all tables served from a specified instance.
* [bigtableadminProjectsInstancesTablesModifyColumnFamilies](#bigtableadminprojectsinstancestablesmodifycolumnfamilies) - Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
* [bigtableadminProjectsInstancesTablesPatch](#bigtableadminprojectsinstancestablespatch) - Updates a specified table.
* [bigtableadminProjectsInstancesTablesRestore](#bigtableadminprojectsinstancestablesrestore) - Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
* [bigtableadminProjectsInstancesTablesSetIamPolicy](#bigtableadminprojectsinstancestablessetiampolicy) - Sets the access control policy on a Table resource. Replaces any existing policy.
* [bigtableadminProjectsInstancesTablesTestIamPermissions](#bigtableadminprojectsinstancestablestestiampermissions) - Returns permissions that the caller has on the specified table resource.
* [bigtableadminProjectsInstancesTablesUndelete](#bigtableadminprojectsinstancestablesundelete) - Restores a specified table which was accidentally deleted.
* [bigtableadminProjectsLocationsGet](#bigtableadminprojectslocationsget) - Gets information about a location.
* [bigtableadminProjectsLocationsList](#bigtableadminprojectslocationslist) - Lists information about the supported locations for this service.

## bigtableadminProjectsInstancesAppProfilesCreate

Creates an app profile within an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppProfile;
use \OpenAPI\OpenAPI\Models\Shared\MultiClusterRoutingUseAny;
use \OpenAPI\OpenAPI\Models\Shared\SingleClusterRouting;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesAppProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->appProfile = new AppProfile();
    $request->appProfile->description = 'nam';
    $request->appProfile->etag = 'officia';
    $request->appProfile->multiClusterRoutingUseAny = new MultiClusterRoutingUseAny();
    $request->appProfile->multiClusterRoutingUseAny->clusterIds = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->appProfile->name = 'Everett Breitenberg';
    $request->appProfile->singleClusterRouting = new SingleClusterRouting();
    $request->appProfile->singleClusterRouting->allowTransactionalWrites = false;
    $request->appProfile->singleClusterRouting->clusterId = 'modi';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->appProfileId = 'cum';
    $request->callback = 'esse';
    $request->fields = 'ipsum';
    $request->ignoreWarnings = false;
    $request->key = 'excepturi';
    $request->oauthToken = 'aspernatur';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new BigtableadminProjectsInstancesAppProfilesCreateSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesAppProfilesCreate($request, $requestSecurity);

    if ($response->appProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesAppProfilesList

Lists information about app profiles in an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesAppProfilesListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesAppProfilesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->key = 'saepe';
    $request->oauthToken = 'fuga';
    $request->pageSize = 449950;
    $request->pageToken = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new BigtableadminProjectsInstancesAppProfilesListSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesAppProfilesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesAppProfilesList($request, $requestSecurity);

    if ($response->listAppProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesClustersBackupsCopy

Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCopyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CopyBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCopySecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesClustersBackupsCopyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->copyBackupRequest = new CopyBackupRequest();
    $request->copyBackupRequest->backupId = 'ipsa';
    $request->copyBackupRequest->expireTime = 'reiciendis';
    $request->copyBackupRequest->sourceBackup = 'est';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'dolorem';
    $request->key = 'corporis';
    $request->oauthToken = 'explicabo';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new BigtableadminProjectsInstancesClustersBackupsCopySecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesClustersBackupsCopy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesClustersBackupsCreate

Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupInput;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesClustersBackupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backupInput = new BackupInput();
    $request->backupInput->encryptionInfo = new EncryptionInfoInput();
    $request->backupInput->encryptionInfo->encryptionStatus = new Status();
    $request->backupInput->encryptionInfo->encryptionStatus->code = 570197;
    $request->backupInput->encryptionInfo->encryptionStatus->details = [
        [
            'culpa' => 'doloribus',
            'sapiente' => 'architecto',
        ],
    ];
    $request->backupInput->encryptionInfo->encryptionStatus->message = 'mollitia';
    $request->backupInput->expireTime = 'dolorem';
    $request->backupInput->name = 'Carlos Ziemann';
    $request->backupInput->sourceTable = 'numquam';
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->backupId = 'molestiae';
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->oauthToken = 'quis';
    $request->parent = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new BigtableadminProjectsInstancesClustersBackupsCreateSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesClustersBackupsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesClustersBackupsList

Lists Cloud Bigtable backups. Returns both completed and pending backups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersBackupsListSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesClustersBackupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->fields = 'ipsam';
    $request->filter = 'id';
    $request->key = 'possimus';
    $request->oauthToken = 'aut';
    $request->orderBy = 'quasi';
    $request->pageSize = 622846;
    $request->pageToken = 'temporibus';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new BigtableadminProjectsInstancesClustersBackupsListSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesClustersBackupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesClustersBackupsList($request, $requestSecurity);

    if ($response->listBackupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesClustersCreate

Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClusterAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingLimits;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingTargets;
use \OpenAPI\OpenAPI\Models\Shared\ClusterDefaultStorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersCreateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersCreateSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersCreateSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesClustersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->clusterInput = new ClusterInput();
    $request->clusterInput->clusterConfig = new ClusterConfig();
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig = new ClusterAutoscalingConfig();
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingLimits = new AutoscalingLimits();
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingLimits->maxServeNodes = 468651;
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingLimits->minServeNodes = 509624;
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingTargets = new AutoscalingTargets();
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingTargets->cpuUtilizationPercent = 976762;
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingTargets->storageUtilizationGibPerNode = 55714;
    $request->clusterInput->defaultStorageType = ClusterDefaultStorageTypeEnum::SSD;
    $request->clusterInput->encryptionConfig = new EncryptionConfig();
    $request->clusterInput->encryptionConfig->kmsKeyName = 'voluptate';
    $request->clusterInput->location = 'cum';
    $request->clusterInput->name = 'Sharon Kiehn';
    $request->clusterInput->serveNodes = 120196;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->clusterId = 'dicta';
    $request->fields = 'harum';
    $request->key = 'enim';
    $request->oauthToken = 'accusamus';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new BigtableadminProjectsInstancesClustersCreateSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesClustersCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesClustersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesClustersHotTabletsList

Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersHotTabletsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersHotTabletsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesClustersHotTabletsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->endTime = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->pageSize = 93940;
    $request->pageToken = 'repudiandae';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->startTime = 'itaque';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new BigtableadminProjectsInstancesClustersHotTabletsListSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesClustersHotTabletsList($request, $requestSecurity);

    if ($response->listHotTabletsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesClustersList

Lists information about clusters in an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersListSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesClustersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'deserunt';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->pageToken = 'labore';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new BigtableadminProjectsInstancesClustersListSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesClustersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesClustersList($request, $requestSecurity);

    if ($response->listClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesClustersUpdate

Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClusterAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingLimits;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingTargets;
use \OpenAPI\OpenAPI\Models\Shared\ClusterDefaultStorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersUpdateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersUpdateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersUpdateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersUpdateSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesClustersUpdateSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesClustersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->clusterInput = new ClusterInput();
    $request->clusterInput->clusterConfig = new ClusterConfig();
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig = new ClusterAutoscalingConfig();
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingLimits = new AutoscalingLimits();
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingLimits->maxServeNodes = 20107;
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingLimits->minServeNodes = 164940;
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingTargets = new AutoscalingTargets();
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingTargets->cpuUtilizationPercent = 828940;
    $request->clusterInput->clusterConfig->clusterAutoscalingConfig->autoscalingTargets->storageUtilizationGibPerNode = 369808;
    $request->clusterInput->defaultStorageType = ClusterDefaultStorageTypeEnum::STORAGE_TYPE_UNSPECIFIED;
    $request->clusterInput->encryptionConfig = new EncryptionConfig();
    $request->clusterInput->encryptionConfig->kmsKeyName = 'fugit';
    $request->clusterInput->location = 'dolorum';
    $request->clusterInput->name = 'Eddie Prosacco';
    $request->clusterInput->serveNodes = 962189;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'sint';
    $request->key = 'aliquid';
    $request->name = 'Terence Marquardt';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'in';

    $requestSecurity = new BigtableadminProjectsInstancesClustersUpdateSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesClustersUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesClustersUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesCreate

Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateInstanceRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfig;
use \OpenAPI\OpenAPI\Models\Shared\ClusterAutoscalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingLimits;
use \OpenAPI\OpenAPI\Models\Shared\AutoscalingTargets;
use \OpenAPI\OpenAPI\Models\Shared\ClusterDefaultStorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesCreateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesCreateSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesCreateSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createInstanceRequestInput = new CreateInstanceRequestInput();
    $request->createInstanceRequestInput->clusters = [
        'maiores' => new ClusterInput(),
        'rerum' => new ClusterInput(),
        'dicta' => new ClusterInput(),
        'magnam' => new ClusterInput(),
    ];
    $request->createInstanceRequestInput->instance = new InstanceInput();
    $request->createInstanceRequestInput->instance->displayName = 'cumque';
    $request->createInstanceRequestInput->instance->labels = [
        'ea' => 'aliquid',
        'laborum' => 'accusamus',
        'non' => 'occaecati',
        'enim' => 'accusamus',
    ];
    $request->createInstanceRequestInput->instance->name = 'Abraham McKenzie';
    $request->createInstanceRequestInput->instance->type = InstanceTypeEnum::PRODUCTION;
    $request->createInstanceRequestInput->instanceId = 'deleniti';
    $request->createInstanceRequestInput->parent = 'sapiente';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->key = 'natus';
    $request->oauthToken = 'omnis';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new BigtableadminProjectsInstancesCreateSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesList

Lists information about instances in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesListSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->key = 'natus';
    $request->oauthToken = 'nobis';
    $request->pageToken = 'eum';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new BigtableadminProjectsInstancesListSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesList($request, $requestSecurity);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesCheckConsistency

Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCheckConsistencyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckConsistencyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCheckConsistencySecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesCheckConsistencyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->checkConsistencyRequest = new CheckConsistencyRequest();
    $request->checkConsistencyRequest->consistencyToken = 'excepturi';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'sint';
    $request->key = 'accusantium';
    $request->name = 'Abel O'Hara';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new BigtableadminProjectsInstancesTablesCheckConsistencySecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesCheckConsistency($request, $requestSecurity);

    if ($response->checkConsistencyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesCreate

Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateTableRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\Split;
use \OpenAPI\OpenAPI\Models\Shared\TableInput;
use \OpenAPI\OpenAPI\Models\Shared\ColumnFamily;
use \OpenAPI\OpenAPI\Models\Shared\GcRule;
use \OpenAPI\OpenAPI\Models\Shared\Intersection;
use \OpenAPI\OpenAPI\Models\Shared\Union;
use \OpenAPI\OpenAPI\Models\Shared\ColumnFamilyStats;
use \OpenAPI\OpenAPI\Models\Shared\TableGranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\RestoreInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\RestoreInfoSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableStats;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCreateSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCreateSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesCreateSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createTableRequestInput = new CreateTableRequestInput();
    $request->createTableRequestInput->initialSplits = [
        new Split(),
        new Split(),
    ];
    $request->createTableRequestInput->table = new TableInput();
    $request->createTableRequestInput->table->columnFamilies = [
        'debitis' => new ColumnFamily(),
        'eius' => new ColumnFamily(),
        'maxime' => new ColumnFamily(),
        'deleniti' => new ColumnFamily(),
    ];
    $request->createTableRequestInput->table->deletionProtection = false;
    $request->createTableRequestInput->table->granularity = TableGranularityEnum::MILLIS;
    $request->createTableRequestInput->table->name = 'Alice Bradtke';
    $request->createTableRequestInput->table->restoreInfo = new RestoreInfoInput();
    $request->createTableRequestInput->table->restoreInfo->sourceType = RestoreInfoSourceTypeEnum::BACKUP;
    $request->createTableRequestInput->table->stats = new TableStats();
    $request->createTableRequestInput->table->stats->averageCellsPerColumn = 4692.49;
    $request->createTableRequestInput->table->stats->averageColumnsPerRow = 9988.48;
    $request->createTableRequestInput->table->stats->logicalDataBytes = 'quibusdam';
    $request->createTableRequestInput->table->stats->rowCount = 'sed';
    $request->createTableRequestInput->tableId = 'saepe';
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'praesentium';
    $request->key = 'natus';
    $request->oauthToken = 'magni';
    $request->parent = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new BigtableadminProjectsInstancesTablesCreateSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesCreate($request, $requestSecurity);

    if ($response->table !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesDelete

Permanently deletes a specified table and all of its data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDeleteSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDeleteSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDeleteSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'ea';
    $request->ignoreWarnings = false;
    $request->key = 'accusantium';
    $request->name = 'Ebony Predovic';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new BigtableadminProjectsInstancesTablesDeleteSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesDropRowRange

Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDropRowRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DropRowRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDropRowRangeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesDropRowRangeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->dropRowRangeRequest = new DropRowRangeRequest();
    $request->dropRowRangeRequest->deleteAllDataFromTable = false;
    $request->dropRowRangeRequest->rowKeyPrefix = 'voluptatibus';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'aut';
    $request->key = 'cumque';
    $request->name = 'Mindy Renner';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new BigtableadminProjectsInstancesTablesDropRowRangeSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesDropRowRange($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesGenerateConsistencyToken

Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'eos' => 'perferendis',
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quam';
    $request->fields = 'dolor';
    $request->key = 'vero';
    $request->name = 'Mindy Walter';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesGenerateConsistencyToken($request, $requestSecurity);

    if ($response->generateConsistencyTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesGetIamPolicy

Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 621479;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rerum';
    $request->fields = 'adipisci';
    $request->key = 'asperiores';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->resource = 'iste';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new BigtableadminProjectsInstancesTablesGetIamPolicySecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesList

Lists all tables served from a specified instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesListSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'delectus';
    $request->key = 'quaerat';
    $request->oauthToken = 'quos';
    $request->pageSize = 398221;
    $request->pageToken = 'dolorem';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'ipsum';
    $request->view = BigtableadminProjectsInstancesTablesListViewEnum::FULL;

    $requestSecurity = new BigtableadminProjectsInstancesTablesListSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesList($request, $requestSecurity);

    if ($response->listTablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesModifyColumnFamilies

Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyColumnFamiliesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Modification;
use \OpenAPI\OpenAPI\Models\Shared\ColumnFamily;
use \OpenAPI\OpenAPI\Models\Shared\GcRule;
use \OpenAPI\OpenAPI\Models\Shared\Intersection;
use \OpenAPI\OpenAPI\Models\Shared\Union;
use \OpenAPI\OpenAPI\Models\Shared\ColumnFamilyStats;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->modifyColumnFamiliesRequest = new ModifyColumnFamiliesRequest();
    $request->modifyColumnFamiliesRequest->modifications = [
        new Modification(),
        new Modification(),
        new Modification(),
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'amet';
    $request->key = 'dolorum';
    $request->name = 'Ms. Christine Beer';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesModifyColumnFamilies($request, $requestSecurity);

    if ($response->table !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesPatch

Updates a specified table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableInput;
use \OpenAPI\OpenAPI\Models\Shared\ColumnFamily;
use \OpenAPI\OpenAPI\Models\Shared\GcRule;
use \OpenAPI\OpenAPI\Models\Shared\Intersection;
use \OpenAPI\OpenAPI\Models\Shared\Union;
use \OpenAPI\OpenAPI\Models\Shared\ColumnFamilyStats;
use \OpenAPI\OpenAPI\Models\Shared\TableGranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\RestoreInfoInput;
use \OpenAPI\OpenAPI\Models\Shared\RestoreInfoSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableStats;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesPatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesPatchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesPatchSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesPatchSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesPatchSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tableInput = new TableInput();
    $request->tableInput->columnFamilies = [
        'eos' => new ColumnFamily(),
        'atque' => new ColumnFamily(),
        'sit' => new ColumnFamily(),
    ];
    $request->tableInput->deletionProtection = false;
    $request->tableInput->granularity = TableGranularityEnum::MILLIS;
    $request->tableInput->name = 'Latoya Parisian';
    $request->tableInput->restoreInfo = new RestoreInfoInput();
    $request->tableInput->restoreInfo->sourceType = RestoreInfoSourceTypeEnum::BACKUP;
    $request->tableInput->stats = new TableStats();
    $request->tableInput->stats->averageCellsPerColumn = 5365.79;
    $request->tableInput->stats->averageColumnsPerRow = 6070.45;
    $request->tableInput->stats->logicalDataBytes = 'necessitatibus';
    $request->tableInput->stats->rowCount = 'distinctio';
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'voluptate';
    $request->key = 'id';
    $request->name = 'Mrs. Ray Collins';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->updateMask = 'saepe';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new BigtableadminProjectsInstancesTablesPatchSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesRestore

Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesRestoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RestoreTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesRestoreSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesRestoreSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesRestoreSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesRestoreSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesRestoreSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesRestoreSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesRestoreRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->restoreTableRequest = new RestoreTableRequest();
    $request->restoreTableRequest->backup = 'minima';
    $request->restoreTableRequest->tableId = 'repellendus';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'at';
    $request->key = 'quaerat';
    $request->oauthToken = 'tempora';
    $request->parent = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new BigtableadminProjectsInstancesTablesRestoreSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesRestoreSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesRestore($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesSetIamPolicy

Sets the access control policy on a Table resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
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
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'harum';
    $request->setIamPolicyRequest->policy->version = 483409;
    $request->setIamPolicyRequest->updateMask = 'ipsum';
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'tempore';
    $request->key = 'accusamus';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->resource = 'dolorem';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new BigtableadminProjectsInstancesTablesSetIamPolicySecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesTestIamPermissions

Returns permissions that the caller has on the specified table resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'expedita',
    ];
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'libero';
    $request->key = 'voluptas';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->resource = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsInstancesTablesUndelete

Restores a specified table which was accidentally deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesUndeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesUndeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesUndeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesUndeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesUndeleteSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsInstancesTablesUndeleteSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsInstancesTablesUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'pariatur' => 'soluta',
        'dicta' => 'laborum',
        'totam' => 'incidunt',
        'aspernatur' => 'dolores',
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'quam';
    $request->key = 'molestias';
    $request->name = 'Shawn Doyle';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new BigtableadminProjectsInstancesTablesUndeleteSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsInstancesTablesUndeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsInstancesTablesUndelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsLocationsGet

Gets information about a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsGetSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsLocationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'nobis';
    $request->key = 'et';
    $request->name = 'Dale Boehm';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'delectus';
    $request->view = BigtableadminProjectsLocationsGetViewEnum::NAME_ONLY;

    $requestSecurity = new BigtableadminProjectsLocationsGetSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsLocationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsLocationsGet($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminProjectsLocationsListSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'architecto';
    $request->filter = 'quae';
    $request->key = 'aut';
    $request->name = 'Percy Altenwerth';
    $request->oauthToken = 'porro';
    $request->pageSize = 984330;
    $request->pageToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new BigtableadminProjectsLocationsListSecurity();
    $requestSecurity->option1 = new BigtableadminProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigtableadminProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
