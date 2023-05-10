# two1UserStatisticsOptional

### Available Operations

* [userStatisticeDailyValueV1StatisticsIndividualDaily](#userstatisticedailyvaluev1statisticsindividualdaily) - User statistice - Daily value - v1/Statistics/individual/daily
* [userStatisticsAccumulatedValueV1StatisticsIndividual](#userstatisticsaccumulatedvaluev1statisticsindividual) - User statistics - Accumulated value - /v1/Statistics/individual

## userStatisticeDailyValueV1StatisticsIndividualDaily

User statistice - Daily value - v1/Statistics/individual/daily

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserStatisticeDailyValueV1StatisticsIndividualDailyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserStatisticeDailyValueV1StatisticsIndividualDailyRequest();
    $request->endDate = '2021-03-30';
    $request->startDate = '2021-03-30';

    $response = $sdk->two1UserStatisticsOptional->userStatisticeDailyValueV1StatisticsIndividualDaily($request);

    if ($response->userStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userStatisticsAccumulatedValueV1StatisticsIndividual

User statistics - Accumulated value - /v1/Statistics/individual

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserStatisticsAccumulatedValueV1StatisticsIndividualRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserStatisticsAccumulatedValueV1StatisticsIndividualRequest();
    $request->endDate = '2021-01-30';
    $request->startDate = '2021-01-01';

    $response = $sdk->two1UserStatisticsOptional->userStatisticsAccumulatedValueV1StatisticsIndividual($request);

    if ($response->userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
