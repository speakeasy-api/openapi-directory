# requests

## Overview

Verify Requests

### Available Operations

* [verifyRequest](#verifyrequest) - Request a Verification

## verifyRequest

Use Verify request to generate and send a PIN to your user:

1. Create a request to send a verification code to your user.

2. Check the `status` field in the response to ensure that your request was successful (zero is success).

3. Use the `request_id` field in the response for the Verify check.

*Note that this endpoint is available by `GET` request as well as `POST`.*

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifyRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\VerifyRequestCodeLengthEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyRequestLgEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyRequestWorkflowIdEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyRequestRequest();
    $request->format = FormatEnum::XML;
    $request->verifyRequest = new VerifyRequest();
    $request->verifyRequest->apiKey = 'abcd1234';
    $request->verifyRequest->apiSecret = 'Sup3rS3cr3t!!';
    $request->verifyRequest->brand = 'Acme Inc';
    $request->verifyRequest->codeLength = VerifyRequestCodeLengthEnum::SIX;
    $request->verifyRequest->country = 'GB';
    $request->verifyRequest->lg = VerifyRequestLgEnum::EN_US;
    $request->verifyRequest->nextEventWait = 120;
    $request->verifyRequest->number = '447700900000';
    $request->verifyRequest->pinCode = 'AKFG-3424';
    $request->verifyRequest->pinExpiry = 240;
    $request->verifyRequest->senderId = 'ACME';
    $request->verifyRequest->workflowId = VerifyRequestWorkflowIdEnum::THREE;

    $response = $sdk->requests->verifyRequest($request);

    if ($response->verifyRequest200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
