# BioentitysetSlimmer

## Overview

maps a set of entities to a slim

### Available Operations

* [GetEntitySetAnatomySlimmer](#getentitysetanatomyslimmer) - For a given gene(s), summarize its annotations over a defined set of slim
* [GetEntitySetFunctionSlimmer](#getentitysetfunctionslimmer) - For a given gene(s), summarize its annotations over a defined set of slim
* [GetEntitySetPhenotypeSlimmer](#getentitysetphenotypeslimmer) - For a given gene(s), summarize its annotations over a defined set of slim

## GetEntitySetAnatomySlimmer

For a given gene(s), summarize its annotations over a defined set of slim

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
    res, err := s.BioentitysetSlimmer.GetEntitySetAnatomySlimmer(ctx, operations.GetEntitySetAnatomySlimmerRequest{
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Rows: sdk.Int64(311548),
        Slim: []string{
            "natus",
        },
        Start: sdk.Int64(457389),
        Subject: []string{
            "deserunt",
            "ratione",
            "ipsa",
            "debitis",
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

## GetEntitySetFunctionSlimmer

For a given gene(s), summarize its annotations over a defined set of slim

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
    res, err := s.BioentitysetSlimmer.GetEntitySetFunctionSlimmer(ctx, operations.GetEntitySetFunctionSlimmerRequest{
        ExcludeAutomaticAssertions: sdk.Bool(false),
        RelationshipType: operations.GetEntitySetFunctionSlimmerRelationshipTypeEnumActsUpstreamOfOrWithin.ToPointer(),
        Rows: sdk.Int64(646776),
        Slim: []string{
            "ducimus",
            "consequuntur",
            "ipsam",
            "libero",
        },
        Start: sdk.Int64(153942),
        Subject: []string{
            "dicta",
            "qui",
            "explicabo",
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

## GetEntitySetPhenotypeSlimmer

For a given gene(s), summarize its annotations over a defined set of slim

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
    res, err := s.BioentitysetSlimmer.GetEntitySetPhenotypeSlimmer(ctx, operations.GetEntitySetPhenotypeSlimmerRequest{
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Rows: sdk.Int64(6203),
        Slim: []string{
            "consequatur",
        },
        Start: sdk.Int64(852634),
        Subject: []string{
            "velit",
            "hic",
            "ullam",
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
