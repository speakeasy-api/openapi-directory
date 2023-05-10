<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BookingAvailabilityRequestBodyAgeBands;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookingAvailabilityRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new BookingAvailabilityRequestBody();
    $request->requestBody->ageBands = [
        new BookingAvailabilityRequestBodyAgeBands(),
        new BookingAvailabilityRequestBodyAgeBands(),
        new BookingAvailabilityRequestBodyAgeBands(),
    ];
    $request->requestBody->currencyCode = 'provident';
    $request->requestBody->month = 'distinctio';
    $request->requestBody->productCode = 'quibusdam';
    $request->requestBody->year = 'unde';

    $response = $sdk->bookingServices->bookingAvailability($request);

    if ($response->bookingAvailability200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->