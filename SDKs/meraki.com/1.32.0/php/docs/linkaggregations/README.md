# linkAggregations

### Available Operations

* [createNetworkSwitchLinkAggregation](#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [deleteNetworkSwitchLinkAggregation](#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [getNetworkSwitchLinkAggregations](#getnetworkswitchlinkaggregations) - List link aggregation groups
* [updateNetworkSwitchLinkAggregation](#updatenetworkswitchlinkaggregation) - Update a link aggregation group

## createNetworkSwitchLinkAggregation

Create a link aggregation group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchLinkAggregationRequest();
    $request->requestBody = new CreateNetworkSwitchLinkAggregationRequestBody();
    $request->requestBody->switchPorts = [
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
    ];
    $request->requestBody->switchProfilePorts = [
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
    ];
    $request->networkId = 'est';

    $response = $sdk->linkAggregations->createNetworkSwitchLinkAggregation($request);

    if ($response->createNetworkSwitchLinkAggregation201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchLinkAggregation

Split a link aggregation group into separate ports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchLinkAggregationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchLinkAggregationRequest();
    $request->linkAggregationId = 'placeat';
    $request->networkId = 'occaecati';

    $response = $sdk->linkAggregations->deleteNetworkSwitchLinkAggregation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchLinkAggregations

List link aggregation groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchLinkAggregationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchLinkAggregationsRequest();
    $request->networkId = 'nam';

    $response = $sdk->linkAggregations->getNetworkSwitchLinkAggregations($request);

    if ($response->getNetworkSwitchLinkAggregations200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchLinkAggregation

Update a link aggregation group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchLinkAggregationRequest();
    $request->requestBody = new UpdateNetworkSwitchLinkAggregationRequestBody();
    $request->requestBody->switchPorts = [
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
    ];
    $request->requestBody->switchProfilePorts = [
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
    ];
    $request->linkAggregationId = 'id';
    $request->networkId = 'culpa';

    $response = $sdk->linkAggregations->updateNetworkSwitchLinkAggregation($request);

    if ($response->updateNetworkSwitchLinkAggregation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
