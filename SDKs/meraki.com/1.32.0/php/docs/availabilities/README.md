# availabilities

### Available Operations

* [getOrganizationDevicesAvailabilities](#getorganizationdevicesavailabilities) - List the availability information for devices in an organization

## getOrganizationDevicesAvailabilities

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesAvailabilitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesAvailabilitiesRequest();
    $request->endingBefore = 'voluptatem';
    $request->networkIds = [
        'deleniti',
    ];
    $request->organizationId = 'earum';
    $request->perPage = 404244;
    $request->productTypes = [
        'rem',
        'minus',
        'nemo',
        'asperiores',
    ];
    $request->serials = [
        'ullam',
    ];
    $request->startingAfter = 'perferendis';
    $request->tags = [
        'totam',
        'impedit',
        'quibusdam',
        'nam',
    ];
    $request->tagsFilterType = GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum::WITH_ALL_TAGS;

    $response = $sdk->availabilities->getOrganizationDevicesAvailabilities($request);

    if ($response->getOrganizationDevicesAvailabilities200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
