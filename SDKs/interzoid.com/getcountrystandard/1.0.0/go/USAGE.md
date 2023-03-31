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

    req := operations.GetcountrystandardRequest{
        Country: "Malta",
        License: "provident",
    }

    ctx := context.Background()
    res, err := s.CountryNameStandardization.Getcountrystandard(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcountrystandard200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->