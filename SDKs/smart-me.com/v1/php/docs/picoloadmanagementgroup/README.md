# picoLoadmanagementGroup

### Available Operations

* [picoLoadmanagementGroupGet](#picoloadmanagementgroupget) - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* [getApiPicoLoadmanagementgroup](#getapipicoloadmanagementgroup) - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

## picoLoadmanagementGroupGet

GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PicoLoadmanagementGroupGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PicoLoadmanagementGroupGetRequest();
    $request->id = 'b675fd5e-60b3-475e-94f6-fbee41f33317';

    $response = $sdk->picoLoadmanagementGroup->picoLoadmanagementGroupGet($request);

    if ($response->picoLoadmanagementGroupDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiPicoLoadmanagementgroup

GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->picoLoadmanagementGroup->getApiPicoLoadmanagementgroup();

    if ($response->picoLoadmanagementGroupDtos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
