# DirectoryAPI

## Overview

Endpoints to fetch podcasts data

### Available Operations

* [GetBestPodcasts](#getbestpodcasts) - Fetch a list of best podcasts by genre
* [GetCuratedPodcastByID](#getcuratedpodcastbyid) - Fetch a curated list of podcasts by id
* [GetCuratedPodcasts](#getcuratedpodcasts) - Fetch curated lists of podcasts
* [GetEpisodeByID](#getepisodebyid) - Fetch detailed meta data for an episode by id
* [GetEpisodeRecommendations](#getepisoderecommendations) - Fetch recommendations for an episode
* [GetEpisodesInBatch](#getepisodesinbatch) - Batch fetch basic meta data for episodes
* [GetGenres](#getgenres) - Fetch a list of podcast genres
* [GetLanguages](#getlanguages) - Fetch a list of supported languages for podcasts
* [GetPodcastByID](#getpodcastbyid) - Fetch detailed meta data and episodes for a podcast by id
* [GetPodcastRecommendations](#getpodcastrecommendations) - Fetch recommendations for a podcast
* [GetPodcastsInBatch](#getpodcastsinbatch) - Batch fetch basic meta data for podcasts
* [GetRegions](#getregions) - Fetch a list of supported countries/regions for best podcasts
* [JustListen](#justlisten) - Fetch a random podcast episode

## GetBestPodcasts

Get a list of curated best podcasts by genre,
which are curated by Listen Notes staffs based on various signals from the Internet, e.g.,
top charts on other podcast platforms, recommendations from mainstream media,
user activities on listennotes.com...
You can get the genre ids from `GET /genres` endpoint.
This endpoint returns same data as https://www.listennotes.com/best-podcasts/


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DirectoryAPI.GetBestPodcasts(ctx, operations.GetBestPodcastsRequest{
        XListenAPIKey: "vel",
        GenreID: sdk.String("error"),
        Language: sdk.String("deserunt"),
        Page: sdk.Int64(384382),
        PublisherRegion: sdk.String("iure"),
        Region: sdk.String("magnam"),
        SafeMode: shared.SafeModeParamEnumOne.ToPointer(),
        Sort: operations.GetBestPodcastsSortEnumRecentAddedFirst.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BestPodcastsResponse != nil {
        // handle response
    }
}
```

## GetCuratedPodcastByID

Get detailed meta data of all podcasts in a specific curated list.
This endpoint returns same data as https://www.listennotes.com/curated-podcasts/


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
    res, err := s.DirectoryAPI.GetCuratedPodcastByID(ctx, operations.GetCuratedPodcastByIDRequest{
        XListenAPIKey: "delectus",
        ID: "467cc879-6ed1-451a-85df-c2ddf7cc78ca",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CuratedListFull != nil {
        // handle response
    }
}
```

## GetCuratedPodcasts

A bunch of curated lists from online media. For each list, you'll get basic info of up to 5 podcasts. To get detailed meta data of all podcasts in a specific list, you need to use `GET /curated_podcasts/{id}`. We add new curated lists to the database on a daily basis.


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
    res, err := s.DirectoryAPI.GetCuratedPodcasts(ctx, operations.GetCuratedPodcastsRequest{
        XListenAPIKey: "dicta",
        Page: sdk.Int64(720633),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCuratedPodcastsResponse != nil {
        // handle response
    }
}
```

## GetEpisodeByID

Fetch detailed meta data for a specific episode.

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
    res, err := s.DirectoryAPI.GetEpisodeByID(ctx, operations.GetEpisodeByIDRequest{
        XListenAPIKey: "officia",
        ID: "928fc816-742c-4b73-9205-929396fea759",
        ShowTranscript: sdk.Int64(437032),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EpisodeFull != nil {
        // handle response
    }
}
```

## GetEpisodeRecommendations

Fetch up to 8 episode recommendations based on the given episode id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DirectoryAPI.GetEpisodeRecommendations(ctx, operations.GetEpisodeRecommendationsRequest{
        XListenAPIKey: "saepe",
        ID: "b10faaa2-352c-4595-9907-aff1a3a2fa94",
        SafeMode: shared.SafeModeParamEnumZero.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEpisodeRecommendationsResponse != nil {
        // handle response
    }
}
```

## GetEpisodesInBatch

Batch fetch basic meta data for up to 10 episodes. This endpoint could be used to implement custom playlists for individual episodes. For detailed meta data of an individual episode, you need to use `GET /episodes/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DirectoryAPI.GetEpisodesInBatch(ctx, operations.GetEpisodesInBatchRequest{
        GetEpisodesInBatchForm: shared.GetEpisodesInBatchForm{
            Ids: "quam",
        },
        XListenAPIKey: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEpisodesInBatchResponse != nil {
        // handle response
    }
}
```

## GetGenres

Get a list of podcast genres that are supported in Listen Notes.
The genre id can be passed to other endpoints as a parameter to get podcasts in a specific genre,
e.g., `GET /best_podcasts`, `GET /search`...
You may want to cache the list of genres on the client side.


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
    res, err := s.DirectoryAPI.GetGenres(ctx, operations.GetGenresRequest{
        XListenAPIKey: "velit",
        TopLevelOnly: operations.GetGenresTopLevelOnlyEnumOne.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGenresResponse != nil {
        // handle response
    }
}
```

## GetLanguages

Get a list of languages that are supported in Listen Notes database. You can use the language string as query parameter in `GET /search`.


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
    res, err := s.DirectoryAPI.GetLanguages(ctx, operations.GetLanguagesRequest{
        XListenAPIKey: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLanguagesResponse != nil {
        // handle response
    }
}
```

## GetPodcastByID

Fetch detailed meta data and episodes for a specific podcast (up to 10 episodes each time).
You can use the **next_episode_pub_date** parameter to do pagination and fetch more episodes.


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
    res, err := s.DirectoryAPI.GetPodcastByID(ctx, operations.GetPodcastByIDRequest{
        XListenAPIKey: "quis",
        ID: "1aa52c3f-5ad0-419d-a1ff-e78f097b0074",
        NextEpisodePubDate: sdk.Int64(979587),
        Sort: operations.GetPodcastByIDSortEnumRecentFirst.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PodcastFull != nil {
        // handle response
    }
}
```

## GetPodcastRecommendations

Fetch up to 8 podcast recommendations based on the given podcast id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DirectoryAPI.GetPodcastRecommendations(ctx, operations.GetPodcastRecommendationsRequest{
        XListenAPIKey: "corporis",
        ID: "471b5e6e-13b9-49d4-88e1-e91e450ad2ab",
        SafeMode: shared.SafeModeParamEnumOne.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPodcastRecommendationsResponse != nil {
        // handle response
    }
}
```

## GetPodcastsInBatch

Batch fetch basic meta data for up to 10 podcasts.
This endpoint could be used to build something like OPML import,
allowing users to import a bunch of podcasts via rss urls.
For detailed meta data (including episodes) of an individual podcast, you need to use `GET /podcasts/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DirectoryAPI.GetPodcastsInBatch(ctx, operations.GetPodcastsInBatchRequest{
        GetPodcastsInBatchForm: &shared.GetPodcastsInBatchForm{
            Ids: sdk.String("labore"),
            ItunesIds: sdk.String("modi"),
            NextEpisodePubDate: sdk.Int64(183191),
            Rsses: sdk.String("aliquid"),
            ShowLatestEpisodes: shared.GetPodcastsInBatchFormShowLatestEpisodesEnumOne.ToPointer(),
            SpotifyIds: sdk.String("quos"),
        },
        XListenAPIKey: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPodcastsInBatchResponse != nil {
        // handle response
    }
}
```

## GetRegions

It returns a dictionary of country codes (e.g., us, gb...) & country names (United States, United Kingdom...). The country code is used in the query parameter **region** of `GET /best_podcasts`.


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
    res, err := s.DirectoryAPI.GetRegions(ctx, operations.GetRegionsRequest{
        XListenAPIKey: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRegionsResponse != nil {
        // handle response
    }
}
```

## JustListen

Recently published episodes are more likely to be fetched. Good luck!

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
    res, err := s.DirectoryAPI.JustListen(ctx, operations.JustListenRequest{
        XListenAPIKey: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EpisodeSimple != nil {
        // handle response
    }
}
```
