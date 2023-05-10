# SDK

## Overview

The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format. Refer to https://www.mailboxvalidator.com for further information.

### Available Operations

* [getV1ValidationSingle](#getv1validationsingle) - The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.

## getV1ValidationSingle

The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1ValidationSingleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV1ValidationSingleFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1ValidationSingleRequest();
    $request->email = 'Linda.Oberbrunner@yahoo.com';
    $request->format = GetV1ValidationSingleFormatEnum::JSON;
    $request->key = 'debitis';

    $response = $sdk->sdk->getV1ValidationSingle($request);

    if ($response->getV1ValidationSingle200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
