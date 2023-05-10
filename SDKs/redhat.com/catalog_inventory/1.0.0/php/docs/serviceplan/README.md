# servicePlan

### Available Operations

* [listServicePlans](#listserviceplans) - List ServicePlans
* [showServicePlan](#showserviceplan) - Show an existing ServicePlan

## listServicePlans

Returns an array of ServicePlan objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServicePlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicePlansRequest();
    $request->filter = [
        'minima' => 'eaque',
    ];
    $request->limit = 952871;
    $request->offset = 725595;
    $request->sortBy = [
        'aut' => 'deleniti',
    ];

    $response = $sdk->servicePlan->listServicePlans($request);

    if ($response->servicePlansCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## showServicePlan

Returns a ServicePlan object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShowServicePlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShowServicePlanRequest();
    $request->id = 'c42e141a-ac36-46c8-9d6b-144290747477';

    $response = $sdk->servicePlan->showServicePlan($request);

    if ($response->servicePlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
