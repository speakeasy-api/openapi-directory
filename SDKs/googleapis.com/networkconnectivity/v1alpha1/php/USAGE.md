<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HubInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->hubInput = new HubInput();
    $request->hubInput->createTime = 'provident';
    $request->hubInput->description = 'distinctio';
    $request->hubInput->labels = [
        'unde' => 'nulla',
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
    ];
    $request->hubInput->name = 'Dr. Valerie Toy';
    $request->hubInput->updateTime = 'suscipit';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->hubId = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->requestId = 'ab';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->networkconnectivityProjectsLocationsGlobalHubsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->