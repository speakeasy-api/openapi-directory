<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateIssuanceConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityConfig;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\CertificateIssuanceConfigKeyAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->certificateIssuanceConfigInput = new CertificateIssuanceConfigInput();
    $request->certificateIssuanceConfigInput->certificateAuthorityConfig = new CertificateAuthorityConfig();
    $request->certificateIssuanceConfigInput->certificateAuthorityConfig->certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig();
    $request->certificateIssuanceConfigInput->certificateAuthorityConfig->certificateAuthorityServiceConfig->caPool = 'provident';
    $request->certificateIssuanceConfigInput->description = 'distinctio';
    $request->certificateIssuanceConfigInput->keyAlgorithm = CertificateIssuanceConfigKeyAlgorithmEnum::ECDSA_P256;
    $request->certificateIssuanceConfigInput->labels = [
        'nulla' => 'corrupti',
        'illum' => 'vel',
        'error' => 'deserunt',
    ];
    $request->certificateIssuanceConfigInput->lifetime = 'suscipit';
    $request->certificateIssuanceConfigInput->name = 'Dr. Valerie Toy';
    $request->certificateIssuanceConfigInput->rotationWindowPercentage = 383441;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->certificateIssuanceConfigId = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->