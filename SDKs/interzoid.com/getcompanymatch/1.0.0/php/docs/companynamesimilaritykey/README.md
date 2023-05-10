# companyNameSimilarityKey

### Available Operations

* [getcompanymatch](#getcompanymatch) - Gets a similarity key for matching purposes for company name data

## getcompanymatch

Gets a similarity key for matching purposes for company name data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcompanymatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcompanymatchRequest();
    $request->company = 'Stiedemann - Little';
    $request->license = 'illum';

    $response = $sdk->companyNameSimilarityKey->getcompanymatch($request);

    if ($response->getcompanymatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
