<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetYearMonthJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetYearMonthJsonRequest();
    $request->month = 548814;
    $request->year = 592845;

    $response = $sdk->archive->getYearMonthJson($request);

    if ($response->getYearMonthJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->