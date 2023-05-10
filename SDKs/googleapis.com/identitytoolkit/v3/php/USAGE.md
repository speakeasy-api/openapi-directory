<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyCreateAuthUriRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyCreateAuthUriRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyCreateAuthUriSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyCreateAuthUriRequest();
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest = new IdentitytoolkitRelyingpartyCreateAuthUriRequest();
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->appId = 'corrupti';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->authFlowType = 'provident';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->clientId = 'distinctio';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->context = 'quibusdam';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->continueUri = 'unde';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->customParameter = [
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
    ];
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->hostedDomain = 'debitis';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->identifier = 'ipsa';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->oauthConsumerKey = 'delectus';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->oauthScope = 'tempora';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->openidRealm = 'suscipit';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->otaApp = 'molestiae';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->providerId = 'minus';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->sessionId = 'placeat';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->tenantId = 'voluptatum';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->tenantProjectNumber = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->fields = 'excepturi';
    $request->key = 'nisi';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->userIp = 'ab';

    $requestSecurity = new IdentitytoolkitRelyingpartyCreateAuthUriSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyCreateAuthUri($request, $requestSecurity);

    if ($response->createAuthUriResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->