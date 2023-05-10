# metrics

## Overview

Operations related to metrics

### Available Operations

* [getAggregatedInvocationsStats](#getaggregatedinvocationsstats) - Get aggregated invocation statistics for a day
* [getConformanceMetricsAggregation](#getconformancemetricsaggregation) - Get aggregation of conformance metrics
* [getInvocationStatsByService](#getinvocationstatsbyservice) - Get invocation statistics for Service
* [getLatestAggregatedInvocationsStats](#getlatestaggregatedinvocationsstats) - Get aggregated invocations statistics for latest days
* [getLatestTestResults](#getlatesttestresults) - Get latest tests results
* [getServiceTestConformanceMetric](#getservicetestconformancemetric) - Get conformance metrics for a Service
* [getTopIvnocationsStatsByDay](#gettopivnocationsstatsbyday) - Get top invocation statistics for a day

## getAggregatedInvocationsStats

Get aggregated invocation statistics for a day

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAggregatedInvocationsStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAggregatedInvocationsStatsRequest();
    $request->day = 'facilis';

    $response = $sdk->metrics->getAggregatedInvocationsStats($request);

    if ($response->dailyInvocationStatistic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConformanceMetricsAggregation

Get aggregation of conformance metrics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->metrics->getConformanceMetricsAggregation();

    if ($response->weightedMetricValues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvocationStatsByService

Get invocation statistics for Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInvocationStatsByServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvocationStatsByServiceRequest();
    $request->day = 'aliquid';
    $request->serviceName = 'quam';
    $request->serviceVersion = 'molestias';

    $response = $sdk->metrics->getInvocationStatsByService($request);

    if ($response->dailyInvocationStatistic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLatestAggregatedInvocationsStats

Get aggregated invocations statistics for latest days

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestAggregatedInvocationsStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLatestAggregatedInvocationsStatsRequest();
    $request->limit = 840429;

    $response = $sdk->metrics->getLatestAggregatedInvocationsStats($request);

    if ($response->counterMap !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLatestTestResults

Get latest tests results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestTestResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLatestTestResultsRequest();
    $request->limit = 183280;

    $response = $sdk->metrics->getLatestTestResults($request);

    if ($response->testResultSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceTestConformanceMetric

Get conformance metrics for a Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceTestConformanceMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceTestConformanceMetricRequest();
    $request->serviceId = 'neque';

    $response = $sdk->metrics->getServiceTestConformanceMetric($request);

    if ($response->testConformanceMetric !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTopIvnocationsStatsByDay

Get top invocation statistics for a day

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTopIvnocationsStatsByDayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTopIvnocationsStatsByDayRequest();
    $request->day = 'fugit';
    $request->limit = 164959;

    $response = $sdk->metrics->getTopIvnocationsStatsByDay($request);

    if ($response->dailyInvocationStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
