<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetareacodefromnumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetareacodefromnumberRequest();
    $request->license = 'corrupti';
    $request->number = 'provident';

    $response = $sdk->areaCodeInformation->getareacodefromnumber($request);

    if ($response->getareacodefromnumber200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->