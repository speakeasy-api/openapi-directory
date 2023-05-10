<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUserRequest();
    $request->sid = 'corrupti';

    $requestSecurity = new FetchUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->fetchUser($request, $requestSecurity);

    if ($response->frontlineV1User !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->