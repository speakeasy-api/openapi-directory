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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->fields = 'minima';
    $request->id = '971e9819-0557-4389-8edb-ac7fda39594d';
    $request->key = 'vel';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->profileId = 'soluta';
    $request->projectId = 'minus';
    $request->quotaUser = 'magni';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'officiis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'autem';
    $request->fields = 'dolorem';
    $request->ids = [
        'rerum',
    ];
    $request->inPlan = false;
    $request->key = 'iste';
    $request->maxResults = 579690;
    $request->oauthToken = 'enim';
    $request->orderId = [
        'libero',
        'iure',
    ];
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->profileId = 'id';
    $request->projectId = 'qui';
    $request->quotaUser = 'explicabo';
    $request->siteId = [
        'eum',
    ];
    $request->sortField = DfareportingInventoryItemsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingInventoryItemsListSortOrderEnum::ASCENDING;
    $request->type = DfareportingInventoryItemsListTypeEnum::PLANNING_PLACEMENT_TYPE_CREDIT;
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'explicabo';

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
