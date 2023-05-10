<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BindDeviceToGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bindDeviceToGatewayRequest = new BindDeviceToGatewayRequest();
    $request->bindDeviceToGatewayRequest->deviceId = 'provident';
    $request->bindDeviceToGatewayRequest->gatewayId = 'distinctio';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesBindDeviceToGateway($request, $requestSecurity);

    if ($response->bindDeviceToGatewayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->