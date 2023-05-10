# serviceInstance

### Available Operations

* [listServiceInstances](#listserviceinstances) - List ServiceInstances
* [showServiceInstance](#showserviceinstance) - Show an existing ServiceInstance

## listServiceInstances

Returns an array of ServiceInstance objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceInstancesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceInstancesRequest();
    $request->filter = [
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->limit = 988374;
    $request->offset = 958950;
    $request->sortBy = [
        'mollitia' => 'dolorem',
    ];

    $response = $sdk->serviceInstance->listServiceInstances($request);

    if ($response->serviceInstancesCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## showServiceInstance

Returns a ServiceInstance object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShowServiceInstanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShowServiceInstanceRequest();
    $request->id = 'a2fa9467-7392-451a-a52c-3f5ad019da1f';

    $response = $sdk->serviceInstance->showServiceInstance($request);

    if ($response->serviceInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
