# Events

### Available Operations

* [CalendarEventsDelete](#calendareventsdelete) - Deletes an event.
* [CalendarEventsGet](#calendareventsget) - Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
* [CalendarEventsImport](#calendareventsimport) - Imports an event. This operation is used to add a private copy of an existing event to a calendar.
* [CalendarEventsInsert](#calendareventsinsert) - Creates an event.
* [CalendarEventsInstances](#calendareventsinstances) - Returns instances of the specified recurring event.
* [CalendarEventsList](#calendareventslist) - Returns events on the specified calendar.
* [CalendarEventsMove](#calendareventsmove) - Moves an event to another calendar, i.e. changes an event's organizer.
* [CalendarEventsPatch](#calendareventspatch) - Updates an event. This method supports patch semantics.
* [CalendarEventsQuickAdd](#calendareventsquickadd) - Creates an event based on a simple text string.
* [CalendarEventsUpdate](#calendareventsupdate) - Updates an event.
* [CalendarEventsWatch](#calendareventswatch) - Watch for changes to Events resources.

## CalendarEventsDelete

Deletes an event.

### Example Usage

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
    res, err := s.Events.CalendarEventsDelete(ctx, operations.CalendarEventsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "sapiente",
        EventID: "dolores",
        Fields: sdk.String("deserunt"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        SendNotifications: sdk.Bool(false),
        SendUpdates: operations.CalendarEventsDeleteSendUpdatesEnumExternalOnly.ToPointer(),
        UserIP: sdk.String("quas"),
    }, operations.CalendarEventsDeleteSecurity{
        Option1: &operations.CalendarEventsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CalendarEventsGet

Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.

### Example Usage

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
    res, err := s.Events.CalendarEventsGet(ctx, operations.CalendarEventsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        AlwaysIncludeEmail: sdk.Bool(false),
        CalendarID: "praesentium",
        EventID: "consequuntur",
        Fields: sdk.String("deleniti"),
        Key: sdk.String("fugit"),
        MaxAttendees: sdk.Int64(681393),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        TimeZone: sdk.String("atque"),
        UserIP: sdk.String("explicabo"),
    }, operations.CalendarEventsGetSecurity{
        Option1: &operations.CalendarEventsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## CalendarEventsImport

Imports an event. This operation is used to add a private copy of an existing event to a calendar.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.CalendarEventsImport(ctx, operations.CalendarEventsImportRequest{
        Event: &shared.Event{
            AnyoneCanAddSelf: sdk.Bool(false),
            Attachments: []shared.EventAttachment{
                shared.EventAttachment{
                    FileID: sdk.String("nisi"),
                    FileURL: sdk.String("fugit"),
                    IconLink: sdk.String("sapiente"),
                    MimeType: sdk.String("consequuntur"),
                    Title: sdk.String("Mr."),
                },
                shared.EventAttachment{
                    FileID: sdk.String("explicabo"),
                    FileURL: sdk.String("saepe"),
                    IconLink: sdk.String("occaecati"),
                    MimeType: sdk.String("atque"),
                    Title: sdk.String("Mr."),
                },
            },
            Attendees: []shared.EventAttendee{
                shared.EventAttendee{
                    AdditionalGuests: sdk.Int(910545),
                    Comment: sdk.String("accusamus"),
                    DisplayName: sdk.String("veritatis"),
                    Email: sdk.String("Precious.Reilly9@yahoo.com"),
                    ID: sdk.String("e6b7b95b-c0ab-43c2-8c4f-3789fd871f99"),
                    Optional: sdk.Bool(false),
                    Organizer: sdk.Bool(false),
                    Resource: sdk.Bool(false),
                    ResponseStatus: sdk.String("pariatur"),
                    Self: sdk.Bool(false),
                },
                shared.EventAttendee{
                    AdditionalGuests: sdk.Int(820767),
                    Comment: sdk.String("quia"),
                    DisplayName: sdk.String("eveniet"),
                    Email: sdk.String("Raven9@hotmail.com"),
                    ID: sdk.String("aa6f1e67-4bdb-404f-9575-6082d68ea19f"),
                    Optional: sdk.Bool(false),
                    Organizer: sdk.Bool(false),
                    Resource: sdk.Bool(false),
                    ResponseStatus: sdk.String("quasi"),
                    Self: sdk.Bool(false),
                },
            },
            AttendeesOmitted: sdk.Bool(false),
            ColorID: sdk.String("at"),
            ConferenceData: &shared.ConferenceData{
                ConferenceID: sdk.String("et"),
                ConferenceSolution: &shared.ConferenceSolution{
                    IconURI: sdk.String("voluptate"),
                    Key: &shared.ConferenceSolutionKey{
                        Type: sdk.String("ipsa"),
                    },
                    Name: sdk.String("Marie Feest"),
                },
                CreateRequest: &shared.CreateConferenceRequest{
                    ConferenceSolutionKey: &shared.ConferenceSolutionKey{
                        Type: sdk.String("temporibus"),
                    },
                    RequestID: sdk.String("accusantium"),
                    Status: &shared.ConferenceRequestStatus{
                        StatusCode: sdk.String("rem"),
                    },
                },
                EntryPoints: []shared.EntryPoint{
                    shared.EntryPoint{
                        AccessCode: sdk.String("laudantium"),
                        EntryPointFeatures: []string{
                            "mollitia",
                            "ab",
                        },
                        EntryPointType: sdk.String("corrupti"),
                        Label: sdk.String("non"),
                        MeetingCode: sdk.String("voluptatem"),
                        Passcode: sdk.String("dolor"),
                        Password: sdk.String("occaecati"),
                        Pin: sdk.String("numquam"),
                        RegionCode: sdk.String("impedit"),
                        URI: sdk.String("http://haunting-advertisement.info"),
                    },
                },
                Notes: sdk.String("dicta"),
                Parameters: &shared.ConferenceParameters{
                    AddOnParameters: &shared.ConferenceParametersAddOnParameters{
                        Parameters: map[string]string{
                            "natus": "velit",
                            "voluptatibus": "voluptas",
                            "asperiores": "aperiam",
                            "ea": "quaerat",
                        },
                    },
                },
                Signature: sdk.String("consequuntur"),
            },
            Created: types.MustTimeFromString("2021-01-31T13:20:27.558Z"),
            Creator: &shared.EventCreator{
                DisplayName: sdk.String("maxime"),
                Email: sdk.String("Lucienne.Yundt@yahoo.com"),
                ID: sdk.String("5cc413aa-63aa-4e8d-a786-4dbb675fd5e6"),
                Self: sdk.Bool(false),
            },
            Description: sdk.String("aperiam"),
            End: &shared.EventDateTime{
                Date: types.MustDateFromString("2022-07-15"),
                DateTime: types.MustTimeFromString("2022-08-26T18:58:12.703Z"),
                TimeZone: sdk.String("earum"),
            },
            EndTimeUnspecified: sdk.Bool(false),
            Etag: sdk.String("facere"),
            EventType: sdk.String("numquam"),
            ExtendedProperties: &shared.EventExtendedProperties{
                Private: map[string]string{
                    "suscipit": "reiciendis",
                    "quidem": "saepe",
                    "necessitatibus": "dolore",
                    "sunt": "asperiores",
                },
                Shared: map[string]string{
                    "non": "amet",
                },
            },
            Gadget: &shared.EventGadget{
                Display: sdk.String("beatae"),
                Height: sdk.Int(489509),
                IconLink: sdk.String("a"),
                Link: sdk.String("debitis"),
                Preferences: map[string]string{
                    "corporis": "harum",
                },
                Title: sdk.String("Mrs."),
                Type: sdk.String("ipsa"),
                Width: sdk.Int(916727),
            },
            GuestsCanInviteOthers: sdk.Bool(false),
            GuestsCanModify: sdk.Bool(false),
            GuestsCanSeeOtherGuests: sdk.Bool(false),
            HangoutLink: sdk.String("libero"),
            HTMLLink: sdk.String("vitae"),
            ICalUID: sdk.String("accusamus"),
            ID: sdk.String("a426555b-a3c2-4874-8ed5-3b88f3a8d8f5"),
            Kind: sdk.String("nobis"),
            Location: sdk.String("sit"),
            Locked: sdk.Bool(false),
            Organizer: &shared.EventOrganizer{
                DisplayName: sdk.String("rerum"),
                Email: sdk.String("Viviane_Cole45@gmail.com"),
                ID: sdk.String("b194a276-b269-416f-a1f0-8f4294e3698f"),
                Self: sdk.Bool(false),
            },
            OriginalStartTime: &shared.EventDateTime{
                Date: types.MustDateFromString("2022-09-23"),
                DateTime: types.MustTimeFromString("2022-01-11T22:08:32.388Z"),
                TimeZone: sdk.String("ex"),
            },
            PrivateCopy: sdk.Bool(false),
            Recurrence: []string{
                "non",
            },
            RecurringEventID: sdk.String("officiis"),
            Reminders: &shared.EventReminders{
                Overrides: []shared.EventReminder{
                    shared.EventReminder{
                        Method: sdk.String("facilis"),
                        Minutes: sdk.Int(310381),
                    },
                    shared.EventReminder{
                        Method: sdk.String("incidunt"),
                        Minutes: sdk.Int(373035),
                    },
                    shared.EventReminder{
                        Method: sdk.String("debitis"),
                        Minutes: sdk.Int(524970),
                    },
                },
                UseDefault: sdk.Bool(false),
            },
            Sequence: sdk.Int(26522),
            Source: &shared.EventSource{
                Title: sdk.String("Miss"),
                URL: sdk.String("error"),
            },
            Start: &shared.EventDateTime{
                Date: types.MustDateFromString("2022-09-02"),
                DateTime: types.MustTimeFromString("2020-02-07T00:03:24.642Z"),
                TimeZone: sdk.String("nulla"),
            },
            Status: sdk.String("magni"),
            Summary: sdk.String("aperiam"),
            Transparency: sdk.String("saepe"),
            Updated: types.MustTimeFromString("2022-09-02T13:45:48.565Z"),
            Visibility: sdk.String("in"),
            WorkingLocationProperties: &shared.EventWorkingLocationProperties{
                CustomLocation: &shared.EventWorkingLocationPropertiesCustomLocation{
                    Label: sdk.String("officiis"),
                },
                HomeOffice: sdk.String("beatae"),
                OfficeLocation: &shared.EventWorkingLocationPropertiesOfficeLocation{
                    BuildingID: sdk.String("laudantium"),
                    DeskID: sdk.String("exercitationem"),
                    FloorID: sdk.String("praesentium"),
                    FloorSectionID: sdk.String("cum"),
                    Label: sdk.String("laboriosam"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "dolorum",
        ConferenceDataVersion: sdk.Int64(530089),
        Fields: sdk.String("error"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        SupportsAttachments: sdk.Bool(false),
        UserIP: sdk.String("neque"),
    }, operations.CalendarEventsImportSecurity{
        Option1: &operations.CalendarEventsImportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## CalendarEventsInsert

Creates an event.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.CalendarEventsInsert(ctx, operations.CalendarEventsInsertRequest{
        Event: &shared.Event{
            AnyoneCanAddSelf: sdk.Bool(false),
            Attachments: []shared.EventAttachment{
                shared.EventAttachment{
                    FileID: sdk.String("nostrum"),
                    FileURL: sdk.String("officia"),
                    IconLink: sdk.String("dolorum"),
                    MimeType: sdk.String("corrupti"),
                    Title: sdk.String("Dr."),
                },
                shared.EventAttachment{
                    FileID: sdk.String("tempora"),
                    FileURL: sdk.String("atque"),
                    IconLink: sdk.String("fugit"),
                    MimeType: sdk.String("ut"),
                    Title: sdk.String("Dr."),
                },
                shared.EventAttachment{
                    FileID: sdk.String("voluptatem"),
                    FileURL: sdk.String("culpa"),
                    IconLink: sdk.String("expedita"),
                    MimeType: sdk.String("magnam"),
                    Title: sdk.String("Mr."),
                },
            },
            Attendees: []shared.EventAttendee{
                shared.EventAttendee{
                    AdditionalGuests: sdk.Int(372679),
                    Comment: sdk.String("sit"),
                    DisplayName: sdk.String("voluptatum"),
                    Email: sdk.String("Theodora50@yahoo.com"),
                    ID: sdk.String("62065e90-4f3b-4119-8b8a-bf603a79f9df"),
                    Optional: sdk.Bool(false),
                    Organizer: sdk.Bool(false),
                    Resource: sdk.Bool(false),
                    ResponseStatus: sdk.String("voluptates"),
                    Self: sdk.Bool(false),
                },
                shared.EventAttendee{
                    AdditionalGuests: sdk.Int(16871),
                    Comment: sdk.String("est"),
                    DisplayName: sdk.String("quidem"),
                    Email: sdk.String("Raquel_Pfannerstill@yahoo.com"),
                    ID: sdk.String("50ce187f-86bc-4173-9689-eee9526f8d98"),
                    Optional: sdk.Bool(false),
                    Organizer: sdk.Bool(false),
                    Resource: sdk.Bool(false),
                    ResponseStatus: sdk.String("suscipit"),
                    Self: sdk.Bool(false),
                },
            },
            AttendeesOmitted: sdk.Bool(false),
            ColorID: sdk.String("repudiandae"),
            ConferenceData: &shared.ConferenceData{
                ConferenceID: sdk.String("atque"),
                ConferenceSolution: &shared.ConferenceSolution{
                    IconURI: sdk.String("atque"),
                    Key: &shared.ConferenceSolutionKey{
                        Type: sdk.String("sunt"),
                    },
                    Name: sdk.String("Wilbur Simonis"),
                },
                CreateRequest: &shared.CreateConferenceRequest{
                    ConferenceSolutionKey: &shared.ConferenceSolutionKey{
                        Type: sdk.String("doloremque"),
                    },
                    RequestID: sdk.String("repudiandae"),
                    Status: &shared.ConferenceRequestStatus{
                        StatusCode: sdk.String("dicta"),
                    },
                },
                EntryPoints: []shared.EntryPoint{
                    shared.EntryPoint{
                        AccessCode: sdk.String("beatae"),
                        EntryPointFeatures: []string{
                            "enim",
                        },
                        EntryPointType: sdk.String("laboriosam"),
                        Label: sdk.String("velit"),
                        MeetingCode: sdk.String("a"),
                        Passcode: sdk.String("molestias"),
                        Password: sdk.String("magnam"),
                        Pin: sdk.String("saepe"),
                        RegionCode: sdk.String("consequuntur"),
                        URI: sdk.String("https://unfinished-norm.info"),
                    },
                },
                Notes: sdk.String("adipisci"),
                Parameters: &shared.ConferenceParameters{
                    AddOnParameters: &shared.ConferenceParametersAddOnParameters{
                        Parameters: map[string]string{
                            "occaecati": "consequuntur",
                            "fugit": "id",
                            "quis": "reprehenderit",
                            "error": "illo",
                        },
                    },
                },
                Signature: sdk.String("corporis"),
            },
            Created: types.MustTimeFromString("2021-03-06T23:23:06.913Z"),
            Creator: &shared.EventCreator{
                DisplayName: sdk.String("non"),
                Email: sdk.String("Aliya51@hotmail.com"),
                ID: sdk.String("07e2b6e3-ab88-445f-8597-a60ff2a54a31"),
                Self: sdk.Bool(false),
            },
            Description: sdk.String("recusandae"),
            End: &shared.EventDateTime{
                Date: types.MustDateFromString("2022-05-20"),
                DateTime: types.MustTimeFromString("2022-08-06T19:48:35.360Z"),
                TimeZone: sdk.String("ut"),
            },
            EndTimeUnspecified: sdk.Bool(false),
            Etag: sdk.String("culpa"),
            EventType: sdk.String("adipisci"),
            ExtendedProperties: &shared.EventExtendedProperties{
                Private: map[string]string{
                    "laudantium": "eum",
                    "nemo": "recusandae",
                    "esse": "provident",
                    "quis": "eum",
                },
                Shared: map[string]string{
                    "provident": "aspernatur",
                    "ullam": "quasi",
                    "animi": "nostrum",
                    "mollitia": "provident",
                },
            },
            Gadget: &shared.EventGadget{
                Display: sdk.String("possimus"),
                Height: sdk.Int(659177),
                IconLink: sdk.String("ex"),
                Link: sdk.String("aliquid"),
                Preferences: map[string]string{
                    "repellat": "doloribus",
                },
                Title: sdk.String("Mrs."),
                Type: sdk.String("in"),
                Width: sdk.Int(721407),
            },
            GuestsCanInviteOthers: sdk.Bool(false),
            GuestsCanModify: sdk.Bool(false),
            GuestsCanSeeOtherGuests: sdk.Bool(false),
            HangoutLink: sdk.String("earum"),
            HTMLLink: sdk.String("officia"),
            ICalUID: sdk.String("laborum"),
            ID: sdk.String("d4f9efc1-b451-42c1-8326-48dc2f615199"),
            Kind: sdk.String("earum"),
            Location: sdk.String("soluta"),
            Locked: sdk.Bool(false),
            Organizer: &shared.EventOrganizer{
                DisplayName: sdk.String("hic"),
                Email: sdk.String("Americo_Weber@hotmail.com"),
                ID: sdk.String("e6c632ca-3aed-4011-b996-312fde047717"),
                Self: sdk.Bool(false),
            },
            OriginalStartTime: &shared.EventDateTime{
                Date: types.MustDateFromString("2022-06-29"),
                DateTime: types.MustTimeFromString("2020-02-06T20:25:31.567Z"),
                TimeZone: sdk.String("vel"),
            },
            PrivateCopy: sdk.Bool(false),
            Recurrence: []string{
                "fugiat",
            },
            RecurringEventID: sdk.String("doloremque"),
            Reminders: &shared.EventReminders{
                Overrides: []shared.EventReminder{
                    shared.EventReminder{
                        Method: sdk.String("odio"),
                        Minutes: sdk.Int(271252),
                    },
                },
                UseDefault: sdk.Bool(false),
            },
            Sequence: sdk.Int(458259),
            Source: &shared.EventSource{
                Title: sdk.String("Ms."),
                URL: sdk.String("consectetur"),
            },
            Start: &shared.EventDateTime{
                Date: types.MustDateFromString("2022-12-10"),
                DateTime: types.MustTimeFromString("2022-10-02T14:14:43.935Z"),
                TimeZone: sdk.String("nostrum"),
            },
            Status: sdk.String("fugiat"),
            Summary: sdk.String("expedita"),
            Transparency: sdk.String("aliquid"),
            Updated: types.MustTimeFromString("2022-03-28T13:55:18.249Z"),
            Visibility: sdk.String("aliquid"),
            WorkingLocationProperties: &shared.EventWorkingLocationProperties{
                CustomLocation: &shared.EventWorkingLocationPropertiesCustomLocation{
                    Label: sdk.String("perferendis"),
                },
                HomeOffice: sdk.String("eum"),
                OfficeLocation: &shared.EventWorkingLocationPropertiesOfficeLocation{
                    BuildingID: sdk.String("voluptas"),
                    DeskID: sdk.String("iste"),
                    FloorID: sdk.String("id"),
                    FloorSectionID: sdk.String("ab"),
                    Label: sdk.String("error"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "possimus",
        ConferenceDataVersion: sdk.Int64(913992),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("laborum"),
        MaxAttendees: sdk.Int64(726343),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        SendNotifications: sdk.Bool(false),
        SendUpdates: operations.CalendarEventsInsertSendUpdatesEnumAll.ToPointer(),
        SupportsAttachments: sdk.Bool(false),
        UserIP: sdk.String("vitae"),
    }, operations.CalendarEventsInsertSecurity{
        Option1: &operations.CalendarEventsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## CalendarEventsInstances

Returns instances of the specified recurring event.

### Example Usage

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
    res, err := s.Events.CalendarEventsInstances(ctx, operations.CalendarEventsInstancesRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        AlwaysIncludeEmail: sdk.Bool(false),
        CalendarID: "repellendus",
        EventID: "ex",
        Fields: sdk.String("quo"),
        Key: sdk.String("ex"),
        MaxAttendees: sdk.Int64(281153),
        MaxResults: sdk.Int64(321043),
        OauthToken: sdk.String("expedita"),
        OriginalStart: sdk.String("voluptatem"),
        PageToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        ShowDeleted: sdk.Bool(false),
        TimeMax: sdk.String("aliquid"),
        TimeMin: sdk.String("beatae"),
        TimeZone: sdk.String("voluptatum"),
        UserIP: sdk.String("omnis"),
    }, operations.CalendarEventsInstancesSecurity{
        Option1: &operations.CalendarEventsInstancesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## CalendarEventsList

Returns events on the specified calendar.

### Example Usage

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
    res, err := s.Events.CalendarEventsList(ctx, operations.CalendarEventsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        AlwaysIncludeEmail: sdk.Bool(false),
        CalendarID: "veritatis",
        EventTypes: []string{
            "est",
            "culpa",
            "voluptatem",
        },
        Fields: sdk.String("sapiente"),
        ICalUID: sdk.String("officiis"),
        Key: sdk.String("architecto"),
        MaxAttendees: sdk.Int64(682119),
        MaxResults: sdk.Int64(867168),
        OauthToken: sdk.String("debitis"),
        OrderBy: operations.CalendarEventsListOrderByEnumStartTime.ToPointer(),
        PageToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        PrivateExtendedProperty: []string{
            "earum",
            "ex",
            "sapiente",
        },
        Q: sdk.String("rem"),
        QuotaUser: sdk.String("minus"),
        SharedExtendedProperty: []string{
            "asperiores",
            "ratione",
        },
        ShowDeleted: sdk.Bool(false),
        ShowHiddenInvitations: sdk.Bool(false),
        SingleEvents: sdk.Bool(false),
        SyncToken: sdk.String("ullam"),
        TimeMax: sdk.String("perferendis"),
        TimeMin: sdk.String("illum"),
        TimeZone: sdk.String("totam"),
        UpdatedMin: sdk.String("impedit"),
        UserIP: sdk.String("quibusdam"),
    }, operations.CalendarEventsListSecurity{
        Option1: &operations.CalendarEventsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## CalendarEventsMove

Moves an event to another calendar, i.e. changes an event's organizer.

### Example Usage

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
    res, err := s.Events.CalendarEventsMove(ctx, operations.CalendarEventsMoveRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "nam",
        Destination: "ipsam",
        EventID: "culpa",
        Fields: sdk.String("dolor"),
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        SendNotifications: sdk.Bool(false),
        SendUpdates: operations.CalendarEventsMoveSendUpdatesEnumAll.ToPointer(),
        UserIP: sdk.String("tempora"),
    }, operations.CalendarEventsMoveSecurity{
        Option1: &operations.CalendarEventsMoveSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## CalendarEventsPatch

Updates an event. This method supports patch semantics.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.CalendarEventsPatch(ctx, operations.CalendarEventsPatchRequest{
        Event: &shared.Event{
            AnyoneCanAddSelf: sdk.Bool(false),
            Attachments: []shared.EventAttachment{
                shared.EventAttachment{
                    FileID: sdk.String("consequatur"),
                    FileURL: sdk.String("architecto"),
                    IconLink: sdk.String("sit"),
                    MimeType: sdk.String("modi"),
                    Title: sdk.String("Mr."),
                },
            },
            Attendees: []shared.EventAttendee{
                shared.EventAttendee{
                    AdditionalGuests: sdk.Int(513760),
                    Comment: sdk.String("quae"),
                    DisplayName: sdk.String("dolor"),
                    Email: sdk.String("Frieda55@hotmail.com"),
                    ID: sdk.String("ece7e253-b668-4451-86c6-e205e16deab3"),
                    Optional: sdk.Bool(false),
                    Organizer: sdk.Bool(false),
                    Resource: sdk.Bool(false),
                    ResponseStatus: sdk.String("doloribus"),
                    Self: sdk.Bool(false),
                },
            },
            AttendeesOmitted: sdk.Bool(false),
            ColorID: sdk.String("repudiandae"),
            ConferenceData: &shared.ConferenceData{
                ConferenceID: sdk.String("optio"),
                ConferenceSolution: &shared.ConferenceSolution{
                    IconURI: sdk.String("occaecati"),
                    Key: &shared.ConferenceSolutionKey{
                        Type: sdk.String("nemo"),
                    },
                    Name: sdk.String("Vickie Nitzsche"),
                },
                CreateRequest: &shared.CreateConferenceRequest{
                    ConferenceSolutionKey: &shared.ConferenceSolutionKey{
                        Type: sdk.String("nemo"),
                    },
                    RequestID: sdk.String("quos"),
                    Status: &shared.ConferenceRequestStatus{
                        StatusCode: sdk.String("eius"),
                    },
                },
                EntryPoints: []shared.EntryPoint{
                    shared.EntryPoint{
                        AccessCode: sdk.String("ducimus"),
                        EntryPointFeatures: []string{
                            "fuga",
                        },
                        EntryPointType: sdk.String("laudantium"),
                        Label: sdk.String("incidunt"),
                        MeetingCode: sdk.String("quasi"),
                        Passcode: sdk.String("rem"),
                        Password: sdk.String("fugiat"),
                        Pin: sdk.String("dicta"),
                        RegionCode: sdk.String("nisi"),
                        URI: sdk.String("http://empty-assembly.name"),
                    },
                },
                Notes: sdk.String("reiciendis"),
                Parameters: &shared.ConferenceParameters{
                    AddOnParameters: &shared.ConferenceParametersAddOnParameters{
                        Parameters: map[string]string{
                            "alias": "omnis",
                            "eos": "occaecati",
                            "iste": "magni",
                        },
                    },
                },
                Signature: sdk.String("inventore"),
            },
            Created: types.MustTimeFromString("2021-03-28T05:10:23.789Z"),
            Creator: &shared.EventCreator{
                DisplayName: sdk.String("voluptatibus"),
                Email: sdk.String("Leola50@hotmail.com"),
                ID: sdk.String("c4d86e68-e4be-4056-813f-59da757a59ec"),
                Self: sdk.Bool(false),
            },
            Description: sdk.String("hic"),
            End: &shared.EventDateTime{
                Date: types.MustDateFromString("2020-01-10"),
                DateTime: types.MustTimeFromString("2022-08-16T11:44:46.779Z"),
                TimeZone: sdk.String("debitis"),
            },
            EndTimeUnspecified: sdk.Bool(false),
            Etag: sdk.String("delectus"),
            EventType: sdk.String("quae"),
            ExtendedProperties: &shared.EventExtendedProperties{
                Private: map[string]string{
                    "fuga": "laborum",
                    "consectetur": "velit",
                    "atque": "ipsum",
                    "impedit": "magni",
                },
                Shared: map[string]string{
                    "repudiandae": "nam",
                    "dolore": "iusto",
                    "voluptate": "sequi",
                },
            },
            Gadget: &shared.EventGadget{
                Display: sdk.String("dignissimos"),
                Height: sdk.Int(205566),
                IconLink: sdk.String("quo"),
                Link: sdk.String("deleniti"),
                Preferences: map[string]string{
                    "iure": "odit",
                    "voluptatibus": "vel",
                    "magnam": "quibusdam",
                    "inventore": "facere",
                },
                Title: sdk.String("Miss"),
                Type: sdk.String("architecto"),
                Width: sdk.Int(975425),
            },
            GuestsCanInviteOthers: sdk.Bool(false),
            GuestsCanModify: sdk.Bool(false),
            GuestsCanSeeOtherGuests: sdk.Bool(false),
            HangoutLink: sdk.String("quia"),
            HTMLLink: sdk.String("porro"),
            ICalUID: sdk.String("aliquam"),
            ID: sdk.String("310661e9-6349-4e1c-b9e0-6e3a437000ae"),
            Kind: sdk.String("ea"),
            Location: sdk.String("quidem"),
            Locked: sdk.Bool(false),
            Organizer: &shared.EventOrganizer{
                DisplayName: sdk.String("voluptas"),
                Email: sdk.String("Raleigh_Mertz95@hotmail.com"),
                ID: sdk.String("759eac55-a974-41d3-9135-2965bb8a7202"),
                Self: sdk.Bool(false),
            },
            OriginalStartTime: &shared.EventDateTime{
                Date: types.MustDateFromString("2022-12-08"),
                DateTime: types.MustTimeFromString("2022-09-26T12:26:41.334Z"),
                TimeZone: sdk.String("neque"),
            },
            PrivateCopy: sdk.Bool(false),
            Recurrence: []string{
                "itaque",
                "et",
            },
            RecurringEventID: sdk.String("ipsum"),
            Reminders: &shared.EventReminders{
                Overrides: []shared.EventReminder{
                    shared.EventReminder{
                        Method: sdk.String("nulla"),
                        Minutes: sdk.Int(714376),
                    },
                    shared.EventReminder{
                        Method: sdk.String("maxime"),
                        Minutes: sdk.Int(157222),
                    },
                    shared.EventReminder{
                        Method: sdk.String("quia"),
                        Minutes: sdk.Int(342137),
                    },
                },
                UseDefault: sdk.Bool(false),
            },
            Sequence: sdk.Int(605712),
            Source: &shared.EventSource{
                Title: sdk.String("Miss"),
                URL: sdk.String("dicta"),
            },
            Start: &shared.EventDateTime{
                Date: types.MustDateFromString("2021-07-18"),
                DateTime: types.MustTimeFromString("2021-02-01T23:29:28.274Z"),
                TimeZone: sdk.String("quos"),
            },
            Status: sdk.String("placeat"),
            Summary: sdk.String("sit"),
            Transparency: sdk.String("iusto"),
            Updated: types.MustTimeFromString("2022-02-01T01:47:57.463Z"),
            Visibility: sdk.String("inventore"),
            WorkingLocationProperties: &shared.EventWorkingLocationProperties{
                CustomLocation: &shared.EventWorkingLocationPropertiesCustomLocation{
                    Label: sdk.String("aperiam"),
                },
                HomeOffice: sdk.String("totam"),
                OfficeLocation: &shared.EventWorkingLocationPropertiesOfficeLocation{
                    BuildingID: sdk.String("dolore"),
                    DeskID: sdk.String("eligendi"),
                    FloorID: sdk.String("distinctio"),
                    FloorSectionID: sdk.String("voluptatem"),
                    Label: sdk.String("autem"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        AlwaysIncludeEmail: sdk.Bool(false),
        CalendarID: "esse",
        ConferenceDataVersion: sdk.Int64(172951),
        EventID: "assumenda",
        Fields: sdk.String("beatae"),
        Key: sdk.String("est"),
        MaxAttendees: sdk.Int64(817339),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        SendNotifications: sdk.Bool(false),
        SendUpdates: operations.CalendarEventsPatchSendUpdatesEnumExternalOnly.ToPointer(),
        SupportsAttachments: sdk.Bool(false),
        UserIP: sdk.String("accusamus"),
    }, operations.CalendarEventsPatchSecurity{
        Option1: &operations.CalendarEventsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## CalendarEventsQuickAdd

Creates an event based on a simple text string.

### Example Usage

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
    res, err := s.Events.CalendarEventsQuickAdd(ctx, operations.CalendarEventsQuickAddRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "necessitatibus",
        Fields: sdk.String("tempore"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        SendNotifications: sdk.Bool(false),
        SendUpdates: operations.CalendarEventsQuickAddSendUpdatesEnumExternalOnly.ToPointer(),
        Text: "rerum",
        UserIP: sdk.String("laudantium"),
    }, operations.CalendarEventsQuickAddSecurity{
        Option1: &operations.CalendarEventsQuickAddSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## CalendarEventsUpdate

Updates an event.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.CalendarEventsUpdate(ctx, operations.CalendarEventsUpdateRequest{
        Event: &shared.Event{
            AnyoneCanAddSelf: sdk.Bool(false),
            Attachments: []shared.EventAttachment{
                shared.EventAttachment{
                    FileID: sdk.String("officiis"),
                    FileURL: sdk.String("voluptatibus"),
                    IconLink: sdk.String("cum"),
                    MimeType: sdk.String("at"),
                    Title: sdk.String("Mr."),
                },
                shared.EventAttachment{
                    FileID: sdk.String("quia"),
                    FileURL: sdk.String("quidem"),
                    IconLink: sdk.String("fuga"),
                    MimeType: sdk.String("repudiandae"),
                    Title: sdk.String("Mr."),
                },
            },
            Attendees: []shared.EventAttendee{
                shared.EventAttendee{
                    AdditionalGuests: sdk.Int(885208),
                    Comment: sdk.String("eos"),
                    DisplayName: sdk.String("quibusdam"),
                    Email: sdk.String("Johnathan35@yahoo.com"),
                    ID: sdk.String("9e3ea4b5-197f-4924-83da-7ce52b895c53"),
                    Optional: sdk.Bool(false),
                    Organizer: sdk.Bool(false),
                    Resource: sdk.Bool(false),
                    ResponseStatus: sdk.String("in"),
                    Self: sdk.Bool(false),
                },
                shared.EventAttendee{
                    AdditionalGuests: sdk.Int(796397),
                    Comment: sdk.String("eum"),
                    DisplayName: sdk.String("modi"),
                    Email: sdk.String("Eliane_Volkman4@yahoo.com"),
                    ID: sdk.String("b34896c3-ca5a-4cfb-a2fd-570757792917"),
                    Optional: sdk.Bool(false),
                    Organizer: sdk.Bool(false),
                    Resource: sdk.Bool(false),
                    ResponseStatus: sdk.String("voluptate"),
                    Self: sdk.Bool(false),
                },
                shared.EventAttendee{
                    AdditionalGuests: sdk.Int(866789),
                    Comment: sdk.String("itaque"),
                    DisplayName: sdk.String("similique"),
                    Email: sdk.String("Gretchen_Hahn@hotmail.com"),
                    ID: sdk.String("cb573409-e3eb-41e5-a2b1-2eb07f116db9"),
                    Optional: sdk.Bool(false),
                    Organizer: sdk.Bool(false),
                    Resource: sdk.Bool(false),
                    ResponseStatus: sdk.String("occaecati"),
                    Self: sdk.Bool(false),
                },
            },
            AttendeesOmitted: sdk.Bool(false),
            ColorID: sdk.String("nemo"),
            ConferenceData: &shared.ConferenceData{
                ConferenceID: sdk.String("aliquam"),
                ConferenceSolution: &shared.ConferenceSolution{
                    IconURI: sdk.String("nostrum"),
                    Key: &shared.ConferenceSolutionKey{
                        Type: sdk.String("doloribus"),
                    },
                    Name: sdk.String("Kirk Haley"),
                },
                CreateRequest: &shared.CreateConferenceRequest{
                    ConferenceSolutionKey: &shared.ConferenceSolutionKey{
                        Type: sdk.String("quas"),
                    },
                    RequestID: sdk.String("totam"),
                    Status: &shared.ConferenceRequestStatus{
                        StatusCode: sdk.String("molestias"),
                    },
                },
                EntryPoints: []shared.EntryPoint{
                    shared.EntryPoint{
                        AccessCode: sdk.String("eaque"),
                        EntryPointFeatures: []string{
                            "architecto",
                            "quos",
                            "iste",
                            "assumenda",
                        },
                        EntryPointType: sdk.String("tempore"),
                        Label: sdk.String("libero"),
                        MeetingCode: sdk.String("velit"),
                        Passcode: sdk.String("doloremque"),
                        Password: sdk.String("delectus"),
                        Pin: sdk.String("impedit"),
                        RegionCode: sdk.String("cum"),
                        URI: sdk.String("http://enraged-thorn.name"),
                    },
                    shared.EntryPoint{
                        AccessCode: sdk.String("doloremque"),
                        EntryPointFeatures: []string{
                            "veniam",
                            "libero",
                        },
                        EntryPointType: sdk.String("architecto"),
                        Label: sdk.String("cupiditate"),
                        MeetingCode: sdk.String("molestiae"),
                        Passcode: sdk.String("eligendi"),
                        Password: sdk.String("possimus"),
                        Pin: sdk.String("non"),
                        RegionCode: sdk.String("magnam"),
                        URI: sdk.String("https://creative-wrist.biz"),
                    },
                },
                Notes: sdk.String("consequuntur"),
                Parameters: &shared.ConferenceParameters{
                    AddOnParameters: &shared.ConferenceParametersAddOnParameters{
                        Parameters: map[string]string{
                            "laudantium": "odit",
                            "pariatur": "amet",
                            "exercitationem": "ab",
                            "velit": "facilis",
                        },
                    },
                },
                Signature: sdk.String("tempore"),
            },
            Created: types.MustTimeFromString("2022-01-09T04:56:37.970Z"),
            Creator: &shared.EventCreator{
                DisplayName: sdk.String("quaerat"),
                Email: sdk.String("Milford.Huel@yahoo.com"),
                ID: sdk.String("bcdb35ff-2e4b-4275-b7a8-cd9e7319c177"),
                Self: sdk.Bool(false),
            },
            Description: sdk.String("fugiat"),
            End: &shared.EventDateTime{
                Date: types.MustDateFromString("2022-11-12"),
                DateTime: types.MustTimeFromString("2022-01-13T17:49:01.077Z"),
                TimeZone: sdk.String("iusto"),
            },
            EndTimeUnspecified: sdk.Bool(false),
            Etag: sdk.String("dignissimos"),
            EventType: sdk.String("libero"),
            ExtendedProperties: &shared.EventExtendedProperties{
                Private: map[string]string{
                    "ab": "incidunt",
                },
                Shared: map[string]string{
                    "saepe": "tempore",
                    "veniam": "eos",
                    "reiciendis": "earum",
                    "reprehenderit": "praesentium",
                },
            },
            Gadget: &shared.EventGadget{
                Display: sdk.String("nemo"),
                Height: sdk.Int(999809),
                IconLink: sdk.String("quisquam"),
                Link: sdk.String("sequi"),
                Preferences: map[string]string{
                    "deleniti": "illo",
                    "labore": "assumenda",
                },
                Title: sdk.String("Mrs."),
                Type: sdk.String("quisquam"),
                Width: sdk.Int(591065),
            },
            GuestsCanInviteOthers: sdk.Bool(false),
            GuestsCanModify: sdk.Bool(false),
            GuestsCanSeeOtherGuests: sdk.Bool(false),
            HangoutLink: sdk.String("laudantium"),
            HTMLLink: sdk.String("repudiandae"),
            ICalUID: sdk.String("consequatur"),
            ID: sdk.String("c2bb89eb-75da-4d63-ac60-0503d8bb3118"),
            Kind: sdk.String("doloremque"),
            Location: sdk.String("earum"),
            Locked: sdk.Bool(false),
            Organizer: &shared.EventOrganizer{
                DisplayName: sdk.String("iusto"),
                Email: sdk.String("Lacy_Pagac92@gmail.com"),
                ID: sdk.String("057eb809-e281-4033-9f39-81d4c700b607"),
                Self: sdk.Bool(false),
            },
            OriginalStartTime: &shared.EventDateTime{
                Date: types.MustDateFromString("2022-04-09"),
                DateTime: types.MustTimeFromString("2021-03-27T10:34:01.168Z"),
                TimeZone: sdk.String("consectetur"),
            },
            PrivateCopy: sdk.Bool(false),
            Recurrence: []string{
                "dignissimos",
                "consectetur",
                "soluta",
                "natus",
            },
            RecurringEventID: sdk.String("temporibus"),
            Reminders: &shared.EventReminders{
                Overrides: []shared.EventReminder{
                    shared.EventReminder{
                        Method: sdk.String("amet"),
                        Minutes: sdk.Int(948541),
                    },
                    shared.EventReminder{
                        Method: sdk.String("aspernatur"),
                        Minutes: sdk.Int(778276),
                    },
                    shared.EventReminder{
                        Method: sdk.String("itaque"),
                        Minutes: sdk.Int(848346),
                    },
                },
                UseDefault: sdk.Bool(false),
            },
            Sequence: sdk.Int(670762),
            Source: &shared.EventSource{
                Title: sdk.String("Ms."),
                URL: sdk.String("vero"),
            },
            Start: &shared.EventDateTime{
                Date: types.MustDateFromString("2022-10-08"),
                DateTime: types.MustTimeFromString("2022-08-13T01:51:09.877Z"),
                TimeZone: sdk.String("explicabo"),
            },
            Status: sdk.String("exercitationem"),
            Summary: sdk.String("nihil"),
            Transparency: sdk.String("non"),
            Updated: types.MustTimeFromString("2022-12-05T10:40:26.460Z"),
            Visibility: sdk.String("hic"),
            WorkingLocationProperties: &shared.EventWorkingLocationProperties{
                CustomLocation: &shared.EventWorkingLocationPropertiesCustomLocation{
                    Label: sdk.String("deserunt"),
                },
                HomeOffice: sdk.String("delectus"),
                OfficeLocation: &shared.EventWorkingLocationPropertiesOfficeLocation{
                    BuildingID: sdk.String("non"),
                    DeskID: sdk.String("distinctio"),
                    FloorID: sdk.String("in"),
                    FloorSectionID: sdk.String("exercitationem"),
                    Label: sdk.String("labore"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        AlwaysIncludeEmail: sdk.Bool(false),
        CalendarID: "numquam",
        ConferenceDataVersion: sdk.Int64(921193),
        EventID: "modi",
        Fields: sdk.String("in"),
        Key: sdk.String("explicabo"),
        MaxAttendees: sdk.Int64(879857),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        SendNotifications: sdk.Bool(false),
        SendUpdates: operations.CalendarEventsUpdateSendUpdatesEnumAll.ToPointer(),
        SupportsAttachments: sdk.Bool(false),
        UserIP: sdk.String("deleniti"),
    }, operations.CalendarEventsUpdateSecurity{
        Option1: &operations.CalendarEventsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## CalendarEventsWatch

Watch for changes to Events resources.

### Example Usage

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
    res, err := s.Events.CalendarEventsWatch(ctx, operations.CalendarEventsWatchRequest{
        Channel: &shared.Channel{
            Address: sdk.String("46373 Dixie Key"),
            Expiration: sdk.String("nesciunt"),
            ID: sdk.String("a7d575f1-400e-4764-ad73-34ec1b781b36"),
            Kind: sdk.String("fuga"),
            Params: map[string]string{
                "rem": "aut",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("quos"),
            ResourceURI: sdk.String("laudantium"),
            Token: sdk.String("repellendus"),
            Type: sdk.String("veritatis"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        AlwaysIncludeEmail: sdk.Bool(false),
        CalendarID: "quae",
        EventTypes: []string{
            "saepe",
        },
        Fields: sdk.String("delectus"),
        ICalUID: sdk.String("mollitia"),
        Key: sdk.String("nulla"),
        MaxAttendees: sdk.Int64(640907),
        MaxResults: sdk.Int64(152027),
        OauthToken: sdk.String("voluptatem"),
        OrderBy: operations.CalendarEventsWatchOrderByEnumStartTime.ToPointer(),
        PageToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        PrivateExtendedProperty: []string{
            "voluptatem",
            "incidunt",
            "qui",
            "qui",
        },
        Q: sdk.String("necessitatibus"),
        QuotaUser: sdk.String("harum"),
        SharedExtendedProperty: []string{
            "beatae",
        },
        ShowDeleted: sdk.Bool(false),
        ShowHiddenInvitations: sdk.Bool(false),
        SingleEvents: sdk.Bool(false),
        SyncToken: sdk.String("aliquid"),
        TimeMax: sdk.String("modi"),
        TimeMin: sdk.String("optio"),
        TimeZone: sdk.String("voluptatibus"),
        UpdatedMin: sdk.String("molestias"),
        UserIP: sdk.String("officia"),
    }, operations.CalendarEventsWatchSecurity{
        Option1: &operations.CalendarEventsWatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```
