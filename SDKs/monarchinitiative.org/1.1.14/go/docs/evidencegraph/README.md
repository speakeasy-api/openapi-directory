# EvidenceGraph

## Overview

Operations on evidence graphs

### Available Operations

* [GetEvidenceGraphObject](#getevidencegraphobject) - Returns evidence graph object for a given association
* [GetEvidenceGraphTable](#getevidencegraphtable) - Returns evidence as a association_results object given an association

## GetEvidenceGraphObject

Note that every association is assumed to have a unique ID

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
    res, err := s.EvidenceGraph.GetEvidenceGraphObject(ctx, operations.GetEvidenceGraphObjectRequest{
        ID: "5998e22a-e20d-4a16-bc2b-271a289c57e8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Graphs != nil {
        // handle response
    }
}
```

## GetEvidenceGraphTable

Note that every association is assumed to have a unique ID

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
    res, err := s.EvidenceGraph.GetEvidenceGraphTable(ctx, operations.GetEvidenceGraphTableRequest{
        ID: "54e90439-d222-4465-a946-2407084f7ab3",
        IsPublication: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```
