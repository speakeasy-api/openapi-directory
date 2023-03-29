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

    req := operations.GetcompanymatchRequest{
        QueryParams: operations.GetcompanymatchQueryParams{
            Company: "Medhurst - Rau",
            License: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.CompanyNameSimilarityKey.Getcompanymatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcompanymatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->