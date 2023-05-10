<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelCreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelEnumChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChannelRequest();
    $request->requestBody = new CreateChannelCreateChannelRequest();
    $request->requestBody->attributes = 'corrupti';
    $request->requestBody->createdBy = 'provident';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-24T16:27:50.833Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T16:47:33.722Z');
    $request->requestBody->friendlyName = 'corrupti';
    $request->requestBody->type = ChannelEnumChannelTypeEnum::PRIVATE;
    $request->requestBody->uniqueName = 'vel';
    $request->serviceSid = 'error';
    $request->xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new CreateChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createChannel($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->