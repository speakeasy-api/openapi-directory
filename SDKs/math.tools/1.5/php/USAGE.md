<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersBaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersBaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersBaseRequest();
    $request->from = 548814;
    $request->number = 592845;
    $request->to = 715190;

    $requestSecurity = new GetNumbersBaseSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->baseConversion->getNumbersBase($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->