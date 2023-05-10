# SDK

## Overview

The MailboxValidator Disposable Email Checker API checks if a single email address is from a disposable email provider and returns the results in either JSON or XML format. Refer to https://www.mailboxvalidator.com/api-email-disposable for further information.

### Available Operations

* [getV1EmailDisposable](#getv1emaildisposable) - The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.

## getV1EmailDisposable

The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1EmailDisposableRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV1EmailDisposableFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1EmailDisposableRequest();
    $request->email = 'Linda.Oberbrunner@yahoo.com';
    $request->format = GetV1EmailDisposableFormatEnum::JSON;
    $request->key = 'debitis';

    $response = $sdk->sdk->getV1EmailDisposable($request);

    if ($response->getV1EmailDisposable200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
