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
        XListenAPIKey: "corrupti",
        GenreID: sdk.String("provident"),
        Language: sdk.String("distinctio"),
        Page: sdk.Int64(844266),
        PublisherRegion: sdk.String("unde"),
        Region: sdk.String("nulla"),
        SafeMode: shared.SafeModeParamEnumOne.ToPointer(),
        Sort: operations.GetBestPodcastsSortEnumListenScore.ToPointer(),
    })
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


### [DirectoryAPI](docs/directoryapi/README.md)

* [GetBestPodcasts](docs/directoryapi/README.md#getbestpodcasts) - Fetch a list of best podcasts by genre
* [GetCuratedPodcastByID](docs/directoryapi/README.md#getcuratedpodcastbyid) - Fetch a curated list of podcasts by id
* [GetCuratedPodcasts](docs/directoryapi/README.md#getcuratedpodcasts) - Fetch curated lists of podcasts
* [GetEpisodeByID](docs/directoryapi/README.md#getepisodebyid) - Fetch detailed meta data for an episode by id
* [GetEpisodeRecommendations](docs/directoryapi/README.md#getepisoderecommendations) - Fetch recommendations for an episode
* [GetEpisodesInBatch](docs/directoryapi/README.md#getepisodesinbatch) - Batch fetch basic meta data for episodes
* [GetGenres](docs/directoryapi/README.md#getgenres) - Fetch a list of podcast genres
* [GetLanguages](docs/directoryapi/README.md#getlanguages) - Fetch a list of supported languages for podcasts
* [GetPodcastByID](docs/directoryapi/README.md#getpodcastbyid) - Fetch detailed meta data and episodes for a podcast by id
* [GetPodcastRecommendations](docs/directoryapi/README.md#getpodcastrecommendations) - Fetch recommendations for a podcast
* [GetPodcastsInBatch](docs/directoryapi/README.md#getpodcastsinbatch) - Batch fetch basic meta data for podcasts
* [GetRegions](docs/directoryapi/README.md#getregions) - Fetch a list of supported countries/regions for best podcasts
* [JustListen](docs/directoryapi/README.md#justlisten) - Fetch a random podcast episode

### [InsightsAPI](docs/insightsapi/README.md)

* [GetPodcastAudience](docs/insightsapi/README.md#getpodcastaudience) - Fetch audience demographics for a podcast
* [GetPodcastsByDomainName](docs/insightsapi/README.md#getpodcastsbydomainname) - Fetch podcasts by a publisher's domain name

### [PlaylistAPI](docs/playlistapi/README.md)

* [GetPlaylistByID](docs/playlistapi/README.md#getplaylistbyid) - Fetch a playlist's info and items (i.e., episodes or podcasts).
* [GetPlaylists](docs/playlistapi/README.md#getplaylists) - Fetch a list of your playlists.

### [PodcasterAPI](docs/podcasterapi/README.md)

* [DeletePodcastByID](docs/podcasterapi/README.md#deletepodcastbyid) - Request to delete a podcast
* [SubmitPodcast](docs/podcasterapi/README.md#submitpodcast) - Submit a podcast to Listen Notes database

### [SearchAPI](docs/searchapi/README.md)

* [GetRelatedSearches](docs/searchapi/README.md#getrelatedsearches) - Fetch related search terms
* [GetTrendingSearches](docs/searchapi/README.md#gettrendingsearches) - Fetch trending search terms
* [Search](docs/searchapi/README.md#search) - Full-text search
* [Spellcheck](docs/searchapi/README.md#spellcheck) - Spell check on a search term
* [Typeahead](docs/searchapi/README.md#typeahead) - Typeahead search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
