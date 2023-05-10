# broadcastServices

## Overview

Broadcast services can subscribe to content for multiple destinations.

### Available Operations

* [getApiV2Broadcastservices](#getapiv2broadcastservices) - Gets broadcast services matching the given criteria.
* [getApiV2BroadcastservicesId](#getapiv2broadcastservicesid) - Returns the broadcast service matching the given ID.

## getApiV2Broadcastservices

Gets broadcast services matching the given criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2BroadcastservicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2BroadcastservicesOrderByIDEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2BroadcastservicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2BroadcastservicesRequest();
    $request->orderById = GetApiV2BroadcastservicesOrderByIDEnum::DESC;
    $request->pageSize = 602763;
    $request->pageStart = 857946;

    $requestSecurity = new GetApiV2BroadcastservicesSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->broadcastServices->getApiV2Broadcastservices($request, $requestSecurity);

    if ($response->episodes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2BroadcastservicesId

Returns the broadcast service matching the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2BroadcastservicesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2BroadcastservicesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2BroadcastservicesIdRequest();
    $request->id = 544883;

    $requestSecurity = new GetApiV2BroadcastservicesIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->broadcastServices->getApiV2BroadcastservicesId($request, $requestSecurity);

    if ($response->broadcastService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
