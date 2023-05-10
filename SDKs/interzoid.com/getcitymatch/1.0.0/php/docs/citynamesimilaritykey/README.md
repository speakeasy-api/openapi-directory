# cityNameSimilarityKey

### Available Operations

* [getcitymatch](#getcitymatch) - Gets a similarity key for matching purposes for city name data

## getcitymatch

Gets a similarity key for matching purposes for city name data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcitymatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcitymatchRequest();
    $request->city = 'Stiedemannstad';
    $request->license = 'illum';

    $response = $sdk->cityNameSimilarityKey->getcitymatch($request);

    if ($response->getcitymatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
