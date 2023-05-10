# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SendAnSmsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewMessage;
use \OpenAPI\OpenAPI\Models\Shared\NewMessageMessageClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\NewMessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SendAnSmsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendAnSmsRequest();
    $request->newMessage = new NewMessage();
    $request->newMessage->accountRef = 'customer1234';
    $request->newMessage->apiKey = 'abcd1234';
    $request->newMessage->apiSecret = 'abcdef0123456789';
    $request->newMessage->body = '0011223344556677';
    $request->newMessage->callback = 'https://example.com/sms-dlr';
    $request->newMessage->clientRef = 'my-personal-reference';
    $request->newMessage->contentId = '1107457532145798767';
    $request->newMessage->entityId = '1101456324675322134';
    $request->newMessage->from = 'AcmeInc';
    $request->newMessage->messageClass = NewMessageMessageClassEnum::TWO;
    $request->newMessage->protocolId = 127;
    $request->newMessage->sig = 'provident';
    $request->newMessage->statusReportReq = false;
    $request->newMessage->text = 'Hello World!';
    $request->newMessage->to = '447700900000';
    $request->newMessage->ttl = 900000;
    $request->newMessage->type = NewMessageTypeEnum::TEXT;
    $request->newMessage->udh = '06050415811581';
    $request->format = SendAnSmsFormatEnum::JSON;

    $response = $sdk->sendAnSms($request);

    if ($response->sendAnSms200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [sendAnSms](docs/sdk/README.md#sendansms) - Send an SMS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
