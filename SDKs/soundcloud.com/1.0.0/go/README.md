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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteLikesPlaylistsPlaylistIDRequest{
        Security: operations.DeleteLikesPlaylistsPlaylistIDSecurity{
            AuthHeader: shared.SchemeAuthHeader{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.DeleteLikesPlaylistsPlaylistIDPathParams{
            PlaylistID: 548814,
        },
    }

    ctx := context.Background()
    res, err := s.Likes.DeleteLikesPlaylistsPlaylistID(ctx, req)
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
## SDK Available Operations


### Likes

* `DeleteLikesPlaylistsPlaylistID` - Unlikes a playlist.
* `DeleteLikesTracksTrackID` - Unlikes a track.
* `PostLikesPlaylistsPlaylistID` - Likes a playlist.
* `PostLikesTracksTrackID` - Likes a track.

### Me

* `DeleteMeFollowingsUserID` - Deletes a user who is followed by the authenticated user.
* `GetMe` - Returns the authenticated user’s information.
* `GetMeActivities` - Returns the authenticated user's activities.
* `GetMeActivitiesAllOwn` - Recent the authenticated user's activities.
* `GetMeActivitiesTracks` - Returns the authenticated user's recent track related activities.
* `GetMeConnections` - Returns a list of the authenticated user's connected social accounts.
* `GetMeConnectionsConnectionID` - Returns the authenticated user's connected social account.
* `GetMeFavoritesIds` - Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)
* `GetMeFollowers` - Returns a list of users who are following the authenticated user.
* `GetMeFollowersFollowerID` - Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)
* `GetMeFollowings` - Returns a list of users who are followed by the authenticated user.
* `GetMeFollowingsTracks` - Returns a list of recent tracks from users followed by the authenticated user.
* `GetMeFollowingsUserID` - Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)
* `GetMeLikesTracks` - Returns a list of favorited or liked tracks of the authenticated user.
* `GetMePlaylists` - Returns user’s playlists (sets).
* `GetMePlaylistsPlaylistID` - Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)
* `GetMeTracks` - Returns a list of user's tracks.
* `GetMeTracksTrackID` - Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)
* `PutMeFollowingsUserID` - Follows a user.

### Miscellaneous

* `GetResolve` - Resolves soundcloud.com URLs to Resource URLs to use with the API.

### Oauth

* `GetConnect` - The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.

### Playlists

* `DeletePlaylistsPlaylistID` - Deletes a playlist.
* `GetPlaylistsPlaylistID` - Returns a playlist.
* `GetPlaylistsPlaylistIDReposters` - Returns a collection of playlist's reposters.
* `GetPlaylistsPlaylistIDTracks` - Returns tracks under a playlist.
* `PostPlaylists` - Creates a playlist.
* `PutPlaylistsPlaylistID` - Updates a playlist.

### Reposts

* `DeleteRepostsPlaylistsPlaylistID` - Removes a repost on a playlist as the authenticated user
* `DeleteRepostsTracksTrackID` - Removes a repost on a track as the authenticated user
* `PostRepostsPlaylistsPlaylistID` - Reposts a playlist as the authenticated user
* `PostRepostsTracksTrackID` - Reposts a track as the authenticated user

### Search

* `GetPlaylists` - Performs a playlist search based on a query
* `GetTracks` - Performs a track search based on a query
* `GetUsers` - Performs a user search based on a query

### Tracks

* `DeleteTracksTrackID` - Deletes a track.
* `GetTracksTrackID` - Returns a track.
* `GetTracksTrackIDComments` - Returns the comments posted on the track(track_id).
* `GetTracksTrackIDFavoriters` - Returns a list of users who have favorited or liked the track.
* `GetTracksTrackIDRelated` - Returns all related tracks of track on SoundCloud.
* `GetTracksTrackIDReposters` - Returns a collection of track's reposters.
* `GetTracksTrackIDStreams` - Returns a track's streamable URLs
* `PostTracks` - Uploads a new track.
* `PostTracksTrackIDComments` - Returns the newly created comment on success
* `PutTracksTrackIDJSON` - Updates a track's information.
* `PutTracksTrackIDMultipart` - Updates a track's information.

### Users

* `GetUsersUserID` - Returns a user.
* `GetUsersUserIDComments` - Returns a list of user's comments.
* `GetUsersUserIDFavorites` - Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)
* `GetUsersUserIDFollowers` - Returns a list of user’s followers.
* `GetUsersUserIDFollowings` - Returns a list of user’s followings.
* `GetUsersUserIDFollowingsFollowingID` - Returns a user's following. (use /users/{user_id} instead, to fetch the user details)
* `GetUsersUserIDLikesTracks` - Returns a list of user's liked tracks.
* `GetUsersUserIDPlaylists` - Returns a list of user's playlists.
* `GetUsersUserIDTracks` - Returns a list of user's tracks.
* `GetUsersUserIDWebProfiles` - Returns list of user's links added to their profile (website, facebook, instagram).
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
