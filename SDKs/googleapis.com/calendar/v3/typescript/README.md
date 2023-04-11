# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/calendar/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/calendar/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CalendarAclDeleteRequest,
  CalendarAclDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CalendarAclDeleteRequest = {
  alt: AltEnum.Json,
  calendarId: "corrupti",
  fields: "provident",
  key: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  ruleId: "nulla",
  userIp: "corrupti",
};

sdk.acl.calendarAclDelete(req).then((res: CalendarAclDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### acl

* `calendarAclDelete` - Deletes an access control rule.
* `calendarAclGet` - Returns an access control rule.
* `calendarAclInsert` - Creates an access control rule.
* `calendarAclList` - Returns the rules in the access control list for the calendar.
* `calendarAclPatch` - Updates an access control rule. This method supports patch semantics.
* `calendarAclUpdate` - Updates an access control rule.
* `calendarAclWatch` - Watch for changes to ACL resources.

### calendarList

* `calendarCalendarListDelete` - Removes a calendar from the user's calendar list.
* `calendarCalendarListGet` - Returns a calendar from the user's calendar list.
* `calendarCalendarListInsert` - Inserts an existing calendar into the user's calendar list.
* `calendarCalendarListList` - Returns the calendars on the user's calendar list.
* `calendarCalendarListPatch` - Updates an existing calendar on the user's calendar list. This method supports patch semantics.
* `calendarCalendarListUpdate` - Updates an existing calendar on the user's calendar list.
* `calendarCalendarListWatch` - Watch for changes to CalendarList resources.

### calendars

* `calendarCalendarsClear` - Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
* `calendarCalendarsDelete` - Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
* `calendarCalendarsGet` - Returns metadata for a calendar.
* `calendarCalendarsInsert` - Creates a secondary calendar.
* `calendarCalendarsPatch` - Updates metadata for a calendar. This method supports patch semantics.
* `calendarCalendarsUpdate` - Updates metadata for a calendar.

### channels

* `calendarChannelsStop` - Stop watching resources through this channel

### colors

* `calendarColorsGet` - Returns the color definitions for calendars and events.

### events

* `calendarEventsDelete` - Deletes an event.
* `calendarEventsGet` - Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
* `calendarEventsImport` - Imports an event. This operation is used to add a private copy of an existing event to a calendar.
* `calendarEventsInsert` - Creates an event.
* `calendarEventsInstances` - Returns instances of the specified recurring event.
* `calendarEventsList` - Returns events on the specified calendar.
* `calendarEventsMove` - Moves an event to another calendar, i.e. changes an event's organizer.
* `calendarEventsPatch` - Updates an event. This method supports patch semantics.
* `calendarEventsQuickAdd` - Creates an event based on a simple text string.
* `calendarEventsUpdate` - Updates an event.
* `calendarEventsWatch` - Watch for changes to Events resources.

### freebusy

* `calendarFreebusyQuery` - Returns free/busy information for a set of calendars.

### settings

* `calendarSettingsGet` - Returns a single user setting.
* `calendarSettingsList` - Returns all user settings for the authenticated user.
* `calendarSettingsWatch` - Watch for changes to Settings resources.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

