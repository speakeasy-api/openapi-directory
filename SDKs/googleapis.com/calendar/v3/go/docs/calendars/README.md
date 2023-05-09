# Calendars

### Available Operations

* [CalendarCalendarsClear](#calendarcalendarsclear) - Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
* [CalendarCalendarsDelete](#calendarcalendarsdelete) - Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
* [CalendarCalendarsGet](#calendarcalendarsget) - Returns metadata for a calendar.
* [CalendarCalendarsInsert](#calendarcalendarsinsert) - Creates a secondary calendar.
* [CalendarCalendarsPatch](#calendarcalendarspatch) - Updates metadata for a calendar. This method supports patch semantics.
* [CalendarCalendarsUpdate](#calendarcalendarsupdate) - Updates metadata for a calendar.

## CalendarCalendarsClear

Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.

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
    res, err := s.Calendars.CalendarCalendarsClear(ctx, operations.CalendarCalendarsClearRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "incidunt",
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UserIP: sdk.String("aliquid"),
    }, operations.CalendarCalendarsClearSecurity{
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

## CalendarCalendarsDelete

Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.

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
    res, err := s.Calendars.CalendarCalendarsDelete(ctx, operations.CalendarCalendarsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "quam",
        Fields: sdk.String("molestias"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UserIP: sdk.String("fugit"),
    }, operations.CalendarCalendarsDeleteSecurity{
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

## CalendarCalendarsGet

Returns metadata for a calendar.

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
    res, err := s.Calendars.CalendarCalendarsGet(ctx, operations.CalendarCalendarsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "magni",
        Fields: sdk.String("odio"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UserIP: sdk.String("hic"),
    }, operations.CalendarCalendarsGetSecurity{
        Option1: &operations.CalendarCalendarsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calendar != nil {
        // handle response
    }
}
```

## CalendarCalendarsInsert

Creates a secondary calendar.

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
    res, err := s.Calendars.CalendarCalendarsInsert(ctx, operations.CalendarCalendarsInsertRequest{
        Calendar: &shared.Calendar{
            ConferenceProperties: &shared.ConferenceProperties{
                AllowedConferenceSolutionTypes: []string{
                    "cumque",
                },
            },
            Description: sdk.String("soluta"),
            Etag: sdk.String("nobis"),
            ID: sdk.String("1e31b8b9-0f34-443a-9108-e0adcf4b9218"),
            Kind: sdk.String("odio"),
            Location: sdk.String("occaecati"),
            Summary: sdk.String("voluptatibus"),
            TimeZone: sdk.String("quisquam"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("vero"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UserIP: sdk.String("delectus"),
    }, operations.CalendarCalendarsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calendar != nil {
        // handle response
    }
}
```

## CalendarCalendarsPatch

Updates metadata for a calendar. This method supports patch semantics.

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
    res, err := s.Calendars.CalendarCalendarsPatch(ctx, operations.CalendarCalendarsPatchRequest{
        Calendar: &shared.Calendar{
            ConferenceProperties: &shared.ConferenceProperties{
                AllowedConferenceSolutionTypes: []string{
                    "consectetur",
                    "vero",
                },
            },
            Description: sdk.String("tenetur"),
            Etag: sdk.String("dignissimos"),
            ID: sdk.String("fbc7abd7-4dd3-49c0-b5d2-cff7c70a4562"),
            Kind: sdk.String("vel"),
            Location: sdk.String("possimus"),
            Summary: sdk.String("magnam"),
            TimeZone: sdk.String("ratione"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "ex",
        Fields: sdk.String("laudantium"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UserIP: sdk.String("quasi"),
    }, operations.CalendarCalendarsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calendar != nil {
        // handle response
    }
}
```

## CalendarCalendarsUpdate

Updates metadata for a calendar.

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
    res, err := s.Calendars.CalendarCalendarsUpdate(ctx, operations.CalendarCalendarsUpdateRequest{
        Calendar: &shared.Calendar{
            ConferenceProperties: &shared.ConferenceProperties{
                AllowedConferenceSolutionTypes: []string{
                    "nulla",
                    "excepturi",
                },
            },
            Description: sdk.String("voluptatibus"),
            Etag: sdk.String("nostrum"),
            ID: sdk.String("fce6c556-146c-43e2-90fb-008c42e141aa"),
            Kind: sdk.String("placeat"),
            Location: sdk.String("velit"),
            Summary: sdk.String("eum"),
            TimeZone: sdk.String("autem"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "nobis",
        Fields: sdk.String("quas"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UserIP: sdk.String("libero"),
    }, operations.CalendarCalendarsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calendar != nil {
        // handle response
    }
}
```
