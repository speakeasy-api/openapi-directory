# latest

### Available Operations

* [getOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial

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
    $request->endingBefore = 'deleniti';
    $request->metrics = [
        'unde',
        'veniam',
        'nam',
        'accusamus',
    ];
    $request->networkIds = [
        'explicabo',
    ];
    $request->organizationId = 'corporis';
    $request->perPage = 278535;
    $request->serials = [
        'nihil',
        'adipisci',
        'provident',
    ];
    $request->startingAfter = 'reiciendis';

    $response = $sdk->latest->getOrganizationSensorReadingsLatest($request);

    if ($response->getOrganizationSensorReadingsLatest200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
