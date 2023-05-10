# numberFacts

## Overview

Get random interesting fact about a given number.

### Available Operations

* [getNumbersFact](#getnumbersfact) - Get a random fact about a number

## getNumbersFact

Get a random fact about a number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersFactRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersFactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersFactRequest();
    $request->number = 479977;

    $requestSecurity = new GetNumbersFactSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberFacts->getNumbersFact($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
