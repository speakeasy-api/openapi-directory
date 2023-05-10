# rootHdfs

## Overview

HDFS.

### Available Operations

* [browseHdfsSnapshot](#browsehdfssnapshot) - Lists all files and directories in a given path
* [createHdfs](#createhdfs) - Create one HDFS directory for a host
* [createHdfsBackupJob](#createhdfsbackupjob) - Initiate an on-demand backup for a HDFS directory
* [createHdfsExportFileJob](#createhdfsexportfilejob) - Create export job
* [createHdfsRestoreFileJob](#createhdfsrestorefilejob) - Create restore job
* [deleteHdfs](#deletehdfs) - Delete a HDFS directory
* [deleteHdfsSnapshot](#deletehdfssnapshot) - Delete a HDFS directory snapshot
* [deleteHdfsSnapshots](#deletehdfssnapshots) - Delete all snapshots of a HDFS directory
* [getHdfs](#gethdfs) - Get information for a single HDFS directory
* [getHdfsAsyncRequestStatus](#gethdfsasyncrequeststatus) - Get details about an asynchronous request
* [getHdfsSnapshot](#gethdfssnapshot) - Get information for a HDFS directory snapshot
* [getMissedHdfsSnapshots](#getmissedhdfssnapshots) - Get missed snapshots for a HDFS directory
* [queryHdfs](#queryhdfs) - Get summary information for all HDFS directories
* [searchHdfs](#searchhdfs) - Search for a file within the HDFS directory
* [updateHdfs](#updatehdfs) - Update a HDFS directory

## browseHdfsSnapshot

Lists all files and directories in a given path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BrowseHdfsSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BrowseHdfsSnapshotRequest();
    $request->id = '8fff639a-910a-4bdc-ab62-676696e1ec00';
    $request->limit = 181622;
    $request->offset = 163263;
    $request->path = 'vitae';

    $response = $sdk->rootHdfs->browseHdfsSnapshot($request);

    if ($response->browseResponseListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHdfs

Create a HDFS directory for a network host. A HDFS directory is a HDFS directory template applied to a host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\HdfsCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HdfsCreate();
    $request->hostId = 'quidem';
    $request->templateId = 'sequi';

    $response = $sdk->rootHdfs->createHdfs($request);

    if ($response->hdfsDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHdfsBackupJob

Create on-demand backup request for HDFS directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateHdfsBackupJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\BaseOnDemandSnapshotConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHdfsBackupJobRequest();
    $request->baseOnDemandSnapshotConfig = new BaseOnDemandSnapshotConfig();
    $request->baseOnDemandSnapshotConfig->slaId = 'amet';
    $request->id = '5d89acb3-ecfd-4a8d-8c54-9ef03004978a';

    $response = $sdk->rootHdfs->createHdfsBackupJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHdfsExportFileJob

Initiate a job to copy a file or folder from a hdfs backup to a destination host other than the source host. Returns the job instance ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateHdfsExportFileJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\HdfsExportFileJobConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHdfsExportFileJobRequest();
    $request->hdfsExportFileJobConfig = new HdfsExportFileJobConfig();
    $request->hdfsExportFileJobConfig->destinationDir = 'ex';
    $request->hdfsExportFileJobConfig->hostId = 'architecto';
    $request->hdfsExportFileJobConfig->shouldIgnoreErrors = false;
    $request->hdfsExportFileJobConfig->sourceDir = 'a';
    $request->id = 'a1cf2068-8f77-4c1f-bc71-dca163f2a3c8';

    $response = $sdk->rootHdfs->createHdfsExportFileJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHdfsRestoreFileJob

Initiate a job to copy a file or folder from a HDFS directory backup to the source host. Returns the job instance ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateHdfsRestoreFileJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\HdfsRestoreFileJobConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHdfsRestoreFileJobRequest();
    $request->hdfsRestoreFileJobConfig = new HdfsRestoreFileJobConfig();
    $request->hdfsRestoreFileJobConfig->destinationDir = 'perferendis';
    $request->hdfsRestoreFileJobConfig->shouldIgnoreErrors = false;
    $request->hdfsRestoreFileJobConfig->sourceDir = 'laborum';
    $request->id = '97ff334c-ddf8-457a-9e61-876c6ab21d29';

    $response = $sdk->rootHdfs->createHdfsRestoreFileJob($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHdfs

Delete a HDFS directory by specifying the HDFS directory ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHdfsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHdfsRequest();
    $request->id = 'dfc94d6f-ecd7-4993-9006-6a6d2d000355';
    $request->preserveSnapshots = false;

    $response = $sdk->rootHdfs->deleteHdfs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHdfsSnapshot

Delete a HDFS directory snapshot. A snapshot is deleted only if it is an on-demand snapshot, or a snapshot of an unprotected HDFS directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHdfsSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHdfsSnapshotRequest();
    $request->id = '338cec08-6fa2-41e9-952c-b3119167b8e3';

    $response = $sdk->rootHdfs->deleteHdfsSnapshot($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHdfsSnapshots

Delete all snapshots that were created based on a hdfs by providing the HDFS directory ID.
Requires an unprotected HDFS directory. Remove the HDFS directory from all SLA Domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHdfsSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHdfsSnapshotsRequest();
    $request->id = 'c8db0340-8d6d-4364-bfd4-55906d1263d4';

    $response = $sdk->rootHdfs->deleteHdfsSnapshots($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHdfs

Retrieve summary information for a HDFS directory by specifying the HDFS directory ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetHdfsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHdfsRequest();
    $request->id = '8e935c2c-9e81-4f30-be3e-43202d721657';

    $response = $sdk->rootHdfs->getHdfs($request);

    if ($response->hdfsDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHdfsAsyncRequestStatus

Get details about a hdfs related asynchronous request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetHdfsAsyncRequestStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHdfsAsyncRequestStatusRequest();
    $request->id = '65066418-70d9-4d21-b9ad-030c4ecc11a0';

    $response = $sdk->rootHdfs->getHdfsAsyncRequestStatus($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHdfsSnapshot

Retrieve summary information for a HDFS directory snapshot by specifying the snapshot ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetHdfsSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHdfsSnapshotRequest();
    $request->id = '83642906-8b85-402a-95e7-f73bc845e320';

    $response = $sdk->rootHdfs->getHdfsSnapshot($request);

    if ($response->hdfsSnapshotDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMissedHdfsSnapshots

Retrieve summary information about all missed snapshots for a HDFS directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMissedHdfsSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMissedHdfsSnapshotsRequest();
    $request->id = 'a319f4ba-df94-47c9-a867-bc4242666581';

    $response = $sdk->rootHdfs->getMissedHdfsSnapshots($request);

    if ($response->missedSnapshotListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryHdfs

Retrieve summary information for each HDFS directory. Optionally, filter the retrieved information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryHdfsRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryHdfsSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryHdfsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryHdfsRequest();
    $request->effectiveSlaDomainId = 'suscipit';
    $request->hostId = 'quibusdam';
    $request->hostName = 'threadbare-saviour.name';
    $request->isRelic = false;
    $request->limit = 543922;
    $request->name = 'Dr. Emilio Hilll';
    $request->offset = 711310;
    $request->primaryClusterId = 'modi';
    $request->sortBy = QueryHdfsSortByEnum::EXCLUDES;
    $request->sortOrder = QueryHdfsSortOrderEnum::ASC;
    $request->templateId = 'occaecati';

    $response = $sdk->rootHdfs->queryHdfs($request);

    if ($response->hdfsSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchHdfs

Search for a file within the HDFS directory. Search using full path prefix or filename prefix.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SearchHdfsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchHdfsRequest();
    $request->cursor = 'ipsum';
    $request->id = 'ec12cdaa-d0ec-47af-adbd-80df448a47f9';
    $request->limit = 226196;
    $request->path = 'occaecati';

    $response = $sdk->rootHdfs->searchHdfs($request);

    if ($response->searchResponseListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHdfs

Update a HDFS directory with the specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHdfsRequest;
use \OpenAPI\OpenAPI\Models\Shared\HdfsUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHdfsRequest();
    $request->hdfsUpdate = new HdfsUpdate();
    $request->hdfsUpdate->configuredSlaDomainId = 'aut';
    $request->id = 'c5888098-3dab-4f9e-b3ff-dd9f7f079af4';

    $response = $sdk->rootHdfs->updateHdfs($request);

    if ($response->hdfsDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
