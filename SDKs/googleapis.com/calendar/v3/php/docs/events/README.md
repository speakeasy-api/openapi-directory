# events

### Available Operations

* [calendarEventsDelete](#calendareventsdelete) - Deletes an event.
* [calendarEventsGet](#calendareventsget) - Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
* [calendarEventsImport](#calendareventsimport) - Imports an event. This operation is used to add a private copy of an existing event to a calendar.
* [calendarEventsInsert](#calendareventsinsert) - Creates an event.
* [calendarEventsInstances](#calendareventsinstances) - Returns instances of the specified recurring event.
* [calendarEventsList](#calendareventslist) - Returns events on the specified calendar.
* [calendarEventsMove](#calendareventsmove) - Moves an event to another calendar, i.e. changes an event's organizer.
* [calendarEventsPatch](#calendareventspatch) - Updates an event. This method supports patch semantics.
* [calendarEventsQuickAdd](#calendareventsquickadd) - Creates an event based on a simple text string.
* [calendarEventsUpdate](#calendareventsupdate) - Updates an event.
* [calendarEventsWatch](#calendareventswatch) - Watch for changes to Events resources.

## calendarEventsDelete

Deletes an event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsDeleteSendUpdatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'sequi';
    $request->eventId = 'quo';
    $request->fields = 'esse';
    $request->key = 'recusandae';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->sendNotifications = false;
    $request->sendUpdates = CalendarEventsDeleteSendUpdatesEnum::NONE;
    $request->userIp = 'dignissimos';

    $requestSecurity = new CalendarEventsDeleteSecurity();
    $requestSecurity->option1 = new CalendarEventsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarEventsGet

Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->alwaysIncludeEmail = false;
    $request->calendarId = 'inventore';
    $request->eventId = 'nihil';
    $request->fields = 'totam';
    $request->key = 'accusamus';
    $request->maxAttendees = 306810;
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->timeZone = 'commodi';
    $request->userIp = 'sapiente';

    $requestSecurity = new CalendarEventsGetSecurity();
    $requestSecurity->option1 = new CalendarEventsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsGet($request, $requestSecurity);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarEventsImport

Imports an event. This operation is used to add a private copy of an existing event to a calendar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\EventAttachment;
use \OpenAPI\OpenAPI\Models\Shared\EventAttendee;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceData;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceSolution;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceSolutionKey;
use \OpenAPI\OpenAPI\Models\Shared\CreateConferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceRequestStatus;
use \OpenAPI\OpenAPI\Models\Shared\EntryPoint;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceParametersAddOnParameters;
use \OpenAPI\OpenAPI\Models\Shared\EventCreator;
use \OpenAPI\OpenAPI\Models\Shared\EventDateTime;
use \OpenAPI\OpenAPI\Models\Shared\EventExtendedProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventGadget;
use \OpenAPI\OpenAPI\Models\Shared\EventOrganizer;
use \OpenAPI\OpenAPI\Models\Shared\EventReminders;
use \OpenAPI\OpenAPI\Models\Shared\EventReminder;
use \OpenAPI\OpenAPI\Models\Shared\EventSource;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationPropertiesCustomLocation;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationPropertiesOfficeLocation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsImportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsImportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsImportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsImportRequest();
    $request->event = new Event();
    $request->event->anyoneCanAddSelf = false;
    $request->event->attachments = [
        new EventAttachment(),
    ];
    $request->event->attendees = [
        new EventAttendee(),
        new EventAttendee(),
        new EventAttendee(),
    ];
    $request->event->attendeesOmitted = false;
    $request->event->colorId = 'molestiae';
    $request->event->conferenceData = new ConferenceData();
    $request->event->conferenceData->conferenceId = 'accusantium';
    $request->event->conferenceData->conferenceSolution = new ConferenceSolution();
    $request->event->conferenceData->conferenceSolution->iconUri = 'porro';
    $request->event->conferenceData->conferenceSolution->key = new ConferenceSolutionKey();
    $request->event->conferenceData->conferenceSolution->key->type = 'eum';
    $request->event->conferenceData->conferenceSolution->name = 'Dwayne Cronin';
    $request->event->conferenceData->createRequest = new CreateConferenceRequest();
    $request->event->conferenceData->createRequest->conferenceSolutionKey = new ConferenceSolutionKey();
    $request->event->conferenceData->createRequest->conferenceSolutionKey->type = 'fuga';
    $request->event->conferenceData->createRequest->requestId = 'mollitia';
    $request->event->conferenceData->createRequest->status = new ConferenceRequestStatus();
    $request->event->conferenceData->createRequest->status->statusCode = 'incidunt';
    $request->event->conferenceData->entryPoints = [
        new EntryPoint(),
        new EntryPoint(),
        new EntryPoint(),
    ];
    $request->event->conferenceData->notes = 'explicabo';
    $request->event->conferenceData->parameters = new ConferenceParameters();
    $request->event->conferenceData->parameters->addOnParameters = new ConferenceParametersAddOnParameters();
    $request->event->conferenceData->parameters->addOnParameters->parameters = [
        'nisi' => 'fugit',
        'sapiente' => 'consequuntur',
    ];
    $request->event->conferenceData->signature = 'ratione';
    $request->event->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-05T01:06:02.008Z');
    $request->event->creator = new EventCreator();
    $request->event->creator->displayName = 'occaecati';
    $request->event->creator->email = 'Audrey_Koch8@yahoo.com';
    $request->event->creator->id = '7cbe61e6-b7b9-45bc-8ab3-c20c4f3789fd';
    $request->event->creator->self = false;
    $request->event->description = 'quas';
    $request->event->end = new EventDateTime();
    $request->event->end->date = DateTime::createFromFormat('Y-m-d', '2022-11-26');
    $request->event->end->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-19T06:17:20.977Z');
    $request->event->end->timeZone = 'sint';
    $request->event->endTimeUnspecified = false;
    $request->event->etag = 'pariatur';
    $request->event->eventType = 'possimus';
    $request->event->extendedProperties = new EventExtendedProperties();
    $request->event->extendedProperties->private = [
        'eveniet' => 'asperiores',
    ];
    $request->event->extendedProperties->shared = [
        'veritatis' => 'consequuntur',
        'quasi' => 'similique',
        'culpa' => 'aliquid',
        'tenetur' => 'quae',
    ];
    $request->event->gadget = new EventGadget();
    $request->event->gadget->display = 'earum';
    $request->event->gadget->height = 424032;
    $request->event->gadget->iconLink = 'in';
    $request->event->gadget->link = 'eius';
    $request->event->gadget->preferences = [
        'illum' => 'soluta',
        'accusantium' => 'aliquam',
        'sapiente' => 'dicta',
    ];
    $request->event->gadget->title = 'Mrs.';
    $request->event->gadget->type = 'reprehenderit';
    $request->event->gadget->width = 356707;
    $request->event->guestsCanInviteOthers = false;
    $request->event->guestsCanModify = false;
    $request->event->guestsCanSeeOtherGuests = false;
    $request->event->hangoutLink = 'nisi';
    $request->event->htmlLink = 'aut';
    $request->event->iCalUID = 'voluptatum';
    $request->event->id = '2d68ea19-f1d1-4705-9339-d08086a18403';
    $request->event->kind = 'occaecati';
    $request->event->location = 'numquam';
    $request->event->locked = false;
    $request->event->organizer = new EventOrganizer();
    $request->event->organizer->displayName = 'impedit';
    $request->event->organizer->email = 'Garrison.Anderson@gmail.com';
    $request->event->organizer->id = 'f93f5f06-42da-4c7a-b515-cc413aa63aae';
    $request->event->organizer->self = false;
    $request->event->originalStartTime = new EventDateTime();
    $request->event->originalStartTime->date = DateTime::createFromFormat('Y-m-d', '2021-04-17');
    $request->event->originalStartTime->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-03T08:20:26.765Z');
    $request->event->originalStartTime->timeZone = 'quos';
    $request->event->privateCopy = false;
    $request->event->recurrence = [
        'labore',
        'possimus',
    ];
    $request->event->recurringEventId = 'facilis';
    $request->event->reminders = new EventReminders();
    $request->event->reminders->overrides = [
        new EventReminder(),
        new EventReminder(),
        new EventReminder(),
    ];
    $request->event->reminders->useDefault = false;
    $request->event->sequence = 414857;
    $request->event->source = new EventSource();
    $request->event->source->title = 'Ms.';
    $request->event->source->url = 'corporis';
    $request->event->start = new EventDateTime();
    $request->event->start->date = DateTime::createFromFormat('Y-m-d', '2020-07-07');
    $request->event->start->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-28T09:17:23.255Z');
    $request->event->start->timeZone = 'aliquid';
    $request->event->status = 'aperiam';
    $request->event->summary = 'cum';
    $request->event->transparency = 'consectetur';
    $request->event->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-26T18:58:12.703Z');
    $request->event->visibility = 'earum';
    $request->event->workingLocationProperties = new EventWorkingLocationProperties();
    $request->event->workingLocationProperties->customLocation = new EventWorkingLocationPropertiesCustomLocation();
    $request->event->workingLocationProperties->customLocation->label = 'facere';
    $request->event->workingLocationProperties->homeOffice = 'numquam';
    $request->event->workingLocationProperties->officeLocation = new EventWorkingLocationPropertiesOfficeLocation();
    $request->event->workingLocationProperties->officeLocation->buildingId = 'doloribus';
    $request->event->workingLocationProperties->officeLocation->deskId = 'suscipit';
    $request->event->workingLocationProperties->officeLocation->floorId = 'reiciendis';
    $request->event->workingLocationProperties->officeLocation->floorSectionId = 'quidem';
    $request->event->workingLocationProperties->officeLocation->label = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'necessitatibus';
    $request->conferenceDataVersion = 296556;
    $request->fields = 'sunt';
    $request->key = 'asperiores';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->supportsAttachments = false;
    $request->userIp = 'amet';

    $requestSecurity = new CalendarEventsImportSecurity();
    $requestSecurity->option1 = new CalendarEventsImportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsImport($request, $requestSecurity);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarEventsInsert

Creates an event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\EventAttachment;
use \OpenAPI\OpenAPI\Models\Shared\EventAttendee;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceData;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceSolution;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceSolutionKey;
use \OpenAPI\OpenAPI\Models\Shared\CreateConferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceRequestStatus;
use \OpenAPI\OpenAPI\Models\Shared\EntryPoint;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceParametersAddOnParameters;
use \OpenAPI\OpenAPI\Models\Shared\EventCreator;
use \OpenAPI\OpenAPI\Models\Shared\EventDateTime;
use \OpenAPI\OpenAPI\Models\Shared\EventExtendedProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventGadget;
use \OpenAPI\OpenAPI\Models\Shared\EventOrganizer;
use \OpenAPI\OpenAPI\Models\Shared\EventReminders;
use \OpenAPI\OpenAPI\Models\Shared\EventReminder;
use \OpenAPI\OpenAPI\Models\Shared\EventSource;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationPropertiesCustomLocation;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationPropertiesOfficeLocation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInsertSendUpdatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsInsertRequest();
    $request->event = new Event();
    $request->event->anyoneCanAddSelf = false;
    $request->event->attachments = [
        new EventAttachment(),
    ];
    $request->event->attendees = [
        new EventAttendee(),
        new EventAttendee(),
    ];
    $request->event->attendeesOmitted = false;
    $request->event->colorId = 'a';
    $request->event->conferenceData = new ConferenceData();
    $request->event->conferenceData->conferenceId = 'debitis';
    $request->event->conferenceData->conferenceSolution = new ConferenceSolution();
    $request->event->conferenceData->conferenceSolution->iconUri = 'consectetur';
    $request->event->conferenceData->conferenceSolution->key = new ConferenceSolutionKey();
    $request->event->conferenceData->conferenceSolution->key->type = 'corporis';
    $request->event->conferenceData->conferenceSolution->name = 'Rick Beer';
    $request->event->conferenceData->createRequest = new CreateConferenceRequest();
    $request->event->conferenceData->createRequest->conferenceSolutionKey = new ConferenceSolutionKey();
    $request->event->conferenceData->createRequest->conferenceSolutionKey->type = 'vitae';
    $request->event->conferenceData->createRequest->requestId = 'accusamus';
    $request->event->conferenceData->createRequest->status = new ConferenceRequestStatus();
    $request->event->conferenceData->createRequest->status->statusCode = 'similique';
    $request->event->conferenceData->entryPoints = [
        new EntryPoint(),
        new EntryPoint(),
    ];
    $request->event->conferenceData->notes = 'aspernatur';
    $request->event->conferenceData->parameters = new ConferenceParameters();
    $request->event->conferenceData->parameters->addOnParameters = new ConferenceParametersAddOnParameters();
    $request->event->conferenceData->parameters->addOnParameters->parameters = [
        'voluptas' => 'voluptas',
        'minima' => 'nobis',
    ];
    $request->event->conferenceData->signature = 'dolorum';
    $request->event->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T15:06:56.015Z');
    $request->event->creator = new EventCreator();
    $request->event->creator->displayName = 'dolores';
    $request->event->creator->email = 'Isom88@yahoo.com';
    $request->event->creator->id = 'd53b88f3-a8d8-4f5c-8b2f-2fb7b194a276';
    $request->event->creator->self = false;
    $request->event->description = 'quidem';
    $request->event->end = new EventDateTime();
    $request->event->end->date = DateTime::createFromFormat('Y-m-d', '2022-08-15');
    $request->event->end->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-19T23:26:17.500Z');
    $request->event->end->timeZone = 'suscipit';
    $request->event->endTimeUnspecified = false;
    $request->event->etag = 'sapiente';
    $request->event->eventType = 'debitis';
    $request->event->extendedProperties = new EventExtendedProperties();
    $request->event->extendedProperties->private = [
        'reiciendis' => 'perferendis',
    ];
    $request->event->extendedProperties->shared = [
        'maiores' => 'incidunt',
        'sed' => 'provident',
        'eius' => 'necessitatibus',
    ];
    $request->event->gadget = new EventGadget();
    $request->event->gadget->display = 'ipsum';
    $request->event->gadget->height = 406733;
    $request->event->gadget->iconLink = 'occaecati';
    $request->event->gadget->link = 'quos';
    $request->event->gadget->preferences = [
        'tempora' => 'tempora',
        'voluptate' => 'reiciendis',
        'ex' => 'sit',
        'non' => 'officiis',
    ];
    $request->event->gadget->title = 'Ms.';
    $request->event->gadget->type = 'facilis';
    $request->event->gadget->width = 310381;
    $request->event->guestsCanInviteOthers = false;
    $request->event->guestsCanModify = false;
    $request->event->guestsCanSeeOtherGuests = false;
    $request->event->hangoutLink = 'incidunt';
    $request->event->htmlLink = 'ipsam';
    $request->event->iCalUID = 'debitis';
    $request->event->id = '80ca55ef-d20e-4457-a185-8b6a89fbe3a5';
    $request->event->kind = 'officia';
    $request->event->location = 'dolorum';
    $request->event->locked = false;
    $request->event->organizer = new EventOrganizer();
    $request->event->organizer->displayName = 'corrupti';
    $request->event->organizer->email = 'Donny28@hotmail.com';
    $request->event->organizer->id = 'd0ab4075-088e-4518-a206-5e904f3b1194';
    $request->event->organizer->self = false;
    $request->event->originalStartTime = new EventDateTime();
    $request->event->originalStartTime->date = DateTime::createFromFormat('Y-m-d', '2021-12-03');
    $request->event->originalStartTime->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-21T08:55:46.635Z');
    $request->event->originalStartTime->timeZone = 'tenetur';
    $request->event->privateCopy = false;
    $request->event->recurrence = [
        'alias',
        'amet',
    ];
    $request->event->recurringEventId = 'deserunt';
    $request->event->reminders = new EventReminders();
    $request->event->reminders->overrides = [
        new EventReminder(),
        new EventReminder(),
    ];
    $request->event->reminders->useDefault = false;
    $request->event->sequence = 600392;
    $request->event->source = new EventSource();
    $request->event->source->title = 'Dr.';
    $request->event->source->url = 'provident';
    $request->event->start = new EventDateTime();
    $request->event->start->date = DateTime::createFromFormat('Y-m-d', '2020-02-11');
    $request->event->start->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-13T12:36:43.531Z');
    $request->event->start->timeZone = 'est';
    $request->event->status = 'quidem';
    $request->event->summary = 'reprehenderit';
    $request->event->transparency = 'facere';
    $request->event->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-24T20:10:40.309Z');
    $request->event->visibility = 'mollitia';
    $request->event->workingLocationProperties = new EventWorkingLocationProperties();
    $request->event->workingLocationProperties->customLocation = new EventWorkingLocationPropertiesCustomLocation();
    $request->event->workingLocationProperties->customLocation->label = 'veniam';
    $request->event->workingLocationProperties->homeOffice = 'voluptatem';
    $request->event->workingLocationProperties->officeLocation = new EventWorkingLocationPropertiesOfficeLocation();
    $request->event->workingLocationProperties->officeLocation->buildingId = 'quisquam';
    $request->event->workingLocationProperties->officeLocation->deskId = 'repudiandae';
    $request->event->workingLocationProperties->officeLocation->floorId = 'quasi';
    $request->event->workingLocationProperties->officeLocation->floorSectionId = 'atque';
    $request->event->workingLocationProperties->officeLocation->label = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'asperiores';
    $request->conferenceDataVersion = 519952;
    $request->fields = 'suscipit';
    $request->key = 'quidem';
    $request->maxAttendees = 806670;
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->sendNotifications = false;
    $request->sendUpdates = CalendarEventsInsertSendUpdatesEnum::ALL;
    $request->supportsAttachments = false;
    $request->userIp = 'assumenda';

    $requestSecurity = new CalendarEventsInsertSecurity();
    $requestSecurity->option1 = new CalendarEventsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsInsert($request, $requestSecurity);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarEventsInstances

Returns instances of the specified recurring event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInstancesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInstancesSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsInstancesSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsInstancesRequest();
    $request->alt = AltEnum::JSON;
    $request->alwaysIncludeEmail = false;
    $request->calendarId = 'ea';
    $request->eventId = 'atque';
    $request->fields = 'error';
    $request->key = 'officiis';
    $request->maxAttendees = 886961;
    $request->maxResults = 880107;
    $request->oauthToken = 'natus';
    $request->originalStart = 'minima';
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->showDeleted = false;
    $request->timeMax = 'maiores';
    $request->timeMin = 'corrupti';
    $request->timeZone = 'at';
    $request->userIp = 'error';

    $requestSecurity = new CalendarEventsInstancesSecurity();
    $requestSecurity->option1 = new CalendarEventsInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsInstances($request, $requestSecurity);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarEventsList

Returns events on the specified calendar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsListRequest();
    $request->alt = AltEnum::JSON;
    $request->alwaysIncludeEmail = false;
    $request->calendarId = 'blanditiis';
    $request->eventTypes = [
        'repudiandae',
        'atque',
    ];
    $request->fields = 'atque';
    $request->iCalUID = 'sunt';
    $request->key = 'recusandae';
    $request->maxAttendees = 680697;
    $request->maxResults = 829898;
    $request->oauthToken = 'labore';
    $request->orderBy = CalendarEventsListOrderByEnum::UPDATED;
    $request->pageToken = 'doloremque';
    $request->prettyPrint = false;
    $request->privateExtendedProperty = [
        'dicta',
        'accusantium',
        'beatae',
        'dolores',
    ];
    $request->q = 'enim';
    $request->quotaUser = 'laboriosam';
    $request->sharedExtendedProperty = [
        'a',
    ];
    $request->showDeleted = false;
    $request->showHiddenInvitations = false;
    $request->singleEvents = false;
    $request->syncToken = 'molestias';
    $request->timeMax = 'magnam';
    $request->timeMin = 'saepe';
    $request->timeZone = 'consequuntur';
    $request->updatedMin = 'occaecati';
    $request->userIp = 'officiis';

    $requestSecurity = new CalendarEventsListSecurity();
    $requestSecurity->option1 = new CalendarEventsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsList($request, $requestSecurity);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarEventsMove

Moves an event to another calendar, i.e. changes an event's organizer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsMoveSendUpdatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsMoveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsMoveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsMoveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsMoveRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'perspiciatis';
    $request->destination = 'in';
    $request->eventId = 'adipisci';
    $request->fields = 'eveniet';
    $request->key = 'occaecati';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->sendNotifications = false;
    $request->sendUpdates = CalendarEventsMoveSendUpdatesEnum::EXTERNAL_ONLY;
    $request->userIp = 'quis';

    $requestSecurity = new CalendarEventsMoveSecurity();
    $requestSecurity->option1 = new CalendarEventsMoveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsMove($request, $requestSecurity);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarEventsPatch

Updates an event. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\EventAttachment;
use \OpenAPI\OpenAPI\Models\Shared\EventAttendee;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceData;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceSolution;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceSolutionKey;
use \OpenAPI\OpenAPI\Models\Shared\CreateConferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceRequestStatus;
use \OpenAPI\OpenAPI\Models\Shared\EntryPoint;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceParametersAddOnParameters;
use \OpenAPI\OpenAPI\Models\Shared\EventCreator;
use \OpenAPI\OpenAPI\Models\Shared\EventDateTime;
use \OpenAPI\OpenAPI\Models\Shared\EventExtendedProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventGadget;
use \OpenAPI\OpenAPI\Models\Shared\EventOrganizer;
use \OpenAPI\OpenAPI\Models\Shared\EventReminders;
use \OpenAPI\OpenAPI\Models\Shared\EventReminder;
use \OpenAPI\OpenAPI\Models\Shared\EventSource;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationPropertiesCustomLocation;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationPropertiesOfficeLocation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsPatchSendUpdatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsPatchRequest();
    $request->event = new Event();
    $request->event->anyoneCanAddSelf = false;
    $request->event->attachments = [
        new EventAttachment(),
        new EventAttachment(),
    ];
    $request->event->attendees = [
        new EventAttendee(),
        new EventAttendee(),
        new EventAttendee(),
    ];
    $request->event->attendeesOmitted = false;
    $request->event->colorId = 'illo';
    $request->event->conferenceData = new ConferenceData();
    $request->event->conferenceData->conferenceId = 'corporis';
    $request->event->conferenceData->conferenceSolution = new ConferenceSolution();
    $request->event->conferenceData->conferenceSolution->iconUri = 'quidem';
    $request->event->conferenceData->conferenceSolution->key = new ConferenceSolutionKey();
    $request->event->conferenceData->conferenceSolution->key->type = 'eveniet';
    $request->event->conferenceData->conferenceSolution->name = 'Meghan Batz IV';
    $request->event->conferenceData->createRequest = new CreateConferenceRequest();
    $request->event->conferenceData->createRequest->conferenceSolutionKey = new ConferenceSolutionKey();
    $request->event->conferenceData->createRequest->conferenceSolutionKey->type = 'quae';
    $request->event->conferenceData->createRequest->requestId = 'molestiae';
    $request->event->conferenceData->createRequest->status = new ConferenceRequestStatus();
    $request->event->conferenceData->createRequest->status->statusCode = 'eveniet';
    $request->event->conferenceData->entryPoints = [
        new EntryPoint(),
    ];
    $request->event->conferenceData->notes = 'cum';
    $request->event->conferenceData->parameters = new ConferenceParameters();
    $request->event->conferenceData->parameters->addOnParameters = new ConferenceParametersAddOnParameters();
    $request->event->conferenceData->parameters->addOnParameters->parameters = [
        'necessitatibus' => 'ratione',
        'laborum' => 'distinctio',
    ];
    $request->event->conferenceData->signature = 'voluptatum';
    $request->event->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-23T18:05:58.128Z');
    $request->event->creator = new EventCreator();
    $request->event->creator->displayName = 'ad';
    $request->event->creator->email = 'Abdullah.Hettinger@hotmail.com';
    $request->event->creator->id = 'a60ff2a5-4a31-4e94-b64a-3e865e7956f9';
    $request->event->creator->self = false;
    $request->event->description = 'aspernatur';
    $request->event->end = new EventDateTime();
    $request->event->end->date = DateTime::createFromFormat('Y-m-d', '2022-11-26');
    $request->event->end->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-25T07:46:36.414Z');
    $request->event->end->timeZone = 'mollitia';
    $request->event->endTimeUnspecified = false;
    $request->event->etag = 'provident';
    $request->event->eventType = 'possimus';
    $request->event->extendedProperties = new EventExtendedProperties();
    $request->event->extendedProperties->private = [
        'ex' => 'aliquid',
        'accusantium' => 'repellat',
        'doloribus' => 'ullam',
    ];
    $request->event->extendedProperties->shared = [
        'nam' => 'earum',
        'officia' => 'laborum',
    ];
    $request->event->gadget = new EventGadget();
    $request->event->gadget->display = 'placeat';
    $request->event->gadget->height = 266697;
    $request->event->gadget->iconLink = 'voluptatibus';
    $request->event->gadget->link = 'molestias';
    $request->event->gadget->preferences = [
        'sapiente' => 'cumque',
        'vitae' => 'rerum',
        'tempora' => 'quis',
        'inventore' => 'fugit',
    ];
    $request->event->gadget->title = 'Miss';
    $request->event->gadget->type = 'quae';
    $request->event->gadget->width = 21688;
    $request->event->guestsCanInviteOthers = false;
    $request->event->guestsCanModify = false;
    $request->event->guestsCanSeeOtherGuests = false;
    $request->event->hangoutLink = 'velit';
    $request->event->htmlLink = 'aspernatur';
    $request->event->iCalUID = 'eum';
    $request->event->id = '48dc2f61-5199-4ebf-90e9-fe6c632ca3ae';
    $request->event->kind = 'nulla';
    $request->event->location = 'consequatur';
    $request->event->locked = false;
    $request->event->organizer = new EventOrganizer();
    $request->event->organizer->displayName = 'quasi';
    $request->event->organizer->email = 'Jesse.Mosciski@gmail.com';
    $request->event->organizer->id = '312fde04-7717-478f-b61d-017476360a15';
    $request->event->organizer->self = false;
    $request->event->originalStartTime = new EventDateTime();
    $request->event->originalStartTime->date = DateTime::createFromFormat('Y-m-d', '2020-11-10');
    $request->event->originalStartTime->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-12T16:43:21.506Z');
    $request->event->originalStartTime->timeZone = 'suscipit';
    $request->event->privateCopy = false;
    $request->event->recurrence = [
        'perferendis',
        'eum',
    ];
    $request->event->recurringEventId = 'voluptas';
    $request->event->reminders = new EventReminders();
    $request->event->reminders->overrides = [
        new EventReminder(),
        new EventReminder(),
        new EventReminder(),
    ];
    $request->event->reminders->useDefault = false;
    $request->event->sequence = 661607;
    $request->event->source = new EventSource();
    $request->event->source->title = 'Mr.';
    $request->event->source->url = 'error';
    $request->event->start = new EventDateTime();
    $request->event->start->date = DateTime::createFromFormat('Y-m-d', '2020-04-05');
    $request->event->start->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-28T14:09:49.511Z');
    $request->event->start->timeZone = 'libero';
    $request->event->status = 'ad';
    $request->event->summary = 'deleniti';
    $request->event->transparency = 'enim';
    $request->event->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-02T20:09:12.443Z');
    $request->event->visibility = 'ex';
    $request->event->workingLocationProperties = new EventWorkingLocationProperties();
    $request->event->workingLocationProperties->customLocation = new EventWorkingLocationPropertiesCustomLocation();
    $request->event->workingLocationProperties->customLocation->label = 'quo';
    $request->event->workingLocationProperties->homeOffice = 'ex';
    $request->event->workingLocationProperties->officeLocation = new EventWorkingLocationPropertiesOfficeLocation();
    $request->event->workingLocationProperties->officeLocation->buildingId = 'ut';
    $request->event->workingLocationProperties->officeLocation->deskId = 'ad';
    $request->event->workingLocationProperties->officeLocation->floorId = 'expedita';
    $request->event->workingLocationProperties->officeLocation->floorSectionId = 'voluptatem';
    $request->event->workingLocationProperties->officeLocation->label = 'molestias';
    $request->alt = AltEnum::JSON;
    $request->alwaysIncludeEmail = false;
    $request->calendarId = 'cum';
    $request->conferenceDataVersion = 399660;
    $request->eventId = 'beatae';
    $request->fields = 'voluptatum';
    $request->key = 'omnis';
    $request->maxAttendees = 85233;
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->sendNotifications = false;
    $request->sendUpdates = CalendarEventsPatchSendUpdatesEnum::EXTERNAL_ONLY;
    $request->supportsAttachments = false;
    $request->userIp = 'voluptatem';

    $requestSecurity = new CalendarEventsPatchSecurity();
    $requestSecurity->option1 = new CalendarEventsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsPatch($request, $requestSecurity);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarEventsQuickAdd

Creates an event based on a simple text string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsQuickAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsQuickAddSendUpdatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsQuickAddSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsQuickAddSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsQuickAddSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsQuickAddRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'sapiente';
    $request->fields = 'officiis';
    $request->key = 'architecto';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->sendNotifications = false;
    $request->sendUpdates = CalendarEventsQuickAddSendUpdatesEnum::NONE;
    $request->text = 'voluptatem';
    $request->userIp = 'alias';

    $requestSecurity = new CalendarEventsQuickAddSecurity();
    $requestSecurity->option1 = new CalendarEventsQuickAddSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsQuickAdd($request, $requestSecurity);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarEventsUpdate

Updates an event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\EventAttachment;
use \OpenAPI\OpenAPI\Models\Shared\EventAttendee;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceData;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceSolution;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceSolutionKey;
use \OpenAPI\OpenAPI\Models\Shared\CreateConferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceRequestStatus;
use \OpenAPI\OpenAPI\Models\Shared\EntryPoint;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceParametersAddOnParameters;
use \OpenAPI\OpenAPI\Models\Shared\EventCreator;
use \OpenAPI\OpenAPI\Models\Shared\EventDateTime;
use \OpenAPI\OpenAPI\Models\Shared\EventExtendedProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventGadget;
use \OpenAPI\OpenAPI\Models\Shared\EventOrganizer;
use \OpenAPI\OpenAPI\Models\Shared\EventReminders;
use \OpenAPI\OpenAPI\Models\Shared\EventReminder;
use \OpenAPI\OpenAPI\Models\Shared\EventSource;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationProperties;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationPropertiesCustomLocation;
use \OpenAPI\OpenAPI\Models\Shared\EventWorkingLocationPropertiesOfficeLocation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsUpdateSendUpdatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsUpdateRequest();
    $request->event = new Event();
    $request->event->anyoneCanAddSelf = false;
    $request->event->attachments = [
        new EventAttachment(),
        new EventAttachment(),
        new EventAttachment(),
    ];
    $request->event->attendees = [
        new EventAttendee(),
        new EventAttendee(),
        new EventAttendee(),
        new EventAttendee(),
    ];
    $request->event->attendeesOmitted = false;
    $request->event->colorId = 'ex';
    $request->event->conferenceData = new ConferenceData();
    $request->event->conferenceData->conferenceId = 'sapiente';
    $request->event->conferenceData->conferenceSolution = new ConferenceSolution();
    $request->event->conferenceData->conferenceSolution->iconUri = 'rem';
    $request->event->conferenceData->conferenceSolution->key = new ConferenceSolutionKey();
    $request->event->conferenceData->conferenceSolution->key->type = 'minus';
    $request->event->conferenceData->conferenceSolution->name = 'Ollie Dicki PhD';
    $request->event->conferenceData->createRequest = new CreateConferenceRequest();
    $request->event->conferenceData->createRequest->conferenceSolutionKey = new ConferenceSolutionKey();
    $request->event->conferenceData->createRequest->conferenceSolutionKey->type = 'totam';
    $request->event->conferenceData->createRequest->requestId = 'impedit';
    $request->event->conferenceData->createRequest->status = new ConferenceRequestStatus();
    $request->event->conferenceData->createRequest->status->statusCode = 'quibusdam';
    $request->event->conferenceData->entryPoints = [
        new EntryPoint(),
        new EntryPoint(),
        new EntryPoint(),
    ];
    $request->event->conferenceData->notes = 'ipsam';
    $request->event->conferenceData->parameters = new ConferenceParameters();
    $request->event->conferenceData->parameters->addOnParameters = new ConferenceParametersAddOnParameters();
    $request->event->conferenceData->parameters->addOnParameters->parameters = [
        'dolor' => 'aliquam',
        'inventore' => 'deleniti',
        'veritatis' => 'tempora',
    ];
    $request->event->conferenceData->signature = 'dolor';
    $request->event->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T11:52:35.630Z');
    $request->event->creator = new EventCreator();
    $request->event->creator->displayName = 'sit';
    $request->event->creator->email = 'Buford.Bergstrom@gmail.com';
    $request->event->creator->id = '3d5208ec-e7e2-453b-a684-51c6c6e205e1';
    $request->event->creator->self = false;
    $request->event->description = 'nisi';
    $request->event->end = new EventDateTime();
    $request->event->end->date = DateTime::createFromFormat('Y-m-d', '2020-05-14');
    $request->event->end->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-14T17:27:02.277Z');
    $request->event->end->timeZone = 'sequi';
    $request->event->endTimeUnspecified = false;
    $request->event->etag = 'doloribus';
    $request->event->eventType = 'repudiandae';
    $request->event->extendedProperties = new EventExtendedProperties();
    $request->event->extendedProperties->private = [
        'occaecati' => 'nemo',
        'voluptate' => 'blanditiis',
        'officia' => 'voluptas',
        'numquam' => 'nemo',
    ];
    $request->event->extendedProperties->shared = [
        'eius' => 'aspernatur',
        'ducimus' => 'nesciunt',
        'fuga' => 'laudantium',
    ];
    $request->event->gadget = new EventGadget();
    $request->event->gadget->display = 'incidunt';
    $request->event->gadget->height = 97493;
    $request->event->gadget->iconLink = 'rem';
    $request->event->gadget->link = 'fugiat';
    $request->event->gadget->preferences = [
        'nisi' => 'consequuntur',
    ];
    $request->event->gadget->title = 'Mrs.';
    $request->event->gadget->type = 'aperiam';
    $request->event->gadget->width = 585432;
    $request->event->guestsCanInviteOthers = false;
    $request->event->guestsCanModify = false;
    $request->event->guestsCanSeeOtherGuests = false;
    $request->event->hangoutLink = 'reiciendis';
    $request->event->htmlLink = 'soluta';
    $request->event->iCalUID = 'alias';
    $request->event->id = '929921ae-fb9f-458c-8d86-e68e4be05601';
    $request->event->kind = 'non';
    $request->event->location = 'maiores';
    $request->event->locked = false;
    $request->event->organizer = new EventOrganizer();
    $request->event->organizer->displayName = 'enim';
    $request->event->organizer->email = 'Ryder.Nolan@yahoo.com';
    $request->event->organizer->id = '7a59ecfe-f66e-4f1c-aa33-83c2beb47737';
    $request->event->organizer->self = false;
    $request->event->originalStartTime = new EventDateTime();
    $request->event->originalStartTime->date = DateTime::createFromFormat('Y-m-d', '2022-03-22');
    $request->event->originalStartTime->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-24T17:00:12.334Z');
    $request->event->originalStartTime->timeZone = 'iure';
    $request->event->privateCopy = false;
    $request->event->recurrence = [
        'voluptatibus',
    ];
    $request->event->recurringEventId = 'vel';
    $request->event->reminders = new EventReminders();
    $request->event->reminders->overrides = [
        new EventReminder(),
        new EventReminder(),
    ];
    $request->event->reminders->useDefault = false;
    $request->event->sequence = 842855;
    $request->event->source = new EventSource();
    $request->event->source->title = 'Mr.';
    $request->event->source->url = 'facere';
    $request->event->start = new EventDateTime();
    $request->event->start->date = DateTime::createFromFormat('Y-m-d', '2022-10-18');
    $request->event->start->dateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-13T18:14:43.574Z');
    $request->event->start->timeZone = 'porro';
    $request->event->status = 'aliquam';
    $request->event->summary = 'velit';
    $request->event->transparency = 'illo';
    $request->event->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T23:57:06.865Z');
    $request->event->visibility = 'ea';
    $request->event->workingLocationProperties = new EventWorkingLocationProperties();
    $request->event->workingLocationProperties->customLocation = new EventWorkingLocationPropertiesCustomLocation();
    $request->event->workingLocationProperties->customLocation->label = 'beatae';
    $request->event->workingLocationProperties->homeOffice = 'vero';
    $request->event->workingLocationProperties->officeLocation = new EventWorkingLocationPropertiesOfficeLocation();
    $request->event->workingLocationProperties->officeLocation->buildingId = 'excepturi';
    $request->event->workingLocationProperties->officeLocation->deskId = 'eum';
    $request->event->workingLocationProperties->officeLocation->floorId = 'velit';
    $request->event->workingLocationProperties->officeLocation->floorSectionId = 'ut';
    $request->event->workingLocationProperties->officeLocation->label = 'perspiciatis';
    $request->alt = AltEnum::JSON;
    $request->alwaysIncludeEmail = false;
    $request->calendarId = 'earum';
    $request->conferenceDataVersion = 117525;
    $request->eventId = 'impedit';
    $request->fields = 'voluptatibus';
    $request->key = 'iste';
    $request->maxAttendees = 932562;
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->sendNotifications = false;
    $request->sendUpdates = CalendarEventsUpdateSendUpdatesEnum::NONE;
    $request->supportsAttachments = false;
    $request->userIp = 'velit';

    $requestSecurity = new CalendarEventsUpdateSecurity();
    $requestSecurity->option1 = new CalendarEventsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsUpdate($request, $requestSecurity);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calendarEventsWatch

Watch for changes to Events resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsWatchOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsWatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsWatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsWatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsWatchSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\CalendarEventsWatchSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarEventsWatchRequest();
    $request->channel = new Channel();
    $request->channel->address = '224 Aliyah Avenue';
    $request->channel->expiration = 'officia';
    $request->channel->id = 'e6b6bc9b-8f75-49ea-855a-9741d3113529';
    $request->channel->kind = 'ex';
    $request->channel->params = [
        'soluta' => 'libero',
        'rem' => 'dolorum',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'odio';
    $request->channel->resourceUri = 'fugit';
    $request->channel->token = 'alias';
    $request->channel->type = 'magni';
    $request->alt = AltEnum::JSON;
    $request->alwaysIncludeEmail = false;
    $request->calendarId = 'vel';
    $request->eventTypes = [
        'quae',
    ];
    $request->fields = 'modi';
    $request->iCalUID = 'neque';
    $request->key = 'exercitationem';
    $request->maxAttendees = 932394;
    $request->maxResults = 88248;
    $request->oauthToken = 'ipsum';
    $request->orderBy = CalendarEventsWatchOrderByEnum::UPDATED;
    $request->pageToken = 'nulla';
    $request->prettyPrint = false;
    $request->privateExtendedProperty = [
        'maxime',
        'quia',
        'quia',
    ];
    $request->q = 'nostrum';
    $request->quotaUser = 'omnis';
    $request->sharedExtendedProperty = [
        'dicta',
        'id',
        'libero',
    ];
    $request->showDeleted = false;
    $request->showHiddenInvitations = false;
    $request->singleEvents = false;
    $request->syncToken = 'fugiat';
    $request->timeMax = 'officia';
    $request->timeMin = 'quos';
    $request->timeZone = 'placeat';
    $request->updatedMin = 'sit';
    $request->userIp = 'iusto';

    $requestSecurity = new CalendarEventsWatchSecurity();
    $requestSecurity->option1 = new CalendarEventsWatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->calendarEventsWatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
