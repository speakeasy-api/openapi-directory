# applications

### Available Operations

* [getNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [getOrganizationInsightApplications](#getorganizationinsightapplications) - List all Insight tracked applications

## getNetworkInsightApplicationHealthByTime

Get application health by time

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkInsightApplicationHealthByTimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkInsightApplicationHealthByTimeRequest();
    $request->applicationId = 'ipsa';
    $request->networkId = 'laborum';
    $request->resolution = 123844;
    $request->t0 = 'nostrum';
    $request->t1 = 'fugiat';
    $request->timespan = 7137.67;

    $response = $sdk->applications->getNetworkInsightApplicationHealthByTime($request);

    if ($response->getNetworkInsightApplicationHealthByTime200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInsightApplications

List all Insight tracked applications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInsightApplicationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInsightApplicationsRequest();
    $request->organizationId = 'aliquid';

    $response = $sdk->applications->getOrganizationInsightApplications($request);

    if ($response->getOrganizationInsightApplications200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
