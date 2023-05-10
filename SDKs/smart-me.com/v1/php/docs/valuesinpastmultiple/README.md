# valuesInPastMultiple

### Available Operations

* [valuesInPastMultipleGet](#valuesinpastmultipleget) - Gets multiple values of a device. This call needs a smart-me professional licence.

## valuesInPastMultipleGet

Gets multiple values of a device. This call needs a smart-me professional licence.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValuesInPastMultipleGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValuesInPastMultipleGetRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T00:52:48.741Z');
    $request->id = '08e6f8c5-f350-4d8c-9b5a-341814301042';
    $request->interval = 66149;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-14T02:36:08.751Z');

    $response = $sdk->valuesInPastMultiple->valuesInPastMultipleGet($request);

    if ($response->valuesData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
