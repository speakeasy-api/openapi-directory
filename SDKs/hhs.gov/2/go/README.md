# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hhs.gov/2/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaigns.GetResourcesCampaignsJSON(ctx, operations.GetResourcesCampaignsJSONRequest{
        Max: sdk.Int(548814),
        Offset: sdk.Int(592845),
        Sort: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignWrapped != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Campaigns](docs/campaigns/README.md)

* [GetResourcesCampaignsJSON](docs/campaigns/README.md#getresourcescampaignsjson) - Get Campaigns
* [GetResourcesCampaignsIDJSON](docs/campaigns/README.md#getresourcescampaignsidjson) - Get Campaign by ID
* [GetResourcesCampaignsIDMediaJSON](docs/campaigns/README.md#getresourcescampaignsidmediajson) - Get MediaItems by Campaign ID
* [GetResourcesCampaignsIDSyndicateFormat](docs/campaigns/README.md#getresourcescampaignsidsyndicateformat) - Get MediaItems for Campaign

### [Languages](docs/languages/README.md)

* [GetResourcesLanguagesJSON](docs/languages/README.md#getresourceslanguagesjson) - Get Languages
* [GetResourcesLanguagesIDJSON](docs/languages/README.md#getresourceslanguagesidjson) - Get Language by ID

### [Media](docs/media/README.md)

* [GetResourcesMediaJSON](docs/media/README.md#getresourcesmediajson) - Get MediaItems
* [GetResourcesMediaFeaturedJSON](docs/media/README.md#getresourcesmediafeaturedjson) - Get the list of featured content in the syndication system
* [GetResourcesMediaMostPopularMediaFormat](docs/media/README.md#getresourcesmediamostpopularmediaformat) - Get MediaItems by popularity
* [GetResourcesMediaSearchResultsJSON](docs/media/README.md#getresourcesmediasearchresultsjson) - Get MediaItems by search query
* [GetResourcesMediaIDJSON](docs/media/README.md#getresourcesmediaidjson) - Get MediaItem by ID
* [GetResourcesMediaIDContent](docs/media/README.md#getresourcesmediaidcontent) - Get content for MediaItem
* [GetResourcesMediaIDEmbedJSON](docs/media/README.md#getresourcesmediaidembedjson) - Get embed code for MediaItem
* [GetResourcesMediaIDPreviewJpg](docs/media/README.md#getresourcesmediaidpreviewjpg) - Get Tag by ID
* [GetResourcesMediaIDRelatedMediaFormat](docs/media/README.md#getresourcesmediaidrelatedmediaformat) - Get related MediaItems by ID
* [GetResourcesMediaIDSyndicateFormat](docs/media/README.md#getresourcesmediaidsyndicateformat) - Get syndicated content for MediaItem
* [GetResourcesMediaIDThumbnailJpg](docs/media/README.md#getresourcesmediaidthumbnailjpg) - Get JPG thumbnail for MediaItem
* [GetResourcesMediaIDYoutubeMetaDataJSON](docs/media/README.md#getresourcesmediaidyoutubemetadatajson) - Get Youtube metadata for MediaItem

### [MediaTypes](docs/mediatypes/README.md)

* [GetResourcesMediaTypesFormat](docs/mediatypes/README.md#getresourcesmediatypesformat) - Get MediaTypes

### [Resources](docs/resources/README.md)

* [GetResourcesJSON](docs/resources/README.md#getresourcesjson) - Get Resources by search query

### [Sources](docs/sources/README.md)

* [GetResourcesSourcesJSON](docs/sources/README.md#getresourcessourcesjson) - Get Sources
* [GetResourcesSourcesIDJSON](docs/sources/README.md#getresourcessourcesidjson) - Get Source by ID
* [GetResourcesSourcesIDSyndicateFormat](docs/sources/README.md#getresourcessourcesidsyndicateformat) - Get MediaItems for Source

### [Tags](docs/tags/README.md)

* [GetResourcesTagsFormat](docs/tags/README.md#getresourcestagsformat) - Get Tags
* [GetResourcesTagsTagLanguagesFormat](docs/tags/README.md#getresourcestagstaglanguagesformat) - Get TagLanguages
* [GetResourcesTagsTagTypesFormat](docs/tags/README.md#getresourcestagstagtypesformat) - Get MediaItems for Tag
* [GetResourcesTagsIDFormat](docs/tags/README.md#getresourcestagsidformat) - Get Tag by ID
* [GetResourcesTagsIDMediaFormat](docs/tags/README.md#getresourcestagsidmediaformat) - Get MediaItems for Tag
* [GetResourcesTagsIDRelatedFormat](docs/tags/README.md#getresourcestagsidrelatedformat) - Get related Tags by ID
* [GetResourcesTagsIDSyndicateFormat](docs/tags/README.md#getresourcestagsidsyndicateformat) - Get MediaItems for Tag

### [UserMediaLists](docs/usermedialists/README.md)

* [GetResourcesUserMediaListsIDJSON](docs/usermedialists/README.md#getresourcesusermedialistsidjson) - Get UserMediaList by ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
