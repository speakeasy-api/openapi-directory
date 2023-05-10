# deprecatedServices

## Overview

Deprecated services

### Available Operations

* [~~merchantCancellation~~](#merchantcancellation) - /merchant/cancellation :warning: **Deprecated**

## ~~merchantCancellation~~

Cancel a booking
**Note**: This service has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MerchantCancellationRequest;
use \OpenAPI\OpenAPI\Models\Operations\MerchantCancellationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\MerchantCancellationRequestBodyCancelItems;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MerchantCancellationRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new MerchantCancellationRequestBody();
    $request->requestBody->cancelItems = [
        new MerchantCancellationRequestBodyCancelItems(),
        new MerchantCancellationRequestBodyCancelItems(),
        new MerchantCancellationRequestBodyCancelItems(),
    ];
    $request->requestBody->distributorRef = 'Jdp122';
    $request->requestBody->itineraryId = 1234655;

    $response = $sdk->deprecatedServices->merchantCancellation($request);

    if ($response->merchantCancellation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
