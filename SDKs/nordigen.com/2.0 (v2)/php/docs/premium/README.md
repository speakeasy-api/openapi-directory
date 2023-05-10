# premium

### Available Operations

* [retrieveAccountTransactionsV2](#retrieveaccounttransactionsv2) - Access account premium transactions.

## retrieveAccountTransactionsV2

Access account premium transactions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveAccountTransactionsV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveAccountTransactionsV2Request();
    $request->country = 'Mongolia';
    $request->dateFrom = DateTime::createFromFormat('Y-m-d', '2020-02-11');
    $request->dateTo = DateTime::createFromFormat('Y-m-d', '2022-12-13');
    $request->id = 'ab7da8a5-0ce1-487f-86bc-173d689eee95';

    $response = $sdk->premium->retrieveAccountTransactionsV2($request);

    if ($response->retrieveAccountTransactionsV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
