<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContentJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentJsonRequest();
    $request->url = 'corrupti';

    $response = $sdk->getContentJson($request);

    if ($response->getContentJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->