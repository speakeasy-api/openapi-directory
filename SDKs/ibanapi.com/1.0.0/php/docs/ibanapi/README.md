# ibanapi

## Overview

API Endpoints of IBANAPI

### Available Operations

* [getBalance](#getbalance) - Get Account Balance
* [validateIBAN](#validateiban) - Validate IBAN
* [validateIBANBasic](#validateibanbasic) - Validate IBAN Basic

## getBalance

Returns the account balance and expiry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBalanceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetBalanceSecurity();
    $requestSecurity->apiKeySecurity = 'YOUR_API_KEY_HERE';

    $response = $sdk->ibanapi->getBalance($requestSecurity);

    if ($response->balanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateIBAN

Returns the validation results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValidateIBANRequest;
use \OpenAPI\OpenAPI\Models\Operations\ValidateIBANSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateIBANRequest();
    $request->iban = 'corrupti';

    $requestSecurity = new ValidateIBANSecurity();
    $requestSecurity->apiKeySecurity = 'YOUR_API_KEY_HERE';

    $response = $sdk->ibanapi->validateIBAN($request, $requestSecurity);

    if ($response->ibanResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateIBANBasic

Returns the basic validation results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValidateIBANBasicRequest;
use \OpenAPI\OpenAPI\Models\Operations\ValidateIBANBasicSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateIBANBasicRequest();
    $request->iban = 'provident';

    $requestSecurity = new ValidateIBANBasicSecurity();
    $requestSecurity->apiKeySecurity = 'YOUR_API_KEY_HERE';

    $response = $sdk->ibanapi->validateIBANBasic($request, $requestSecurity);

    if ($response->ibanResultBasic !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
