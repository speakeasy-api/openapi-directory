# BranchController

### Available Operations

* [BranchControllerGetBranches](#branchcontrollergetbranches) - All branches defined for a company
* [GetV2CustomerShortNameBranchBranchesBranchID](#getv2customershortnamebranchbranchesbranchid) - Get a specific branch given its unique Object ID (OID)

## BranchControllerGetBranches

All branches defined for a company

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BranchController.BranchControllerGetBranches(ctx, operations.BranchControllerGetBranchesRequest{
        Count: 844266,
        Offset: 602763,
        ShortName: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchModelResults != nil {
        // handle response
    }
}
```

## GetV2CustomerShortNameBranchBranchesBranchID

Get a specific branch given its unique Object ID (OID)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BranchController.GetV2CustomerShortNameBranchBranchesBranchID(ctx, operations.GetV2CustomerShortNameBranchBranchesBranchIDRequest{
        BranchID: "corrupti",
        ShortName: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BranchModel != nil {
        // handle response
    }
}
```
