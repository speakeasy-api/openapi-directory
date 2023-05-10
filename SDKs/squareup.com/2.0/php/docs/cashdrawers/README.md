# cashDrawers

### Available Operations

* [listCashDrawerShiftEvents](#listcashdrawershiftevents) - ListCashDrawerShiftEvents
* [listCashDrawerShifts](#listcashdrawershifts) - ListCashDrawerShifts
* [retrieveCashDrawerShift](#retrievecashdrawershift) - RetrieveCashDrawerShift

## listCashDrawerShiftEvents

Provides a paginated list of events for a single cash drawer shift.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCashDrawerShiftEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCashDrawerShiftEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCashDrawerShiftEventsRequest();
    $request->cursor = 'veritatis';
    $request->limit = 929297;
    $request->locationId = 'incidunt';
    $request->shiftId = 'enim';

    $requestSecurity = new ListCashDrawerShiftEventsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cashDrawers->listCashDrawerShiftEvents($request, $requestSecurity);

    if ($response->listCashDrawerShiftEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCashDrawerShifts

Provides the details for all of the cash drawer shifts for a location
in a date range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCashDrawerShiftsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCashDrawerShiftsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCashDrawerShiftsRequest();
    $request->beginTime = 'consequatur';
    $request->cursor = 'est';
    $request->endTime = 'quibusdam';
    $request->limit = 131797;
    $request->locationId = 'deserunt';
    $request->sortOrder = 'distinctio';

    $requestSecurity = new ListCashDrawerShiftsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cashDrawers->listCashDrawerShifts($request, $requestSecurity);

    if ($response->listCashDrawerShiftsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveCashDrawerShift

Provides the summary details for a single cash drawer shift. See
[ListCashDrawerShiftEvents](https://developer.squareup.com/reference/square_2021-08-18/cash-drawers-api/list-cash-drawer-shift-events) for a list of cash drawer shift events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCashDrawerShiftRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCashDrawerShiftSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveCashDrawerShiftRequest();
    $request->locationId = 'quibusdam';
    $request->shiftId = 'labore';

    $requestSecurity = new RetrieveCashDrawerShiftSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cashDrawers->retrieveCashDrawerShift($request, $requestSecurity);

    if ($response->retrieveCashDrawerShiftResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
