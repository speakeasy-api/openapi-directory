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
    
    req := operations.GlobalpageloadRequest{
        QueryParams: operations.GlobalpageloadQueryParams{
            License: "sit",
            Origin: "voluptas",
            URL: "culpa",
        },
    }
    
    res, err := s.PageLoadPerformanceTime.Globalpageload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Globalpageload200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->