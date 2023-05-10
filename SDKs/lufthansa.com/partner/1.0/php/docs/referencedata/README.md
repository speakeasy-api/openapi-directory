# referenceData

### Available Operations

* [seatDetails](#seatdetails) - Seat Details

## seatDetails

A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SeatDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SeatDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SeatDetailsRequest();
    $request->accept = 'quasi';
    $request->aircraftCode = 'error';
    $request->cabinCode = 'temporibus';
    $request->lang = 'laborum';

    $requestSecurity = new SeatDetailsSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->referenceData->seatDetails($request, $requestSecurity);

    if ($response->seatDetails200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
