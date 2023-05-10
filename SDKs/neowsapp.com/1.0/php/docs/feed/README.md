# feed

## Overview

Operations with NearEarthObjects

### Available Operations

* [retrieveNEOFeedToday](#retrieveneofeedtoday) - Find Near Earth Objects for today
* [retrieveNearEarthObjectFeed](#retrievenearearthobjectfeed) - Find Near Earth Objects by date

## retrieveNEOFeedToday

Get a list of Near Earth Objects for today

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveNEOFeedTodayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveNEOFeedTodayRequest();
    $request->detailed = false;

    $response = $sdk->feed->retrieveNEOFeedToday($request);

    if ($response->nearEarthObjectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveNearEarthObjectFeed

Get a list of Near Earth Objects within a date range, The max range in one query is 7 days

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveNearEarthObjectFeedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveNearEarthObjectFeedRequest();
    $request->detailed = false;
    $request->endDate = 'corrupti';
    $request->startDate = 'provident';

    $response = $sdk->feed->retrieveNearEarthObjectFeed($request);

    if ($response->nearEarthObjectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
