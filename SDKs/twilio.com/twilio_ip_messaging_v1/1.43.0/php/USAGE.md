<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelCreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelEnumChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChannelRequest();
    $request->requestBody = new CreateChannelCreateChannelRequest();
    $request->requestBody->attributes = 'corrupti';
    $request->requestBody->friendlyName = 'provident';
    $request->requestBody->type = ChannelEnumChannelTypeEnum::PRIVATE;
    $request->requestBody->uniqueName = 'quibusdam';
    $request->serviceSid = 'unde';

    $requestSecurity = new CreateChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createChannel($request, $requestSecurity);

    if ($response->ipMessagingV1ServiceChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->