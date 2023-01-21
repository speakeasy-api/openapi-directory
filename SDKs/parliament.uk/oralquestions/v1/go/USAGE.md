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
    
    req := operations.PublishedEarlyDayMotionGetRequest{
        PathParams: operations.PublishedEarlyDayMotionGetPathParams{
            ID: 8717895732742165505,
        },
    }
    
    res, err := s.EarlyDayMotions.PublishedEarlyDayMotionGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseListPublishedWrittenQuestion != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->