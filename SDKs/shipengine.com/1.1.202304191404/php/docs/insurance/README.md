# insurance

## Overview

insurance


### Available Operations

* [addFundsToInsurance](#addfundstoinsurance) - Add Funds To Insurance
* [connectInsurer](#connectinsurer) - Connect a Shipsurance Account
* [disconnectInsurer](#disconnectinsurer) - Disconnect a Shipsurance Account
* [getInsuranceBalance](#getinsurancebalance) - Get Insurance Funds Balance

## addFundsToInsurance

You may need to auto fund your account from time to time. For example, if you don't normally ship items over $100,
and may want to add funds to insurance rather than keeping the account funded.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AddFundsToInsuranceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFundsToInsuranceRequestBody();
    $request->amount = 6130.64;
    $request->currency = 'iure';

    $response = $sdk->insurance->addFundsToInsurance($request);

    if ($response->addFundsToInsuranceResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectInsurer

Connect a Shipsurance Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ConnectInsurerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectInsurerRequestBody();
    $request->email = 'john.doe@example.com';
    $request->policyId = 'saepe';

    $response = $sdk->insurance->connectInsurer($request);

    if ($response->connectInsurerResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disconnectInsurer

Disconnect a Shipsurance Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->insurance->disconnectInsurer();

    if ($response->disconnectInsurerResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInsuranceBalance

Retrieve the balance of your Shipsurance account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->insurance->getInsuranceBalance();

    if ($response->getInsuranceBalanceResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
