# dscpToCosMappings

### Available Operations

* [getNetworkSwitchDscpToCosMappings](#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [updateNetworkSwitchDscpToCosMappings](#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings

## getNetworkSwitchDscpToCosMappings

Return the DSCP to CoS mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDscpToCosMappingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDscpToCosMappingsRequest();
    $request->networkId = 'optio';

    $response = $sdk->dscpToCosMappings->getNetworkSwitchDscpToCosMappings($request);

    if ($response->getNetworkSwitchDscpToCosMappings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchDscpToCosMappings

Update the DSCP to CoS mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDscpToCosMappingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDscpToCosMappingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchDscpToCosMappingsRequest();
    $request->requestBody = new UpdateNetworkSwitchDscpToCosMappingsRequestBody();
    $request->requestBody->mappings = [
        new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(),
        new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(),
    ];
    $request->networkId = 'adipisci';

    $response = $sdk->dscpToCosMappings->updateNetworkSwitchDscpToCosMappings($request);

    if ($response->updateNetworkSwitchDscpToCosMappings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
