# trafficAnalysis

### Available Operations

* [getNetworkTrafficAnalysis](#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [updateNetworkTrafficAnalysis](#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network

## getNetworkTrafficAnalysis

Return the traffic analysis settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficAnalysisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficAnalysisRequest();
    $request->networkId = 'laboriosam';

    $response = $sdk->trafficAnalysis->getNetworkTrafficAnalysis($request);

    if ($response->getNetworkTrafficAnalysis200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkTrafficAnalysis

Update the traffic analysis settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkTrafficAnalysisRequest();
    $request->requestBody = new UpdateNetworkTrafficAnalysisRequestBody();
    $request->requestBody->customPieChartItems = [
        new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems(),
        new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems(),
        new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems(),
        new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems(),
    ];
    $request->requestBody->mode = UpdateNetworkTrafficAnalysisRequestBodyModeEnum::DISABLED;
    $request->networkId = 'corporis';

    $response = $sdk->trafficAnalysis->updateNetworkTrafficAnalysis($request);

    if ($response->updateNetworkTrafficAnalysis200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
