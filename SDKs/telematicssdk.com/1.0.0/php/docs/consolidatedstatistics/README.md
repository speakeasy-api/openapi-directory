# consolidatedStatistics

### Available Operations

* [rootV1StatisticsConsolidated](#rootv1statisticsconsolidated) - /v1/Statistics/consolidated
* [rootV1StatisticsConsolidatedDaily](#rootv1statisticsconsolidateddaily) - /v1/Statistics/consolidated/daily

## rootV1StatisticsConsolidated

/v1/Statistics/consolidated

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RootV1StatisticsConsolidatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RootV1StatisticsConsolidatedRequest();
    $request->appId = 'sapiente';
    $request->companyId = 'quo';
    $request->deviceToken = 'odit';
    $request->endDate = '2021-03-18';
    $request->instanceId = 'at';
    $request->startDate = '2021-01-18';
    $request->tag = 'at';

    $response = $sdk->consolidatedStatistics->rootV1StatisticsConsolidated($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rootV1StatisticsConsolidatedDaily

/v1/Statistics/consolidated/daily

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RootV1StatisticsConsolidatedDailyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RootV1StatisticsConsolidatedDailyRequest();
    $request->appId = 'maiores';
    $request->companyId = 'molestiae';
    $request->deviceToken = 'quod';
    $request->endDate = '2021-01-18';
    $request->instanceId = 'quod';
    $request->startDate = '2021-01-17';
    $request->tag = 'esse';

    $response = $sdk->consolidatedStatistics->rootV1StatisticsConsolidatedDaily($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
