# rootSapHana

## Overview

SAP HANA.

### Available Operations

* [addSapHanaSystem](#addsaphanasystem) - Add a SAP HANA system
* [configureSapHanaRestore](#configuresaphanarestore) - Configure the target database for system copy restore
* [createOnDemandSapHanaBackup](#createondemandsaphanabackup) - Create on demand database snapshot
* [createSapHanaSystemRefresh](#createsaphanasystemrefresh) - Refresh SAP HANA system metadata
* [deleteSapHanaDbSnapshot](#deletesaphanadbsnapshot) - Delete a particular full snapshot of a SAP HANA database
* [deleteSapHanaSystem](#deletesaphanasystem) - Delete a SAP HANA system
* [getMissedSapHanaDbSnapshots](#getmissedsaphanadbsnapshots) - Retrieve summary information for missed snapshots of a SAP HANA database
* [getSapHanaDatabase](#getsaphanadatabase) - Get detailed information for an SAP HANA database
* [getSapHanaDbAsyncRequestStatus](#getsaphanadbasyncrequeststatus) - Get the status of a SAP HANA database request
* [getSapHanaDbRecoverableRanges](#getsaphanadbrecoverableranges) - Get recoverable ranges of a SAP HANA database
* [getSapHanaDbSnapshot](#getsaphanadbsnapshot) - Get SAP HANA database snapshot details
* [getSapHanaSystem](#getsaphanasystem) - Get summary information for a SAP HANA system
* [getSapHanaSystemAsyncRequestStatus](#getsaphanasystemasyncrequeststatus) - Get the status of a SAP HANA system request
* [patchSapHanaDatabase](#patchsaphanadatabase) - Update the SLA Domain for an SAP HANA database
* [patchSapHanaSystem](#patchsaphanasystem) - Update the SLA Domain for a SAP HANA system
* [querySapHanaDatabases](#querysaphanadatabases) - Get summary information for discovered SAP HANA databases
* [querySapHanaDbSnapshot](#querysaphanadbsnapshot) - Get a summary list of snapshots for a SAP HANA database
* [querySapHanaSystems](#querysaphanasystems) - Get summary information for added SAP HANA systems
* [unconfigureSapHanaRestore](#unconfiguresaphanarestore) - Reset the configuration for system copy restore on target database

## addSapHanaSystem

Add a SAP HANA system to the Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\SapHanaSystemConfig;
use \OpenAPI\OpenAPI\Models\Shared\SapHanaSystemDataPathSpec;
use \OpenAPI\OpenAPI\Models\Shared\SapHanaDataPathTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SapHanaSystemConfig();
    $request->dataPathSpec = new SapHanaSystemDataPathSpec();
    $request->dataPathSpec->dataPathType = SapHanaDataPathTypeEnum::LOCAL;
    $request->hostIds = [
        'rem',
    ];
    $request->instanceNumber = 'itaque';
    $request->password = 'assumenda';
    $request->sid = 'optio';
    $request->username = 'Jaden_Wilkinson';

    $response = $sdk->rootSapHana->addSapHanaSystem($request);

    if ($response->sapHanaAddSystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureSapHanaRestore

Initiates a job to configure the specified target database for a system copy restore by sending metadata about the source database. System copy restore in SAP HANA is done across different databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureSapHanaRestoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\SapHanaRestoreSourceConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureSapHanaRestoreRequest();
    $request->sapHanaRestoreSourceConfig = new SapHanaRestoreSourceConfig();
    $request->sapHanaRestoreSourceConfig->snappableId = 'dignissimos';
    $request->id = 'e32e04b3-d3ed-40c5-a70e-f42bd3c9f1cc';

    $response = $sdk->rootSapHana->configureSapHanaRestore($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOnDemandSapHanaBackup

Initiates a job to take an on demand full snapshot of a specified SAP HANA database object. The GET /sap_hana/db/request/{id} endpoint can be used to monitor the progress of the job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateOnDemandSapHanaBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\BaseOnDemandSnapshotConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOnDemandSapHanaBackupRequest();
    $request->baseOnDemandSnapshotConfig = new BaseOnDemandSnapshotConfig();
    $request->baseOnDemandSnapshotConfig->slaId = 'veniam';
    $request->id = '03f6c39b-cd0a-4629-8f95-7f385189ad7e';

    $response = $sdk->rootSapHana->createOnDemandSapHanaBackup($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSapHanaSystemRefresh

Initiates a job to refresh metadata of a SAP HANA system object. The GET /sap_hana/system/request/{id} endpoint can be used to monitor the progress of the job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateSapHanaSystemRefreshRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSapHanaSystemRefreshRequest();
    $request->id = 'f807aae0-3f33-4ca7-9fb9-de4032ba26fd';

    $response = $sdk->rootSapHana->createSapHanaSystemRefresh($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSapHanaDbSnapshot

Initiates a request to delete a particular full snapshot of a SAP HANA database. If the log retention period for the database is still in effect, the snapshot will be deleted when the log retention period ends.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSapHanaDbSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSapHanaDbSnapshotRequest();
    $request->id = '368ba921-6bcb-4415-835c-73641723133e';

    $response = $sdk->rootSapHana->deleteSapHanaDbSnapshot($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSapHanaSystem

Initiates a job to delete a SAP HANA system object. GET /sap_hana/system/request/{id} endpoint can be used to monitor the progress of the job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSapHanaSystemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSapHanaSystemRequest();
    $request->id = 'dc046bc5-163b-4bca-8922-7c42c22c5535';

    $response = $sdk->rootSapHana->deleteSapHanaSystem($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMissedSapHanaDbSnapshots

Returns a summary of information for the missed snapshots of a SAP HANA database. Retrieve only the missed snapshots that occur between the beginning and ending timestamps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMissedSapHanaDbSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMissedSapHanaDbSnapshotsRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-21T06:49:57.378Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-08T18:29:18.779Z');
    $request->id = 'c5dbb3c5-7c1e-4498-9e8a-a257ddc1912e';

    $response = $sdk->rootSapHana->getMissedSapHanaDbSnapshots($request);

    if ($response->missedSnapshotListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSapHanaDatabase

Returns a detailed view of the SAP HANA database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSapHanaDatabaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSapHanaDatabaseRequest();
    $request->id = 'bde64bfc-c546-49d4-815d-fa796206bef2';

    $response = $sdk->rootSapHana->getSapHanaDatabase($request);

    if ($response->sapHanaDatabaseDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSapHanaDbAsyncRequestStatus

Get details about a SAP HANA database related request which includes the status of data backup job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSapHanaDbAsyncRequestStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSapHanaDbAsyncRequestStatusRequest();
    $request->id = 'b0a3e42c-1aa0-410e-9aac-2e9135586d18';

    $response = $sdk->rootSapHana->getSapHanaDbAsyncRequestStatus($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSapHanaDbRecoverableRanges

Retrieve the recoverable ranges for a specified SAP HANA database. Provide a beginning and/or ending timestamp to retrieve only the recoverable ranges that fall within this period of time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSapHanaDbRecoverableRangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSapHanaDbRecoverableRangesRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-12T07:19:47.826Z');
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-13T12:10:38.705Z');
    $request->id = '7a4bfad2-bf7d-467c-a84a-d99b41d61243';

    $response = $sdk->rootSapHana->getSapHanaDbRecoverableRanges($request);

    if ($response->sapHanaRecoverableRangeListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSapHanaDbSnapshot

Retrieve detailed information about a full or an incremental snapshot of a SAP HANA database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSapHanaDbSnapshotRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSapHanaDbSnapshotRequest();
    $request->id = '531870cf-68b0-43ad-821b-d43d1f0cb0a0';

    $response = $sdk->rootSapHana->getSapHanaDbSnapshot($request);

    if ($response->sapHanaDatabaseSnapshotDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSapHanaSystem

Returns a summary view of a SAP HANA system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSapHanaSystemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSapHanaSystemRequest();
    $request->id = '003eb22d-9b3a-470d-94fa-a741c57d1fed';

    $response = $sdk->rootSapHana->getSapHanaSystem($request);

    if ($response->sapHanaSystemSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSapHanaSystemAsyncRequestStatus

Get details about a SAP HANA system related request which includes the status of delete or refresh system job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSapHanaSystemAsyncRequestStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSapHanaSystemAsyncRequestStatusRequest();
    $request->id = 'c2050d38-dc3c-4e18-9472-f9ee69166a8b';

    $response = $sdk->rootSapHana->getSapHanaSystemAsyncRequestStatus($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchSapHanaDatabase

Update the SLA Domain that is configured for an SAP HANA database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PatchSapHanaDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\SapHanaDatabasePatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchSapHanaDatabaseRequest();
    $request->sapHanaDatabasePatch = new SapHanaDatabasePatch();
    $request->sapHanaDatabasePatch->configuredSlaDomainId = 'saepe';
    $request->sapHanaDatabasePatch->logSnapshotJobIntervalInMinutes = 239159;
    $request->id = '444eac8b-3a28-475c-ac1f-e606d07d2a9c';

    $response = $sdk->rootSapHana->patchSapHanaDatabase($request);

    if ($response->sapHanaDatabaseDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchSapHanaSystem

Update the SLA Domain that is configured for a SAP HANA system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PatchSapHanaSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\SapHanaSystemPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchSapHanaSystemRequest();
    $request->sapHanaSystemPatch = new SapHanaSystemPatch();
    $request->sapHanaSystemPatch->configuredSlaDomainId = 'laudantium';
    $request->sapHanaSystemPatch->hostIds = [
        'officia',
        'repudiandae',
    ];
    $request->sapHanaSystemPatch->instanceNumber = 'nemo';
    $request->sapHanaSystemPatch->password = 'voluptatem';
    $request->sapHanaSystemPatch->sid = 'quod';
    $request->sapHanaSystemPatch->username = 'Bette.Keebler';
    $request->id = '1a1d9136-a7e8-4d53-a13f-3f658752db76';

    $response = $sdk->rootSapHana->patchSapHanaSystem($request);

    if ($response->sapHanaPatchSystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySapHanaDatabases

Returns summary information for SAP HANA databases connected to the CDM cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QuerySapHanaDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\QuerySapHanaDatabasesSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QuerySapHanaDatabasesSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySapHanaDatabasesRequest();
    $request->effectiveSlaDomainId = 'aliquam';
    $request->isRelic = false;
    $request->limit = 803015;
    $request->name = 'Miss Violet Yundt';
    $request->offset = 409677;
    $request->primaryClusterId = 'placeat';
    $request->slaAssignment = 'necessitatibus';
    $request->sortBy = QuerySapHanaDatabasesSortByEnum::SAP_HANA_SYSTEM_NAME;
    $request->sortOrder = QuerySapHanaDatabasesSortOrderEnum::DESC;

    $response = $sdk->rootSapHana->querySapHanaDatabases($request);

    if ($response->sapHanaDatabaseSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySapHanaDbSnapshot

Retrieve summary information about the full and incremental snapshots of a specified SAP HANA database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QuerySapHanaDbSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\QuerySapHanaDbSnapshotBackupTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySapHanaDbSnapshotRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-09T19:58:10.425Z');
    $request->backupType = QuerySapHanaDbSnapshotBackupTypeEnum::INCREMENTAL;
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-25T03:52:36.803Z');
    $request->id = 'ca79181c-9567-4166-bc53-0b5665163a36';

    $response = $sdk->rootSapHana->querySapHanaDbSnapshot($request);

    if ($response->sapHanaDatabaseSnapshotSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySapHanaSystems

Returns summary information for SAP HANA systems.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QuerySapHanaSystemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\QuerySapHanaSystemsSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QuerySapHanaSystemsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySapHanaSystemsRequest();
    $request->limit = 227470;
    $request->offset = 533457;
    $request->primaryClusterId = 'exercitationem';
    $request->sid = 'illo';
    $request->sortBy = QuerySapHanaSystemsSortByEnum::SID;
    $request->sortOrder = QuerySapHanaSystemsSortOrderEnum::ASC;

    $response = $sdk->rootSapHana->querySapHanaSystems($request);

    if ($response->sapHanaSystemSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unconfigureSapHanaRestore

Initiates a job to reset the configuration for the system copy restore on the specified target database. System copy restore in SAP HANA is done across different databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UnconfigureSapHanaRestoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnconfigureSapHanaRestoreRequest();
    $request->id = 'ab2521b9-f2e0-4724-a7b8-a40bc05fab0d';

    $response = $sdk->rootSapHana->unconfigureSapHanaRestore($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
