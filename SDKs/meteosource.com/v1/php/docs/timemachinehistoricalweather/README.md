# timeMachineHistoricalWeather

### Available Operations

* [timeMachineTimeMachineGet](#timemachinetimemachineget) - Returns weather data for a single location and given day in the past

## timeMachineTimeMachineGet

## Actual weather data for a single location and day in the past

The output contains actual weather data for each day up to 20 years in the past, and long-term statistics of selected weather variables aggregated over 40 years.

### Location specification
The location of the weather data must be specified. There are two ways to do this:
1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).

*Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive data for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TimeMachineTimeMachineGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\TimeMachineTimeMachineGetUnitsUnitsEnum;
use \OpenAPI\OpenAPI\Models\Operations\TimeMachineTimeMachineGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TimeMachineTimeMachineGetRequest();
    $request->date = DateTime::createFromFormat('Y-m-d', '2020-06-29');
    $request->key = 'ab';
    $request->lat = 'quis';
    $request->lon = 'veritatis';
    $request->placeId = 'deserunt';
    $request->timezone = 'perferendis';
    $request->units = TimeMachineTimeMachineGetUnitsUnitsEnum::METRIC;

    $requestSecurity = new TimeMachineTimeMachineGetSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->timeMachineHistoricalWeather->timeMachineTimeMachineGet($request, $requestSecurity);

    if ($response->timeMachineTimeMachine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
