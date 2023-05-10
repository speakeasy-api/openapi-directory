<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompileRequest();
    $request->requestBody = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->explain = 'illum';
    $request->instrument = false;
    $request->metrics = false;
    $request->pretty = false;

    $response = $sdk->compileAPI->postCompile($request);

    if ($response->postCompile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->