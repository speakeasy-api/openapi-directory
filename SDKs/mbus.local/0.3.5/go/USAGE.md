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
            Address: "sit",
            Baudrate: 2259404117704393152,
            Device: "culpa",
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