# callback

### Available Operations

* [integrationsCallbackGenerateToken](#integrationscallbackgeneratetoken) - Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

## integrationsCallbackGenerateToken

Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->code = 'molestiae';
    $request->fields = 'minus';
    $request->gcpProjectId = 'placeat';
    $request->key = 'voluptatum';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->product = IntegrationsCallbackGenerateTokenProductEnum::APIGEE;
    $request->quotaUser = 'nisi';
    $request->redirectUri = 'recusandae';
    $request->state = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

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
