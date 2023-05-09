# Search

## Overview

Search for entities

### Available Operations

* [GetAutocomplete](#getautocomplete) - Returns list of matching concepts or entities using lexical search
* [GetSearchEntities](#getsearchentities) - Returns list of matching concepts or entities using lexical search
* [GetSearchHpoEntities](#getsearchhpoentities) - Returns list of matching concepts or entities using lexical search

## GetAutocomplete

Returns list of matching concepts or entities using lexical search

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
    res, err := s.Search.GetAutocomplete(ctx, operations.GetAutocompleteRequest{
        BoostFx: []string{
            "culpa",
            "fugiat",
            "inventore",
        },
        BoostQ: []string{
            "ad",
            "sapiente",
            "voluptates",
        },
        Category: []string{
            "nesciunt",
            "ab",
        },
        ExcludeGroups: sdk.Bool(false),
        Fq: []string{
            "suscipit",
            "quidem",
            "delectus",
            "nemo",
        },
        HighlightClass: sdk.String("cumque"),
        IncludeEqs: sdk.Bool(false),
        MinMatch: sdk.String("voluptatum"),
        MinimalTokenizer: sdk.Bool(false),
        Prefix: []string{
            "atque",
        },
        Rows: sdk.Int64(979706),
        Start: sdk.String("expedita"),
        Taxon: []string{
            "totam",
            "quod",
            "aspernatur",
        },
        Term: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutocompleteResults != nil {
        // handle response
    }
}
```

## GetSearchEntities

Returns list of matching concepts or entities using lexical search

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
    res, err := s.Search.GetSearchEntities(ctx, operations.GetSearchEntitiesRequest{
        BoostFx: []string{
            "nam",
            "ex",
            "odio",
            "delectus",
        },
        BoostQ: []string{
            "ut",
            "distinctio",
            "eius",
            "eos",
        },
        Category: []string{
            "repudiandae",
            "sint",
        },
        ExcludeGroups: sdk.Bool(false),
        Fq: []string{
            "debitis",
            "laboriosam",
            "eos",
        },
        HighlightClass: sdk.String("amet"),
        IncludeEqs: sdk.Bool(false),
        MinMatch: sdk.String("incidunt"),
        MinimalTokenizer: sdk.Bool(false),
        Prefix: []string{
            "occaecati",
            "reiciendis",
            "voluptate",
            "tempore",
        },
        Rows: sdk.Int64(447323),
        Start: sdk.String("omnis"),
        Taxon: []string{
            "tenetur",
            "recusandae",
            "expedita",
            "iusto",
        },
        Term: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResult != nil {
        // handle response
    }
}
```

## GetSearchHpoEntities

Returns list of matching concepts or entities using lexical search

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
    res, err := s.Search.GetSearchHpoEntities(ctx, operations.GetSearchHpoEntitiesRequest{
        AnatomicalSystem: sdk.String("harum"),
        AnatomicalSystemLabel: sdk.String("ad"),
        HighlightClass: sdk.String("quod"),
        PhenotypeGroup: sdk.String("ratione"),
        PhenotypeGroupLabel: sdk.String("totam"),
        Rows: sdk.Int64(873681),
        Start: sdk.String("dolore"),
        Term: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LayResults != nil {
        // handle response
    }
}
```
