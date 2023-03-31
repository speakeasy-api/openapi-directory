# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/shutterstock.com/1.1.32/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddTrackCollectionItemsRequest(
    collection_item_request=shared.CollectionItemRequest(
        items=[
            shared.CollectionItem(
                added_time="2021-07-27T21:52:56.087Z",
                id="quibusdam",
                media_type="unde",
            ),
            shared.CollectionItem(
                added_time="2021-05-14T08:28:11.899Z",
                id="illum",
                media_type="vel",
            ),
            shared.CollectionItem(
                added_time="2021-09-16T11:56:06.019Z",
                id="suscipit",
                media_type="iure",
            ),
        ],
    ),
    id="magnam",
)
    
res = s.audio.add_track_collection_items(req, operations.AddTrackCollectionItemsSecurity(
    customer_access_code="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### audio

* `add_track_collection_items` - Add audio tracks to collections
* `create_track_collection` - Create audio collections
* `delete_track_collection` - Delete audio collections
* `delete_track_collection_items` - Remove audio tracks from collections
* `download_tracks` - Download audio tracks
* `get_track` - Get details about audio tracks
* `get_track_collection` - Get the details of audio collections
* `get_track_collection_items` - Get the contents of audio collections
* `get_track_collection_list` - List audio collections
* `get_track_license_list` - List audio licenses
* `get_track_list` - List audio tracks
* `license_track` - License audio tracks
* `list_genres` - List audio genres
* `list_instruments` - List audio instruments
* `list_moods` - List audio moods
* `rename_track_collection` - Rename audio collections
* `search_tracks` - Search for tracks

### catalog

* `add_to_collection` - Add items to catalog collections
* `create_collection` - Create catalog collections
* `delete_collection` - Delete catalog collections
* `delete_from_collection` - Remove items from catalog collection
* `get_collections` - List catalog collections
* `search_catalog` - Search catalogs for assets
* `update_collection` - Update collection metadata

### computer_vision

* `get_keywords` - List suggested keywords
* `get_similar_images` - List similar images
* `get_similar_videos` - List similar videos
* `upload_ephemeral_image` - Upload ephemeral images
* `upload_image` - Upload images

### contributors

* `get_contributor` - Get details about a single contributor
* `get_contributor_collection_items` - Get the items in contributors' collections
* `get_contributor_collections` - Get details about contributors' collections
* `get_contributor_collections_list` - List contributors' collections
* `get_contributor_list` - Get details about multiple contributors

### custom_music

* `create_audio_renders` - Create rendered audio
* `fetch_renders` - Get details about audio renders
* `list_custom_descriptors` - List computer audio descriptors
* `list_custom_instruments` - List computer audio instruments

### editorial_images

* `get_editorial_categories` - (Deprecated) List editorial categories
* `get_editorial_image` - Get editorial content details
* `get_editorial_image_license_list` - List editorial image licenses
* `get_editorial_image_livefeed` - Get editorial livefeed
* `get_editorial_image_livefeed_items` - Get editorial livefeed items
* `get_editorial_image_livefeed_list` - Get editorial livefeed list
* `get_editorial_livefeed` - (Deprecated) Get editorial livefeed
* `get_editorial_livefeed_items` - (Deprecated) Get editorial livefeed items
* `get_editorial_livefeed_list` - (Deprecated) Get editorial livefeed list
* `get_updated_editorial_image` - (Deprecated) List updated content
* `get_updated_editorial_images` - List updated content
* `get_v2_editorial_id_` - (Deprecated) Get editorial content details
* `license_editorial_image` - (Deprecated) License editorial content
* `license_editorial_images` - License editorial content
* `list_editorial_image_categories` - List editorial categories
* `search_editorial` - (Deprecated) Search editorial content
* `search_editorial_images` - Search editorial images

### editorial_video

* `get_editorial_video` - Get editorial video content details
* `get_editorial_video_license_list` - List editorial video licenses
* `license_editorial_video` - License editorial video content
* `list_editorial_video_categories` - List editorial video categories
* `search_editorial_videos` - Search editorial video content

### images

* `add_image_collection_items` - Add images to collections
* `bulk_search_images` - Run multiple image searches
* `create_image_collection` - Create image collections
* `delete_image_collection` - Delete image collections
* `delete_image_collection_items` - Remove images from collections
* `download_image` - Download images
* `get_featured_image_collection` - Get the details of featured image collections
* `get_featured_image_collection_items` - Get the contents of featured image collections
* `get_featured_image_collection_list` - List featured image collections
* `get_image` - Get details about images
* `get_image_collection` - Get the details of image collections
* `get_image_collection_items` - Get the contents of image collections
* `get_image_collection_list` - List image collections
* `get_image_keyword_suggestions` - Get keywords from text
* `get_image_license_list` - List image licenses
* `get_image_list` - List images
* `get_image_recommendations` - List recommended images
* `get_image_suggestions` - Get suggestions for a search term
* `get_updated_images` - List updated images
* `license_images` - License images
* `list_image_categories` - List image categories
* `list_similar_images` - List similar images
* `rename_image_collection` - Rename image collections
* `search_images` - Search for images

### oauth

* `authorize` - Authorize applications
* `create_access_token_form` - Get access tokens
* `create_access_token_json` - Get access tokens

### sound_effects

* `download_sfx` - Download sound effects
* `get_sfx_details` - Get details about sound effects
* `get_sfx_license_list` - List sound effects licenses
* `get_sfx_list_details` - List details about sound effects
* `licenses_sfx` - License sound effects
* `search_sfx` - Search for sound effects

### test

* `echo` - Echo text
* `validate` - Validate input

### users

* `get_access_token` - Get access token details
* `get_user` - Get user details
* `get_user_subscription_list` - List user subscriptions

### videos

* `add_video_collection_items` - Add videos to collections
* `create_video_collection` - Create video collections
* `delete_video_collection` - Delete video collections
* `delete_video_collection_items` - Remove videos from collections
* `download_videos` - Download videos
* `find_similar_videos` - List similar videos
* `get_featured_video_collection` - Get the details of featured video collections
* `get_featured_video_collection_items` - Get the contents of featured video collections
* `get_featured_video_collection_list` - List featured video collections
* `get_updated_videos` - List updated videos
* `get_video` - Get details about videos
* `get_video_collection` - Get the details of video collections
* `get_video_collection_items` - Get the contents of video collections
* `get_video_collection_list` - List video collections
* `get_video_license_list` - List video licenses
* `get_video_list` - List videos
* `get_video_suggestions` - Get suggestions for a search term
* `license_videos` - License videos
* `list_video_categories` - List video categories
* `rename_video_collection` - Rename video collections
* `search_videos` - Search for videos
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
