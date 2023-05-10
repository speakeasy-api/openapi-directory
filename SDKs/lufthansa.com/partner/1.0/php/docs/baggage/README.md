# baggage

### Available Operations

* [baggageTripAndContact](#baggagetripandcontact) - Baggage Trip and Contact

## baggageTripAndContact

Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaggageTripAndContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\BaggageTripAndContactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaggageTripAndContactRequest();
    $request->accept = 'distinctio';
    $request->searchID = 'quibusdam';

    $requestSecurity = new BaggageTripAndContactSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->baggage->baggageTripAndContact($request, $requestSecurity);

    if ($response->baggageTripAndContact200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
