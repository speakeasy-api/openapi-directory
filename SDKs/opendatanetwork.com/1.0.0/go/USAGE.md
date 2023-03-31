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

    req := operations.CreateAMapRequest{
        XAppToken: "corrupti",
        AppToken: "provident",
        Constraint: "distinctio",
        EntityID: "quibusdam",
        Variable: "unde",
    }

    ctx := context.Background()
    res, err := s.CreateAMap(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->