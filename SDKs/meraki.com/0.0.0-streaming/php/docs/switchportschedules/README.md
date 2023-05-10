# switchPortSchedules

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
    $request->requestBody->name = 'Sean Pacocha';
    $request->requestBody->portSchedule = new CreateNetworkSwitchPortScheduleRequestBodyPortSchedule();
    $request->requestBody->portSchedule->friday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday();
    $request->requestBody->portSchedule->friday->active = false;
    $request->requestBody->portSchedule->friday->from = 'rem';
    $request->requestBody->portSchedule->friday->to = 'aliquam';
    $request->requestBody->portSchedule->monday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday();
    $request->requestBody->portSchedule->monday->active = false;
    $request->requestBody->portSchedule->monday->from = 'ad';
    $request->requestBody->portSchedule->monday->to = 'repellat';
    $request->requestBody->portSchedule->saturday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday();
    $request->requestBody->portSchedule->saturday->active = false;
    $request->requestBody->portSchedule->saturday->from = 'alias';
    $request->requestBody->portSchedule->saturday->to = 'corporis';
    $request->requestBody->portSchedule->sunday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday();
    $request->requestBody->portSchedule->sunday->active = false;
    $request->requestBody->portSchedule->sunday->from = 'perspiciatis';
    $request->requestBody->portSchedule->sunday->to = 'nihil';
    $request->requestBody->portSchedule->thursday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday();
    $request->requestBody->portSchedule->thursday->active = false;
    $request->requestBody->portSchedule->thursday->from = 'mollitia';
    $request->requestBody->portSchedule->thursday->to = 'voluptas';
    $request->requestBody->portSchedule->tuesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday();
    $request->requestBody->portSchedule->tuesday->active = false;
    $request->requestBody->portSchedule->tuesday->from = 'alias';
    $request->requestBody->portSchedule->tuesday->to = 'maiores';
    $request->requestBody->portSchedule->wednesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday();
    $request->requestBody->portSchedule->wednesday->active = false;
    $request->requestBody->portSchedule->wednesday->from = 'reiciendis';
    $request->requestBody->portSchedule->wednesday->to = 'dolores';
    $request->networkId = 'id';

    $response = $sdk->switchPortSchedules->createNetworkSwitchPortSchedule($request);

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
    $request->networkId = 'minima';
    $request->portScheduleId = 'dolore';

    $response = $sdk->switchPortSchedules->deleteNetworkSwitchPortSchedule($request);

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
    $request->networkId = 'dolorum';

    $response = $sdk->switchPortSchedules->getNetworkSwitchPortSchedules($request);

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
    $request->requestBody->name = 'Amy Walsh';
    $request->requestBody->portSchedule = new UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule();
    $request->requestBody->portSchedule->friday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday();
    $request->requestBody->portSchedule->friday->active = false;
    $request->requestBody->portSchedule->friday->from = 'molestiae';
    $request->requestBody->portSchedule->friday->to = 'ex';
    $request->requestBody->portSchedule->monday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday();
    $request->requestBody->portSchedule->monday->active = false;
    $request->requestBody->portSchedule->monday->from = 'ut';
    $request->requestBody->portSchedule->monday->to = 'culpa';
    $request->requestBody->portSchedule->saturday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday();
    $request->requestBody->portSchedule->saturday->active = false;
    $request->requestBody->portSchedule->saturday->from = 'adipisci';
    $request->requestBody->portSchedule->saturday->to = 'debitis';
    $request->requestBody->portSchedule->sunday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday();
    $request->requestBody->portSchedule->sunday->active = false;
    $request->requestBody->portSchedule->sunday->from = 'laudantium';
    $request->requestBody->portSchedule->sunday->to = 'eum';
    $request->requestBody->portSchedule->thursday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday();
    $request->requestBody->portSchedule->thursday->active = false;
    $request->requestBody->portSchedule->thursday->from = 'nemo';
    $request->requestBody->portSchedule->thursday->to = 'recusandae';
    $request->requestBody->portSchedule->tuesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday();
    $request->requestBody->portSchedule->tuesday->active = false;
    $request->requestBody->portSchedule->tuesday->from = 'esse';
    $request->requestBody->portSchedule->tuesday->to = 'provident';
    $request->requestBody->portSchedule->wednesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday();
    $request->requestBody->portSchedule->wednesday->active = false;
    $request->requestBody->portSchedule->wednesday->from = 'quis';
    $request->requestBody->portSchedule->wednesday->to = 'eum';
    $request->networkId = 'reiciendis';
    $request->portScheduleId = 'provident';

    $response = $sdk->switchPortSchedules->updateNetworkSwitchPortSchedule($request);

    if ($response->updateNetworkSwitchPortSchedule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
