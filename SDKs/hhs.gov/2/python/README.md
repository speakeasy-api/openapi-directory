# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/hhs.gov/2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetResourcesCampaignsJSONRequest(
    max=548814,
    offset=592845,
    sort="distinctio",
)
    
res = s.campaigns.get_resources_campaigns_json(req)

if res.campaign_wrapped is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### campaigns

* `get_resources_campaigns_json` - Get Campaigns
* `get_resources_campaigns_id_json` - Get Campaign by ID
* `get_resources_campaigns_id_media_json` - Get MediaItems by Campaign ID
* `get_resources_campaigns_id_syndicate_format_` - Get MediaItems for Campaign

### languages

* `get_resources_languages_json` - Get Languages
* `get_resources_languages_id_json` - Get Language by ID

### media

* `get_resources_media_json` - Get MediaItems
* `get_resources_media_featured_json` - Get the list of featured content in the syndication system
* `get_resources_media_most_popular_media_format_` - Get MediaItems by popularity
* `get_resources_media_search_results_json` - Get MediaItems by search query
* `get_resources_media_id_json` - Get MediaItem by ID
* `get_resources_media_id_content` - Get content for MediaItem
* `get_resources_media_id_embed_json` - Get embed code for MediaItem
* `get_resources_media_id_preview_jpg` - Get Tag by ID
* `get_resources_media_id_related_media_format_` - Get related MediaItems by ID
* `get_resources_media_id_syndicate_format_` - Get syndicated content for MediaItem
* `get_resources_media_id_thumbnail_jpg` - Get JPG thumbnail for MediaItem
* `get_resources_media_id_youtube_meta_data_json` - Get Youtube metadata for MediaItem

### media_types

* `get_resources_media_types_format_` - Get MediaTypes

### resources

* `get_resources_json` - Get Resources by search query

### sources

* `get_resources_sources_json` - Get Sources
* `get_resources_sources_id_json` - Get Source by ID
* `get_resources_sources_id_syndicate_format_` - Get MediaItems for Source

### tags

* `get_resources_tags_format_` - Get Tags
* `get_resources_tags_tag_languages_format_` - Get TagLanguages
* `get_resources_tags_tag_types_format_` - Get MediaItems for Tag
* `get_resources_tags_id_format_` - Get Tag by ID
* `get_resources_tags_id_media_format_` - Get MediaItems for Tag
* `get_resources_tags_id_related_format_` - Get related Tags by ID
* `get_resources_tags_id_syndicate_format_` - Get MediaItems for Tag

### user_media_lists

* `get_resources_user_media_lists_id_json` - Get UserMediaList by ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
