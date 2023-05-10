# readings

### Available Operations

* [getOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [getOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial

## getOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSensorReadingsHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSensorReadingsHistoryRequest();
    $request->endingBefore = 'necessitatibus';
    $request->metrics = [
        'vel',
        'autem',
        'earum',
    ];
    $request->networkIds = [
        'nihil',
        'voluptates',
        'accusantium',
    ];
    $request->organizationId = 'veniam';
    $request->perPage = 261243;
    $request->serials = [
        'aut',
    ];
    $request->startingAfter = 'neque';
    $request->t0 = 'nesciunt';
    $request->t1 = 'aliquam';
    $request->timespan = 4607.82;

    $response = $sdk->readings->getOrganizationSensorReadingsHistory($request);

    if ($response->getOrganizationSensorReadingsHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSensorReadingsLatest

Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSensorReadingsLatestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSensorReadingsLatestRequest();
    $request->endingBefore = 'pariatur';
    $request->metrics = [
        'corrupti',
        'asperiores',
    ];
    $request->networkIds = [
        'odit',
        'ut',
        'cupiditate',
        'ab',
    ];
    $request->organizationId = 'vitae';
    $request->perPage = 301188;
    $request->serials = [
        'asperiores',
        'animi',
    ];
    $request->startingAfter = 'soluta';

    $response = $sdk->readings->getOrganizationSensorReadingsLatest($request);

    if ($response->getOrganizationSensorReadingsLatest200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
