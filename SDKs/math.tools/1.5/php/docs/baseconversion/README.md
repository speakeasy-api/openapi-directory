# baseConversion

## Overview

Convert from one base to another. This API is free (rate limited).

### Available Operations

* [getNumbersBase](#getnumbersbase) - Convert a given number from one base to another base
* [getNumbersBaseBinary](#getnumbersbasebinary) - Convert a given number to binary
* [getNumbersBaseHex](#getnumbersbasehex) - Convert a given number to hexadecimal
* [getNumbersBaseOctal](#getnumbersbaseoctal) - Convert a given number to octal

## getNumbersBase

Convert a given number from one base to another base

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersBaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersBaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersBaseRequest();
    $request->from = 844266;
    $request->number = 602763;
    $request->to = 857946;

    $requestSecurity = new GetNumbersBaseSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->baseConversion->getNumbersBase($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersBaseBinary

Convert a given number to binary

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersBaseBinaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersBaseBinarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersBaseBinaryRequest();
    $request->from = 544883;
    $request->number = 847252;

    $requestSecurity = new GetNumbersBaseBinarySecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->baseConversion->getNumbersBaseBinary($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersBaseHex

Convert a given number to hexadecimal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersBaseHexRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersBaseHexSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersBaseHexRequest();
    $request->from = 423655;
    $request->number = 623564;

    $requestSecurity = new GetNumbersBaseHexSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->baseConversion->getNumbersBaseHex($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersBaseOctal

Convert a given number to octal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersBaseOctalRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersBaseOctalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersBaseOctalRequest();
    $request->from = 645894;
    $request->number = 384382;

    $requestSecurity = new GetNumbersBaseOctalSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->baseConversion->getNumbersBaseOctal($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
