<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactCenterInput;
use \OpenAPI\OpenAPI\Models\Shared\AdminUser;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfigInstanceSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SAMLParams;
use \OpenAPI\OpenAPI\Models\Shared\URIs;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->contactCenterInput = new ContactCenterInput();
    $request->contactCenterInput->adminUser = new AdminUser();
    $request->contactCenterInput->adminUser->familyName = 'provident';
    $request->contactCenterInput->adminUser->givenName = 'distinctio';
    $request->contactCenterInput->ccaipManagedUsers = false;
    $request->contactCenterInput->customerDomainPrefix = 'quibusdam';
    $request->contactCenterInput->displayName = 'unde';
    $request->contactCenterInput->instanceConfig = new InstanceConfig();
    $request->contactCenterInput->instanceConfig->instanceSize = InstanceConfigInstanceSizeEnum::STANDARD3_XLARGE;
    $request->contactCenterInput->labels = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->contactCenterInput->name = 'Raquel Bednar';
    $request->contactCenterInput->samlParams = new SAMLParams();
    $request->contactCenterInput->samlParams->certificate = 'suscipit';
    $request->contactCenterInput->samlParams->entityId = 'molestiae';
    $request->contactCenterInput->samlParams->ssoUri = 'minus';
    $request->contactCenterInput->samlParams->userEmail = 'placeat';
    $request->contactCenterInput->uris = new URIs();
    $request->contactCenterInput->uris->chatBotUri = 'voluptatum';
    $request->contactCenterInput->uris->mediaUri = 'iusto';
    $request->contactCenterInput->uris->rootUri = 'excepturi';
    $request->contactCenterInput->uris->virtualAgentStreamingServiceUri = 'nisi';
    $request->contactCenterInput->userEmail = 'recusandae';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->contactCenterId = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->requestId = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsContactCentersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->