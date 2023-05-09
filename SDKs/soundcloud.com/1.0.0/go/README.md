# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/soundcloud.com/1.0.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Likes.DeleteLikesPlaylistsPlaylistID(ctx, operations.DeleteLikesPlaylistsPlaylistIDRequest{
        PlaylistID: 548814,
    }, operations.DeleteLikesPlaylistsPlaylistIDSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
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


### [Likes](docs/likes/README.md)

* [DeleteLikesPlaylistsPlaylistID](docs/likes/README.md#deletelikesplaylistsplaylistid) - Unlikes a playlist.
* [DeleteLikesTracksTrackID](docs/likes/README.md#deletelikestrackstrackid) - Unlikes a track.
* [PostLikesPlaylistsPlaylistID](docs/likes/README.md#postlikesplaylistsplaylistid) - Likes a playlist.
* [PostLikesTracksTrackID](docs/likes/README.md#postlikestrackstrackid) - Likes a track.

### [Me](docs/me/README.md)

* [DeleteMeFollowingsUserID](docs/me/README.md#deletemefollowingsuserid) - Deletes a user who is followed by the authenticated user.
* [GetMe](docs/me/README.md#getme) - Returns the authenticated user’s information.
* [GetMeActivities](docs/me/README.md#getmeactivities) - Returns the authenticated user's activities.
* [GetMeActivitiesAllOwn](docs/me/README.md#getmeactivitiesallown) - Recent the authenticated user's activities.
* [GetMeActivitiesTracks](docs/me/README.md#getmeactivitiestracks) - Returns the authenticated user's recent track related activities.
* [GetMeConnections](docs/me/README.md#getmeconnections) - Returns a list of the authenticated user's connected social accounts.
* [GetMeConnectionsConnectionID](docs/me/README.md#getmeconnectionsconnectionid) - Returns the authenticated user's connected social account.
* [~~GetMeFavoritesIds~~](docs/me/README.md#getmefavoritesids) - Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes) :warning: **Deprecated**
* [GetMeFollowers](docs/me/README.md#getmefollowers) - Returns a list of users who are following the authenticated user.
* [~~GetMeFollowersFollowerID~~](docs/me/README.md#getmefollowersfollowerid) - Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [GetMeFollowings](docs/me/README.md#getmefollowings) - Returns a list of users who are followed by the authenticated user.
* [GetMeFollowingsTracks](docs/me/README.md#getmefollowingstracks) - Returns a list of recent tracks from users followed by the authenticated user.
* [~~GetMeFollowingsUserID~~](docs/me/README.md#getmefollowingsuserid) - Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [GetMeLikesTracks](docs/me/README.md#getmelikestracks) - Returns a list of favorited or liked tracks of the authenticated user.
* [GetMePlaylists](docs/me/README.md#getmeplaylists) - Returns user’s playlists (sets).
* [~~GetMePlaylistsPlaylistID~~](docs/me/README.md#getmeplaylistsplaylistid) - Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details) :warning: **Deprecated**
* [GetMeTracks](docs/me/README.md#getmetracks) - Returns a list of user's tracks.
* [~~GetMeTracksTrackID~~](docs/me/README.md#getmetrackstrackid) - Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details) :warning: **Deprecated**
* [PutMeFollowingsUserID](docs/me/README.md#putmefollowingsuserid) - Follows a user.

### [Miscellaneous](docs/miscellaneous/README.md)

* [GetResolve](docs/miscellaneous/README.md#getresolve) - Resolves soundcloud.com URLs to Resource URLs to use with the API.

### [Oauth](docs/oauth/README.md)

* [GetConnect](docs/oauth/README.md#getconnect) - The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.

### [Playlists](docs/playlists/README.md)

* [DeletePlaylistsPlaylistID](docs/playlists/README.md#deleteplaylistsplaylistid) - Deletes a playlist.
* [GetPlaylistsPlaylistID](docs/playlists/README.md#getplaylistsplaylistid) - Returns a playlist.
* [GetPlaylistsPlaylistIDReposters](docs/playlists/README.md#getplaylistsplaylistidreposters) - Returns a collection of playlist's reposters.
* [GetPlaylistsPlaylistIDTracks](docs/playlists/README.md#getplaylistsplaylistidtracks) - Returns tracks under a playlist.
* [PostPlaylists](docs/playlists/README.md#postplaylists) - Creates a playlist.
* [PutPlaylistsPlaylistID](docs/playlists/README.md#putplaylistsplaylistid) - Updates a playlist.

### [Reposts](docs/reposts/README.md)

* [DeleteRepostsPlaylistsPlaylistID](docs/reposts/README.md#deleterepostsplaylistsplaylistid) - Removes a repost on a playlist as the authenticated user
* [DeleteRepostsTracksTrackID](docs/reposts/README.md#deleterepoststrackstrackid) - Removes a repost on a track as the authenticated user
* [PostRepostsPlaylistsPlaylistID](docs/reposts/README.md#postrepostsplaylistsplaylistid) - Reposts a playlist as the authenticated user
* [PostRepostsTracksTrackID](docs/reposts/README.md#postrepoststrackstrackid) - Reposts a track as the authenticated user

### [Search](docs/search/README.md)

* [GetPlaylists](docs/search/README.md#getplaylists) - Performs a playlist search based on a query
* [GetTracks](docs/search/README.md#gettracks) - Performs a track search based on a query
* [GetUsers](docs/search/README.md#getusers) - Performs a user search based on a query

### [Tracks](docs/tracks/README.md)

* [DeleteTracksTrackID](docs/tracks/README.md#deletetrackstrackid) - Deletes a track.
* [GetTracksTrackID](docs/tracks/README.md#gettrackstrackid) - Returns a track.
* [GetTracksTrackIDComments](docs/tracks/README.md#gettrackstrackidcomments) - Returns the comments posted on the track(track_id).
* [GetTracksTrackIDFavoriters](docs/tracks/README.md#gettrackstrackidfavoriters) - Returns a list of users who have favorited or liked the track.
* [GetTracksTrackIDRelated](docs/tracks/README.md#gettrackstrackidrelated) - Returns all related tracks of track on SoundCloud.
* [GetTracksTrackIDReposters](docs/tracks/README.md#gettrackstrackidreposters) - Returns a collection of track's reposters.
* [GetTracksTrackIDStreams](docs/tracks/README.md#gettrackstrackidstreams) - Returns a track's streamable URLs
* [PostTracks](docs/tracks/README.md#posttracks) - Uploads a new track.
* [PostTracksTrackIDComments](docs/tracks/README.md#posttrackstrackidcomments) - Returns the newly created comment on success
* [PutTracksTrackIDJSON](docs/tracks/README.md#puttrackstrackidjson) - Updates a track's information.
* [PutTracksTrackIDMultipart](docs/tracks/README.md#puttrackstrackidmultipart) - Updates a track's information.

### [Users](docs/users/README.md)

* [GetUsersUserID](docs/users/README.md#getusersuserid) - Returns a user.
* [GetUsersUserIDComments](docs/users/README.md#getusersuseridcomments) - Returns a list of user's comments.
* [~~GetUsersUserIDFavorites~~](docs/users/README.md#getusersuseridfavorites) - Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes) :warning: **Deprecated**
* [GetUsersUserIDFollowers](docs/users/README.md#getusersuseridfollowers) - Returns a list of user’s followers.
* [GetUsersUserIDFollowings](docs/users/README.md#getusersuseridfollowings) - Returns a list of user’s followings.
* [~~GetUsersUserIDFollowingsFollowingID~~](docs/users/README.md#getusersuseridfollowingsfollowingid) - Returns a user's following. (use /users/{user_id} instead, to fetch the user details) :warning: **Deprecated**
* [GetUsersUserIDLikesTracks](docs/users/README.md#getusersuseridlikestracks) - Returns a list of user's liked tracks.
* [GetUsersUserIDPlaylists](docs/users/README.md#getusersuseridplaylists) - Returns a list of user's playlists.
* [GetUsersUserIDTracks](docs/users/README.md#getusersuseridtracks) - Returns a list of user's tracks.
* [GetUsersUserIDWebProfiles](docs/users/README.md#getusersuseridwebprofiles) - Returns list of user's links added to their profile (website, facebook, instagram).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
