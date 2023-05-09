# CalendarList

### Available Operations

* [CalendarCalendarListDelete](#calendarcalendarlistdelete) - Removes a calendar from the user's calendar list.
* [CalendarCalendarListGet](#calendarcalendarlistget) - Returns a calendar from the user's calendar list.
* [CalendarCalendarListInsert](#calendarcalendarlistinsert) - Inserts an existing calendar into the user's calendar list.
* [CalendarCalendarListList](#calendarcalendarlistlist) - Returns the calendars on the user's calendar list.
* [CalendarCalendarListPatch](#calendarcalendarlistpatch) - Updates an existing calendar on the user's calendar list. This method supports patch semantics.
* [CalendarCalendarListUpdate](#calendarcalendarlistupdate) - Updates an existing calendar on the user's calendar list.
* [CalendarCalendarListWatch](#calendarcalendarlistwatch) - Watch for changes to CalendarList resources.

## CalendarCalendarListDelete

Removes a calendar from the user's calendar list.

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
    res, err := s.CalendarList.CalendarCalendarListDelete(ctx, operations.CalendarCalendarListDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "in",
        Fields: sdk.String("in"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UserIP: sdk.String("dicta"),
    }, operations.CalendarCalendarListDeleteSecurity{
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

## CalendarCalendarListGet

Returns a calendar from the user's calendar list.

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
    res, err := s.CalendarList.CalendarCalendarListGet(ctx, operations.CalendarCalendarListGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "magnam",
        Fields: sdk.String("cumque"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UserIP: sdk.String("laborum"),
    }, operations.CalendarCalendarListGetSecurity{
        Option1: &operations.CalendarCalendarListGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarListEntry != nil {
        // handle response
    }
}
```

## CalendarCalendarListInsert

Inserts an existing calendar into the user's calendar list.

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
    res, err := s.CalendarList.CalendarCalendarListInsert(ctx, operations.CalendarCalendarListInsertRequest{
        CalendarListEntry: &shared.CalendarListEntry{
            AccessRole: sdk.String("accusamus"),
            BackgroundColor: sdk.String("non"),
            ColorID: sdk.String("occaecati"),
            ConferenceProperties: &shared.ConferenceProperties{
                AllowedConferenceSolutionTypes: []string{
                    "accusamus",
                    "delectus",
                },
            },
            DefaultReminders: []shared.EventReminder{
                shared.EventReminder{
                    Method: sdk.String("provident"),
                    Minutes: sdk.Int(725255),
                },
                shared.EventReminder{
                    Method: sdk.String("id"),
                    Minutes: sdk.Int(501324),
                },
                shared.EventReminder{
                    Method: sdk.String("deleniti"),
                    Minutes: sdk.Int(956084),
                },
            },
            Deleted: sdk.Bool(false),
            Description: sdk.String("amet"),
            Etag: sdk.String("deserunt"),
            ForegroundColor: sdk.String("nisi"),
            Hidden: sdk.Bool(false),
            ID: sdk.String("6997074b-a446-49b6-a214-1959890afa56"),
            Kind: sdk.String("dolor"),
            Location: sdk.String("necessitatibus"),
            NotificationSettings: &shared.CalendarListEntryNotificationSettings{
                Notifications: []shared.CalendarNotification{
                    shared.CalendarNotification{
                        Method: sdk.String("nemo"),
                        Type: sdk.String("quasi"),
                    },
                },
            },
            Primary: sdk.Bool(false),
            Selected: sdk.Bool(false),
            Summary: sdk.String("iure"),
            SummaryOverride: sdk.String("doloribus"),
            TimeZone: sdk.String("debitis"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        ColorRgbFormat: sdk.Bool(false),
        Fields: sdk.String("eius"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UserIP: sdk.String("in"),
    }, operations.CalendarCalendarListInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarListEntry != nil {
        // handle response
    }
}
```

## CalendarCalendarListList

Returns the calendars on the user's calendar list.

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
    res, err := s.CalendarList.CalendarCalendarListList(ctx, operations.CalendarCalendarListListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("architecto"),
        Key: sdk.String("architecto"),
        MaxResults: sdk.Int64(919483),
        MinAccessRole: operations.CalendarCalendarListListMinAccessRoleEnumOwner.ToPointer(),
        OauthToken: sdk.String("expedita"),
        PageToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        ShowDeleted: sdk.Bool(false),
        ShowHidden: sdk.Bool(false),
        SyncToken: sdk.String("quibusdam"),
        UserIP: sdk.String("sed"),
    }, operations.CalendarCalendarListListSecurity{
        Option1: &operations.CalendarCalendarListListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarList != nil {
        // handle response
    }
}
```

## CalendarCalendarListPatch

Updates an existing calendar on the user's calendar list. This method supports patch semantics.

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
    res, err := s.CalendarList.CalendarCalendarListPatch(ctx, operations.CalendarCalendarListPatchRequest{
        CalendarListEntry: &shared.CalendarListEntry{
            AccessRole: sdk.String("saepe"),
            BackgroundColor: sdk.String("pariatur"),
            ColorID: sdk.String("accusantium"),
            ConferenceProperties: &shared.ConferenceProperties{
                AllowedConferenceSolutionTypes: []string{
                    "praesentium",
                },
            },
            DefaultReminders: []shared.EventReminder{
                shared.EventReminder{
                    Method: sdk.String("magni"),
                    Minutes: sdk.Int(123820),
                },
                shared.EventReminder{
                    Method: sdk.String("quo"),
                    Minutes: sdk.Int(848009),
                },
                shared.EventReminder{
                    Method: sdk.String("pariatur"),
                    Minutes: sdk.Int(807319),
                },
            },
            Deleted: sdk.Bool(false),
            Description: sdk.String("ea"),
            Etag: sdk.String("excepturi"),
            ForegroundColor: sdk.String("odit"),
            Hidden: sdk.Bool(false),
            ID: sdk.String("601fb576-b0d5-4f0d-b0c5-fbb258705320"),
            Kind: sdk.String("dolores"),
            Location: sdk.String("minus"),
            NotificationSettings: &shared.CalendarListEntryNotificationSettings{
                Notifications: []shared.CalendarNotification{
                    shared.CalendarNotification{
                        Method: sdk.String("dolor"),
                        Type: sdk.String("vero"),
                    },
                    shared.CalendarNotification{
                        Method: sdk.String("nostrum"),
                        Type: sdk.String("hic"),
                    },
                },
            },
            Primary: sdk.Bool(false),
            Selected: sdk.Bool(false),
            Summary: sdk.String("recusandae"),
            SummaryOverride: sdk.String("omnis"),
            TimeZone: sdk.String("facilis"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "perspiciatis",
        ColorRgbFormat: sdk.Bool(false),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UserIP: sdk.String("error"),
    }, operations.CalendarCalendarListPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarListEntry != nil {
        // handle response
    }
}
```

## CalendarCalendarListUpdate

Updates an existing calendar on the user's calendar list.

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
    res, err := s.CalendarList.CalendarCalendarListUpdate(ctx, operations.CalendarCalendarListUpdateRequest{
        CalendarListEntry: &shared.CalendarListEntry{
            AccessRole: sdk.String("eaque"),
            BackgroundColor: sdk.String("occaecati"),
            ColorID: sdk.String("rerum"),
            ConferenceProperties: &shared.ConferenceProperties{
                AllowedConferenceSolutionTypes: []string{
                    "asperiores",
                },
            },
            DefaultReminders: []shared.EventReminder{
                shared.EventReminder{
                    Method: sdk.String("modi"),
                    Minutes: sdk.Int(613966),
                },
                shared.EventReminder{
                    Method: sdk.String("dolorum"),
                    Minutes: sdk.Int(535633),
                },
                shared.EventReminder{
                    Method: sdk.String("pariatur"),
                    Minutes: sdk.Int(589910),
                },
                shared.EventReminder{
                    Method: sdk.String("nobis"),
                    Minutes: sdk.Int(730122),
                },
            },
            Deleted: sdk.Bool(false),
            Description: sdk.String("delectus"),
            Etag: sdk.String("quaerat"),
            ForegroundColor: sdk.String("quos"),
            Hidden: sdk.Bool(false),
            ID: sdk.String("633323f9-b77f-43a4-9006-74ebf69280d1"),
            Kind: sdk.String("soluta"),
            Location: sdk.String("dolorum"),
            NotificationSettings: &shared.CalendarListEntryNotificationSettings{
                Notifications: []shared.CalendarNotification{
                    shared.CalendarNotification{
                        Method: sdk.String("voluptate"),
                        Type: sdk.String("dolorum"),
                    },
                    shared.CalendarNotification{
                        Method: sdk.String("deleniti"),
                        Type: sdk.String("omnis"),
                    },
                },
            },
            Primary: sdk.Bool(false),
            Selected: sdk.Bool(false),
            Summary: sdk.String("necessitatibus"),
            SummaryOverride: sdk.String("distinctio"),
            TimeZone: sdk.String("asperiores"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "nihil",
        ColorRgbFormat: sdk.Bool(false),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UserIP: sdk.String("eius"),
    }, operations.CalendarCalendarListUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarListEntry != nil {
        // handle response
    }
}
```

## CalendarCalendarListWatch

Watch for changes to CalendarList resources.

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
    res, err := s.CalendarList.CalendarCalendarListWatch(ctx, operations.CalendarCalendarListWatchRequest{
        Channel: &shared.Channel{
            Address: sdk.String("02783 Hoppe Pines"),
            Expiration: sdk.String("provident"),
            ID: sdk.String("5d8a0d44-6ce2-4af7-a73c-f3be453f870b"),
            Kind: sdk.String("neque"),
            Params: map[string]string{
                "vel": "libero",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("voluptas"),
            ResourceURI: sdk.String("deserunt"),
            Token: sdk.String("quam"),
            Type: sdk.String("ipsum"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("qui"),
        MaxResults: sdk.Int64(586784),
        MinAccessRole: operations.CalendarCalendarListWatchMinAccessRoleEnumWriter.ToPointer(),
        OauthToken: sdk.String("pariatur"),
        PageToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        ShowDeleted: sdk.Bool(false),
        ShowHidden: sdk.Bool(false),
        SyncToken: sdk.String("laborum"),
        UserIP: sdk.String("totam"),
    }, operations.CalendarCalendarListWatchSecurity{
        Option1: &operations.CalendarCalendarListWatchSecurityOption1{
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
