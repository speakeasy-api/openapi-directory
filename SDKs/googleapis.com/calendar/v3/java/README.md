# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CalendarAclDeleteRequest req = new CalendarAclDeleteRequest() {{
                security = new CalendarAclDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CalendarAclDeletePathParams() {{
                    calendarId = "accusantium";
                    ruleId = "minima";
                }};
                queryParams = new CalendarAclDeleteQueryParams() {{
                    alt = "json";
                    fields = "consectetur";
                    key = "est";
                    oauthToken = "tempora";
                    prettyPrint = false;
                    quotaUser = "dolorum";
                    userIp = "blanditiis";
                }};
            }};

            CalendarAclDeleteResponse res = sdk.acl.calendarAclDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
