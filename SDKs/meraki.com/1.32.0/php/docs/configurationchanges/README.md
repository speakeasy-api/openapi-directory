# configurationChanges

### Available Operations

* [getOrganizationConfigurationChanges](#getorganizationconfigurationchanges) - View the Change Log for your organization

## getOrganizationConfigurationChanges

View the Change Log for your organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigurationChangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigurationChangesRequest();
    $request->adminId = 'facilis';
    $request->endingBefore = 'impedit';
    $request->networkId = 'sit';
    $request->organizationId = 'nemo';
    $request->perPage = 633987;
    $request->startingAfter = 'consequuntur';
    $request->t0 = 'amet';
    $request->t1 = 'deserunt';
    $request->timespan = 2687.09;

    $response = $sdk->configurationChanges->getOrganizationConfigurationChanges($request);

    if ($response->getOrganizationConfigurationChanges200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
