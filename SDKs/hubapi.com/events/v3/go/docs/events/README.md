# Events

### Available Operations

* [GetEventsV3EventsGetPage](#geteventsv3eventsgetpage) - Returns a collection of events matching a query.

## GetEventsV3EventsGetPage

Returns a collection of events matching a query.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.GetEventsV3EventsGetPage(ctx, operations.GetEventsV3EventsGetPageRequest{
        After: sdk.String("debitis"),
        Before: sdk.String("ipsa"),
        EventType: sdk.String("delectus"),
        Limit: sdk.Int(272656),
        ObjectID: sdk.Int64(383441),
        ObjectType: sdk.String("molestiae"),
        OccurredAfter: types.MustTimeFromString("2020-07-25T16:12:20.938Z"),
        OccurredBefore: types.MustTimeFromString("2022-01-15T14:47:59.325Z"),
        Sort: []string{
            "nisi",
            "recusandae",
            "temporibus",
        },
    }, operations.GetEventsV3EventsGetPageSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseExternalUnifiedEvent != nil {
        // handle response
    }
}
```
