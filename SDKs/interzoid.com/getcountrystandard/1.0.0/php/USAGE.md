<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcountrystandardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcountrystandardRequest();
    $request->country = 'Malta';
    $request->license = 'provident';

    $response = $sdk->countryNameStandardization->getcountrystandard($request);

    if ($response->getcountrystandard200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->