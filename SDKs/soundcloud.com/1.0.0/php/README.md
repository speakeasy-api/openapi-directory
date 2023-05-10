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
use \OpenAPI\OpenAPI\Models\Operations\DeleteLikesPlaylistsPlaylistIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLikesPlaylistsPlaylistIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLikesPlaylistsPlaylistIdRequest();
    $request->playlistId = 548814;

    $requestSecurity = new DeleteLikesPlaylistsPlaylistIdSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->likes->deleteLikesPlaylistsPlaylistId($request, $requestSecurity);

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


### [likes](docs/likes/README.md)

* [deleteLikesPlaylistsPlaylistId](docs/likes/README.md#deletelikesplaylistsplaylistid) - Unlikes a playlist.
* [deleteLikesTracksTrackId](docs/likes/README.md#deletelikestrackstrackid) - Unlikes a track.
* [postLikesPlaylistsPlaylistId](docs/likes/README.md#postlikesplaylistsplaylistid) - Likes a playlist.
* [postLikesTracksTrackId](docs/likes/README.md#postlikestrackstrackid) - Likes a track.

### [me](docs/me/README.md)

* [deleteMeFollowingsUserId](docs/me/README.md#deletemefollowingsuserid) - Deletes a user who is followed by the authenticated user.
* [getMe](docs/me/README.md#getme) - Returns the authenticated user’s information.
* [getMeActivities](docs/me/README.md#getmeactivities) - Returns the authenticated user's activities.
* [getMeActivitiesAllOwn](docs/me/README.md#getmeactivitiesallown) - Recent the authenticated user's activities.
* [getMeActivitiesTracks](docs/me/README.md#getmeactivitiestracks) - Returns the authenticated user's recent track related activities.
* [getMeConnections](docs/me/README.md#getmeconnections) - Returns a list of the authenticated user's connected social accounts.
* [getMeConnectionsConnectionId](docs/me/README.md#getmeconnectionsconnectionid) - Returns the authenticated user's connected social account.
* [~~getMeFavoritesIds~~](docs/me/README.md#getmefavoritesids) - Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes) :warning: **Deprecated**
* [getMeFollowers](docs/me/README.md#getmefollowers) - Returns a list of users who are following the authenticated user.
* [~~getMeFollowersFollowerId~~](docs/me/README.md#getmefollowersfollowerid) - Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [getMeFollowings](docs/me/README.md#getmefollowings) - Returns a list of users who are followed by the authenticated user.
* [getMeFollowingsTracks](docs/me/README.md#getmefollowingstracks) - Returns a list of recent tracks from users followed by the authenticated user.
* [~~getMeFollowingsUserId~~](docs/me/README.md#getmefollowingsuserid) - Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [getMeLikesTracks](docs/me/README.md#getmelikestracks) - Returns a list of favorited or liked tracks of the authenticated user.
* [getMePlaylists](docs/me/README.md#getmeplaylists) - Returns user’s playlists (sets).
* [~~getMePlaylistsPlaylistId~~](docs/me/README.md#getmeplaylistsplaylistid) - Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details) :warning: **Deprecated**
* [getMeTracks](docs/me/README.md#getmetracks) - Returns a list of user's tracks.
* [~~getMeTracksTrackId~~](docs/me/README.md#getmetrackstrackid) - Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details) :warning: **Deprecated**
* [putMeFollowingsUserId](docs/me/README.md#putmefollowingsuserid) - Follows a user.

### [miscellaneous](docs/miscellaneous/README.md)

* [getResolve](docs/miscellaneous/README.md#getresolve) - Resolves soundcloud.com URLs to Resource URLs to use with the API.

### [oauth](docs/oauth/README.md)

* [getConnect](docs/oauth/README.md#getconnect) - The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
* [postOauth2Token](docs/oauth/README.md#postoauth2token) - This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.

### [playlists](docs/playlists/README.md)

* [deletePlaylistsPlaylistId](docs/playlists/README.md#deleteplaylistsplaylistid) - Deletes a playlist.
* [getPlaylistsPlaylistId](docs/playlists/README.md#getplaylistsplaylistid) - Returns a playlist.
* [getPlaylistsPlaylistIdReposters](docs/playlists/README.md#getplaylistsplaylistidreposters) - Returns a collection of playlist's reposters.
* [getPlaylistsPlaylistIdTracks](docs/playlists/README.md#getplaylistsplaylistidtracks) - Returns tracks under a playlist.
* [postPlaylists](docs/playlists/README.md#postplaylists) - Creates a playlist.
* [putPlaylistsPlaylistId](docs/playlists/README.md#putplaylistsplaylistid) - Updates a playlist.

### [reposts](docs/reposts/README.md)

* [deleteRepostsPlaylistsPlaylistId](docs/reposts/README.md#deleterepostsplaylistsplaylistid) - Removes a repost on a playlist as the authenticated user
* [deleteRepostsTracksTrackId](docs/reposts/README.md#deleterepoststrackstrackid) - Removes a repost on a track as the authenticated user
* [postRepostsPlaylistsPlaylistId](docs/reposts/README.md#postrepostsplaylistsplaylistid) - Reposts a playlist as the authenticated user
* [postRepostsTracksTrackId](docs/reposts/README.md#postrepoststrackstrackid) - Reposts a track as the authenticated user

### [search](docs/search/README.md)

* [getPlaylists](docs/search/README.md#getplaylists) - Performs a playlist search based on a query
* [getTracks](docs/search/README.md#gettracks) - Performs a track search based on a query
* [getUsers](docs/search/README.md#getusers) - Performs a user search based on a query

### [tracks](docs/tracks/README.md)

* [deleteTracksTrackId](docs/tracks/README.md#deletetrackstrackid) - Deletes a track.
* [getTracksTrackId](docs/tracks/README.md#gettrackstrackid) - Returns a track.
* [getTracksTrackIdComments](docs/tracks/README.md#gettrackstrackidcomments) - Returns the comments posted on the track(track_id).
* [getTracksTrackIdFavoriters](docs/tracks/README.md#gettrackstrackidfavoriters) - Returns a list of users who have favorited or liked the track.
* [getTracksTrackIdRelated](docs/tracks/README.md#gettrackstrackidrelated) - Returns all related tracks of track on SoundCloud.
* [getTracksTrackIdReposters](docs/tracks/README.md#gettrackstrackidreposters) - Returns a collection of track's reposters.
* [getTracksTrackIdStreams](docs/tracks/README.md#gettrackstrackidstreams) - Returns a track's streamable URLs
* [postTracks](docs/tracks/README.md#posttracks) - Uploads a new track.
* [postTracksTrackIdComments](docs/tracks/README.md#posttrackstrackidcomments) - Returns the newly created comment on success
* [putTracksTrackIdJson](docs/tracks/README.md#puttrackstrackidjson) - Updates a track's information.
* [putTracksTrackIdMultipart](docs/tracks/README.md#puttrackstrackidmultipart) - Updates a track's information.

### [users](docs/users/README.md)

* [getUsersUserId](docs/users/README.md#getusersuserid) - Returns a user.
* [getUsersUserIdComments](docs/users/README.md#getusersuseridcomments) - Returns a list of user's comments.
* [~~getUsersUserIdFavorites~~](docs/users/README.md#getusersuseridfavorites) - Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes) :warning: **Deprecated**
* [getUsersUserIdFollowers](docs/users/README.md#getusersuseridfollowers) - Returns a list of user’s followers.
* [getUsersUserIdFollowings](docs/users/README.md#getusersuseridfollowings) - Returns a list of user’s followings.
* [~~getUsersUserIdFollowingsFollowingId~~](docs/users/README.md#getusersuseridfollowingsfollowingid) - Returns a user's following. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [getUsersUserIdLikesTracks](docs/users/README.md#getusersuseridlikestracks) - Returns a list of user's liked tracks.
* [getUsersUserIdPlaylists](docs/users/README.md#getusersuseridplaylists) - Returns a list of user's playlists.
* [getUsersUserIdTracks](docs/users/README.md#getusersuseridtracks) - Returns a list of user's tracks.
* [getUsersUserIdWebProfiles](docs/users/README.md#getusersuseridwebprofiles) - Returns list of user's links added to their profile (website, facebook, instagram).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
