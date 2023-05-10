# rootUnmanagedObject

## Overview

Unmanaged Objects.

### Available Operations

* [assignToRetentionSlaAsync](#assigntoretentionslaasync) - Assign relic/unmanaged entities to an SLA Domain for managing retention asynchronously
* [bulkTierExistingSnapshots](#bulktierexistingsnapshots) - Bulk tier existing snapshots to cold storage
* [queryUnmanagedObjectSnapshotsV1](#queryunmanagedobjectsnapshotsv1) - Get summary of all the snapshots for a given object
* [queryUnmanagedObjectV1](#queryunmanagedobjectv1) - Get summary of all the objects with unmanaged snapshots
* [queryUnmanagedReaderObject](#queryunmanagedreaderobject) - Get summary of all unmanaged reader objects

## assignToRetentionSlaAsync

Assign relic/unmanaged entities to the specified SLA Domain for managing retention. The assignment event runs asynchronously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\UnmanagedObjectSlaAssignmentInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnmanagedObjectSlaAssignmentInfo();
    $request->managedIds = [
        'inventore',
    ];
    $request->shouldApplyToNonPolicySnapshots = false;
    $request->slaDomainId = 'omnis';

    $response = $sdk->rootUnmanagedObject->assignToRetentionSlaAsync($request);

    if ($response->managedObjectPendingSlaInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkTierExistingSnapshots

Schedules a job to tier existing snapshots of the specified objects to cold storage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\BulkTierSnapshotsConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkTierSnapshotsConfig();
    $request->locationId = 'quaerat';
    $request->objectIds = [
        'omnis',
    ];

    $response = $sdk->rootUnmanagedObject->bulkTierExistingSnapshots($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryUnmanagedObjectSnapshotsV1

Gets summary information for all snapshots of the object with the specified object ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedObjectSnapshotsV1Request;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedObjectSnapshotsV1SnapshotTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedObjectSnapshotsV1SortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedObjectSnapshotsV1SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryUnmanagedObjectSnapshotsV1Request();
    $request->afterDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-23T03:58:59.243Z');
    $request->beforeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-17T14:22:05.995Z');
    $request->id = '3c92398e-d3d3-4ab7-8a3c-5ca8649a70cf';
    $request->limit = 845889;
    $request->offset = 329700;
    $request->searchValue = 'pariatur';
    $request->snapshotType = QueryUnmanagedObjectSnapshotsV1SnapshotTypeEnum::POLICY_BASED;
    $request->sortBy = QueryUnmanagedObjectSnapshotsV1SortByEnum::LOCAL_EXPIRATION_DATE;
    $request->sortOrder = QueryUnmanagedObjectSnapshotsV1SortOrderEnum::DESC;

    $response = $sdk->rootUnmanagedObject->queryUnmanagedObjectSnapshotsV1($request);

    if ($response->snapshotSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryUnmanagedObjectV1

Get summary of all the objects with unmanaged snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedObjectV1Request;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedObjectV1ObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedObjectV1SortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedObjectV1SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedObjectV1UnmanagedStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryUnmanagedObjectV1Request();
    $request->afterId = 'iste';
    $request->limit = 717489;
    $request->objectType = QueryUnmanagedObjectV1ObjectTypeEnum::MANAGED_VOLUME;
    $request->searchValue = 'consequuntur';
    $request->sortBy = QueryUnmanagedObjectV1SortByEnum::NAME;
    $request->sortOrder = QueryUnmanagedObjectV1SortOrderEnum::ASC;
    $request->unmanagedStatus = QueryUnmanagedObjectV1UnmanagedStatusEnum::RELIC;

    $response = $sdk->rootUnmanagedObject->queryUnmanagedObjectV1($request);

    if ($response->unmanagedObjectDetailsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryUnmanagedReaderObject

A summary of all unmanaged objects recovered from reader archival locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedReaderObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedReaderObjectObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedReaderObjectSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedReaderObjectSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryUnmanagedReaderObjectUnmanagedStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryUnmanagedReaderObjectRequest();
    $request->afterId = 'ad';
    $request->limit = 63697;
    $request->objectName = 'ipsa';
    $request->objectType = QueryUnmanagedReaderObjectObjectTypeEnum::MANAGED_VOLUME;
    $request->sortBy = QueryUnmanagedReaderObjectSortByEnum::LOCAL_STORAGE;
    $request->sortOrder = QueryUnmanagedReaderObjectSortOrderEnum::DESC;
    $request->unmanagedStatus = QueryUnmanagedReaderObjectUnmanagedStatusEnum::PROTECTED;

    $response = $sdk->rootUnmanagedObject->queryUnmanagedReaderObject($request);

    if ($response->unmanagedObjectSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
