# apiRequests

### Available Operations

* [getOrganizationApiRequests](#getorganizationapirequests) - List the API requests made by an organization
* [getOrganizationApiRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [getOrganizationApiRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

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
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsRequest();
    $request->adminId = 'impedit';
    $request->endingBefore = 'explicabo';
    $request->method = GetOrganizationApiRequestsMethodEnum::GET;
    $request->operationIds = [
        'dignissimos',
    ];
    $request->organizationId = 'dicta';
    $request->path = 'maiores';
    $request->perPage = 618480;
    $request->responseCode = 244651;
    $request->sourceIp = 'voluptatibus';
    $request->startingAfter = 'voluptas';
    $request->t0 = 'asperiores';
    $request->t1 = 'aperiam';
    $request->timespan = 4090.54;
    $request->userAgent = 'quaerat';
    $request->version = GetOrganizationApiRequestsVersionEnum::ZERO;

    $response = $sdk->apiRequests->getOrganizationApiRequests($request);

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
    $request->organizationId = 'repellendus';
    $request->t0 = 'officia';
    $request->t1 = 'maxime';
    $request->timespan = 4903.05;

    $response = $sdk->apiRequests->getOrganizationApiRequestsOverview($request);

    if ($response->getOrganizationApiRequestsOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
        'asperiores',
        'nemo',
        'quae',
    ];
    $request->interval = 312753;
    $request->operationIds = [
        'quod',
        'labore',
        'ab',
        'adipisci',
    ];
    $request->organizationId = 'fuga';
    $request->sourceIps = [
        'suscipit',
        'velit',
        'culpa',
    ];
    $request->t0 = 'est';
    $request->t1 = 'recusandae';
    $request->timespan = 5173.09;
    $request->userAgent = 'fugiat';
    $request->version = GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum::ZERO;

    $response = $sdk->apiRequests->getOrganizationApiRequestsOverviewResponseCodesByInterval($request);

    if ($response->getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
