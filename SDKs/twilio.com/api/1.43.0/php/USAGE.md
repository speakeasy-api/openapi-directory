<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountCreateAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountCreateAccountRequest();
    $request->friendlyName = 'corrupti';

    $requestSecurity = new CreateAccountSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createAccount($request, $requestSecurity);

    if ($response->apiV2010Account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->