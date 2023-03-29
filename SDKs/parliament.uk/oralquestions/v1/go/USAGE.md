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

    req := operations.PublishedEarlyDayMotionGetRequest{
        PathParams: operations.PublishedEarlyDayMotionGetPathParams{
            ID: 548814,
        },
    }

    ctx := context.Background()
    res, err := s.EarlyDayMotions.PublishedEarlyDayMotionGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseListPublishedWrittenQuestion != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->