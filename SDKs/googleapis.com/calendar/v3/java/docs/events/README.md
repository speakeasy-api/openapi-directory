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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsDeleteRequest;
import org.openapis.openapi.models.operations.CalendarEventsDeleteResponse;
import org.openapis.openapi.models.operations.CalendarEventsDeleteSecurity;
import org.openapis.openapi.models.operations.CalendarEventsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.CalendarEventsDeleteSendUpdatesEnum;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsDeleteRequest req = new CalendarEventsDeleteRequest("consectetur", "esse") {{
                alt = AltEnum.JSON;
                fields = "blanditiis";
                key = "provident";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "nulla";
                sendNotifications = false;
                sendUpdates = CalendarEventsDeleteSendUpdatesEnum.EXTERNAL_ONLY;
                userIp = "esse";
            }};            

            CalendarEventsDeleteResponse res = sdk.events.calendarEventsDelete(req, new CalendarEventsDeleteSecurity() {{
                option1 = new CalendarEventsDeleteSecurityOption1("quasi", "a") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarEventsGet

Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsGetRequest;
import org.openapis.openapi.models.operations.CalendarEventsGetResponse;
import org.openapis.openapi.models.operations.CalendarEventsGetSecurity;
import org.openapis.openapi.models.operations.CalendarEventsGetSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsGetSecurityOption2;
import org.openapis.openapi.models.operations.CalendarEventsGetSecurityOption3;
import org.openapis.openapi.models.operations.CalendarEventsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsGetRequest req = new CalendarEventsGetRequest("error", "sint") {{
                alt = AltEnum.JSON;
                alwaysIncludeEmail = false;
                fields = "pariatur";
                key = "possimus";
                maxAttendees = 157632L;
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "asperiores";
                timeZone = "facere";
                userIp = "veritatis";
            }};            

            CalendarEventsGetResponse res = sdk.events.calendarEventsGet(req, new CalendarEventsGetSecurity() {{
                option1 = new CalendarEventsGetSecurityOption1("consequuntur", "quasi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarEventsImport

Imports an event. This operation is used to add a private copy of an existing event to a calendar.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsImportRequest;
import org.openapis.openapi.models.operations.CalendarEventsImportResponse;
import org.openapis.openapi.models.operations.CalendarEventsImportSecurity;
import org.openapis.openapi.models.operations.CalendarEventsImportSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsImportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConferenceData;
import org.openapis.openapi.models.shared.ConferenceParameters;
import org.openapis.openapi.models.shared.ConferenceParametersAddOnParameters;
import org.openapis.openapi.models.shared.ConferenceRequestStatus;
import org.openapis.openapi.models.shared.ConferenceSolution;
import org.openapis.openapi.models.shared.ConferenceSolutionKey;
import org.openapis.openapi.models.shared.CreateConferenceRequest;
import org.openapis.openapi.models.shared.EntryPoint;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.EventAttachment;
import org.openapis.openapi.models.shared.EventAttendee;
import org.openapis.openapi.models.shared.EventCreator;
import org.openapis.openapi.models.shared.EventDateTime;
import org.openapis.openapi.models.shared.EventExtendedProperties;
import org.openapis.openapi.models.shared.EventGadget;
import org.openapis.openapi.models.shared.EventOrganizer;
import org.openapis.openapi.models.shared.EventReminder;
import org.openapis.openapi.models.shared.EventReminders;
import org.openapis.openapi.models.shared.EventSource;
import org.openapis.openapi.models.shared.EventWorkingLocationProperties;
import org.openapis.openapi.models.shared.EventWorkingLocationPropertiesCustomLocation;
import org.openapis.openapi.models.shared.EventWorkingLocationPropertiesOfficeLocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsImportRequest req = new CalendarEventsImportRequest("similique") {{
                event = new Event() {{
                    anyoneCanAddSelf = false;
                    attachments = new org.openapis.openapi.models.shared.EventAttachment[]{{
                        add(new EventAttachment() {{
                            fileId = "aliquid";
                            fileUrl = "tenetur";
                            iconLink = "quae";
                            mimeType = "earum";
                            title = "Ms.";
                        }}),
                        add(new EventAttachment() {{
                            fileId = "in";
                            fileUrl = "eius";
                            iconLink = "libero";
                            mimeType = "illum";
                            title = "Miss";
                        }}),
                        add(new EventAttachment() {{
                            fileId = "accusantium";
                            fileUrl = "aliquam";
                            iconLink = "sapiente";
                            mimeType = "dicta";
                            title = "Mrs.";
                        }}),
                    }};
                    attendees = new org.openapis.openapi.models.shared.EventAttendee[]{{
                        add(new EventAttendee() {{
                            additionalGuests = 356707;
                            comment = "nisi";
                            displayName = "aut";
                            email = "Christop_Sporer@yahoo.com";
                            id = "ea19f1d1-7051-4339-9080-86a1840394c2";
                            optional = false;
                            organizer = false;
                            resource = false;
                            responseStatus = "voluptas";
                            self = false;
                        }}),
                        add(new EventAttendee() {{
                            additionalGuests = 12036;
                            comment = "dignissimos";
                            displayName = "dicta";
                            email = "Libbie.Frami99@hotmail.com";
                            id = "0642dac7-af51-45cc-813a-a63aae8d6786";
                            optional = false;
                            organizer = false;
                            resource = false;
                            responseStatus = "labore";
                            self = false;
                        }}),
                    }};
                    attendeesOmitted = false;
                    colorId = "possimus";
                    conferenceData = new ConferenceData() {{
                        conferenceId = "facilis";
                        conferenceSolution = new ConferenceSolution() {{
                            iconUri = "cum";
                            key = new ConferenceSolutionKey() {{
                                type = "commodi";
                            }};;
                            name = "Ana Wisozk";
                        }};;
                        createRequest = new CreateConferenceRequest() {{
                            conferenceSolutionKey = new ConferenceSolutionKey() {{
                                type = "recusandae";
                            }};;
                            requestId = "aliquid";
                            status = new ConferenceRequestStatus() {{
                                statusCode = "aperiam";
                            }};;
                        }};;
                        entryPoints = new org.openapis.openapi.models.shared.EntryPoint[]{{
                            add(new EntryPoint() {{
                                accessCode = "consectetur";
                                entryPointFeatures = new String[]{{
                                    add("exercitationem"),
                                    add("earum"),
                                }};
                                entryPointType = "facere";
                                label = "numquam";
                                meetingCode = "doloribus";
                                passcode = "suscipit";
                                password = "reiciendis";
                                pin = "quidem";
                                regionCode = "saepe";
                                uri = "https://focused-caddy.org";
                            }}),
                            add(new EntryPoint() {{
                                accessCode = "adipisci";
                                entryPointFeatures = new String[]{{
                                    add("amet"),
                                }};
                                entryPointType = "beatae";
                                label = "dignissimos";
                                meetingCode = "a";
                                passcode = "debitis";
                                password = "consectetur";
                                pin = "corporis";
                                regionCode = "harum";
                                uri = "http://babyish-tortoise.net";
                            }}),
                            add(new EntryPoint() {{
                                accessCode = "vitae";
                                entryPointFeatures = new String[]{{
                                    add("similique"),
                                    add("tempora"),
                                    add("aspernatur"),
                                    add("voluptas"),
                                }};
                                entryPointType = "voluptas";
                                label = "voluptas";
                                meetingCode = "minima";
                                passcode = "nobis";
                                password = "dolorum";
                                pin = "adipisci";
                                regionCode = "minus";
                                uri = "http://lovely-illegal.biz";
                            }}),
                        }};
                        notes = "aliquam";
                        parameters = new ConferenceParameters() {{
                            addOnParameters = new ConferenceParametersAddOnParameters() {{
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("temporibus", "ullam");
                                    put("adipisci", "cum");
                                    put("blanditiis", "quas");
                                    put("hic", "nesciunt");
                                }};
                            }};;
                        }};;
                        signature = "culpa";
                    }};;
                    created = OffsetDateTime.parse("2021-04-07T21:05:22.480Z");
                    creator = new EventCreator() {{
                        displayName = "totam";
                        email = "Fausto69@hotmail.com";
                        id = "2f2fb7b1-94a2-476b-a691-6fe1f08f4294";
                        self = false;
                    }};;
                    description = "necessitatibus";
                    end = new EventDateTime() {{
                        date = LocalDate.parse("2022-08-05");
                        dateTime = OffsetDateTime.parse("2021-11-23T23:35:18.899Z");
                        timeZone = "voluptatibus";
                    }};;
                    endTimeUnspecified = false;
                    etag = "tempora";
                    eventType = "tempora";
                    extendedProperties = new EventExtendedProperties() {{
                        private_ = new java.util.HashMap<String, String>() {{
                            put("reiciendis", "ex");
                            put("sit", "non");
                        }};
                        shared = new java.util.HashMap<String, String>() {{
                            put("praesentium", "facilis");
                            put("quaerat", "incidunt");
                            put("ipsam", "debitis");
                            put("rem", "sit");
                        }};
                    }};;
                    gadget = new EventGadget() {{
                        display = "nobis";
                        height = 625637;
                        iconLink = "veniam";
                        link = "minima";
                        preferences = new java.util.HashMap<String, String>() {{
                            put("reiciendis", "nulla");
                            put("magni", "aperiam");
                            put("saepe", "numquam");
                            put("veniam", "in");
                        }};
                        title = "Dr.";
                        type = "beatae";
                        width = 512452;
                    }};;
                    guestsCanInviteOthers = false;
                    guestsCanModify = false;
                    guestsCanSeeOtherGuests = false;
                    hangoutLink = "exercitationem";
                    htmlLink = "praesentium";
                    iCalUID = "cum";
                    id = "6a89fbe3-a5aa-48e4-824d-0ab4075088e5";
                    kind = "et";
                    location = "blanditiis";
                    locked = false;
                    organizer = new EventOrganizer() {{
                        displayName = "ex";
                        email = "Alberto_Kautzer@gmail.com";
                        id = "904f3b11-94b8-4abf-a03a-79f9dfe0ab7d";
                        self = false;
                    }};;
                    originalStartTime = new EventDateTime() {{
                        date = LocalDate.parse("2021-12-24");
                        dateTime = OffsetDateTime.parse("2022-05-02T04:56:06.858Z");
                        timeZone = "voluptatem";
                    }};;
                    privateCopy = false;
                    recurrence = new String[]{{
                        add("repudiandae"),
                        add("quasi"),
                        add("atque"),
                        add("reprehenderit"),
                    }};
                    recurringEventId = "asperiores";
                    reminders = new EventReminders() {{
                        overrides = new org.openapis.openapi.models.shared.EventReminder[]{{
                            add(new EventReminder() {{
                                method = "suscipit";
                                minutes = 693957;
                            }}),
                            add(new EventReminder() {{
                                method = "maxime";
                                minutes = 90885;
                            }}),
                            add(new EventReminder() {{
                                method = "esse";
                                minutes = 227759;
                            }}),
                        }};
                        useDefault = false;
                    }};;
                    sequence = 826825;
                    source = new EventSource() {{
                        title = "Ms.";
                        url = "atque";
                    }};;
                    start = new EventDateTime() {{
                        date = LocalDate.parse("2021-03-24");
                        dateTime = OffsetDateTime.parse("2020-05-12T06:47:29.798Z");
                        timeZone = "natus";
                    }};;
                    status = "minima";
                    summary = "aspernatur";
                    transparency = "ex";
                    updated = OffsetDateTime.parse("2021-05-14T14:40:02.618Z");
                    visibility = "at";
                    workingLocationProperties = new EventWorkingLocationProperties() {{
                        customLocation = new EventWorkingLocationPropertiesCustomLocation() {{
                            label = "error";
                        }};;
                        homeOffice = "blanditiis";
                        officeLocation = new EventWorkingLocationPropertiesOfficeLocation() {{
                            buildingId = "suscipit";
                            deskId = "repudiandae";
                            floorId = "atque";
                            floorSectionId = "atque";
                            label = "sunt";
                        }};;
                    }};;
                }};;
                alt = AltEnum.JSON;
                conferenceDataVersion = 923306L;
                fields = "dolorum";
                key = "repellendus";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "reiciendis";
                supportsAttachments = false;
                userIp = "doloremque";
            }};            

            CalendarEventsImportResponse res = sdk.events.calendarEventsImport(req, new CalendarEventsImportSecurity() {{
                option1 = new CalendarEventsImportSecurityOption1("repudiandae", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarEventsInsert

Creates an event.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsInsertRequest;
import org.openapis.openapi.models.operations.CalendarEventsInsertResponse;
import org.openapis.openapi.models.operations.CalendarEventsInsertSecurity;
import org.openapis.openapi.models.operations.CalendarEventsInsertSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsInsertSecurityOption2;
import org.openapis.openapi.models.operations.CalendarEventsInsertSendUpdatesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConferenceData;
import org.openapis.openapi.models.shared.ConferenceParameters;
import org.openapis.openapi.models.shared.ConferenceParametersAddOnParameters;
import org.openapis.openapi.models.shared.ConferenceRequestStatus;
import org.openapis.openapi.models.shared.ConferenceSolution;
import org.openapis.openapi.models.shared.ConferenceSolutionKey;
import org.openapis.openapi.models.shared.CreateConferenceRequest;
import org.openapis.openapi.models.shared.EntryPoint;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.EventAttachment;
import org.openapis.openapi.models.shared.EventAttendee;
import org.openapis.openapi.models.shared.EventCreator;
import org.openapis.openapi.models.shared.EventDateTime;
import org.openapis.openapi.models.shared.EventExtendedProperties;
import org.openapis.openapi.models.shared.EventGadget;
import org.openapis.openapi.models.shared.EventOrganizer;
import org.openapis.openapi.models.shared.EventReminder;
import org.openapis.openapi.models.shared.EventReminders;
import org.openapis.openapi.models.shared.EventSource;
import org.openapis.openapi.models.shared.EventWorkingLocationProperties;
import org.openapis.openapi.models.shared.EventWorkingLocationPropertiesCustomLocation;
import org.openapis.openapi.models.shared.EventWorkingLocationPropertiesOfficeLocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsInsertRequest req = new CalendarEventsInsertRequest("accusantium") {{
                event = new Event() {{
                    anyoneCanAddSelf = false;
                    attachments = new org.openapis.openapi.models.shared.EventAttachment[]{{
                        add(new EventAttachment() {{
                            fileId = "dolores";
                            fileUrl = "enim";
                            iconLink = "laboriosam";
                            mimeType = "velit";
                            title = "Dr.";
                        }}),
                    }};
                    attendees = new org.openapis.openapi.models.shared.EventAttendee[]{{
                        add(new EventAttendee() {{
                            additionalGuests = 300029;
                            comment = "saepe";
                            displayName = "consequuntur";
                            email = "Shemar.Metz@yahoo.com";
                            id = "e922a57a-15be-43e0-a080-7e2b6e3ab884";
                            optional = false;
                            organizer = false;
                            resource = false;
                            responseStatus = "ad";
                            self = false;
                        }}),
                        add(new EventAttendee() {{
                            additionalGuests = 997963;
                            comment = "alias";
                            displayName = "corporis";
                            email = "Janie.OConner@yahoo.com";
                            id = "ff2a54a3-1e94-4764-a3e8-65e7956f9251";
                            optional = false;
                            organizer = false;
                            resource = false;
                            responseStatus = "animi";
                            self = false;
                        }}),
                        add(new EventAttendee() {{
                            additionalGuests = 343392;
                            comment = "mollitia";
                            displayName = "provident";
                            email = "Magali.Jacobson@hotmail.com";
                            id = "ff57bfaa-d4f9-4efc-9b45-12c1032648dc";
                            optional = false;
                            organizer = false;
                            resource = false;
                            responseStatus = "eos";
                            self = false;
                        }}),
                    }};
                    attendeesOmitted = false;
                    colorId = "sapiente";
                    conferenceData = new ConferenceData() {{
                        conferenceId = "eum";
                        conferenceSolution = new ConferenceSolution() {{
                            iconUri = "dicta";
                            key = new ConferenceSolutionKey() {{
                                type = "minima";
                            }};;
                            name = "Misty McKenzie";
                        }};;
                        createRequest = new CreateConferenceRequest() {{
                            conferenceSolutionKey = new ConferenceSolutionKey() {{
                                type = "hic";
                            }};;
                            requestId = "illum";
                            status = new ConferenceRequestStatus() {{
                                statusCode = "eaque";
                            }};;
                        }};;
                        entryPoints = new org.openapis.openapi.models.shared.EntryPoint[]{{
                            add(new EntryPoint() {{
                                accessCode = "perspiciatis";
                                entryPointFeatures = new String[]{{
                                    add("debitis"),
                                    add("aliquid"),
                                    add("porro"),
                                    add("suscipit"),
                                }};
                                entryPointType = "dolorem";
                                label = "fugit";
                                meetingCode = "cumque";
                                passcode = "fuga";
                                password = "ratione";
                                pin = "animi";
                                regionCode = "necessitatibus";
                                uri = "https://acidic-borrowing.com";
                            }}),
                            add(new EntryPoint() {{
                                accessCode = "ducimus";
                                entryPointFeatures = new String[]{{
                                    add("occaecati"),
                                    add("suscipit"),
                                    add("adipisci"),
                                }};
                                entryPointType = "quasi";
                                label = "magni";
                                meetingCode = "doloribus";
                                passcode = "nulla";
                                password = "necessitatibus";
                                pin = "ipsa";
                                regionCode = "tempora";
                                uri = "http://kooky-burial.info";
                            }}),
                            add(new EntryPoint() {{
                                accessCode = "esse";
                                entryPointFeatures = new String[]{{
                                    add("maiores"),
                                    add("reiciendis"),
                                    add("vel"),
                                }};
                                entryPointType = "architecto";
                                label = "fugiat";
                                meetingCode = "doloremque";
                                passcode = "dicta";
                                password = "odio";
                                pin = "tempora";
                                regionCode = "esse";
                                uri = "http://energetic-great-grandmother.com";
                            }}),
                            add(new EntryPoint() {{
                                accessCode = "laborum";
                                entryPointFeatures = new String[]{{
                                    add("nostrum"),
                                }};
                                entryPointType = "fugiat";
                                label = "expedita";
                                meetingCode = "aliquid";
                                passcode = "officia";
                                password = "suscipit";
                                pin = "aliquid";
                                regionCode = "perferendis";
                                uri = "http://hasty-orchard.name";
                            }}),
                        }};
                        notes = "ab";
                        parameters = new ConferenceParameters() {{
                            addOnParameters = new ConferenceParametersAddOnParameters() {{
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("possimus", "voluptates");
                                    put("mollitia", "laborum");
                                    put("libero", "ad");
                                }};
                            }};;
                        }};;
                        signature = "deleniti";
                    }};;
                    created = OffsetDateTime.parse("2022-11-21T16:13:12.951Z");
                    creator = new EventCreator() {{
                        displayName = "repellendus";
                        email = "Oral32@yahoo.com";
                        id = "b08b6189-1baa-40fe-9ade-008e6f8c5f35";
                        self = false;
                    }};;
                    description = "perferendis";
                    end = new EventDateTime() {{
                        date = LocalDate.parse("2021-06-12");
                        dateTime = OffsetDateTime.parse("2020-06-22T03:49:26.507Z");
                        timeZone = "nam";
                    }};;
                    endTimeUnspecified = false;
                    etag = "ipsam";
                    eventType = "culpa";
                    extendedProperties = new EventExtendedProperties() {{
                        private_ = new java.util.HashMap<String, String>() {{
                            put("aliquam", "inventore");
                        }};
                        shared = new java.util.HashMap<String, String>() {{
                            put("veritatis", "tempora");
                            put("dolor", "consequatur");
                            put("architecto", "sit");
                        }};
                    }};;
                    gadget = new EventGadget() {{
                        display = "modi";
                        height = 144286;
                        iconLink = "ab";
                        link = "laudantium";
                        preferences = new java.util.HashMap<String, String>() {{
                            put("dolor", "fugiat");
                        }};
                        title = "Mrs.";
                        type = "consequuntur";
                        width = 55107;
                    }};;
                    guestsCanInviteOthers = false;
                    guestsCanModify = false;
                    guestsCanSeeOtherGuests = false;
                    hangoutLink = "quas";
                    htmlLink = "eveniet";
                    iCalUID = "impedit";
                    id = "e7e253b6-6845-41c6-86e2-05e16deab3fe";
                    kind = "optio";
                    location = "occaecati";
                    locked = false;
                    organizer = new EventOrganizer() {{
                        displayName = "nemo";
                        email = "Jewel.Nitzsche@yahoo.com";
                        id = "584273a8-418d-4162-b09f-b0929921aefb";
                        self = false;
                    }};;
                    originalStartTime = new EventDateTime() {{
                        date = LocalDate.parse("2021-01-25");
                        dateTime = OffsetDateTime.parse("2022-06-29T17:06:44.946Z");
                        timeZone = "maxime";
                    }};;
                    privateCopy = false;
                    recurrence = new String[]{{
                        add("temporibus"),
                        add("quos"),
                    }};
                    recurringEventId = "commodi";
                    reminders = new EventReminders() {{
                        overrides = new org.openapis.openapi.models.shared.EventReminder[]{{
                            add(new EventReminder() {{
                                method = "commodi";
                                minutes = 520761;
                            }}),
                            add(new EventReminder() {{
                                method = "earum";
                                minutes = 267207;
                            }}),
                            add(new EventReminder() {{
                                method = "nam";
                                minutes = 877399;
                            }}),
                            add(new EventReminder() {{
                                method = "voluptatem";
                                minutes = 371919;
                            }}),
                        }};
                        useDefault = false;
                    }};;
                    sequence = 425946;
                    source = new EventSource() {{
                        title = "Mr.";
                        url = "quasi";
                    }};;
                    start = new EventDateTime() {{
                        date = LocalDate.parse("2022-01-08");
                        dateTime = OffsetDateTime.parse("2022-06-05T01:08:19.216Z");
                        timeZone = "nulla";
                    }};;
                    status = "deserunt";
                    summary = "esse";
                    transparency = "nemo";
                    updated = OffsetDateTime.parse("2022-05-02T06:49:02.857Z");
                    visibility = "quis";
                    workingLocationProperties = new EventWorkingLocationProperties() {{
                        customLocation = new EventWorkingLocationPropertiesCustomLocation() {{
                            label = "sint";
                        }};;
                        homeOffice = "accusamus";
                        officeLocation = new EventWorkingLocationPropertiesOfficeLocation() {{
                            buildingId = "impedit";
                            deskId = "hic";
                            floorId = "necessitatibus";
                            floorSectionId = "asperiores";
                            label = "ex";
                        }};;
                    }};;
                }};;
                alt = AltEnum.JSON;
                conferenceDataVersion = 376741L;
                fields = "debitis";
                key = "delectus";
                maxAttendees = 65082L;
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "fuga";
                sendNotifications = false;
                sendUpdates = CalendarEventsInsertSendUpdatesEnum.NONE;
                supportsAttachments = false;
                userIp = "consectetur";
            }};            

            CalendarEventsInsertResponse res = sdk.events.calendarEventsInsert(req, new CalendarEventsInsertSecurity() {{
                option1 = new CalendarEventsInsertSecurityOption1("velit", "atque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarEventsInstances

Returns instances of the specified recurring event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsInstancesRequest;
import org.openapis.openapi.models.operations.CalendarEventsInstancesResponse;
import org.openapis.openapi.models.operations.CalendarEventsInstancesSecurity;
import org.openapis.openapi.models.operations.CalendarEventsInstancesSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsInstancesSecurityOption2;
import org.openapis.openapi.models.operations.CalendarEventsInstancesSecurityOption3;
import org.openapis.openapi.models.operations.CalendarEventsInstancesSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsInstancesRequest req = new CalendarEventsInstancesRequest("ipsum", "impedit") {{
                alt = AltEnum.JSON;
                alwaysIncludeEmail = false;
                fields = "magni";
                key = "soluta";
                maxAttendees = 922757L;
                maxResults = 721430L;
                oauthToken = "dolore";
                originalStart = "iusto";
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "sequi";
                showDeleted = false;
                timeMax = "dignissimos";
                timeMin = "neque";
                timeZone = "quo";
                userIp = "deleniti";
            }};            

            CalendarEventsInstancesResponse res = sdk.events.calendarEventsInstances(req, new CalendarEventsInstancesSecurity() {{
                option1 = new CalendarEventsInstancesSecurityOption1("quibusdam", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarEventsList

Returns events on the specified calendar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsListOrderByEnum;
import org.openapis.openapi.models.operations.CalendarEventsListRequest;
import org.openapis.openapi.models.operations.CalendarEventsListResponse;
import org.openapis.openapi.models.operations.CalendarEventsListSecurity;
import org.openapis.openapi.models.operations.CalendarEventsListSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsListSecurityOption2;
import org.openapis.openapi.models.operations.CalendarEventsListSecurityOption3;
import org.openapis.openapi.models.operations.CalendarEventsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsListRequest req = new CalendarEventsListRequest("odit") {{
                alt = AltEnum.JSON;
                alwaysIncludeEmail = false;
                eventTypes = new String[]{{
                    add("vel"),
                    add("magnam"),
                    add("quibusdam"),
                    add("inventore"),
                }};
                fields = "facere";
                iCalUID = "libero";
                key = "architecto";
                maxAttendees = 975425L;
                maxResults = 156383L;
                oauthToken = "porro";
                orderBy = CalendarEventsListOrderByEnum.START_TIME;
                pageToken = "velit";
                prettyPrint = false;
                privateExtendedProperty = new String[]{{
                    add("accusantium"),
                }};
                q = "vel";
                quotaUser = "ea";
                sharedExtendedProperty = new String[]{{
                    add("vero"),
                }};
                showDeleted = false;
                showHiddenInvitations = false;
                singleEvents = false;
                syncToken = "excepturi";
                timeMax = "eum";
                timeMin = "velit";
                timeZone = "ut";
                updatedMin = "perspiciatis";
                userIp = "earum";
            }};            

            CalendarEventsListResponse res = sdk.events.calendarEventsList(req, new CalendarEventsListSecurity() {{
                option1 = new CalendarEventsListSecurityOption1("dicta", "impedit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarEventsMove

Moves an event to another calendar, i.e. changes an event's organizer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsMoveRequest;
import org.openapis.openapi.models.operations.CalendarEventsMoveResponse;
import org.openapis.openapi.models.operations.CalendarEventsMoveSecurity;
import org.openapis.openapi.models.operations.CalendarEventsMoveSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsMoveSecurityOption2;
import org.openapis.openapi.models.operations.CalendarEventsMoveSendUpdatesEnum;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsMoveRequest req = new CalendarEventsMoveRequest("voluptatibus", "iste", "itaque") {{
                alt = AltEnum.JSON;
                fields = "alias";
                key = "nisi";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "velit";
                sendNotifications = false;
                sendUpdates = CalendarEventsMoveSendUpdatesEnum.NONE;
                userIp = "non";
            }};            

            CalendarEventsMoveResponse res = sdk.events.calendarEventsMove(req, new CalendarEventsMoveSecurity() {{
                option1 = new CalendarEventsMoveSecurityOption1("dolor", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarEventsPatch

Updates an event. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsPatchRequest;
import org.openapis.openapi.models.operations.CalendarEventsPatchResponse;
import org.openapis.openapi.models.operations.CalendarEventsPatchSecurity;
import org.openapis.openapi.models.operations.CalendarEventsPatchSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsPatchSecurityOption2;
import org.openapis.openapi.models.operations.CalendarEventsPatchSendUpdatesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConferenceData;
import org.openapis.openapi.models.shared.ConferenceParameters;
import org.openapis.openapi.models.shared.ConferenceParametersAddOnParameters;
import org.openapis.openapi.models.shared.ConferenceRequestStatus;
import org.openapis.openapi.models.shared.ConferenceSolution;
import org.openapis.openapi.models.shared.ConferenceSolutionKey;
import org.openapis.openapi.models.shared.CreateConferenceRequest;
import org.openapis.openapi.models.shared.EntryPoint;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.EventAttachment;
import org.openapis.openapi.models.shared.EventAttendee;
import org.openapis.openapi.models.shared.EventCreator;
import org.openapis.openapi.models.shared.EventDateTime;
import org.openapis.openapi.models.shared.EventExtendedProperties;
import org.openapis.openapi.models.shared.EventGadget;
import org.openapis.openapi.models.shared.EventOrganizer;
import org.openapis.openapi.models.shared.EventReminder;
import org.openapis.openapi.models.shared.EventReminders;
import org.openapis.openapi.models.shared.EventSource;
import org.openapis.openapi.models.shared.EventWorkingLocationProperties;
import org.openapis.openapi.models.shared.EventWorkingLocationPropertiesCustomLocation;
import org.openapis.openapi.models.shared.EventWorkingLocationPropertiesOfficeLocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsPatchRequest req = new CalendarEventsPatchRequest("sit", "doloremque") {{
                event = new Event() {{
                    anyoneCanAddSelf = false;
                    attachments = new org.openapis.openapi.models.shared.EventAttachment[]{{
                        add(new EventAttachment() {{
                            fileId = "officia";
                            fileUrl = "recusandae";
                            iconLink = "ea";
                            mimeType = "quidem";
                            title = "Mrs.";
                        }}),
                    }};
                    attendees = new org.openapis.openapi.models.shared.EventAttendee[]{{
                        add(new EventAttendee() {{
                            additionalGuests = 809365;
                            comment = "perspiciatis";
                            displayName = "expedita";
                            email = "Velva_Klocko@yahoo.com";
                            id = "eac55a97-41d3-4113-9296-5bb8a7202611";
                            optional = false;
                            organizer = false;
                            resource = false;
                            responseStatus = "modi";
                            self = false;
                        }}),
                        add(new EventAttendee() {{
                            additionalGuests = 208253;
                            comment = "exercitationem";
                            displayName = "itaque";
                            email = "Cruz_Mills80@gmail.com";
                            id = "2259b1ab-da8c-4070-a108-4cb0672d1ad8";
                            optional = false;
                            organizer = false;
                            resource = false;
                            responseStatus = "molestiae";
                            self = false;
                        }}),
                        add(new EventAttendee() {{
                            additionalGuests = 588812;
                            comment = "accusamus";
                            displayName = "necessitatibus";
                            email = "King.Jast@hotmail.com";
                            id = "b85efbd0-2bae-40be-ad78-2259e3ea4b51";
                            optional = false;
                            organizer = false;
                            resource = false;
                            responseStatus = "unde";
                            self = false;
                        }}),
                    }};
                    attendeesOmitted = false;
                    colorId = "molestiae";
                    conferenceData = new ConferenceData() {{
                        conferenceId = "delectus";
                        conferenceSolution = new ConferenceSolution() {{
                            iconUri = "cupiditate";
                            key = new ConferenceSolutionKey() {{
                                type = "fugit";
                            }};;
                            name = "Carrie Douglas";
                        }};;
                        createRequest = new CreateConferenceRequest() {{
                            conferenceSolutionKey = new ConferenceSolutionKey() {{
                                type = "dignissimos";
                            }};;
                            requestId = "optio";
                            status = new ConferenceRequestStatus() {{
                                statusCode = "necessitatibus";
                            }};;
                        }};;
                        entryPoints = new org.openapis.openapi.models.shared.EntryPoint[]{{
                            add(new EntryPoint() {{
                                accessCode = "qui";
                                entryPointFeatures = new String[]{{
                                    add("voluptatum"),
                                    add("cupiditate"),
                                    add("minima"),
                                }};
                                entryPointType = "placeat";
                                label = "enim";
                                meetingCode = "neque";
                                passcode = "in";
                                password = "minus";
                                pin = "eum";
                                regionCode = "modi";
                                uri = "http://foolhardy-toothpick.org";
                            }}),
                            add(new EntryPoint() {{
                                accessCode = "tempore";
                                entryPointFeatures = new String[]{{
                                    add("libero"),
                                }};
                                entryPointType = "ratione";
                                label = "labore";
                                meetingCode = "totam";
                                passcode = "occaecati";
                                password = "voluptas";
                                pin = "quo";
                                regionCode = "velit";
                                uri = "https://realistic-file.net";
                            }}),
                        }};
                        notes = "impedit";
                        parameters = new ConferenceParameters() {{
                            addOnParameters = new ConferenceParametersAddOnParameters() {{
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("tempore", "vero");
                                    put("odit", "repellat");
                                    put("pariatur", "nemo");
                                    put("reprehenderit", "aperiam");
                                }};
                            }};;
                        }};;
                        signature = "odio";
                    }};;
                    created = OffsetDateTime.parse("2022-07-21T08:17:09.073Z");
                    creator = new EventCreator() {{
                        displayName = "ducimus";
                        email = "Celia49@yahoo.com";
                        id = "7deac646-ecb5-4734-89e3-eb1e5a2b12eb";
                        self = false;
                    }};;
                    description = "ipsa";
                    end = new EventDateTime() {{
                        date = LocalDate.parse("2022-01-08");
                        dateTime = OffsetDateTime.parse("2022-11-26T19:05:24.735Z");
                        timeZone = "laboriosam";
                    }};;
                    endTimeUnspecified = false;
                    etag = "pariatur";
                    eventType = "libero";
                    extendedProperties = new EventExtendedProperties() {{
                        private_ = new java.util.HashMap<String, String>() {{
                            put("occaecati", "nemo");
                            put("aliquam", "nostrum");
                            put("doloribus", "eligendi");
                        }};
                        shared = new java.util.HashMap<String, String>() {{
                            put("enim", "hic");
                            put("animi", "quas");
                            put("totam", "molestias");
                        }};
                    }};;
                    gadget = new EventGadget() {{
                        display = "odio";
                        height = 51170;
                        iconLink = "saepe";
                        link = "architecto";
                        preferences = new java.util.HashMap<String, String>() {{
                            put("iste", "assumenda");
                            put("tempore", "libero");
                            put("velit", "doloremque");
                        }};
                        title = "Dr.";
                        type = "impedit";
                        width = 741238;
                    }};;
                    guestsCanInviteOthers = false;
                    guestsCanModify = false;
                    guestsCanSeeOtherGuests = false;
                    hangoutLink = "ipsum";
                    htmlLink = "adipisci";
                    iCalUID = "saepe";
                    id = "a055b197-cd44-4e2f-92d8-2d3513bb6f48";
                    kind = "distinctio";
                    location = "nisi";
                    locked = false;
                    organizer = new EventOrganizer() {{
                        displayName = "quis";
                        email = "Monique_Schimmel21@yahoo.com";
                        id = "5ff2e4b2-7537-4a8c-99e7-319c177d525f";
                        self = false;
                    }};;
                    originalStartTime = new EventDateTime() {{
                        date = LocalDate.parse("2022-07-05");
                        dateTime = OffsetDateTime.parse("2022-11-09T04:25:16.566Z");
                        timeZone = "ab";
                    }};;
                    privateCopy = false;
                    recurrence = new String[]{{
                        add("accusamus"),
                        add("saepe"),
                    }};
                    recurringEventId = "tempore";
                    reminders = new EventReminders() {{
                        overrides = new org.openapis.openapi.models.shared.EventReminder[]{{
                            add(new EventReminder() {{
                                method = "eos";
                                minutes = 970079;
                            }}),
                            add(new EventReminder() {{
                                method = "earum";
                                minutes = 444121;
                            }}),
                        }};
                        useDefault = false;
                    }};;
                    sequence = 506312;
                    source = new EventSource() {{
                        title = "Mrs.";
                        url = "repellat";
                    }};;
                    start = new EventDateTime() {{
                        date = LocalDate.parse("2022-05-30");
                        dateTime = OffsetDateTime.parse("2022-06-19T18:12:14.535Z");
                        timeZone = "illo";
                    }};;
                    status = "labore";
                    summary = "assumenda";
                    transparency = "aliquam";
                    updated = OffsetDateTime.parse("2021-03-24T18:48:06.074Z");
                    visibility = "laudantium";
                    workingLocationProperties = new EventWorkingLocationProperties() {{
                        customLocation = new EventWorkingLocationPropertiesCustomLocation() {{
                            label = "repudiandae";
                        }};;
                        homeOffice = "consequatur";
                        officeLocation = new EventWorkingLocationPropertiesOfficeLocation() {{
                            buildingId = "maxime";
                            deskId = "aspernatur";
                            floorId = "nam";
                            floorSectionId = "expedita";
                            label = "quas";
                        }};;
                    }};;
                }};;
                alt = AltEnum.JSON;
                alwaysIncludeEmail = false;
                conferenceDataVersion = 590858L;
                fields = "repudiandae";
                key = "rerum";
                maxAttendees = 492361L;
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "vero";
                sendNotifications = false;
                sendUpdates = CalendarEventsPatchSendUpdatesEnum.EXTERNAL_ONLY;
                supportsAttachments = false;
                userIp = "repellendus";
            }};            

            CalendarEventsPatchResponse res = sdk.events.calendarEventsPatch(req, new CalendarEventsPatchSecurity() {{
                option1 = new CalendarEventsPatchSecurityOption1("iure", "dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarEventsQuickAdd

Creates an event based on a simple text string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsQuickAddRequest;
import org.openapis.openapi.models.operations.CalendarEventsQuickAddResponse;
import org.openapis.openapi.models.operations.CalendarEventsQuickAddSecurity;
import org.openapis.openapi.models.operations.CalendarEventsQuickAddSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsQuickAddSecurityOption2;
import org.openapis.openapi.models.operations.CalendarEventsQuickAddSendUpdatesEnum;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsQuickAddRequest req = new CalendarEventsQuickAddRequest("commodi", "impedit") {{
                alt = AltEnum.JSON;
                fields = "commodi";
                key = "aut";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "ad";
                sendNotifications = false;
                sendUpdates = CalendarEventsQuickAddSendUpdatesEnum.ALL;
                userIp = "amet";
            }};            

            CalendarEventsQuickAddResponse res = sdk.events.calendarEventsQuickAdd(req, new CalendarEventsQuickAddSecurity() {{
                option1 = new CalendarEventsQuickAddSecurityOption1("illum", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarEventsUpdate

Updates an event.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsUpdateRequest;
import org.openapis.openapi.models.operations.CalendarEventsUpdateResponse;
import org.openapis.openapi.models.operations.CalendarEventsUpdateSecurity;
import org.openapis.openapi.models.operations.CalendarEventsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsUpdateSecurityOption2;
import org.openapis.openapi.models.operations.CalendarEventsUpdateSendUpdatesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConferenceData;
import org.openapis.openapi.models.shared.ConferenceParameters;
import org.openapis.openapi.models.shared.ConferenceParametersAddOnParameters;
import org.openapis.openapi.models.shared.ConferenceRequestStatus;
import org.openapis.openapi.models.shared.ConferenceSolution;
import org.openapis.openapi.models.shared.ConferenceSolutionKey;
import org.openapis.openapi.models.shared.CreateConferenceRequest;
import org.openapis.openapi.models.shared.EntryPoint;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.EventAttachment;
import org.openapis.openapi.models.shared.EventAttendee;
import org.openapis.openapi.models.shared.EventCreator;
import org.openapis.openapi.models.shared.EventDateTime;
import org.openapis.openapi.models.shared.EventExtendedProperties;
import org.openapis.openapi.models.shared.EventGadget;
import org.openapis.openapi.models.shared.EventOrganizer;
import org.openapis.openapi.models.shared.EventReminder;
import org.openapis.openapi.models.shared.EventReminders;
import org.openapis.openapi.models.shared.EventSource;
import org.openapis.openapi.models.shared.EventWorkingLocationProperties;
import org.openapis.openapi.models.shared.EventWorkingLocationPropertiesCustomLocation;
import org.openapis.openapi.models.shared.EventWorkingLocationPropertiesOfficeLocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsUpdateRequest req = new CalendarEventsUpdateRequest("quidem", "cum") {{
                event = new Event() {{
                    anyoneCanAddSelf = false;
                    attachments = new org.openapis.openapi.models.shared.EventAttachment[]{{
                        add(new EventAttachment() {{
                            fileId = "quasi";
                            fileUrl = "dicta";
                            iconLink = "laudantium";
                            mimeType = "doloremque";
                            title = "Dr.";
                        }}),
                    }};
                    attendees = new org.openapis.openapi.models.shared.EventAttendee[]{{
                        add(new EventAttendee() {{
                            additionalGuests = 228646;
                            comment = "provident";
                            displayName = "dolorum";
                            email = "Larue36@hotmail.com";
                            id = "7eb809e2-8103-431f-b981-d4c700b607f3";
                            optional = false;
                            organizer = false;
                            resource = false;
                            responseStatus = "porro";
                            self = false;
                        }}),
                        add(new EventAttendee() {{
                            additionalGuests = 588639;
                            comment = "consectetur";
                            displayName = "eligendi";
                            email = "Darryl_Roberts@yahoo.com";
                            id = "a3f2ceda-7e23-4f22-9741-1faf4b7544e4";
                            optional = false;
                            organizer = false;
                            resource = false;
                            responseStatus = "in";
                            self = false;
                        }}),
                    }};
                    attendeesOmitted = false;
                    colorId = "explicabo";
                    conferenceData = new ConferenceData() {{
                        conferenceId = "accusamus";
                        conferenceSolution = new ConferenceSolution() {{
                            iconUri = "rem";
                            key = new ConferenceSolutionKey() {{
                                type = "aperiam";
                            }};;
                            name = "Nina Halvorson";
                        }};;
                        createRequest = new CreateConferenceRequest() {{
                            conferenceSolutionKey = new ConferenceSolutionKey() {{
                                type = "minima";
                            }};;
                            requestId = "libero";
                            status = new ConferenceRequestStatus() {{
                                statusCode = "magnam";
                            }};;
                        }};;
                        entryPoints = new org.openapis.openapi.models.shared.EntryPoint[]{{
                            add(new EntryPoint() {{
                                accessCode = "modi";
                                entryPointFeatures = new String[]{{
                                    add("nesciunt"),
                                    add("mollitia"),
                                }};
                                entryPointType = "dignissimos";
                                label = "fugiat";
                                meetingCode = "nostrum";
                                passcode = "molestiae";
                                password = "veniam";
                                pin = "reiciendis";
                                regionCode = "ab";
                                uri = "http://adolescent-affinity.org";
                            }}),
                        }};
                        notes = "odio";
                        parameters = new ConferenceParameters() {{
                            addOnParameters = new ConferenceParametersAddOnParameters() {{
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("numquam", "dolorum");
                                    put("possimus", "voluptate");
                                }};
                            }};;
                        }};;
                        signature = "consectetur";
                    }};;
                    created = OffsetDateTime.parse("2022-09-09T14:53:16.274Z");
                    creator = new EventCreator() {{
                        displayName = "itaque";
                        email = "Boris_Rau@hotmail.com";
                        id = "1b36a080-88d1-400e-bada-200ef0422eb2";
                        self = false;
                    }};;
                    description = "beatae";
                    end = new EventDateTime() {{
                        date = LocalDate.parse("2022-09-26");
                        dateTime = OffsetDateTime.parse("2020-01-29T06:30:42.778Z");
                        timeZone = "molestias";
                    }};;
                    endTimeUnspecified = false;
                    etag = "officia";
                    eventType = "libero";
                    extendedProperties = new EventExtendedProperties() {{
                        private_ = new java.util.HashMap<String, String>() {{
                            put("sequi", "aliquid");
                            put("ea", "impedit");
                            put("ducimus", "odit");
                        }};
                        shared = new java.util.HashMap<String, String>() {{
                            put("reiciendis", "repellat");
                        }};
                    }};;
                    gadget = new EventGadget() {{
                        display = "nulla";
                        height = 671116;
                        iconLink = "natus";
                        link = "accusamus";
                        preferences = new java.util.HashMap<String, String>() {{
                            put("nisi", "rerum");
                        }};
                        title = "Dr.";
                        type = "voluptates";
                        width = 251627;
                    }};;
                    guestsCanInviteOthers = false;
                    guestsCanModify = false;
                    guestsCanSeeOtherGuests = false;
                    hangoutLink = "rem";
                    htmlLink = "quia";
                    iCalUID = "ullam";
                    id = "c1fc0e11-5c80-4bff-9185-44ec42defcce";
                    kind = "totam";
                    location = "reiciendis";
                    locked = false;
                    organizer = new EventOrganizer() {{
                        displayName = "ab";
                        email = "Jaquan.Koch@yahoo.com";
                        id = "3e63562a-7b40-48f0-9e3d-48fdaf313a1f";
                        self = false;
                    }};;
                    originalStartTime = new EventDateTime() {{
                        date = LocalDate.parse("2022-01-05");
                        dateTime = OffsetDateTime.parse("2021-03-11T08:40:17.658Z");
                        timeZone = "incidunt";
                    }};;
                    privateCopy = false;
                    recurrence = new String[]{{
                        add("ipsam"),
                    }};
                    recurringEventId = "cupiditate";
                    reminders = new EventReminders() {{
                        overrides = new org.openapis.openapi.models.shared.EventReminder[]{{
                            add(new EventReminder() {{
                                method = "alias";
                                minutes = 695947;
                            }}),
                            add(new EventReminder() {{
                                method = "nesciunt";
                                minutes = 412433;
                            }}),
                            add(new EventReminder() {{
                                method = "sapiente";
                                minutes = 164319;
                            }}),
                            add(new EventReminder() {{
                                method = "veniam";
                                minutes = 893773;
                            }}),
                        }};
                        useDefault = false;
                    }};;
                    sequence = 638390;
                    source = new EventSource() {{
                        title = "Ms.";
                        url = "ut";
                    }};;
                    start = new EventDateTime() {{
                        date = LocalDate.parse("2022-01-20");
                        dateTime = OffsetDateTime.parse("2022-04-10T01:49:31.506Z");
                        timeZone = "in";
                    }};;
                    status = "minima";
                    summary = "ex";
                    transparency = "minus";
                    updated = OffsetDateTime.parse("2022-11-22T12:28:11.123Z");
                    visibility = "hic";
                    workingLocationProperties = new EventWorkingLocationProperties() {{
                        customLocation = new EventWorkingLocationPropertiesCustomLocation() {{
                            label = "nisi";
                        }};;
                        homeOffice = "quisquam";
                        officeLocation = new EventWorkingLocationPropertiesOfficeLocation() {{
                            buildingId = "dolor";
                            deskId = "ducimus";
                            floorId = "fuga";
                            floorSectionId = "minima";
                            label = "architecto";
                        }};;
                    }};;
                }};;
                alt = AltEnum.JSON;
                alwaysIncludeEmail = false;
                conferenceDataVersion = 181476L;
                fields = "aliquid";
                key = "magni";
                maxAttendees = 276650L;
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "praesentium";
                sendNotifications = false;
                sendUpdates = CalendarEventsUpdateSendUpdatesEnum.ALL;
                supportsAttachments = false;
                userIp = "exercitationem";
            }};            

            CalendarEventsUpdateResponse res = sdk.events.calendarEventsUpdate(req, new CalendarEventsUpdateSecurity() {{
                option1 = new CalendarEventsUpdateSecurityOption1("expedita", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarEventsWatch

Watch for changes to Events resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarEventsWatchOrderByEnum;
import org.openapis.openapi.models.operations.CalendarEventsWatchRequest;
import org.openapis.openapi.models.operations.CalendarEventsWatchResponse;
import org.openapis.openapi.models.operations.CalendarEventsWatchSecurity;
import org.openapis.openapi.models.operations.CalendarEventsWatchSecurityOption1;
import org.openapis.openapi.models.operations.CalendarEventsWatchSecurityOption2;
import org.openapis.openapi.models.operations.CalendarEventsWatchSecurityOption3;
import org.openapis.openapi.models.operations.CalendarEventsWatchSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarEventsWatchRequest req = new CalendarEventsWatchRequest("impedit") {{
                channel = new Channel() {{
                    address = "36126 Estefania Springs";
                    expiration = "itaque";
                    id = "fc5fde10-a0ce-4216-9e51-0019c6dc5e34";
                    kind = "dignissimos";
                    params = new java.util.HashMap<String, String>() {{
                        put("sed", "odio");
                        put("natus", "provident");
                    }};
                    payload = false;
                    resourceId = "cum";
                    resourceUri = "doloribus";
                    token = "facilis";
                    type = "quidem";
                }};;
                alt = AltEnum.JSON;
                alwaysIncludeEmail = false;
                eventTypes = new String[]{{
                    add("laboriosam"),
                    add("unde"),
                    add("modi"),
                    add("perspiciatis"),
                }};
                fields = "hic";
                iCalUID = "cum";
                key = "aspernatur";
                maxAttendees = 725784L;
                maxResults = 720266L;
                oauthToken = "incidunt";
                orderBy = CalendarEventsWatchOrderByEnum.UPDATED;
                pageToken = "quod";
                prettyPrint = false;
                privateExtendedProperty = new String[]{{
                    add("saepe"),
                    add("autem"),
                    add("quo"),
                }};
                q = "nesciunt";
                quotaUser = "illum";
                sharedExtendedProperty = new String[]{{
                    add("illum"),
                    add("facilis"),
                }};
                showDeleted = false;
                showHiddenInvitations = false;
                singleEvents = false;
                syncToken = "non";
                timeMax = "mollitia";
                timeMin = "assumenda";
                timeZone = "recusandae";
                updatedMin = "distinctio";
                userIp = "pariatur";
            }};            

            CalendarEventsWatchResponse res = sdk.events.calendarEventsWatch(req, new CalendarEventsWatchSecurity() {{
                option1 = new CalendarEventsWatchSecurityOption1("ad", "facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
