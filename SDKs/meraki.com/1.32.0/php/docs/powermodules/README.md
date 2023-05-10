# powerModules

### Available Operations

* [getOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization

## getOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesPowerModulesStatusesByDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesPowerModulesStatusesByDeviceRequest();
    $request->endingBefore = 'laboriosam';
    $request->networkIds = [
        'molestiae',
        'iste',
        'sed',
    ];
    $request->organizationId = 'veritatis';
    $request->perPage = 414720;
    $request->productTypes = [
        'eveniet',
    ];
    $request->serials = [
        'nihil',
        'repellendus',
    ];
    $request->startingAfter = 'non';
    $request->tags = [
        'voluptatum',
        'vel',
        'quae',
    ];
    $request->tagsFilterType = GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum::WITH_ALL_TAGS;

    $response = $sdk->powerModules->getOrganizationDevicesPowerModulesStatusesByDevice($request);

    if ($response->getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
