# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/calendar/v3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ACL.CalendarACLDelete(ctx, operations.CalendarACLDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "corrupti",
        Fields: sdk.String("provident"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        RuleID: "nulla",
        UserIP: sdk.String("corrupti"),
    }, operations.CalendarACLDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [ACL](docs/acl/README.md)

* [CalendarACLDelete](docs/acl/README.md#calendaracldelete) - Deletes an access control rule.
* [CalendarACLGet](docs/acl/README.md#calendaraclget) - Returns an access control rule.
* [CalendarACLInsert](docs/acl/README.md#calendaraclinsert) - Creates an access control rule.
* [CalendarACLList](docs/acl/README.md#calendaracllist) - Returns the rules in the access control list for the calendar.
* [CalendarACLPatch](docs/acl/README.md#calendaraclpatch) - Updates an access control rule. This method supports patch semantics.
* [CalendarACLUpdate](docs/acl/README.md#calendaraclupdate) - Updates an access control rule.
* [CalendarACLWatch](docs/acl/README.md#calendaraclwatch) - Watch for changes to ACL resources.

### [CalendarList](docs/calendarlist/README.md)

* [CalendarCalendarListDelete](docs/calendarlist/README.md#calendarcalendarlistdelete) - Removes a calendar from the user's calendar list.
* [CalendarCalendarListGet](docs/calendarlist/README.md#calendarcalendarlistget) - Returns a calendar from the user's calendar list.
* [CalendarCalendarListInsert](docs/calendarlist/README.md#calendarcalendarlistinsert) - Inserts an existing calendar into the user's calendar list.
* [CalendarCalendarListList](docs/calendarlist/README.md#calendarcalendarlistlist) - Returns the calendars on the user's calendar list.
* [CalendarCalendarListPatch](docs/calendarlist/README.md#calendarcalendarlistpatch) - Updates an existing calendar on the user's calendar list. This method supports patch semantics.
* [CalendarCalendarListUpdate](docs/calendarlist/README.md#calendarcalendarlistupdate) - Updates an existing calendar on the user's calendar list.
* [CalendarCalendarListWatch](docs/calendarlist/README.md#calendarcalendarlistwatch) - Watch for changes to CalendarList resources.

### [Calendars](docs/calendars/README.md)

* [CalendarCalendarsClear](docs/calendars/README.md#calendarcalendarsclear) - Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
* [CalendarCalendarsDelete](docs/calendars/README.md#calendarcalendarsdelete) - Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
* [CalendarCalendarsGet](docs/calendars/README.md#calendarcalendarsget) - Returns metadata for a calendar.
* [CalendarCalendarsInsert](docs/calendars/README.md#calendarcalendarsinsert) - Creates a secondary calendar.
* [CalendarCalendarsPatch](docs/calendars/README.md#calendarcalendarspatch) - Updates metadata for a calendar. This method supports patch semantics.
* [CalendarCalendarsUpdate](docs/calendars/README.md#calendarcalendarsupdate) - Updates metadata for a calendar.

### [Channels](docs/channels/README.md)

* [CalendarChannelsStop](docs/channels/README.md#calendarchannelsstop) - Stop watching resources through this channel

### [Colors](docs/colors/README.md)

* [CalendarColorsGet](docs/colors/README.md#calendarcolorsget) - Returns the color definitions for calendars and events.

### [Events](docs/events/README.md)

* [CalendarEventsDelete](docs/events/README.md#calendareventsdelete) - Deletes an event.
* [CalendarEventsGet](docs/events/README.md#calendareventsget) - Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
* [CalendarEventsImport](docs/events/README.md#calendareventsimport) - Imports an event. This operation is used to add a private copy of an existing event to a calendar.
* [CalendarEventsInsert](docs/events/README.md#calendareventsinsert) - Creates an event.
* [CalendarEventsInstances](docs/events/README.md#calendareventsinstances) - Returns instances of the specified recurring event.
* [CalendarEventsList](docs/events/README.md#calendareventslist) - Returns events on the specified calendar.
* [CalendarEventsMove](docs/events/README.md#calendareventsmove) - Moves an event to another calendar, i.e. changes an event's organizer.
* [CalendarEventsPatch](docs/events/README.md#calendareventspatch) - Updates an event. This method supports patch semantics.
* [CalendarEventsQuickAdd](docs/events/README.md#calendareventsquickadd) - Creates an event based on a simple text string.
* [CalendarEventsUpdate](docs/events/README.md#calendareventsupdate) - Updates an event.
* [CalendarEventsWatch](docs/events/README.md#calendareventswatch) - Watch for changes to Events resources.

### [Freebusy](docs/freebusy/README.md)

* [CalendarFreebusyQuery](docs/freebusy/README.md#calendarfreebusyquery) - Returns free/busy information for a set of calendars.

### [Settings](docs/settings/README.md)

* [CalendarSettingsGet](docs/settings/README.md#calendarsettingsget) - Returns a single user setting.
* [CalendarSettingsList](docs/settings/README.md#calendarsettingslist) - Returns all user settings for the authenticated user.
* [CalendarSettingsWatch](docs/settings/README.md#calendarsettingswatch) - Watch for changes to Settings resources.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
