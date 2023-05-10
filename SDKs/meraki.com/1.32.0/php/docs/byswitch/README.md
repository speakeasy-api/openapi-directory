# bySwitch

### Available Operations

* [getOrganizationSwitchPortsBySwitch](#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch

## getOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSwitchPortsBySwitchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSwitchPortsBySwitchRequest();
    $request->configurationUpdatedAfter = 'iusto';
    $request->endingBefore = 'ipsa';
    $request->mac = 'voluptates';
    $request->macs = [
        'aperiam',
    ];
    $request->name = 'Micheal Roob III';
    $request->networkIds = [
        'dolores',
        'assumenda',
    ];
    $request->organizationId = 'beatae';
    $request->perPage = 668606;
    $request->portProfileIds = [
        'corrupti',
        'molestiae',
        'provident',
        'accusamus',
    ];
    $request->serial = 'necessitatibus';
    $request->serials = [
        'sint',
        'ea',
        'autem',
    ];
    $request->startingAfter = 'ipsam';

    $response = $sdk->bySwitch->getOrganizationSwitchPortsBySwitch($request);

    if ($response->getOrganizationSwitchPortsBySwitch200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
