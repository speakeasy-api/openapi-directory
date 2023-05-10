# streetAddressSimilarityKey

### Available Operations

* [getaddressmatch](#getaddressmatch) - Gets a similarity key for matching purposes for address data

## getaddressmatch

Gets a similarity key for matching purposes for street address data


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetaddressmatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetaddressmatchRequest();
    $request->address = '6342 Bednar Vista';
    $request->license = 'tempora';

    $response = $sdk->streetAddressSimilarityKey->getaddressmatch($request);

    if ($response->getaddressmatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
