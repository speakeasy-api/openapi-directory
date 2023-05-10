# statsFindMarketplaceStatistics

### Available Operations

* [getStatsSeriesPeriodFields](#getstatsseriesperiodfields) - Return a timeseries for a particular field
* [getStatsTotal](#getstatstotal) - Returns the total number of events for a particular field.
* [postStatsIncrementField](#poststatsincrementfield) - Increments a statistics field

## getStatsSeriesPeriodFields

Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStatsSeriesPeriodFieldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStatsSeriesPeriodFieldsPeriodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatsSeriesPeriodFieldsRequest();
    $request->end = 230533;
    $request->fields = 'deserunt';
    $request->period = GetStatsSeriesPeriodFieldsPeriodEnum::DAY;
    $request->query = 'vel';
    $request->start = 618809;

    $response = $sdk->statsFindMarketplaceStatistics->getStatsSeriesPeriodFields($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatsTotal

Returns the total number of events for a particular field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStatsTotalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatsTotalRequest();
    $request->end = 606393;
    $request->fields = 'molestiae';
    $request->query = 'perferendis';
    $request->start = 470132;

    $response = $sdk->statsFindMarketplaceStatistics->getStatsTotal($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStatsIncrementField

increment a statistics field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostStatsIncrementFieldRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostStatsIncrementFieldRequest();
    $request->appId = 'magnam';
    $request->date = 716075;
    $request->field = 'id';
    $request->userId = 'labore';
    $request->value = 290077;

    $response = $sdk->statsFindMarketplaceStatistics->postStatsIncrementField($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
