# statistics

## Overview

Retrieving server statistics

### Available Operations

* [getStatistics](#getstatistics) - Fetch server Statistics

## getStatistics

Fetch server Statistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatisticsRequest();
    $request->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-31T23:01:47.942Z');
    $request->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-24T12:18:47.570Z');

    $response = $sdk->statistics->getStatistics($request);

    if ($response->statistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
