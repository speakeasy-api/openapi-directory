# Bioentityset

## Overview

Operations over sets of entities

### Available Operations

* [GetEntitySetAssociations](#getentitysetassociations) - Returns compact associations for a given input set
* [GetEntitySetGraphResource](#getentitysetgraphresource) - TODO Graph object spanning all entities
* [GetEntitySetSummary](#getentitysetsummary) - Summary statistics for objects associated
* [GetOverRepresentation](#getoverrepresentation) - Summary statistics for objects associated

## GetEntitySetAssociations

Returns compact associations for a given input set

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
    res, err := s.Bioentityset.GetEntitySetAssociations(ctx, operations.GetEntitySetAssociationsRequest{
        Background: []string{
            "enim",
            "cupiditate",
        },
        ObjectCategory: sdk.String("occaecati"),
        ObjectSlim: sdk.String("itaque"),
        Subject: []string{
            "consectetur",
            "modi",
            "aspernatur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetEntitySetGraphResource

TODO Graph object spanning all entities

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
    res, err := s.Bioentityset.GetEntitySetGraphResource(ctx, operations.GetEntitySetGraphResourceRequest{
        Background: []string{
            "suscipit",
        },
        ObjectCategory: sdk.String("ipsa"),
        ObjectSlim: sdk.String("eveniet"),
        Subject: []string{
            "nobis",
            "qui",
            "accusantium",
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

## GetEntitySetSummary

Summary statistics for objects associated

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
    res, err := s.Bioentityset.GetEntitySetSummary(ctx, operations.GetEntitySetSummaryRequest{
        Background: []string{
            "impedit",
        },
        ObjectCategory: sdk.String("recusandae"),
        ObjectSlim: sdk.String("voluptate"),
        Subject: []string{
            "est",
            "et",
            "expedita",
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

## GetOverRepresentation

Summary statistics for objects associated

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
    res, err := s.Bioentityset.GetOverRepresentation(ctx, operations.GetOverRepresentationRequest{
        Background: []string{
            "quos",
            "maiores",
            "quidem",
            "in",
        },
        MaxPValue: sdk.String("culpa"),
        ObjectCategory: sdk.String("doloremque"),
        Ontology: sdk.String("fuga"),
        Subject: []string{
            "architecto",
        },
        SubjectCategory: sdk.String("suscipit"),
        Taxon: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
