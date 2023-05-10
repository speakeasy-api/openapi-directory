# successes

## Overview

Success Management

### Available Operations

* [getV2SuccessesJson](#getv2successesjson) - List successes

## getV2SuccessesJson

Fetches multiple success records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2SuccessesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2SuccessesJsonRequest();
    $request->ids = [
        621140,
        252473,
        97810,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 649032;
    $request->perPage = 884361;
    $request->personId = [
        769156,
        42615,
        711871,
    ];
    $request->sortBy = 'corrupti';
    $request->sortDirection = 'eaque';
    $request->updatedAt = [
        'aliquid',
        'excepturi',
        'magni',
    ];

    $response = $sdk->successes->getV2SuccessesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
