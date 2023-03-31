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

    req := operations.GetAtmsRequest{
        IfModifiedSince: "corrupti",
        IfNoneMatch: "provident",
    }

    ctx := context.Background()
    res, err := s.Atm.GetAtms(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->