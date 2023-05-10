# SDK

## Overview

API offered by Microcks, the Kubernetes native tools for API and microservices mocking and testing (microcks.io)

### Available Operations

* [getResource](#getresource) - Get Resource
* [getResourcesByService](#getresourcesbyservice) - Get Resources by Service

## getResource

Get Resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceRequest();
    $request->name = 'Johnnie Stamm';

    $requestSecurity = new GetResourceSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->getResource($request, $requestSecurity);

    if ($response->resource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesByService

Get Resources by Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesByServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesByServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesByServiceRequest();
    $request->serviceId = 'deserunt';

    $requestSecurity = new GetResourcesByServiceSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->getResourcesByService($request, $requestSecurity);

    if ($response->resources !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
