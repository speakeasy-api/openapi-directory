# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CalendarAclDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalendarAclDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->calendarId = 'corrupti';
    $request->fields = 'provident';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'unde';
    $request->ruleId = 'nulla';
    $request->userIp = 'corrupti';

    $requestSecurity = new CalendarAclDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acl->calendarAclDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [acl](docs/acl/README.md)

* [calendarAclDelete](docs/acl/README.md#calendaracldelete) - Deletes an access control rule.
* [calendarAclGet](docs/acl/README.md#calendaraclget) - Returns an access control rule.
* [calendarAclInsert](docs/acl/README.md#calendaraclinsert) - Creates an access control rule.
* [calendarAclList](docs/acl/README.md#calendaracllist) - Returns the rules in the access control list for the calendar.
* [calendarAclPatch](docs/acl/README.md#calendaraclpatch) - Updates an access control rule. This method supports patch semantics.
* [calendarAclUpdate](docs/acl/README.md#calendaraclupdate) - Updates an access control rule.
* [calendarAclWatch](docs/acl/README.md#calendaraclwatch) - Watch for changes to ACL resources.

### [calendarList](docs/calendarlist/README.md)

* [calendarCalendarListDelete](docs/calendarlist/README.md#calendarcalendarlistdelete) - Removes a calendar from the user's calendar list.
* [calendarCalendarListGet](docs/calendarlist/README.md#calendarcalendarlistget) - Returns a calendar from the user's calendar list.
* [calendarCalendarListInsert](docs/calendarlist/README.md#calendarcalendarlistinsert) - Inserts an existing calendar into the user's calendar list.
* [calendarCalendarListList](docs/calendarlist/README.md#calendarcalendarlistlist) - Returns the calendars on the user's calendar list.
* [calendarCalendarListPatch](docs/calendarlist/README.md#calendarcalendarlistpatch) - Updates an existing calendar on the user's calendar list. This method supports patch semantics.
* [calendarCalendarListUpdate](docs/calendarlist/README.md#calendarcalendarlistupdate) - Updates an existing calendar on the user's calendar list.
* [calendarCalendarListWatch](docs/calendarlist/README.md#calendarcalendarlistwatch) - Watch for changes to CalendarList resources.

### [calendars](docs/calendars/README.md)

* [calendarCalendarsClear](docs/calendars/README.md#calendarcalendarsclear) - Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
* [calendarCalendarsDelete](docs/calendars/README.md#calendarcalendarsdelete) - Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
* [calendarCalendarsGet](docs/calendars/README.md#calendarcalendarsget) - Returns metadata for a calendar.
* [calendarCalendarsInsert](docs/calendars/README.md#calendarcalendarsinsert) - Creates a secondary calendar.
* [calendarCalendarsPatch](docs/calendars/README.md#calendarcalendarspatch) - Updates metadata for a calendar. This method supports patch semantics.
* [calendarCalendarsUpdate](docs/calendars/README.md#calendarcalendarsupdate) - Updates metadata for a calendar.

### [channels](docs/channels/README.md)

* [calendarChannelsStop](docs/channels/README.md#calendarchannelsstop) - Stop watching resources through this channel

### [colors](docs/colors/README.md)

* [calendarColorsGet](docs/colors/README.md#calendarcolorsget) - Returns the color definitions for calendars and events.

### [events](docs/events/README.md)

* [calendarEventsDelete](docs/events/README.md#calendareventsdelete) - Deletes an event.
* [calendarEventsGet](docs/events/README.md#calendareventsget) - Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
* [calendarEventsImport](docs/events/README.md#calendareventsimport) - Imports an event. This operation is used to add a private copy of an existing event to a calendar.
* [calendarEventsInsert](docs/events/README.md#calendareventsinsert) - Creates an event.
* [calendarEventsInstances](docs/events/README.md#calendareventsinstances) - Returns instances of the specified recurring event.
* [calendarEventsList](docs/events/README.md#calendareventslist) - Returns events on the specified calendar.
* [calendarEventsMove](docs/events/README.md#calendareventsmove) - Moves an event to another calendar, i.e. changes an event's organizer.
* [calendarEventsPatch](docs/events/README.md#calendareventspatch) - Updates an event. This method supports patch semantics.
* [calendarEventsQuickAdd](docs/events/README.md#calendareventsquickadd) - Creates an event based on a simple text string.
* [calendarEventsUpdate](docs/events/README.md#calendareventsupdate) - Updates an event.
* [calendarEventsWatch](docs/events/README.md#calendareventswatch) - Watch for changes to Events resources.

### [freebusy](docs/freebusy/README.md)

* [calendarFreebusyQuery](docs/freebusy/README.md#calendarfreebusyquery) - Returns free/busy information for a set of calendars.

### [settings](docs/settings/README.md)

* [calendarSettingsGet](docs/settings/README.md#calendarsettingsget) - Returns a single user setting.
* [calendarSettingsList](docs/settings/README.md#calendarsettingslist) - Returns all user settings for the authenticated user.
* [calendarSettingsWatch](docs/settings/README.md#calendarsettingswatch) - Watch for changes to Settings resources.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
