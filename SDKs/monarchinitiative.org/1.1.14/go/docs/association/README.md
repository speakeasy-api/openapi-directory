# Association

## Overview

Retrieve associations between entities or entity and descriptors

### Available Operations

* [GetAssociationBySubjectAndAssocType](#getassociationbysubjectandassoctype) - Returns list of matching associations of a given type
* [GetAssociationBySubjectAndObjectCategorySearch](#getassociationbysubjectandobjectcategorysearch) - Returns list of matching associations between a given subject and object category
* [GetAssociationBySubjectCategorySearch](#getassociationbysubjectcategorysearch) - Returns list of matching associations for a given subject category
* [GetAssociationObject](#getassociationobject) - Returns the association with a given identifier
* [GetAssociationsBetween](#getassociationsbetween) - Returns associations connecting two entities
* [GetAssociationsFrom](#getassociationsfrom) - Returns list of matching associations starting from a given subject (source)
* [GetAssociationsTo](#getassociationsto) - Returns list of matching associations pointing to a given object (target)

## GetAssociationBySubjectAndAssocType

Returns list of matching associations of a given type

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
    res, err := s.Association.GetAssociationBySubjectAndAssocType(ctx, operations.GetAssociationBySubjectAndAssocTypeRequest{
        AssociationType: "corrupti",
        Evidence: sdk.String("illum"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Object: sdk.String("vel"),
        Rows: sdk.Int64(623564),
        Start: sdk.Int64(645894),
        Subject: sdk.String("suscipit"),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetAssociationBySubjectAndObjectCategorySearch

Returns list of matching associations between a given subject and object category

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
    res, err := s.Association.GetAssociationBySubjectAndObjectCategorySearch(ctx, operations.GetAssociationBySubjectAndObjectCategorySearchRequest{
        Evidence: sdk.String("iure"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Object: sdk.String("magnam"),
        ObjectCategory: "debitis",
        ObjectTaxon: sdk.String("ipsa"),
        Relation: sdk.String("delectus"),
        Rows: sdk.Int64(272656),
        Start: sdk.Int64(383441),
        Subject: sdk.String("molestiae"),
        SubjectCategory: "minus",
        SubjectTaxon: sdk.String("placeat"),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetAssociationBySubjectCategorySearch

Returns list of matching associations for a given subject category

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
    res, err := s.Association.GetAssociationBySubjectCategorySearch(ctx, operations.GetAssociationBySubjectCategorySearchRequest{
        Evidence: sdk.String("voluptatum"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        ObjectTaxon: sdk.String("iusto"),
        Relation: sdk.String("excepturi"),
        Rows: sdk.Int64(392785),
        Start: sdk.Int64(925597),
        SubjectCategory: "temporibus",
        SubjectTaxon: sdk.String("ab"),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetAssociationObject

An association connects, at a minimum, two things, designated subject and object,
via some relationship. Associations also include evidence, provenance etc.

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
    res, err := s.Association.GetAssociationObject(ctx, operations.GetAssociationObjectRequest{
        ID: "51a05dfc-2ddf-47cc-b8ca-1ba928fc8167",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetAssociationsBetween

Given two entities (e.g. a particular gene and a particular disease), if these two entities
are connected (directly or indirectly), then return the association objects describing
the connection.

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
    res, err := s.Association.GetAssociationsBetween(ctx, operations.GetAssociationsBetweenRequest{
        Evidence: sdk.String("modi"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Object: "qui",
        Rows: sdk.Int64(774234),
        Start: sdk.Int64(736918),
        Subject: "esse",
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetAssociationsFrom

Returns list of matching associations starting from a given subject (source)

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
    res, err := s.Association.GetAssociationsFrom(ctx, operations.GetAssociationsFromRequest{
        Evidence: sdk.String("ipsum"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        ObjectTaxon: sdk.String("excepturi"),
        Relation: sdk.String("aspernatur"),
        Rows: sdk.Int64(18789),
        Start: sdk.Int64(324141),
        Subject: "natus",
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetAssociationsTo

Returns list of matching associations pointing to a given object (target)

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
    res, err := s.Association.GetAssociationsTo(ctx, operations.GetAssociationsToRequest{
        Evidence: sdk.String("sed"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Object: "iste",
        Rows: sdk.Int64(222321),
        Start: sdk.Int64(616934),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```
