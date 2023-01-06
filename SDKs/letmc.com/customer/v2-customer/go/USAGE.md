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
            ShortName: "ut",
        },
        QueryParams: operations.BranchControllerGetBranchesQueryParams{
            Count: 6819986047930640922,
            Offset: 5235123056757608722,
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