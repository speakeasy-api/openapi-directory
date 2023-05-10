<!-- Start SDK Example Usage -->
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
    $request->country = 'Malta';
    $request->license = 'provident';

    $response = $sdk->countryMatchSimilarityKey->getcountrymatch($request);

    if ($response->getcountrymatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->