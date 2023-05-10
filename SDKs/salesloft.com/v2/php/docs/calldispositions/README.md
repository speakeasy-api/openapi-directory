# callDispositions

## Overview

Call Dispositions

### Available Operations

* [getV2CallDispositionsJson](#getv2calldispositionsjson) - List call dispositions

## getV2CallDispositionsJson

Fetches multiple call disposition records. The records can be sorted according to
the respective parameters. Call dispositions must be configured in application. This will
change in the future, but please contact us if you have a pressing use case.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CallDispositionsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CallDispositionsJsonRequest();
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 677115;
    $request->perPage = 341698;
    $request->sortBy = 'officia';
    $request->sortDirection = 'dolorum';

    $response = $sdk->callDispositions->getV2CallDispositionsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
