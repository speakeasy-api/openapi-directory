# SearchAPI

## Overview

Endpoints to search podcasts

### Available Operations

* [GetRelatedSearches](#getrelatedsearches) - Fetch related search terms
* [GetTrendingSearches](#gettrendingsearches) - Fetch trending search terms
* [Search](#search) - Full-text search
* [Spellcheck](#spellcheck) - Spell check on a search term
* [Typeahead](#typeahead) - Typeahead search

## GetRelatedSearches

Suggest related search terms. The results are more comprehensive than from `GET /typeahead`. This endpoint is available only in the PRO/ENTERPRISE plan.

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
    res, err := s.SearchAPI.GetRelatedSearches(ctx, operations.GetRelatedSearchesRequest{
        XListenAPIKey: "illum",
        Q: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RelatedSearchesResponse != nil {
        // handle response
    }
}
```

## GetTrendingSearches

Fetch up to 10 most recent trending search terms on the Listen Notes platform.

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
    res, err := s.SearchAPI.GetTrendingSearches(ctx, operations.GetTrendingSearchesRequest{
        XListenAPIKey: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrendingSearchesResponse != nil {
        // handle response
    }
}
```

## Search

Full-text search on episodes, podcasts, or curated lists of podcasts.
Use the `offset` parameter to paginate through search results.
The FREE plan allows to see up to 30 search results (or `offset` < 30) per query.
The PRO plan allows to see up to 300 search results (or `offset` < 300) per query.
The ENTERPRISE plan allows to see up to 10,000 search results (or `offset` < 10000) per query.


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
    res, err := s.SearchAPI.Search(ctx, operations.SearchRequest{
        XListenAPIKey: "ea",
        EpisodeCountMax: sdk.Int64(569101),
        EpisodeCountMin: sdk.Int64(139972),
        GenreIds: sdk.String("ea"),
        Language: sdk.String("accusantium"),
        LenMax: sdk.Int64(69167),
        LenMin: sdk.Int64(982575),
        Ncid: sdk.String("quidem"),
        Ocid: sdk.String("ipsam"),
        Offset: sdk.Int64(453543),
        OnlyIn: sdk.String("autem"),
        PageSize: sdk.Int64(722056),
        PublishedAfter: sdk.Int64(50588),
        PublishedBefore: sdk.Int64(866383),
        Q: "nemo",
        Region: sdk.String("voluptatibus"),
        SafeMode: operations.SearchSafeModeEnumZero.ToPointer(),
        SortByDate: operations.SearchSortByDateEnumOne.ToPointer(),
        Type: operations.SearchTypeEnumEpisode.ToPointer(),
        UniquePodcasts: operations.SearchUniquePodcastsEnumZero.ToPointer(),
        UpdateFreqMax: sdk.Int64(764912),
        UpdateFreqMin: sdk.Int64(359978),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```

## Spellcheck

Suggest a list of words that correct the spelling errors of a search term. This endpoint is available only in the PRO/ENTERPRISE plan.

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
    res, err := s.SearchAPI.Spellcheck(ctx, operations.SpellcheckRequest{
        XListenAPIKey: "hic",
        Q: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpellCheckResponse != nil {
        // handle response
    }
}
```

## Typeahead

Suggest search terms, podcast genres, and podcasts.

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
    res, err := s.SearchAPI.Typeahead(ctx, operations.TypeaheadRequest{
        XListenAPIKey: "nobis",
        Q: "dolores",
        SafeMode: operations.TypeaheadSafeModeEnumZero.ToPointer(),
        ShowGenres: operations.TypeaheadShowGenresEnumOne.ToPointer(),
        ShowPodcasts: operations.TypeaheadShowPodcastsEnumZero.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TypeaheadResponse != nil {
        // handle response
    }
}
```
