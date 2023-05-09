# TimeZones

### Available Operations

* [GetTimeZones](#gettimezones) - List time zones

## GetTimeZones

Lists time zones.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TimeZones.GetTimeZones(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TimeZones != nil {
        // handle response
    }
}
```
