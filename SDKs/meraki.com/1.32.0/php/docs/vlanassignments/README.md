# vlanAssignments

### Available Operations

* [getDeviceAppliancePrefixesDelegatedVlanAssignments](#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

## getDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest();
    $request->serial = 'quas';

    $response = $sdk->vlanAssignments->getDeviceAppliancePrefixesDelegatedVlanAssignments($request);

    if ($response->getDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
