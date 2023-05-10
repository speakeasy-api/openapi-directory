<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActivateCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubordinateConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubordinateConfigChain;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->activateCertificateAuthorityRequest = new ActivateCertificateAuthorityRequest();
    $request->activateCertificateAuthorityRequest->pemCaCertificate = 'provident';
    $request->activateCertificateAuthorityRequest->requestId = 'distinctio';
    $request->activateCertificateAuthorityRequest->subordinateConfig = new SubordinateConfig();
    $request->activateCertificateAuthorityRequest->subordinateConfig->certificateAuthority = 'quibusdam';
    $request->activateCertificateAuthorityRequest->subordinateConfig->pemIssuerChain = new SubordinateConfigChain();
    $request->activateCertificateAuthorityRequest->subordinateConfig->pemIssuerChain->pemCertificates = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->name = 'Raquel Bednar';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->