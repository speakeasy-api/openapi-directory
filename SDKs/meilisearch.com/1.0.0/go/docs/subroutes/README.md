# SubRoutes

### Available Operations

* [GetDisplayedAttributes](#getdisplayedattributes) - Get displayed attributes
* [GetDistinctAttribute](#getdistinctattribute) - Get distinct attribute
* [GetFaceting](#getfaceting) - Get faceting
* [GetFilterableAttributes](#getfilterableattributes) - Get filterable attributes
* [GetPagination](#getpagination) - Get pagination
* [GetRankingRules](#getrankingrules) - Get ranking rules
* [GetSearchableAttributes](#getsearchableattributes) - Get searchable attributes
* [GetSortableAttributes](#getsortableattributes) - Get sortable attributes
* [GetStopWords](#getstopwords) - Get stop-words
* [GetSynonyms](#getsynonyms) - Get synonyms
* [GetTypoTolerance](#gettypotolerance) - Get typo-tolerance
* [ResetDisplayedAttributes](#resetdisplayedattributes) - Reset displayed attributes
* [ResetDistinctAttribute](#resetdistinctattribute) - Reset distinct attribute
* [ResetFaceting](#resetfaceting) - Reset faceting
* [ResetFilterableAttributes](#resetfilterableattributes) - Reset filterable attributes
* [ResetPagination](#resetpagination) - Reset pagination
* [ResetRankingRules](#resetrankingrules) - Reset ranking rules
* [ResetSearchableAttributes](#resetsearchableattributes) - Reset searchable attributes
* [ResetSortableAttributes](#resetsortableattributes) - Reset sortable attributes
* [ResetStopWords](#resetstopwords) - Reset stop-words
* [ResetSynonyms](#resetsynonyms) - Reset synonyms
* [ResetTypoTolerance](#resettypotolerance) - Reset typo-tolerance
* [UpdateDisplayedAttributes](#updatedisplayedattributes) - Update displayed attributes
* [UpdateDistinctAttribute](#updatedistinctattribute) - Update distinct attribute
* [UpdateFaceting](#updatefaceting) - Update faceting
* [UpdateFilterableAttributes](#updatefilterableattributes) - Update filterable attributes
* [UpdatePagination](#updatepagination) - Update pagination
* [UpdateRankingRules](#updaterankingrules) - Update ranking rules
* [UpdateSearchableAttributes](#updatesearchableattributes) - Update searchable attributes
* [UpdateSortableAttributes](#updatesortableattributes) - Update sortable attributes
* [UpdateStopWords](#updatestopwords) - Update stop-words
* [UpdateSynonyms](#updatesynonyms) - Update synonyms
* [UpdateTypoTolerance](#updatetypotolerance) - Update typo-tolerance

## GetDisplayedAttributes

Get displayed attributes

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
    res, err := s.SubRoutes.GetDisplayedAttributes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDistinctAttribute

Get distinct attribute

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
    res, err := s.SubRoutes.GetDistinctAttribute(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFaceting

Get faceting

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
    res, err := s.SubRoutes.GetFaceting(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFilterableAttributes

Get filterable attributes

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
    res, err := s.SubRoutes.GetFilterableAttributes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPagination

Get pagination

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
    res, err := s.SubRoutes.GetPagination(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRankingRules

Get ranking rules

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
    res, err := s.SubRoutes.GetRankingRules(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSearchableAttributes

Get searchable attributes

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
    res, err := s.SubRoutes.GetSearchableAttributes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSortableAttributes

Get sortable attributes

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
    res, err := s.SubRoutes.GetSortableAttributes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetStopWords

Get stop-words

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
    res, err := s.SubRoutes.GetStopWords(ctx, []string{
        "the",
        "the",
        "the",
        "the",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSynonyms

Get synonyms

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
    res, err := s.SubRoutes.GetSynonyms(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTypoTolerance

Get typo-tolerance

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
    res, err := s.SubRoutes.GetTypoTolerance(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetDisplayedAttributes

Reset displayed attributes

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
    res, err := s.SubRoutes.ResetDisplayedAttributes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetDistinctAttribute

Reset distinct attribute

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
    res, err := s.SubRoutes.ResetDistinctAttribute(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetFaceting

Reset faceting

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
    res, err := s.SubRoutes.ResetFaceting(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetFilterableAttributes

Reset filterable attributes

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
    res, err := s.SubRoutes.ResetFilterableAttributes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetPagination

Reset pagination

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
    res, err := s.SubRoutes.ResetPagination(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetRankingRules

Reset ranking rules

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
    res, err := s.SubRoutes.ResetRankingRules(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetSearchableAttributes

Reset searchable attributes

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
    res, err := s.SubRoutes.ResetSearchableAttributes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetSortableAttributes

Reset sortable attributes

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
    res, err := s.SubRoutes.ResetSortableAttributes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetStopWords

Reset stop-words

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
    res, err := s.SubRoutes.ResetStopWords(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetSynonyms

Reset synonyms

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
    res, err := s.SubRoutes.ResetSynonyms(ctx, []byte("odit"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetTypoTolerance

Reset typo-tolerance

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
    res, err := s.SubRoutes.ResetTypoTolerance(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDisplayedAttributes

Update displayed attributes

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
    res, err := s.SubRoutes.UpdateDisplayedAttributes(ctx, []string{
        "title",
        "title",
        "title",
        "title",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDistinctAttribute

Update distinct attribute

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
    res, err := s.SubRoutes.UpdateDistinctAttribute(ctx, []byte("at"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateFaceting

Update faceting

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
    res, err := s.SubRoutes.UpdateFaceting(ctx, operations.UpdateFacetingRequestBody{
        MaxValuesPerFacet: sdk.Float64(3000),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateFilterableAttributes

Update filterable attributes

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
    res, err := s.SubRoutes.UpdateFilterableAttributes(ctx, []string{
        "genre",
        "genre",
        "genre",
        "genre",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePagination

Update pagination

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
    res, err := s.SubRoutes.UpdatePagination(ctx, operations.UpdatePaginationRequestBody{
        MaxTotalHits: sdk.Float64(2000),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateRankingRules

Update ranking rules

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
    res, err := s.SubRoutes.UpdateRankingRules(ctx, []string{
        "typo",
        "typo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSearchableAttributes

Update searchable attributes

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
    res, err := s.SubRoutes.UpdateSearchableAttributes(ctx, []string{
        "title",
        "title",
        "title",
        "title",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSortableAttributes

Update sortable attributes

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
    res, err := s.SubRoutes.UpdateSortableAttributes(ctx, []string{
        "price",
        "price",
        "price",
        "price",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateStopWords

Update stop-words

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
    res, err := s.SubRoutes.UpdateStopWords(ctx, []string{
        "the",
        "the",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSynonyms

Update synonyms

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
    res, err := s.SubRoutes.UpdateSynonyms(ctx, operations.UpdateSynonymsRequestBody{
        HarryPotter: []string{
            "hp",
            "hp",
            "hp",
        },
        Hp: []string{
            "harry potter",
            "harry potter",
            "harry potter",
            "harry potter",
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

## UpdateTypoTolerance

Update typo-tolerance

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
    res, err := s.SubRoutes.UpdateTypoTolerance(ctx, operations.UpdateTypoToleranceRequestBody{
        DisableOnAttributes: []string{
            "genre",
            "genre",
            "genre",
        },
        DisableOnWords: []string{
            "Prince",
        },
        MinWordSizeForTypos: &operations.UpdateTypoToleranceRequestBodyMinWordSizeForTypos{
            OneTypo: sdk.Float64(2),
            TwoTypos: sdk.Float64(11),
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
