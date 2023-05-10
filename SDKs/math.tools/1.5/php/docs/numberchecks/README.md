# numberChecks

## Overview

Check Property of a given number.

### Available Operations

* [getNumbersIsCube](#getnumbersiscube) - Checks whether a given number is a cube number or not.
* [getNumbersIsPalindrome](#getnumbersispalindrome) - Checks whether a given number is a palindrome number or not.
* [getNumbersIsSquare](#getnumbersissquare) - Checks whether a given number is a square number or not.
* [getNumbersIsTriangle](#getnumbersistriangle) - Checks whether a given number is a triangle number or not.
* [getNumbersPrimeIsFermatPrime](#getnumbersprimeisfermatprime) - Checks whether a given number is a known fermat prime number or not.
* [getNumbersPrimeIsFibonacciPrime](#getnumbersprimeisfibonacciprime) - Checks whether a given number is a known fibonacci prime number or not.
* [getNumbersPrimeIsMersennePrime](#getnumbersprimeismersenneprime) - Checks whether a given number is a known mersenne prime number or not.
* [getNumbersPrimeIsPartitionPrime](#getnumbersprimeispartitionprime) - Checks whether a given number is a known partition prime number or not.
* [getNumbersPrimeIsPellPrime](#getnumbersprimeispellprime) - Checks whether a given number is a known pell prime number or not.
* [getNumbersPrimeIsPerfect](#getnumbersprimeisperfect) - Checks whether a given number is a perfect number or not.
* [getNumbersPrimeIsPrime](#getnumbersprimeisprime) - Checks whether a given number is a known prime number or not.

## getNumbersIsCube

Checks whether a given number is a cube number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersIsCubeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersIsCubeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersIsCubeRequest();
    $request->number = 437587;

    $requestSecurity = new GetNumbersIsCubeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersIsCube($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersIsPalindrome

Checks whether a given number is a palindrome number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersIsPalindromeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersIsPalindromeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersIsPalindromeRequest();
    $request->number = 297534;

    $requestSecurity = new GetNumbersIsPalindromeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersIsPalindrome($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersIsSquare

Checks whether a given number is a square number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersIsSquareRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersIsSquareSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersIsSquareRequest();
    $request->number = 891773;

    $requestSecurity = new GetNumbersIsSquareSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersIsSquare($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumbersIsTriangle

Checks whether a given number is a triangle number or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersIsTriangleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumbersIsTriangleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumbersIsTriangleRequest();
    $request->number = 56713;

    $requestSecurity = new GetNumbersIsTriangleSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersIsTriangle($request, $requestSecurity);

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
    $request->number = 963663;

    $requestSecurity = new GetNumbersPrimeIsFermatPrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersPrimeIsFermatPrime($request, $requestSecurity);

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
    $request->number = 272656;

    $requestSecurity = new GetNumbersPrimeIsFibonacciPrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersPrimeIsFibonacciPrime($request, $requestSecurity);

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
    $request->number = 383441;

    $requestSecurity = new GetNumbersPrimeIsMersennePrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersPrimeIsMersennePrime($request, $requestSecurity);

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
    $request->number = 477665;

    $requestSecurity = new GetNumbersPrimeIsPartitionPrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersPrimeIsPartitionPrime($request, $requestSecurity);

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
    $request->number = 791725;

    $requestSecurity = new GetNumbersPrimeIsPellPrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersPrimeIsPellPrime($request, $requestSecurity);

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
    $request->number = 812169;

    $requestSecurity = new GetNumbersPrimeIsPerfectSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersPrimeIsPerfect($request, $requestSecurity);

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
    $request->number = 528895;

    $requestSecurity = new GetNumbersPrimeIsPrimeSecurity();
    $requestSecurity->xMathtoolsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberChecks->getNumbersPrimeIsPrime($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
