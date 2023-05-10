<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->generateAccessTokenRequest = new GenerateAccessTokenRequest();
    $request->generateAccessTokenRequest->delegates = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->generateAccessTokenRequest->lifetime = 'nulla';
    $request->generateAccessTokenRequest->scope = [
        'illum',
        'vel',
        'error',
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->name = 'Lucia Goldner';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iamcredentialsProjectsServiceAccountsGenerateAccessToken($request, $requestSecurity);

    if ($response->generateAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->