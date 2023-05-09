# Annotation

### Available Operations

* [GETAnnotationCountByAccIDAndObjectTypeUsingGET](#getannotationcountbyaccidandobjecttypeusingget) - Returns annotation count for ontology accession ID and object type
* [GETAnnotationCountByAccIDAndSpeciesUsingGET](#getannotationcountbyaccidandspeciesusingget) - Returns annotation count for ontology accession ID and speicies
* [GETAnnotationCountByAccIDUsingGET](#getannotationcountbyaccidusingget) - Returns annotation count for ontology accession ID
* [GETAnnotationsByAccIDAndRgdIDUsingGET](#getannotationsbyaccidandrgdidusingget) - Returns a list of annotations by RGD ID and ontology term accession ID
* [GETAnnotationsByRgdIDAndOntologyUsingGET](#getannotationsbyrgdidandontologyusingget) - Returns a list of annotations by RGD ID and ontology prefix
* [GETAnnotationsByRgdIDUsingGET](#getannotationsbyrgdidusingget) - Returns a list of annotations by RGD ID
* [GETAnnotationsUsingGET](#getannotationsusingget) - Returns a list annotations for an ontology term or a term and it's children
* [GetAnnotationsUsingPOST](#getannotationsusingpost) - Return a list of genes annotated to an ontology term
* [GETAnnotsByRefrerenceUsingGET](#getannotsbyrefrerenceusingget) - Returns a list of annotations for a reference
* [GETTermAccIdsUsingGET](#gettermaccidsusingget) - Returns a list ontology term accession IDs annotated to an rgd object

## GETAnnotationCountByAccIDAndObjectTypeUsingGET

Returns annotation count for ontology accession ID and object type

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
    res, err := s.Annotation.GETAnnotationCountByAccIDAndObjectTypeUsingGET(ctx, operations.GETAnnotationCountByAccIDAndObjectTypeUsingGETRequest{
        AccID: "illum",
        IncludeChildren: false,
        ObjectType: 423655,
        SpeciesTypeKey: 623564,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAnnotationCountByAccIDAndSpeciesUsingGET

Returns annotation count for ontology accession ID and speicies

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
    res, err := s.Annotation.GETAnnotationCountByAccIDAndSpeciesUsingGET(ctx, operations.GETAnnotationCountByAccIDAndSpeciesUsingGETRequest{
        AccID: "deserunt",
        IncludeChildren: false,
        SpeciesTypeKey: 384382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAnnotationCountByAccIDUsingGET

Returns annotation count for ontology accession ID

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
    res, err := s.Annotation.GETAnnotationCountByAccIDUsingGET(ctx, operations.GETAnnotationCountByAccIDUsingGETRequest{
        AccID: "iure",
        IncludeChildren: false,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAnnotationsByAccIDAndRgdIDUsingGET

Returns a list of annotations by RGD ID and ontology term accession ID

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
    res, err := s.Annotation.GETAnnotationsByAccIDAndRgdIDUsingGET(ctx, operations.GETAnnotationsByAccIDAndRgdIDUsingGETRequest{
        AccID: "magnam",
        RgdID: 891773,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAnnotationsByRgdIDAndOntologyUsingGET

Returns a list of annotations by RGD ID and ontology prefix

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
    res, err := s.Annotation.GETAnnotationsByRgdIDAndOntologyUsingGET(ctx, operations.GETAnnotationsByRgdIDAndOntologyUsingGETRequest{
        OntologyPrefix: "ipsa",
        RgdID: 963663,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAnnotationsByRgdIDUsingGET

Returns a list of annotations by RGD ID

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
    res, err := s.Annotation.GETAnnotationsByRgdIDUsingGET(ctx, operations.GETAnnotationsByRgdIDUsingGETRequest{
        RgdID: 272656,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAnnotationsUsingGET

Returns a list annotations for an ontology term or a term and it's children

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
    res, err := s.Annotation.GETAnnotationsUsingGET(ctx, operations.GETAnnotationsUsingGETRequest{
        AccID: "suscipit",
        IncludeChildren: false,
        SpeciesTypeKey: 477665,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAnnotationsUsingPOST

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
    res, err := s.Annotation.GetAnnotationsUsingPOST(ctx, shared.AnnotationRequest{
        EvidenceCodes: []string{
            "placeat",
            "voluptatum",
            "iusto",
            "excepturi",
        },
        Ids: []string{
            "recusandae",
            "temporibus",
        },
        SpeciesTypeKeys: []int{
            337396,
        },
        TermAcc: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAnnotsByRefrerenceUsingGET

Returns a list of annotations for a reference

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
    res, err := s.Annotation.GETAnnotsByRefrerenceUsingGET(ctx, operations.GETAnnotsByRefrerenceUsingGETRequest{
        RefRgdID: 648172,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETTermAccIdsUsingGET

Returns a list ontology term accession IDs annotated to an rgd object

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
    res, err := s.Annotation.GETTermAccIdsUsingGET(ctx, operations.GETTermAccIdsUsingGETRequest{
        RgdID: 20218,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
