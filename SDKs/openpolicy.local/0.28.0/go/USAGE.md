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

    req := operations.PostCompileRequest{
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Explain: "illum",
        Instrument: false,
        Metrics: false,
        Pretty: false,
    }

    ctx := context.Background()
    res, err := s.CompileAPI.PostCompile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCompile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->