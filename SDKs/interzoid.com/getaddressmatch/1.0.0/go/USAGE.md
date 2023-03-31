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

    req := operations.GetaddressmatchRequest{
        Address: "5786 Little Streets",
        License: "vel",
    }

    ctx := context.Background()
    res, err := s.StreetAddressSimilarityKey.Getaddressmatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getaddressmatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->