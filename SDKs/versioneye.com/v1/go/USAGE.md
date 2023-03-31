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

    req := operations.GetAPIV1ScansRequest{
        Name: "corrupti",
        PerPage: "provident",
    }

    ctx := context.Background()
    res, err := s.Scans.GetAPIV1Scans(ctx, req, operations.GetAPIV1ScansSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->