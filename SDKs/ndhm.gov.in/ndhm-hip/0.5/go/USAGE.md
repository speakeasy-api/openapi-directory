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
    
    res, err := s.Gateway.GetV05WellKnownOpenidConfiguration(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenIDConfiguration != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->