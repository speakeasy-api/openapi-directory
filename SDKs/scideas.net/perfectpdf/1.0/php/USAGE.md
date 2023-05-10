<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PerfectpdfApiBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PerfectpdfApiBody();
    $request->apiKey = 'abc123';
    $request->html = '<!doctype html><html><head><meta charset="UTF-8"><title>my title</title><script src="script.js"></script></head><body><div>My PDF</div></body></html>';

    $response = $sdk->postPerfectpdfApi($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->