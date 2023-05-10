# meterValues

### Available Operations

* [meterValuesGet](#metervaluesget) - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.

## meterValuesGet

Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MeterValuesGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MeterValuesGetRequest();
    $request->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-06T18:20:18.409Z');
    $request->id = 'bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1';

    $response = $sdk->meterValues->meterValuesGet($request);

    if ($response->deviceInPast !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
