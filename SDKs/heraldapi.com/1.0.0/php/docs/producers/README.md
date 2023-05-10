# producers

### Available Operations

* [getProducers](#getproducers) - /producers

## getProducers

### Get producers

Get a list of [producers](https://www.heraldapi.com/docs/producers).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProducersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProducersRequest();
    $request->externalId = 'assumenda';

    $response = $sdk->producers->getProducers($request);

    if ($response->getProducers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
