# Freebusy

### Available Operations

* [CalendarFreebusyQuery](#calendarfreebusyquery) - Returns free/busy information for a set of calendars.

## CalendarFreebusyQuery

Returns free/busy information for a set of calendars.

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
    res, err := s.Freebusy.CalendarFreebusyQuery(ctx, operations.CalendarFreebusyQueryRequest{
        FreeBusyRequest: &shared.FreeBusyRequest{
            CalendarExpansionMax: sdk.Int(730478),
            GroupExpansionMax: sdk.Int(520678),
            Items: []shared.FreeBusyRequestItem{
                shared.FreeBusyRequestItem{
                    ID: sdk.String("66c723ff-da9e-406b-ae48-25c1fc0e115c"),
                },
            },
            TimeMax: types.MustTimeFromString("2022-12-19T13:06:00.021Z"),
            TimeMin: types.MustTimeFromString("2021-01-25T01:11:52.226Z"),
            TimeZone: sdk.String("a"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("iste"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UserIP: sdk.String("dolore"),
    }, operations.CalendarFreebusyQuerySecurity{
        Option1: &operations.CalendarFreebusyQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FreeBusyResponse != nil {
        // handle response
    }
}
```
