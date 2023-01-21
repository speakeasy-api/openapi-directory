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
            Explain: "sit",
            Instrument: false,
            Metrics: true,
            Pretty: false,
        },
        Request: map[string]interface{}{
            "dolor": "expedita",
            "voluptas": "fugit",
            "et": "nihil",
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