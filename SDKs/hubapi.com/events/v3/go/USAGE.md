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
            After: "ipsam",
            Before: "officiis",
            EventType: "provident",
            Limit: 7492293258674483729,
            ObjectID: 1927730073196289851,
            ObjectType: "et",
            OccurredAfter: "2002-08-18T04:42:39Z",
            OccurredBefore: "1973-12-10T01:51:21Z",
            Sort: []string{
                "qui",
                "eaque",
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