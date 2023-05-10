<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlphaSenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlphaSenderCreateAlphaSenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlphaSenderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAlphaSenderRequest();
    $request->requestBody = new CreateAlphaSenderCreateAlphaSenderRequest();
    $request->requestBody->alphaSender = 'corrupti';
    $request->serviceSid = 'provident';

    $requestSecurity = new CreateAlphaSenderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createAlphaSender($request, $requestSecurity);

    if ($response->messagingV1ServiceAlphaSender !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->