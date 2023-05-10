<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenCreateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessTokenEnumFactorTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessTokenRequest();
    $request->requestBody = new CreateAccessTokenCreateAccessTokenRequest();
    $request->requestBody->factorFriendlyName = 'corrupti';
    $request->requestBody->factorType = AccessTokenEnumFactorTypesEnum::PUSH;
    $request->requestBody->identity = 'provident';
    $request->requestBody->ttl = 715190;
    $request->serviceSid = 'quibusdam';

    $requestSecurity = new CreateAccessTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createAccessToken($request, $requestSecurity);

    if ($response->verifyV2ServiceAccessToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->