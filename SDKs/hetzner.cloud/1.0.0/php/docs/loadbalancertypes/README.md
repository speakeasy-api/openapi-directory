# loadBalancerTypes

## Overview

Load Balancer types define kinds of Load Balancers offered. Each type has an hourly and a monthly cost. You will pay whichever amount is lower for your usage of this specific Load Balancer. Costs may differ between Locations.

Currency for all amounts is €. All prices exclude VAT.


### Available Operations

* [getLoadBalancerTypes](#getloadbalancertypes) - Get all Load Balancer Types
* [getLoadBalancerTypesId](#getloadbalancertypesid) - Get a Load Balancer Type

## getLoadBalancerTypes

Gets all Load Balancer type objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancerTypesRequest();
    $request->name = 'Tina Jacobi';

    $response = $sdk->loadBalancerTypes->getLoadBalancerTypes($request);

    if ($response->getLoadBalancerTypes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoadBalancerTypesId

Gets a specific Load Balancer type object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerTypesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoadBalancerTypesIdRequest();
    $request->id = 20107;

    $response = $sdk->loadBalancerTypes->getLoadBalancerTypesId($request);

    if ($response->getLoadBalancerTypesId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
