<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicHistoryRequest();
    $request->from = 'corrupti';
    $request->q = 'provident';
    $request->to = 'distinctio';

    $response = $sdk->default->getPublicHistory($request);

    if ($response->getPublicHistory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->