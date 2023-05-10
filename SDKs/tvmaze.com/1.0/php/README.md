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
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->auth->getAuthValidate();

    if ($response->getAuthValidate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [auth](docs/auth/README.md)

* [getAuthValidate](docs/auth/README.md#getauthvalidate) - Validate your authentication credentials
* [postAuthPoll](docs/auth/README.md#postauthpoll) - Poll whether an authentication request was confirmed
* [postAuthStart](docs/auth/README.md#postauthstart) - Start an authentication request

### [followedNetworks](docs/followednetworks/README.md)

* [deleteUserFollowsNetworksNetworkId](docs/followednetworks/README.md#deleteuserfollowsnetworksnetworkid) - Unfollow a network
* [getUserFollowsNetworks](docs/followednetworks/README.md#getuserfollowsnetworks) - List the followed networks
* [getUserFollowsNetworksNetworkId](docs/followednetworks/README.md#getuserfollowsnetworksnetworkid) - Check if a network is followed
* [putUserFollowsNetworksNetworkId](docs/followednetworks/README.md#putuserfollowsnetworksnetworkid) - Follow a network

### [followedPeople](docs/followedpeople/README.md)

* [deleteUserFollowsPeoplePersonId](docs/followedpeople/README.md#deleteuserfollowspeoplepersonid) - Unfollow a person
* [getUserFollowsPeople](docs/followedpeople/README.md#getuserfollowspeople) - List the followed people
* [getUserFollowsPeoplePersonId](docs/followedpeople/README.md#getuserfollowspeoplepersonid) - Check if a person is followed
* [putUserFollowsPeoplePersonId](docs/followedpeople/README.md#putuserfollowspeoplepersonid) - Follow a person

### [followedShows](docs/followedshows/README.md)

* [deleteUserFollowsShowsShowId](docs/followedshows/README.md#deleteuserfollowsshowsshowid) - Unfollow a show
* [getUserFollowsShows](docs/followedshows/README.md#getuserfollowsshows) - List the followed shows
* [getUserFollowsShowsShowId](docs/followedshows/README.md#getuserfollowsshowsshowid) - Check if a show is followed
* [putUserFollowsShowsShowId](docs/followedshows/README.md#putuserfollowsshowsshowid) - Follow a show

### [followedWebchannels](docs/followedwebchannels/README.md)

* [deleteUserFollowsWebchannelsWebchannelId](docs/followedwebchannels/README.md#deleteuserfollowswebchannelswebchannelid) - Unfollow a webchannel
* [getUserFollowsWebchannels](docs/followedwebchannels/README.md#getuserfollowswebchannels) - List the followed webchannels
* [getUserFollowsWebchannelsWebchannelId](docs/followedwebchannels/README.md#getuserfollowswebchannelswebchannelid) - Check if a webchannel is followed
* [putUserFollowsWebchannelsWebchannelId](docs/followedwebchannels/README.md#putuserfollowswebchannelswebchannelid) - Follow a webchannel

### [markedEpisodes](docs/markedepisodes/README.md)

* [deleteUserEpisodesEpisodeId](docs/markedepisodes/README.md#deleteuserepisodesepisodeid) - Unmark an episode
* [getUserEpisodes](docs/markedepisodes/README.md#getuserepisodes) - List the marked episodes
* [getUserEpisodesEpisodeId](docs/markedepisodes/README.md#getuserepisodesepisodeid) - Check if an episode is marked
* [putUserEpisodesEpisodeId](docs/markedepisodes/README.md#putuserepisodesepisodeid) - Mark an episode

### [scrobbling](docs/scrobbling/README.md)

* [getScrobbleShowsShowId](docs/scrobbling/README.md#getscrobbleshowsshowid) - List watched and acquired episodes for a show
* [postScrobbleEpisodes](docs/scrobbling/README.md#postscrobbleepisodes) - Mark episodes as acquired or watched based on their IDs
* [postScrobbleShows](docs/scrobbling/README.md#postscrobbleshows) - Mark episodes within a show as acquired or watched based on their attributes
* [putScrobbleEpisodesEpisodeId](docs/scrobbling/README.md#putscrobbleepisodesepisodeid) - Mark an episode as acquired or watched based on its ID

### [taggedShows](docs/taggedshows/README.md)

* [deleteUserTagsTagId](docs/taggedshows/README.md#deleteusertagstagid) - Delete a specific tag
* [deleteUserTagsTagIdShowsShowId](docs/taggedshows/README.md#deleteusertagstagidshowsshowid) - Untag a show
* [getUserTags](docs/taggedshows/README.md#getusertags) - List all tags
* [getUserTagsTagIdShows](docs/taggedshows/README.md#getusertagstagidshows) - List all shows under this tag
* [patchUserTagsTagId](docs/taggedshows/README.md#patchusertagstagid) - Update a specific tag
* [postUserTags](docs/taggedshows/README.md#postusertags) - Create a new tag
* [putUserTagsTagIdShowsShowId](docs/taggedshows/README.md#putusertagstagidshowsshowid) - Tag a show

### [votedEpisodes](docs/votedepisodes/README.md)

* [deleteUserVotesEpisodesEpisodeId](docs/votedepisodes/README.md#deleteuservotesepisodesepisodeid) - Remove an episode vote
* [getUserVotesEpisodes](docs/votedepisodes/README.md#getuservotesepisodes) - List the episodes voted for
* [getUserVotesEpisodesEpisodeId](docs/votedepisodes/README.md#getuservotesepisodesepisodeid) - Check if an episode is voted for
* [putUserVotesEpisodesEpisodeId](docs/votedepisodes/README.md#putuservotesepisodesepisodeid) - Vote for an episode

### [votedShows](docs/votedshows/README.md)

* [deleteUserVotesShowsShowId](docs/votedshows/README.md#deleteuservotesshowsshowid) - Remove a show vote
* [getUserVotesShows](docs/votedshows/README.md#getuservotesshows) - List the shows voted for
* [getUserVotesShowsShowId](docs/votedshows/README.md#getuservotesshowsshowid) - Check if a show is voted for
* [putUserVotesShowsShowId](docs/votedshows/README.md#putuservotesshowsshowid) - Vote for a show
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
