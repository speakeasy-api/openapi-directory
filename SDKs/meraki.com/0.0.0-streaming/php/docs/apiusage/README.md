# apiUsage

### Available Operations

* [getOrganizationApiRequests](#getorganizationapirequests) - List the API requests made by an organization
* [getOrganizationApiRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data

## getOrganizationApiRequests

List the API requests made by an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsRequest();
    $request->adminId = 'iure';
    $request->endingBefore = 'magnam';
    $request->method = 'debitis';
    $request->organizationId = 'ipsa';
    $request->path = 'delectus';
    $request->perPage = 272656;
    $request->responseCode = 383441;
    $request->sourceIp = 'molestiae';
    $request->startingAfter = 'minus';
    $request->t0 = 'placeat';
    $request->t1 = 'voluptatum';
    $request->timespan = 4799.77;

    $response = $sdk->apiUsage->getOrganizationApiRequests($request);

    if ($response->getOrganizationApiRequests200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApiRequestsOverview

Return an aggregated overview of API requests data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsOverviewRequest();
    $request->organizationId = 'excepturi';
    $request->t0 = 'nisi';
    $request->t1 = 'recusandae';
    $request->timespan = 8360.79;

    $response = $sdk->apiUsage->getOrganizationApiRequestsOverview($request);

    if ($response->getOrganizationApiRequestsOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
