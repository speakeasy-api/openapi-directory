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

    req := operations.GetglobaltimeRequest{
        QueryParams: operations.GetglobaltimeQueryParams{
            License: "corrupti",
            Locale: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.CurrentGlobalTime.Getglobaltime(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getglobaltime200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->