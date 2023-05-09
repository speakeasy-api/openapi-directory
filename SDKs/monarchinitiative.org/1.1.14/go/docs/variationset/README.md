# VariationSet

## Overview

Operations related to sets of variants

### Available Operations

* [DeleteVariantSetItem](#deletevariantsetitem) - Deletes variant set
* [GetVariantAnalyze](#getvariantanalyze) - Returns list of matches
* [GetVariantSetItem](#getvariantsetitem) - Returns a variant set
* [GetVariantSetsArchiveCollection](#getvariantsetsarchivecollection) - Returns list of variant sets from a specified time period
* [GetVariantSetsCollection](#getvariantsetscollection) - Returns list of variant sets
* [PostVariantSetsCollection](#postvariantsetscollection) - Creates a new variant set
* [PutVariantSetItem](#putvariantsetitem) - Updates a variant set

## DeleteVariantSetItem

Deletes variant set

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
    res, err := s.VariationSet.DeleteVariantSetItem(ctx, operations.DeleteVariantSetItemRequest{
        ID: "5467f948-74c2-4d5c-8497-2233e66bd8fe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVariantAnalyze

Returns list of matches

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
    res, err := s.VariationSet.GetVariantAnalyze(ctx, operations.GetVariantAnalyzeRequest{
        ID: "5d00b979-ef20-4387-b205-90ccc1096400",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```

## GetVariantSetItem

Returns a variant set

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
    res, err := s.VariationSet.GetVariantSetItem(ctx, operations.GetVariantSetItemRequest{
        ID: "313b3e50-44f6-45fe-b2dc-4077d0cc3f40",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VariantSet != nil {
        // handle response
    }
}
```

## GetVariantSetsArchiveCollection

Returns list of variant sets from a specified time period

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
    res, err := s.VariationSet.GetVariantSetsArchiveCollection(ctx, operations.GetVariantSetsArchiveCollectionRequest{
        Day: 548473,
        Month: 933847,
        Page: sdk.Int64(938015),
        PerPage: operations.GetVariantSetsArchiveCollectionPerPageEnumForty.ToPointer(),
        Year: 119928,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageOfVariantSets != nil {
        // handle response
    }
}
```

## GetVariantSetsCollection

Returns list of variant sets

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
    res, err := s.VariationSet.GetVariantSetsCollection(ctx, operations.GetVariantSetsCollectionRequest{
        Page: sdk.Int64(358861),
        PerPage: operations.GetVariantSetsCollectionPerPageEnumForty.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageOfVariantSets != nil {
        // handle response
    }
}
```

## PostVariantSetsCollection

Creates a new variant set

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VariationSet.PostVariantSetsCollection(ctx, shared.VariantSet{
        Body: "eveniet",
        Category: sdk.String("cum"),
        CategoryID: sdk.Int64(296257),
        ID: sdk.Int64(850776),
        PubDate: types.MustTimeFromString("2022-02-10T10:36:16.997Z"),
        Title: "Mr.",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutVariantSetItem

Updates a variant set

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VariationSet.PutVariantSetItem(ctx, operations.PutVariantSetItemRequest{
        ID: "eae0f75a-edf2-4aca-b58b-991c926ddb58",
        VariantSet: shared.VariantSet{
            Body: "sint",
            Category: sdk.String("eius"),
            CategoryID: sdk.Int64(426571),
            ID: sdk.Int64(97674),
            PubDate: types.MustTimeFromString("2021-07-19T02:34:49.174Z"),
            Title: "Mrs.",
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
