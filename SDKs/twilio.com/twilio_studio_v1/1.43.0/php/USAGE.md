<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEngagementCreateEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEngagementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEngagementRequest();
    $request->flowSid = 'corrupti';
    $request->requestBody = new CreateEngagementCreateEngagementRequest();
    $request->requestBody->from = 'provident';
    $request->requestBody->parameters = 'distinctio';
    $request->requestBody->to = 'quibusdam';

    $requestSecurity = new CreateEngagementSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createEngagement($request, $requestSecurity);

    if ($response->studioV1FlowEngagement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->