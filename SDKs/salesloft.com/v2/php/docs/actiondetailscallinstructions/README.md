# actionDetailsCallInstructions

## Overview

Actions - Call Instructions

### Available Operations

* [getV2ActionDetailsCallInstructionsJson](#getv2actiondetailscallinstructionsjson) - List call instructions
* [getV2ActionDetailsCallInstructionsIdJson](#getv2actiondetailscallinstructionsidjson) - Fetch a call instructions

## getV2ActionDetailsCallInstructionsJson

Fetches multiple call instruction records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ActionDetailsCallInstructionsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ActionDetailsCallInstructionsJsonRequest();
    $request->ids = [
        292147,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 286915;
    $request->perPage = 240829;
    $request->sortBy = 'dolorum';
    $request->sortDirection = 'architecto';

    $response = $sdk->actionDetailsCallInstructions->getV2ActionDetailsCallInstructionsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2ActionDetailsCallInstructionsIdJson

Fetches a call instruction, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ActionDetailsCallInstructionsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ActionDetailsCallInstructionsIdJsonRequest();
    $request->id = '108e0adc-f4b9-4218-b9fc-e953f73ef7fb';

    $response = $sdk->actionDetailsCallInstructions->getV2ActionDetailsCallInstructionsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
