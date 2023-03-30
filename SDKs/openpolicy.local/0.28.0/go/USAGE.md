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
        QueryParams: operations.PostCompileQueryParams{
            Explain: "corrupti",
            Instrument: false,
            Metrics: false,
            Pretty: false,
        },
        Request: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
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