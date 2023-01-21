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
            ShortName: "sit",
        },
        QueryParams: operations.BranchControllerGetBranchesQueryParams{
            Count: 2259404117704393152,
            Offset: 6050128673802995827,
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