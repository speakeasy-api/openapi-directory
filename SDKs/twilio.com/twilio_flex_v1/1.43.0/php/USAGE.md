<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelCreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChannelCreateChannelRequest();
    $request->chatFriendlyName = 'corrupti';
    $request->chatUniqueName = 'provident';
    $request->chatUserFriendlyName = 'distinctio';
    $request->flexFlowSid = 'quibusdam';
    $request->identity = 'unde';
    $request->longLived = false;
    $request->preEngagementData = 'nulla';
    $request->target = 'corrupti';
    $request->taskAttributes = 'illum';
    $request->taskSid = 'vel';

    $requestSecurity = new CreateChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createChannel($request, $requestSecurity);

    if ($response->flexV1Channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->