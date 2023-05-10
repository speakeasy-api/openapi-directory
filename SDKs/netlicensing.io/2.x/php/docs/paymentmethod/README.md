# paymentMethod

## Overview

Payment Method operations

Payment Method Services
<https://netlicensing.io/wiki/payment-method-services>
### Available Operations

* [getPaymentMethod](#getpaymentmethod) - Get Payment Method
* [listPaymentMethods](#listpaymentmethods) - List Payment Methods
* [updatePaymentMethod](#updatepaymentmethod) - Update Payment Method

## getPaymentMethod

Return a Payment Method info by 'paymentMethodNumber'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentMethodRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentMethodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentMethodRequest();
    $request->paymentMethodNumber = 'culpa';

    $requestSecurity = new GetPaymentMethodSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->paymentMethod->getPaymentMethod($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPaymentMethods

Return a list of all Payment Methods for the current Vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPaymentMethodsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListPaymentMethodsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->paymentMethod->listPaymentMethods($requestSecurity);

    if ($response->netlicensings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePaymentMethod

Sets the provided properties to a Payment Method. Return an updated Payment Method

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentMethodRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentMethodRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentMethodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaymentMethodRequest();
    $request->requestBody = new UpdatePaymentMethodRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->paypalSubject = 'consequuntur';
    $request->paymentMethodNumber = 'repellat';

    $requestSecurity = new UpdatePaymentMethodSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->paymentMethod->updatePaymentMethod($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
