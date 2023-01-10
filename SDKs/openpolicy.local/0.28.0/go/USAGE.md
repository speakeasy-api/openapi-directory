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
    
    req := operations.PostCompileRequest{
        QueryParams: operations.PostCompileQueryParams{
            Explain: "pariatur",
            Instrument: true,
            Metrics: false,
            Pretty: true,
        },
        Request: map[string]interface{}{
            "nesciunt": "praesentium",
        },
    }
    
    res, err := s.CompileAPI.PostCompile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCompile200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->