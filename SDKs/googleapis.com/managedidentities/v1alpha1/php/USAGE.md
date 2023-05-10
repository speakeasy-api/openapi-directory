<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\Trust;
use \OpenAPI\OpenAPI\Models\Shared\TrustStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->attachTrustRequest = new AttachTrustRequest();
    $request->attachTrustRequest->trust = new Trust();
    $request->attachTrustRequest->trust->createTime = 'provident';
    $request->attachTrustRequest->trust->lastKnownTrustConnectedHeartbeatTime = 'distinctio';
    $request->attachTrustRequest->trust->selectiveAuthentication = false;
    $request->attachTrustRequest->trust->state = TrustStateEnum::DISCONNECTED;
    $request->attachTrustRequest->trust->stateDescription = 'unde';
    $request->attachTrustRequest->trust->targetDnsIpAddresses = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->attachTrustRequest->trust->targetDomainName = 'deserunt';
    $request->attachTrustRequest->trust->trustDirection = TrustTrustDirectionEnum::INBOUND;
    $request->attachTrustRequest->trust->trustHandshakeSecret = 'iure';
    $request->attachTrustRequest->trust->trustType = TrustTrustTypeEnum::TRUST_TYPE_UNSPECIFIED;
    $request->attachTrustRequest->trust->updateTime = 'debitis';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->name = 'Irving Lehner';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ab';

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