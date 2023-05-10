<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HubInput;
use \OpenAPI\OpenAPI\Models\Shared\RoutingVPCInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->hubInput = new HubInput();
    $request->hubInput->description = 'provident';
    $request->hubInput->labels = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->hubInput->name = 'Doug Hoppe';
    $request->hubInput->routingVpcs = [
        new RoutingVPCInput(),
        new RoutingVPCInput(),
        new RoutingVPCInput(),
        new RoutingVPCInput(),
    ];
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->hubId = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->requestId = 'excepturi';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'recusandae';

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