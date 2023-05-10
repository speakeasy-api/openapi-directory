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
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'blanditiis';
    $request->fields = 'nobis';
    $request->id = '674ee5cf-c18e-4dc7-b787-e32e04b3d3ed';
    $request->key = 'quae';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->profileId = 'ullam';
    $request->projectId = 'vel';
    $request->quotaUser = 'reprehenderit';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'recusandae';

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
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'illum';
    $request->ids = [
        'porro',
    ];
    $request->key = 'iste';
    $request->maxResults = 938076;
    $request->oauthToken = 'vitae';
    $request->pageToken = 'impedit';
    $request->prettyPrint = false;
    $request->profileId = 'eligendi';
    $request->projectId = 'veniam';
    $request->quotaUser = 'aperiam';
    $request->searchString = 'consectetur';
    $request->siteId = [
        'voluptas',
        'quod',
        'nesciunt',
        'iste',
    ];
    $request->sortField = DfareportingOrdersListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingOrdersListSortOrderEnum::DESCENDING;
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'alias';

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
