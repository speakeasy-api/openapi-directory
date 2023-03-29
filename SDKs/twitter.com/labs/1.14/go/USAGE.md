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

    ctx := context.Background()
    res, err := s.General.GetOpenAPISpec(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOpenAPISpec200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->