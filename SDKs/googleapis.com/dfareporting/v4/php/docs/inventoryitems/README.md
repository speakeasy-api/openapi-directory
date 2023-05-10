# inventoryItems

### Available Operations

* [dfareportingInventoryItemsGet](#dfareportinginventoryitemsget) - Gets one inventory item by ID.
* [dfareportingInventoryItemsList](#dfareportinginventoryitemslist) - Retrieves a list of inventory items, possibly filtered. This method supports paging.

## dfareportingInventoryItemsGet

Gets one inventory item by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingInventoryItemsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingInventoryItemsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingInventoryItemsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'rerum';
    $request->id = '64e99fb0-e67e-4094-bdfe-d5540ef53a34';
    $request->key = 'est';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->profileId = 'rerum';
    $request->projectId = 'blanditiis';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'perspiciatis';

    $requestSecurity = new DfareportingInventoryItemsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventoryItems->dfareportingInventoryItemsGet($request, $requestSecurity);

    if ($response->inventoryItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingInventoryItemsList

Retrieves a list of inventory items, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingInventoryItemsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingInventoryItemsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingInventoryItemsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingInventoryItemsListTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingInventoryItemsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingInventoryItemsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'fuga';
    $request->ids = [
        'cumque',
        'aperiam',
        'ad',
        'fugiat',
    ];
    $request->inPlan = false;
    $request->key = 'quas';
    $request->maxResults = 336314;
    $request->oauthToken = 'fuga';
    $request->orderId = [
        'consequuntur',
        'illum',
        'delectus',
        'rerum',
    ];
    $request->pageToken = 'voluptate';
    $request->prettyPrint = false;
    $request->profileId = 'perferendis';
    $request->projectId = 'maiores';
    $request->quotaUser = 'harum';
    $request->siteId = [
        'molestias',
    ];
    $request->sortField = DfareportingInventoryItemsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingInventoryItemsListSortOrderEnum::ASCENDING;
    $request->type = DfareportingInventoryItemsListTypeEnum::PLANNING_PLACEMENT_TYPE_REGULAR;
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new DfareportingInventoryItemsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventoryItems->dfareportingInventoryItemsList($request, $requestSecurity);

    if ($response->inventoryItemsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
