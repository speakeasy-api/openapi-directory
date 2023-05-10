# currentGlobalTime

### Available Operations

* [getglobaltime](#getglobaltime) - Gets the current time for a global locale

## getglobaltime

Gets the current time for a global locale (city, state, region, or country such as Chicago, London, Paris, Seoul, Spain, Buenos Aires, Hawaii, Moscow, Tokyo, Hanoi, etc.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetglobaltimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetglobaltimeRequest();
    $request->license = 'distinctio';
    $request->locale = 'quibusdam';

    $response = $sdk->currentGlobalTime->getglobaltime($request);

    if ($response->getglobaltime200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
