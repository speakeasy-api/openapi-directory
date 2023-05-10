# numberSystemsConversion

## Overview

Convert from one number system to another.

### Available Operations

* [getNumbersNumeralChinese](#getnumbersnumeralchinese) - Convert base 10 representation of a given number to chinese numeral.
* [getNumbersNumeralEgyptian](#getnumbersnumeralegyptian) - Convert base 10 representation of a given number to egyptian numeral.
* [getNumbersNumeralRoman](#getnumbersnumeralroman) - Convert base 10 representation of a given number to roman numeral.

## getNumbersNumeralChinese

Convert base 10 representation of a given number to chinese numeral.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersNumeralChineseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersNumeralChineseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersNumeralChineseRequest();
    $request->number = 836079;

    $requestSecurity = new GetNumbersNumeralChineseSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberSystemsConversion->getNumbersNumeralChinese($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersNumeralEgyptian

Convert base 10 representation of a given number to egyptian numeral.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersNumeralEgyptianRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersNumeralEgyptianSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersNumeralEgyptianRequest();
    $request->number = 71036;

    $requestSecurity = new GetNumbersNumeralEgyptianSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberSystemsConversion->getNumbersNumeralEgyptian($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersNumeralRoman

Convert base 10 representation of a given number to roman numeral.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersNumeralRomanRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersNumeralRomanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersNumeralRomanRequest();
    $request->number = 337396;

    $requestSecurity = new GetNumbersNumeralRomanSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberSystemsConversion->getNumbersNumeralRoman($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
