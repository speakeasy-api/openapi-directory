# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/soundcloud.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteLikesPlaylistsPlaylistIDRequest(
    playlist_id=548814,
)
    
res = s.likes.delete_likes_playlists_playlist_id_(req, operations.DeleteLikesPlaylistsPlaylistIDSecurity(
    auth_header="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### likes

* `delete_likes_playlists_playlist_id_` - Unlikes a playlist.
* `delete_likes_tracks_track_id_` - Unlikes a track.
* `post_likes_playlists_playlist_id_` - Likes a playlist.
* `post_likes_tracks_track_id_` - Likes a track.

### me

* `delete_me_followings_user_id_` - Deletes a user who is followed by the authenticated user.
* `get_me` - Returns the authenticated user’s information.
* `get_me_activities` - Returns the authenticated user's activities.
* `get_me_activities_all_own` - Recent the authenticated user's activities.
* `get_me_activities_tracks` - Returns the authenticated user's recent track related activities.
* `get_me_connections` - Returns a list of the authenticated user's connected social accounts.
* `get_me_connections_connection_id_` - Returns the authenticated user's connected social account.
* `get_me_favorites_ids` - Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)
* `get_me_followers` - Returns a list of users who are following the authenticated user.
* `get_me_followers_follower_id_` - Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)
* `get_me_followings` - Returns a list of users who are followed by the authenticated user.
* `get_me_followings_tracks` - Returns a list of recent tracks from users followed by the authenticated user.
* `get_me_followings_user_id_` - Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)
* `get_me_likes_tracks` - Returns a list of favorited or liked tracks of the authenticated user.
* `get_me_playlists` - Returns user’s playlists (sets).
* `get_me_playlists_playlist_id_` - Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)
* `get_me_tracks` - Returns a list of user's tracks.
* `get_me_tracks_track_id_` - Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)
* `put_me_followings_user_id_` - Follows a user.

### miscellaneous

* `get_resolve` - Resolves soundcloud.com URLs to Resource URLs to use with the API.

### oauth

* `get_connect` - The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
* `post_oauth2_token` - This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.

### playlists

* `delete_playlists_playlist_id_` - Deletes a playlist.
* `get_playlists_playlist_id_` - Returns a playlist.
* `get_playlists_playlist_id_reposters` - Returns a collection of playlist's reposters.
* `get_playlists_playlist_id_tracks` - Returns tracks under a playlist.
* `post_playlists` - Creates a playlist.
* `put_playlists_playlist_id_` - Updates a playlist.

### reposts

* `delete_reposts_playlists_playlist_id_` - Removes a repost on a playlist as the authenticated user
* `delete_reposts_tracks_track_id_` - Removes a repost on a track as the authenticated user
* `post_reposts_playlists_playlist_id_` - Reposts a playlist as the authenticated user
* `post_reposts_tracks_track_id_` - Reposts a track as the authenticated user

### search

* `get_playlists` - Performs a playlist search based on a query
* `get_tracks` - Performs a track search based on a query
* `get_users` - Performs a user search based on a query

### tracks

* `delete_tracks_track_id_` - Deletes a track.
* `get_tracks_track_id_` - Returns a track.
* `get_tracks_track_id_comments` - Returns the comments posted on the track(track_id).
* `get_tracks_track_id_favoriters` - Returns a list of users who have favorited or liked the track.
* `get_tracks_track_id_related` - Returns all related tracks of track on SoundCloud.
* `get_tracks_track_id_reposters` - Returns a collection of track's reposters.
* `get_tracks_track_id_streams` - Returns a track's streamable URLs
* `post_tracks` - Uploads a new track.
* `post_tracks_track_id_comments` - Returns the newly created comment on success
* `put_tracks_track_id_json` - Updates a track's information.
* `put_tracks_track_id_multipart` - Updates a track's information.

### users

* `get_users_user_id_` - Returns a user.
* `get_users_user_id_comments` - Returns a list of user's comments.
* `get_users_user_id_favorites` - Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)
* `get_users_user_id_followers` - Returns a list of user’s followers.
* `get_users_user_id_followings` - Returns a list of user’s followings.
* `get_users_user_id_followings_following_id_` - Returns a user's following. (use /users/{user_id} instead, to fetch the user details)
* `get_users_user_id_likes_tracks` - Returns a list of user's liked tracks.
* `get_users_user_id_playlists` - Returns a list of user's playlists.
* `get_users_user_id_tracks` - Returns a list of user's tracks.
* `get_users_user_id_web_profiles` - Returns list of user's links added to their profile (website, facebook, instagram).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
