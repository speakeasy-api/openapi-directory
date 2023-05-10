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
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quas';
    $request->fields = 'aut';
    $request->id = '632b9954-b6fa-4220-a369-828553cb1000';
    $request->key = 'autem';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->profileId = 'necessitatibus';
    $request->projectId = 'reiciendis';
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'dolores';

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
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->fields = 'sit';
    $request->ids = [
        'nesciunt',
        'libero',
    ];
    $request->inPlan = false;
    $request->key = 'molestiae';
    $request->maxResults = 260924;
    $request->oauthToken = 'perspiciatis';
    $request->orderId = [
        'ex',
    ];
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->profileId = 'officia';
    $request->projectId = 'quisquam';
    $request->quotaUser = 'rem';
    $request->siteId = [
        'eveniet',
        'voluptatem',
        'repellat',
        'magni',
    ];
    $request->sortField = DfareportingInventoryItemsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingInventoryItemsListSortOrderEnum::DESCENDING;
    $request->type = DfareportingInventoryItemsListTypeEnum::PLANNING_PLACEMENT_TYPE_REGULAR;
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'veniam';

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
