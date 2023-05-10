# paymentMethods

### Available Operations

* [getPaymentMethodsJson](#getpaymentmethodsjson) - Retrieve all Store's Payment Methods.
* [getPaymentMethodsIdJson](#getpaymentmethodsidjson) - Retrieve a single Payment Method.

## getPaymentMethodsJson

Retrieve all Store's Payment Methods.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentMethodsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentMethodsJsonRequest();
    $request->authtoken = 'dignissimos';
    $request->login = 'hic';

    $response = $sdk->paymentMethods->getPaymentMethodsJson($request);

    if ($response->paymentMethods !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentMethodsIdJson

Retrieve a single Payment Method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentMethodsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentMethodsIdJsonRequest();
    $request->authtoken = 'distinctio';
    $request->id = 799203;
    $request->login = 'odio';

    $response = $sdk->paymentMethods->getPaymentMethodsIdJson($request);

    if ($response->paymentMethod !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
