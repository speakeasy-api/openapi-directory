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
        Security: operations.GetEventsV3EventsGetPageSecurity{
            Hapikey: &shared.SchemeHapikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetEventsV3EventsGetPageQueryParams{
            After: "corrupti",
            Before: "provident",
            EventType: "distinctio",
            Limit: 844266,
            ObjectID: 602763,
            ObjectType: "nulla",
            OccurredAfter: "2022-09-12T05:55:26.571Z",
            OccurredBefore: "2022-05-24T21:10:31.969Z",
            Sort: []string{
                "error",
                "deserunt",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Events.GetEventsV3EventsGetPage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseExternalUnifiedEvent != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->