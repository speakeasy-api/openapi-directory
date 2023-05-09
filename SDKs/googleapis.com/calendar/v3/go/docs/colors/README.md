# Colors

### Available Operations

* [CalendarColorsGet](#calendarcolorsget) - Returns the color definitions for calendars and events.

## CalendarColorsGet

Returns the color definitions for calendars and events.

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
    res, err := s.Colors.CalendarColorsGet(ctx, operations.CalendarColorsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UserIP: sdk.String("commodi"),
    }, operations.CalendarColorsGetSecurity{
        Option1: &operations.CalendarColorsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Colors != nil {
        // handle response
    }
}
```
