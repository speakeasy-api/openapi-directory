# rootLegalHold

## Overview

Legal Hold.

### Available Operations

* [applyLegalHold](#applylegalhold) - Apply a Legal Hold
* [dissolveLegalHoldSnapshots](#dissolvelegalholdsnapshots) - Dissolve a collection of snapshots of specified data source from Legal Hold
* [getLegalHoldObjects](#getlegalholdobjects) - Get objects part of Legal Hold
* [queryLegalHold](#querylegalhold) - Get snasphots held under legal hold

## applyLegalHold

Places a snapshot on legal hold by specifying the hold requirements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ApplyLegalHoldDefinition;
use \OpenAPI\OpenAPI\Models\Shared\HoldConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplyLegalHoldDefinition();
    $request->holdConfig = new HoldConfig();
    $request->holdConfig->isHoldInPlace = false;
    $request->snapshotId = 'dolore';

    $response = $sdk->rootLegalHold->applyLegalHold($request);

    if ($response->legalHoldSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dissolveLegalHoldSnapshots

Dissolve a collection of snapshots of specified data source from Legal Hold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DissolveLegalHoldSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DissolveLegalHoldDefinition;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DissolveLegalHoldSnapshotsRequest();
    $request->dissolveLegalHoldDefinition = new DissolveLegalHoldDefinition();
    $request->dissolveLegalHoldDefinition->snapshotIds = [
        'maiores',
        'ipsam',
    ];
    $request->id = '1f8b084c-3197-4e19-ba24-5467f94874c2';

    $response = $sdk->rootLegalHold->dissolveLegalHoldSnapshots($request);

    if ($response->dissolveLegalHoldResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLegalHoldObjects

Returns the object details for object with snapshots under legal hold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalHoldObjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalHoldObjectsSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalHoldObjectsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLegalHoldObjectsRequest();
    $request->limit = 815618;
    $request->objectId = 'ipsam';
    $request->objectName = 'nobis';
    $request->objectType = 'porro';
    $request->offset = 287834;
    $request->sortBy = GetLegalHoldObjectsSortByEnum::OBJECT_TYPE;
    $request->sortOrder = GetLegalHoldObjectsSortOrderEnum::ASC;

    $response = $sdk->rootLegalHold->getLegalHoldObjects($request);

    if ($response->objectHoldSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryLegalHold

Get summary for snapshots under legal hold. If object_id is passed, return summary information only for snapshots of the object under legal hold else return summary for all snapshots under legal hold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryLegalHoldRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryLegalHoldSnapshotTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLegalHoldSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLegalHoldSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryLegalHoldRequest();
    $request->afterDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-25T00:47:10.185Z');
    $request->beforeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T05:37:11.963Z');
    $request->limit = 904193;
    $request->objectId = 'iure';
    $request->objectName = 'aliquid';
    $request->objectType = 'cum';
    $request->offset = 853701;
    $request->placedOnHoldAfterDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-17T10:42:22.968Z');
    $request->placedOnHoldBeforeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-05T03:14:49.946Z');
    $request->snapshotType = QueryLegalHoldSnapshotTypeEnum::UNPROTECTED;
    $request->sortBy = QueryLegalHoldSortByEnum::SNAPSHOT_TIME;
    $request->sortOrder = QueryLegalHoldSortOrderEnum::ASC;

    $response = $sdk->rootLegalHold->queryLegalHold($request);

    if ($response->legalHoldSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
