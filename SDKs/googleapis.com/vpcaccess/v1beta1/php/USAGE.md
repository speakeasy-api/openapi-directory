<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VpcaccessProjectsLocationsConnectorsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorInput;
use \OpenAPI\OpenAPI\Models\Shared\Subnet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VpcaccessProjectsLocationsConnectorsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VpcaccessProjectsLocationsConnectorsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectorInput = new ConnectorInput();
    $request->connectorInput->ipCidrRange = 'provident';
    $request->connectorInput->machineType = 'distinctio';
    $request->connectorInput->maxInstances = 844266;
    $request->connectorInput->maxThroughput = 602763;
    $request->connectorInput->minInstances = 857946;
    $request->connectorInput->minThroughput = 544883;
    $request->connectorInput->name = 'Ben Mueller';
    $request->connectorInput->network = 'iure';
    $request->connectorInput->subnet = new Subnet();
    $request->connectorInput->subnet->name = 'Raquel Bednar';
    $request->connectorInput->subnet->projectId = 'suscipit';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->connectorId = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new VpcaccessProjectsLocationsConnectorsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->vpcaccessProjectsLocationsConnectorsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->