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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
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


### Auth

* `GetAuthValidate` - Validate your authentication credentials
* `PostAuthPoll` - Poll whether an authentication request was confirmed
* `PostAuthStart` - Start an authentication request

### FollowedNetworks

* `DeleteUserFollowsNetworksNetworkID` - Unfollow a network
* `GetUserFollowsNetworks` - List the followed networks
* `GetUserFollowsNetworksNetworkID` - Check if a network is followed
* `PutUserFollowsNetworksNetworkID` - Follow a network

### FollowedPeople

* `DeleteUserFollowsPeoplePersonID` - Unfollow a person
* `GetUserFollowsPeople` - List the followed people
* `GetUserFollowsPeoplePersonID` - Check if a person is followed
* `PutUserFollowsPeoplePersonID` - Follow a person

### FollowedShows

* `DeleteUserFollowsShowsShowID` - Unfollow a show
* `GetUserFollowsShows` - List the followed shows
* `GetUserFollowsShowsShowID` - Check if a show is followed
* `PutUserFollowsShowsShowID` - Follow a show

### FollowedWebchannels

* `DeleteUserFollowsWebchannelsWebchannelID` - Unfollow a webchannel
* `GetUserFollowsWebchannels` - List the followed webchannels
* `GetUserFollowsWebchannelsWebchannelID` - Check if a webchannel is followed
* `PutUserFollowsWebchannelsWebchannelID` - Follow a webchannel

### MarkedEpisodes

* `DeleteUserEpisodesEpisodeID` - Unmark an episode
* `GetUserEpisodes` - List the marked episodes
* `GetUserEpisodesEpisodeID` - Check if an episode is marked
* `PutUserEpisodesEpisodeID` - Mark an episode

### Scrobbling

* `GetScrobbleShowsShowID` - List watched and acquired episodes for a show
* `PostScrobbleEpisodes` - Mark episodes as acquired or watched based on their IDs
* `PostScrobbleShows` - Mark episodes within a show as acquired or watched based on their attributes
* `PutScrobbleEpisodesEpisodeID` - Mark an episode as acquired or watched based on its ID

### TaggedShows

* `DeleteUserTagsTagID` - Delete a specific tag
* `DeleteUserTagsTagIDShowsShowID` - Untag a show
* `GetUserTags` - List all tags
* `GetUserTagsTagIDShows` - List all shows under this tag
* `PatchUserTagsTagID` - Update a specific tag
* `PostUserTags` - Create a new tag
* `PutUserTagsTagIDShowsShowID` - Tag a show

### VotedEpisodes

* `DeleteUserVotesEpisodesEpisodeID` - Remove an episode vote
* `GetUserVotesEpisodes` - List the episodes voted for
* `GetUserVotesEpisodesEpisodeID` - Check if an episode is voted for
* `PutUserVotesEpisodesEpisodeID` - Vote for an episode

### VotedShows

* `DeleteUserVotesShowsShowID` - Remove a show vote
* `GetUserVotesShows` - List the shows voted for
* `GetUserVotesShowsShowID` - Check if a show is voted for
* `PutUserVotesShowsShowID` - Vote for a show
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
