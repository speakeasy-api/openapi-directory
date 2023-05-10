# reports

## Overview

Reports generation

### Available Operations

* [getReportsEvents](#getreportsevents) - Fetch a list of Events within the time period for the Devices or Groups
* [getReportsRoute](#getreportsroute) - Fetch a list of Positions within the time period for the Devices or Groups
* [getReportsStops](#getreportsstops) - Fetch a list of ReportStops within the time period for the Devices or Groups
* [getReportsSummary](#getreportssummary) - Fetch a list of ReportSummary within the time period for the Devices or Groups
* [getReportsTrips](#getreportstrips) - Fetch a list of ReportTrips within the time period for the Devices or Groups

## getReportsEvents

At least one _deviceId_ or one _groupId_ must be passed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsEventsRequest();
    $request->deviceId = [
        704415,
        596656,
        31838,
    ];
    $request->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-04T15:50:14.407Z');
    $request->groupId = [
        621479,
        50370,
        577229,
    ];
    $request->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T08:07:03.616Z');
    $request->type = [
        'earum',
        'modi',
        'iste',
        'dolorum',
    ];

    $response = $sdk->reports->getReportsEvents($request);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportsRoute

At least one _deviceId_ or one _groupId_ must be passed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsRouteRequest();
    $request->deviceId = [
        864282,
        589910,
        750844,
    ];
    $request->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-26T22:08:21.462Z');
    $request->groupId = [
        554242,
        398221,
    ];
    $request->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-16T09:46:06.582Z');

    $response = $sdk->reports->getReportsRoute($request);

    if ($response->positions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportsStops

At least one _deviceId_ or one _groupId_ must be passed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsStopsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsStopsRequest();
    $request->deviceId = [
        186193,
    ];
    $request->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-21T07:17:52.299Z');
    $request->groupId = [
        739551,
        452109,
        490459,
    ];
    $request->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-26T23:32:35.989Z');

    $response = $sdk->reports->getReportsStops($request);

    if ($response->reportStops !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportsSummary

At least one _deviceId_ or one _groupId_ must be passed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsSummaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsSummaryRequest();
    $request->deviceId = [
        254356,
        85295,
        58029,
    ];
    $request->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T10:30:36.625Z');
    $request->groupId = [
        311796,
        881005,
    ];
    $request->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-18T05:23:42.271Z');

    $response = $sdk->reports->getReportsSummary($request);

    if ($response->reportSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportsTrips

At least one _deviceId_ or one _groupId_ must be passed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsTripsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsTripsRequest();
    $request->deviceId = [
        617658,
        179603,
    ];
    $request->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-13T23:37:42.244Z');
    $request->groupId = [
        67249,
        743835,
        679393,
        478596,
    ];
    $request->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T20:45:55.086Z');

    $response = $sdk->reports->getReportsTrips($request);

    if ($response->reportTrips !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
