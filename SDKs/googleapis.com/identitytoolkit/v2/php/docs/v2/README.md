# v2

### Available Operations

* [identitytoolkitGetRecaptchaConfig](#identitytoolkitgetrecaptchaconfig) - Gets parameters needed for reCAPTCHA analysis.

## identitytoolkitGetRecaptchaConfig

Gets parameters needed for reCAPTCHA analysis.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitGetRecaptchaConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitGetRecaptchaConfigClientTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitGetRecaptchaConfigVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitGetRecaptchaConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitGetRecaptchaConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->clientType = IdentitytoolkitGetRecaptchaConfigClientTypeEnum::CLIENT_TYPE_UNSPECIFIED;
    $request->fields = 'laborum';
    $request->key = 'totam';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->tenantId = 'dolores';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'facilis';
    $request->version = IdentitytoolkitGetRecaptchaConfigVersionEnum::RECAPTCHA_VERSION_UNSPECIFIED;

    $requestSecurity = new IdentitytoolkitGetRecaptchaConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v2->identitytoolkitGetRecaptchaConfig($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2RecaptchaConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
