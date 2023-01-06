# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.AddTrackCollectionItemsRequest{
        Security: operations.AddTrackCollectionItemsSecurity{
            CustomerAccessCode: shared.SchemeCustomerAccessCode{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AddTrackCollectionItemsPathParams{
            ID: "exercitationem",
        },
        Request: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: "1999-12-25T03:51:09Z",
                    ID: "cum",
                    MediaType: "quidem",
                },
                shared.CollectionItem{
                    AddedTime: "2002-09-21T20:55:51Z",
                    ID: "sed",
                    MediaType: "voluptas",
                },
                shared.CollectionItem{
                    AddedTime: "2007-08-08T10:10:28Z",
                    ID: "provident",
                    MediaType: "quos",
                },
            },
        },
    }
    
    res, err := s.Audio.AddTrackCollectionItems(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### audio

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

### computer_vision

* `GetKeywords` - List suggested keywords
* `GetV2CvSimilarImages` - List similar images
* `GetV2CvSimilarVideos` - List similar videos
* `UploadEphemeralImage` - Upload ephemeral images
* `UploadImage` - Upload images

### contributors

* `GetContributor` - Get details about a single contributor
* `GetContributorCollectionItems` - Get the items in contributors' collections
* `GetContributorCollections` - Get details about contributors' collections
* `GetContributorCollectionsList` - List contributors' collections
* `GetContributorList` - Get details about multiple contributors

### custom_music

* `CreateAudioRenders` - Create rendered audio
* `FetchRenders` - Get details about audio renders
* `ListCustomDescriptors` - List computer audio descriptors
* `ListCustomInstruments` - List computer audio instruments

### editorial_images

* `GetEditorialCategories` - (Deprecated) List editorial categories
* `GetEditorialImage` - Get editorial content details
* `GetEditorialImageLicenseList` - List editorial image licenses
* `GetEditorialImageLivefeed` - Get editorial livefeed
* `GetEditorialImageLivefeedItems` - Get editorial livefeed items
* `GetEditorialImageLivefeedList` - Get editorial livefeed list
* `GetEditorialLivefeed` - (Deprecated) Get editorial livefeed
* `GetEditorialLivefeedItems` - (Deprecated) Get editorial livefeed items
* `GetEditorialLivefeedList` - (Deprecated) Get editorial livefeed list
* `GetUpdatedEditorialImages` - List updated content
* `GetV2EditorialUpdated` - (Deprecated) List updated content
* `GetV2EditorialID` - (Deprecated) Get editorial content details
* `LicenseEditorialImage` - (Deprecated) License editorial content
* `LicenseEditorialImages` - License editorial content
* `ListEditorialImageCategories` - List editorial categories
* `SearchEditorial` - (Deprecated) Search editorial content
* `SearchEditorialImages` - Search editorial images

### editorial_video

* `GetEditorialVideo` - Get editorial video content details
* `GetEditorialVideoLicenseList` - List editorial video licenses
* `LicenseEditorialVideo` - License editorial video content
* `ListEditorialVideoCategories` - List editorial video categories
* `SearchEditorialVideos` - Search editorial video content

### images

* `AddImageCollectionItems` - Add images to collections
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
* `GetSimilarImages` - List similar images
* `GetUpdatedImages` - List updated images
* `LicenseImages` - License images
* `ListImageCategories` - List image categories
* `RenameImageCollection` - Rename image collections
* `SearchImages` - Search for images

### oauth

* `Authorize` - Authorize applications
* `CreateAccessToken` - Get access tokens

### test

* `Echo` - Echo text
* `Validate` - Validate input

### users

* `GetAccessToken` - Get access token details
* `GetUser` - Get user details
* `GetUserSubscriptionList` - List user subscriptions

### video_editor

* `AuthVideoEditor` - Get video editor access tokens
* `RegisterEditorInstance` - Register instances of the video editor
* `UpdateEditorInstance` - Update instances of the video editor

### videos

* `AddVideoCollectionItems` - Add videos to collections
* `CreateVideoCollection` - Create video collections
* `DeleteVideoCollection` - Delete video collections
* `DeleteVideoCollectionItems` - Remove videos from collections
* `DownloadVideos` - Download videos
* `GetFeaturedVideoCollection` - Get the details of featured video collections
* `GetFeaturedVideoCollectionItems` - Get the contents of featured video collections
* `GetFeaturedVideoCollectionList` - List featured video collections
* `GetSimilarVideos` - List similar videos
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
