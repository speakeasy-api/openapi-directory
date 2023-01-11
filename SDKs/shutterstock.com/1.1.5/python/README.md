# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AddTrackCollectionItemsRequest(
    security=operations.AddTrackCollectionItemsSecurity(
        customer_access_code=shared.SchemeCustomerAccessCode(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AddTrackCollectionItemsPathParams(
        id="et",
    ),
    request=shared.CollectionItemRequest(
        items=[
            shared.CollectionItem(
                added_time="2009-03-02T11:51:41Z",
                id="delectus",
                media_type="et",
            ),
            shared.CollectionItem(
                added_time="2003-07-08T19:43:43Z",
                id="odit",
                media_type="ullam",
            ),
            shared.CollectionItem(
                added_time="1985-05-06T22:01:15Z",
                id="pariatur",
                media_type="eveniet",
            ),
        ],
    ),
)
    
res = s.audio.add_track_collection_items(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

### computer_vision

* `get_keywords` - List suggested keywords
* `get_v2_cv_similar_images` - List similar images
* `get_v2_cv_similar_videos` - List similar videos
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
* `get_updated_editorial_images` - List updated content
* `get_v2_editorial_updated` - (Deprecated) List updated content
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
* `get_similar_images` - List similar images
* `get_updated_images` - List updated images
* `license_images` - License images
* `list_image_categories` - List image categories
* `rename_image_collection` - Rename image collections
* `search_images` - Search for images

### oauth

* `authorize` - Authorize applications
* `create_access_token` - Get access tokens

### test

* `echo` - Echo text
* `validate` - Validate input

### users

* `get_access_token` - Get access token details
* `get_user` - Get user details
* `get_user_subscription_list` - List user subscriptions

### video_editor

* `auth_video_editor` - Get video editor access tokens
* `register_editor_instance` - Register instances of the video editor
* `update_editor_instance` - Update instances of the video editor

### videos

* `add_video_collection_items` - Add videos to collections
* `create_video_collection` - Create video collections
* `delete_video_collection` - Delete video collections
* `delete_video_collection_items` - Remove videos from collections
* `download_videos` - Download videos
* `get_featured_video_collection` - Get the details of featured video collections
* `get_featured_video_collection_items` - Get the contents of featured video collections
* `get_featured_video_collection_list` - List featured video collections
* `get_similar_videos` - List similar videos
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
