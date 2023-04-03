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

import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdSecurity;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdRequest;
import org.openapis.openapi.models.operations.DeleteLikesPlaylistsPlaylistIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLikesPlaylistsPlaylistIdRequest req = new DeleteLikesPlaylistsPlaylistIdRequest() {{
                playlistId = 548814;
            }}            

            DeleteLikesPlaylistsPlaylistIdResponse res = sdk.likes.deleteLikesPlaylistsPlaylistId(req, new DeleteLikesPlaylistsPlaylistIdSecurity() {{
                authHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### likes

* `deleteLikesPlaylistsPlaylistId` - Unlikes a playlist.
* `deleteLikesTracksTrackId` - Unlikes a track.
* `postLikesPlaylistsPlaylistId` - Likes a playlist.
* `postLikesTracksTrackId` - Likes a track.

### me

* `deleteMeFollowingsUserId` - Deletes a user who is followed by the authenticated user.
* `getMe` - Returns the authenticated user’s information.
* `getMeActivities` - Returns the authenticated user's activities.
* `getMeActivitiesAllOwn` - Recent the authenticated user's activities.
* `getMeActivitiesTracks` - Returns the authenticated user's recent track related activities.
* `getMeConnections` - Returns a list of the authenticated user's connected social accounts.
* `getMeConnectionsConnectionId` - Returns the authenticated user's connected social account.
* `getMeFavoritesIds` - Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)
* `getMeFollowers` - Returns a list of users who are following the authenticated user.
* `getMeFollowersFollowerId` - Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)
* `getMeFollowings` - Returns a list of users who are followed by the authenticated user.
* `getMeFollowingsTracks` - Returns a list of recent tracks from users followed by the authenticated user.
* `getMeFollowingsUserId` - Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)
* `getMeLikesTracks` - Returns a list of favorited or liked tracks of the authenticated user.
* `getMePlaylists` - Returns user’s playlists (sets).
* `getMePlaylistsPlaylistId` - Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)
* `getMeTracks` - Returns a list of user's tracks.
* `getMeTracksTrackId` - Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)
* `putMeFollowingsUserId` - Follows a user.

### miscellaneous

* `getResolve` - Resolves soundcloud.com URLs to Resource URLs to use with the API.

### oauth

* `getConnect` - The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
* `postOauth2Token` - This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.

### playlists

* `deletePlaylistsPlaylistId` - Deletes a playlist.
* `getPlaylistsPlaylistId` - Returns a playlist.
* `getPlaylistsPlaylistIdReposters` - Returns a collection of playlist's reposters.
* `getPlaylistsPlaylistIdTracks` - Returns tracks under a playlist.
* `postPlaylists` - Creates a playlist.
* `putPlaylistsPlaylistId` - Updates a playlist.

### reposts

* `deleteRepostsPlaylistsPlaylistId` - Removes a repost on a playlist as the authenticated user
* `deleteRepostsTracksTrackId` - Removes a repost on a track as the authenticated user
* `postRepostsPlaylistsPlaylistId` - Reposts a playlist as the authenticated user
* `postRepostsTracksTrackId` - Reposts a track as the authenticated user

### search

* `getPlaylists` - Performs a playlist search based on a query
* `getTracks` - Performs a track search based on a query
* `getUsers` - Performs a user search based on a query

### tracks

* `deleteTracksTrackId` - Deletes a track.
* `getTracksTrackId` - Returns a track.
* `getTracksTrackIdComments` - Returns the comments posted on the track(track_id).
* `getTracksTrackIdFavoriters` - Returns a list of users who have favorited or liked the track.
* `getTracksTrackIdRelated` - Returns all related tracks of track on SoundCloud.
* `getTracksTrackIdReposters` - Returns a collection of track's reposters.
* `getTracksTrackIdStreams` - Returns a track's streamable URLs
* `postTracks` - Uploads a new track.
* `postTracksTrackIdComments` - Returns the newly created comment on success
* `putTracksTrackIdJson` - Updates a track's information.
* `putTracksTrackIdMultipart` - Updates a track's information.

### users

* `getUsersUserId` - Returns a user.
* `getUsersUserIdComments` - Returns a list of user's comments.
* `getUsersUserIdFavorites` - Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)
* `getUsersUserIdFollowers` - Returns a list of user’s followers.
* `getUsersUserIdFollowings` - Returns a list of user’s followings.
* `getUsersUserIdFollowingsFollowingId` - Returns a user's following. (use /users/{user_id} instead, to fetch the user details)
* `getUsersUserIdLikesTracks` - Returns a list of user's liked tracks.
* `getUsersUserIdPlaylists` - Returns a list of user's playlists.
* `getUsersUserIdTracks` - Returns a list of user's tracks.
* `getUsersUserIdWebProfiles` - Returns list of user's links added to their profile (website, facebook, instagram).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
