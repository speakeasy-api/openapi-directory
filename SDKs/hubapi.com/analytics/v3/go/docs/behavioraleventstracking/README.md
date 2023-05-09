# BehavioralEventsTracking

### Available Operations

* [PostEventsV3Send](#posteventsv3send) - Sends Custom Behavioral Event

## PostEventsV3Send

Endpoint to send an instance of a behavioral event

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BehavioralEventsTracking.PostEventsV3Send(ctx, shared.BehavioralEventHTTPCompletionRequest{
        Email: sdk.String("Jasper_Schiller47@yahoo.com"),
        EventName: "excepturi",
        ObjectID: sdk.String("nisi"),
        OccurredAt: types.MustTimeFromString("2020-06-29T11:50:59.674Z"),
        Properties: map[string]string{
            "quis": "veritatis",
        },
        Utk: sdk.String("deserunt"),
    }, operations.PostEventsV3SendSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
