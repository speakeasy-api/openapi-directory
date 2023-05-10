# ethernet

### Available Operations

* [getOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices

## getOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationWirelessDevicesEthernetStatusesRequest();
    $request->endingBefore = 'minus';
    $request->networkIds = [
        'odit',
        'maxime',
    ];
    $request->organizationId = 'aspernatur';
    $request->perPage = 168913;
    $request->startingAfter = 'minus';

    $response = $sdk->ethernet->getOrganizationWirelessDevicesEthernetStatuses($request);

    if ($response->getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
