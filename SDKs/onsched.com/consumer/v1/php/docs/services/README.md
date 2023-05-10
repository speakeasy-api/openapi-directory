# services

### Available Operations

* [getConsumerV1Services](#getconsumerv1services) - List Services
* [getConsumerV1ServicesAllocationsId](#getconsumerv1servicesallocationsid) - Get Service Allocation
* [getConsumerV1ServicesId](#getconsumerv1servicesid) - Get Service
* [getConsumerV1ServicesIdAllocations](#getconsumerv1servicesidallocations) - List Service Allocations
* [getConsumerV1ServicesIdResources](#getconsumerv1servicesidresources) - List Resources for Service

## getConsumerV1Services

<p>Use this endpoint to <b>List Services</b> available at your business location and/or company. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServicesScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ServicesRequest();
    $request->allLocations = false;
    $request->defaultService = false;
    $request->limit = 590984;
    $request->locationId = 'a';
    $request->name = 'Dr. Clifton Koch';
    $request->offset = 575751;
    $request->scope = ServicesScopeEnum::ALL;
    $request->serviceGroupId = 820767;
    $request->serviceId = 'quia';
    $request->sortDescending = false;
    $request->sortOrder = ServiceSortOrderEnum::NAME;

    $response = $sdk->services->getConsumerV1Services($request);

    if ($response->serviceListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1ServicesAllocationsId

<p>Use this endpoint to return a <b>Service Allocation</b> object. A valid <b>serviceAllocation id</b> is required. Find service allocation id's by using the <i>GET/consumer​/v1​/services​/{id}​/allocations</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ServicesAllocationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ServicesAllocationsIdRequest();
    $request->id = 'fd121aa6-f1e6-474b-9b04-f15756082d68';

    $response = $sdk->services->getConsumerV1ServicesAllocationsId($request);

    if ($response->serviceAllocationViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1ServicesId

<p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /consumer/v1/services</i> endpoint.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ServicesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ServicesIdRequest();
    $request->id = 929292;

    $response = $sdk->services->getConsumerV1ServicesId($request);

    if ($response->serviceViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1ServicesIdAllocations

<p>Use this endpoint to return a <b>List of Service Allocations</b> associated with the requested service. A valid <b>service id</b> is required. Allocations are used for Event type services/bookings. Retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service supply the service id. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://docs.onsched.com/reference/post_setup-v1-services-id-allocations">Create Service Allocations</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ServicesIdAllocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ServicesIdAllocationsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-20T06:44:46.478Z');
    $request->id = '9f1d1705-1339-4d08-886a-1840394c2607';
    $request->limit = 115484;
    $request->locationId = 'maiores';
    $request->offset = 618480;
    $request->resourceId = 'velit';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-17T02:47:10.534Z');

    $response = $sdk->services->getConsumerV1ServicesIdAllocations($request);

    if ($response->serviceAllocationListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsumerV1ServicesIdResources

<p>Use this endpoint to return a list of <b>Resources that provide the Service requested</b>. A valid <b>service id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConsumerV1ServicesIdResourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsumerV1ServicesIdResourcesRequest();
    $request->id = 'f0642dac-7af5-415c-8413-aa63aae8d678';
    $request->limit = 427834;
    $request->locationId = 'labore';
    $request->offset = 822560;

    $response = $sdk->services->getConsumerV1ServicesIdResources($request);

    if ($response->resourceListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
