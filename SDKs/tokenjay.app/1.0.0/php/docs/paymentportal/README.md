# paymentPortal

## Overview

ErgoPay payment portal

### Available Operations

* [addPaymentRequest](#addpaymentrequest) - Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code
* [getPaymentState](#getpaymentstate) - Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

## addPaymentRequest

Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreatePaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePaymentRequest();
    $request->message = 'sed';
    $request->nanoErg = 612096;
    $request->receiverAddress = 'dolor';
    $request->senderAddress = 'natus';
    $request->tokenId = 'laboriosam';
    $request->tokenRawAmount = 943749;

    $response = $sdk->paymentPortal->addPaymentRequest($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentState

Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentStateRequest();
    $request->requestId = 'saepe';

    $response = $sdk->paymentPortal->getPaymentState($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
