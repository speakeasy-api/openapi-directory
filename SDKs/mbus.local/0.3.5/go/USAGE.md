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
    
    req := operations.GetRequest{
        PathParams: operations.GetPathParams{
            Address: "ullam",
            Baudrate: 3085496434280478611,
            Device: "aperiam",
        },
    }
    
    res, err := s.Get(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MbusData != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->