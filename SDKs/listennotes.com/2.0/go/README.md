# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/listennotes.com/2.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetBestPodcastsRequest{
        XListenAPIKey: "corrupti",
        GenreID: "provident",
        Language: "distinctio",
        Page: 844266,
        PublisherRegion: "unde",
        Region: "nulla",
        SafeMode: "1",
        Sort: "listen_score",
    }

    ctx := context.Background()
    res, err := s.DirectoryAPI.GetBestPodcasts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BestPodcastsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### DirectoryAPI

* `GetBestPodcasts` - Fetch a list of best podcasts by genre
* `GetCuratedPodcastByID` - Fetch a curated list of podcasts by id
* `GetCuratedPodcasts` - Fetch curated lists of podcasts
* `GetEpisodeByID` - Fetch detailed meta data for an episode by id
* `GetEpisodeRecommendations` - Fetch recommendations for an episode
* `GetEpisodesInBatch` - Batch fetch basic meta data for episodes
* `GetGenres` - Fetch a list of podcast genres
* `GetLanguages` - Fetch a list of supported languages for podcasts
* `GetPodcastByID` - Fetch detailed meta data and episodes for a podcast by id
* `GetPodcastRecommendations` - Fetch recommendations for a podcast
* `GetPodcastsInBatch` - Batch fetch basic meta data for podcasts
* `GetRegions` - Fetch a list of supported countries/regions for best podcasts
* `JustListen` - Fetch a random podcast episode

### InsightsAPI

* `GetPodcastAudience` - Fetch audience demographics for a podcast

### PlaylistAPI

* `GetPlaylistByID` - Fetch a playlist's info and items (i.e., episodes or podcasts).
* `GetPlaylists` - Fetch a list of your playlists.

### PodcasterAPI

* `DeletePodcastByID` - Request to delete a podcast
* `SubmitPodcast` - Submit a podcast to Listen Notes database

### SearchAPI

* `GetRelatedSearches` - Fetch related search terms
* `GetTrendingSearches` - Fetch trending search terms
* `Search` - Full-text search
* `Spellcheck` - Spell check on a search term
* `Typeahead` - Typeahead search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
