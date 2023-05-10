<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BeyondcorpProjectsLocationsAppConnectionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeyondcorpProjectsLocationsAppConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput();
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->applicationEndpoint = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint();
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->applicationEndpoint->host = 'provident';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->applicationEndpoint->port = 715190;
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->connectors = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->displayName = 'vel';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->gateway = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput();
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->gateway->appGateway = 'error';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->gateway->type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum::GCP_REGIONAL_MIG;
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->labels = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->name = 'Ricky Hoppe';
    $request->googleCloudBeyondcorpAppconnectionsV1AppConnectionInput->type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum::TCP_PROXY;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->appConnectionId = 'excepturi';
    $request->callback = 'nisi';
    $request->fields = 'recusandae';
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->parent = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->requestId = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';
    $request->validateOnly = false;

    $requestSecurity = new BeyondcorpProjectsLocationsAppConnectionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->beyondcorpProjectsLocationsAppConnectionsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->