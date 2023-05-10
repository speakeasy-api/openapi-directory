# calendarEvent

## Overview

A calendar event represents an event involving or relevant to a patient which will or has occurred on a specific date or during a specific period of time.

### Available Operations

* [createCalendarEvent](#createcalendarevent) - Create calendar event
* [deleteCalendarEvent](#deletecalendarevent) - Delete a calendar event
* [fetchCalendarEvent](#fetchcalendarevent) - Get a calendar event
* [fetchCalendarEvents](#fetchcalendarevents) - List calendar events
* [updateCalendarEvent](#updatecalendarevent) - Update a calendar event

## createCalendarEvent

Create a calendar event for a patient. Attribute `all_day` must be set to `true` and `end_at` cannot be set for `plan-check-in` event type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventRequestData;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventRequestDataAttributes;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventRequestDataAttributesAttendees;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventRequestDataAttributesAttendeesResponseStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventRequestDataAttributesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventRequestDataRelationships;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventRequestDataRelationshipsOwner;
use \OpenAPI\OpenAPI\Models\Shared\Data;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCalendarEventRequest();
    $request->data = new CreateCalendarEventRequestData();
    $request->data->attributes = new CreateCalendarEventRequestDataAttributes();
    $request->data->attributes->allDay = false;
    $request->data->attributes->attendees = [
        new CreateCalendarEventRequestDataAttributesAttendees(),
        new CreateCalendarEventRequestDataAttributesAttendees(),
    ];
    $request->data->attributes->completedAt = '2017-11-03T06:17:34.652Z';
    $request->data->attributes->completedBy = [
        'quasi' => 'tempora',
        'numquam' => 'explicabo',
        'provident' => 'ipsa',
    ];
    $request->data->attributes->description = 'molestiae';
    $request->data->attributes->endAt = '2017-11-03T08:00:00.000Z';
    $request->data->attributes->location = 'magnam';
    $request->data->attributes->startAt = '2017-11-03T04:00:00.000Z';
    $request->data->attributes->timeZone = 'America/New_York';
    $request->data->attributes->title = 'Ms.';
    $request->data->attributes->type = CreateCalendarEventRequestDataAttributesTypeEnum::REMINDER;
    $request->data->relationships = new CreateCalendarEventRequestDataRelationships();
    $request->data->relationships->owner = new CreateCalendarEventRequestDataRelationshipsOwner();
    $request->data->relationships->owner->data = new Data();
    $request->data->relationships->owner->data->id = '778a7bd4-66d2-48c1-8ab3-cdca4251904e';
    $request->data->relationships->owner->data->type = 'ipsam';
    $request->data->type = TypeEnum::CALENDAR_EVENT;

    $response = $sdk->calendarEvent->createCalendarEvent($request);

    if ($response->createCalendarEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCalendarEvent

Delete a calendar event by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCalendarEventRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCalendarEventRequest();
    $request->id = '23c7e0bc-7178-4e47-96f2-a70c688282aa';

    $response = $sdk->calendarEvent->deleteCalendarEvent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCalendarEvent

Get a calendar event by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCalendarEventRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCalendarEventRequest();
    $request->id = '482562f2-22e9-4817-ae17-cbe61e6b7b95';

    $response = $sdk->calendarEvent->fetchCalendarEvent($request);

    if ($response->fetchCalendarEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCalendarEvents

Get a list of calendar events

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCalendarEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCalendarEventsFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\FetchCalendarEventsIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCalendarEventsRequest();
    $request->filterAttendees = 'distinctio';
    $request->filterCompleted = false;
    $request->filterCompletedAt = 'eligendi';
    $request->filterCreatedAt = 'sit';
    $request->filterEndAt = 'culpa';
    $request->filterGroups = 'tempore';
    $request->filterOrganization = 'adipisci';
    $request->filterPatient = 'cumque';
    $request->filterStartAt = 'consequuntur';
    $request->filterType = FetchCalendarEventsFilterTypeEnum::PLAN_CHECK_IN;
    $request->filterUpdatedAt = 'minus';
    $request->include = FetchCalendarEventsIncludeEnum::OWNER;
    $request->pageCursor = 'quaerat';
    $request->pageLimit = 959167;
    $request->pageNumber = 232865;
    $request->pageSize = 458139;

    $response = $sdk->calendarEvent->fetchCalendarEvents($request);

    if ($response->fetchCalendarEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCalendarEvent

Update a calendar event for a patient. Attribute `all_day` must be true and `end_at` cannot be specified for `plan-check-in` event type. To mark a calendar event as 'completed', set `completed_at` and `completed_by` to desired values.  To mark a completed calendar event as 'not completed', set `completed_at` and `completed_by` to `null`. Attendees can be added or removed, but response status cannot be updated. Use the calendar event response api for response status updates instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCalendarEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCalendarEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCalendarEventRequestData;
use \OpenAPI\OpenAPI\Models\Shared\Attributes;
use \OpenAPI\OpenAPI\Models\Shared\AttributesAttendees;
use \OpenAPI\OpenAPI\Models\Shared\AttributesAttendeesResponseStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttributesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCalendarEventRequestDataRelationships;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCalendarEventRequestDataRelationshipsOwner;
use \OpenAPI\OpenAPI\Models\Shared\Data;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCalendarEventRequest();
    $request->updateCalendarEventRequest = new UpdateCalendarEventRequest();
    $request->updateCalendarEventRequest->data = new UpdateCalendarEventRequestData();
    $request->updateCalendarEventRequest->data->attributes = new Attributes();
    $request->updateCalendarEventRequest->data->attributes->allDay = false;
    $request->updateCalendarEventRequest->data->attributes->attendees = [
        new AttributesAttendees(),
        new AttributesAttendees(),
        new AttributesAttendees(),
    ];
    $request->updateCalendarEventRequest->data->attributes->completedAt = '2017-11-03T06:17:34.652Z';
    $request->updateCalendarEventRequest->data->attributes->completedBy = [
        'a' => 'nulla',
        'quas' => 'esse',
        'quasi' => 'a',
    ];
    $request->updateCalendarEventRequest->data->attributes->description = 'error';
    $request->updateCalendarEventRequest->data->attributes->endAt = '2017-11-03T08:00:00.000Z';
    $request->updateCalendarEventRequest->data->attributes->location = 'sint';
    $request->updateCalendarEventRequest->data->attributes->startAt = '2017-11-03T04:00:00.000Z';
    $request->updateCalendarEventRequest->data->attributes->timeZone = 'America/New_York';
    $request->updateCalendarEventRequest->data->attributes->title = 'Dr.';
    $request->updateCalendarEventRequest->data->attributes->type = AttributesTypeEnum::VIDEO_CALL;
    $request->updateCalendarEventRequest->data->id = '2efd121a-a6f1-4e67-8bdb-04f15756082d';
    $request->updateCalendarEventRequest->data->relationships = new UpdateCalendarEventRequestDataRelationships();
    $request->updateCalendarEventRequest->data->relationships->owner = new UpdateCalendarEventRequestDataRelationshipsOwner();
    $request->updateCalendarEventRequest->data->relationships->owner->data = new Data();
    $request->updateCalendarEventRequest->data->relationships->owner->data->id = '68ea19f1-d170-4513-b9d0-8086a1840394';
    $request->updateCalendarEventRequest->data->relationships->owner->data->type = 'impedit';
    $request->updateCalendarEventRequest->data->type = TypeEnum::CALENDAR_EVENT;
    $request->id = '26071f93-f5f0-4642-9ac7-af515cc413aa';

    $response = $sdk->calendarEvent->updateCalendarEvent($request);

    if ($response->updateCalendarEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
