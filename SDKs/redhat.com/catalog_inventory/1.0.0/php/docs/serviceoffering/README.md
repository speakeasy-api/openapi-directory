# serviceOffering

### Available Operations

* [appliedInventoriesTagsForServiceOffering](#appliedinventoriestagsforserviceoffering) - Invokes computing of ServiceInventories tags for given ServiceOffering
* [listServiceOfferingServiceInstances](#listserviceofferingserviceinstances) - List ServiceInstances for ServiceOffering
* [listServiceOfferingServiceOfferingNodes](#listserviceofferingserviceofferingnodes) - List ServiceOfferingNodes for ServiceOffering
* [listServiceOfferingServicePlans](#listserviceofferingserviceplans) - List ServicePlans for ServiceOffering
* [listServiceOfferings](#listserviceofferings) - List ServiceOfferings
* [orderServiceOffering](#orderserviceoffering) - Order an existing ServiceOffering
* [showServiceOffering](#showserviceoffering) - Show an existing ServiceOffering

## appliedInventoriesTagsForServiceOffering

Returns an array of inventories tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AppliedInventoriesTagsForServiceOfferingRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppliedInventoriesParametersServicePlan;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppliedInventoriesTagsForServiceOfferingRequest();
    $request->appliedInventoriesParametersServicePlan = new AppliedInventoriesParametersServicePlan();
    $request->appliedInventoriesParametersServicePlan->serviceParameters = [
        'architecto' => 'repudiandae',
    ];
    $request->id = '5b7fd2ed-0289-421c-9dc6-92601fb576b0';

    $response = $sdk->serviceOffering->appliedInventoriesTagsForServiceOffering($request);

    if ($response->tags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceOfferingServiceInstances

Returns an array of ServiceInstance objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceOfferingServiceInstancesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceOfferingServiceInstancesRequest();
    $request->filter = [
        'nemo' => 'voluptatibus',
        'perferendis' => 'fugiat',
        'amet' => 'aut',
        'cumque' => 'corporis',
    ];
    $request->id = 'fbb25870-5320-42c7-bd5f-e9b90c28909b';
    $request->limit = 237893;
    $request->offset = 992397;
    $request->sortBy = [
        'modi' => 'iste',
        'dolorum' => 'deleniti',
        'pariatur' => 'provident',
        'nobis' => 'libero',
    ];

    $response = $sdk->serviceOffering->listServiceOfferingServiceInstances($request);

    if ($response->serviceInstancesCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceOfferingServiceOfferingNodes

Returns an array of ServiceOfferingNode objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceOfferingServiceOfferingNodesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceOfferingServiceOfferingNodesRequest();
    $request->filter = [
        'quaerat' => 'quos',
        'aliquid' => 'dolorem',
        'dolorem' => 'dolor',
        'qui' => 'ipsum',
    ];
    $request->id = 'f9b77f3a-4100-4674-abf6-9280d1ba77a8';
    $request->limit = 607045;
    $request->offset = 896672;
    $request->sortBy = [
        'asperiores' => 'nihil',
        'ipsum' => 'voluptate',
        'id' => 'saepe',
    ];

    $response = $sdk->serviceOffering->listServiceOfferingServiceOfferingNodes($request);

    if ($response->serviceOfferingNodesCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceOfferingServicePlans

Returns an array of ServicePlan objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceOfferingServicePlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceOfferingServicePlansRequest();
    $request->filter = [
        'aspernatur' => 'perferendis',
        'amet' => 'optio',
    ];
    $request->id = 'e5e6a95d-8a0d-4446-8e2a-f7a73cf3be45';
    $request->limit = 213312;
    $request->offset = 957451;
    $request->sortBy = [
        'nihil' => 'sit',
        'expedita' => 'neque',
        'sed' => 'vel',
    ];

    $response = $sdk->serviceOffering->listServiceOfferingServicePlans($request);

    if ($response->servicePlansCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceOfferings

Returns an array of ServiceOffering objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceOfferingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceOfferingsRequest();
    $request->filter = [
        'voluptas' => 'deserunt',
        'quam' => 'ipsum',
        'incidunt' => 'qui',
    ];
    $request->limit = 586784;
    $request->offset = 807581;
    $request->sortBy = [
        'soluta' => 'dicta',
        'laborum' => 'totam',
        'incidunt' => 'aspernatur',
        'dolores' => 'distinctio',
    ];

    $response = $sdk->serviceOffering->listServiceOfferings($request);

    if ($response->serviceOfferingsCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderServiceOffering

Returns a Task id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrderServiceOfferingRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderParametersServiceOfferingInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderServiceOfferingRequest();
    $request->orderParametersServiceOfferingInput = new OrderParametersServiceOfferingInput();
    $request->orderParametersServiceOfferingInput->providerControlParameters = [
        'aliquid' => 'quam',
        'molestias' => 'temporibus',
        'qui' => 'neque',
    ];
    $request->orderParametersServiceOfferingInput->serviceParameters = [
        'magni' => 'odio',
    ];
    $request->id = '15bf0cbb-1e31-4b8b-90f3-443a1108e0ad';

    $response = $sdk->serviceOffering->orderServiceOffering($request);

    if ($response->orderServiceOffering200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## showServiceOffering

Returns a ServiceOffering object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShowServiceOfferingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShowServiceOfferingRequest();
    $request->id = 'cf4b9218-79fc-4e95-bf73-ef7fbc7abd74';

    $response = $sdk->serviceOffering->showServiceOffering($request);

    if ($response->serviceOffering !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
