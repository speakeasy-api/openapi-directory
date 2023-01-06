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
            Explain: "neque",
            Instrument: false,
            Metrics: true,
            Pretty: true,
        },
        Request: map[string]interface{}{
            "necessitatibus": "et",
            "nisi": "laboriosam",
            "ut": "animi",
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