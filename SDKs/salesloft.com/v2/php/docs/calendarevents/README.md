# calendarEvents

## Overview

Calendar Events

### Available Operations

* [getV2CalendarEvents](#getv2calendarevents) - List calendar events
* [postV2CalendarEventsUpsert](#postv2calendareventsupsert) - Upsert a calendar event

## getV2CalendarEvents

Returns all calendar events, paginated and filtered by the date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CalendarEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CalendarEventsRequest();
    $request->calendarId = 'similique';
    $request->endTime = 'tempora';
    $request->includePagingCounts = false;
    $request->page = 132815;
    $request->perPage = 379057;
    $request->sortBy = 'voluptas';
    $request->sortDirection = 'voluptas';
    $request->startTime = 'minima';
    $request->userGuid = 'nobis';

    $response = $sdk->calendarEvents->getV2CalendarEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2CalendarEventsUpsert

  Upserts a calendar event object.
  Upsert key is a combination of `id` and `i_cal_uid` scoped to the given `calendar_id`.
  Bulk operations:
  This endpoint is used for bulk operations, see https://developers.salesloft.com/bulk.html for integration instructions.
  Use `calendar/events/upsert` as an event type, and this spec as a data spec.
  This endpoint should be used directly for the time sensitive calendar event updates.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2CalendarEventsUpsertRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2CalendarEventsUpsertRequestBody();
    $request->allDay = false;
    $request->attendees = [
        'adipisci' => 'minus',
        'dolores' => 'blanditiis',
        'in' => 'dolore',
    ];
    $request->calendarId = 'aliquam';
    $request->canceledAt = 'officiis';
    $request->description = 'temporibus';
    $request->endTime = DateTime::createFromFormat('Y-m-d', '2022-10-06');
    $request->iCalUid = 'cum';
    $request->id = '88f3a8d8-f5c0-4b2f-afb7-b194a276b269';
    $request->location = 'architecto';
    $request->organizer = 'suscipit';
    $request->recurring = false;
    $request->startTime = DateTime::createFromFormat('Y-m-d', '2020-04-25');
    $request->status = 'illo';
    $request->title = 'Dr.';
    $request->updatedAt = 'perferendis';

    $response = $sdk->calendarEvents->postV2CalendarEventsUpsert($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
