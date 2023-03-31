# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/shutterstock.com/1.1.32/go
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

    req := operations.AddTrackCollectionItemsRequest{
        CollectionItemRequest: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: "2021-07-27T21:52:56.087Z",
                    ID: "quibusdam",
                    MediaType: "unde",
                },
                shared.CollectionItem{
                    AddedTime: "2021-05-14T08:28:11.899Z",
                    ID: "illum",
                    MediaType: "vel",
                },
                shared.CollectionItem{
                    AddedTime: "2021-09-16T11:56:06.019Z",
                    ID: "suscipit",
                    MediaType: "iure",
                },
            },
        },
        ID: "magnam",
    }

    ctx := context.Background()
    res, err := s.Audio.AddTrackCollectionItems(ctx, req, operations.AddTrackCollectionItemsSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Audio

* `AddTrackCollectionItems` - Add audio tracks to collections
* `CreateTrackCollection` - Create audio collections
* `DeleteTrackCollection` - Delete audio collections
* `DeleteTrackCollectionItems` - Remove audio tracks from collections
* `DownloadTracks` - Download audio tracks
* `GetTrack` - Get details about audio tracks
* `GetTrackCollection` - Get the details of audio collections
* `GetTrackCollectionItems` - Get the contents of audio collections
* `GetTrackCollectionList` - List audio collections
* `GetTrackLicenseList` - List audio licenses
* `GetTrackList` - List audio tracks
* `LicenseTrack` - License audio tracks
* `ListGenres` - List audio genres
* `ListInstruments` - List audio instruments
* `ListMoods` - List audio moods
* `RenameTrackCollection` - Rename audio collections
* `SearchTracks` - Search for tracks

### Catalog

* `AddToCollection` - Add items to catalog collections
* `CreateCollection` - Create catalog collections
* `DeleteCollection` - Delete catalog collections
* `DeleteFromCollection` - Remove items from catalog collection
* `GetCollections` - List catalog collections
* `SearchCatalog` - Search catalogs for assets
* `UpdateCollection` - Update collection metadata

### ComputerVision

* `GetKeywords` - List suggested keywords
* `GetSimilarImages` - List similar images
* `GetSimilarVideos` - List similar videos
* `UploadEphemeralImage` - Upload ephemeral images
* `UploadImage` - Upload images

### Contributors

* `GetContributor` - Get details about a single contributor
* `GetContributorCollectionItems` - Get the items in contributors' collections
* `GetContributorCollections` - Get details about contributors' collections
* `GetContributorCollectionsList` - List contributors' collections
* `GetContributorList` - Get details about multiple contributors

### CustomMusic

* `CreateAudioRenders` - Create rendered audio
* `FetchRenders` - Get details about audio renders
* `ListCustomDescriptors` - List computer audio descriptors
* `ListCustomInstruments` - List computer audio instruments

### EditorialImages

* `GetEditorialCategories` - (Deprecated) List editorial categories
* `GetEditorialImage` - Get editorial content details
* `GetEditorialImageLicenseList` - List editorial image licenses
* `GetEditorialImageLivefeed` - Get editorial livefeed
* `GetEditorialImageLivefeedItems` - Get editorial livefeed items
* `GetEditorialImageLivefeedList` - Get editorial livefeed list
* `GetEditorialLivefeed` - (Deprecated) Get editorial livefeed
* `GetEditorialLivefeedItems` - (Deprecated) Get editorial livefeed items
* `GetEditorialLivefeedList` - (Deprecated) Get editorial livefeed list
* `GetUpdatedEditorialImage` - (Deprecated) List updated content
* `GetUpdatedEditorialImages` - List updated content
* `GetV2EditorialID` - (Deprecated) Get editorial content details
* `LicenseEditorialImage` - (Deprecated) License editorial content
* `LicenseEditorialImages` - License editorial content
* `ListEditorialImageCategories` - List editorial categories
* `SearchEditorial` - (Deprecated) Search editorial content
* `SearchEditorialImages` - Search editorial images

### EditorialVideo

* `GetEditorialVideo` - Get editorial video content details
* `GetEditorialVideoLicenseList` - List editorial video licenses
* `LicenseEditorialVideo` - License editorial video content
* `ListEditorialVideoCategories` - List editorial video categories
* `SearchEditorialVideos` - Search editorial video content

### Images

* `AddImageCollectionItems` - Add images to collections
* `BulkSearchImages` - Run multiple image searches
* `CreateImageCollection` - Create image collections
* `DeleteImageCollection` - Delete image collections
* `DeleteImageCollectionItems` - Remove images from collections
* `DownloadImage` - Download images
* `GetFeaturedImageCollection` - Get the details of featured image collections
* `GetFeaturedImageCollectionItems` - Get the contents of featured image collections
* `GetFeaturedImageCollectionList` - List featured image collections
* `GetImage` - Get details about images
* `GetImageCollection` - Get the details of image collections
* `GetImageCollectionItems` - Get the contents of image collections
* `GetImageCollectionList` - List image collections
* `GetImageKeywordSuggestions` - Get keywords from text
* `GetImageLicenseList` - List image licenses
* `GetImageList` - List images
* `GetImageRecommendations` - List recommended images
* `GetImageSuggestions` - Get suggestions for a search term
* `GetUpdatedImages` - List updated images
* `LicenseImages` - License images
* `ListImageCategories` - List image categories
* `ListSimilarImages` - List similar images
* `RenameImageCollection` - Rename image collections
* `SearchImages` - Search for images

### Oauth

* `Authorize` - Authorize applications
* `CreateAccessTokenForm` - Get access tokens
* `CreateAccessTokenJSON` - Get access tokens

### SoundEffects

* `DownloadSfx` - Download sound effects
* `GetSfxDetails` - Get details about sound effects
* `GetSfxLicenseList` - List sound effects licenses
* `GetSfxListDetails` - List details about sound effects
* `LicensesSFX` - License sound effects
* `SearchSFX` - Search for sound effects

### Test

* `Echo` - Echo text
* `Validate` - Validate input

### Users

* `GetAccessToken` - Get access token details
* `GetUser` - Get user details
* `GetUserSubscriptionList` - List user subscriptions

### Videos

* `AddVideoCollectionItems` - Add videos to collections
* `CreateVideoCollection` - Create video collections
* `DeleteVideoCollection` - Delete video collections
* `DeleteVideoCollectionItems` - Remove videos from collections
* `DownloadVideos` - Download videos
* `FindSimilarVideos` - List similar videos
* `GetFeaturedVideoCollection` - Get the details of featured video collections
* `GetFeaturedVideoCollectionItems` - Get the contents of featured video collections
* `GetFeaturedVideoCollectionList` - List featured video collections
* `GetUpdatedVideos` - List updated videos
* `GetVideo` - Get details about videos
* `GetVideoCollection` - Get the details of video collections
* `GetVideoCollectionItems` - Get the contents of video collections
* `GetVideoCollectionList` - List video collections
* `GetVideoLicenseList` - List video licenses
* `GetVideoList` - List videos
* `GetVideoSuggestions` - Get suggestions for a search term
* `LicenseVideos` - License videos
* `ListVideoCategories` - List video categories
* `RenameVideoCollection` - Rename video collections
* `SearchVideos` - Search for videos
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
