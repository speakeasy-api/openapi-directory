# packagePickups

## Overview

Scheduled package pickups

### Available Operations

* [deleteScheduledPickup](#deletescheduledpickup) - Delete a Scheduled Pickup
* [getPickupById](#getpickupbyid) - Get Pickup By ID
* [listScheduledPickups](#listscheduledpickups) - List Scheduled Pickups
* [schedulePickup](#schedulepickup) - Schedule a Pickup

## deleteScheduledPickup

Delete a previously-scheduled pickup by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScheduledPickupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScheduledPickupRequest();
    $request->pickupId = 'pik_3YcKU5zdtJuCqoeNwyqqbW';

    $response = $sdk->packagePickups->deleteScheduledPickup($request);

    if ($response->deletePickupByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPickupById

Get Pickup By ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPickupByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPickupByIdRequest();
    $request->pickupId = 'pik_3YcKU5zdtJuCqoeNwyqqbW';

    $response = $sdk->packagePickups->getPickupById($request);

    if ($response->getPickupByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listScheduledPickups

List all pickups that have been scheduled for this carrier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListScheduledPickupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListScheduledPickupsRequest();
    $request->carrierId = 'se-28529731';
    $request->createdAtEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-22T18:12:12.288Z');
    $request->createdAtStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T05:56:38.936Z');
    $request->page = 565189;
    $request->pageSize = 566602;
    $request->warehouseId = 'se-28529731';

    $response = $sdk->packagePickups->listScheduledPickups($request);

    if ($response->getPickupsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## schedulePickup

Schedule a package pickup with a carrier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchedulePickupRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactDetails;
use \OpenAPI\OpenAPI\Models\Shared\PickupWindow;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SchedulePickupRequestBodyInput();
    $request->contactDetails = new ContactDetails();
    $request->contactDetails->email = 'john.doe@example.com';
    $request->contactDetails->name = 'Joel Lang';
    $request->contactDetails->phone = '(950) 923-0681';
    $request->labelIds = [
        'se-28529731',
        'se-28529731',
        'se-28529731',
    ];
    $request->pickupNotes = 'distinctio';
    $request->pickupWindow = new PickupWindow();
    $request->pickupWindow->endAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2018-09-23T15:00:00.000Z');
    $request->pickupWindow->startAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2018-09-23T15:00:00.000Z');

    $response = $sdk->packagePickups->schedulePickup($request);

    if ($response->schedulePickupResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
