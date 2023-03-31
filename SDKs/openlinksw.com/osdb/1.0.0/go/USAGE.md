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

    req := operations.ActionHelpRequest{
        ActionID: "corrupti",
        ServiceID: "provident",
    }

    ctx := context.Background()
    res, err := s.Osdb.ActionHelp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionHelpResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->