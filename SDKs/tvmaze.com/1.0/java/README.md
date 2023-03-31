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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAuthValidateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    usertoken = new SchemeUsertoken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetAuthValidateResponse res = sdk.auth.getAuthValidate();

            if (res.getAuthValidate200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### auth

* `getAuthValidate` - Validate your authentication credentials
* `postAuthPoll` - Poll whether an authentication request was confirmed
* `postAuthStart` - Start an authentication request

### followedNetworks

* `deleteUserFollowsNetworksNetworkId` - Unfollow a network
* `getUserFollowsNetworks` - List the followed networks
* `getUserFollowsNetworksNetworkId` - Check if a network is followed
* `putUserFollowsNetworksNetworkId` - Follow a network

### followedPeople

* `deleteUserFollowsPeoplePersonId` - Unfollow a person
* `getUserFollowsPeople` - List the followed people
* `getUserFollowsPeoplePersonId` - Check if a person is followed
* `putUserFollowsPeoplePersonId` - Follow a person

### followedShows

* `deleteUserFollowsShowsShowId` - Unfollow a show
* `getUserFollowsShows` - List the followed shows
* `getUserFollowsShowsShowId` - Check if a show is followed
* `putUserFollowsShowsShowId` - Follow a show

### followedWebchannels

* `deleteUserFollowsWebchannelsWebchannelId` - Unfollow a webchannel
* `getUserFollowsWebchannels` - List the followed webchannels
* `getUserFollowsWebchannelsWebchannelId` - Check if a webchannel is followed
* `putUserFollowsWebchannelsWebchannelId` - Follow a webchannel

### markedEpisodes

* `deleteUserEpisodesEpisodeId` - Unmark an episode
* `getUserEpisodes` - List the marked episodes
* `getUserEpisodesEpisodeId` - Check if an episode is marked
* `putUserEpisodesEpisodeId` - Mark an episode

### scrobbling

* `getScrobbleShowsShowId` - List watched and acquired episodes for a show
* `postScrobbleEpisodes` - Mark episodes as acquired or watched based on their IDs
* `postScrobbleShows` - Mark episodes within a show as acquired or watched based on their attributes
* `putScrobbleEpisodesEpisodeId` - Mark an episode as acquired or watched based on its ID

### taggedShows

* `deleteUserTagsTagId` - Delete a specific tag
* `deleteUserTagsTagIdShowsShowId` - Untag a show
* `getUserTags` - List all tags
* `getUserTagsTagIdShows` - List all shows under this tag
* `patchUserTagsTagId` - Update a specific tag
* `postUserTags` - Create a new tag
* `putUserTagsTagIdShowsShowId` - Tag a show

### votedEpisodes

* `deleteUserVotesEpisodesEpisodeId` - Remove an episode vote
* `getUserVotesEpisodes` - List the episodes voted for
* `getUserVotesEpisodesEpisodeId` - Check if an episode is voted for
* `putUserVotesEpisodesEpisodeId` - Vote for an episode

### votedShows

* `deleteUserVotesShowsShowId` - Remove a show vote
* `getUserVotesShows` - List the shows voted for
* `getUserVotesShowsShowId` - Check if a show is voted for
* `putUserVotesShowsShowId` - Vote for a show
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
