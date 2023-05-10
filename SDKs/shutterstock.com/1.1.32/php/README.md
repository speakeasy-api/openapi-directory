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
use \OpenAPI\OpenAPI\Models\Operations\AddTrackCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionItem;
use \OpenAPI\OpenAPI\Models\Operations\AddTrackCollectionItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTrackCollectionItemsRequest();
    $request->collectionItemRequest = new CollectionItemRequest();
    $request->collectionItemRequest->items = [
        new CollectionItem(),
        new CollectionItem(),
        new CollectionItem(),
    ];
    $request->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';

    $requestSecurity = new AddTrackCollectionItemsSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->audio->addTrackCollectionItems($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [audio](docs/audio/README.md)

* [addTrackCollectionItems](docs/audio/README.md#addtrackcollectionitems) - Add audio tracks to collections
* [createTrackCollection](docs/audio/README.md#createtrackcollection) - Create audio collections
* [deleteTrackCollection](docs/audio/README.md#deletetrackcollection) - Delete audio collections
* [deleteTrackCollectionItems](docs/audio/README.md#deletetrackcollectionitems) - Remove audio tracks from collections
* [downloadTracks](docs/audio/README.md#downloadtracks) - Download audio tracks
* [getTrack](docs/audio/README.md#gettrack) - Get details about audio tracks
* [getTrackCollection](docs/audio/README.md#gettrackcollection) - Get the details of audio collections
* [getTrackCollectionItems](docs/audio/README.md#gettrackcollectionitems) - Get the contents of audio collections
* [getTrackCollectionList](docs/audio/README.md#gettrackcollectionlist) - List audio collections
* [getTrackLicenseList](docs/audio/README.md#gettracklicenselist) - List audio licenses
* [getTrackList](docs/audio/README.md#gettracklist) - List audio tracks
* [licenseTrack](docs/audio/README.md#licensetrack) - License audio tracks
* [listGenres](docs/audio/README.md#listgenres) - List audio genres
* [listInstruments](docs/audio/README.md#listinstruments) - List audio instruments
* [listMoods](docs/audio/README.md#listmoods) - List audio moods
* [renameTrackCollection](docs/audio/README.md#renametrackcollection) - Rename audio collections
* [searchTracks](docs/audio/README.md#searchtracks) - Search for tracks

### [catalog](docs/catalog/README.md)

* [addToCollection](docs/catalog/README.md#addtocollection) - Add items to catalog collections
* [createCollection](docs/catalog/README.md#createcollection) - Create catalog collections
* [deleteCollection](docs/catalog/README.md#deletecollection) - Delete catalog collections
* [deleteFromCollection](docs/catalog/README.md#deletefromcollection) - Remove items from catalog collection
* [getCollections](docs/catalog/README.md#getcollections) - List catalog collections
* [searchCatalog](docs/catalog/README.md#searchcatalog) - Search catalogs for assets
* [updateCollection](docs/catalog/README.md#updatecollection) - Update collection metadata

### [computerVision](docs/computervision/README.md)

* [getKeywords](docs/computervision/README.md#getkeywords) - List suggested keywords
* [getSimilarImages](docs/computervision/README.md#getsimilarimages) - List similar images
* [getSimilarVideos](docs/computervision/README.md#getsimilarvideos) - List similar videos
* [~~uploadEphemeralImage~~](docs/computervision/README.md#uploadephemeralimage) - Upload ephemeral images :warning: **Deprecated**
* [uploadImage](docs/computervision/README.md#uploadimage) - Upload images

### [contributors](docs/contributors/README.md)

* [getContributor](docs/contributors/README.md#getcontributor) - Get details about a single contributor
* [getContributorCollectionItems](docs/contributors/README.md#getcontributorcollectionitems) - Get the items in contributors' collections
* [getContributorCollections](docs/contributors/README.md#getcontributorcollections) - Get details about contributors' collections
* [getContributorCollectionsList](docs/contributors/README.md#getcontributorcollectionslist) - List contributors' collections
* [getContributorList](docs/contributors/README.md#getcontributorlist) - Get details about multiple contributors

### [customMusic](docs/custommusic/README.md)

* [createAudioRenders](docs/custommusic/README.md#createaudiorenders) - Create rendered audio
* [fetchRenders](docs/custommusic/README.md#fetchrenders) - Get details about audio renders
* [listCustomDescriptors](docs/custommusic/README.md#listcustomdescriptors) - List computer audio descriptors
* [listCustomInstruments](docs/custommusic/README.md#listcustominstruments) - List computer audio instruments

### [editorialImages](docs/editorialimages/README.md)

* [~~getEditorialCategories~~](docs/editorialimages/README.md#geteditorialcategories) - (Deprecated) List editorial categories :warning: **Deprecated**
* [getEditorialImage](docs/editorialimages/README.md#geteditorialimage) - Get editorial content details
* [getEditorialImageLicenseList](docs/editorialimages/README.md#geteditorialimagelicenselist) - List editorial image licenses
* [getEditorialImageLivefeed](docs/editorialimages/README.md#geteditorialimagelivefeed) - Get editorial livefeed
* [getEditorialImageLivefeedItems](docs/editorialimages/README.md#geteditorialimagelivefeeditems) - Get editorial livefeed items
* [getEditorialImageLivefeedList](docs/editorialimages/README.md#geteditorialimagelivefeedlist) - Get editorial livefeed list
* [~~getEditorialLivefeed~~](docs/editorialimages/README.md#geteditoriallivefeed) - (Deprecated) Get editorial livefeed :warning: **Deprecated**
* [~~getEditorialLivefeedItems~~](docs/editorialimages/README.md#geteditoriallivefeeditems) - (Deprecated) Get editorial livefeed items :warning: **Deprecated**
* [~~getEditorialLivefeedList~~](docs/editorialimages/README.md#geteditoriallivefeedlist) - (Deprecated) Get editorial livefeed list :warning: **Deprecated**
* [~~getUpdatedEditorialImage~~](docs/editorialimages/README.md#getupdatededitorialimage) - (Deprecated) List updated content :warning: **Deprecated**
* [getUpdatedEditorialImages](docs/editorialimages/README.md#getupdatededitorialimages) - List updated content
* [~~getV2EditorialId~~](docs/editorialimages/README.md#getv2editorialid) - (Deprecated) Get editorial content details :warning: **Deprecated**
* [~~licenseEditorialImage~~](docs/editorialimages/README.md#licenseeditorialimage) - (Deprecated) License editorial content :warning: **Deprecated**
* [licenseEditorialImages](docs/editorialimages/README.md#licenseeditorialimages) - License editorial content
* [listEditorialImageCategories](docs/editorialimages/README.md#listeditorialimagecategories) - List editorial categories
* [~~searchEditorial~~](docs/editorialimages/README.md#searcheditorial) - (Deprecated) Search editorial content :warning: **Deprecated**
* [searchEditorialImages](docs/editorialimages/README.md#searcheditorialimages) - Search editorial images

### [editorialVideo](docs/editorialvideo/README.md)

* [getEditorialVideo](docs/editorialvideo/README.md#geteditorialvideo) - Get editorial video content details
* [getEditorialVideoLicenseList](docs/editorialvideo/README.md#geteditorialvideolicenselist) - List editorial video licenses
* [licenseEditorialVideo](docs/editorialvideo/README.md#licenseeditorialvideo) - License editorial video content
* [listEditorialVideoCategories](docs/editorialvideo/README.md#listeditorialvideocategories) - List editorial video categories
* [searchEditorialVideos](docs/editorialvideo/README.md#searcheditorialvideos) - Search editorial video content

### [images](docs/images/README.md)

* [addImageCollectionItems](docs/images/README.md#addimagecollectionitems) - Add images to collections
* [bulkSearchImages](docs/images/README.md#bulksearchimages) - Run multiple image searches
* [createImageCollection](docs/images/README.md#createimagecollection) - Create image collections
* [deleteImageCollection](docs/images/README.md#deleteimagecollection) - Delete image collections
* [deleteImageCollectionItems](docs/images/README.md#deleteimagecollectionitems) - Remove images from collections
* [downloadImage](docs/images/README.md#downloadimage) - Download images
* [getFeaturedImageCollection](docs/images/README.md#getfeaturedimagecollection) - Get the details of featured image collections
* [getFeaturedImageCollectionItems](docs/images/README.md#getfeaturedimagecollectionitems) - Get the contents of featured image collections
* [getFeaturedImageCollectionList](docs/images/README.md#getfeaturedimagecollectionlist) - List featured image collections
* [getImage](docs/images/README.md#getimage) - Get details about images
* [getImageCollection](docs/images/README.md#getimagecollection) - Get the details of image collections
* [getImageCollectionItems](docs/images/README.md#getimagecollectionitems) - Get the contents of image collections
* [getImageCollectionList](docs/images/README.md#getimagecollectionlist) - List image collections
* [getImageKeywordSuggestions](docs/images/README.md#getimagekeywordsuggestions) - Get keywords from text
* [getImageLicenseList](docs/images/README.md#getimagelicenselist) - List image licenses
* [getImageList](docs/images/README.md#getimagelist) - List images
* [getImageRecommendations](docs/images/README.md#getimagerecommendations) - List recommended images
* [getImageSuggestions](docs/images/README.md#getimagesuggestions) - Get suggestions for a search term
* [getUpdatedImages](docs/images/README.md#getupdatedimages) - List updated images
* [licenseImages](docs/images/README.md#licenseimages) - License images
* [listImageCategories](docs/images/README.md#listimagecategories) - List image categories
* [listSimilarImages](docs/images/README.md#listsimilarimages) - List similar images
* [renameImageCollection](docs/images/README.md#renameimagecollection) - Rename image collections
* [searchImages](docs/images/README.md#searchimages) - Search for images

### [oauth](docs/oauth/README.md)

* [authorize](docs/oauth/README.md#authorize) - Authorize applications
* [createAccessTokenForm](docs/oauth/README.md#createaccesstokenform) - Get access tokens
* [createAccessTokenJson](docs/oauth/README.md#createaccesstokenjson) - Get access tokens

### [soundEffects](docs/soundeffects/README.md)

* [downloadSfx](docs/soundeffects/README.md#downloadsfx) - Download sound effects
* [getSfxDetails](docs/soundeffects/README.md#getsfxdetails) - Get details about sound effects
* [getSfxLicenseList](docs/soundeffects/README.md#getsfxlicenselist) - List sound effects licenses
* [getSfxListDetails](docs/soundeffects/README.md#getsfxlistdetails) - List details about sound effects
* [licensesSFX](docs/soundeffects/README.md#licensessfx) - License sound effects
* [searchSFX](docs/soundeffects/README.md#searchsfx) - Search for sound effects

### [test](docs/test/README.md)

* [echo](docs/test/README.md#echo) - Echo text
* [validate](docs/test/README.md#validate) - Validate input

### [users](docs/users/README.md)

* [getAccessToken](docs/users/README.md#getaccesstoken) - Get access token details
* [getUser](docs/users/README.md#getuser) - Get user details
* [getUserSubscriptionList](docs/users/README.md#getusersubscriptionlist) - List user subscriptions

### [videos](docs/videos/README.md)

* [addVideoCollectionItems](docs/videos/README.md#addvideocollectionitems) - Add videos to collections
* [createVideoCollection](docs/videos/README.md#createvideocollection) - Create video collections
* [deleteVideoCollection](docs/videos/README.md#deletevideocollection) - Delete video collections
* [deleteVideoCollectionItems](docs/videos/README.md#deletevideocollectionitems) - Remove videos from collections
* [downloadVideos](docs/videos/README.md#downloadvideos) - Download videos
* [findSimilarVideos](docs/videos/README.md#findsimilarvideos) - List similar videos
* [getFeaturedVideoCollection](docs/videos/README.md#getfeaturedvideocollection) - Get the details of featured video collections
* [getFeaturedVideoCollectionItems](docs/videos/README.md#getfeaturedvideocollectionitems) - Get the contents of featured video collections
* [getFeaturedVideoCollectionList](docs/videos/README.md#getfeaturedvideocollectionlist) - List featured video collections
* [getUpdatedVideos](docs/videos/README.md#getupdatedvideos) - List updated videos
* [getVideo](docs/videos/README.md#getvideo) - Get details about videos
* [getVideoCollection](docs/videos/README.md#getvideocollection) - Get the details of video collections
* [getVideoCollectionItems](docs/videos/README.md#getvideocollectionitems) - Get the contents of video collections
* [getVideoCollectionList](docs/videos/README.md#getvideocollectionlist) - List video collections
* [getVideoLicenseList](docs/videos/README.md#getvideolicenselist) - List video licenses
* [getVideoList](docs/videos/README.md#getvideolist) - List videos
* [getVideoSuggestions](docs/videos/README.md#getvideosuggestions) - Get suggestions for a search term
* [licenseVideos](docs/videos/README.md#licensevideos) - License videos
* [listVideoCategories](docs/videos/README.md#listvideocategories) - List video categories
* [renameVideoCollection](docs/videos/README.md#renamevideocollection) - Rename video collections
* [searchVideos](docs/videos/README.md#searchvideos) - Search for videos
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
