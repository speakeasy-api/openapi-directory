<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebChannelCreateWebChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebChannelCreateWebChannelRequest();
    $request->addressSid = 'corrupti';
    $request->chatFriendlyName = 'provident';
    $request->customerFriendlyName = 'distinctio';
    $request->preEngagementData = 'quibusdam';

    $requestSecurity = new CreateWebChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createWebChannel($request, $requestSecurity);

    if ($response->flexV2WebChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->