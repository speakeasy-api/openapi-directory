# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetBestPodcastsSortEnum;
import org.openapis.openapi.models.operations.GetBestPodcastsRequest;
import org.openapis.openapi.models.operations.GetBestPodcastsResponse;
import org.openapis.openapi.models.shared.SafeModeParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBestPodcastsRequest req = new GetBestPodcastsRequest() {{
                xListenAPIKey = "corrupti";
                genreId = "provident";
                language = "distinctio";
                page = 844266;
                publisherRegion = "unde";
                region = "nulla";
                safeMode = "1";
                sort = "listen_score";
            }}            

            GetBestPodcastsResponse res = sdk.directoryAPI.getBestPodcasts(req);

            if (res.bestPodcastsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### directoryAPI

* `getBestPodcasts` - Fetch a list of best podcasts by genre
* `getCuratedPodcastById` - Fetch a curated list of podcasts by id
* `getCuratedPodcasts` - Fetch curated lists of podcasts
* `getEpisodeById` - Fetch detailed meta data for an episode by id
* `getEpisodeRecommendations` - Fetch recommendations for an episode
* `getEpisodesInBatch` - Batch fetch basic meta data for episodes
* `getGenres` - Fetch a list of podcast genres
* `getLanguages` - Fetch a list of supported languages for podcasts
* `getPodcastById` - Fetch detailed meta data and episodes for a podcast by id
* `getPodcastRecommendations` - Fetch recommendations for a podcast
* `getPodcastsInBatch` - Batch fetch basic meta data for podcasts
* `getRegions` - Fetch a list of supported countries/regions for best podcasts
* `justListen` - Fetch a random podcast episode

### insightsAPI

* `getPodcastAudience` - Fetch audience demographics for a podcast

### playlistAPI

* `getPlaylistById` - Fetch a playlist's info and items (i.e., episodes or podcasts).
* `getPlaylists` - Fetch a list of your playlists.

### podcasterAPI

* `deletePodcastById` - Request to delete a podcast
* `submitPodcast` - Submit a podcast to Listen Notes database

### searchAPI

* `getRelatedSearches` - Fetch related search terms
* `getTrendingSearches` - Fetch trending search terms
* `search` - Full-text search
* `spellcheck` - Spell check on a search term
* `typeahead` - Typeahead search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
