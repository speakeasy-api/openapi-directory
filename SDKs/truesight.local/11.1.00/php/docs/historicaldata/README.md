# historicalData

## Overview

API operations to get historical data.

### Available Operations

* [getHistory](#gethistory) - Gets historical data for a specific group, application or service.

## getHistory

Gets the historical data for a specific group, application or service, for a given period.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHistoryRequest();
    $request->applicationId = 'ipsum';
    $request->from = 568434;
    $request->groupId = 'aspernatur';
    $request->serviceId = 'perferendis';
    $request->to = 324141;

    $response = $sdk->historicalData->getHistory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
