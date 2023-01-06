<!-- Start SDK Example Usage -->
```go
package main

import (
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
            After: "esse",
            Before: "quia",
            EventType: "non",
            Limit: 5080100845609098235,
            ObjectID: 8723349048109278699,
            ObjectType: "deserunt",
            OccurredAfter: "2019-12-27T23:33:44Z",
            OccurredBefore: "2015-03-11T00:35:51Z",
            Sort: []string{
                "beatae",
                "et",
            },
        },
    }
    
    res, err := s.Events.GetEventsV3EventsGetPage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseExternalUnifiedEvent != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->