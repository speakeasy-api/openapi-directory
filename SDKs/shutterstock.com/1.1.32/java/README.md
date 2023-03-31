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

import org.openapis.openapi.models.operations.AddTrackCollectionItemsSecurity;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsPathParams;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsRequest;
import org.openapis.openapi.models.operations.AddTrackCollectionItemsResponse;
import org.openapis.openapi.models.shared.CollectionItemRequest;
import org.openapis.openapi.models.shared.CollectionItem;
import org.openapis.openapi.models.shared.SchemeCustomerAccessCode;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddTrackCollectionItemsRequest req = new AddTrackCollectionItemsRequest() {{
                security = new AddTrackCollectionItemsSecurity() {{
                    customerAccessCode = new SchemeCustomerAccessCode() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AddTrackCollectionItemsPathParams() {{
                    id = "corrupti";
                }};
                request = new CollectionItemRequest() {{
                    items = new org.openapis.openapi.models.shared.CollectionItem[]{{
                        add(new CollectionItem() {{
                            addedTime = "2021-04-24T16:27:50.833Z";
                            id = "unde";
                            mediaType = "nulla";
                        }}),
                        add(new CollectionItem() {{
                            addedTime = "2021-04-22T12:08:58.275Z";
                            id = "vel";
                            mediaType = "error";
                        }}),
                        add(new CollectionItem() {{
                            addedTime = "2022-03-26T09:37:56.283Z";
                            id = "iure";
                            mediaType = "magnam";
                        }}),
                    }};
                }};
            }};            

            AddTrackCollectionItemsResponse res = sdk.audio.addTrackCollectionItems(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### audio

* `addTrackCollectionItems` - Add audio tracks to collections
* `createTrackCollection` - Create audio collections
* `deleteTrackCollection` - Delete audio collections
* `deleteTrackCollectionItems` - Remove audio tracks from collections
* `downloadTracks` - Download audio tracks
* `getTrack` - Get details about audio tracks
* `getTrackCollection` - Get the details of audio collections
* `getTrackCollectionItems` - Get the contents of audio collections
* `getTrackCollectionList` - List audio collections
* `getTrackLicenseList` - List audio licenses
* `getTrackList` - List audio tracks
* `licenseTrack` - License audio tracks
* `listGenres` - List audio genres
* `listInstruments` - List audio instruments
* `listMoods` - List audio moods
* `renameTrackCollection` - Rename audio collections
* `searchTracks` - Search for tracks

### catalog

* `addToCollection` - Add items to catalog collections
* `createCollection` - Create catalog collections
* `deleteCollection` - Delete catalog collections
* `deleteFromCollection` - Remove items from catalog collection
* `getCollections` - List catalog collections
* `searchCatalog` - Search catalogs for assets
* `updateCollection` - Update collection metadata

### computerVision

* `getKeywords` - List suggested keywords
* `getSimilarImages` - List similar images
* `getSimilarVideos` - List similar videos
* `uploadEphemeralImage` - Upload ephemeral images
* `uploadImage` - Upload images

### contributors

* `getContributor` - Get details about a single contributor
* `getContributorCollectionItems` - Get the items in contributors' collections
* `getContributorCollections` - Get details about contributors' collections
* `getContributorCollectionsList` - List contributors' collections
* `getContributorList` - Get details about multiple contributors

### customMusic

* `createAudioRenders` - Create rendered audio
* `fetchRenders` - Get details about audio renders
* `listCustomDescriptors` - List computer audio descriptors
* `listCustomInstruments` - List computer audio instruments

### editorialImages

* `getEditorialCategories` - (Deprecated) List editorial categories
* `getEditorialImage` - Get editorial content details
* `getEditorialImageLicenseList` - List editorial image licenses
* `getEditorialImageLivefeed` - Get editorial livefeed
* `getEditorialImageLivefeedItems` - Get editorial livefeed items
* `getEditorialImageLivefeedList` - Get editorial livefeed list
* `getEditorialLivefeed` - (Deprecated) Get editorial livefeed
* `getEditorialLivefeedItems` - (Deprecated) Get editorial livefeed items
* `getEditorialLivefeedList` - (Deprecated) Get editorial livefeed list
* `getUpdatedEditorialImage` - (Deprecated) List updated content
* `getUpdatedEditorialImages` - List updated content
* `getV2EditorialId` - (Deprecated) Get editorial content details
* `licenseEditorialImage` - (Deprecated) License editorial content
* `licenseEditorialImages` - License editorial content
* `listEditorialImageCategories` - List editorial categories
* `searchEditorial` - (Deprecated) Search editorial content
* `searchEditorialImages` - Search editorial images

### editorialVideo

* `getEditorialVideo` - Get editorial video content details
* `getEditorialVideoLicenseList` - List editorial video licenses
* `licenseEditorialVideo` - License editorial video content
* `listEditorialVideoCategories` - List editorial video categories
* `searchEditorialVideos` - Search editorial video content

### images

* `addImageCollectionItems` - Add images to collections
* `bulkSearchImages` - Run multiple image searches
* `createImageCollection` - Create image collections
* `deleteImageCollection` - Delete image collections
* `deleteImageCollectionItems` - Remove images from collections
* `downloadImage` - Download images
* `getFeaturedImageCollection` - Get the details of featured image collections
* `getFeaturedImageCollectionItems` - Get the contents of featured image collections
* `getFeaturedImageCollectionList` - List featured image collections
* `getImage` - Get details about images
* `getImageCollection` - Get the details of image collections
* `getImageCollectionItems` - Get the contents of image collections
* `getImageCollectionList` - List image collections
* `getImageKeywordSuggestions` - Get keywords from text
* `getImageLicenseList` - List image licenses
* `getImageList` - List images
* `getImageRecommendations` - List recommended images
* `getImageSuggestions` - Get suggestions for a search term
* `getUpdatedImages` - List updated images
* `licenseImages` - License images
* `listImageCategories` - List image categories
* `listSimilarImages` - List similar images
* `renameImageCollection` - Rename image collections
* `searchImages` - Search for images

### oauth

* `authorize` - Authorize applications
* `createAccessTokenForm` - Get access tokens
* `createAccessTokenJson` - Get access tokens

### soundEffects

* `downloadSfx` - Download sound effects
* `getSfxDetails` - Get details about sound effects
* `getSfxLicenseList` - List sound effects licenses
* `getSfxListDetails` - List details about sound effects
* `licensesSFX` - License sound effects
* `searchSFX` - Search for sound effects

### test

* `echo` - Echo text
* `validate` - Validate input

### users

* `getAccessToken` - Get access token details
* `getUser` - Get user details
* `getUserSubscriptionList` - List user subscriptions

### videos

* `addVideoCollectionItems` - Add videos to collections
* `createVideoCollection` - Create video collections
* `deleteVideoCollection` - Delete video collections
* `deleteVideoCollectionItems` - Remove videos from collections
* `downloadVideos` - Download videos
* `findSimilarVideos` - List similar videos
* `getFeaturedVideoCollection` - Get the details of featured video collections
* `getFeaturedVideoCollectionItems` - Get the contents of featured video collections
* `getFeaturedVideoCollectionList` - List featured video collections
* `getUpdatedVideos` - List updated videos
* `getVideo` - Get details about videos
* `getVideoCollection` - Get the details of video collections
* `getVideoCollectionItems` - Get the contents of video collections
* `getVideoCollectionList` - List video collections
* `getVideoLicenseList` - List video licenses
* `getVideoList` - List videos
* `getVideoSuggestions` - Get suggestions for a search term
* `licenseVideos` - License videos
* `listVideoCategories` - List video categories
* `renameVideoCollection` - Rename video collections
* `searchVideos` - Search for videos
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
