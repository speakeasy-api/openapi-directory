# SDK

## Overview

The Messages API consolidates and normalises exchanges across all messaging channels. It allows you to use a single API to interact with our various channels such as SMS, MMS, WhatsApp, Viber and Facebook Messenger

### Available Operations

* [sendMessage](#sendmessage) - Send a message to the given channel.

## sendMessage

Send a Message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SendMessageSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendMessageRequestBody5Video();
    $request->channel = SendMessageRequestBody5VideoChannelEnum::VIBER_SERVICE;
    $request->clientRef = 'nulla';
    $request->from = '9876543210';
    $request->messageType = SendMessageRequestBody5VideoMessageTypeEnum::VIDEO;
    $request->to = '447700900000';
    $request->viberService = new SendMessageRequestBody5VideoViberService();
    $request->viberService->category = SendMessageRequestBody5VideoViberServiceCategoryEnum::PROMOTION;
    $request->viberService->duration = '123';
    $request->viberService->fileSize = '1';
    $request->viberService->ttl = 600;
    $request->viberService->type = 'illum';
    $request->video = new SendMessageRequestBody5VideoVideo();
    $request->video->url = 'https://example.com/video.mp4';

    $requestSecurity = new SendMessageSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->sendMessage($request, $requestSecurity);

    if ($response->sendMessage202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
