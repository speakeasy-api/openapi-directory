# server

## Overview

Server information

### Available Operations

* [getServer](#getserver) - Fetch Server information
* [putServer](#putserver) - Update Server information

## getServer

Fetch Server information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->server->getServer();

    if ($response->server !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putServer

Update Server information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Server;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Server();
    $request->attributes = [
        'omnis' => 'necessitatibus',
        'distinctio' => 'asperiores',
        'nihil' => 'ipsum',
    ];
    $request->bingKey = 'voluptate';
    $request->coordinateFormat = 'id';
    $request->deviceReadonly = false;
    $request->forceSettings = false;
    $request->id = 906418;
    $request->latitude = 2633.22;
    $request->limitCommands = false;
    $request->longitude = 1372.2;
    $request->map = 'perferendis';
    $request->mapUrl = 'amet';
    $request->poiLayer = 'optio';
    $request->readonly = false;
    $request->registration = false;
    $request->twelveHourFormat = false;
    $request->version = 'accusamus';
    $request->zoom = 320017;

    $response = $sdk->server->putServer($request);

    if ($response->server !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
