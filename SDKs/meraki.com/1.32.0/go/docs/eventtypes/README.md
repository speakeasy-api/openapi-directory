# EventTypes

### Available Operations

* [GetNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description

## GetNetworkEventsEventTypes

List the event type to human-readable description

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.EventTypes.GetNetworkEventsEventTypes(ctx, operations.GetNetworkEventsEventTypesRequest{
        NetworkID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkEventsEventTypes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
