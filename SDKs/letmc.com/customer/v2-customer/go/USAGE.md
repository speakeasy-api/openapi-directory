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

    req := operations.BranchControllerGetBranchesRequest{
        Count: 548814,
        Offset: 592845,
        ShortName: "distinctio",
    }

    ctx := context.Background()
    res, err := s.BranchController.BranchControllerGetBranches(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchModelResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->