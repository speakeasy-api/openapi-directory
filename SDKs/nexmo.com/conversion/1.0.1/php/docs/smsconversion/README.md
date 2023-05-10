# smsConversion

## Overview

SMS Conversion Request

### Available Operations

* [smsConversion](#smsconversion) - Tell Nexmo if your SMS message was successful

## smsConversion

Send a Conversion API request with information about the SMS message identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\SmsConversionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeliveredEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SmsConversionRequest();
    $request->delivered = DeliveredEnum::ONE;
    $request->messageId = 'unde';
    $request->timestamp = 'nulla';

    $response = $sdk->smsConversion->smsConversion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
