# netflow

### Available Operations

* [getNetworkNetflow](#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [updateNetworkNetflow](#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network

## getNetworkNetflow

Return the NetFlow traffic reporting settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkNetflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkNetflowRequest();
    $request->networkId = 'eos';

    $response = $sdk->netflow->getNetworkNetflow($request);

    if ($response->getNetworkNetflow200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkNetflow

Update the NetFlow traffic reporting settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkNetflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkNetflowRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkNetflowRequest();
    $request->requestBody = new UpdateNetworkNetflowRequestBody();
    $request->requestBody->collectorIp = 'eius';
    $request->requestBody->collectorPort = 27710;
    $request->requestBody->etaDstPort = 838818;
    $request->requestBody->etaEnabled = false;
    $request->requestBody->reportingEnabled = false;
    $request->networkId = 'aliquam';

    $response = $sdk->netflow->updateNetworkNetflow($request);

    if ($response->updateNetworkNetflow200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
