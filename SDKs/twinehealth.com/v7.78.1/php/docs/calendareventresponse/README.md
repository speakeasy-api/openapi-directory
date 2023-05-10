# calendarEventResponse

## Overview

A calendar event response indicates the attendee's response to a calendar event.  Only `POST` for creation is allowed as the responses are updated into the corresponding calendar events.

### Available Operations

* [createCalendarEventResponse](#createcalendareventresponse) - Create calendar event response

## createCalendarEventResponse

Create a calendar event response for an attendee of a calendar event, the attendee can be a coach or patient.  Calendar event responses cannot be fetched, updated nor deleted.  Use calendar event api to fetch the response status for attendees.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventResponseRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventResponseRequestData;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventResponseRequestDataAttributes;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventResponseRequestDataAttributesResponseStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventResponseRequestDataRelationships;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventResponseRequestDataRelationshipsCalendarEvent;
use \OpenAPI\OpenAPI\Models\Shared\Data;
use \OpenAPI\OpenAPI\Models\Shared\CreateCalendarEventResponseRequestDataRelationshipsUser;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCalendarEventResponseRequest();
    $request->data = new CreateCalendarEventResponseRequestData();
    $request->data->attributes = new CreateCalendarEventResponseRequestDataAttributes();
    $request->data->attributes->attendee = [
        'velit' => 'culpa',
        'est' => 'recusandae',
    ];
    $request->data->attributes->responseStatus = CreateCalendarEventResponseRequestDataAttributesResponseStatusEnum::DECLINED;
    $request->data->relationships = new CreateCalendarEventResponseRequestDataRelationships();
    $request->data->relationships->calendarEvent = new CreateCalendarEventResponseRequestDataRelationshipsCalendarEvent();
    $request->data->relationships->calendarEvent->data = new Data();
    $request->data->relationships->calendarEvent->data->id = 'd67864db-b675-4fd5-a60b-375ed4f6fbee';
    $request->data->relationships->calendarEvent->data->type = 'dolore';
    $request->data->relationships->user = new CreateCalendarEventResponseRequestDataRelationshipsUser();
    $request->data->relationships->user->data = new Data();
    $request->data->relationships->user->data->id = '1f33317f-e35b-460e-b1ea-426555ba3c28';
    $request->data->relationships->user->data->type = 'in';
    $request->data->type = TypeEnum1::CALENDAR_EVENT_RESPONSE;

    $response = $sdk->calendarEventResponse->createCalendarEventResponse($request);

    if ($response->createCalendarEventResponseRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
