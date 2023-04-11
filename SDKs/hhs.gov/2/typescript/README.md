# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hhs.gov/2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/hhs.gov/2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetResourcesCampaignsJsonRequest,
  GetResourcesCampaignsJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetResourcesCampaignsJsonRequest = {
  max: 548814,
  offset: 592845,
  sort: "distinctio",
};

sdk.campaigns.getResourcesCampaignsJson(req).then((res: GetResourcesCampaignsJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### campaigns

* `getResourcesCampaignsJson` - Get Campaigns
* `getResourcesCampaignsIdJson` - Get Campaign by ID
* `getResourcesCampaignsIdMediaJson` - Get MediaItems by Campaign ID
* `getResourcesCampaignsIdSyndicateFormat` - Get MediaItems for Campaign

### languages

* `getResourcesLanguagesJson` - Get Languages
* `getResourcesLanguagesIdJson` - Get Language by ID

### media

* `getResourcesMediaJson` - Get MediaItems
* `getResourcesMediaFeaturedJson` - Get the list of featured content in the syndication system
* `getResourcesMediaMostPopularMediaFormat` - Get MediaItems by popularity
* `getResourcesMediaSearchResultsJson` - Get MediaItems by search query
* `getResourcesMediaIdJson` - Get MediaItem by ID
* `getResourcesMediaIdContent` - Get content for MediaItem
* `getResourcesMediaIdEmbedJson` - Get embed code for MediaItem
* `getResourcesMediaIdPreviewJpg` - Get Tag by ID
* `getResourcesMediaIdRelatedMediaFormat` - Get related MediaItems by ID
* `getResourcesMediaIdSyndicateFormat` - Get syndicated content for MediaItem
* `getResourcesMediaIdThumbnailJpg` - Get JPG thumbnail for MediaItem
* `getResourcesMediaIdYoutubeMetaDataJson` - Get Youtube metadata for MediaItem

### mediaTypes

* `getResourcesMediaTypesFormat` - Get MediaTypes

### resources

* `getResourcesJson` - Get Resources by search query

### sources

* `getResourcesSourcesJson` - Get Sources
* `getResourcesSourcesIdJson` - Get Source by ID
* `getResourcesSourcesIdSyndicateFormat` - Get MediaItems for Source

### tags

* `getResourcesTagsFormat` - Get Tags
* `getResourcesTagsTagLanguagesFormat` - Get TagLanguages
* `getResourcesTagsTagTypesFormat` - Get MediaItems for Tag
* `getResourcesTagsIdFormat` - Get Tag by ID
* `getResourcesTagsIdMediaFormat` - Get MediaItems for Tag
* `getResourcesTagsIdRelatedFormat` - Get related Tags by ID
* `getResourcesTagsIdSyndicateFormat` - Get MediaItems for Tag

### userMediaLists

* `getResourcesUserMediaListsIdJson` - Get UserMediaList by ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

