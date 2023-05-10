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
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAbuseReportsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AbuseReport;
use \OpenAPI\OpenAPI\Models\Shared\AbuseType;
use \OpenAPI\OpenAPI\Models\Shared\RelatedEntity;
use \OpenAPI\OpenAPI\Models\Shared\Entity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAbuseReportsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAbuseReportsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAbuseReportsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAbuseReportsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->abuseReport = new AbuseReport();
    $request->abuseReport->abuseTypes = [
        new AbuseType(),
        new AbuseType(),
        new AbuseType(),
    ];
    $request->abuseReport->description = 'distinctio';
    $request->abuseReport->relatedEntities = [
        new RelatedEntity(),
        new RelatedEntity(),
        new RelatedEntity(),
        new RelatedEntity(),
    ];
    $request->abuseReport->subject = new Entity();
    $request->abuseReport->subject->id = '9d8d69a6-74e0-4f46-bcc8-796ed151a05d';
    $request->abuseReport->subject->typeId = 'sapiente';
    $request->abuseReport->subject->url = 'quo';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->part = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new YoutubeAbuseReportsInsertSecurity();
    $requestSecurity->option1 = new YoutubeAbuseReportsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->abuseReports->youtubeAbuseReportsInsert($request, $requestSecurity);

    if ($response->abuseReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [abuseReports](docs/abusereports/README.md)

* [youtubeAbuseReportsInsert](docs/abusereports/README.md#youtubeabusereportsinsert) - Inserts a new resource into this collection.

### [activities](docs/activities/README.md)

* [youtubeActivitiesList](docs/activities/README.md#youtubeactivitieslist) - Retrieves a list of resources, possibly filtered.

### [captions](docs/captions/README.md)

* [youtubeCaptionsDelete](docs/captions/README.md#youtubecaptionsdelete) - Deletes a resource.
* [youtubeCaptionsDownload](docs/captions/README.md#youtubecaptionsdownload) - Downloads a caption track.
* [youtubeCaptionsInsert](docs/captions/README.md#youtubecaptionsinsert) - Inserts a new resource into this collection.
* [youtubeCaptionsList](docs/captions/README.md#youtubecaptionslist) - Retrieves a list of resources, possibly filtered.
* [youtubeCaptionsUpdate](docs/captions/README.md#youtubecaptionsupdate) - Updates an existing resource.

### [channelBanners](docs/channelbanners/README.md)

* [youtubeChannelBannersInsert](docs/channelbanners/README.md#youtubechannelbannersinsert) - Inserts a new resource into this collection.

### [channelSections](docs/channelsections/README.md)

* [youtubeChannelSectionsDelete](docs/channelsections/README.md#youtubechannelsectionsdelete) - Deletes a resource.
* [youtubeChannelSectionsInsert](docs/channelsections/README.md#youtubechannelsectionsinsert) - Inserts a new resource into this collection.
* [youtubeChannelSectionsList](docs/channelsections/README.md#youtubechannelsectionslist) - Retrieves a list of resources, possibly filtered.
* [youtubeChannelSectionsUpdate](docs/channelsections/README.md#youtubechannelsectionsupdate) - Updates an existing resource.

### [channels](docs/channels/README.md)

* [youtubeChannelsList](docs/channels/README.md#youtubechannelslist) - Retrieves a list of resources, possibly filtered.
* [youtubeChannelsUpdate](docs/channels/README.md#youtubechannelsupdate) - Updates an existing resource.

### [commentThreads](docs/commentthreads/README.md)

* [youtubeCommentThreadsInsert](docs/commentthreads/README.md#youtubecommentthreadsinsert) - Inserts a new resource into this collection.
* [youtubeCommentThreadsList](docs/commentthreads/README.md#youtubecommentthreadslist) - Retrieves a list of resources, possibly filtered.

### [comments](docs/comments/README.md)

* [youtubeCommentsDelete](docs/comments/README.md#youtubecommentsdelete) - Deletes a resource.
* [youtubeCommentsInsert](docs/comments/README.md#youtubecommentsinsert) - Inserts a new resource into this collection.
* [youtubeCommentsList](docs/comments/README.md#youtubecommentslist) - Retrieves a list of resources, possibly filtered.
* [youtubeCommentsMarkAsSpam](docs/comments/README.md#youtubecommentsmarkasspam) - Expresses the caller's opinion that one or more comments should be flagged as spam.
* [youtubeCommentsSetModerationStatus](docs/comments/README.md#youtubecommentssetmoderationstatus) - Sets the moderation status of one or more comments.
* [youtubeCommentsUpdate](docs/comments/README.md#youtubecommentsupdate) - Updates an existing resource.

### [i18nLanguages](docs/i18nlanguages/README.md)

* [youtubeI18nLanguagesList](docs/i18nlanguages/README.md#youtubei18nlanguageslist) - Retrieves a list of resources, possibly filtered.

### [i18nRegions](docs/i18nregions/README.md)

* [youtubeI18nRegionsList](docs/i18nregions/README.md#youtubei18nregionslist) - Retrieves a list of resources, possibly filtered.

### [liveBroadcasts](docs/livebroadcasts/README.md)

* [youtubeLiveBroadcastsBind](docs/livebroadcasts/README.md#youtubelivebroadcastsbind) - Bind a broadcast to a stream.
* [youtubeLiveBroadcastsDelete](docs/livebroadcasts/README.md#youtubelivebroadcastsdelete) - Delete a given broadcast.
* [youtubeLiveBroadcastsInsert](docs/livebroadcasts/README.md#youtubelivebroadcastsinsert) - Inserts a new stream for the authenticated user.
* [youtubeLiveBroadcastsInsertCuepoint](docs/livebroadcasts/README.md#youtubelivebroadcastsinsertcuepoint) - Insert cuepoints in a broadcast
* [youtubeLiveBroadcastsList](docs/livebroadcasts/README.md#youtubelivebroadcastslist) - Retrieve the list of broadcasts associated with the given channel.
* [youtubeLiveBroadcastsTransition](docs/livebroadcasts/README.md#youtubelivebroadcaststransition) - Transition a broadcast to a given status.
* [youtubeLiveBroadcastsUpdate](docs/livebroadcasts/README.md#youtubelivebroadcastsupdate) - Updates an existing broadcast for the authenticated user.

### [liveChatBans](docs/livechatbans/README.md)

* [youtubeLiveChatBansDelete](docs/livechatbans/README.md#youtubelivechatbansdelete) - Deletes a chat ban.
* [youtubeLiveChatBansInsert](docs/livechatbans/README.md#youtubelivechatbansinsert) - Inserts a new resource into this collection.

### [liveChatMessages](docs/livechatmessages/README.md)

* [youtubeLiveChatMessagesDelete](docs/livechatmessages/README.md#youtubelivechatmessagesdelete) - Deletes a chat message.
* [youtubeLiveChatMessagesInsert](docs/livechatmessages/README.md#youtubelivechatmessagesinsert) - Inserts a new resource into this collection.
* [youtubeLiveChatMessagesList](docs/livechatmessages/README.md#youtubelivechatmessageslist) - Retrieves a list of resources, possibly filtered.

### [liveChatModerators](docs/livechatmoderators/README.md)

* [youtubeLiveChatModeratorsDelete](docs/livechatmoderators/README.md#youtubelivechatmoderatorsdelete) - Deletes a chat moderator.
* [youtubeLiveChatModeratorsInsert](docs/livechatmoderators/README.md#youtubelivechatmoderatorsinsert) - Inserts a new resource into this collection.
* [youtubeLiveChatModeratorsList](docs/livechatmoderators/README.md#youtubelivechatmoderatorslist) - Retrieves a list of resources, possibly filtered.

### [liveStreams](docs/livestreams/README.md)

* [youtubeLiveStreamsDelete](docs/livestreams/README.md#youtubelivestreamsdelete) - Deletes an existing stream for the authenticated user.
* [youtubeLiveStreamsInsert](docs/livestreams/README.md#youtubelivestreamsinsert) - Inserts a new stream for the authenticated user.
* [youtubeLiveStreamsList](docs/livestreams/README.md#youtubelivestreamslist) - Retrieve the list of streams associated with the given channel. --
* [youtubeLiveStreamsUpdate](docs/livestreams/README.md#youtubelivestreamsupdate) - Updates an existing stream for the authenticated user.

### [members](docs/members/README.md)

* [youtubeMembersList](docs/members/README.md#youtubememberslist) - Retrieves a list of members that match the request criteria for a channel.

### [membershipsLevels](docs/membershipslevels/README.md)

* [youtubeMembershipsLevelsList](docs/membershipslevels/README.md#youtubemembershipslevelslist) - Retrieves a list of all pricing levels offered by a creator to the fans.

### [playlistItems](docs/playlistitems/README.md)

* [youtubePlaylistItemsDelete](docs/playlistitems/README.md#youtubeplaylistitemsdelete) - Deletes a resource.
* [youtubePlaylistItemsInsert](docs/playlistitems/README.md#youtubeplaylistitemsinsert) - Inserts a new resource into this collection.
* [youtubePlaylistItemsList](docs/playlistitems/README.md#youtubeplaylistitemslist) - Retrieves a list of resources, possibly filtered.
* [youtubePlaylistItemsUpdate](docs/playlistitems/README.md#youtubeplaylistitemsupdate) - Updates an existing resource.

### [playlists](docs/playlists/README.md)

* [youtubePlaylistsDelete](docs/playlists/README.md#youtubeplaylistsdelete) - Deletes a resource.
* [youtubePlaylistsInsert](docs/playlists/README.md#youtubeplaylistsinsert) - Inserts a new resource into this collection.
* [youtubePlaylistsList](docs/playlists/README.md#youtubeplaylistslist) - Retrieves a list of resources, possibly filtered.
* [youtubePlaylistsUpdate](docs/playlists/README.md#youtubeplaylistsupdate) - Updates an existing resource.

### [search](docs/search/README.md)

* [youtubeSearchList](docs/search/README.md#youtubesearchlist) - Retrieves a list of search resources

### [subscriptions](docs/subscriptions/README.md)

* [youtubeSubscriptionsDelete](docs/subscriptions/README.md#youtubesubscriptionsdelete) - Deletes a resource.
* [youtubeSubscriptionsInsert](docs/subscriptions/README.md#youtubesubscriptionsinsert) - Inserts a new resource into this collection.
* [youtubeSubscriptionsList](docs/subscriptions/README.md#youtubesubscriptionslist) - Retrieves a list of resources, possibly filtered.

### [superChatEvents](docs/superchatevents/README.md)

* [youtubeSuperChatEventsList](docs/superchatevents/README.md#youtubesuperchateventslist) - Retrieves a list of resources, possibly filtered.

### [tests](docs/tests/README.md)

* [youtubeTestsInsert](docs/tests/README.md#youtubetestsinsert) - POST method.

### [thirdPartyLinks](docs/thirdpartylinks/README.md)

* [youtubeThirdPartyLinksDelete](docs/thirdpartylinks/README.md#youtubethirdpartylinksdelete) - Deletes a resource.
* [youtubeThirdPartyLinksInsert](docs/thirdpartylinks/README.md#youtubethirdpartylinksinsert) - Inserts a new resource into this collection.
* [youtubeThirdPartyLinksList](docs/thirdpartylinks/README.md#youtubethirdpartylinkslist) - Retrieves a list of resources, possibly filtered.
* [youtubeThirdPartyLinksUpdate](docs/thirdpartylinks/README.md#youtubethirdpartylinksupdate) - Updates an existing resource.

### [thumbnails](docs/thumbnails/README.md)

* [youtubeThumbnailsSet](docs/thumbnails/README.md#youtubethumbnailsset) - As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

### [videoAbuseReportReasons](docs/videoabusereportreasons/README.md)

* [youtubeVideoAbuseReportReasonsList](docs/videoabusereportreasons/README.md#youtubevideoabusereportreasonslist) - Retrieves a list of resources, possibly filtered.

### [videoCategories](docs/videocategories/README.md)

* [youtubeVideoCategoriesList](docs/videocategories/README.md#youtubevideocategorieslist) - Retrieves a list of resources, possibly filtered.

### [videos](docs/videos/README.md)

* [youtubeVideosDelete](docs/videos/README.md#youtubevideosdelete) - Deletes a resource.
* [youtubeVideosGetRating](docs/videos/README.md#youtubevideosgetrating) - Retrieves the ratings that the authorized user gave to a list of specified videos.
* [youtubeVideosInsert](docs/videos/README.md#youtubevideosinsert) - Inserts a new resource into this collection.
* [youtubeVideosList](docs/videos/README.md#youtubevideoslist) - Retrieves a list of resources, possibly filtered.
* [youtubeVideosRate](docs/videos/README.md#youtubevideosrate) - Adds a like or dislike rating to a video or removes a rating from a video.
* [youtubeVideosReportAbuse](docs/videos/README.md#youtubevideosreportabuse) - Report abuse for a video.
* [youtubeVideosUpdate](docs/videos/README.md#youtubevideosupdate) - Updates an existing resource.

### [watermarks](docs/watermarks/README.md)

* [youtubeWatermarksSet](docs/watermarks/README.md#youtubewatermarksset) - Allows upload of watermark image and setting it for a channel.
* [youtubeWatermarksUnset](docs/watermarks/README.md#youtubewatermarksunset) - Allows removal of channel watermark.

### [youtube](docs/youtube/README.md)

* [youtubeYoutubeV3UpdateCommentThreads](docs/youtube/README.md#youtubeyoutubev3updatecommentthreads) - Updates an existing resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
