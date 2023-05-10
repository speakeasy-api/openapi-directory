<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScansRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScansSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1ScansRequest();
    $request->name = 'Terrence Rau';
    $request->perPage = 'nulla';

    $requestSecurity = new GetApiV1ScansSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->scans->getApiV1Scans($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->