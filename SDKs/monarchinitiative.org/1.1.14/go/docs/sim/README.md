# Sim

## Overview

Perform semantic similarity, ranking, and sufficiency scoring

### Available Operations

* [GetAnnotationScore](#getannotationscore) - Get annotation score
* [GetSimCompare](#getsimcompare) - Compare a reference profile vs one profiles
* [GetSimSearch](#getsimsearch) - Search for phenotypically similar diseases or model genes
* [PostAnnotationScore](#postannotationscore) - Get annotation score
* [PostSimCompare](#postsimcompare) - Compare a reference profile vs one or more profiles

## GetAnnotationScore

Get annotation score

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
    res, err := s.Sim.GetAnnotationScore(ctx, operations.GetAnnotationScoreRequest{
        AbsentID: []string{
            "maiores",
            "cupiditate",
            "illo",
        },
        ID: []string{
            "enim",
            "eaque",
            "ex",
            "eveniet",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SufficiencyOutput != nil {
        // handle response
    }
}
```

## GetSimCompare

Compare a reference profile vs one profiles

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
    res, err := s.Sim.GetSimCompare(ctx, operations.GetSimCompareRequest{
        IsFeatureSet: sdk.Bool(false),
        Metric: operations.GetSimCompareMetricEnumSymmetricResnik.ToPointer(),
        QueryID: []string{
            "provident",
            "aut",
            "dolorum",
        },
        RefID: []string{
            "tempora",
            "nam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimResult != nil {
        // handle response
    }
}
```

## GetSimSearch

Search for phenotypically similar diseases or model genes

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
    res, err := s.Sim.GetSimSearch(ctx, operations.GetSimSearchRequest{
        ID: []string{
            "odio",
            "nostrum",
        },
        IsFeatureSet: sdk.Bool(false),
        Limit: sdk.Int64(980160),
        Metric: operations.GetSimSearchMetricEnumPhenodigm.ToPointer(),
        Taxon: sdk.String("autem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimResult != nil {
        // handle response
    }
}
```

## PostAnnotationScore

Get annotation score

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
    res, err := s.Sim.PostAnnotationScore(ctx, shared.SufficiencyPostInput{
        Features: []shared.Feature{
            shared.Feature{
                ID: sdk.String("56d385a3-c4ac-4631-b99e-26ced8f9fdb9"),
                IsPresent: sdk.Bool(false),
                Label: sdk.String("dolore"),
                Type: sdk.String("et"),
            },
            shared.Feature{
                ID: sdk.String("0f63bbf8-1783-47b0-9afd-d788624189eb"),
                IsPresent: sdk.Bool(false),
                Label: sdk.String("incidunt"),
                Type: sdk.String("labore"),
            },
            shared.Feature{
                ID: sdk.String("873f5033-f19d-4bf1-a5ce-4152eab9cd7e"),
                IsPresent: sdk.Bool(false),
                Label: sdk.String("minima"),
                Type: sdk.String("odit"),
            },
            shared.Feature{
                ID: sdk.String("24a6a0e1-23b7-4847-ac59-e1f67f3c4cce"),
                IsPresent: sdk.Bool(false),
                Label: sdk.String("tempora"),
                Type: sdk.String("libero"),
            },
        },
        ID: sdk.String("6d7696ff-3c57-4475-8135-7e44f51f8b08"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SufficiencyOutput != nil {
        // handle response
    }
}
```

## PostSimCompare

Compare a reference profile vs one or more profiles

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
    res, err := s.Sim.PostSimCompare(ctx, shared.CompareInput{
        QueryIds: [][]string{
            []string{
                "dolor",
                "sunt",
                "omnis",
                "quam",
            },
            []string{
                "dicta",
                "excepturi",
                "consectetur",
                "deserunt",
            },
        },
        ReferenceIds: []string{
            "incidunt",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimResult != nil {
        // handle response
    }
}
```
