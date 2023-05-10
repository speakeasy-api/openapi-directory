# callSentiments

## Overview

Call Sentiments

### Available Operations

* [getV2CallSentimentsJson](#getv2callsentimentsjson) - List call sentiments

## getV2CallSentimentsJson

Fetches multiple call sentiment records. The records can be sorted according to
the respective parameters. Call sentiments must be configured in application. This will
change in the future, but please contact us if you have a pressing use case.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CallSentimentsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CallSentimentsJsonRequest();
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->name = 'Caleb Goldner';
    $request->page = 282699;
    $request->perPage = 856303;
    $request->sortBy = 'voluptatem';
    $request->sortDirection = 'culpa';

    $response = $sdk->callSentiments->getV2CallSentimentsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
