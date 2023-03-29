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

    req := operations.RetrieveNEOFeedTodayRequest{
        QueryParams: operations.RetrieveNEOFeedTodayQueryParams{
            Detailed: false,
        },
    }

    ctx := context.Background()
    res, err := s.Feed.RetrieveNEOFeedToday(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NearEarthObjectList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->