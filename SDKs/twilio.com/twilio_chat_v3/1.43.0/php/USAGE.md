<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelUpdateChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelEnumChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateChannelRequest();
    $request->requestBody = new UpdateChannelUpdateChannelRequest();
    $request->requestBody->messagingServiceSid = 'corrupti';
    $request->requestBody->type = ChannelEnumChannelTypeEnum::PRIVATE;
    $request->serviceSid = 'distinctio';
    $request->sid = 'quibusdam';
    $request->xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new UpdateChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->updateChannel($request, $requestSecurity);

    if ($response->chatV3Channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->