<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJsappsCodeJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJsappsCodeJsonRequest();
    $request->authtoken = 'corrupti';
    $request->code = 'provident';
    $request->login = 'distinctio';

    $response = $sdk->apps->deleteJsappsCodeJson($request);

    if ($response->deleteJsappsCodeJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->