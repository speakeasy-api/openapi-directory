# steps

## Overview

Steps

### Available Operations

* [getV2StepsJson](#getv2stepsjson) - List steps
* [getV2StepsIdJson](#getv2stepsidjson) - Fetch a step

## getV2StepsJson

Fetches multiple step records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2StepsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2StepsJsonRequest();
    $request->cadenceId = 125811;
    $request->hasDueActions = false;
    $request->ids = [
        205011,
        139745,
        936845,
        330596,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 373106;
    $request->perPage = 51053;
    $request->sortBy = 'exercitationem';
    $request->sortDirection = 'veniam';
    $request->type = 'nihil';

    $response = $sdk->steps->getV2StepsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2StepsIdJson

Fetches a step, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2StepsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2StepsIdJsonRequest();
    $request->id = '56f5d56d-0bd0-4af2-9fe1-3db4f62cba3f';

    $response = $sdk->steps->getV2StepsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
