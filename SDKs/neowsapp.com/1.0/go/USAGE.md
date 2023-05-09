<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Feed.RetrieveNEOFeedToday(ctx, operations.RetrieveNEOFeedTodayRequest{
        Detailed: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NearEarthObjectList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->