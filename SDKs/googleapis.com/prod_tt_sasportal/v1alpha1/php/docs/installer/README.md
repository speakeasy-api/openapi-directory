# installer

### Available Operations

* [prodTtSasportalInstallerGenerateSecret](#prodttsasportalinstallergeneratesecret) - Generates a secret to be used with the ValidateInstaller.
* [prodTtSasportalInstallerValidate](#prodttsasportalinstallervalidate) - Validates the identity of a Certified Professional Installer (CPI).

## prodTtSasportalInstallerGenerateSecret

Generates a secret to be used with the ValidateInstaller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalInstallerGenerateSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalInstallerGenerateSecretSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalInstallerGenerateSecretSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalInstallerGenerateSecretSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalInstallerGenerateSecretRequest();
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

    $requestSecurity = new ProdTtSasportalInstallerGenerateSecretSecurity();
    $requestSecurity->option1 = new ProdTtSasportalInstallerGenerateSecretSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->installer->prodTtSasportalInstallerGenerateSecret($request, $requestSecurity);

    if ($response->sasPortalGenerateSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalInstallerValidate

Validates the identity of a Certified Professional Installer (CPI).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalInstallerValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalValidateInstallerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalInstallerValidateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalInstallerValidateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalInstallerValidateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalInstallerValidateRequest();
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

    $requestSecurity = new ProdTtSasportalInstallerValidateSecurity();
    $requestSecurity->option1 = new ProdTtSasportalInstallerValidateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->installer->prodTtSasportalInstallerValidate($request, $requestSecurity);

    if ($response->sasPortalValidateInstallerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
