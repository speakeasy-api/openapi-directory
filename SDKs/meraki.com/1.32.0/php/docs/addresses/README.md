# addresses

### Available Operations

* [getOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.

## getOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksAddressesByDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesUplinksAddressesByDeviceRequest();
    $request->endingBefore = 'incidunt';
    $request->networkIds = [
        'dolores',
    ];
    $request->organizationId = 'distinctio';
    $request->perPage = 704474;
    $request->productTypes = [
        'quam',
        'molestias',
    ];
    $request->serials = [
        'qui',
        'neque',
        'fugit',
        'magni',
    ];
    $request->startingAfter = 'odio';
    $request->tags = [
        'ullam',
    ];
    $request->tagsFilterType = GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->addresses->getOrganizationDevicesUplinksAddressesByDevice($request);

    if ($response->getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
