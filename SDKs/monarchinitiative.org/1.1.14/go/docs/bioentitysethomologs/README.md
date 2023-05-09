# BioentitysetHomologs

## Overview

Map gene IDs to their homologs

### Available Operations

* [GetEntitySetHomologs](#getentitysethomologs) - Returns homology associations for a given input set of genes

## GetEntitySetHomologs

Returns homology associations for a given input set of genes

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
    res, err := s.BioentitysetHomologs.GetEntitySetHomologs(ctx, operations.GetEntitySetHomologsRequest{
        Subject: []string{
            "dignissimos",
            "fugit",
            "ratione",
            "possimus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```
