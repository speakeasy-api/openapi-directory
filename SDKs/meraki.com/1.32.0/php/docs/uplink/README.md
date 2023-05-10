# uplink

### Available Operations

* [getNetworkCellularGatewayUplink](#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [getOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [updateNetworkCellularGatewayUplink](#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.

## getNetworkCellularGatewayUplink

Returns the uplink settings for your MG network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayUplinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewayUplinkRequest();
    $request->networkId = 'laboriosam';

    $response = $sdk->uplink->getNetworkCellularGatewayUplink($request);

    if ($response->getNetworkCellularGatewayUplink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCellularGatewayUplinkStatusesRequest();
    $request->endingBefore = 'dolorum';
    $request->iccids = [
        'impedit',
        'perspiciatis',
        'vitae',
    ];
    $request->networkIds = [
        'totam',
        'nesciunt',
    ];
    $request->organizationId = 'quidem';
    $request->perPage = 868868;
    $request->serials = [
        'iure',
        'architecto',
        'illum',
    ];
    $request->startingAfter = 'quae';

    $response = $sdk->uplink->getOrganizationCellularGatewayUplinkStatuses($request);

    if ($response->getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewayUplink

Updates the uplink settings for your MG network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewayUplinkRequest();
    $request->requestBody = new UpdateNetworkCellularGatewayUplinkRequestBody();
    $request->requestBody->bandwidthLimits = new UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits();
    $request->requestBody->bandwidthLimits->limitDown = 845397;
    $request->requestBody->bandwidthLimits->limitUp = 616016;
    $request->networkId = 'molestias';

    $response = $sdk->uplink->updateNetworkCellularGatewayUplink($request);

    if ($response->updateNetworkCellularGatewayUplink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
