# SDK

## Overview

The Verify API helps you to implement 2FA (two-factor authentication) in your applications. This is useful for:

* Protecting against spam, by preventing spammers from creating multiple accounts
* Monitoring suspicious activity, by forcing an account user to verify ownership of a number
* Ensuring that you can reach your users at any time because you have their correct phone number
More information is available at <https://developer.nexmo.com/verify>

More information on the Verify product on our Developer Portal
<https://developer.nexmo.com/verify>
### Available Operations

* [verifyCheck](#verifycheck) - Verify Check
* [verifyControl](#verifycontrol) - Verify Control
* [verifyRequestWithPsd2](#verifyrequestwithpsd2) - PSD2 (Payment Services Directive 2) Request
* [verifySearch](#verifysearch) - Verify Search

## verifyCheck

Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.

1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.

*Note that this endpoint is available by `GET` request as well as `POST`.*

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifyCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyCheckRequest();
    $request->checkRequest = new CheckRequest();
    $request->checkRequest->apiKey = 'abcd1234';
    $request->checkRequest->apiSecret = 'Sup3rS3cr3t!!';
    $request->checkRequest->code = '1234';
    $request->checkRequest->ipAddress = '123.0.0.255';
    $request->checkRequest->requestId = 'abcdef0123456789abcdef0123456789';
    $request->format = FormatEnum::XML;

    $response = $sdk->sdk->verifyCheck($request);

    if ($response->verifyCheck200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifyControl

Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:


1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.

2. Check the `status` in the response.


*Note that this endpoint is available by `GET` request as well as `POST`.*

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifyControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\ControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\ControlRequestCmdEnum;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyControlRequest();
    $request->controlRequest = new ControlRequest();
    $request->controlRequest->apiKey = 'abcd1234';
    $request->controlRequest->apiSecret = 'Sup3rS3cr3t!!';
    $request->controlRequest->cmd = ControlRequestCmdEnum::CANCEL;
    $request->controlRequest->requestId = 'abcdef0123456789abcdef0123456789';
    $request->format = FormatEnum::XML;

    $response = $sdk->sdk->verifyControl($request);

    if ($response->verifyControl200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifyRequestWithPsd2

Use Verify request to generate and send a PIN to your user to authorize a payment:
1. Create a request to send a verification code to your user.
2. Check the `status` field in the response to ensure that your request was successful (zero is success).
3. Use the `request_id` field in the response for the Verify check.
(Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifyRequestWithPsd2Request;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\Psd2Request;
use \OpenAPI\OpenAPI\Models\Shared\Psd2RequestCodeLengthEnum;
use \OpenAPI\OpenAPI\Models\Shared\Psd2RequestLgEnum;
use \OpenAPI\OpenAPI\Models\Shared\Psd2RequestWorkflowIdEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyRequestWithPsd2Request();
    $request->format = FormatEnum::XML;
    $request->psd2Request = new Psd2Request();
    $request->psd2Request->amount = 48.00;
    $request->psd2Request->apiKey = 'abcd1234';
    $request->psd2Request->apiSecret = 'Sup3rS3cr3t!!';
    $request->psd2Request->codeLength = Psd2RequestCodeLengthEnum::SIX;
    $request->psd2Request->country = 'GB';
    $request->psd2Request->lg = Psd2RequestLgEnum::ES_ES;
    $request->psd2Request->nextEventWait = 120;
    $request->psd2Request->number = '447700900000';
    $request->psd2Request->payee = 'Acme Inc';
    $request->psd2Request->pinExpiry = 240;
    $request->psd2Request->workflowId = Psd2RequestWorkflowIdEnum::SEVEN;

    $response = $sdk->sdk->verifyRequestWithPsd2($request);

    if ($response->verifyRequestWithPsd2200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifySearch

Use Verify search to check the status of past or current verification requests:

1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.

*Note that this endpoint is available by `POST` request as well as `GET`.*

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifySearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifySearchRequest();
    $request->apiKey = 'abcd1234';
    $request->apiSecret = 'Sup3rS3cr3t!!';
    $request->format = FormatEnum::XML;
    $request->requestId = 'illum';
    $request->requestIds = [
        'abcdef0123456789abcdef0123456789',
        'abcdef0123456789abcdef0123456789',
    ];

    $response = $sdk->sdk->verifySearch($request);

    if ($response->verifySearch200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
