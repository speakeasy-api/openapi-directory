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
    
    req := operations.BranchControllerGetBranchesRequest{
        PathParams: operations.BranchControllerGetBranchesPathParams{
            ShortName: "fuga",
        },
        QueryParams: operations.BranchControllerGetBranchesQueryParams{
            Count: 4123162475481009482,
            Offset: 4851542156958539991,
        },
    }
    
    res, err := s.BranchController.BranchControllerGetBranches(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchModelResults != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->