<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApodRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApodRequest();
    $request->date = 'corrupti';
    $request->hd = false;

    $requestSecurity = new GetApodSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->requestTag->getApod($request, $requestSecurity);

    if ($response->getApod200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->