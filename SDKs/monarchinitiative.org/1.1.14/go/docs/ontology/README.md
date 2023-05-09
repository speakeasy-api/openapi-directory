# Ontology

## Overview

Operations on Ontology Terms and Subsets

### Available Operations

* [GetOntologySubset](#getontologysubset) - Returns meta data of an ontology subset (slim)
* [GetOntologyTerm](#getontologyterm) - Returns meta data of an ontology term
* [GetOntologyTermGraph](#getontologytermgraph) - Returns graph of an ontology term
* [GetOntologyTermSubgraph](#getontologytermsubgraph) - Extract a subgraph from an ontology term
* [GetOntologyTermSubsets](#getontologytermsubsets) - Returns subsets (slims) associated to an ontology term
* [GetOntologyTermsSharedAncestor](#getontologytermssharedancestor) - Returns the ancestor ontology terms shared by two ontology terms

## GetOntologySubset

Returns meta data of an ontology subset (slim)

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
    res, err := s.Ontology.GetOntologySubset(ctx, operations.GetOntologySubsetRequest{
        ID: "92c8dbda-6a61-4efa-a198-258fd0a9eba4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOntologyTerm

Returns meta data of an ontology term

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
    res, err := s.Ontology.GetOntologyTerm(ctx, operations.GetOntologyTermRequest{
        ID: "7f7d3ef0-4964-40d6-a183-1c87adf596fd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOntologyTermGraph

Returns graph of an ontology term

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
    res, err := s.Ontology.GetOntologyTermGraph(ctx, operations.GetOntologyTermGraphRequest{
        GraphType: operations.GetOntologyTermGraphGraphTypeEnumNeighborhoodLimitedGraph.ToPointer(),
        ID: "1ad837ae-80c1-4c19-895b-a998678fa3f6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOntologyTermSubgraph

Extract a subgraph from an ontology term

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
    res, err := s.Ontology.GetOntologyTermSubgraph(ctx, operations.GetOntologyTermSubgraphRequest{
        Cnode: []string{
            "autem",
            "iste",
            "cupiditate",
        },
        ID: "1af388ce-0361-4444-8c79-77a0ef2f5360",
        IncludeAncestors: sdk.Bool(false),
        IncludeDescendants: sdk.Bool(false),
        IncludeMeta: sdk.Bool(false),
        Relation: []string{
            "voluptatum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOntologyTermSubsets

Returns subsets (slims) associated to an ontology term

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
    res, err := s.Ontology.GetOntologyTermSubsets(ctx, operations.GetOntologyTermSubsetsRequest{
        ID: "efeef934-152e-4d7e-a53f-4c157deaa717",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOntologyTermsSharedAncestor

Returns the ancestor ontology terms shared by two ontology terms

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
    res, err := s.Ontology.GetOntologyTermsSharedAncestor(ctx, operations.GetOntologyTermsSharedAncestorRequest{
        Object: "consequatur",
        Subject: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
