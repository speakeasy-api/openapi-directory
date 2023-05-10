# calendars

## Overview

Calendar management

### Available Operations

* [deleteCalendarsId](#deletecalendarsid) - Delete a Calendar
* [getCalendars](#getcalendars) - Fetch a list of Calendars
* [postCalendars](#postcalendars) - Create a Calendar
* [putCalendarsId](#putcalendarsid) - Update a Calendar

## deleteCalendarsId

Delete a Calendar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCalendarsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCalendarsIdRequest();
    $request->id = 963663;

    $response = $sdk->calendars->deleteCalendarsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCalendars

Without params, it returns a list of Calendars the user has access to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCalendarsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCalendarsRequest();
    $request->all = false;
    $request->userId = 272656;

    $response = $sdk->calendars->getCalendars($request);

    if ($response->calendars !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCalendars

Create a Calendar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Calendar;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Calendar();
    $request->attributes = [
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->data = 'iusto';
    $request->id = 568045;
    $request->name = 'Mrs. Sophie Smith MD';

    $response = $sdk->calendars->postCalendars($request);

    if ($response->calendar !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCalendarsId

Update a Calendar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCalendarsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Calendar;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCalendarsIdRequest();
    $request->calendar = new Calendar();
    $request->calendar->attributes = [
        'ipsam' => 'repellendus',
    ];
    $request->calendar->data = 'sapiente';
    $request->calendar->id = 778157;
    $request->calendar->name = 'Teri Strosin';
    $request->id = 799159;

    $response = $sdk->calendars->putCalendarsId($request);

    if ($response->calendar !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
