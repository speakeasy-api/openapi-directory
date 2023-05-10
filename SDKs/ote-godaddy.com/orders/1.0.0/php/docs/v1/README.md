# v1

### Available Operations

* [get](#get) - Retrieve details for specified order
* [list](#list) - Retrieve a list of orders for the authenticated shopper. Only one filter may be used at a time

## get

<strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->xMarketId = 'quibusdam';
    $request->xShopperId = 'unde';
    $request->orderId = 'nulla';

    $response = $sdk->v1->get($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## list

<strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRequest();
    $request->xMarketId = 'corrupti';
    $request->xShopperId = 'illum';
    $request->domain = 'vel';
    $request->limit = 623564;
    $request->offset = 645894;
    $request->parentOrderId = 'suscipit';
    $request->paymentProfileId = 437587;
    $request->periodEnd = 'magnam';
    $request->periodStart = 'debitis';
    $request->productGroupId = 56713;
    $request->sort = ListSortEnum::MINUS_PRICING_TOTAL;

    $response = $sdk->v1->list($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
