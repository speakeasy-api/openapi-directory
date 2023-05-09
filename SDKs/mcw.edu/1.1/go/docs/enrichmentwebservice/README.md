# EnrichmentWebService

## Overview

Enrichment Web Service

### Available Operations

* [GetEnrichmentDataUsingPOST](#getenrichmentdatausingpost) - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
* [GetEnrichmentDataUsingPOST1](#getenrichmentdatausingpost1) - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group

## GetEnrichmentDataUsingPOST

Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnrichmentWebService.GetEnrichmentDataUsingPOST(ctx, shared.EnrichmentGeneRequest{
        AccID: sdk.String("rerum"),
        GeneSymbols: []string{
            "magnam",
        },
        Species: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetEnrichmentDataUsingPOST1

Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EnrichmentWebService.GetEnrichmentDataUsingPOST1(ctx, shared.EnrichmentRequest{
        Aspect: sdk.String("facere"),
        Genes: []string{
            "aliquid",
            "laborum",
        },
        Species: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
