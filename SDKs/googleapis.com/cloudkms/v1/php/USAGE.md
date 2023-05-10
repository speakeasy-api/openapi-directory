<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EkmConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\EkmConnectionKeyManagementModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceResolverInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsEkmConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ekmConnectionInput = new EkmConnectionInput();
    $request->ekmConnectionInput->cryptoSpacePath = 'provident';
    $request->ekmConnectionInput->etag = 'distinctio';
    $request->ekmConnectionInput->keyManagementMode = EkmConnectionKeyManagementModeEnum::CLOUD_KMS;
    $request->ekmConnectionInput->serviceResolvers = [
        new ServiceResolverInput(),
        new ServiceResolverInput(),
        new ServiceResolverInput(),
    ];
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->ekmConnectionId = 'vel';
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new CloudkmsProjectsLocationsEkmConnectionsCreateSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsEkmConnectionsCreate($request, $requestSecurity);

    if ($response->ekmConnection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->