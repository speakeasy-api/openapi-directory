# rootFileset

## Overview

File system filesets.

### Available Operations

* [browseFilesetSnapshot](#browsefilesetsnapshot) - Lists all files and directories in a given path
* [createDownloadFilesetSnapshotFromCloud](#createdownloadfilesetsnapshotfromcloud) - Create a download fileset snapshot from archival request
* [createFileset](#createfileset) - Create one fileset for a host
* [createFilesetBackupJob](#createfilesetbackupjob) - Initiate an on-demand backup for a fileset
* [createFilesetDownloadFileJob](#createfilesetdownloadfilejob) - Create a file download job from a fileset backup
* [createFilesetExportFileJob](#createfilesetexportfilejob) - Create export job
* [createFilesetRestoreFileJob](#createfilesetrestorefilejob) - Create restore job
* [deleteFileset](#deletefileset) - Delete a fileset
* [deleteFilesetSnapshot](#deletefilesetsnapshot) - Delete a fileset snapshot
* [deleteFilesetSnapshots](#deletefilesetsnapshots) - Delete all snapshots of a fileset
* [getFileset](#getfileset) - Get information for a single fileset
* [getFilesetAsyncRequestStatus](#getfilesetasyncrequeststatus) - Get details about an async request
* [getFilesetSnapshot](#getfilesetsnapshot) - Get information for a fileset snapshot
* [getMissedFilesetSnapshots](#getmissedfilesetsnapshots) - Get missed snapshots for a fileset
* [queryFileset](#queryfileset) - Get summary information for all filesets
* [searchFileset](#searchfileset) - Search for a file within the fileset
* [updateFileset](#updatefileset) - Update a Fileset

## browseFilesetSnapshot

Lists all files and directories in a given path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BrowseFilesetSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BrowseFilesetSnapshotRequest();
    $request->id = 'e243cf78-9ffa-4fed-a53e-5ae6e0ac184c';
    $request->limit = 177929;
    $request->offset = 748023;
    $request->path = 'natus';

    $response = $sdk->rootFileset->browseFilesetSnapshot($request);

    if ($response->browseResponseListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDownloadFilesetSnapshotFromCloud

Create a download fileset snapshot from archival request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateDownloadFilesetSnapshotFromCloudRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDownloadFilesetSnapshotFromCloudRequest();
    $request->id = 'c247c883-73a4-40e1-942f-32e55055756f';

    $response = $sdk->rootFileset->createDownloadFilesetSnapshotFromCloud($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFileset

Create a fileset for a network host. A fileset is a fileset template applied to a host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilesetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FilesetArraySpec;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilesetRequestBody();
    $request->arraySpec = new FilesetArraySpec();
    $request->arraySpec->proxyHostId = 'quis';
    $request->enableHardlinkSupport = false;
    $request->enableSymlinkResolution = false;
    $request->failoverClusterAppId = 'quibusdam';
    $request->hostId = 'nemo';
    $request->isPassthrough = false;
    $request->shareId = 'suscipit';
    $request->snapMirrorLabelForFullBackup = 'pariatur';
    $request->snapMirrorLabelForIncrementalBackup = 'sit';
    $request->templateId = 'quidem';

    $response = $sdk->rootFileset->createFileset($request);

    if ($response->filesetDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilesetBackupJob

Create an on-demand backup request for the given fileset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilesetBackupJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\BaseOnDemandSnapshotConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilesetBackupJobRequest();
    $request->baseOnDemandSnapshotConfig = new BaseOnDemandSnapshotConfig();
    $request->baseOnDemandSnapshotConfig->slaId = 'repellendus';
    $request->id = '0af2dfe1-3db4-4f62-8ba3-f8941aebc0b8';

    $response = $sdk->rootFileset->createFilesetBackupJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilesetDownloadFileJob

Initiate a job to download a file from a backup of a fileset. Returns a job instance ID.
An email notification will be sent out when the download is ready. When the download is ready, the file can be downloaded from the corresponding event which includes the job instance ID as the value of **jobInstanceId**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilesetDownloadFileJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilesetDownloadFileJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\LegalHoldDownloadConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilesetDownloadFileJobRequest();
    $request->filesetDownloadFileJobConfig = new FilesetDownloadFileJobConfig();
    $request->filesetDownloadFileJobConfig->legalHoldDownloadConfig = new LegalHoldDownloadConfig();
    $request->filesetDownloadFileJobConfig->legalHoldDownloadConfig->isLegalHoldDownload = false;
    $request->filesetDownloadFileJobConfig->sourceDir = 'eaque';
    $request->id = 'a6924d3b-2ecf-4cc8-b895-010f5dd3d6fa';

    $response = $sdk->rootFileset->createFilesetDownloadFileJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilesetExportFileJob

Initiate a job to copy a file or folder from a fileset backup to a destination host other than the source host. Returns the job instance ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilesetExportFileJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilesetExportFileJobConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilesetExportFileJobRequest();
    $request->filesetExportFileJobConfig = new FilesetExportFileJobConfig();
    $request->filesetExportFileJobConfig->destinationDir = 'quae';
    $request->filesetExportFileJobConfig->hostId = 'quos';
    $request->filesetExportFileJobConfig->ignoreErrors = false;
    $request->filesetExportFileJobConfig->shareId = 'aperiam';
    $request->filesetExportFileJobConfig->sourceDir = 'non';
    $request->id = 'e54c82f1-68a3-463c-8873-e484380b1f6b';

    $response = $sdk->rootFileset->createFilesetExportFileJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilesetRestoreFileJob

Initiate a job to copy a file or folder from a fileset backup to the source host. Returns the job instance ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilesetRestoreFileJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilesetRestoreFileJobConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilesetRestoreFileJobRequest();
    $request->filesetRestoreFileJobConfig = new FilesetRestoreFileJobConfig();
    $request->filesetRestoreFileJobConfig->destinationDir = 'totam';
    $request->filesetRestoreFileJobConfig->ignoreErrors = false;
    $request->filesetRestoreFileJobConfig->sourceDir = 'porro';
    $request->id = 'a275a60a-04c4-495c-8699-171b51c1bdb1';

    $response = $sdk->rootFileset->createFilesetRestoreFileJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFileset

Delete a fileset by specifying the fileset ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFilesetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFilesetRequest();
    $request->id = 'cf4b888e-bdfc-44cc-8a99-bc7fc0b2dce1';
    $request->preserveSnapshots = false;

    $response = $sdk->rootFileset->deleteFileset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFilesetSnapshot

Delete a fileset snapshot. A snapshot is deleted only if it is an on-demand snapshot, a snapshot of an unprotected fileset or a local snapshot that was downloaded from an archive location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFilesetSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFilesetSnapshotLocationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFilesetSnapshotRequest();
    $request->id = '0873e42b-006d-4678-878b-a8581a58208c';
    $request->location = DeleteFilesetSnapshotLocationEnum::ALL;

    $response = $sdk->rootFileset->deleteFilesetSnapshot($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFilesetSnapshots

Delete all snapshots that were created based on a fileset by providing the fileset ID.
Requires an unprotected fileset. Remove the fileset from all SLA Domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFilesetSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFilesetSnapshotsRequest();
    $request->id = '4fefa9c9-5f2e-4ac5-965d-307cfee81206';

    $response = $sdk->rootFileset->deleteFilesetSnapshots($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileset

Retrieve summary information for a fileset by specifying the fileset ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesetRequest();
    $request->id = 'e2813fa4-a41c-4480-93f2-132af03102d5';

    $response = $sdk->rootFileset->getFileset($request);

    if ($response->filesetDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilesetAsyncRequestStatus

Get details about a fileset related async request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesetAsyncRequestStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesetAsyncRequestStatusRequest();
    $request->id = '14f4cc6f-18bf-4962-9a6a-4f77a87ee3e4';

    $response = $sdk->rootFileset->getFilesetAsyncRequestStatus($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilesetSnapshot

Retrieve summary information for a fileset snapshot by specifying the snapshot ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetFilesetSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilesetSnapshotRequest();
    $request->id = 'be752c65-b344-418e-bbb9-1c8d975e0e84';
    $request->verbose = false;

    $response = $sdk->rootFileset->getFilesetSnapshot($request);

    if ($response->filesetSnapshotDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMissedFilesetSnapshots

Retrieve summary information about all missed snapshots for a fileset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMissedFilesetSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMissedFilesetSnapshotsRequest();
    $request->id = '19d8f84f-144f-43e0-bedc-c4aa5f3cabd9';

    $response = $sdk->rootFileset->getMissedFilesetSnapshots($request);

    if ($response->missedSnapshotListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryFileset

Retrieve summary information for each fileset. Optionally, filter the retrieved information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryFilesetRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryFilesetSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryFilesetSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryFilesetRequest();
    $request->effectiveSlaDomainId = 'aut';
    $request->hostId = 'ipsam';
    $request->hostName = 'powerful-mustache.info';
    $request->isRelic = false;
    $request->limit = 157281;
    $request->name = 'Edward Hand';
    $request->offset = 154130;
    $request->primaryClusterId = 'laudantium';
    $request->shareId = 'sed';
    $request->sortBy = QueryFilesetSortByEnum::NAME;
    $request->sortOrder = QueryFilesetSortOrderEnum::ASC;
    $request->templateId = 'expedita';

    $response = $sdk->rootFileset->queryFileset($request);

    if ($response->filesetSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchFileset

Search for a file within the fileset. Search via full path prefix or filename prefix.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SearchFilesetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFilesetRequest();
    $request->cursor = 'eos';
    $request->id = 'd309470b-f7a4-4fa8-bcf5-35a6fae54ebf';
    $request->limit = 386538;
    $request->path = 'voluptatem';

    $response = $sdk->rootFileset->searchFileset($request);

    if ($response->searchResponseListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFileset

Update a Fileset with the specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFilesetRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilesetUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFilesetRequest();
    $request->filesetUpdate = new FilesetUpdate();
    $request->filesetUpdate->configuredSlaDomainId = 'optio';
    $request->filesetUpdate->forceFull = false;
    $request->filesetUpdate->forceFullPartitionIds = [
        125707,
    ];
    $request->filesetUpdate->snapMirrorLabelForFullBackup = 'vitae';
    $request->filesetUpdate->snapMirrorLabelForIncrementalBackup = 'voluptatibus';
    $request->id = '023b75d2-367f-4e1a-8cc8-df79f0a396d9';

    $response = $sdk->rootFileset->updateFileset($request);

    if ($response->filesetDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
