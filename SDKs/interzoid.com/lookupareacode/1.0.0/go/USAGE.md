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

    req := operations.GetareacodeRequest{
        QueryParams: operations.GetareacodeQueryParams{
            Areacode: "unde",
            License: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.AreaCodeInformation.Getareacode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getareacode200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->