<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatusRequest();
    $request->ifNoneMatch = 'corrupti';

    $requestSecurity = new GetStatusSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tba->getStatus($request, $requestSecurity);

    if ($response->apiStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->