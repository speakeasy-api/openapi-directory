# virtualTariffsStatusForProperty

### Available Operations

* [virtualTariffsStatusForPropertyGet](#virtualtariffsstatusforpropertyget) - Gets the calculation status for a virtual tariff property

## virtualTariffsStatusForPropertyGet

Gets the calculation status for a virtual tariff property

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VirtualTariffsStatusForPropertyGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VirtualTariffsStatusForPropertyGetRequest();
    $request->id = '77373c8d-72f6-44d1-9b1f-2c4310661e96';

    $response = $sdk->virtualTariffsStatusForProperty->virtualTariffsStatusForPropertyGet($request);

    if ($response->virtualTariffsStatusForPropertyGet200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
