# checkAPIUsage

## Overview

Resources that let you get API usage information.

### Available Operations

* [getApiUsagePlansV2](#getapiusageplansv2) - Get API Isage

## getApiUsagePlansV2

Returns prediction usage on a monthly basis for the current calendar month and future months. Each apiusage object in the response corresponds to a calendar month in your plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiUsagePlansV2Security;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetApiUsagePlansV2Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->checkAPIUsage->getApiUsagePlansV2($requestSecurity);

    if ($response->apiUsageList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
