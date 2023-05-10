<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsCallbackGenerateTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsCallbackGenerateTokenProductEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsCallbackGenerateTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsCallbackGenerateTokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->code = 'unde';
    $request->fields = 'nulla';
    $request->gcpProjectId = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->product = IntegrationsCallbackGenerateTokenProductEnum::APIGEE;
    $request->quotaUser = 'deserunt';
    $request->redirectUri = 'suscipit';
    $request->state = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new IntegrationsCallbackGenerateTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->callback->integrationsCallbackGenerateToken($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaGenerateTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->