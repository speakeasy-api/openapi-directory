# changeLog

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
    $request->adminId = 'non';
    $request->endingBefore = 'occaecati';
    $request->networkId = 'enim';
    $request->organizationId = 'accusamus';
    $request->perPage = 965417;
    $request->startingAfter = 'quidem';
    $request->t0 = 'provident';
    $request->t1 = 'nam';
    $request->timespan = 6596.69;

    $response = $sdk->changeLog->getOrganizationConfigurationChanges($request);

    if ($response->getOrganizationConfigurationChanges200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
