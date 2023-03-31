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

    req := operations.GetPublicHistoryRequest{
        From: "corrupti",
        Q: "provident",
        To: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Default.GetPublicHistory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPublicHistory200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->