# Chromosome

### Available Operations

* [GETChromosomeByAssemblyUsingGET](#getchromosomebyassemblyusingget) - Return a list of chromosomes
* [GETChromosomesByAssemblyUsingGET](#getchromosomesbyassemblyusingget) - Return a list of chromosomes

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
    res, err := s.Chromosome.GETChromosomeByAssemblyUsingGET(ctx, operations.GETChromosomeByAssemblyUsingGETRequest{
        Chromosome: "ipsam",
        MapKey: 832620,
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
    res, err := s.Chromosome.GETChromosomesByAssemblyUsingGET(ctx, operations.GETChromosomesByAssemblyUsingGETRequest{
        MapKey: 957156,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
