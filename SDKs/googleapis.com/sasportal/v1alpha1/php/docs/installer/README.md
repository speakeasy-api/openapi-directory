# installer

### Available Operations

* [sasportalInstallerGenerateSecret](#sasportalinstallergeneratesecret) - Generates a secret to be used with the ValidateInstaller.
* [sasportalInstallerValidate](#sasportalinstallervalidate) - Validates the identity of a Certified Professional Installer (CPI).

## sasportalInstallerGenerateSecret

Generates a secret to be used with the ValidateInstaller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SasportalInstallerGenerateSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SasportalInstallerGenerateSecretSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SasportalInstallerGenerateSecretSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SasportalInstallerGenerateSecretSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SasportalInstallerGenerateSecretRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'at' => 'at',
    ];
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new SasportalInstallerGenerateSecretSecurity();
    $requestSecurity->option1 = new SasportalInstallerGenerateSecretSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->installer->sasportalInstallerGenerateSecret($request, $requestSecurity);

    if ($response->sasPortalGenerateSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sasportalInstallerValidate

Validates the identity of a Certified Professional Installer (CPI).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SasportalInstallerValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalValidateInstallerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SasportalInstallerValidateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SasportalInstallerValidateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SasportalInstallerValidateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SasportalInstallerValidateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sasPortalValidateInstallerRequest = new SasPortalValidateInstallerRequest();
    $request->sasPortalValidateInstallerRequest->encodedSecret = 'officia';
    $request->sasPortalValidateInstallerRequest->installerId = 'occaecati';
    $request->sasPortalValidateInstallerRequest->secret = 'fugit';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'totam';
    $request->key = 'beatae';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new SasportalInstallerValidateSecurity();
    $requestSecurity->option1 = new SasportalInstallerValidateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->installer->sasportalInstallerValidate($request, $requestSecurity);

    if ($response->sasPortalValidateInstallerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
