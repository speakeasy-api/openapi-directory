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