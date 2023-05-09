<!-- Start SDK Example Usage -->
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
        After: sdk.String("corrupti"),
        Before: sdk.String("provident"),
        EventType: sdk.String("distinctio"),
        Limit: sdk.Int(844266),
        ObjectID: sdk.Int64(602763),
        ObjectType: sdk.String("nulla"),
        OccurredAfter: types.MustTimeFromString("2021-04-22T12:08:58.275Z"),
        OccurredBefore: types.MustTimeFromString("2022-05-18T09:34:54.894Z"),
        Sort: []string{
            "suscipit",
            "iure",
            "magnam",
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
<!-- End SDK Example Usage -->