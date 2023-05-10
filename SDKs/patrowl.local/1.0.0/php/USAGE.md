<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CleanScanPageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CleanScanPageRequest();
    $request->scanId = 548814;

    $response = $sdk->patrowlEngine->cleanScanPage($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->