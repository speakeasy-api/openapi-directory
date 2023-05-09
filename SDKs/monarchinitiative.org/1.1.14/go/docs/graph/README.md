# Graph

## Overview

Operations over data graphs

### Available Operations

* [GetEdgeResource](#getedgeresource) - Returns edges emanating from a given node
* [GetNodeResource](#getnoderesource) - Returns a graph node

## GetEdgeResource

Returns edges emanating from a given node

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
    res, err := s.Graph.GetEdgeResource(ctx, operations.GetEdgeResourceRequest{
        Depth: sdk.Int64(35219),
        Direction: operations.GetEdgeResourceDirectionEnumIncoming.ToPointer(),
        Entail: sdk.Bool(false),
        Graph: operations.GetEdgeResourceGraphEnumData.ToPointer(),
        ID: "25194db5-5410-4adc-a69a-f90a26c7cdc9",
        RelationshipType: []string{
            "quasi",
            "maiores",
            "voluptatem",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Graphs != nil {
        // handle response
    }
}
```

## GetNodeResource

A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient,
a molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.

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
    res, err := s.Graph.GetNodeResource(ctx, operations.GetNodeResourceRequest{
        ID: "68981d6b-b33c-4faa-b48c-31bf407ee4fc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BioObjects != nil {
        // handle response
    }
}
```
