# valuesInPast

### Available Operations

* [valuesInPastGet](#valuesinpastget) - Gets all (last) values of a device
            The first Value found before the given Date is returned.

## valuesInPastGet

Gets the Values for a device at a given Date. The first Value found before the given Date is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValuesInPastGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValuesInPastGetRequest();
    $request->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-05T04:18:39.006Z');
    $request->id = 'aab5851d-6c64-45b0-8b61-891baa0fe1ad';

    $response = $sdk->valuesInPast->valuesInPastGet($request);

    if ($response->valuesData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
