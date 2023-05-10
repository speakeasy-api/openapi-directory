# productstatuses

### Available Operations

* [contentProductstatusesCustombatch](#contentproductstatusescustombatch) - Gets the statuses of multiple products in a single request.
* [contentProductstatusesGet](#contentproductstatusesget) - Gets the status of a product from your Merchant Center account.
* [contentProductstatusesList](#contentproductstatuseslist) - Lists the statuses of the products in your Merchant Center account.

## contentProductstatusesCustombatch

Gets the statuses of multiple products in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductstatusesCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductstatusesCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductstatusesCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->productstatusesCustomBatchRequest = new ProductstatusesCustomBatchRequest();
    $request->productstatusesCustomBatchRequest->entries = [
        new ProductstatusesCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'laudantium';
    $request->includeAttributes = false;
    $request->key = 'quae';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new ContentProductstatusesCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productstatuses->contentProductstatusesCustombatch($request, $requestSecurity);

    if ($response->productstatusesCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductstatusesGet

Gets the status of a product from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductstatusesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->destinations = [
        'esse',
        'necessitatibus',
        'sed',
        'veniam',
    ];
    $request->fields = 'nesciunt';
    $request->includeAttributes = false;
    $request->key = 'expedita';
    $request->merchantId = 'eum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->productId = 'voluptatum';
    $request->quotaUser = 'magnam';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new ContentProductstatusesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productstatuses->contentProductstatusesGet($request, $requestSecurity);

    if ($response->productStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductstatusesList

Lists the statuses of the products in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductstatusesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductstatusesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->destinations = [
        'consequuntur',
        'voluptatem',
        'exercitationem',
        'necessitatibus',
    ];
    $request->fields = 'quasi';
    $request->includeAttributes = false;
    $request->includeInvalidInsertedItems = false;
    $request->key = 'nisi';
    $request->maxResults = 871103;
    $request->merchantId = 'vero';
    $request->oauthToken = 'est';
    $request->pageToken = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new ContentProductstatusesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productstatuses->contentProductstatusesList($request, $requestSecurity);

    if ($response->productstatusesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
