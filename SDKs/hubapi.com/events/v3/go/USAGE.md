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
            After: "unde",
            Before: "deserunt",
            EventType: "porro",
            Limit: 844266,
            ObjectID: 602763,
            ObjectType: "vero",
            OccurredAfter: "2022-09-11T15:33:40.095Z",
            OccurredBefore: "2022-05-24T06:48:45.493Z",
            Sort: []string{
                "fuga",
                "facilis",
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