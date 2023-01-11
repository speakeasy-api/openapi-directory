# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddTrackCollectionItemsRequest, AddTrackCollectionItemsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AddTrackCollectionItemsRequest = {
  security: {
    customerAccessCode: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
  request: {
    items: [
      {
        addedTime: "1978-05-13T03:50:47Z",
        id: "expedita",
        mediaType: "consequuntur",
      },
    ],
  },
};

sdk.audio.addTrackCollectionItems(req).then((res: AddTrackCollectionItemsResponse | AxiosError) => {
   // handle response
});
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

### computer_vision

* `getKeywords` - List suggested keywords
* `getV2CvSimilarImages` - List similar images
* `getV2CvSimilarVideos` - List similar videos
* `uploadEphemeralImage` - Upload ephemeral images
* `uploadImage` - Upload images

### contributors

* `getContributor` - Get details about a single contributor
* `getContributorCollectionItems` - Get the items in contributors' collections
* `getContributorCollections` - Get details about contributors' collections
* `getContributorCollectionsList` - List contributors' collections
* `getContributorList` - Get details about multiple contributors

### custom_music

* `createAudioRenders` - Create rendered audio
* `fetchRenders` - Get details about audio renders
* `listCustomDescriptors` - List computer audio descriptors
* `listCustomInstruments` - List computer audio instruments

### editorial_images

* `getEditorialCategories` - (Deprecated) List editorial categories
* `getEditorialImage` - Get editorial content details
* `getEditorialImageLicenseList` - List editorial image licenses
* `getEditorialImageLivefeed` - Get editorial livefeed
* `getEditorialImageLivefeedItems` - Get editorial livefeed items
* `getEditorialImageLivefeedList` - Get editorial livefeed list
* `getEditorialLivefeed` - (Deprecated) Get editorial livefeed
* `getEditorialLivefeedItems` - (Deprecated) Get editorial livefeed items
* `getEditorialLivefeedList` - (Deprecated) Get editorial livefeed list
* `getUpdatedEditorialImages` - List updated content
* `getV2EditorialUpdated` - (Deprecated) List updated content
* `getV2EditorialId` - (Deprecated) Get editorial content details
* `licenseEditorialImage` - (Deprecated) License editorial content
* `licenseEditorialImages` - License editorial content
* `listEditorialImageCategories` - List editorial categories
* `searchEditorial` - (Deprecated) Search editorial content
* `searchEditorialImages` - Search editorial images

### editorial_video

* `getEditorialVideo` - Get editorial video content details
* `getEditorialVideoLicenseList` - List editorial video licenses
* `licenseEditorialVideo` - License editorial video content
* `listEditorialVideoCategories` - List editorial video categories
* `searchEditorialVideos` - Search editorial video content

### images

* `addImageCollectionItems` - Add images to collections
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
* `getSimilarImages` - List similar images
* `getUpdatedImages` - List updated images
* `licenseImages` - License images
* `listImageCategories` - List image categories
* `renameImageCollection` - Rename image collections
* `searchImages` - Search for images

### oauth

* `authorize` - Authorize applications
* `createAccessToken` - Get access tokens

### test

* `echo` - Echo text
* `validate` - Validate input

### users

* `getAccessToken` - Get access token details
* `getUser` - Get user details
* `getUserSubscriptionList` - List user subscriptions

### video_editor

* `authVideoEditor` - Get video editor access tokens
* `registerEditorInstance` - Register instances of the video editor
* `updateEditorInstance` - Update instances of the video editor

### videos

* `addVideoCollectionItems` - Add videos to collections
* `createVideoCollection` - Create video collections
* `deleteVideoCollection` - Delete video collections
* `deleteVideoCollectionItems` - Remove videos from collections
* `downloadVideos` - Download videos
* `getFeaturedVideoCollection` - Get the details of featured video collections
* `getFeaturedVideoCollectionItems` - Get the contents of featured video collections
* `getFeaturedVideoCollectionList` - List featured video collections
* `getSimilarVideos` - List similar videos
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
