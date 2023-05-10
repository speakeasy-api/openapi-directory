# SDK

### Available Operations

* [driverDetails](#driverdetails) - Driver Details
* [driverRaceProjectionsEntryList](#driverraceprojectionsentrylist) - Driver Race Projections (Entry List)
* [drivers](#drivers) - Drivers
* [raceResults](#raceresults) - Race Results
* [racesSchedule](#racesschedule) - Races / Schedule
* [series](#series) - Series

## driverDetails

Driver Details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DriverDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DriverDetailsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriverDetailsRequest();
    $request->driverid = 'distinctio';
    $request->format = DriverDetailsFormatEnum::JSON;

    $response = $sdk->sdk->driverDetails($request);

    if ($response->driver !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## driverRaceProjectionsEntryList

Driver Race Projections (Entry List)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DriverRaceProjectionsEntryListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DriverRaceProjectionsEntryListFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriverRaceProjectionsEntryListRequest();
    $request->format = DriverRaceProjectionsEntryListFormatEnum::JSON;
    $request->raceid = 'nulla';

    $response = $sdk->sdk->driverRaceProjectionsEntryList($request);

    if ($response->driverRaceProjections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## drivers

Drivers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DriversRequest;
use \OpenAPI\OpenAPI\Models\Operations\DriversFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DriversRequest();
    $request->format = DriversFormatEnum::JSON;

    $response = $sdk->sdk->drivers($request);

    if ($response->drivers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## raceResults

Race Results

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RaceResultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RaceResultsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RaceResultsRequest();
    $request->format = RaceResultsFormatEnum::JSON;
    $request->raceid = 'vel';

    $response = $sdk->sdk->raceResults($request);

    if ($response->raceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## racesSchedule

Races / Schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RacesScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\RacesScheduleFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RacesScheduleRequest();
    $request->format = RacesScheduleFormatEnum::JSON;
    $request->season = 'deserunt';

    $response = $sdk->sdk->racesSchedule($request);

    if ($response->races !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## series

Series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SeriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SeriesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SeriesRequest();
    $request->format = SeriesFormatEnum::XML;

    $response = $sdk->sdk->series($request);

    if ($response->series !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
