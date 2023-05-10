# maintenance

## Overview

Maintenance management

### Available Operations

* [deleteMaintenanceId](#deletemaintenanceid) - Delete a Maintenance
* [getMaintenance](#getmaintenance) - Fetch a list of Maintenance
* [postMaintenance](#postmaintenance) - Create a Maintenance
* [putMaintenanceId](#putmaintenanceid) - Update a Maintenance

## deleteMaintenanceId

Delete a Maintenance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMaintenanceIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMaintenanceIdRequest();
    $request->id = 551816;

    $response = $sdk->maintenance->deleteMaintenanceId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMaintenance

Without params, it returns a list of Maintenance the user has access to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMaintenanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMaintenanceRequest();
    $request->all = false;
    $request->deviceId = 574325;
    $request->groupId = 33625;
    $request->refresh = false;
    $request->userId = 653201;

    $response = $sdk->maintenance->getMaintenance($request);

    if ($response->maintenances !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMaintenance

Create a Maintenance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Maintenance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Maintenance();
    $request->attributes = [
        'mollitia' => 'ad',
        'eum' => 'dolor',
        'necessitatibus' => 'odit',
        'nemo' => 'quasi',
    ];
    $request->id = 435865;
    $request->name = 'Doyle Gibson';
    $request->period = 7038.89;
    $request->start = 4479.26;
    $request->type = 'architecto';

    $response = $sdk->maintenance->postMaintenance($request);

    if ($response->maintenance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putMaintenanceId

Update a Maintenance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutMaintenanceIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Maintenance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutMaintenanceIdRequest();
    $request->maintenance = new Maintenance();
    $request->maintenance->attributes = [
        'repudiandae' => 'ullam',
    ];
    $request->maintenance->id = 714242;
    $request->maintenance->name = 'Kristie Spencer';
    $request->maintenance->period = 8681.26;
    $request->maintenance->start = 375.59;
    $request->maintenance->type = 'consequuntur';
    $request->id = 508315;

    $response = $sdk->maintenance->putMaintenanceId($request);

    if ($response->maintenance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
