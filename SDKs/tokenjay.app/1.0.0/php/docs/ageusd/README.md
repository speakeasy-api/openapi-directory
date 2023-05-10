# ageUsd

### Available Operations

* [calcSigmaRsvExchange](#calcsigmarsvexchange) - Calculates SigRSV exchange
* [calcSigmaUsdExchange](#calcsigmausdexchange) - Calculates SigUSD exchange
* [doSigmaRsvExchange](#dosigmarsvexchange) - Builds ErgoPayRequest for SigRSV exchange
* [doSigmaUsdExchange](#dosigmausdexchange) - Builds ErgoPayRequest for SigUSD exchange
* [getAgeUsdInfo](#getageusdinfo) - Returns state of AgeUSD at this moment
* [getSigmaRsvPrice](#getsigmarsvprice) - Lists price and available volume for SigmaRSV
* [getSigmaUsdPrice](#getsigmausdprice) - Lists price and available volume for SigmaUSD

## calcSigmaRsvExchange

Calculates SigRSV exchange

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalcSigmaRsvExchangeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalcSigmaRsvExchangeRequest();
    $request->amount = 592845;

    $response = $sdk->ageUsd->calcSigmaRsvExchange($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calcSigmaUsdExchange

Calculates SigUSD exchange

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalcSigmaUsdExchangeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalcSigmaUsdExchangeRequest();
    $request->amount = 715190;

    $response = $sdk->ageUsd->calcSigmaUsdExchange($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doSigmaRsvExchange

Builds ErgoPayRequest for SigRSV exchange

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoSigmaRsvExchangeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoSigmaRsvExchangeRequest();
    $request->address = '685 Kassulke Passage';
    $request->amount = 645894;
    $request->checkRate = 384382;
    $request->executionFee = 437587;

    $response = $sdk->ageUsd->doSigmaRsvExchange($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doSigmaUsdExchange

Builds ErgoPayRequest for SigUSD exchange

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoSigmaUsdExchangeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoSigmaUsdExchangeRequest();
    $request->address = '80923 Paxton Spurs';
    $request->amount = 528895;
    $request->checkRate = 479977;
    $request->executionFee = 568045;

    $response = $sdk->ageUsd->doSigmaUsdExchange($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAgeUsdInfo

Returns state of AgeUSD at this moment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->ageUsd->getAgeUsdInfo();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSigmaRsvPrice

Lists price and available volume for SigmaRSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->ageUsd->getSigmaRsvPrice();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSigmaUsdPrice

Lists price and available volume for SigmaUSD

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->ageUsd->getSigmaUsdPrice();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
