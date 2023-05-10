# geofences

## Overview

Geofence management

### Available Operations

* [deleteGeofencesId](#deletegeofencesid) - Delete a Geofence
* [getGeofences](#getgeofences) - Fetch a list of Geofences
* [postGeofences](#postgeofences) - Create a Geofence
* [putGeofencesId](#putgeofencesid) - Update a Geofence

## deleteGeofencesId

Delete a Geofence

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGeofencesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGeofencesIdRequest();
    $request->id = 569618;

    $response = $sdk->geofences->deleteGeofencesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeofences

Without params, it returns a list of Geofences the user has access to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGeofencesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeofencesRequest();
    $request->all = false;
    $request->deviceId = 270008;
    $request->groupId = 703737;
    $request->refresh = false;
    $request->userId = 735194;

    $response = $sdk->geofences->getGeofences($request);

    if ($response->geofences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGeofences

Create a Geofence

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Geofence;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Geofence();
    $request->area = 'labore';
    $request->attributes = [
        'eum' => 'non',
        'eligendi' => 'sint',
        'aliquid' => 'provident',
        'necessitatibus' => 'sint',
    ];
    $request->calendarId = 638921;
    $request->description = 'dolor';
    $request->id = 891555;
    $request->name = 'Wilbur King';

    $response = $sdk->geofences->postGeofences($request);

    if ($response->geofence !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putGeofencesId

Update a Geofence

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutGeofencesIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Geofence;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutGeofencesIdRequest();
    $request->geofence = new Geofence();
    $request->geofence->area = 'maiores';
    $request->geofence->attributes = [
        'dicta' => 'magnam',
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->geofence->calendarId = 675439;
    $request->geofence->description = 'accusamus';
    $request->geofence->id = 249796;
    $request->geofence->name = 'Jon Tillman';
    $request->id = 588465;

    $response = $sdk->geofences->putGeofencesId($request);

    if ($response->geofence !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
