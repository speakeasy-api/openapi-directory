# Schedule

### Available Operations

* [ListSchedule](#listschedule) - Schedule Collection

## ListSchedule

The schedule endpoint produces a linear TV schedule for a given channel and date range.

 - The date range supplied must be no larger than 21 days.
 - If no end data is passed the API will default to start date + 24 hours.

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
    res, err := s.Schedule.ListSchedule(ctx, operations.ListScheduleRequest{
        Aliases: sdk.Bool(false),
        ChannelID: "deserunt",
        End: sdk.String("perferendis"),
        Start: "ipsam",
    }, operations.ListScheduleSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSchedule200ApplicationJSONObject != nil {
        // handle response
    }
}
```
