# NlpAnnotate

## Overview

annotate text using named entities

### Available Operations

* [GetAnnotate](#getannotate) - Annotate a given text using SciGraph annotator
* [GetAnnotateEntities](#getannotateentities) - Annotate a given content using SciGraph annotator and get all entities from content
* [PostAnnotate](#postannotate) - Annotate a given text using SciGraph annotator
* [PostAnnotateEntities](#postannotateentities) - Annotate a given content using SciGraph annotator and get all entities from content

## GetAnnotate

Annotate a given text using SciGraph annotator

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
    res, err := s.NlpAnnotate.GetAnnotate(ctx, operations.GetAnnotateRequest{
        Content: sdk.String("repudiandae"),
        ExcludeCategory: []string{
            "molestias",
            "architecto",
        },
        IncludeAbbreviation: sdk.Bool(false),
        IncludeAcronym: sdk.Bool(false),
        IncludeCategory: []string{
            "quisquam",
            "praesentium",
            "facilis",
        },
        IncludeNumbers: sdk.Bool(false),
        LongestOnly: sdk.Bool(false),
        MinLength: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAnnotateEntities

Annotate a given content using SciGraph annotator and get all entities from content

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
    res, err := s.NlpAnnotate.GetAnnotateEntities(ctx, operations.GetAnnotateEntitiesRequest{
        Content: sdk.String("repudiandae"),
        ExcludeCategory: []string{
            "ipsum",
            "commodi",
            "vitae",
            "fugit",
        },
        IncludeAbbreviation: sdk.Bool(false),
        IncludeAcronym: sdk.Bool(false),
        IncludeCategory: []string{
            "ex",
            "neque",
            "quod",
        },
        IncludeNumbers: sdk.Bool(false),
        LongestOnly: sdk.Bool(false),
        MinLength: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EntityAnnotationResult != nil {
        // handle response
    }
}
```

## PostAnnotate

Annotate a given text using SciGraph annotator

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
    res, err := s.NlpAnnotate.PostAnnotate(ctx, operations.PostAnnotateRequest{
        Content: sdk.String("alias"),
        ExcludeCategory: []string{
            "a",
            "facere",
        },
        IncludeAbbreviation: sdk.Bool(false),
        IncludeAcronym: sdk.Bool(false),
        IncludeCategory: []string{
            "atque",
            "quaerat",
            "aperiam",
        },
        IncludeNumbers: sdk.Bool(false),
        LongestOnly: sdk.Bool(false),
        MinLength: sdk.String("dignissimos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAnnotateEntities

Annotate a given content using SciGraph annotator and get all entities from content

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
    res, err := s.NlpAnnotate.PostAnnotateEntities(ctx, operations.PostAnnotateEntitiesRequest{
        Content: sdk.String("quam"),
        ExcludeCategory: []string{
            "fuga",
            "iure",
        },
        IncludeAbbreviation: sdk.Bool(false),
        IncludeAcronym: sdk.Bool(false),
        IncludeCategory: []string{
            "officia",
            "sint",
            "laborum",
        },
        IncludeNumbers: sdk.Bool(false),
        LongestOnly: sdk.Bool(false),
        MinLength: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EntityAnnotationResult != nil {
        // handle response
    }
}
```
