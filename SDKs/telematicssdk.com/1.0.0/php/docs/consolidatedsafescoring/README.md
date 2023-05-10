# consolidatedSafeScoring

### Available Operations

* [rootV1ScoringsConsolidated](#rootv1scoringsconsolidated) - /v1/Scorings/consolidated
* [rootV1ScoringsConsolidatedDaily](#rootv1scoringsconsolidateddaily) - /v1/Scorings/consolidated/daily

## rootV1ScoringsConsolidated

/v1/Scorings/consolidated

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RootV1ScoringsConsolidatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RootV1ScoringsConsolidatedRequest();
    $request->appId = 'nisi';
    $request->companyId = 'recusandae';
    $request->deviceToken = 'temporibus';
    $request->endDate = '2021-01-18T01:04:22.840Z';
    $request->instanceId = 'ab';
    $request->startDate = '2021-01-17T01:04:22.840Z';
    $request->tag = 'quis';

    $response = $sdk->consolidatedSafeScoring->rootV1ScoringsConsolidated($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rootV1ScoringsConsolidatedDaily

/v1/Scorings/consolidated/daily

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RootV1ScoringsConsolidatedDailyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RootV1ScoringsConsolidatedDailyRequest();
    $request->appId = 'veritatis';
    $request->companyId = 'deserunt';
    $request->deviceToken = 'perferendis';
    $request->endDate = '2021-01-18T01:04:22.840Z';
    $request->instanceId = 'ipsam';
    $request->startDate = '2021-01-17T01:04:22.840Z';
    $request->tag = 'repellendus';

    $response = $sdk->consolidatedSafeScoring->rootV1ScoringsConsolidatedDaily($request);

    if ($response->rootV1ScoringsConsolidatedDaily200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
