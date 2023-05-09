# Ontol

## Overview

extract a subgraph from an ontology

### Available Operations

* [GetExtractOntologySubgraphResource](#getextractontologysubgraphresource) - Extract a subgraph from an ontology
* [GetInformationContentResource](#getinformationcontentresource) - Returns information content (IC) for a set of relevant ontology classes
* [PostExtractOntologySubgraphResource](#postextractontologysubgraphresource) - Extract a subgraph from an ontology

## GetExtractOntologySubgraphResource

Extract a subgraph from an ontology

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
    res, err := s.Ontol.GetExtractOntologySubgraphResource(ctx, operations.GetExtractOntologySubgraphResourceRequest{
        Cnode: []string{
            "illum",
            "sit",
        },
        IncludeAncestors: sdk.Bool(false),
        IncludeDescendants: sdk.Bool(false),
        IncludeMeta: sdk.Bool(false),
        Node: "molestias",
        Ontology: "voluptas",
        Relation: []string{
            "voluptas",
            "maiores",
            "ea",
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

## GetInformationContentResource

```
IC = -log2( freq(t) / popSize )
```

Here the frequency and population is calculated for a particular dataset:
e.g. all human disease-phenotype associations

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
    res, err := s.Ontol.GetInformationContentResource(ctx, operations.GetInformationContentResourceRequest{
        Evidence: sdk.String("vel"),
        ObjectCategory: "delectus",
        SubjectCategory: "accusamus",
        SubjectTaxon: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostExtractOntologySubgraphResource

Extract a subgraph from an ontology

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
    res, err := s.Ontol.PostExtractOntologySubgraphResource(ctx, operations.PostExtractOntologySubgraphResourceRequest{
        Cnode: []string{
            "sed",
        },
        IncludeAncestors: sdk.Bool(false),
        IncludeDescendants: sdk.Bool(false),
        IncludeMeta: sdk.Bool(false),
        Node: "accusantium",
        Ontology: "voluptates",
        Relation: []string{
            "maiores",
            "quaerat",
            "numquam",
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
