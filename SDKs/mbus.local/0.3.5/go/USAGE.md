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

    req := operations.GetRequest{
        PathParams: operations.GetPathParams{
            Address: "48",
            Baudrate: "2400",
            Device: "ttyAMA0",
        },
    }

    ctx := context.Background()
    res, err := s.Get(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MbusData != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->