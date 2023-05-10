# services

### Available Operations

* [getV05HiServicesServiceId](#getv05hiservicesserviceid) - Get bridge service details/profile by the serviceId provided.

## getV05HiServicesServiceId

This API is meant for displaying the bridge service details by the serviceId provided .


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV05HiServicesServiceIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV05HiServicesServiceIdRequest();
    $request->authorization = 'debitis';
    $request->serviceId = 'nobis';

    $response = $sdk->services->getV05HiServicesServiceId($request);

    if ($response->serviceProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
