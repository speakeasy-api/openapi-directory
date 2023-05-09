# Agr

## Overview

Alliance of Genome Resources

### Available Operations

* [GETAffectedGenomicModelsUsingGET](#getaffectedgenomicmodelsusingget) - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
* [GETAllelesForTaxonUsingGET](#getallelesfortaxonusingget) - Get gene allele records submitted by RGD to AGR by taxonId
* [GETExpressionForTaxonUsingGET](#getexpressionfortaxonusingget) - Get expression annotations submitted by RGD to AGR by taxonId
* [GETGenesForLatestAssemblyUsingGET](#getgenesforlatestassemblyusingget) - Get gene records submitted by RGD to AGR by taxonId
* [GETPhenotypesForTaxonUsingGET](#getphenotypesfortaxonusingget) - Get phenotype annotations submitted by RGD to AGR by taxonId
* [GETVariantsForTaxonUsingGET](#getvariantsfortaxonusingget) - Get basic variant records submitted by RGD to AGR by taxonId

## GETAffectedGenomicModelsUsingGET

Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId

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
    res, err := s.Agr.GETAffectedGenomicModelsUsingGET(ctx, operations.GETAffectedGenomicModelsUsingGETRequest{
        TaxonID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAllelesForTaxonUsingGET

Get gene allele records submitted by RGD to AGR by taxonId

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
    res, err := s.Agr.GETAllelesForTaxonUsingGET(ctx, operations.GETAllelesForTaxonUsingGETRequest{
        TaxonID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETExpressionForTaxonUsingGET

Get expression annotations submitted by RGD to AGR by taxonId

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
    res, err := s.Agr.GETExpressionForTaxonUsingGET(ctx, operations.GETExpressionForTaxonUsingGETRequest{
        TaxonID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGenesForLatestAssemblyUsingGET

Get gene records submitted by RGD to AGR by taxonId

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
    res, err := s.Agr.GETGenesForLatestAssemblyUsingGET(ctx, operations.GETGenesForLatestAssemblyUsingGETRequest{
        TaxonID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETPhenotypesForTaxonUsingGET

Get phenotype annotations submitted by RGD to AGR by taxonId

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
    res, err := s.Agr.GETPhenotypesForTaxonUsingGET(ctx, operations.GETPhenotypesForTaxonUsingGETRequest{
        TaxonID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETVariantsForTaxonUsingGET

Get basic variant records submitted by RGD to AGR by taxonId

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
    res, err := s.Agr.GETVariantsForTaxonUsingGET(ctx, operations.GETVariantsForTaxonUsingGETRequest{
        TaxonID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
