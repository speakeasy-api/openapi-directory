# stores

### Available Operations

* [storesList](#storeslist) - Get a list of video game storefronts.
* [storesRead](#storesread) - Get details of the store.

## storesList

Get a list of video game storefronts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoresListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoresListRequest();
    $request->ordering = 'illum';
    $request->page = 864934;
    $request->pageSize = 807319;

    $response = $sdk->stores->storesList($request);

    if ($response->storesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storesRead

Get details of the store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoresReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoresReadRequest();
    $request->id = 411397;

    $response = $sdk->stores->storesRead($request);

    if ($response->storeSingle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
