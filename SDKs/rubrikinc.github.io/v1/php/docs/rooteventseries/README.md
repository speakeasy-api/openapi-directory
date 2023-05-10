# rootEventSeries

## Overview

Event Series.

### Available Operations

* [queryEventSeriesByIdV1](#queryeventseriesbyidv1) - Get all events and relevant information associated with an event series ID

## queryEventSeriesByIdV1

Gets all events, event series, SLA Domain, and object information that is associated with a specified event series ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryEventSeriesByIdV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryEventSeriesByIdV1Request();
    $request->id = '739ae9e0-57eb-4809-a281-0331f3981d4c';

    $response = $sdk->rootEventSeries->queryEventSeriesByIdV1($request);

    if ($response->eventSeriesSummaryV1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
