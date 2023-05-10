<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->format = GetFormatEnum::XML;
    $request->ip = 'provident';
    $request->key = 'distinctio';
    $request->package = 'quibusdam';

    $response = $sdk->get($request);

    if ($response->get200TextHTMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->