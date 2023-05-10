# rootSlaDomain

## Overview

SLA Domains.

### Available Operations

* [assignSlaToDownloadedSnapshots](#assignslatodownloadedsnapshots) - Assign retention SLA Domain to the downloaded snapshots of a single object
* [createSlaDomain](#createsladomain) - Create SLA Domain
* [deleteSlaDomain](#deletesladomain) - Remove SLA Domain
* [getSlaDomain](#getsladomain) - Get SLA Domain details
* [~~patchSlaDomain~~](#patchsladomain) - Patch SLA Domain :warning: **Deprecated**
* [querySlaDomain](#querysladomain) - Get list of SLA Domains
* [updateSlaDomain](#updatesladomain) - Update SLA Domain

## assignSlaToDownloadedSnapshots

Assigns an SLA Domain to a list of downloaded snapshots. The SLA Domain manages retention for the snapshots in the downloaded location. The assignment does not affect the retention of the snapshots in other locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\DownloadedSnapshotSlaAssignmentInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadedSnapshotSlaAssignmentInfo();
    $request->objectId = 'nisi';
    $request->slaDomainId = 'repellat';
    $request->snapshotIds = [
        'a',
        'molestiae',
        'amet',
        'voluptatibus',
    ];

    $response = $sdk->rootSlaDomain->assignSlaToDownloadedSnapshots($request);

    if ($response->batchAsyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSlaDomain

Create a new SLA Domain on a Rubrik cluster by specifying Domain Rules and policies. Only Managed Volume objects support minute frequency to take transaction log backup. SLA assignment on other objects will be disallowed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\SlaDomainDefinition;
use \OpenAPI\OpenAPI\Models\Shared\BackupWindow;
use \OpenAPI\OpenAPI\Models\Shared\SlaStartTimeAttributes;
use \OpenAPI\OpenAPI\Models\Shared\ArchivalSpec;
use \OpenAPI\OpenAPI\Models\Shared\ArchivalTieringSpec;
use \OpenAPI\OpenAPI\Models\Shared\CloudStorageColdTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlaFrequency;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationSpec;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SlaDomainDefinition();
    $request->allowedBackupWindows = [
        new BackupWindow(),
        new BackupWindow(),
        new BackupWindow(),
        new BackupWindow(),
    ];
    $request->archivalSpecs = [
        new ArchivalSpec(),
        new ArchivalSpec(),
        new ArchivalSpec(),
        new ArchivalSpec(),
    ];
    $request->firstFullAllowedBackupWindows = [
        new BackupWindow(),
        new BackupWindow(),
    ];
    $request->frequencies = [
        new SlaFrequency(),
        new SlaFrequency(),
    ];
    $request->isRetentionLocked = false;
    $request->localRetentionLimit = 979244;
    $request->name = 'Gilberto Hegmann';
    $request->replicationSpecs = [
        new ReplicationSpec(),
        new ReplicationSpec(),
        new ReplicationSpec(),
    ];

    $response = $sdk->rootSlaDomain->createSlaDomain($request);

    if ($response->slaDomainSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSlaDomain

Delete an SLA Domain from a Rubrik cluster. The SLA Domain must not be assigned to any VMs, filesets or databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSlaDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSlaDomainRequest();
    $request->id = '543398da-fb42-4a8d-a338-8e4d8039ea5f';

    $response = $sdk->rootSlaDomain->deleteSlaDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSlaDomain

Retrieve summary information for a specified SLA Domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSlaDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSlaDomainRequest();
    $request->id = '9b18a244-fd61-4903-9dac-d38ed0dc671d';

    $response = $sdk->rootSlaDomain->getSlaDomain($request);

    if ($response->slaDomainSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~patchSlaDomain~~

(DEPRECATED) Patch the properties of an SLA Domain. The recommended endpoint is v3/sla_domain/{id}.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PatchSlaDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\SlaDomainPatchDefinition;
use \OpenAPI\OpenAPI\Models\Shared\BackupWindow;
use \OpenAPI\OpenAPI\Models\Shared\SlaStartTimeAttributes;
use \OpenAPI\OpenAPI\Models\Shared\ArchivalSpec;
use \OpenAPI\OpenAPI\Models\Shared\ArchivalTieringSpec;
use \OpenAPI\OpenAPI\Models\Shared\CloudStorageColdTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlaFrequency;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationSpec;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchSlaDomainRequest();
    $request->slaDomainPatchDefinition = new SlaDomainPatchDefinition();
    $request->slaDomainPatchDefinition->allowedBackupWindows = [
        new BackupWindow(),
        new BackupWindow(),
        new BackupWindow(),
        new BackupWindow(),
    ];
    $request->slaDomainPatchDefinition->archivalSpecs = [
        new ArchivalSpec(),
        new ArchivalSpec(),
    ];
    $request->slaDomainPatchDefinition->firstFullAllowedBackupWindows = [
        new BackupWindow(),
        new BackupWindow(),
        new BackupWindow(),
        new BackupWindow(),
    ];
    $request->slaDomainPatchDefinition->frequencies = [
        new SlaFrequency(),
    ];
    $request->slaDomainPatchDefinition->isRetentionLocked = false;
    $request->slaDomainPatchDefinition->localRetentionLimit = 878361;
    $request->slaDomainPatchDefinition->name = 'Mrs. Molly Ziemann';
    $request->slaDomainPatchDefinition->replicationSpecs = [
        new ReplicationSpec(),
    ];
    $request->id = '0c90d1b4-901f-42bd-89c8-a32639da5b7b';
    $request->shouldApplyToExistingSnapshots = false;

    $response = $sdk->rootSlaDomain->patchSlaDomain($request);

    if ($response->slaDomainSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySlaDomain

Retrieve summary information for all SLA Domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QuerySlaDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\QuerySlaDomainSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QuerySlaDomainSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySlaDomainRequest();
    $request->dataSources = [
        'natus',
        'eaque',
    ];
    $request->name = 'Flora Littel MD';
    $request->primaryClusterId = 'provident';
    $request->snapshotIds = [
        'maiores',
        'ea',
    ];
    $request->sortBy = QuerySlaDomainSortByEnum::NAME;
    $request->sortOrder = QuerySlaDomainSortOrderEnum::ASC;

    $response = $sdk->rootSlaDomain->querySlaDomain($request);

    if ($response->slaDomainSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSlaDomain

Update the properties of an SLA Domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSlaDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\SlaDomainDefinition;
use \OpenAPI\OpenAPI\Models\Shared\BackupWindow;
use \OpenAPI\OpenAPI\Models\Shared\SlaStartTimeAttributes;
use \OpenAPI\OpenAPI\Models\Shared\ArchivalSpec;
use \OpenAPI\OpenAPI\Models\Shared\ArchivalTieringSpec;
use \OpenAPI\OpenAPI\Models\Shared\CloudStorageColdTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlaFrequency;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationSpec;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSlaDomainRequest();
    $request->slaDomainDefinition = new SlaDomainDefinition();
    $request->slaDomainDefinition->allowedBackupWindows = [
        new BackupWindow(),
    ];
    $request->slaDomainDefinition->archivalSpecs = [
        new ArchivalSpec(),
        new ArchivalSpec(),
    ];
    $request->slaDomainDefinition->firstFullAllowedBackupWindows = [
        new BackupWindow(),
        new BackupWindow(),
    ];
    $request->slaDomainDefinition->frequencies = [
        new SlaFrequency(),
        new SlaFrequency(),
    ];
    $request->slaDomainDefinition->isRetentionLocked = false;
    $request->slaDomainDefinition->localRetentionLimit = 653492;
    $request->slaDomainDefinition->name = 'Irvin Baumbach';
    $request->slaDomainDefinition->replicationSpecs = [
        new ReplicationSpec(),
        new ReplicationSpec(),
        new ReplicationSpec(),
    ];
    $request->id = 'c691d732-d9fb-4af9-876a-2ae8dcc50c8a';
    $request->shouldApplyToExistingSnapshots = false;

    $response = $sdk->rootSlaDomain->updateSlaDomain($request);

    if ($response->slaDomainSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
