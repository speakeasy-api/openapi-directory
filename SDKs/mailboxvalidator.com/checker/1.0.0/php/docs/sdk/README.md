# SDK

## Overview

The MailboxValidator Free Email Checker checks if a single email address is from a free email provider and returns the results in either JSON or XML format. Refer to https://www.mailboxvalidator.com/api-email-freem for further information.

### Available Operations

* [getV1EmailFree](#getv1emailfree) - The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.

## getV1EmailFree

The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1EmailFreeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV1EmailFreeFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1EmailFreeRequest();
    $request->email = 'Linda.Oberbrunner@yahoo.com';
    $request->format = GetV1EmailFreeFormatEnum::JSON;
    $request->key = 'debitis';

    $response = $sdk->sdk->getV1EmailFree($request);

    if ($response->getV1EmailFree200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
