# OwlOntology

## Overview

OWL-level operations on an ontology

### Available Operations

* [GetDlQuery](#getdlquery) - Placeholder - use OWLery for now
* [GetSparqlQuery](#getsparqlquery) - Placeholder - use direct SPARQL endpoint for now

## GetDlQuery

Placeholder - use OWLery for now

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
    res, err := s.OwlOntology.GetDlQuery(ctx, operations.GetDlQueryRequest{
        Query: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```

## GetSparqlQuery

Placeholder - use direct SPARQL endpoint for now

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
    res, err := s.OwlOntology.GetSparqlQuery(ctx, operations.GetSparqlQueryRequest{
        Query: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```
