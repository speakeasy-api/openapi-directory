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
    
    res, err := s.FavicoFaviconIcoGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.FavicoFaviconIcoGet200ApplicationJSONAny != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->