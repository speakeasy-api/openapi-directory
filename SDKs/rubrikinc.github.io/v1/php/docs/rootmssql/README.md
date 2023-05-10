# rootMssql

## Overview

SQL Server instances and databases.

### Available Operations

* [assignMssqlSlaProperties](#assignmssqlslaproperties) - Assign SLA properties to SQL Server objects
* [browseMssqlBackupFiles](#browsemssqlbackupfiles) - List snapshots and logs from a Microsoft SQL database
* [bulkUpdateMssqlDbV1](#bulkupdatemssqldbv1) - Update multiple Microsoft SQL databases
* [countMssqlDbV1](#countmssqldbv1) - Returns a count of Microsoft SQL databases
* [countMssqlInstanceV1](#countmssqlinstancev1) - Returns a count of Microsoft SQL instances
* [createDownloadMssqlBackupFiles](#createdownloadmssqlbackupfiles) - Download snapshots and logs backups from a Microsoft SQL Database
* [createDownloadMssqlBackupFilesById](#createdownloadmssqlbackupfilesbyid) - Downloads a list of snapshot and log backups from a Microsoft SQL database
* [createExportMssqlDb](#createexportmssqldb) - Export a Microsoft SQL database to a new location
* [createLogShippingConfiguration](#createlogshippingconfiguration) - Create a log shipping configuration
* [createMssqlHostConfig](#createmssqlhostconfig) - Create a SQL Server host configuration
* [createMssqlMount](#createmssqlmount) - Live Mount SQL Server database from a point in time copy
* [createMssqlUnmount](#createmssqlunmount) - Delete a Live Mount of a SQL Server database
* [createOnDemandMssqlBackup](#createondemandmssqlbackup) - Take an on-demand backup of a Microsoft SQL database
* [createOnDemandMssqlBatchBackupV1](#createondemandmssqlbatchbackupv1) - Take an on-demand backup of multiple Microsoft SQL databases
* [createOnDemandMssqlLogBackup](#createondemandmssqllogbackup) - Take an on-demand log backup for a Microsoft SQL database
* [createRestoreMssqlDb](#createrestoremssqldb) - Restore a Microsoft SQL database
* [deleteDownloadedMssqlDbRecoverableRangesV1](#deletedownloadedmssqldbrecoverablerangesv1) - Delete downloaded recoverable ranges of a Microsoft SQL database
* [deleteLogShippingConfiguration](#deletelogshippingconfiguration) - Delete a specified log shipping configuration
* [deleteMssqlDbSnapshots](#deletemssqldbsnapshots) - Delete all snapshots of a Microsoft SQL database
* [deleteMssqlHostConfig](#deletemssqlhostconfig) - Delete the SQL Server host configuration
* [downloadFromArchive](#downloadfromarchive) - Download snapshots and log backups from archival
* [getCompatibleMssqlInstancesV1](#getcompatiblemssqlinstancesv1) - Get compatible instances for the recovery of a Microsoft SQL database
* [getDefaultDbPropertiesV1](#getdefaultdbpropertiesv1) - Returns the current default properties for Microsoft SQL databases
* [getDeleteMssqlDbRecoverableRangesStatusV1](#getdeletemssqldbrecoverablerangesstatusv1) - Get the deletion status of downloaded recoverable ranges
* [getLogShippingConfiguration](#getlogshippingconfiguration) - Get a log shipping configuration
* [getMissedMssqlDbSnapshots](#getmissedmssqldbsnapshots) - Get summary information for missed snapshots of a SQL database
* [getMssqlAsyncRequestStatus](#getmssqlasyncrequeststatus) - Get details for an async request
* [getMssqlAvailabilityGroupV1](#getmssqlavailabilitygroupv1) - Returns detailed information for a Microsoft SQL availability group
* [getMssqlDb](#getmssqldb) - Get detailed information for a Microsoft SQL database
* [getMssqlDbMissedRecoverableRanges](#getmssqldbmissedrecoverableranges) - Get missed recoverable ranges of a Microsoft SQL database
* [getMssqlDbRecoverableRanges](#getmssqldbrecoverableranges) - Get recoverable ranges of a Microsoft SQL database
* [getMssqlDbSnapshot](#getmssqldbsnapshot) - Get details information about a Microsoft SQL database snapshot
* [getMssqlHierarchyChildren](#getmssqlhierarchychildren) - Get list of immediate descendant objects
* [getMssqlHierarchyDescendants](#getmssqlhierarchydescendants) - Get list of descendant objects
* [getMssqlHierarchyObject](#getmssqlhierarchyobject) - Get summary of a SQL Server hierarchy object
* [getMssqlHostConfig](#getmssqlhostconfig) - Get the configuration for a specific host
* [getMssqlInstance](#getmssqlinstance) - Get detailed information for a Microsoft SQL instance
* [getMssqlMount](#getmssqlmount) - Get detailed information for a Live Mount of a SQL Server database
* [getOnDemandMssqlBatchBackupResultV1](#getondemandmssqlbatchbackupresultv1) - Returns details for an on-demand backup of multiple Microsoft SQL databases
* [mssqlGetRestoreFilesV1](#mssqlgetrestorefilesv1) - Returns a list all database files to be restored
* [mssqlGetSnappableIdV1](#mssqlgetsnappableidv1) - Returns the snappableId for a Microsoft SQL database
* [mssqlRestoreEstimateV1](#mssqlrestoreestimatev1) - Returns a size estimate for a restore or export
* [queryLogShippingConfigurations](#querylogshippingconfigurations) - Get log shipping configurations
* [queryMssqlAvailabilityGroupV1](#querymssqlavailabilitygroupv1) - Returns summary information for Microsoft SQL availability groups
* [queryMssqlDb](#querymssqldb) - Get summary information for SQL Server databases
* [queryMssqlDbSnapshot](#querymssqldbsnapshot) - Get summary information for snapshots of a Microsoft SQL database
* [queryMssqlHostConfig](#querymssqlhostconfig) - Get the summary of SQL Server host configurations
* [queryMssqlInstance](#querymssqlinstance) - Get summary information for Microsoft SQL instances
* [queryMssqlMount](#querymssqlmount) - Get summary information for all Live Mounts SQL Server databases
* [reseedSecondary](#reseedsecondary) - Reseed a secondary database
* [updateDefaultDbPropertiesV1](#updatedefaultdbpropertiesv1) - Update the default properties for Microsoft SQL databases
* [updateLogShippingConfiguration](#updatelogshippingconfiguration) - Update a specified log shipping configuration
* [updateMssqlAvailabilityGroupV1](#updatemssqlavailabilitygroupv1) - Update a Microsoft SQL availability group
* [updateMssqlDb](#updatemssqldb) - Update a Microsoft SQL database
* [updateMssqlHostConfig](#updatemssqlhostconfig) - Update host configuration
* [updateMssqlInstance](#updatemssqlinstance) - Update a Microsoft SQL instance

## assignMssqlSlaProperties

Assigns SLA Domain properties to SQL Server objects. Hosts and Windows clusters cannot be assigned SLA Domains directly. The SLA Domains are instead applied to the SQL Server child objects within the Host or Windows Cluster object. Newly discovered SQL Server objects within a given Host or Windows Cluster object do not inherit SLA Domain properties from other child SQL Server objects with the same parent object.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\MssqlSlaDomainAssignInfo;
use \OpenAPI\OpenAPI\Models\Shared\ExistingSnapshotRetentionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MssqlSlaDomainAssignInfo();
    $request->configuredSlaDomainId = 'veritatis';
    $request->copyOnly = false;
    $request->existingSnapshotRetention = ExistingSnapshotRetentionEnum::KEEP_FOREVER;
    $request->ids = [
        'quas',
    ];
    $request->logBackupFrequencyInSeconds = 172878;
    $request->logRetentionHours = 17040;
    $request->useConfiguredDefaultLogRetention = false;

    $response = $sdk->rootMssql->assignMssqlSlaProperties($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## browseMssqlBackupFiles

When a recovery point is set, this API endpoint returns the snapshot and list of logs needed to restore the database to the recovery point. When a time range or LSN range is specified, this API endpoint returns the snapshots and logs that overlap the specified range.
Specify only a recovery point or a range. Specify only LSNs or times.
This endpoint is only used to fetch data, but uses POST instead of GET due to limitations on parameters used in the body of a GET request. The parameter set for this endpoint is shared with the download_file endpoint.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BrowseMssqlBackupFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\MssqlBackupSelection;
use \OpenAPI\OpenAPI\Models\Shared\MssqlBackupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MssqlRecoveryPoint;
use \OpenAPI\OpenAPI\Models\Shared\LsnRecoveryPoint;
use \OpenAPI\OpenAPI\Models\Shared\LegalHoldDownloadConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BrowseMssqlBackupFilesRequest();
    $request->mssqlBackupSelection = new MssqlBackupSelection();
    $request->mssqlBackupSelection->backupType = MssqlBackupTypeEnum::SNAPSHOT;
    $request->mssqlBackupSelection->endPoint = new MssqlRecoveryPoint();
    $request->mssqlBackupSelection->endPoint->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-31T10:33:01.717Z');
    $request->mssqlBackupSelection->endPoint->lsnPoint = new LsnRecoveryPoint();
    $request->mssqlBackupSelection->endPoint->lsnPoint->lsn = 'laudantium';
    $request->mssqlBackupSelection->endPoint->lsnPoint->recoveryForkGuid = 'voluptates';
    $request->mssqlBackupSelection->endPoint->timestampMs = 793909;
    $request->mssqlBackupSelection->legalHoldDownloadConfig = new LegalHoldDownloadConfig();
    $request->mssqlBackupSelection->legalHoldDownloadConfig->isLegalHoldDownload = false;
    $request->mssqlBackupSelection->recoveryPoint = new MssqlRecoveryPoint();
    $request->mssqlBackupSelection->recoveryPoint->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-30T09:42:12.301Z');
    $request->mssqlBackupSelection->recoveryPoint->lsnPoint = new LsnRecoveryPoint();
    $request->mssqlBackupSelection->recoveryPoint->lsnPoint->lsn = 'beatae';
    $request->mssqlBackupSelection->recoveryPoint->lsnPoint->recoveryForkGuid = 'quos';
    $request->mssqlBackupSelection->recoveryPoint->timestampMs = 230916;
    $request->mssqlBackupSelection->startPoint = new MssqlRecoveryPoint();
    $request->mssqlBackupSelection->startPoint->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-09T20:26:23.356Z');
    $request->mssqlBackupSelection->startPoint->lsnPoint = new LsnRecoveryPoint();
    $request->mssqlBackupSelection->startPoint->lsnPoint->lsn = 'necessitatibus';
    $request->mssqlBackupSelection->startPoint->lsnPoint->recoveryForkGuid = 'perspiciatis';
    $request->mssqlBackupSelection->startPoint->timestampMs = 380034;
    $request->id = '59eb40ec-16fa-4f75-b0b5-32a4da37cbaa';

    $response = $sdk->rootMssql->browseMssqlBackupFiles($request);

    if ($response->mssqlBackups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkUpdateMssqlDbV1

Update multiple Microsoft SQL databases with the specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\MssqlDbUpdateId;
use \OpenAPI\OpenAPI\Models\Shared\MssqlDbUpdate;
use \OpenAPI\OpenAPI\Models\Shared\MssqlScriptDetail;
use \OpenAPI\OpenAPI\Models\Shared\ScriptErrorActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new MssqlDbUpdateId(),
        new MssqlDbUpdateId(),
        new MssqlDbUpdateId(),
        new MssqlDbUpdateId(),
    ]

    $response = $sdk->rootMssql->bulkUpdateMssqlDbV1($request);

    if ($response->mssqlDbDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## countMssqlDbV1

Returns a count of Microsoft SQL databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CountMssqlDbV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CountMssqlDbV1Request();
    $request->rootId = 'magnam';

    $response = $sdk->rootMssql->countMssqlDbV1($request);

    if ($response->protectedObjectsCount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## countMssqlInstanceV1

Returns a count of all Microsoft SQL instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootMssql->countMssqlInstanceV1();

    if ($response->countResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDownloadMssqlBackupFiles

Starts an asynchronous request to download a set of backup files as a single compressed zipfile.
When a recovery point is set, this API endpoint returns the snapshot and list of logs that Rubrik CDM would use to restore the database to the recovery point. When a time range or LSN range is specified, this API endpoint returns the snapshots and logs that overlap the specified range.
Specify only a point in time or a range. Specify only LSNs or times.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateDownloadMssqlBackupFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\MssqlBackupSelection;
use \OpenAPI\OpenAPI\Models\Shared\MssqlBackupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MssqlRecoveryPoint;
use \OpenAPI\OpenAPI\Models\Shared\LsnRecoveryPoint;
use \OpenAPI\OpenAPI\Models\Shared\LegalHoldDownloadConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDownloadMssqlBackupFilesRequest();
    $request->mssqlBackupSelection = new MssqlBackupSelection();
    $request->mssqlBackupSelection->backupType = MssqlBackupTypeEnum::SNAPSHOT;
    $request->mssqlBackupSelection->endPoint = new MssqlRecoveryPoint();
    $request->mssqlBackupSelection->endPoint->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-05T16:31:35.243Z');
    $request->mssqlBackupSelection->endPoint->lsnPoint = new LsnRecoveryPoint();
    $request->mssqlBackupSelection->endPoint->lsnPoint->lsn = 'quod';
    $request->mssqlBackupSelection->endPoint->lsnPoint->recoveryForkGuid = 'quaerat';
    $request->mssqlBackupSelection->endPoint->timestampMs = 532163;
    $request->mssqlBackupSelection->legalHoldDownloadConfig = new LegalHoldDownloadConfig();
    $request->mssqlBackupSelection->legalHoldDownloadConfig->isLegalHoldDownload = false;
    $request->mssqlBackupSelection->recoveryPoint = new MssqlRecoveryPoint();
    $request->mssqlBackupSelection->recoveryPoint->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-15T12:08:44.799Z');
    $request->mssqlBackupSelection->recoveryPoint->lsnPoint = new LsnRecoveryPoint();
    $request->mssqlBackupSelection->recoveryPoint->lsnPoint->lsn = 'eligendi';
    $request->mssqlBackupSelection->recoveryPoint->lsnPoint->recoveryForkGuid = 'cupiditate';
    $request->mssqlBackupSelection->recoveryPoint->timestampMs = 733110;
    $request->mssqlBackupSelection->startPoint = new MssqlRecoveryPoint();
    $request->mssqlBackupSelection->startPoint->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-01T13:33:36.796Z');
    $request->mssqlBackupSelection->startPoint->lsnPoint = new LsnRecoveryPoint();
    $request->mssqlBackupSelection->startPoint->lsnPoint->lsn = 'at';
    $request->mssqlBackupSelection->startPoint->lsnPoint->recoveryForkGuid = 'ipsum';
    $request->mssqlBackupSelection->startPoint->timestampMs = 129270;
    $request->id = 'dafe81a8-8f44-4445-b3fe-cd47353f63c8';

    $response = $sdk->rootMssql->createDownloadMssqlBackupFiles($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDownloadMssqlBackupFilesById

Downloads a list of snapshot and log backups from a Microsoft SQL database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateDownloadMssqlBackupFilesByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\DownloadMssqlBackupFilesByIdJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\LegalHoldDownloadConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDownloadMssqlBackupFilesByIdRequest();
    $request->downloadMssqlBackupFilesByIdJobConfig = new DownloadMssqlBackupFilesByIdJobConfig();
    $request->downloadMssqlBackupFilesByIdJobConfig->items = [
        'eaque',
    ];
    $request->downloadMssqlBackupFilesByIdJobConfig->legalHoldDownloadConfig = new LegalHoldDownloadConfig();
    $request->downloadMssqlBackupFilesByIdJobConfig->legalHoldDownloadConfig->isLegalHoldDownload = false;
    $request->id = '9379aa69-cd5f-4bcf-b9da-18a7822bf958';

    $response = $sdk->rootMssql->createDownloadMssqlBackupFilesById($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExportMssqlDb

Create a request to export a Microsoft SQL database. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportMssqlDbRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportMssqlDbJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\MssqlRecoveryPoint;
use \OpenAPI\OpenAPI\Models\Shared\LsnRecoveryPoint;
use \OpenAPI\OpenAPI\Models\Shared\MssqlDbFileExportPath;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExportMssqlDbRequest();
    $request->exportMssqlDbJobConfig = new ExportMssqlDbJobConfig();
    $request->exportMssqlDbJobConfig->allowOverwrite = false;
    $request->exportMssqlDbJobConfig->finishRecovery = false;
    $request->exportMssqlDbJobConfig->maxDataStreams = 615424;
    $request->exportMssqlDbJobConfig->recoveryPoint = new MssqlRecoveryPoint();
    $request->exportMssqlDbJobConfig->recoveryPoint->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-14T07:30:52.001Z');
    $request->exportMssqlDbJobConfig->recoveryPoint->lsnPoint = new LsnRecoveryPoint();
    $request->exportMssqlDbJobConfig->recoveryPoint->lsnPoint->lsn = 'nisi';
    $request->exportMssqlDbJobConfig->recoveryPoint->lsnPoint->recoveryForkGuid = 'praesentium';
    $request->exportMssqlDbJobConfig->recoveryPoint->timestampMs = 433194;
    $request->exportMssqlDbJobConfig->targetDataFilePath = 'vitae';
    $request->exportMssqlDbJobConfig->targetDatabaseName = 'animi';
    $request->exportMssqlDbJobConfig->targetFilePaths = [
        new MssqlDbFileExportPath(),
        new MssqlDbFileExportPath(),
        new MssqlDbFileExportPath(),
        new MssqlDbFileExportPath(),
    ];
    $request->exportMssqlDbJobConfig->targetInstanceId = 'libero';
    $request->exportMssqlDbJobConfig->targetLogFilePath = 'ullam';
    $request->id = '5f9e5d75-1c9f-4e8f-b502-bfdc3450841f';

    $response = $sdk->rootMssql->createExportMssqlDb($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLogShippingConfiguration

Create a log shipping configuration between a specified primary database and a specified secondary database. The transaction logs from the primary database are regularly restored to the secondary database in order to maintain the secondary database as a point-in-time copy of the primary database. The primary database must have log backups configured, and it must be in the full or bulk-logged recovery model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateLogShippingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\MssqlLogShippingCreateConfig;
use \OpenAPI\OpenAPI\Models\Shared\MssqlLogShippingOkStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MssqlDbFileExportPath;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLogShippingConfigurationRequest();
    $request->mssqlLogShippingCreateConfig = new MssqlLogShippingCreateConfig();
    $request->mssqlLogShippingCreateConfig->maxDataStreams = 89642;
    $request->mssqlLogShippingCreateConfig->shouldDisconnectStandbyUsers = false;
    $request->mssqlLogShippingCreateConfig->state = MssqlLogShippingOkStateEnum::RESTORING;
    $request->mssqlLogShippingCreateConfig->targetDataFilePath = 'autem';
    $request->mssqlLogShippingCreateConfig->targetDatabaseName = 'dolore';
    $request->mssqlLogShippingCreateConfig->targetFilePaths = [
        new MssqlDbFileExportPath(),
        new MssqlDbFileExportPath(),
    ];
    $request->mssqlLogShippingCreateConfig->targetInstanceId = 'nostrum';
    $request->mssqlLogShippingCreateConfig->targetLogFilePath = 'ex';
    $request->id = '379f3fb2-7e21-4f86-a657-b36fc6b9f587';

    $response = $sdk->rootMssql->createLogShippingConfiguration($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMssqlHostConfig

Creates a SQL Server host configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\MssqlHostConfigurationWithHostId;
use \OpenAPI\OpenAPI\Models\Shared\HostConfigurationPropertyEnabledEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MssqlHostConfigurationWithHostId();
    $request->enableDatabaseBatchSnapshots = HostConfigurationPropertyEnabledEnum::DEFAULT;
    $request->enableGroupFetch = HostConfigurationPropertyEnabledEnum::DEFAULT;
    $request->enableVdi = HostConfigurationPropertyEnabledEnum::ENABLED;
    $request->enableVdiDb = HostConfigurationPropertyEnabledEnum::ENABLED;
    $request->fileRestoreReadParallelism = 345746;
    $request->fileRestoreWriteParallelism = 793402;
    $request->fileTransferParallelism = 400510;
    $request->hostId = 'quam';
    $request->mssqlDefaultMaxDataStreamsPerDatabase = 410916;
    $request->physicalHostDatabaseRestoreThrottleMaxRefCount = 256941;
    $request->physicalHostLogBackupThrottleMaxRefCount = 103253;
    $request->throttlePhysicalHostMaxRefCount = 686470;

    $response = $sdk->rootMssql->createMssqlHostConfig($request);

    if ($response->mssqlHostConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMssqlMount

Create an asynchronous request to create a Live Mount SQL Server database. Poll the task status by using /mssql/request/{id}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateMssqlMountRequest;
use \OpenAPI\OpenAPI\Models\Shared\MountMssqlDbConfig;
use \OpenAPI\OpenAPI\Models\Shared\MssqlDatabaseRecoveryModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\MssqlRecoveryPoint;
use \OpenAPI\OpenAPI\Models\Shared\LsnRecoveryPoint;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMssqlMountRequest();
    $request->mountMssqlDbConfig = new MountMssqlDbConfig();
    $request->mountMssqlDbConfig->mountedDatabaseName = 'totam';
    $request->mountMssqlDbConfig->recoveryModel = MssqlDatabaseRecoveryModelEnum::SIMPLE;
    $request->mountMssqlDbConfig->recoveryPoint = new MssqlRecoveryPoint();
    $request->mountMssqlDbConfig->recoveryPoint->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-06T00:26:22.732Z');
    $request->mountMssqlDbConfig->recoveryPoint->lsnPoint = new LsnRecoveryPoint();
    $request->mountMssqlDbConfig->recoveryPoint->lsnPoint->lsn = 'officiis';
    $request->mountMssqlDbConfig->recoveryPoint->lsnPoint->recoveryForkGuid = 'veniam';
    $request->mountMssqlDbConfig->recoveryPoint->timestampMs = 61844;
    $request->mountMssqlDbConfig->targetInstanceId = 'dolore';
    $request->id = '7b4c21cc-b423-4abc-9c91-faabdd88e71f';

    $response = $sdk->rootMssql->createMssqlMount($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMssqlUnmount

Create an async request to delete a Live Mount of a SQL Server database. Poll the task status by using /mssql/request/{id}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateMssqlUnmountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMssqlUnmountRequest();
    $request->force = false;
    $request->id = '6c48252d-7771-4e7f-9074-009ef8d29de1';

    $response = $sdk->rootMssql->createMssqlUnmount($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOnDemandMssqlBackup

Take an on-demand backup of a Microsoft SQL database. The forceFullSnapshot property can be set to true to force a full snapshot. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateOnDemandMssqlBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\MssqlBackupJobConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOnDemandMssqlBackupRequest();
    $request->mssqlBackupJobConfig = new MssqlBackupJobConfig();
    $request->mssqlBackupJobConfig->forceFullSnapshot = false;
    $request->mssqlBackupJobConfig->slaId = 'facere';
    $request->id = 'd7097b5d-a08c-457f-a6c7-8a216e19bafe';

    $response = $sdk->rootMssql->createOnDemandMssqlBackup($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOnDemandMssqlBatchBackupV1

Take an on-demand backup of one or more Microsoft SQL databases. Set the forceFullSnapshot property to true to force a full snapshot for every database that is specified. Only one snapshot will be taken for each database, even if a database is included multiple times in the fields of the request body. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\MssqlBatchBackupJobConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MssqlBatchBackupJobConfig();
    $request->availabilityGroupIds = [
        'officia',
        'laboriosam',
        'illo',
        'cupiditate',
    ];
    $request->databaseIds = [
        'aliquam',
    ];
    $request->forceFullSnapshot = false;
    $request->hostIds = [
        'atque',
        'dicta',
        'magnam',
    ];
    $request->instanceIds = [
        'cum',
    ];
    $request->slaId = 'suscipit';
    $request->windowsClusterIds = [
        'maiores',
        'delectus',
    ];

    $response = $sdk->rootMssql->createOnDemandMssqlBatchBackupV1($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOnDemandMssqlLogBackup

Take an on-demand log backup for a Microsoft SQL database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateOnDemandMssqlLogBackupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOnDemandMssqlLogBackupRequest();
    $request->id = '8ae170ef-03b5-4f37-a4aa-868555966732';

    $response = $sdk->rootMssql->createOnDemandMssqlLogBackup($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRestoreMssqlDb

Create a request to restore a SQL Server database. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateRestoreMssqlDbRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreMssqlDbJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\MssqlRecoveryPoint;
use \OpenAPI\OpenAPI\Models\Shared\LsnRecoveryPoint;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRestoreMssqlDbRequest();
    $request->restoreMssqlDbJobConfig = new RestoreMssqlDbJobConfig();
    $request->restoreMssqlDbJobConfig->finishRecovery = false;
    $request->restoreMssqlDbJobConfig->maxDataStreams = 656605;
    $request->restoreMssqlDbJobConfig->recoveryPoint = new MssqlRecoveryPoint();
    $request->restoreMssqlDbJobConfig->recoveryPoint->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-03T02:18:47.135Z');
    $request->restoreMssqlDbJobConfig->recoveryPoint->lsnPoint = new LsnRecoveryPoint();
    $request->restoreMssqlDbJobConfig->recoveryPoint->lsnPoint->lsn = 'temporibus';
    $request->restoreMssqlDbJobConfig->recoveryPoint->lsnPoint->recoveryForkGuid = 'porro';
    $request->restoreMssqlDbJobConfig->recoveryPoint->timestampMs = 734292;
    $request->id = '6682cb70-f8cf-4d5f-b6e9-1b9a9f74846e';

    $response = $sdk->rootMssql->createRestoreMssqlDb($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDownloadedMssqlDbRecoverableRangesV1

Deletes all local snapshots and logs that have previously been downloaded. Provide a begin or end time to delete only the downloaded snapshots and logs that fall within this time frame. The time is relative to when the snapshot or log backup was originally taken, not downloaded. Parts of the window may not be deleted if certain log files must be kept to preserve times outside the window. Data is deleted in the background. To check the status of the deletion, poll /mssql/db/recoverable_range/download/{id}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDownloadedMssqlDbRecoverableRangesV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDownloadedMssqlDbRecoverableRangesV1Request();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T06:04:56.918Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-18T18:35:44.559Z');
    $request->id = '09db0536-d9e7-45ca-806f-5392c11a25a8';

    $response = $sdk->rootMssql->deleteDownloadedMssqlDbRecoverableRangesV1($request);

    if ($response->jobScheduledResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLogShippingConfiguration

Deletes the specified log shipping configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLogShippingConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLogShippingConfigurationRequest();
    $request->deleteSecondaryDatabase = false;
    $request->id = 'bf92f974-28ad-49a9-b8bf-8221125359d9';

    $response = $sdk->rootMssql->deleteLogShippingConfiguration($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMssqlDbSnapshots

Deletes all snapshots of a Microsoft SQL database. The database must be unprotected for the operation to succeed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMssqlDbSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMssqlDbSnapshotsRequest();
    $request->id = '8387f7a7-9cd7-42cd-a484-da21729f2ac4';

    $response = $sdk->rootMssql->deleteMssqlDbSnapshots($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMssqlHostConfig

Deletes the SQL Server host configuration. The host falls back to use values from the global configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMssqlHostConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMssqlHostConfigRequest();
    $request->hostId = 'inventore';

    $response = $sdk->rootMssql->deleteMssqlHostConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadFromArchive

Starts an asynchronous request to download snapshots and logs from archival for a given database and recovery point.
If the specified point in time is already available locally, this endpoint throws an error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DownloadFromArchiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\MssqlDownloadFromArchiveConfig;
use \OpenAPI\OpenAPI\Models\Shared\MssqlRecoveryPoint;
use \OpenAPI\OpenAPI\Models\Shared\LsnRecoveryPoint;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadFromArchiveRequest();
    $request->mssqlDownloadFromArchiveConfig = new MssqlDownloadFromArchiveConfig();
    $request->mssqlDownloadFromArchiveConfig->recoveryPoint = new MssqlRecoveryPoint();
    $request->mssqlDownloadFromArchiveConfig->recoveryPoint->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-29T16:12:01.549Z');
    $request->mssqlDownloadFromArchiveConfig->recoveryPoint->lsnPoint = new LsnRecoveryPoint();
    $request->mssqlDownloadFromArchiveConfig->recoveryPoint->lsnPoint->lsn = 'exercitationem';
    $request->mssqlDownloadFromArchiveConfig->recoveryPoint->lsnPoint->recoveryForkGuid = 'nihil';
    $request->mssqlDownloadFromArchiveConfig->recoveryPoint->timestampMs = 154723;
    $request->id = '5f1169ac-1e41-4d8a-a3c2-3e34f2dfa4a1';

    $response = $sdk->rootMssql->downloadFromArchive($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompatibleMssqlInstancesV1

Returns all compatible instances for export for the specified recovery time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetCompatibleMssqlInstancesV1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetCompatibleMssqlInstancesV1RecoveryTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompatibleMssqlInstancesV1Request();
    $request->id = '97f6de92-2151-4fe1-b120-99853e9f543d';
    $request->recoveryTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T18:48:48.082Z');
    $request->recoveryType = GetCompatibleMssqlInstancesV1RecoveryTypeEnum::MOUNT;

    $response = $sdk->rootMssql->getCompatibleMssqlInstancesV1($request);

    if ($response->mssqlInstanceSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDefaultDbPropertiesV1

The default properties are Log Backup Frequency (in seconds), Log Retention Time (in hours) and CBT status. New databases added to the Rubrik cluster are provided the log backup frequency value and log backup retention value by default. New hosts added to the Rubrik cluster are provided the CBT status by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootMssql->getDefaultDbPropertiesV1();

    if ($response->mssqlDbDefaults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteMssqlDbRecoverableRangesStatusV1

Get the details of the progress made in deleting recoverable ranges. The recoverable ranges to delete are those specified by the DELETE request to /mssql/db/{id}/recoverable_range/download which yielded the response with the job id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetDeleteMssqlDbRecoverableRangesStatusV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeleteMssqlDbRecoverableRangesStatusV1Request();
    $request->id = '439ee224-4604-443b-8154-188c2f56e85d';

    $response = $sdk->rootMssql->getDeleteMssqlDbRecoverableRangesStatusV1($request);

    if ($response->internalJobInstanceDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLogShippingConfiguration

Retrieves a particular log shipping configuration with all the details of the configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetLogShippingConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLogShippingConfigurationRequest();
    $request->id = 'a7832eab-d617-4c3b-8d51-a44bf01bad87';

    $response = $sdk->rootMssql->getLogShippingConfiguration($request);

    if ($response->mssqlLogShippingDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMissedMssqlDbSnapshots

Returns a list of summary information for the missed snapshots of a Microsoft SQL database, including the time of day and the locations where the snapshot was missed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMissedMssqlDbSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMissedMssqlDbSnapshotsRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T11:16:11.665Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-02T01:50:08.002Z');
    $request->id = '6082bfbd-c41f-4f5d-8e2a-e4fb5cb35d17';

    $response = $sdk->rootMssql->getMissedMssqlDbSnapshots($request);

    if ($response->missedSnapshotListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlAsyncRequestStatus

Returns the task object for an async request related to SQL Server databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlAsyncRequestStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlAsyncRequestStatusRequest();
    $request->id = '638f1edb-7835-49ec-85cb-860f8cd580ba';

    $response = $sdk->rootMssql->getMssqlAsyncRequestStatus($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlAvailabilityGroupV1

Returns a detailed view of a Microsoft SQL availability group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlAvailabilityGroupV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlAvailabilityGroupV1Request();
    $request->id = '73810e4f-e444-4729-bcd3-b1dd3bbce247';

    $response = $sdk->rootMssql->getMssqlAvailabilityGroupV1($request);

    if ($response->mssqlAvailabilityGroupSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlDb

Returns a detailed view of a Microsoft SQL database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlDbRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlDbRequest();
    $request->id = 'b7684eff-5012-46d7-9cff-bd0eb74b8421';

    $response = $sdk->rootMssql->getMssqlDb($request);

    if ($response->mssqlDbDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlDbMissedRecoverableRanges

Retrieve a list of missed recoverable ranges for a Microsoft SQL database. For each run of one type of error, the first and last occurrence of the error are given.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlDbMissedRecoverableRangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlDbMissedRecoverableRangesRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T04:54:12.953Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T06:15:45.065Z');
    $request->id = '44bd3c43-159d-433e-9953-c001139863aa';

    $response = $sdk->rootMssql->getMssqlDbMissedRecoverableRanges($request);

    if ($response->mssqlMissedRecoverableRangeListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlDbRecoverableRanges

Retrieve the recoverable ranges for a specified Microsoft SQL database. A begin and/or end timestamp can be provided to retrieve only the ranges that fall within the window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlDbRecoverableRangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlDbRecoverableRangesRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-29T14:18:38.231Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-20T07:02:47.762Z');
    $request->id = 'c31cc2f1-fcb5-41c9-a41f-fbe9cbd795ee';

    $response = $sdk->rootMssql->getMssqlDbRecoverableRanges($request);

    if ($response->mssqlRecoverableRangeListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlDbSnapshot

Returns detailed information about a Microsoft SQL database snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlDbSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlDbSnapshotRequest();
    $request->id = '65e076cc-7abf-4616-aa5c-71641934b90f';

    $response = $sdk->rootMssql->getMssqlDbSnapshot($request);

    if ($response->mssqlDbSnapshotDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlHierarchyChildren

Retrieve the list of immediate descendant objects for the specified parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyChildrenRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyChildrenObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyChildrenSLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyChildrenSnappableStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyChildrenSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyChildrenSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlHierarchyChildrenRequest();
    $request->effectiveSlaDomainId = 'aspernatur';
    $request->hasInstances = false;
    $request->id = 'e09d19d2-fc2f-49e2-a105-944b935d237a';
    $request->isClustered = false;
    $request->isLiveMount = false;
    $request->isLogShippingSecondary = false;
    $request->isRelic = false;
    $request->limit = 495096;
    $request->name = 'Ms. Nettie McCullough';
    $request->objectType = [
        GetMssqlHierarchyChildrenObjectTypeEnum::MSSQL_AVAILABILITY_GROUP,
        GetMssqlHierarchyChildrenObjectTypeEnum::MSSQL_INSTANCE,
        GetMssqlHierarchyChildrenObjectTypeEnum::WINDOWS_CLUSTER,
    ];
    $request->offset = 930306;
    $request->primaryClusterId = 'assumenda';
    $request->slaAssignment = GetMssqlHierarchyChildrenSLAAssignmentEnum::DERIVED;
    $request->snappableStatus = GetMssqlHierarchyChildrenSnappableStatusEnum::PROTECTABLE;
    $request->sortBy = GetMssqlHierarchyChildrenSortByEnum::LOG_BACKUP_RETENTION_HOURS;
    $request->sortOrder = GetMssqlHierarchyChildrenSortOrderEnum::DESC;

    $response = $sdk->rootMssql->getMssqlHierarchyChildren($request);

    if ($response->mssqlHierarchyObjectSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlHierarchyDescendants

Retrieve the list of descendant objects for the specified parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyDescendantsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyDescendantsObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyDescendantsSLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyDescendantsSnappableStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyDescendantsSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyDescendantsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlHierarchyDescendantsRequest();
    $request->effectiveSlaDomainId = 'optio';
    $request->hasInstances = false;
    $request->id = 'b7537cd9-222c-49ff-9749-1aabfa2e761f';
    $request->isClustered = false;
    $request->isLiveMount = false;
    $request->isLogShippingSecondary = false;
    $request->isRelic = false;
    $request->limit = 34109;
    $request->name = 'Rex Goodwin';
    $request->objectType = [
        GetMssqlHierarchyDescendantsObjectTypeEnum::MSSQL_INSTANCE,
        GetMssqlHierarchyDescendantsObjectTypeEnum::MSSQL_AVAILABILITY_GROUP,
    ];
    $request->offset = 970848;
    $request->primaryClusterId = 'dicta';
    $request->slaAssignment = GetMssqlHierarchyDescendantsSLAAssignmentEnum::DERIVED;
    $request->snappableStatus = GetMssqlHierarchyDescendantsSnappableStatusEnum::PROTECTABLE;
    $request->sortBy = GetMssqlHierarchyDescendantsSortByEnum::DESCENDANT_COUNT_MSSQL_INSTANCE;
    $request->sortOrder = GetMssqlHierarchyDescendantsSortOrderEnum::ASC;

    $response = $sdk->rootMssql->getMssqlHierarchyDescendants($request);

    if ($response->mssqlHierarchyObjectSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlHierarchyObject

Retrieve details for the specified object in the SQL Server hierarchy.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHierarchyObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlHierarchyObjectRequest();
    $request->id = 'e6899f0c-2001-4e22-8d55-cc0584a184d7';

    $response = $sdk->rootMssql->getMssqlHierarchyObject($request);

    if ($response->mssqlHierarchyObjectSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlHostConfig

Returns the configuration for the specified SQL Server host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlHostConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlHostConfigRequest();
    $request->hostId = 'voluptas';

    $response = $sdk->rootMssql->getMssqlHostConfig($request);

    if ($response->mssqlHostConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlInstance

Returns a detailed view of a Microsoft SQL instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlInstanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlInstanceRequest();
    $request->id = 'd971fc82-0c65-4b03-bbb8-e0cc885187e4';

    $response = $sdk->rootMssql->getMssqlInstance($request);

    if ($response->mssqlInstanceSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMssqlMount

Returns detailed information for the specified Live Mount of a SQL Server database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMssqlMountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMssqlMountRequest();
    $request->id = 'de04af28-c5dd-4db4-aaa1-cfd6d828da01';

    $response = $sdk->rootMssql->getMssqlMount($request);

    if ($response->mssqlMountDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOnDemandMssqlBatchBackupResultV1

Returns the details for an on-demand backup of multiple Microsoft SQL databases. This only returns details for requests that have finished successfully. To check the status of the request, poll /mssql/request/{id}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetOnDemandMssqlBatchBackupResultV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOnDemandMssqlBatchBackupResultV1Request();
    $request->id = '31911296-4664-45c1-981f-29042f569b7a';

    $response = $sdk->rootMssql->getOnDemandMssqlBatchBackupResultV1($request);

    if ($response->mssqlBatchBackupSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mssqlGetRestoreFilesV1

Provides a list of database files to be restored for the specified restore or export operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\MssqlGetRestoreFilesV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MssqlGetRestoreFilesV1Request();
    $request->id = 'ff0ea221-6cbe-4071-bc16-3e279a3b084d';
    $request->lsn = 'dolorum';
    $request->recoveryForkGuid = 'omnis';
    $request->time = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-03T05:56:18.507Z');

    $response = $sdk->rootMssql->mssqlGetRestoreFilesV1($request);

    if ($response->mssqlRestoreFiles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mssqlGetSnappableIdV1

Returns the snappableId for a Microsoft SQL database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\MssqlGetSnappableIdV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MssqlGetSnappableIdV1Request();
    $request->id = '57d04f40-847a-4742-9844-96cbdeecf6b9';

    $response = $sdk->rootMssql->mssqlGetSnappableIdV1($request);

    if ($response->mssqlSnappableId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mssqlRestoreEstimateV1

Provides an estimate of resources needed for the specified restore or export operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\MssqlRestoreEstimateV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MssqlRestoreEstimateV1Request();
    $request->id = '9bc63562-ebfd-4f55-8294-c060b06a1287';
    $request->lsn = 'voluptate';
    $request->recoveryForkGuid = 'autem';
    $request->time = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-31T06:16:27.327Z');

    $response = $sdk->rootMssql->mssqlRestoreEstimateV1($request);

    if ($response->mssqlRestoreEstimateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryLogShippingConfigurations

Retrieves all log shipping configuration objects. Results can be filtered and sorted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryLogShippingConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryLogShippingConfigurationsSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLogShippingConfigurationsSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLogShippingConfigurationsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryLogShippingConfigurationsRequest();
    $request->limit = 892114;
    $request->location = 'earum';
    $request->offset = 382853;
    $request->primaryDatabaseId = 'assumenda';
    $request->primaryDatabaseName = 'doloremque';
    $request->secondaryDatabaseName = 'porro';
    $request->sortBy = QueryLogShippingConfigurationsSortByEnum::PRIMARY_DATABASE_NAME;
    $request->sortOrder = QueryLogShippingConfigurationsSortOrderEnum::DESC;
    $request->status = QueryLogShippingConfigurationsStatusEnum::BROKEN;

    $response = $sdk->rootMssql->queryLogShippingConfigurations($request);

    if ($response->mssqlLogShippingSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryMssqlAvailabilityGroupV1

Returns a list of summary information for Microsoft SQL availability groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlAvailabilityGroupV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryMssqlAvailabilityGroupV1Request();
    $request->primaryClusterId = 'itaque';

    $response = $sdk->rootMssql->queryMssqlAvailabilityGroupV1($request);

    if ($response->mssqlAvailabilityGroupSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryMssqlDb

Returns a list of summary information for Microsoft SQL databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlDbRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlDbSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlDbSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryMssqlDbRequest();
    $request->availabilityGroupId = 'nulla';
    $request->effectiveSlaDomainId = 'excepturi';
    $request->includeBackupTaskInfo = false;
    $request->instanceId = 'quod';
    $request->isLiveMount = false;
    $request->isLogShippingSecondary = false;
    $request->isRelic = false;
    $request->limit = 447610;
    $request->name = 'Paulette Smitham';
    $request->offset = 285544;
    $request->primaryClusterId = 'nostrum';
    $request->slaAssignment = 'dignissimos';
    $request->sortBy = QueryMssqlDbSortByEnum::COPY_ONLY;
    $request->sortOrder = QueryMssqlDbSortOrderEnum::ASC;

    $response = $sdk->rootMssql->queryMssqlDb($request);

    if ($response->mssqlDbSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryMssqlDbSnapshot

Returns a list of summary information for snapshots of a Microsoft SQL database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlDbSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryMssqlDbSnapshotRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-03T12:53:10.202Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-31T05:08:29.576Z');
    $request->id = 'e870d3c5-a1f9-4c24-ac7b-66a1f30c73df';

    $response = $sdk->rootMssql->queryMssqlDbSnapshot($request);

    if ($response->mssqlDbSnapshotSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryMssqlHostConfig

Returns a list of customized SQL Server host configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlHostConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryMssqlHostConfigRequest();
    $request->hostId = [
        'quidem',
        'ea',
    ];

    $response = $sdk->rootMssql->queryMssqlHostConfig($request);

    if ($response->mssqlHostConfigurationWithHostIdListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryMssqlInstance

Returns a list of summary information for Microsoft SQL instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlInstanceSnappableStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryMssqlInstanceRequest();
    $request->primaryClusterId = 'molestiae';
    $request->rootId = 'vitae';
    $request->snappableStatus = QueryMssqlInstanceSnappableStatusEnum::PROTECTABLE;

    $response = $sdk->rootMssql->queryMssqlInstance($request);

    if ($response->mssqlInstanceSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryMssqlMount

Returns a list with summary information for all Live Mount SQL Server databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlMountRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlMountSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryMssqlMountSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryMssqlMountRequest();
    $request->limit = 570437;
    $request->mountedDatabaseName = 'voluptatum';
    $request->offset = 610873;
    $request->sortBy = QueryMssqlMountSortByEnum::SOURCE_DATABASE_NAME;
    $request->sortOrder = QueryMssqlMountSortOrderEnum::DESC;
    $request->sourceDatabaseId = 'magnam';
    $request->sourceDatabaseName = 'consequuntur';
    $request->targetInstanceId = 'est';

    $response = $sdk->rootMssql->queryMssqlMount($request);

    if ($response->mssqlMountSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reseedSecondary

Starts an asynchronous job to reseed a secondary database. Reseeding restores the data in the secondary database based on a log shipping configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\ReseedSecondaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\MssqlLogShippingTargetStateOptions;
use \OpenAPI\OpenAPI\Models\Shared\MssqlLogShippingOkStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReseedSecondaryRequest();
    $request->mssqlLogShippingTargetStateOptions = new MssqlLogShippingTargetStateOptions();
    $request->mssqlLogShippingTargetStateOptions->shouldDisconnectStandbyUsers = false;
    $request->mssqlLogShippingTargetStateOptions->state = MssqlLogShippingOkStateEnum::RESTORING;
    $request->id = 'bb438d85-b260-4591-9745-e3c2059c9c3f';

    $response = $sdk->rootMssql->reseedSecondary($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDefaultDbPropertiesV1

The default properties are Log Backup Frequency (in seconds), Log Retention Time (in hours) and CBT status. New databases added to the Rubrik cluster are provided the log backup frequency value and log backup retention value by default. New hosts added to the Rubrik cluster are provided the CBT status by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\MssqlDbDefaultsUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MssqlDbDefaultsUpdate();
    $request->cbtStatus = false;
    $request->logBackupFrequencyInSeconds = 334544;
    $request->logRetentionTimeInHours = 419685;

    $response = $sdk->rootMssql->updateDefaultDbPropertiesV1($request);

    if ($response->mssqlDbDefaults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLogShippingConfiguration

Updates a specified log shipping configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLogShippingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\MssqlLogShippingTargetStateOptions;
use \OpenAPI\OpenAPI\Models\Shared\MssqlLogShippingOkStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLogShippingConfigurationRequest();
    $request->mssqlLogShippingTargetStateOptions = new MssqlLogShippingTargetStateOptions();
    $request->mssqlLogShippingTargetStateOptions->shouldDisconnectStandbyUsers = false;
    $request->mssqlLogShippingTargetStateOptions->state = MssqlLogShippingOkStateEnum::RESTORING;
    $request->id = 'e0e25276-5b1d-462f-8dac-e1f01216ce22';

    $response = $sdk->rootMssql->updateLogShippingConfiguration($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMssqlAvailabilityGroupV1

Update a Microsoft SQL availability group with the specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMssqlAvailabilityGroupV1Request;
use \OpenAPI\OpenAPI\Models\Shared\MssqlSlaPatchProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMssqlAvailabilityGroupV1Request();
    $request->mssqlSlaPatchProperties = new MssqlSlaPatchProperties();
    $request->mssqlSlaPatchProperties->configuredSlaDomainId = 'sequi';
    $request->mssqlSlaPatchProperties->copyOnly = false;
    $request->mssqlSlaPatchProperties->logBackupFrequencyInSeconds = 572483;
    $request->mssqlSlaPatchProperties->logRetentionHours = 882036;
    $request->mssqlSlaPatchProperties->useConfiguredDefaultLogRetention = false;
    $request->id = '8f25cd0d-19d9-459f-839e-39266cbd95f7';

    $response = $sdk->rootMssql->updateMssqlAvailabilityGroupV1($request);

    if ($response->mssqlAvailabilityGroupSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMssqlDb

Update a Microsoft SQL database with the specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMssqlDbRequest;
use \OpenAPI\OpenAPI\Models\Shared\MssqlDbUpdate;
use \OpenAPI\OpenAPI\Models\Shared\MssqlScriptDetail;
use \OpenAPI\OpenAPI\Models\Shared\ScriptErrorActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMssqlDbRequest();
    $request->mssqlDbUpdate = new MssqlDbUpdate();
    $request->mssqlDbUpdate->configuredSlaDomainId = 'deserunt';
    $request->mssqlDbUpdate->copyOnly = false;
    $request->mssqlDbUpdate->isPaused = false;
    $request->mssqlDbUpdate->logBackupFrequencyInSeconds = 675677;
    $request->mssqlDbUpdate->logRetentionHours = 141314;
    $request->mssqlDbUpdate->maxDataStreams = 698088;
    $request->mssqlDbUpdate->postBackupScript = new MssqlScriptDetail();
    $request->mssqlDbUpdate->postBackupScript->scriptErrorAction = ScriptErrorActionEnum::ABORT;
    $request->mssqlDbUpdate->postBackupScript->scriptPath = 'magnam';
    $request->mssqlDbUpdate->postBackupScript->timeoutMs = 93067;
    $request->mssqlDbUpdate->preBackupScript = new MssqlScriptDetail();
    $request->mssqlDbUpdate->preBackupScript->scriptErrorAction = ScriptErrorActionEnum::ABORT;
    $request->mssqlDbUpdate->preBackupScript->scriptPath = 'ratione';
    $request->mssqlDbUpdate->preBackupScript->timeoutMs = 391105;
    $request->mssqlDbUpdate->shouldForceFull = false;
    $request->mssqlDbUpdate->useConfiguredDefaultLogRetention = false;
    $request->id = '95d1e669-8fcc-4459-a217-c29776763342';

    $response = $sdk->rootMssql->updateMssqlDb($request);

    if ($response->mssqlDbDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMssqlHostConfig

Updates the configuration for a specified host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMssqlHostConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\MssqlHostConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HostConfigurationPropertyEnabledEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMssqlHostConfigRequest();
    $request->mssqlHostConfiguration = new MssqlHostConfiguration();
    $request->mssqlHostConfiguration->enableDatabaseBatchSnapshots = HostConfigurationPropertyEnabledEnum::ENABLED;
    $request->mssqlHostConfiguration->enableGroupFetch = HostConfigurationPropertyEnabledEnum::ENABLED;
    $request->mssqlHostConfiguration->enableVdi = HostConfigurationPropertyEnabledEnum::ENABLED;
    $request->mssqlHostConfiguration->enableVdiDb = HostConfigurationPropertyEnabledEnum::ENABLED;
    $request->mssqlHostConfiguration->fileRestoreReadParallelism = 541468;
    $request->mssqlHostConfiguration->fileRestoreWriteParallelism = 734296;
    $request->mssqlHostConfiguration->fileTransferParallelism = 989913;
    $request->mssqlHostConfiguration->mssqlDefaultMaxDataStreamsPerDatabase = 716975;
    $request->mssqlHostConfiguration->physicalHostDatabaseRestoreThrottleMaxRefCount = 328217;
    $request->mssqlHostConfiguration->physicalHostLogBackupThrottleMaxRefCount = 584483;
    $request->mssqlHostConfiguration->throttlePhysicalHostMaxRefCount = 477679;
    $request->hostId = 'et';

    $response = $sdk->rootMssql->updateMssqlHostConfig($request);

    if ($response->mssqlHostConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMssqlInstance

Update a Microsoft SQL instance with specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMssqlInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\MssqlSlaPatchProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMssqlInstanceRequest();
    $request->mssqlSlaPatchProperties = new MssqlSlaPatchProperties();
    $request->mssqlSlaPatchProperties->configuredSlaDomainId = 'accusamus';
    $request->mssqlSlaPatchProperties->copyOnly = false;
    $request->mssqlSlaPatchProperties->logBackupFrequencyInSeconds = 566262;
    $request->mssqlSlaPatchProperties->logRetentionHours = 534533;
    $request->mssqlSlaPatchProperties->useConfiguredDefaultLogRetention = false;
    $request->id = '19055738-9ced-4bac-bfda-39594d66bc2a';

    $response = $sdk->rootMssql->updateMssqlInstance($request);

    if ($response->mssqlInstanceSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
