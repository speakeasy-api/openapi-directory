<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkehubProjectsLocationsGlobalMembershipsInitializeHub($request, $requestSecurity);

    if ($response->initializeHubResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->