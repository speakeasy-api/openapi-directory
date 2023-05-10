# portSchedules

### Available Operations

* [createNetworkSwitchPortSchedule](#createnetworkswitchportschedule) - Add a switch port schedule
* [deleteNetworkSwitchPortSchedule](#deletenetworkswitchportschedule) - Delete a switch port schedule
* [getNetworkSwitchPortSchedules](#getnetworkswitchportschedules) - List switch port schedules
* [updateNetworkSwitchPortSchedule](#updatenetworkswitchportschedule) - Update a switch port schedule

## createNetworkSwitchPortSchedule

Add a switch port schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortSchedule;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchPortScheduleRequest();
    $request->requestBody = new CreateNetworkSwitchPortScheduleRequestBody();
    $request->requestBody->name = 'Irving Greenholt';
    $request->requestBody->portSchedule = new CreateNetworkSwitchPortScheduleRequestBodyPortSchedule();
    $request->requestBody->portSchedule->friday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday();
    $request->requestBody->portSchedule->friday->active = false;
    $request->requestBody->portSchedule->friday->from = 'perferendis';
    $request->requestBody->portSchedule->friday->to = 'aliquam';
    $request->requestBody->portSchedule->monday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday();
    $request->requestBody->portSchedule->monday->active = false;
    $request->requestBody->portSchedule->monday->from = 'perspiciatis';
    $request->requestBody->portSchedule->monday->to = 'quae';
    $request->requestBody->portSchedule->saturday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday();
    $request->requestBody->portSchedule->saturday->active = false;
    $request->requestBody->portSchedule->saturday->from = 'dolorum';
    $request->requestBody->portSchedule->saturday->to = 'fuga';
    $request->requestBody->portSchedule->sunday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday();
    $request->requestBody->portSchedule->sunday->active = false;
    $request->requestBody->portSchedule->sunday->from = 'sequi';
    $request->requestBody->portSchedule->sunday->to = 'ullam';
    $request->requestBody->portSchedule->thursday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday();
    $request->requestBody->portSchedule->thursday->active = false;
    $request->requestBody->portSchedule->thursday->from = 'temporibus';
    $request->requestBody->portSchedule->thursday->to = 'aliquam';
    $request->requestBody->portSchedule->tuesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday();
    $request->requestBody->portSchedule->tuesday->active = false;
    $request->requestBody->portSchedule->tuesday->from = 'error';
    $request->requestBody->portSchedule->tuesday->to = 'deleniti';
    $request->requestBody->portSchedule->wednesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday();
    $request->requestBody->portSchedule->wednesday->active = false;
    $request->requestBody->portSchedule->wednesday->from = 'dolor';
    $request->requestBody->portSchedule->wednesday->to = 'natus';
    $request->networkId = 'reiciendis';

    $response = $sdk->portSchedules->createNetworkSwitchPortSchedule($request);

    if ($response->createNetworkSwitchPortSchedule201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchPortSchedule

Delete a switch port schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchPortScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchPortScheduleRequest();
    $request->networkId = 'consequatur';
    $request->portScheduleId = 'ipsum';

    $response = $sdk->portSchedules->deleteNetworkSwitchPortSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchPortSchedules

List switch port schedules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchPortSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchPortSchedulesRequest();
    $request->networkId = 'quidem';

    $response = $sdk->portSchedules->getNetworkSwitchPortSchedules($request);

    if ($response->getNetworkSwitchPortSchedules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchPortSchedule

Update a switch port schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchPortScheduleRequest();
    $request->requestBody = new UpdateNetworkSwitchPortScheduleRequestBody();
    $request->requestBody->name = 'Willis Krajcik';
    $request->requestBody->portSchedule = new UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule();
    $request->requestBody->portSchedule->friday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday();
    $request->requestBody->portSchedule->friday->active = false;
    $request->requestBody->portSchedule->friday->from = 'occaecati';
    $request->requestBody->portSchedule->friday->to = 'quasi';
    $request->requestBody->portSchedule->monday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday();
    $request->requestBody->portSchedule->monday->active = false;
    $request->requestBody->portSchedule->monday->from = 'blanditiis';
    $request->requestBody->portSchedule->monday->to = 'a';
    $request->requestBody->portSchedule->saturday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday();
    $request->requestBody->portSchedule->saturday->active = false;
    $request->requestBody->portSchedule->saturday->from = 'aut';
    $request->requestBody->portSchedule->saturday->to = 'neque';
    $request->requestBody->portSchedule->sunday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday();
    $request->requestBody->portSchedule->sunday->active = false;
    $request->requestBody->portSchedule->sunday->from = 'dicta';
    $request->requestBody->portSchedule->sunday->to = 'dolor';
    $request->requestBody->portSchedule->thursday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday();
    $request->requestBody->portSchedule->thursday->active = false;
    $request->requestBody->portSchedule->thursday->from = 'iste';
    $request->requestBody->portSchedule->thursday->to = 'quos';
    $request->requestBody->portSchedule->tuesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday();
    $request->requestBody->portSchedule->tuesday->active = false;
    $request->requestBody->portSchedule->tuesday->from = 'ut';
    $request->requestBody->portSchedule->tuesday->to = 'exercitationem';
    $request->requestBody->portSchedule->wednesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday();
    $request->requestBody->portSchedule->wednesday->active = false;
    $request->requestBody->portSchedule->wednesday->from = 'sit';
    $request->requestBody->portSchedule->wednesday->to = 'reprehenderit';
    $request->networkId = 'officiis';
    $request->portScheduleId = 'accusantium';

    $response = $sdk->portSchedules->updateNetworkSwitchPortSchedule($request);

    if ($response->updateNetworkSwitchPortSchedule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
