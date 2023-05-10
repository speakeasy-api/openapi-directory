# securityEvents

### Available Operations

* [getNetworkSecurityEvents](#getnetworksecurityevents) - List the security events (intrusion detection only) for a network
* [getOrganizationSecurityEvents](#getorganizationsecurityevents) - List the security events (intrusion detection only) for an organization

## getNetworkSecurityEvents

List the security events (intrusion detection only) for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSecurityEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSecurityEventsRequest();
    $request->endingBefore = 'eveniet';
    $request->networkId = 'occaecati';
    $request->perPage = 160230;
    $request->startingAfter = 'fugit';
    $request->t0 = 'id';
    $request->t1 = 'quis';
    $request->timespan = 4402.64;

    $response = $sdk->securityEvents->getNetworkSecurityEvents($request);

    if ($response->getNetworkSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSecurityEvents

List the security events (intrusion detection only) for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSecurityEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSecurityEventsRequest();
    $request->endingBefore = 'error';
    $request->organizationId = 'illo';
    $request->perPage = 361306;
    $request->startingAfter = 'quidem';
    $request->t0 = 'eveniet';
    $request->t1 = 'non';
    $request->timespan = 8784.93;

    $response = $sdk->securityEvents->getOrganizationSecurityEvents($request);

    if ($response->getOrganizationSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
