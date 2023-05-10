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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'placeat';
    $request->fields = 'animi';
    $request->id = 'ba8da412-7dd5-497f-b471-1aa1bc74b86c';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->profileId = 'impedit';
    $request->projectId = 'ducimus';
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'nihil';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'aliquam';
    $request->ids = [
        'soluta',
        'quibusdam',
        'iure',
    ];
    $request->key = 'mollitia';
    $request->maxResults = 418788;
    $request->oauthToken = 'hic';
    $request->pageToken = 'perferendis';
    $request->prettyPrint = false;
    $request->profileId = 'tempora';
    $request->projectId = 'aliquam';
    $request->quotaUser = 'architecto';
    $request->searchString = 'nulla';
    $request->siteId = [
        'maxime',
    ];
    $request->sortField = DfareportingOrdersListSortFieldEnum::ID;
    $request->sortOrder = DfareportingOrdersListSortOrderEnum::DESCENDING;
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sit';

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
