# developers

## Overview

Operations available to regular developers

### Available Operations

* [getEvents](#getevents) - get events for analytics

## getEvents

By passing in the company, site or deal Id a set of user interaction event records is returned. For pagination of a large result set use queryexecutionid and nexttoken instead.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsRequest();
    $request->company = 'Mueller - Oberbrunner';
    $request->deal = 'suscipit';
    $request->nexttoken = 'iure';
    $request->queryexecutionid = 'magnam';
    $request->site = 'debitis';
    $request->type = GetEventsTypeEnum::ALL;

    $response = $sdk->developers->getEvents($request);

    if ($response->eventRecords !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
