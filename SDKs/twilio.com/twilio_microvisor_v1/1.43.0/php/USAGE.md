<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountConfigCreateAccountConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountConfigCreateAccountConfigRequest();
    $request->key = 'corrupti';
    $request->value = 'provident';

    $requestSecurity = new CreateAccountConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createAccountConfig($request, $requestSecurity);

    if ($response->microvisorV1AccountConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->