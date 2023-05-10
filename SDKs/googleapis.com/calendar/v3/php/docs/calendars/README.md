# calendars

### Available Operations

* [calendarCalendarsClear](#calendarcalendarsclear) - Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
* [calendarCalendarsDelete](#calendarcalendarsdelete) - Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
* [calendarCalendarsGet](#calendarcalendarsget) - Returns metadata for a calendar.
* [calendarCalendarsInsert](#calendarcalendarsinsert) - Creates a secondary calendar.
* [calendarCalendarsPatch](#calendarcalendarspatch) - Updates metadata for a calendar. This method supports patch semantics.
* [calendarCalendarsUpdate](#calendarcalendarsupdate) - Updates metadata for a calendar.

## calendarCalendarsClear

Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsClearRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsClearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarsClearRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'numquam';
    $request->fields = 'enim';
    $request->key = 'dolorem';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->userIp = 'nihil';

    $requestSecurity = new CalendarCalendarsClearSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendars->calendarCalendarsClear($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarsDelete

Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'sit';
    $request->fields = 'expedita';
    $request->key = 'neque';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->userIp = 'libero';

    $requestSecurity = new CalendarCalendarsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendars->calendarCalendarsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarsGet

Returns metadata for a calendar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'voluptas';
    $request->fields = 'deserunt';
    $request->key = 'quam';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->userIp = 'qui';

    $requestSecurity = new CalendarCalendarsGetSecurity();
    $requestSecurity->option1 = new CalendarCalendarsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendars->calendarCalendarsGet($request, $requestSecurity);

    if ($response->calendar !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarsInsert

Creates a secondary calendar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Calendar;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarsInsertRequest();
    $request->calendar = new Calendar();
    $request->calendar->conferenceProperties = new ConferenceProperties();
    $request->calendar->conferenceProperties->allowedConferenceSolutionTypes = [
        'maxime',
        'pariatur',
        'soluta',
    ];
    $request->calendar->description = 'dicta';
    $request->calendar->etag = 'laborum';
    $request->calendar->id = '8422bb67-9d23-4227-95bf-0cbb1e31b8b9';
    $request->calendar->kind = 'aperiam';
    $request->calendar->location = 'delectus';
    $request->calendar->summary = 'dolorem';
    $request->calendar->timeZone = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->fields = 'labore';
    $request->key = 'adipisci';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->userIp = 'quae';

    $requestSecurity = new CalendarCalendarsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendars->calendarCalendarsInsert($request, $requestSecurity);

    if ($response->calendar !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarsPatch

Updates metadata for a calendar. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Calendar;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarsPatchRequest();
    $request->calendar = new Calendar();
    $request->calendar->conferenceProperties = new ConferenceProperties();
    $request->calendar->conferenceProperties->allowedConferenceSolutionTypes = [
        'quas',
    ];
    $request->calendar->description = 'itaque';
    $request->calendar->etag = 'consequatur';
    $request->calendar->id = 'adcf4b92-1879-4fce-953f-73ef7fbc7abd';
    $request->calendar->kind = 'ducimus';
    $request->calendar->location = 'dolore';
    $request->calendar->summary = 'quibusdam';
    $request->calendar->timeZone = 'illum';
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'sequi';
    $request->fields = 'natus';
    $request->key = 'impedit';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->userIp = 'exercitationem';

    $requestSecurity = new CalendarCalendarsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendars->calendarCalendarsPatch($request, $requestSecurity);

    if ($response->calendar !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarsUpdate

Updates metadata for a calendar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Calendar;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceProperties;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarsUpdateRequest();
    $request->calendar = new Calendar();
    $request->calendar->conferenceProperties = new ConferenceProperties();
    $request->calendar->conferenceProperties->allowedConferenceSolutionTypes = [
        'fugit',
        'porro',
        'maiores',
        'doloribus',
    ];
    $request->calendar->description = 'iusto';
    $request->calendar->etag = 'eligendi';
    $request->calendar->id = '70a45626-d436-4813-b16d-9f5fce6c5561';
    $request->calendar->kind = 'magnam';
    $request->calendar->location = 'ea';
    $request->calendar->summary = 'quo';
    $request->calendar->timeZone = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'recusandae';
    $request->fields = 'aspernatur';
    $request->key = 'minima';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->userIp = 'libero';

    $requestSecurity = new CalendarCalendarsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendars->calendarCalendarsUpdate($request, $requestSecurity);

    if ($response->calendar !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
