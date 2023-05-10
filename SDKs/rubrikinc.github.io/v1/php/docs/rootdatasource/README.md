# rootDataSource

## Overview

Data Sources.

### Available Operations

* [bulkDeleteSnapshots](#bulkdeletesnapshots) - Bulk delete all snapshots for the given objects
* [bulkDeleteSnapshotsForObject](#bulkdeletesnapshotsforobject) - Bulk delete specified snapshots for the given object
* [expiredCustomRetentionSnapshots](#expiredcustomretentionsnapshots) - Returns a list of snapshots that have expired according to their snapshot-level SLA Domain assignments


## bulkDeleteSnapshots

This endpoint deletes all snapshots from all locations for the objects with the IDs specified by the 'objectIds' parameter. API returning success does not guarantee that the snapshots will be expired.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\BulkDeleteSnapshotsConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkDeleteSnapshotsConfig();
    $request->objectIds = [
        'asperiores',
    ];

    $response = $sdk->rootDataSource->bulkDeleteSnapshots($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkDeleteSnapshotsForObject

Bulk deletion of the snapshots specified by a list of snapshot IDs for a given object. Object type is required. Location ID is optional. API returning success does not guarantee that the snapshot will be expired.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BulkDeleteSnapshotsForObjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\BulkDeleteObjectSnapshotsConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkDeleteSnapshotsForObjectRequest();
    $request->bulkDeleteObjectSnapshotsConfig = new BulkDeleteObjectSnapshotsConfig();
    $request->bulkDeleteObjectSnapshotsConfig->locationId = 'veniam';
    $request->bulkDeleteObjectSnapshotsConfig->snapshotIds = [
        'facere',
    ];
    $request->id = '82d3513b-b6f4-48b6-96bc-db35ff2e4b27';

    $response = $sdk->rootDataSource->bulkDeleteSnapshotsForObject($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## expiredCustomRetentionSnapshots

Gets a list of the snapshots of a specified data source that have expired according to the snapshot-level SLA Domain assignments. This list does not include remote snapshots.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\ExpiredCustomRetentionSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExpiredCustomRetentionSnapshotsRequest();
    $request->id = '537a8cd9-e731-49c1-b7d5-25f77b114eeb';

    $response = $sdk->rootDataSource->expiredCustomRetentionSnapshots($request);

    if ($response->expiredCustomRetentionSnapshots !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
