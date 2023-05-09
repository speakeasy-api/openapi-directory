# Lookup

### Available Operations

* [GETEnsemblGeneMappingUsingGET](#getensemblgenemappingusingget) - Translate an RGD ID to an Ensembl Gene  ID
* [GetEnsemblGeneMappingUsingPOST](#getensemblgenemappingusingpost) - Translate RGD IDs to Ensembl Gene IDs
* [GETEnsemblProteinMappingUsingGET](#getensemblproteinmappingusingget) - Translate an RGD ID to an Ensembl Protein ID
* [GetEnsemblProteinMappingUsingPOST](#getensemblproteinmappingusingpost) - Translate RGD IDs to Ensembl Protein IDs
* [GETEnsemblTranscriptMappingUsingGET](#getensembltranscriptmappingusingget) - Translate an RGD ID to an Ensembl Transcript ID
* [GetEnsemblTranscriptMappingUsingPOST](#getensembltranscriptmappingusingpost) - Translate RGD IDs to Ensembl Transcript IDs
* [GETGTEXMappingUsingGET](#getgtexmappingusingget) - Translate an RGD ID to an GTEx ID
* [GetGTEXMappingUsingPOST](#getgtexmappingusingpost) - Translate RGD IDs to GTEx IDs
* [GETGenBankNucleotideMappingUsingGET](#getgenbanknucleotidemappingusingget) - Translate an RGD ID to a GenBank Nucleotide ID
* [GetGenBankNucleotideMappingUsingPOST](#getgenbanknucleotidemappingusingpost) - Translate RGD IDs to GenBank Nucleotide IDs
* [GETGenBankProteinMappingUsingGET](#getgenbankproteinmappingusingget) - Translate an RGD ID to a GenBank Protein ID
* [GetGenBankProteinMappingUsingPOST](#getgenbankproteinmappingusingpost) - Translate RGD IDs to GenBank Protein IDs
* [GETGeneTypesUsingGET](#getgenetypesusingget) - Returns a list of gene types avialable in RGD
* [GETHGNCMappingUsingGET](#gethgncmappingusingget) - Translate an RGD ID to an HGNC ID
* [GetHGNCMappingUsingPOST](#gethgncmappingusingpost) - Translate RGD IDs to HGNC IDs
* [GETMGIMappingUsingGET](#getmgimappingusingget) - Translate an RGD ID to an MGI ID
* [GetMGIMappingUsingPOST](#getmgimappingusingpost) - Translate RGD IDs to MGI IDs
* [GETMapsUsingGET](#getmapsusingget) - Return a list assembly maps for a species
* [GETMapsUsingGET1](#getmapsusingget1) - Return a standardUnit for an ontology if it exists
* [GETNCBIGeneMappingUsingGET](#getncbigenemappingusingget) - Translate an RGD ID to an NCBI Gene ID
* [GetNCBIGeneMappingUsingPOST](#getncbigenemappingusingpost) - Translate RGD IDs to NCBI Gene IDs
* [GETSpeciesTypesUsingGET](#getspeciestypesusingget) - Return a Map of species type keys available in RGD
* [GETUniProtMappingUsingGET](#getuniprotmappingusingget) - Translate an RGD ID to a UniProt ID
* [GetUniProtMappingUsingPOST](#getuniprotmappingusingpost) - Translate RGD IDs to UniProt IDs

## GETEnsemblGeneMappingUsingGET

Translate an RGD ID to an Ensembl Gene  ID

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
    res, err := s.Lookup.GETEnsemblGeneMappingUsingGET(ctx, operations.GETEnsemblGeneMappingUsingGETRequest{
        RgdID: 437032,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetEnsemblGeneMappingUsingPOST

Translate RGD IDs to Ensembl Gene IDs

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
    res, err := s.Lookup.GetEnsemblGeneMappingUsingPOST(ctx, shared.RGDIDListRequest{
        RgdIds: []int{
            697631,
            99280,
            60225,
            969810,
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

## GETEnsemblProteinMappingUsingGET

Translate an RGD ID to an Ensembl Protein ID

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
    res, err := s.Lookup.GETEnsemblProteinMappingUsingGET(ctx, operations.GETEnsemblProteinMappingUsingGETRequest{
        RgdID: 666767,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetEnsemblProteinMappingUsingPOST

Translate RGD IDs to Ensembl Protein IDs

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
    res, err := s.Lookup.GetEnsemblProteinMappingUsingPOST(ctx, shared.RGDIDListRequest{
        RgdIds: []int{
            670638,
            170909,
            210382,
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

## GETEnsemblTranscriptMappingUsingGET

Translate an RGD ID to an Ensembl Transcript ID

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
    res, err := s.Lookup.GETEnsemblTranscriptMappingUsingGET(ctx, operations.GETEnsemblTranscriptMappingUsingGETRequest{
        RgdID: 358152,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetEnsemblTranscriptMappingUsingPOST

Translate RGD IDs to Ensembl Transcript IDs

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
    res, err := s.Lookup.GetEnsemblTranscriptMappingUsingPOST(ctx, shared.RGDIDListRequest{
        RgdIds: []int{
            750686,
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

## GETGTEXMappingUsingGET

Translate an RGD ID to an GTEx ID

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
    res, err := s.Lookup.GETGTEXMappingUsingGET(ctx, operations.GETGTEXMappingUsingGETRequest{
        RgdID: 315428,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetGTEXMappingUsingPOST

Translate RGD IDs to GTEx IDs

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
    res, err := s.Lookup.GetGTEXMappingUsingPOST(ctx, shared.RGDIDListRequest{
        RgdIds: []int{
            363711,
            325047,
            570197,
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

## GETGenBankNucleotideMappingUsingGET

Translate an RGD ID to a GenBank Nucleotide ID

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
    res, err := s.Lookup.GETGenBankNucleotideMappingUsingGET(ctx, operations.GETGenBankNucleotideMappingUsingGETRequest{
        RgdID: 38425,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetGenBankNucleotideMappingUsingPOST

Translate RGD IDs to GenBank Nucleotide IDs

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
    res, err := s.Lookup.GetGenBankNucleotideMappingUsingPOST(ctx, shared.RGDIDListRequest{
        RgdIds: []int{
            634274,
            988374,
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

## GETGenBankProteinMappingUsingGET

Translate an RGD ID to a GenBank Protein ID

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
    res, err := s.Lookup.GETGenBankProteinMappingUsingGET(ctx, operations.GETGenBankProteinMappingUsingGETRequest{
        RgdID: 958950,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetGenBankProteinMappingUsingPOST

Translate RGD IDs to GenBank Protein IDs

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
    res, err := s.Lookup.GetGenBankProteinMappingUsingPOST(ctx, shared.RGDIDListRequest{
        RgdIds: []int{
            652790,
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

## GETGeneTypesUsingGET

Returns a list of gene types avialable in RGD

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Lookup.GETGeneTypesUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETHGNCMappingUsingGET

Translate an RGD ID to an HGNC ID

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
    res, err := s.Lookup.GETHGNCMappingUsingGET(ctx, operations.GETHGNCMappingUsingGETRequest{
        RgdID: 208876,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetHGNCMappingUsingPOST

Translate RGD IDs to HGNC IDs

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
    res, err := s.Lookup.GetHGNCMappingUsingPOST(ctx, shared.RGDIDListRequest{
        RgdIds: []int{
            161309,
            995300,
            653108,
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

## GETMGIMappingUsingGET

Translate an RGD ID to an MGI ID

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
    res, err := s.Lookup.GETMGIMappingUsingGET(ctx, operations.GETMGIMappingUsingGETRequest{
        RgdID: 581850,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMGIMappingUsingPOST

Translate RGD IDs to MGI IDs

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
    res, err := s.Lookup.GetMGIMappingUsingPOST(ctx, shared.RGDIDListRequest{
        RgdIds: []int{
            414369,
            466311,
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

## GETMapsUsingGET

Return a list assembly maps for a species

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
    res, err := s.Lookup.GETMapsUsingGET(ctx, operations.GETMapsUsingGETRequest{
        SpeciesTypeKey: 474697,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETMapsUsingGET1

Return a standardUnit for an ontology if it exists

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
    res, err := s.Lookup.GETMapsUsingGET1(ctx, operations.GETMapsUsingGET1Request{
        AccID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETMapsUsingGET1200WildcardString != nil {
        // handle response
    }
}
```

## GETNCBIGeneMappingUsingGET

Translate an RGD ID to an NCBI Gene ID

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
    res, err := s.Lookup.GETNCBIGeneMappingUsingGET(ctx, operations.GETNCBIGeneMappingUsingGETRequest{
        RgdID: 623510,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetNCBIGeneMappingUsingPOST

Translate RGD IDs to NCBI Gene IDs

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
    res, err := s.Lookup.GetNCBIGeneMappingUsingPOST(ctx, shared.RGDIDListRequest{
        RgdIds: []int{
            338007,
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

## GETSpeciesTypesUsingGET

Return a Map of species type keys available in RGD

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Lookup.GETSpeciesTypesUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUniProtMappingUsingGET

Translate an RGD ID to a UniProt ID

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
    res, err := s.Lookup.GETUniProtMappingUsingGET(ctx, operations.GETUniProtMappingUsingGETRequest{
        RgdID: 110375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUniProtMappingUsingPOST

Translate RGD IDs to UniProt IDs

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
    res, err := s.Lookup.GetUniProtMappingUsingPOST(ctx, shared.RGDIDListRequest{
        RgdIds: []int{
            656330,
            317202,
            138183,
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
