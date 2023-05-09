# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/tvmaze.com/1.0/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.GetAuthValidate(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthValidate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Auth](docs/auth/README.md)

* [GetAuthValidate](docs/auth/README.md#getauthvalidate) - Validate your authentication credentials
* [PostAuthPoll](docs/auth/README.md#postauthpoll) - Poll whether an authentication request was confirmed
* [PostAuthStart](docs/auth/README.md#postauthstart) - Start an authentication request

### [FollowedNetworks](docs/followednetworks/README.md)

* [DeleteUserFollowsNetworksNetworkID](docs/followednetworks/README.md#deleteuserfollowsnetworksnetworkid) - Unfollow a network
* [GetUserFollowsNetworks](docs/followednetworks/README.md#getuserfollowsnetworks) - List the followed networks
* [GetUserFollowsNetworksNetworkID](docs/followednetworks/README.md#getuserfollowsnetworksnetworkid) - Check if a network is followed
* [PutUserFollowsNetworksNetworkID](docs/followednetworks/README.md#putuserfollowsnetworksnetworkid) - Follow a network

### [FollowedPeople](docs/followedpeople/README.md)

* [DeleteUserFollowsPeoplePersonID](docs/followedpeople/README.md#deleteuserfollowspeoplepersonid) - Unfollow a person
* [GetUserFollowsPeople](docs/followedpeople/README.md#getuserfollowspeople) - List the followed people
* [GetUserFollowsPeoplePersonID](docs/followedpeople/README.md#getuserfollowspeoplepersonid) - Check if a person is followed
* [PutUserFollowsPeoplePersonID](docs/followedpeople/README.md#putuserfollowspeoplepersonid) - Follow a person

### [FollowedShows](docs/followedshows/README.md)

* [DeleteUserFollowsShowsShowID](docs/followedshows/README.md#deleteuserfollowsshowsshowid) - Unfollow a show
* [GetUserFollowsShows](docs/followedshows/README.md#getuserfollowsshows) - List the followed shows
* [GetUserFollowsShowsShowID](docs/followedshows/README.md#getuserfollowsshowsshowid) - Check if a show is followed
* [PutUserFollowsShowsShowID](docs/followedshows/README.md#putuserfollowsshowsshowid) - Follow a show

### [FollowedWebchannels](docs/followedwebchannels/README.md)

* [DeleteUserFollowsWebchannelsWebchannelID](docs/followedwebchannels/README.md#deleteuserfollowswebchannelswebchannelid) - Unfollow a webchannel
* [GetUserFollowsWebchannels](docs/followedwebchannels/README.md#getuserfollowswebchannels) - List the followed webchannels
* [GetUserFollowsWebchannelsWebchannelID](docs/followedwebchannels/README.md#getuserfollowswebchannelswebchannelid) - Check if a webchannel is followed
* [PutUserFollowsWebchannelsWebchannelID](docs/followedwebchannels/README.md#putuserfollowswebchannelswebchannelid) - Follow a webchannel

### [MarkedEpisodes](docs/markedepisodes/README.md)

* [DeleteUserEpisodesEpisodeID](docs/markedepisodes/README.md#deleteuserepisodesepisodeid) - Unmark an episode
* [GetUserEpisodes](docs/markedepisodes/README.md#getuserepisodes) - List the marked episodes
* [GetUserEpisodesEpisodeID](docs/markedepisodes/README.md#getuserepisodesepisodeid) - Check if an episode is marked
* [PutUserEpisodesEpisodeID](docs/markedepisodes/README.md#putuserepisodesepisodeid) - Mark an episode

### [Scrobbling](docs/scrobbling/README.md)

* [GetScrobbleShowsShowID](docs/scrobbling/README.md#getscrobbleshowsshowid) - List watched and acquired episodes for a show
* [PostScrobbleEpisodes](docs/scrobbling/README.md#postscrobbleepisodes) - Mark episodes as acquired or watched based on their IDs
* [PostScrobbleShows](docs/scrobbling/README.md#postscrobbleshows) - Mark episodes within a show as acquired or watched based on their attributes
* [PutScrobbleEpisodesEpisodeID](docs/scrobbling/README.md#putscrobbleepisodesepisodeid) - Mark an episode as acquired or watched based on its ID

### [TaggedShows](docs/taggedshows/README.md)

* [DeleteUserTagsTagID](docs/taggedshows/README.md#deleteusertagstagid) - Delete a specific tag
* [DeleteUserTagsTagIDShowsShowID](docs/taggedshows/README.md#deleteusertagstagidshowsshowid) - Untag a show
* [GetUserTags](docs/taggedshows/README.md#getusertags) - List all tags
* [GetUserTagsTagIDShows](docs/taggedshows/README.md#getusertagstagidshows) - List all shows under this tag
* [PatchUserTagsTagID](docs/taggedshows/README.md#patchusertagstagid) - Update a specific tag
* [PostUserTags](docs/taggedshows/README.md#postusertags) - Create a new tag
* [PutUserTagsTagIDShowsShowID](docs/taggedshows/README.md#putusertagstagidshowsshowid) - Tag a show

### [VotedEpisodes](docs/votedepisodes/README.md)

* [DeleteUserVotesEpisodesEpisodeID](docs/votedepisodes/README.md#deleteuservotesepisodesepisodeid) - Remove an episode vote
* [GetUserVotesEpisodes](docs/votedepisodes/README.md#getuservotesepisodes) - List the episodes voted for
* [GetUserVotesEpisodesEpisodeID](docs/votedepisodes/README.md#getuservotesepisodesepisodeid) - Check if an episode is voted for
* [PutUserVotesEpisodesEpisodeID](docs/votedepisodes/README.md#putuservotesepisodesepisodeid) - Vote for an episode

### [VotedShows](docs/votedshows/README.md)

* [DeleteUserVotesShowsShowID](docs/votedshows/README.md#deleteuservotesshowsshowid) - Remove a show vote
* [GetUserVotesShows](docs/votedshows/README.md#getuservotesshows) - List the shows voted for
* [GetUserVotesShowsShowID](docs/votedshows/README.md#getuservotesshowsshowid) - Check if a show is voted for
* [PutUserVotesShowsShowID](docs/votedshows/README.md#putuservotesshowsshowid) - Vote for a show
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
