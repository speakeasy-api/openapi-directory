<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMostemailedSectionTimePeriodJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETMostemailedSectionTimePeriodJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMostemailedSectionTimePeriodJsonRequest();
    $request->section = SectionEnum::PUBLIC_EDITOR;
    $request->timePeriod = TimePeriodEnum::SEVEN;

    $requestSecurity = new GETMostemailedSectionTimePeriodJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->getMostemailedSectionTimePeriodJson($request, $requestSecurity);

    if ($response->getMostemailedSectionTimePeriodJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->