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
    
    req := operations.GetAddressRequest{
        PathParams: operations.GetAddressPathParams{
            Address: "sit",
        },
    }
    
    res, err := s.GetAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddress200ApplicationJSONAny != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->