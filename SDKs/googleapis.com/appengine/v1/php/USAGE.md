<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRawData;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->authorizedCertificate = new AuthorizedCertificate();
    $request->authorizedCertificate->certificateRawData = new CertificateRawData();
    $request->authorizedCertificate->certificateRawData->privateKey = 'provident';
    $request->authorizedCertificate->certificateRawData->publicCertificate = 'distinctio';
    $request->authorizedCertificate->displayName = 'quibusdam';
    $request->authorizedCertificate->domainMappingsCount = 602763;
    $request->authorizedCertificate->domainNames = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->authorizedCertificate->expireTime = 'deserunt';
    $request->authorizedCertificate->id = '674e0f46-7cc8-4796-ad15-1a05dfc2ddf7';
    $request->authorizedCertificate->managedCertificate = new ManagedCertificate();
    $request->authorizedCertificate->managedCertificate->lastRenewalTime = 'quod';
    $request->authorizedCertificate->managedCertificate->status = ManagedCertificateStatusEnum::FAILED_RETRYING_CAA_FORBIDDEN;
    $request->authorizedCertificate->name = 'Deanna Sauer MD';
    $request->authorizedCertificate->visibleDomainMappings = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'totam';
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new AppengineAppsAuthorizedCertificatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesCreate($request, $requestSecurity);

    if ($response->authorizedCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->