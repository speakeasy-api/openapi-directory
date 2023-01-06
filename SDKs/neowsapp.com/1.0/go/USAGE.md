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
    
    req := operations.RetrieveNeoFeedTodayRequest{
        QueryParams: operations.RetrieveNeoFeedTodayQueryParams{
            Detailed: false,
        },
    }
    
    res, err := s.Feed.RetrieveNeoFeedToday(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NearEarthObjectList != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->