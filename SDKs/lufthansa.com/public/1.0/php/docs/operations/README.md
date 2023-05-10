# operations

### Available Operations

* [operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet](#operationsflightstatusarrivalsbyairportcodeandfromdatetimeget) - Flight Status at Arrival Airport
* [operationsFlightstatusByFlightNumberAndDateGet](#operationsflightstatusbyflightnumberanddateget) - Flight Status
* [operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet](#operationsflightstatusdeparturesbyairportcodeandfromdatetimeget) - Flight Status at Departure Airport
* [operationsFlightstatusRouteDateByOriginAndDestinationGet](#operationsflightstatusroutedatebyoriginanddestinationget) - Flight Status by Route
* [operationsSchedulesFromDateTimeByOriginAndDestinationGet](#operationsschedulesfromdatetimebyoriginanddestinationget) - Flight Schedules

## operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet

Status of all arrivals at a given airport up to 4 hours from the provided date time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest();
    $request->accept = 'excepturi';
    $request->airportCode = 'nisi';
    $request->fromDateTime = 'recusandae';
    $request->limit = 'temporibus';
    $request->offset = 'ab';

    $requestSecurity = new OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet($request, $requestSecurity);

    if ($response->operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## operationsFlightstatusByFlightNumberAndDateGet

Status of a particular flight (boarding, delayed, etc.).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OperationsFlightstatusByFlightNumberAndDateGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\OperationsFlightstatusByFlightNumberAndDateGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OperationsFlightstatusByFlightNumberAndDateGetRequest();
    $request->accept = 'quis';
    $request->date = 'veritatis';
    $request->flightNumber = 'deserunt';
    $request->limit = 'perferendis';
    $request->offset = 'ipsam';

    $requestSecurity = new OperationsFlightstatusByFlightNumberAndDateGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->operationsFlightstatusByFlightNumberAndDateGet($request, $requestSecurity);

    if ($response->operationsFlightstatusByFlightNumberAndDateGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet

Status of all departures from a given airport up to 4 hours from the provided date time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest();
    $request->accept = 'repellendus';
    $request->airportCode = 'sapiente';
    $request->fromDateTime = 'quo';
    $request->limit = 'odit';
    $request->offset = 'at';

    $requestSecurity = new OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet($request, $requestSecurity);

    if ($response->operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## operationsFlightstatusRouteDateByOriginAndDestinationGet

Status of flights between a given origin and destination on a given date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest();
    $request->accept = 'at';
    $request->date = 'maiores';
    $request->destination = 'molestiae';
    $request->limit = 'quod';
    $request->offset = 'quod';
    $request->origin = 'esse';

    $requestSecurity = new OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->operationsFlightstatusRouteDateByOriginAndDestinationGet($request, $requestSecurity);

    if ($response->operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## operationsSchedulesFromDateTimeByOriginAndDestinationGet

Scheduled flights between given airports on a given date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest();
    $request->accept = 'totam';
    $request->destination = 'porro';
    $request->directFlights = false;
    $request->fromDateTime = 'dolorum';
    $request->limit = 'dicta';
    $request->offset = 'nam';
    $request->origin = 'officia';

    $requestSecurity = new OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->operationsSchedulesFromDateTimeByOriginAndDestinationGet($request, $requestSecurity);

    if ($response->operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
