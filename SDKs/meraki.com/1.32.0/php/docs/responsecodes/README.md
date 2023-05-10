# responseCodes

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
        'reprehenderit',
    ];
    $request->interval = 543775;
    $request->operationIds = [
        'numquam',
    ];
    $request->organizationId = 'recusandae';
    $request->sourceIps = [
        'fuga',
        'aperiam',
        'architecto',
        'vel',
    ];
    $request->t0 = 'cum';
    $request->t1 = 'quo';
    $request->timespan = 3034.23;
    $request->userAgent = 'inventore';
    $request->version = GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum::ONE;

    $response = $sdk->responseCodes->getOrganizationApiRequestsOverviewResponseCodesByInterval($request);

    if ($response->getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
