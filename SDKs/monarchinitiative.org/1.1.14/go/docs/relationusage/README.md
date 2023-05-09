# RelationUsage

## Overview

Usage of different relationship types

### Available Operations

* [GetRelationUsageBetweenResource](#getrelationusagebetweenresource) - All relations used plus count of associations
* [GetRelationUsagePivotLabelResource](#getrelationusagepivotlabelresource) - Relation usage count for all subj x obj category combinations, showing label
* [GetRelationUsagePivotResource](#getrelationusagepivotresource) - Relation usage count for all subj x obj category combinations
* [GetRelationUsageResource](#getrelationusageresource) - All relations used plus count of associations

## GetRelationUsageBetweenResource

All relations used plus count of associations

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
    res, err := s.RelationUsage.GetRelationUsageBetweenResource(ctx, operations.GetRelationUsageBetweenResourceRequest{
        Evidence: sdk.String("maxime"),
        ObjectCategory: "delectus",
        SubjectCategory: "laboriosam",
        SubjectTaxon: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetRelationUsagePivotLabelResource

Relation usage count for all subj x obj category combinations, showing label

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
    res, err := s.RelationUsage.GetRelationUsagePivotLabelResource(ctx, operations.GetRelationUsagePivotLabelResourceRequest{
        Evidence: sdk.String("quam"),
        SubjectTaxon: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetRelationUsagePivotResource

Relation usage count for all subj x obj category combinations

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
    res, err := s.RelationUsage.GetRelationUsagePivotResource(ctx, operations.GetRelationUsagePivotResourceRequest{
        Evidence: sdk.String("officia"),
        SubjectTaxon: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetRelationUsageResource

All relations used plus count of associations

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
    res, err := s.RelationUsage.GetRelationUsageResource(ctx, operations.GetRelationUsageResourceRequest{
        Evidence: sdk.String("cupiditate"),
        SubjectTaxon: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```
