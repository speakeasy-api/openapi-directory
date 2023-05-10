# byInterval

### Available Operations

* [getOrganizationApiRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

## getOrganizationApiRequestsOverviewResponseCodesByInterval

Tracks organizations' API requests by response code across a given time period

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest();
    $request->adminIds = [
        'exercitationem',
    ];
    $request->interval = 932394;
    $request->operationIds = [
        'ipsum',
    ];
    $request->organizationId = 'unde';
    $request->sourceIps = [
        'distinctio',
        'maxime',
        'quia',
        'quia',
    ];
    $request->t0 = 'nostrum';
    $request->t1 = 'omnis';
    $request->timespan = 7272.5;
    $request->userAgent = 'dicta';
    $request->version = GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum::ONE;

    $response = $sdk->byInterval->getOrganizationApiRequestsOverviewResponseCodesByInterval($request);

    if ($response->getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
