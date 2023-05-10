# connectivityMonitoringDestinations

### Available Operations

* [getNetworkApplianceConnectivityMonitoringDestinations](#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [getNetworkCellularGatewayConnectivityMonitoringDestinations](#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [updateNetworkApplianceConnectivityMonitoringDestinations](#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [updateNetworkCellularGatewayConnectivityMonitoringDestinations](#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network

## getNetworkApplianceConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceConnectivityMonitoringDestinationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceConnectivityMonitoringDestinationsRequest();
    $request->networkId = 'debitis';

    $response = $sdk->connectivityMonitoringDestinations->getNetworkApplianceConnectivityMonitoringDestinations($request);

    if ($response->getNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCellularGatewayConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MG network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest();
    $request->networkId = 'architecto';

    $response = $sdk->connectivityMonitoringDestinations->getNetworkCellularGatewayConnectivityMonitoringDestinations($request);

    if ($response->getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest();
    $request->requestBody = new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody();
    $request->requestBody->destinations = [
        new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations(),
        new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations(),
        new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations(),
        new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations(),
    ];
    $request->networkId = 'consequatur';

    $response = $sdk->connectivityMonitoringDestinations->updateNetworkApplianceConnectivityMonitoringDestinations($request);

    if ($response->updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewayConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MG network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest();
    $request->requestBody = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody();
    $request->requestBody->destinations = [
        new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations(),
    ];
    $request->networkId = 'odit';

    $response = $sdk->connectivityMonitoringDestinations->updateNetworkCellularGatewayConnectivityMonitoringDestinations($request);

    if ($response->updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
