# services

## Overview

API operations to interact with the monitored Services.

### Available Operations

* [getOneService](#getoneservice) - Gets detailed information about a specific service.
* [getServices](#getservices) - Gets summarized information about all monitored services.

## getOneService

You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOneServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOneServiceRequest();
    $request->serviceId = 'natus';

    $response = $sdk->services->getOneService($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServices

Lists the available ServiceSummary instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServicesRequest();
    $request->direction = GetServicesDirectionEnum::ASC;
    $request->limit = 612096;
    $request->page = 'dolor';
    $request->sort = 'natus';

    $response = $sdk->services->getServices($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
