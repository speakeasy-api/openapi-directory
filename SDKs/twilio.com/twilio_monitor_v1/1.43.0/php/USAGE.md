<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAlertRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAlertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAlertRequest();
    $request->sid = 'corrupti';

    $requestSecurity = new FetchAlertSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->fetchAlert($request, $requestSecurity);

    if ($response->monitorV1AlertInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->