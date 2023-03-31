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

    req := operations.GroundhogRequest{
        Slug: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Groundhogs.Groundhog(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Groundhog200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->