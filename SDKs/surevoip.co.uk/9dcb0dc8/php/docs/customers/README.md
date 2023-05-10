# customers

## Overview

Create, List, Updated and Delete Customers

### Available Operations

* [getCustomer](#getcustomer) - Represents a customer
* [getCustomers](#getcustomers) - List all customers or find your own account

## getCustomer

Represents a customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomerRequest();
    $request->account = 384382;

    $response = $sdk->customers->getCustomer($request);

    if ($response->getCustomer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomers

List all customers or find your own account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->customers->getCustomers();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
