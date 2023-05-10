# schedule

### Available Operations

* [listSchedule](#listschedule) - Schedule Collection

## listSchedule

The schedule endpoint produces a linear TV schedule for a given channel and date range.

 - The date range supplied must be no larger than 21 days.
 - If no end data is passed the API will default to start date + 24 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListScheduleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListScheduleRequest();
    $request->aliases = false;
    $request->channelId = 'deserunt';
    $request->end = 'perferendis';
    $request->start = 'ipsam';

    $requestSecurity = new ListScheduleSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->schedule->listSchedule($request, $requestSecurity);

    if ($response->listSchedule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
