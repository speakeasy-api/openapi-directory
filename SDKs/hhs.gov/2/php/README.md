# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesCampaignsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesCampaignsJsonRequest();
    $request->max = 548814;
    $request->offset = 592845;
    $request->sort = 'distinctio';

    $response = $sdk->campaigns->getResourcesCampaignsJson($request);

    if ($response->campaignWrapped !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [campaigns](docs/campaigns/README.md)

* [getResourcesCampaignsJson](docs/campaigns/README.md#getresourcescampaignsjson) - Get Campaigns
* [getResourcesCampaignsIdJson](docs/campaigns/README.md#getresourcescampaignsidjson) - Get Campaign by ID
* [getResourcesCampaignsIdMediaJson](docs/campaigns/README.md#getresourcescampaignsidmediajson) - Get MediaItems by Campaign ID
* [getResourcesCampaignsIdSyndicateFormat](docs/campaigns/README.md#getresourcescampaignsidsyndicateformat) - Get MediaItems for Campaign

### [languages](docs/languages/README.md)

* [getResourcesLanguagesJson](docs/languages/README.md#getresourceslanguagesjson) - Get Languages
* [getResourcesLanguagesIdJson](docs/languages/README.md#getresourceslanguagesidjson) - Get Language by ID

### [media](docs/media/README.md)

* [getResourcesMediaJson](docs/media/README.md#getresourcesmediajson) - Get MediaItems
* [getResourcesMediaFeaturedJson](docs/media/README.md#getresourcesmediafeaturedjson) - Get the list of featured content in the syndication system
* [getResourcesMediaMostPopularMediaFormat](docs/media/README.md#getresourcesmediamostpopularmediaformat) - Get MediaItems by popularity
* [getResourcesMediaSearchResultsJson](docs/media/README.md#getresourcesmediasearchresultsjson) - Get MediaItems by search query
* [getResourcesMediaIdJson](docs/media/README.md#getresourcesmediaidjson) - Get MediaItem by ID
* [getResourcesMediaIdContent](docs/media/README.md#getresourcesmediaidcontent) - Get content for MediaItem
* [getResourcesMediaIdEmbedJson](docs/media/README.md#getresourcesmediaidembedjson) - Get embed code for MediaItem
* [getResourcesMediaIdPreviewJpg](docs/media/README.md#getresourcesmediaidpreviewjpg) - Get Tag by ID
* [getResourcesMediaIdRelatedMediaFormat](docs/media/README.md#getresourcesmediaidrelatedmediaformat) - Get related MediaItems by ID
* [getResourcesMediaIdSyndicateFormat](docs/media/README.md#getresourcesmediaidsyndicateformat) - Get syndicated content for MediaItem
* [getResourcesMediaIdThumbnailJpg](docs/media/README.md#getresourcesmediaidthumbnailjpg) - Get JPG thumbnail for MediaItem
* [getResourcesMediaIdYoutubeMetaDataJson](docs/media/README.md#getresourcesmediaidyoutubemetadatajson) - Get Youtube metadata for MediaItem

### [mediaTypes](docs/mediatypes/README.md)

* [getResourcesMediaTypesFormat](docs/mediatypes/README.md#getresourcesmediatypesformat) - Get MediaTypes

### [resources](docs/resources/README.md)

* [getResourcesJson](docs/resources/README.md#getresourcesjson) - Get Resources by search query

### [sources](docs/sources/README.md)

* [getResourcesSourcesJson](docs/sources/README.md#getresourcessourcesjson) - Get Sources
* [getResourcesSourcesIdJson](docs/sources/README.md#getresourcessourcesidjson) - Get Source by ID
* [getResourcesSourcesIdSyndicateFormat](docs/sources/README.md#getresourcessourcesidsyndicateformat) - Get MediaItems for Source

### [tags](docs/tags/README.md)

* [getResourcesTagsFormat](docs/tags/README.md#getresourcestagsformat) - Get Tags
* [getResourcesTagsTagLanguagesFormat](docs/tags/README.md#getresourcestagstaglanguagesformat) - Get TagLanguages
* [getResourcesTagsTagTypesFormat](docs/tags/README.md#getresourcestagstagtypesformat) - Get MediaItems for Tag
* [getResourcesTagsIdFormat](docs/tags/README.md#getresourcestagsidformat) - Get Tag by ID
* [getResourcesTagsIdMediaFormat](docs/tags/README.md#getresourcestagsidmediaformat) - Get MediaItems for Tag
* [getResourcesTagsIdRelatedFormat](docs/tags/README.md#getresourcestagsidrelatedformat) - Get related Tags by ID
* [getResourcesTagsIdSyndicateFormat](docs/tags/README.md#getresourcestagsidsyndicateformat) - Get MediaItems for Tag

### [userMediaLists](docs/usermedialists/README.md)

* [getResourcesUserMediaListsIdJson](docs/usermedialists/README.md#getresourcesusermedialistsidjson) - Get UserMediaList by ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
