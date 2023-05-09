# Preflight

### Available Operations

* [AutoCheckIn](#autocheckin) - Auto Check-In

## AutoCheckIn

Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Preflight.AutoCheckIn(ctx, operations.AutoCheckInRequest{
        Accept: "odit",
        EmailAddress: "quo",
        Ticketnumber: "sequi",
    }, operations.AutoCheckInSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutoCheckIn200ApplicationJSONString != nil {
        // handle response
    }
}
```
