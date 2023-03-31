<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetEventsV3EventsGetPageRequest{
        After: "corrupti",
        Before: "provident",
        EventType: "distinctio",
        Limit: 844266,
        ObjectID: 602763,
        ObjectType: "nulla",
        OccurredAfter: "2021-04-22T12:08:58.275Z",
        OccurredBefore: "2022-05-18T09:34:54.894Z",
        Sort: []string{
            "suscipit",
            "iure",
            "magnam",
        },
    }

    ctx := context.Background()
    res, err := s.Events.GetEventsV3EventsGetPage(ctx, req, operations.GetEventsV3EventsGetPageSecurity{
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