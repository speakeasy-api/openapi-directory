# Gene

### Available Operations

* [GETAllAnnotatedGenesUsingGET](#getallannotatedgenesusingget) - Return a list of genes annotated to an ontology term
* [GetAnnotatedGenesUsingPOST](#getannotatedgenesusingpost) - Return a list of genes annotated to an ontology term
* [GETGeneAllelesUsingGET](#getgeneallelesusingget) - Return a list of gene alleles
* [GETGeneByMapKeyUsingGET](#getgenebymapkeyusingget) - Return a list of all genes with position information for an assembly
* [GETGeneByRgdIDUsingGET](#getgenebyrgdidusingget) - Get a gene record by RGD ID
* [GETGeneBySymbolUsingGET](#getgenebysymbolusingget) - Get a gene record by symbol and species type key
* [GETGeneOrthologsUsingGET](#getgeneorthologsusingget) - Return a list of gene orthologs
* [GETGenesAnnotatedUsingGET](#getgenesannotatedusingget) - Return a list of genes annotated to an ontology term
* [GETGenesByAffyIDUsingGET](#getgenesbyaffyidusingget) - Return a list of genes for an affymetrix ID
* [GETGenesByAliasSymbolUsingGET](#getgenesbyaliassymbolusingget) - Return a list of genes for an alias and species
* [GETGenesByKeywordUsingGET](#getgenesbykeywordusingget) - Return a list of genes by keyword and species type key
* [GETGenesByPositionUsingGET](#getgenesbypositionusingget) - Return a list of genes position and map key
* [GETGenesBySpeciesUsingGET](#getgenesbyspeciesusingget) - Return a list of all genes for a species in RGD
* [GETGenesInRegionUsingGET](#getgenesinregionusingget) - Return a list of genes in region
* [GETMappedGenesByPositionUsingGET](#getmappedgenesbypositionusingget) - Return a list of genes position and map key
* [GetOrthologsByListUsingPOST](#getorthologsbylistusingpost) - Return a list of gene orthologs

## GETAllAnnotatedGenesUsingGET

Return a list of genes annotated to an ontology term

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
    res, err := s.Gene.GETAllAnnotatedGenesUsingGET(ctx, operations.GETAllAnnotatedGenesUsingGETRequest{
        AccID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAnnotatedGenesUsingPOST

Return a list of genes annotated to an ontology term

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
    res, err := s.Gene.GetAnnotatedGenesUsingPOST(ctx, shared.AnnotatedGeneRequest{
        AccID: sdk.String("odit"),
        EvidenceCodes: []string{
            "at",
            "maiores",
            "molestiae",
            "quod",
        },
        SpeciesTypeKeys: []int{
            461479,
            520478,
            780529,
            678880,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGeneAllelesUsingGET

Return a list of gene alleles

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
    res, err := s.Gene.GETGeneAllelesUsingGET(ctx, operations.GETGeneAllelesUsingGETRequest{
        RgdID: 118274,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGeneByMapKeyUsingGET

Return a list of all genes with position information for an assembly

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
    res, err := s.Gene.GETGeneByMapKeyUsingGET(ctx, operations.GETGeneByMapKeyUsingGETRequest{
        MapKey: 720633,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGeneByRgdIDUsingGET

Get a gene record by RGD ID

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
    res, err := s.Gene.GETGeneByRgdIDUsingGET(ctx, operations.GETGeneByRgdIDUsingGETRequest{
        RgdID: 639921,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGeneBySymbolUsingGET

Get a gene record by symbol and species type key

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
    res, err := s.Gene.GETGeneBySymbolUsingGET(ctx, operations.GETGeneBySymbolUsingGETRequest{
        SpeciesTypeKey: 582020,
        Symbol: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGeneOrthologsUsingGET

Return a list of gene orthologs

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
    res, err := s.Gene.GETGeneOrthologsUsingGET(ctx, operations.GETGeneOrthologsUsingGETRequest{
        RgdID: 537373,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGenesAnnotatedUsingGET

Return a list of genes annotated to an ontology term

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
    res, err := s.Gene.GETGenesAnnotatedUsingGET(ctx, operations.GETGenesAnnotatedUsingGETRequest{
        AccID: "hic",
        SpeciesTypeKey: 758616,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGenesByAffyIDUsingGET

Return a list of genes for an affymetrix ID

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
    res, err := s.Gene.GETGenesByAffyIDUsingGET(ctx, operations.GETGenesByAffyIDUsingGETRequest{
        AffyID: "totam",
        SpeciesTypeKey: 105907,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGenesByAliasSymbolUsingGET

Return a list of genes for an alias and species

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
    res, err := s.Gene.GETGenesByAliasSymbolUsingGET(ctx, operations.GETGenesByAliasSymbolUsingGETRequest{
        AliasSymbol: "commodi",
        SpeciesTypeKey: 473600,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGenesByKeywordUsingGET

Return a list of genes by keyword and species type key

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
    res, err := s.Gene.GETGenesByKeywordUsingGET(ctx, operations.GETGenesByKeywordUsingGETRequest{
        Keyword: "modi",
        SpeciesTypeKey: 186332,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGenesByPositionUsingGET

Return a list of genes position and map key

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
    res, err := s.Gene.GETGenesByPositionUsingGET(ctx, operations.GETGenesByPositionUsingGETRequest{
        Chr: "impedit",
        MapKey: 736918,
        Start: 456150,
        Stop: 216550,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGenesBySpeciesUsingGET

Return a list of all genes for a species in RGD

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
    res, err := s.Gene.GETGenesBySpeciesUsingGET(ctx, operations.GETGenesBySpeciesUsingGETRequest{
        SpeciesTypeKey: 568434,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGenesInRegionUsingGET

Return a list of genes in region

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
    res, err := s.Gene.GETGenesInRegionUsingGET(ctx, operations.GETGenesInRegionUsingGETRequest{
        Chr: "aspernatur",
        MapKey: 18789,
        Start: 324141,
        Stop: 617636,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETMappedGenesByPositionUsingGET

Return a list of genes position and map key

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
    res, err := s.Gene.GETMappedGenesByPositionUsingGET(ctx, operations.GETMappedGenesByPositionUsingGETRequest{
        Chr: "sed",
        MapKey: 612096,
        Start: 222321,
        Stop: 616934,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetOrthologsByListUsingPOST

Return a list of gene orthologs

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
    res, err := s.Gene.GetOrthologsByListUsingPOST(ctx, shared.OrthologRequest{
        RgdIds: []int{
            943749,
            902599,
        },
        SpeciesTypeKeys: []int{
            449950,
            359508,
            613064,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
