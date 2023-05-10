# calendarList

### Available Operations

* [calendarCalendarListDelete](#calendarcalendarlistdelete) - Removes a calendar from the user's calendar list.
* [calendarCalendarListGet](#calendarcalendarlistget) - Returns a calendar from the user's calendar list.
* [calendarCalendarListInsert](#calendarcalendarlistinsert) - Inserts an existing calendar into the user's calendar list.
* [calendarCalendarListList](#calendarcalendarlistlist) - Returns the calendars on the user's calendar list.
* [calendarCalendarListPatch](#calendarcalendarlistpatch) - Updates an existing calendar on the user's calendar list. This method supports patch semantics.
* [calendarCalendarListUpdate](#calendarcalendarlistupdate) - Updates an existing calendar on the user's calendar list.
* [calendarCalendarListWatch](#calendarcalendarlistwatch) - Watch for changes to CalendarList resources.

## calendarCalendarListDelete

Removes a calendar from the user's calendar list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarListDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->userIp = 'dicta';

    $requestSecurity = new CalendarCalendarListDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendarList->calendarCalendarListDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarListGet

Returns a calendar from the user's calendar list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarListGetRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'magnam';
    $request->fields = 'cumque';
    $request->key = 'facere';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->userIp = 'laborum';

    $requestSecurity = new CalendarCalendarListGetSecurity();
    $requestSecurity->option1 = new CalendarCalendarListGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendarList->calendarCalendarListGet($request, $requestSecurity);

    if ($response->calendarListEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarListInsert

Inserts an existing calendar into the user's calendar list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\CalendarListEntry;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventReminder;
use \OpenAPI\OpenAPI\Models\Shared\CalendarListEntryNotificationSettings;
use \OpenAPI\OpenAPI\Models\Shared\CalendarNotification;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarListInsertRequest();
    $request->calendarListEntry = new CalendarListEntry();
    $request->calendarListEntry->accessRole = 'accusamus';
    $request->calendarListEntry->backgroundColor = 'non';
    $request->calendarListEntry->colorId = 'occaecati';
    $request->calendarListEntry->conferenceProperties = new ConferenceProperties();
    $request->calendarListEntry->conferenceProperties->allowedConferenceSolutionTypes = [
        'accusamus',
        'delectus',
    ];
    $request->calendarListEntry->defaultReminders = [
        new EventReminder(),
        new EventReminder(),
        new EventReminder(),
    ];
    $request->calendarListEntry->deleted = false;
    $request->calendarListEntry->description = 'provident';
    $request->calendarListEntry->etag = 'nam';
    $request->calendarListEntry->foregroundColor = 'id';
    $request->calendarListEntry->hidden = false;
    $request->calendarListEntry->id = '88f3a669-9707-44ba-8469-b6e214195989';
    $request->calendarListEntry->kind = 'accusantium';
    $request->calendarListEntry->location = 'mollitia';
    $request->calendarListEntry->notificationSettings = new CalendarListEntryNotificationSettings();
    $request->calendarListEntry->notificationSettings->notifications = [
        new CalendarNotification(),
        new CalendarNotification(),
        new CalendarNotification(),
        new CalendarNotification(),
    ];
    $request->calendarListEntry->primary = false;
    $request->calendarListEntry->selected = false;
    $request->calendarListEntry->summary = 'mollitia';
    $request->calendarListEntry->summaryOverride = 'ad';
    $request->calendarListEntry->timeZone = 'eum';
    $request->alt = AltEnum::JSON;
    $request->colorRgbFormat = false;
    $request->fields = 'dolor';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->userIp = 'quasi';

    $requestSecurity = new CalendarCalendarListInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendarList->calendarCalendarListInsert($request, $requestSecurity);

    if ($response->calendarListEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarListList

Returns the calendars on the user's calendar list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListListMinAccessRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarListListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->maxResults = 891924;
    $request->minAccessRole = CalendarCalendarListListMinAccessRoleEnum::OWNER;
    $request->oauthToken = 'maxime';
    $request->pageToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->showDeleted = false;
    $request->showHidden = false;
    $request->syncToken = 'in';
    $request->userIp = 'architecto';

    $requestSecurity = new CalendarCalendarListListSecurity();
    $requestSecurity->option1 = new CalendarCalendarListListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendarList->calendarCalendarListList($request, $requestSecurity);

    if ($response->calendarList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarListPatch

Updates an existing calendar on the user's calendar list. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CalendarListEntry;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventReminder;
use \OpenAPI\OpenAPI\Models\Shared\CalendarListEntryNotificationSettings;
use \OpenAPI\OpenAPI\Models\Shared\CalendarNotification;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarListPatchRequest();
    $request->calendarListEntry = new CalendarListEntry();
    $request->calendarListEntry->accessRole = 'architecto';
    $request->calendarListEntry->backgroundColor = 'repudiandae';
    $request->calendarListEntry->colorId = 'ullam';
    $request->calendarListEntry->conferenceProperties = new ConferenceProperties();
    $request->calendarListEntry->conferenceProperties->allowedConferenceSolutionTypes = [
        'nihil',
        'repellat',
        'quibusdam',
    ];
    $request->calendarListEntry->defaultReminders = [
        new EventReminder(),
    ];
    $request->calendarListEntry->deleted = false;
    $request->calendarListEntry->description = 'saepe';
    $request->calendarListEntry->etag = 'pariatur';
    $request->calendarListEntry->foregroundColor = 'accusantium';
    $request->calendarListEntry->hidden = false;
    $request->calendarListEntry->id = '28921cdd-c692-4601-bb57-6b0d5f0d30c5';
    $request->calendarListEntry->kind = 'hic';
    $request->calendarListEntry->location = 'libero';
    $request->calendarListEntry->notificationSettings = new CalendarListEntryNotificationSettings();
    $request->calendarListEntry->notificationSettings->notifications = [
        new CalendarNotification(),
        new CalendarNotification(),
        new CalendarNotification(),
    ];
    $request->calendarListEntry->primary = false;
    $request->calendarListEntry->selected = false;
    $request->calendarListEntry->summary = 'dolores';
    $request->calendarListEntry->summaryOverride = 'quis';
    $request->calendarListEntry->timeZone = 'totam';
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'dignissimos';
    $request->colorRgbFormat = false;
    $request->fields = 'eaque';
    $request->key = 'quis';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->userIp = 'perferendis';

    $requestSecurity = new CalendarCalendarListPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendarList->calendarCalendarListPatch($request, $requestSecurity);

    if ($response->calendarListEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarListUpdate

Updates an existing calendar on the user's calendar list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CalendarListEntry;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventReminder;
use \OpenAPI\OpenAPI\Models\Shared\CalendarListEntryNotificationSettings;
use \OpenAPI\OpenAPI\Models\Shared\CalendarNotification;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarListUpdateRequest();
    $request->calendarListEntry = new CalendarListEntry();
    $request->calendarListEntry->accessRole = 'dolores';
    $request->calendarListEntry->backgroundColor = 'minus';
    $request->calendarListEntry->colorId = 'quam';
    $request->calendarListEntry->conferenceProperties = new ConferenceProperties();
    $request->calendarListEntry->conferenceProperties->allowedConferenceSolutionTypes = [
        'vero',
    ];
    $request->calendarListEntry->defaultReminders = [
        new EventReminder(),
        new EventReminder(),
    ];
    $request->calendarListEntry->deleted = false;
    $request->calendarListEntry->description = 'hic';
    $request->calendarListEntry->etag = 'recusandae';
    $request->calendarListEntry->foregroundColor = 'omnis';
    $request->calendarListEntry->hidden = false;
    $request->calendarListEntry->id = 'b90c2890-9b3f-4e49-a8d9-cbf48633323f';
    $request->calendarListEntry->kind = 'excepturi';
    $request->calendarListEntry->location = 'cum';
    $request->calendarListEntry->notificationSettings = new CalendarListEntryNotificationSettings();
    $request->calendarListEntry->notificationSettings->notifications = [
        new CalendarNotification(),
        new CalendarNotification(),
    ];
    $request->calendarListEntry->primary = false;
    $request->calendarListEntry->selected = false;
    $request->calendarListEntry->summary = 'dignissimos';
    $request->calendarListEntry->summaryOverride = 'reiciendis';
    $request->calendarListEntry->timeZone = 'amet';
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'dolorum';
    $request->colorRgbFormat = false;
    $request->fields = 'numquam';
    $request->key = 'veritatis';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->userIp = 'iure';

    $requestSecurity = new CalendarCalendarListUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendarList->calendarCalendarListUpdate($request, $requestSecurity);

    if ($response->calendarListEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarCalendarListWatch

Watch for changes to CalendarList resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListWatchMinAccessRoleEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListWatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListWatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarCalendarListWatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarCalendarListWatchRequest();
    $request->channel = new Channel();
    $request->channel->address = '3869 Liam Dam';
    $request->channel->expiration = 'atque';
    $request->channel->id = '0d1ba77a-89eb-4f73-bae4-203ce5e6a95d';
    $request->channel->kind = 'totam';
    $request->channel->params = [
        'alias' => 'at',
        'quaerat' => 'tempora',
        'vel' => 'quod',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'officiis';
    $request->channel->resourceUri = 'qui';
    $request->channel->token = 'dolorum';
    $request->channel->type = 'a';
    $request->alt = AltEnum::JSON;
    $request->fields = 'esse';
    $request->key = 'harum';
    $request->maxResults = 483409;
    $request->minAccessRole = CalendarCalendarListWatchMinAccessRoleEnum::FREE_BUSY_READER;
    $request->oauthToken = 'quisquam';
    $request->pageToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->showDeleted = false;
    $request->showHidden = false;
    $request->syncToken = 'tempore';
    $request->userIp = 'accusamus';

    $requestSecurity = new CalendarCalendarListWatchSecurity();
    $requestSecurity->option1 = new CalendarCalendarListWatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->calendarList->calendarCalendarListWatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
