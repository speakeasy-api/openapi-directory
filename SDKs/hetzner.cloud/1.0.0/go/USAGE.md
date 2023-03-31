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

    req := operations.GetActionsRequest{
        ID: 548814,
        Sort: "progress:asc",
        Status: "error",
    }

    ctx := context.Background()
    res, err := s.Actions.GetActions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->