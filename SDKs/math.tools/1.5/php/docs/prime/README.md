# prime

## Overview

Things to do with Prime numbers

### Available Operations

* [getNumbersPrimeFactors](#getnumbersprimefactors) - Get the prime factors of a given number.
* [getNumbersPrimeIsFermatPrime](#getnumbersprimeisfermatprime) - Checks whether a given number is a known fermat prime number or not.
* [getNumbersPrimeIsFibonacciPrime](#getnumbersprimeisfibonacciprime) - Checks whether a given number is a known fibonacci prime number or not.
* [getNumbersPrimeIsMersennePrime](#getnumbersprimeismersenneprime) - Checks whether a given number is a known mersenne prime number or not.
* [getNumbersPrimeIsPartitionPrime](#getnumbersprimeispartitionprime) - Checks whether a given number is a known partition prime number or not.
* [getNumbersPrimeIsPellPrime](#getnumbersprimeispellprime) - Checks whether a given number is a known pell prime number or not.
* [getNumbersPrimeIsPerfect](#getnumbersprimeisperfect) - Checks whether a given number is a perfect number or not.
* [getNumbersPrimeIsPrime](#getnumbersprimeisprime) - Checks whether a given number is a known prime number or not.

## getNumbersPrimeFactors

Get the prime factors of a given number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeFactorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeFactorsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersPrimeFactorsRequest();
    $request->number = 20218;

    $requestSecurity = new GetNumbersPrimeFactorsSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->prime->getNumbersPrimeFactors($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersPrimeIsFermatPrime

Checks whether a given number is a known fermat prime number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsFermatPrimeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsFermatPrimeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersPrimeIsFermatPrimeRequest();
    $request->number = 368241;

    $requestSecurity = new GetNumbersPrimeIsFermatPrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->prime->getNumbersPrimeIsFermatPrime($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersPrimeIsFibonacciPrime

Checks whether a given number is a known fibonacci prime number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsFibonacciPrimeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsFibonacciPrimeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersPrimeIsFibonacciPrimeRequest();
    $request->number = 832620;

    $requestSecurity = new GetNumbersPrimeIsFibonacciPrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->prime->getNumbersPrimeIsFibonacciPrime($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersPrimeIsMersennePrime

Checks whether a given number is a known mersenne prime number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsMersennePrimeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsMersennePrimeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersPrimeIsMersennePrimeRequest();
    $request->number = 957156;

    $requestSecurity = new GetNumbersPrimeIsMersennePrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->prime->getNumbersPrimeIsMersennePrime($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersPrimeIsPartitionPrime

Checks whether a given number is a known partition prime number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsPartitionPrimeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsPartitionPrimeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersPrimeIsPartitionPrimeRequest();
    $request->number = 778157;

    $requestSecurity = new GetNumbersPrimeIsPartitionPrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->prime->getNumbersPrimeIsPartitionPrime($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersPrimeIsPellPrime

Checks whether a given number is a known pell prime number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsPellPrimeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsPellPrimeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersPrimeIsPellPrimeRequest();
    $request->number = 140350;

    $requestSecurity = new GetNumbersPrimeIsPellPrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->prime->getNumbersPrimeIsPellPrime($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersPrimeIsPerfect

Checks whether a given number is a perfect number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsPerfectRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsPerfectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersPrimeIsPerfectRequest();
    $request->number = 870013;

    $requestSecurity = new GetNumbersPrimeIsPerfectSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->prime->getNumbersPrimeIsPerfect($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersPrimeIsPrime

Checks whether a given number is a known prime number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsPrimeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersPrimeIsPrimeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersPrimeIsPrimeRequest();
    $request->number = 870088;

    $requestSecurity = new GetNumbersPrimeIsPrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->prime->getNumbersPrimeIsPrime($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
