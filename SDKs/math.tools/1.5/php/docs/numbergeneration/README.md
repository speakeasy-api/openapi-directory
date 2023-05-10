# numberGeneration

## Overview

Generate Random and interesting numbers.

### Available Operations

* [getNumbersRandom](#getnumbersrandom) - Generate random number(s)

## getNumbersRandom

Generate random number(s)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersRandomRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersRandomSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersRandomRequest();
    $request->max = 568045;
    $request->min = 392785;
    $request->total = 925597;

    $requestSecurity = new GetNumbersRandomSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberGeneration->getNumbersRandom($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
