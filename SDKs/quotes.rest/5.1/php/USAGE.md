<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQodRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQodRequest();
    $request->category = 'corrupti';
    $request->id = 'provident';
    $request->language = 'distinctio';

    $requestSecurity = new GetQodSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->privateQOD->getQod($request, $requestSecurity);

    if ($response->qodResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->