# Map

## Overview

Map Web Service

### Available Operations

* [GETChromosomeByAssemblyUsingGET](#getchromosomebyassemblyusingget) - Return a list of chromosomes
* [GETChromosomesByAssemblyUsingGET](#getchromosomesbyassemblyusingget) - Return a list of chromosomes
* [GETMapsBySpeciesUsingGET](#getmapsbyspeciesusingget) - Return a list of assemblies

## GETChromosomeByAssemblyUsingGET

Return a list of chromosomes

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
    res, err := s.Map.GETChromosomeByAssemblyUsingGET(ctx, operations.GETChromosomeByAssemblyUsingGETRequest{
        Chromosome: "quo",
        MapKey: 196582,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETChromosomesByAssemblyUsingGET

Return a list of chromosomes

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
    res, err := s.Map.GETChromosomesByAssemblyUsingGET(ctx, operations.GETChromosomesByAssemblyUsingGETRequest{
        MapKey: 949572,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETMapsBySpeciesUsingGET

Return a list of assemblies

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
    res, err := s.Map.GETMapsBySpeciesUsingGET(ctx, operations.GETMapsBySpeciesUsingGETRequest{
        SpeciesTypeKey: 368725,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
