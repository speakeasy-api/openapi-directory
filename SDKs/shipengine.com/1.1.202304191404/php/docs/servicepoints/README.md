# servicePoints

### Available Operations

* [servicePointsGetById](#servicepointsgetbyid) - Get Service Point By ID
* [servicePointsList](#servicepointslist) - List Service Points

## servicePointsGetById

Returns a carrier service point by using the service_point_id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ServicePointsGetByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicePointsGetByIdRequest();
    $request->carrierCode = 'rerum';
    $request->countryCode = 'BO';
    $request->servicePointId = 'magnam';

    $response = $sdk->servicePoints->servicePointsGetById($request);

    if ($response->getServicePointByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicePointsList

List carrier service points by location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServicePointsRequestBody();
    $request->address = new GetServicePointsRequestBodyAddress();
    $request->address->addressLine1 = 'cumque';
    $request->address->addressLine2 = 'facere';
    $request->address->addressLine3 = 'ea';
    $request->address->cityLocality = 'aliquid';
    $request->address->countryCode = 'NR';
    $request->address->postalCode = '25389-6576';
    $request->address->stateProvince = 'blanditiis';
    $request->addressQuery = '177A Bleecker Street New York';
    $request->lat = 48.874518928233094;
    $request->long = 2.3591775711639404;
    $request->maxResults = 25;
    $request->providers = [
        new GetServicePointsRequestBodyProviders(),
        new GetServicePointsRequestBodyProviders(),
        new GetServicePointsRequestBodyProviders(),
    ];
    $request->radius = 500;

    $response = $sdk->servicePoints->servicePointsList($request);

    if ($response->listServicePointsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
