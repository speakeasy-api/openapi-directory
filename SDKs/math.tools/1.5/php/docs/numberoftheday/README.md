# numberOfTheDay

## Overview

Number of the day. This API is free (rate limited).

### Available Operations

* [getNumbersNod](#getnumbersnod) - Get the number of the day for current day

## getNumbersNod

Get the number of the day for current day

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersNodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetNumbersNodSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberOfTheDay->getNumbersNod($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
