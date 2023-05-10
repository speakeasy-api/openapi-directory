# countryMatchSimilarityKey

### Available Operations

* [getcountrymatch](#getcountrymatch) - Gets a similarity key for matching purposes for country name data

## getcountrymatch

Gets a similarity key to use for matching purposes for country name data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcountrymatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcountrymatchRequest();
    $request->country = 'Portugal';
    $request->license = 'quibusdam';

    $response = $sdk->countryMatchSimilarityKey->getcountrymatch($request);

    if ($response->getcountrymatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
