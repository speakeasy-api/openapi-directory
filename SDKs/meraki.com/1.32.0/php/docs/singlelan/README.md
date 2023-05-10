# singleLan

### Available Operations

* [getNetworkApplianceSingleLan](#getnetworkappliancesinglelan) - Return single LAN configuration
* [updateNetworkApplianceSingleLan](#updatenetworkappliancesinglelan) - Update single LAN configuration

## getNetworkApplianceSingleLan

Return single LAN configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSingleLanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSingleLanRequest();
    $request->networkId = 'minima';

    $response = $sdk->singleLan->getNetworkApplianceSingleLan($request);

    if ($response->getNetworkApplianceSingleLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSingleLan

Update single LAN configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSingleLanRequest();
    $request->requestBody = new UpdateNetworkApplianceSingleLanRequestBody();
    $request->requestBody->applianceIp = 'voluptatum';
    $request->requestBody->ipv6 = new UpdateNetworkApplianceSingleLanRequestBodyIpv6();
    $request->requestBody->ipv6->enabled = false;
    $request->requestBody->ipv6->prefixAssignments = [
        new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments(),
        new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments(),
        new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments(),
    ];
    $request->requestBody->mandatoryDhcp = new UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp();
    $request->requestBody->mandatoryDhcp->enabled = false;
    $request->requestBody->subnet = 'impedit';
    $request->networkId = 'magni';

    $response = $sdk->singleLan->updateNetworkApplianceSingleLan($request);

    if ($response->updateNetworkApplianceSingleLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
