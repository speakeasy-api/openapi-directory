<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AreasGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AreasGetRequest();
    $request->version = 'corrupti';

    $response = $sdk->areas->areasGet($request);

    if ($response->areaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->