# ospf

### Available Operations

* [getNetworkSwitchRoutingOspf](#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [updateNetworkSwitchRoutingOspf](#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration

## getNetworkSwitchRoutingOspf

Return layer 3 OSPF routing configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingOspfRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingOspfRequest();
    $request->networkId = 'quasi';

    $response = $sdk->ospf->getNetworkSwitchRoutingOspf($request);

    if ($response->getNetworkSwitchRoutingOspf200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingOspf

Update layer 3 OSPF routing configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyAreas;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingOspfRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingOspfRequestBody();
    $request->requestBody->areas = [
        new UpdateNetworkSwitchRoutingOspfRequestBodyAreas(),
    ];
    $request->requestBody->deadTimerInSeconds = 689127;
    $request->requestBody->enabled = false;
    $request->requestBody->helloTimerInSeconds = 937408;
    $request->requestBody->md5AuthenticationEnabled = false;
    $request->requestBody->md5AuthenticationKey = new UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey();
    $request->requestBody->md5AuthenticationKey->id = 648491;
    $request->requestBody->md5AuthenticationKey->passphrase = 'officiis';
    $request->requestBody->v3 = new UpdateNetworkSwitchRoutingOspfRequestBodyV3();
    $request->requestBody->v3->areas = [
        new UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas(),
    ];
    $request->requestBody->v3->deadTimerInSeconds = 874845;
    $request->requestBody->v3->enabled = false;
    $request->requestBody->v3->helloTimerInSeconds = 543144;
    $request->networkId = 'voluptate';

    $response = $sdk->ospf->updateNetworkSwitchRoutingOspf($request);

    if ($response->updateNetworkSwitchRoutingOspf200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
