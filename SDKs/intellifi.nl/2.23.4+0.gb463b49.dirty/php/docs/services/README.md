# services

## Overview

The Brain consists of several software components with their own responsibilities, referred to as "services".
Some of these services have status information and/or configuration that can be managed using the `services` resource.


### Available Operations

* [getServiceById](#getservicebyid) - Get service
* [getServices](#getservices) - Get all services
* [updateService](#updateservice) - Update existing service

## getServiceById

Get service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceByIdRequest();
    $request->id = 'f5f0642d-ac7a-4f51-9cc4-13aa63aae8d6';

    $response = $sdk->services->getServiceById($request);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServices

Get all services

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServicesRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T12:56:04.738Z');
    $request->afterId = 'vel';
    $request->before = 'labore';
    $request->beforeId = 'possimus';
    $request->from = 'facilis';
    $request->fromId = 'cum';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->limit = 414857;
    $request->name = 'Foo Bar';
    $request->populate = 'in';
    $request->resultsOnly = false;
    $request->select = 'corporis';
    $request->sort = 'reiciendis';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeUpdated = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 8286.57;
    $request->until = 'nemo';
    $request->untilId = 'recusandae';

    $response = $sdk->services->getServices($request);

    if ($response->getServices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

Update existing service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->serviceInput = new ServiceInput();
    $request->serviceInput->configRequest = [
        'aperiam' => 'cum',
        'consectetur' => 'in',
    ];
    $request->serviceInput->restartRequest = true;
    $request->id = '5ed4f6fb-ee41-4f33-b17f-e35b60eb1ea4';

    $response = $sdk->services->updateService($request);

    if ($response->responseDefaultResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
