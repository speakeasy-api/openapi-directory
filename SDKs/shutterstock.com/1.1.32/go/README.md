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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Audio.AddTrackCollectionItems(ctx, operations.AddTrackCollectionItemsRequest{
        CollectionItemRequest: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2021-07-27T21:52:56.087Z"),
                    ID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
                    MediaType: sdk.String("repellendus"),
                },
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2020-08-31T22:02:25.322Z"),
                    ID: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
                    MediaType: sdk.String("perferendis"),
                },
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2022-05-20T13:30:46.463Z"),
                    ID: "29396fea-7596-4eb1-8faa-a2352c595590",
                    MediaType: sdk.String("iure"),
                },
            },
        },
        ID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
    }, operations.AddTrackCollectionItemsSecurity{
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


### [Audio](docs/audio/README.md)

* [AddTrackCollectionItems](docs/audio/README.md#addtrackcollectionitems) - Add audio tracks to collections
* [CreateTrackCollection](docs/audio/README.md#createtrackcollection) - Create audio collections
* [DeleteTrackCollection](docs/audio/README.md#deletetrackcollection) - Delete audio collections
* [DeleteTrackCollectionItems](docs/audio/README.md#deletetrackcollectionitems) - Remove audio tracks from collections
* [DownloadTracks](docs/audio/README.md#downloadtracks) - Download audio tracks
* [GetTrack](docs/audio/README.md#gettrack) - Get details about audio tracks
* [GetTrackCollection](docs/audio/README.md#gettrackcollection) - Get the details of audio collections
* [GetTrackCollectionItems](docs/audio/README.md#gettrackcollectionitems) - Get the contents of audio collections
* [GetTrackCollectionList](docs/audio/README.md#gettrackcollectionlist) - List audio collections
* [GetTrackLicenseList](docs/audio/README.md#gettracklicenselist) - List audio licenses
* [GetTrackList](docs/audio/README.md#gettracklist) - List audio tracks
* [LicenseTrack](docs/audio/README.md#licensetrack) - License audio tracks
* [ListGenres](docs/audio/README.md#listgenres) - List audio genres
* [ListInstruments](docs/audio/README.md#listinstruments) - List audio instruments
* [ListMoods](docs/audio/README.md#listmoods) - List audio moods
* [RenameTrackCollection](docs/audio/README.md#renametrackcollection) - Rename audio collections
* [SearchTracks](docs/audio/README.md#searchtracks) - Search for tracks

### [Catalog](docs/catalog/README.md)

* [AddToCollection](docs/catalog/README.md#addtocollection) - Add items to catalog collections
* [CreateCollection](docs/catalog/README.md#createcollection) - Create catalog collections
* [DeleteCollection](docs/catalog/README.md#deletecollection) - Delete catalog collections
* [DeleteFromCollection](docs/catalog/README.md#deletefromcollection) - Remove items from catalog collection
* [GetCollections](docs/catalog/README.md#getcollections) - List catalog collections
* [SearchCatalog](docs/catalog/README.md#searchcatalog) - Search catalogs for assets
* [UpdateCollection](docs/catalog/README.md#updatecollection) - Update collection metadata

### [ComputerVision](docs/computervision/README.md)

* [GetKeywords](docs/computervision/README.md#getkeywords) - List suggested keywords
* [GetSimilarImages](docs/computervision/README.md#getsimilarimages) - List similar images
* [GetSimilarVideos](docs/computervision/README.md#getsimilarvideos) - List similar videos
* [~~UploadEphemeralImage~~](docs/computervision/README.md#uploadephemeralimage) - Upload ephemeral images :warning: **Deprecated**
* [UploadImage](docs/computervision/README.md#uploadimage) - Upload images

### [Contributors](docs/contributors/README.md)

* [GetContributor](docs/contributors/README.md#getcontributor) - Get details about a single contributor
* [GetContributorCollectionItems](docs/contributors/README.md#getcontributorcollectionitems) - Get the items in contributors' collections
* [GetContributorCollections](docs/contributors/README.md#getcontributorcollections) - Get details about contributors' collections
* [GetContributorCollectionsList](docs/contributors/README.md#getcontributorcollectionslist) - List contributors' collections
* [GetContributorList](docs/contributors/README.md#getcontributorlist) - Get details about multiple contributors

### [CustomMusic](docs/custommusic/README.md)

* [CreateAudioRenders](docs/custommusic/README.md#createaudiorenders) - Create rendered audio
* [FetchRenders](docs/custommusic/README.md#fetchrenders) - Get details about audio renders
* [ListCustomDescriptors](docs/custommusic/README.md#listcustomdescriptors) - List computer audio descriptors
* [ListCustomInstruments](docs/custommusic/README.md#listcustominstruments) - List computer audio instruments

### [EditorialImages](docs/editorialimages/README.md)

* [~~GetEditorialCategories~~](docs/editorialimages/README.md#geteditorialcategories) - (Deprecated) List editorial categories :warning: **Deprecated**
* [GetEditorialImage](docs/editorialimages/README.md#geteditorialimage) - Get editorial content details
* [GetEditorialImageLicenseList](docs/editorialimages/README.md#geteditorialimagelicenselist) - List editorial image licenses
* [GetEditorialImageLivefeed](docs/editorialimages/README.md#geteditorialimagelivefeed) - Get editorial livefeed
* [GetEditorialImageLivefeedItems](docs/editorialimages/README.md#geteditorialimagelivefeeditems) - Get editorial livefeed items
* [GetEditorialImageLivefeedList](docs/editorialimages/README.md#geteditorialimagelivefeedlist) - Get editorial livefeed list
* [~~GetEditorialLivefeed~~](docs/editorialimages/README.md#geteditoriallivefeed) - (Deprecated) Get editorial livefeed :warning: **Deprecated**
* [~~GetEditorialLivefeedItems~~](docs/editorialimages/README.md#geteditoriallivefeeditems) - (Deprecated) Get editorial livefeed items :warning: **Deprecated**
* [~~GetEditorialLivefeedList~~](docs/editorialimages/README.md#geteditoriallivefeedlist) - (Deprecated) Get editorial livefeed list :warning: **Deprecated**
* [~~GetUpdatedEditorialImage~~](docs/editorialimages/README.md#getupdatededitorialimage) - (Deprecated) List updated content :warning: **Deprecated**
* [GetUpdatedEditorialImages](docs/editorialimages/README.md#getupdatededitorialimages) - List updated content
* [~~GetV2EditorialID~~](docs/editorialimages/README.md#getv2editorialid) - (Deprecated) Get editorial content details :warning: **Deprecated**
* [~~LicenseEditorialImage~~](docs/editorialimages/README.md#licenseeditorialimage) - (Deprecated) License editorial content :warning: **Deprecated**
* [LicenseEditorialImages](docs/editorialimages/README.md#licenseeditorialimages) - License editorial content
* [ListEditorialImageCategories](docs/editorialimages/README.md#listeditorialimagecategories) - List editorial categories
* [~~SearchEditorial~~](docs/editorialimages/README.md#searcheditorial) - (Deprecated) Search editorial content :warning: **Deprecated**
* [SearchEditorialImages](docs/editorialimages/README.md#searcheditorialimages) - Search editorial images

### [EditorialVideo](docs/editorialvideo/README.md)

* [GetEditorialVideo](docs/editorialvideo/README.md#geteditorialvideo) - Get editorial video content details
* [GetEditorialVideoLicenseList](docs/editorialvideo/README.md#geteditorialvideolicenselist) - List editorial video licenses
* [LicenseEditorialVideo](docs/editorialvideo/README.md#licenseeditorialvideo) - License editorial video content
* [ListEditorialVideoCategories](docs/editorialvideo/README.md#listeditorialvideocategories) - List editorial video categories
* [SearchEditorialVideos](docs/editorialvideo/README.md#searcheditorialvideos) - Search editorial video content

### [Images](docs/images/README.md)

* [AddImageCollectionItems](docs/images/README.md#addimagecollectionitems) - Add images to collections
* [BulkSearchImages](docs/images/README.md#bulksearchimages) - Run multiple image searches
* [CreateImageCollection](docs/images/README.md#createimagecollection) - Create image collections
* [DeleteImageCollection](docs/images/README.md#deleteimagecollection) - Delete image collections
* [DeleteImageCollectionItems](docs/images/README.md#deleteimagecollectionitems) - Remove images from collections
* [DownloadImage](docs/images/README.md#downloadimage) - Download images
* [GetFeaturedImageCollection](docs/images/README.md#getfeaturedimagecollection) - Get the details of featured image collections
* [GetFeaturedImageCollectionItems](docs/images/README.md#getfeaturedimagecollectionitems) - Get the contents of featured image collections
* [GetFeaturedImageCollectionList](docs/images/README.md#getfeaturedimagecollectionlist) - List featured image collections
* [GetImage](docs/images/README.md#getimage) - Get details about images
* [GetImageCollection](docs/images/README.md#getimagecollection) - Get the details of image collections
* [GetImageCollectionItems](docs/images/README.md#getimagecollectionitems) - Get the contents of image collections
* [GetImageCollectionList](docs/images/README.md#getimagecollectionlist) - List image collections
* [GetImageKeywordSuggestions](docs/images/README.md#getimagekeywordsuggestions) - Get keywords from text
* [GetImageLicenseList](docs/images/README.md#getimagelicenselist) - List image licenses
* [GetImageList](docs/images/README.md#getimagelist) - List images
* [GetImageRecommendations](docs/images/README.md#getimagerecommendations) - List recommended images
* [GetImageSuggestions](docs/images/README.md#getimagesuggestions) - Get suggestions for a search term
* [GetUpdatedImages](docs/images/README.md#getupdatedimages) - List updated images
* [LicenseImages](docs/images/README.md#licenseimages) - License images
* [ListImageCategories](docs/images/README.md#listimagecategories) - List image categories
* [ListSimilarImages](docs/images/README.md#listsimilarimages) - List similar images
* [RenameImageCollection](docs/images/README.md#renameimagecollection) - Rename image collections
* [SearchImages](docs/images/README.md#searchimages) - Search for images

### [Oauth](docs/oauth/README.md)

* [Authorize](docs/oauth/README.md#authorize) - Authorize applications
* [CreateAccessTokenForm](docs/oauth/README.md#createaccesstokenform) - Get access tokens
* [CreateAccessTokenJSON](docs/oauth/README.md#createaccesstokenjson) - Get access tokens

### [SoundEffects](docs/soundeffects/README.md)

* [DownloadSfx](docs/soundeffects/README.md#downloadsfx) - Download sound effects
* [GetSfxDetails](docs/soundeffects/README.md#getsfxdetails) - Get details about sound effects
* [GetSfxLicenseList](docs/soundeffects/README.md#getsfxlicenselist) - List sound effects licenses
* [GetSfxListDetails](docs/soundeffects/README.md#getsfxlistdetails) - List details about sound effects
* [LicensesSFX](docs/soundeffects/README.md#licensessfx) - License sound effects
* [SearchSFX](docs/soundeffects/README.md#searchsfx) - Search for sound effects

### [Test](docs/test/README.md)

* [Echo](docs/test/README.md#echo) - Echo text
* [Validate](docs/test/README.md#validate) - Validate input

### [Users](docs/users/README.md)

* [GetAccessToken](docs/users/README.md#getaccesstoken) - Get access token details
* [GetUser](docs/users/README.md#getuser) - Get user details
* [GetUserSubscriptionList](docs/users/README.md#getusersubscriptionlist) - List user subscriptions

### [Videos](docs/videos/README.md)

* [AddVideoCollectionItems](docs/videos/README.md#addvideocollectionitems) - Add videos to collections
* [CreateVideoCollection](docs/videos/README.md#createvideocollection) - Create video collections
* [DeleteVideoCollection](docs/videos/README.md#deletevideocollection) - Delete video collections
* [DeleteVideoCollectionItems](docs/videos/README.md#deletevideocollectionitems) - Remove videos from collections
* [DownloadVideos](docs/videos/README.md#downloadvideos) - Download videos
* [FindSimilarVideos](docs/videos/README.md#findsimilarvideos) - List similar videos
* [GetFeaturedVideoCollection](docs/videos/README.md#getfeaturedvideocollection) - Get the details of featured video collections
* [GetFeaturedVideoCollectionItems](docs/videos/README.md#getfeaturedvideocollectionitems) - Get the contents of featured video collections
* [GetFeaturedVideoCollectionList](docs/videos/README.md#getfeaturedvideocollectionlist) - List featured video collections
* [GetUpdatedVideos](docs/videos/README.md#getupdatedvideos) - List updated videos
* [GetVideo](docs/videos/README.md#getvideo) - Get details about videos
* [GetVideoCollection](docs/videos/README.md#getvideocollection) - Get the details of video collections
* [GetVideoCollectionItems](docs/videos/README.md#getvideocollectionitems) - Get the contents of video collections
* [GetVideoCollectionList](docs/videos/README.md#getvideocollectionlist) - List video collections
* [GetVideoLicenseList](docs/videos/README.md#getvideolicenselist) - List video licenses
* [GetVideoList](docs/videos/README.md#getvideolist) - List videos
* [GetVideoSuggestions](docs/videos/README.md#getvideosuggestions) - Get suggestions for a search term
* [LicenseVideos](docs/videos/README.md#licensevideos) - License videos
* [ListVideoCategories](docs/videos/README.md#listvideocategories) - List video categories
* [RenameVideoCollection](docs/videos/README.md#renamevideocollection) - Rename video collections
* [SearchVideos](docs/videos/README.md#searchvideos) - Search for videos
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
