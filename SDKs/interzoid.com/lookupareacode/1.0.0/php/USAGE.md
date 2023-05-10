<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetareacodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetareacodeRequest();
    $request->areacode = 'corrupti';
    $request->license = 'provident';

    $response = $sdk->areaCodeInformation->getareacode($request);

    if ($response->getareacode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->