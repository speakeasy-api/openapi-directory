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

    req := operations.ConvertRequestBody{
        Filename: "corrupti",
        Source: "provident",
        Validate: "on",
    }

    ctx := context.Background()
    res, err := s.Conversion.Convert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Convert200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->