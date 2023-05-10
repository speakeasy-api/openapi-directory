# inventory

### Available Operations

* [batchChangeInventory](#batchchangeinventory) - BatchChangeInventory
* [batchRetrieveInventoryChanges](#batchretrieveinventorychanges) - BatchRetrieveInventoryChanges
* [batchRetrieveInventoryCounts](#batchretrieveinventorycounts) - BatchRetrieveInventoryCounts
* [deprecatedBatchChangeInventory](#deprecatedbatchchangeinventory) - DeprecatedBatchChangeInventory
* [deprecatedBatchRetrieveInventoryChanges](#deprecatedbatchretrieveinventorychanges) - DeprecatedBatchRetrieveInventoryChanges
* [deprecatedBatchRetrieveInventoryCounts](#deprecatedbatchretrieveinventorycounts) - DeprecatedBatchRetrieveInventoryCounts
* [deprecatedRetrieveInventoryAdjustment](#deprecatedretrieveinventoryadjustment) - DeprecatedRetrieveInventoryAdjustment
* [deprecatedRetrieveInventoryPhysicalCount](#deprecatedretrieveinventoryphysicalcount) - DeprecatedRetrieveInventoryPhysicalCount
* [retrieveInventoryAdjustment](#retrieveinventoryadjustment) - RetrieveInventoryAdjustment
* [retrieveInventoryChanges](#retrieveinventorychanges) - RetrieveInventoryChanges
* [retrieveInventoryCount](#retrieveinventorycount) - RetrieveInventoryCount
* [retrieveInventoryPhysicalCount](#retrieveinventoryphysicalcount) - RetrieveInventoryPhysicalCount
* [retrieveInventoryTransfer](#retrieveinventorytransfer) - RetrieveInventoryTransfer

## batchChangeInventory

Applies adjustments and counts to the provided item quantities.

On success: returns the current calculated counts for all objects
referenced in the request.
On failure: returns a list of related errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchChangeInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\InventoryChange;
use \OpenAPI\OpenAPI\Models\Shared\InventoryAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\InventoryAdjustmentGroup;
use \OpenAPI\OpenAPI\Models\Shared\SourceApplication;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\CatalogMeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnitCustom;
use \OpenAPI\OpenAPI\Models\Shared\InventoryPhysicalCount;
use \OpenAPI\OpenAPI\Models\Shared\InventoryTransfer;
use \OpenAPI\OpenAPI\Models\Operations\BatchChangeInventorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchChangeInventoryRequest();
    $request->changes = [
        new InventoryChange(),
        new InventoryChange(),
        new InventoryChange(),
    ];
    $request->idempotencyKey = 'rem';
    $request->ignoreUnchangedCounts = false;

    $requestSecurity = new BatchChangeInventorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->batchChangeInventory($request, $requestSecurity);

    if ($response->batchChangeInventoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchRetrieveInventoryChanges

Returns historical physical counts and adjustments based on the
provided filter criteria.

Results are paginated and sorted in ascending order according their
`occurred_at` timestamp (oldest first).

BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
that cannot be handled by other, simpler endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchRetrieveInventoryChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchRetrieveInventoryChangesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchRetrieveInventoryChangesRequest();
    $request->catalogObjectIds = [
        'ad',
        'repellat',
    ];
    $request->cursor = 'alias';
    $request->locationIds = [
        'perspiciatis',
        'nihil',
    ];
    $request->states = [
        'voluptas',
        'alias',
        'maiores',
    ];
    $request->types = [
        'dolores',
        'id',
        'minima',
        'dolore',
    ];
    $request->updatedAfter = 'dolorum';
    $request->updatedBefore = 'nesciunt';

    $requestSecurity = new BatchRetrieveInventoryChangesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->batchRetrieveInventoryChanges($request, $requestSecurity);

    if ($response->batchRetrieveInventoryChangesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchRetrieveInventoryCounts

Returns current counts for the provided
[CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s at the requested
[Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s.

Results are paginated and sorted in descending order according to their
`calculated_at` timestamp (newest first).

When `updated_after` is specified, only counts that have changed since that
time (based on the server timestamp for the most recent change) are
returned. This allows clients to perform a "sync" operation, for example
in response to receiving a Webhook notification.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchRetrieveInventoryCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchRetrieveInventoryCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchRetrieveInventoryCountsRequest();
    $request->catalogObjectIds = [
        'recusandae',
    ];
    $request->cursor = 'omnis';
    $request->locationIds = [
        'molestiae',
        'ex',
    ];
    $request->states = [
        'culpa',
        'adipisci',
    ];
    $request->updatedAfter = 'debitis';

    $requestSecurity = new BatchRetrieveInventoryCountsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->batchRetrieveInventoryCounts($request, $requestSecurity);

    if ($response->batchRetrieveInventoryCountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deprecatedBatchChangeInventory

Deprecated version of [BatchChangeInventory](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-change-inventory) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchChangeInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\InventoryChange;
use \OpenAPI\OpenAPI\Models\Shared\InventoryAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\InventoryAdjustmentGroup;
use \OpenAPI\OpenAPI\Models\Shared\SourceApplication;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\CatalogMeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnitCustom;
use \OpenAPI\OpenAPI\Models\Shared\InventoryPhysicalCount;
use \OpenAPI\OpenAPI\Models\Shared\InventoryTransfer;
use \OpenAPI\OpenAPI\Models\Operations\DeprecatedBatchChangeInventorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchChangeInventoryRequest();
    $request->changes = [
        new InventoryChange(),
        new InventoryChange(),
        new InventoryChange(),
    ];
    $request->idempotencyKey = 'eum';
    $request->ignoreUnchangedCounts = false;

    $requestSecurity = new DeprecatedBatchChangeInventorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->deprecatedBatchChangeInventory($request, $requestSecurity);

    if ($response->batchChangeInventoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deprecatedBatchRetrieveInventoryChanges

Deprecated version of [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchRetrieveInventoryChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeprecatedBatchRetrieveInventoryChangesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchRetrieveInventoryChangesRequest();
    $request->catalogObjectIds = [
        'recusandae',
        'esse',
    ];
    $request->cursor = 'provident';
    $request->locationIds = [
        'eum',
        'reiciendis',
    ];
    $request->states = [
        'aspernatur',
        'ullam',
        'quasi',
    ];
    $request->types = [
        'nostrum',
        'mollitia',
        'provident',
    ];
    $request->updatedAfter = 'possimus';
    $request->updatedBefore = 'animi';

    $requestSecurity = new DeprecatedBatchRetrieveInventoryChangesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->deprecatedBatchRetrieveInventoryChanges($request, $requestSecurity);

    if ($response->batchRetrieveInventoryChangesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deprecatedBatchRetrieveInventoryCounts

Deprecated version of [BatchRetrieveInventoryCounts](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-counts) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchRetrieveInventoryCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeprecatedBatchRetrieveInventoryCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchRetrieveInventoryCountsRequest();
    $request->catalogObjectIds = [
        'aliquid',
        'accusantium',
    ];
    $request->cursor = 'repellat';
    $request->locationIds = [
        'ullam',
        'in',
        'nam',
        'earum',
    ];
    $request->states = [
        'laborum',
        'placeat',
        'modi',
    ];
    $request->updatedAfter = 'voluptatibus';

    $requestSecurity = new DeprecatedBatchRetrieveInventoryCountsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->deprecatedBatchRetrieveInventoryCounts($request, $requestSecurity);

    if ($response->batchRetrieveInventoryCountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deprecatedRetrieveInventoryAdjustment

Deprecated version of [RetrieveInventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-adjustment) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeprecatedRetrieveInventoryAdjustmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeprecatedRetrieveInventoryAdjustmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeprecatedRetrieveInventoryAdjustmentRequest();
    $request->adjustmentId = 'molestias';

    $requestSecurity = new DeprecatedRetrieveInventoryAdjustmentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->deprecatedRetrieveInventoryAdjustment($request, $requestSecurity);

    if ($response->retrieveInventoryAdjustmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deprecatedRetrieveInventoryPhysicalCount

Deprecated version of [RetrieveInventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-physical-count) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeprecatedRetrieveInventoryPhysicalCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeprecatedRetrieveInventoryPhysicalCountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeprecatedRetrieveInventoryPhysicalCountRequest();
    $request->physicalCountId = 'officiis';

    $requestSecurity = new DeprecatedRetrieveInventoryPhysicalCountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->deprecatedRetrieveInventoryPhysicalCount($request, $requestSecurity);

    if ($response->retrieveInventoryPhysicalCountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveInventoryAdjustment

Returns the [InventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryAdjustment) object
with the provided `adjustment_id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInventoryAdjustmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInventoryAdjustmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveInventoryAdjustmentRequest();
    $request->adjustmentId = 'sapiente';

    $requestSecurity = new RetrieveInventoryAdjustmentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->retrieveInventoryAdjustment($request, $requestSecurity);

    if ($response->retrieveInventoryAdjustmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveInventoryChanges

Returns a set of physical counts and inventory adjustments for the
provided [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) at the requested
[Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s. 

You can achieve the same result by calling [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes) 
and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.

Results are paginated and sorted in descending order according to their
`occurred_at` timestamp (newest first).

There are no limits on how far back the caller can page. This endpoint can be 
used to display recent changes for a specific item. For more
sophisticated queries, use a batch endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInventoryChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInventoryChangesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveInventoryChangesRequest();
    $request->catalogObjectId = 'cumque';
    $request->cursor = 'vitae';
    $request->locationIds = 'rerum';

    $requestSecurity = new RetrieveInventoryChangesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->retrieveInventoryChanges($request, $requestSecurity);

    if ($response->retrieveInventoryChangesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveInventoryCount

Retrieves the current calculated stock count for a given
[CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) at a given set of
[Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s. Responses are paginated and unsorted.
For more sophisticated queries, use a batch endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInventoryCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInventoryCountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveInventoryCountRequest();
    $request->catalogObjectId = 'tempora';
    $request->cursor = 'quis';
    $request->locationIds = 'inventore';

    $requestSecurity = new RetrieveInventoryCountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->retrieveInventoryCount($request, $requestSecurity);

    if ($response->retrieveInventoryCountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveInventoryPhysicalCount

Returns the [InventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryPhysicalCount)
object with the provided `physical_count_id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInventoryPhysicalCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInventoryPhysicalCountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveInventoryPhysicalCountRequest();
    $request->physicalCountId = 'fugit';

    $requestSecurity = new RetrieveInventoryPhysicalCountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->retrieveInventoryPhysicalCount($request, $requestSecurity);

    if ($response->retrieveInventoryPhysicalCountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveInventoryTransfer

Returns the [InventoryTransfer](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryTransfer) object
with the provided `transfer_id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInventoryTransferRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInventoryTransferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveInventoryTransferRequest();
    $request->transferId = 'cumque';

    $requestSecurity = new RetrieveInventoryTransferSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->retrieveInventoryTransfer($request, $requestSecurity);

    if ($response->retrieveInventoryTransferResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
