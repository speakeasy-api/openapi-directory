<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifyCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyCheckRequest();
    $request->checkRequest = new CheckRequest();
    $request->checkRequest->apiKey = 'abcd1234';
    $request->checkRequest->apiSecret = 'Sup3rS3cr3t!!';
    $request->checkRequest->code = '1234';
    $request->checkRequest->ipAddress = '123.0.0.255';
    $request->checkRequest->requestId = 'abcdef0123456789abcdef0123456789';
    $request->format = FormatEnum::XML;

    $response = $sdk->verifyCheck($request);

    if ($response->verifyCheck200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->