<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->domain = 'corrupti';
    $request->format = 'provident';
    $request->key = 'distinctio';

    $response = $sdk->get($request);

    if ($response->get200TextHTMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->