<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GlobalpageloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GlobalpageloadRequest();
    $request->license = 'corrupti';
    $request->origin = 'provident';
    $request->url = 'distinctio';

    $response = $sdk->pageLoadPerformanceTime->globalpageload($request);

    if ($response->globalpageload200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->