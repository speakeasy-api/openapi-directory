<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETListsBestSellersHistoryJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListsBestSellersHistoryJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListsBestSellersHistoryJsonRequest();
    $request->ageGroup = 'corrupti';
    $request->author = 'provident';
    $request->contributor = 'distinctio';
    $request->isbn = 'quibusdam';
    $request->price = 'unde';
    $request->publisher = 'nulla';
    $request->title = 'Ms.';

    $requestSecurity = new GETListsBestSellersHistoryJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->getListsBestSellersHistoryJson($request, $requestSecurity);

    if ($response->getListsBestSellersHistoryJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->