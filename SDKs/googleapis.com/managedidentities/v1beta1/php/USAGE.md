<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachTrustRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TrustInput;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->attachTrustRequestInput = new AttachTrustRequestInput();
    $request->attachTrustRequestInput->trust = new TrustInput();
    $request->attachTrustRequestInput->trust->selectiveAuthentication = false;
    $request->attachTrustRequestInput->trust->targetDnsIpAddresses = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->attachTrustRequestInput->trust->targetDomainName = 'nulla';
    $request->attachTrustRequestInput->trust->trustDirection = TrustTrustDirectionEnum::OUTBOUND;
    $request->attachTrustRequestInput->trust->trustHandshakeSecret = 'illum';
    $request->attachTrustRequestInput->trust->trustType = TrustTrustTypeEnum::FOREST;
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->name = 'Larry Windler';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsAttachTrust($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->