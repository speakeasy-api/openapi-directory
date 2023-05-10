<!-- Start SDK Example Usage -->
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
    $request = new SendMessageRequestBody3Video();
    $request->channel = SendMessageRequestBody3VideoChannelEnum::WHATSAPP;
    $request->clientRef = 'distinctio';
    $request->from = '447700900001';
    $request->messageType = SendMessageRequestBody3VideoMessageTypeEnum::VIDEO;
    $request->to = '447700900000';
    $request->video = new SendMessageRequestBody3VideoVideo();
    $request->video->url = 'https://example.com/video.mp4';

    $requestSecurity = new SendMessageSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sendMessage($request, $requestSecurity);

    if ($response->sendMessage202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->