# healthByTime

### Available Operations

* [getNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time

## getNetworkInsightApplicationHealthByTime

Get application health by time

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkInsightApplicationHealthByTimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkInsightApplicationHealthByTimeRequest();
    $request->applicationId = 'dicta';
    $request->networkId = 'maiores';
    $request->resolution = 175676;
    $request->t0 = 'perferendis';
    $request->t1 = 'eum';
    $request->timespan = 8596.04;

    $response = $sdk->healthByTime->getNetworkInsightApplicationHealthByTime($request);

    if ($response->getNetworkInsightApplicationHealthByTime200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
