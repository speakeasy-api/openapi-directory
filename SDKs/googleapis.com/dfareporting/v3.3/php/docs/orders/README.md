# orders

### Available Operations

* [dfareportingOrdersGet](#dfareportingordersget) - Gets one order by ID.
* [dfareportingOrdersList](#dfareportingorderslist) - Retrieves a list of orders, possibly filtered. This method supports paging.

## dfareportingOrdersGet

Gets one order by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrdersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrdersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingOrdersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'amet';
    $request->id = '084fbba5-ccef-4f5c-b01f-e51e528a45ac';
    $request->key = 'quos';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->profileId = 'distinctio';
    $request->projectId = 'praesentium';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'corrupti';

    $requestSecurity = new DfareportingOrdersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->dfareportingOrdersGet($request, $requestSecurity);

    if ($response->order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingOrdersList

Retrieves a list of orders, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrdersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrdersListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrdersListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOrdersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingOrdersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'placeat';
    $request->fields = 'animi';
    $request->ids = [
        'laborum',
        'atque',
        'assumenda',
    ];
    $request->key = 'laborum';
    $request->maxResults = 296732;
    $request->oauthToken = 'veritatis';
    $request->pageToken = 'fugit';
    $request->prettyPrint = false;
    $request->profileId = 'nihil';
    $request->projectId = 'illum';
    $request->quotaUser = 'nulla';
    $request->searchString = 'nemo';
    $request->siteId = [
        'iure',
        'hic',
        'sapiente',
    ];
    $request->sortField = DfareportingOrdersListSortFieldEnum::ID;
    $request->sortOrder = DfareportingOrdersListSortOrderEnum::ASCENDING;
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'inventore';

    $requestSecurity = new DfareportingOrdersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->dfareportingOrdersList($request, $requestSecurity);

    if ($response->ordersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
