# spell

## Overview

Spell out a number ordinal, cardinal or currency. This API is free (rate limited).

### Available Operations

* [getNumbersCardinal](#getnumberscardinal) - Get the cardinal of the given number
* [getNumbersCurrency](#getnumberscurrency) - Spells out the number as a currency
* [getNumbersOrdinal](#getnumbersordinal) - Get the ordinal of the given number

## getNumbersCardinal

Get the cardinal of the given number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersCardinalRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersCardinalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersCardinalRequest();
    $request->language = 'maiores';
    $request->number = 473608;

    $requestSecurity = new GetNumbersCardinalSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->spell->getNumbersCardinal($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersCurrency

Spells out the number as a currency

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersCurrencyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersCurrencySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersCurrencyRequest();
    $request->language = 'quod';
    $request->number = 800911;

    $requestSecurity = new GetNumbersCurrencySecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->spell->getNumbersCurrency($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersOrdinal

Get the ordinal of the given number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersOrdinalRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersOrdinalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersOrdinalRequest();
    $request->number = 461479;

    $requestSecurity = new GetNumbersOrdinalSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->spell->getNumbersOrdinal($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
