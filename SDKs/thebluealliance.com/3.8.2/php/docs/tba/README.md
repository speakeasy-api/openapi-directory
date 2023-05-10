# tba

## Overview

Calls that expose TBA internals or status.

### Available Operations

* [getStatus](#getstatus) - Returns API status, and TBA status information.

## getStatus

Returns API status, and TBA status information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatusRequest();
    $request->ifNoneMatch = 'provident';

    $requestSecurity = new GetStatusSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tba->getStatus($request, $requestSecurity);

    if ($response->apiStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
