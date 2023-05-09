# Branch

## Overview

Endpoint for getting Branch data

### Available Operations

* [GetBranches](#getbranches) - Gets a list of all `Branch` objects.
* [HeadBranches](#headbranches) - Gets header information on the current set of `Branch` data

## GetBranches

Gets a list of all `Branch` objects.

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
    res, err := s.Branch.GetBranches(ctx, operations.GetBranchesRequest{
        IfModifiedSince: sdk.String("deserunt"),
        IfNoneMatch: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONObject != nil {
        // handle response
    }
}
```

## HeadBranches

Gets header information on the current set of `Branch` data

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
    res, err := s.Branch.HeadBranches(ctx, operations.HeadBranchesRequest{
        IfModifiedSince: sdk.String("iure"),
        IfNoneMatch: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
