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
    res, err := s.EarlyDayMotions.PublishedEarlyDayMotionGet(ctx, operations.PublishedEarlyDayMotionGetRequest{
        ID: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseListPublishedWrittenQuestion != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->