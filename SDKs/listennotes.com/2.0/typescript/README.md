# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/listennotes.com/2.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/listennotes.com/2.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetBestPodcastsRequest,
  GetBestPodcastsResponse,
  GetBestPodcastsSortEnum,
} from "openapi/dist/sdk/models/operations";
import {
  SafeModeParamEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBestPodcastsRequest = {
  xListenAPIKey: "corrupti",
  genreId: "provident",
  language: "distinctio",
  page: 844266,
  publisherRegion: "unde",
  region: "nulla",
  safeMode: SafeModeParamEnum.One,
  sort: GetBestPodcastsSortEnum.ListenScore,
};

sdk.directoryAPI.getBestPodcasts(req).then((res: GetBestPodcastsResponse | AxiosError) => {
   // handle response
});
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

