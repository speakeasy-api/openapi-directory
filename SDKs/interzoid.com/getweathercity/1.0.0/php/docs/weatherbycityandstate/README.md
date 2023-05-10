# weatherByCityAndState

### Available Operations

* [getweather](#getweather) - Gets current weather information for a US city and state

## getweather

Use city and state to retrieve current US weather information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetweatherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetweatherRequest();
    $request->city = 'Meridian';
    $request->license = 'illum';
    $request->state = 'vel';

    $response = $sdk->weatherByCityAndState->getweather($request);

    if ($response->getweather200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
