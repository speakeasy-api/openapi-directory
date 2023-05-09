# Settings

### Available Operations

* [GetAllSettings](#getallsettings) - Get all settings
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
* [ResetAllSettings](#resetallsettings) - Reset all settings
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
* [UpdateSettings](#updatesettings) - Update settings
* [UpdateSortableAttributes](#updatesortableattributes) - Update sortable attributes
* [UpdateStopWords](#updatestopwords) - Update stop-words
* [UpdateSynonyms](#updatesynonyms) - Update synonyms
* [UpdateTypoTolerance](#updatetypotolerance) - Update typo-tolerance

## GetAllSettings

Get all settings

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
    res, err := s.Settings.GetAllSettings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

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
    res, err := s.Settings.GetDisplayedAttributes(ctx)
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
    res, err := s.Settings.GetDistinctAttribute(ctx)
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
    res, err := s.Settings.GetFaceting(ctx)
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
    res, err := s.Settings.GetFilterableAttributes(ctx)
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
    res, err := s.Settings.GetPagination(ctx)
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
    res, err := s.Settings.GetRankingRules(ctx)
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
    res, err := s.Settings.GetSearchableAttributes(ctx)
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
    res, err := s.Settings.GetSortableAttributes(ctx)
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
    res, err := s.Settings.GetStopWords(ctx, []string{
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
    res, err := s.Settings.GetSynonyms(ctx)
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
    res, err := s.Settings.GetTypoTolerance(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetAllSettings

Reset all settings

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
    res, err := s.Settings.ResetAllSettings(ctx)
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
    res, err := s.Settings.ResetDisplayedAttributes(ctx)
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
    res, err := s.Settings.ResetDistinctAttribute(ctx)
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
    res, err := s.Settings.ResetFaceting(ctx)
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
    res, err := s.Settings.ResetFilterableAttributes(ctx)
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
    res, err := s.Settings.ResetPagination(ctx)
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
    res, err := s.Settings.ResetRankingRules(ctx)
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
    res, err := s.Settings.ResetSearchableAttributes(ctx)
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
    res, err := s.Settings.ResetSortableAttributes(ctx)
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
    res, err := s.Settings.ResetStopWords(ctx)
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
    res, err := s.Settings.ResetSynonyms(ctx, []byte("molestiae"))
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
    res, err := s.Settings.ResetTypoTolerance(ctx)
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
    res, err := s.Settings.UpdateDisplayedAttributes(ctx, []string{
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
    res, err := s.Settings.UpdateDistinctAttribute(ctx, []byte("placeat"))
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
    res, err := s.Settings.UpdateFaceting(ctx, operations.UpdateFacetingRequestBody{
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
    res, err := s.Settings.UpdateFilterableAttributes(ctx, []string{
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
    res, err := s.Settings.UpdatePagination(ctx, operations.UpdatePaginationRequestBody{
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
    res, err := s.Settings.UpdateRankingRules(ctx, []string{
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
    res, err := s.Settings.UpdateSearchableAttributes(ctx, []string{
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

## UpdateSettings

Update settings

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
    res, err := s.Settings.UpdateSettings(ctx, operations.UpdateSettingsRequestBody{
        DisplayedAttributes: []string{
            "title",
            "title",
        },
        FilterableAttributes: []string{
            "genre",
            "genre",
            "genre",
            "genre",
        },
        SearchableAttributes: []string{
            "title",
            "title",
            "title",
            "title",
        },
        SortableAttributes: []string{
            "price",
        },
        StopWords: []string{
            "of",
            "of",
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
    res, err := s.Settings.UpdateSortableAttributes(ctx, []string{
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
    res, err := s.Settings.UpdateStopWords(ctx, []string{
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
    res, err := s.Settings.UpdateSynonyms(ctx, operations.UpdateSynonymsRequestBody{
        HarryPotter: []string{
            "hp",
        },
        Hp: []string{
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
    res, err := s.Settings.UpdateTypoTolerance(ctx, operations.UpdateTypoToleranceRequestBody{
        DisableOnAttributes: []string{
            "genre",
            "genre",
            "genre",
            "genre",
        },
        DisableOnWords: []string{
            "Prince",
            "Prince",
            "Prince",
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
