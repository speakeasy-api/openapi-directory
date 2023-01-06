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
    
    res, err := s.JobFeed.GetIndustries(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Industries != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->