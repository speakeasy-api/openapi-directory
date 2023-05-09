# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/youtube/v3/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AbuseReports.YoutubeAbuseReportsInsert(ctx, operations.YoutubeAbuseReportsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AbuseReport: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: sdk.String("bd9d8d69-a674-4e0f-867c-c8796ed151a0"),
                },
                shared.AbuseType{
                    ID: sdk.String("5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb"),
                },
                shared.AbuseType{
                    ID: sdk.String("73920592-9396-4fea-b596-eb10faaa2352"),
                },
            },
            Description: sdk.String("nobis"),
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: sdk.String("955907af-f1a3-4a2f-a946-7739251aa52c"),
                        TypeID: sdk.String("sequi"),
                        URL: sdk.String("tenetur"),
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: sdk.String("5ad019da-1ffe-478f-897b-0074f15471b5"),
                        TypeID: sdk.String("accusamus"),
                        URL: sdk.String("commodi"),
                    },
                },
            },
            Subject: &shared.Entity{
                ID: sdk.String("e13b99d4-88e1-4e91-a450-ad2abd442698"),
                TypeID: sdk.String("perferendis"),
                URL: sdk.String("magni"),
            },
        },
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("excepturi"),
        Part: []string{
            "facilis",
            "tempore",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("eum"),
    }, operations.YoutubeAbuseReportsInsertSecurity{
        Option1: &operations.YoutubeAbuseReportsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AbuseReport != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AbuseReports](docs/abusereports/README.md)

* [YoutubeAbuseReportsInsert](docs/abusereports/README.md#youtubeabusereportsinsert) - Inserts a new resource into this collection.

### [Activities](docs/activities/README.md)

* [YoutubeActivitiesList](docs/activities/README.md#youtubeactivitieslist) - Retrieves a list of resources, possibly filtered.

### [Captions](docs/captions/README.md)

* [YoutubeCaptionsDelete](docs/captions/README.md#youtubecaptionsdelete) - Deletes a resource.
* [YoutubeCaptionsDownload](docs/captions/README.md#youtubecaptionsdownload) - Downloads a caption track.
* [YoutubeCaptionsInsert](docs/captions/README.md#youtubecaptionsinsert) - Inserts a new resource into this collection.
* [YoutubeCaptionsList](docs/captions/README.md#youtubecaptionslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeCaptionsUpdate](docs/captions/README.md#youtubecaptionsupdate) - Updates an existing resource.

### [ChannelBanners](docs/channelbanners/README.md)

* [YoutubeChannelBannersInsert](docs/channelbanners/README.md#youtubechannelbannersinsert) - Inserts a new resource into this collection.

### [ChannelSections](docs/channelsections/README.md)

* [YoutubeChannelSectionsDelete](docs/channelsections/README.md#youtubechannelsectionsdelete) - Deletes a resource.
* [YoutubeChannelSectionsInsert](docs/channelsections/README.md#youtubechannelsectionsinsert) - Inserts a new resource into this collection.
* [YoutubeChannelSectionsList](docs/channelsections/README.md#youtubechannelsectionslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeChannelSectionsUpdate](docs/channelsections/README.md#youtubechannelsectionsupdate) - Updates an existing resource.

### [Channels](docs/channels/README.md)

* [YoutubeChannelsList](docs/channels/README.md#youtubechannelslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeChannelsUpdate](docs/channels/README.md#youtubechannelsupdate) - Updates an existing resource.

### [CommentThreads](docs/commentthreads/README.md)

* [YoutubeCommentThreadsInsert](docs/commentthreads/README.md#youtubecommentthreadsinsert) - Inserts a new resource into this collection.
* [YoutubeCommentThreadsList](docs/commentthreads/README.md#youtubecommentthreadslist) - Retrieves a list of resources, possibly filtered.

### [Comments](docs/comments/README.md)

* [YoutubeCommentsDelete](docs/comments/README.md#youtubecommentsdelete) - Deletes a resource.
* [YoutubeCommentsInsert](docs/comments/README.md#youtubecommentsinsert) - Inserts a new resource into this collection.
* [YoutubeCommentsList](docs/comments/README.md#youtubecommentslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeCommentsMarkAsSpam](docs/comments/README.md#youtubecommentsmarkasspam) - Expresses the caller's opinion that one or more comments should be flagged as spam.
* [YoutubeCommentsSetModerationStatus](docs/comments/README.md#youtubecommentssetmoderationstatus) - Sets the moderation status of one or more comments.
* [YoutubeCommentsUpdate](docs/comments/README.md#youtubecommentsupdate) - Updates an existing resource.

### [I18nLanguages](docs/i18nlanguages/README.md)

* [YoutubeI18nLanguagesList](docs/i18nlanguages/README.md#youtubei18nlanguageslist) - Retrieves a list of resources, possibly filtered.

### [I18nRegions](docs/i18nregions/README.md)

* [YoutubeI18nRegionsList](docs/i18nregions/README.md#youtubei18nregionslist) - Retrieves a list of resources, possibly filtered.

### [LiveBroadcasts](docs/livebroadcasts/README.md)

* [YoutubeLiveBroadcastsBind](docs/livebroadcasts/README.md#youtubelivebroadcastsbind) - Bind a broadcast to a stream.
* [YoutubeLiveBroadcastsDelete](docs/livebroadcasts/README.md#youtubelivebroadcastsdelete) - Delete a given broadcast.
* [YoutubeLiveBroadcastsInsert](docs/livebroadcasts/README.md#youtubelivebroadcastsinsert) - Inserts a new stream for the authenticated user.
* [YoutubeLiveBroadcastsInsertCuepoint](docs/livebroadcasts/README.md#youtubelivebroadcastsinsertcuepoint) - Insert cuepoints in a broadcast
* [YoutubeLiveBroadcastsList](docs/livebroadcasts/README.md#youtubelivebroadcastslist) - Retrieve the list of broadcasts associated with the given channel.
* [YoutubeLiveBroadcastsTransition](docs/livebroadcasts/README.md#youtubelivebroadcaststransition) - Transition a broadcast to a given status.
* [YoutubeLiveBroadcastsUpdate](docs/livebroadcasts/README.md#youtubelivebroadcastsupdate) - Updates an existing broadcast for the authenticated user.

### [LiveChatBans](docs/livechatbans/README.md)

* [YoutubeLiveChatBansDelete](docs/livechatbans/README.md#youtubelivechatbansdelete) - Deletes a chat ban.
* [YoutubeLiveChatBansInsert](docs/livechatbans/README.md#youtubelivechatbansinsert) - Inserts a new resource into this collection.

### [LiveChatMessages](docs/livechatmessages/README.md)

* [YoutubeLiveChatMessagesDelete](docs/livechatmessages/README.md#youtubelivechatmessagesdelete) - Deletes a chat message.
* [YoutubeLiveChatMessagesInsert](docs/livechatmessages/README.md#youtubelivechatmessagesinsert) - Inserts a new resource into this collection.
* [YoutubeLiveChatMessagesList](docs/livechatmessages/README.md#youtubelivechatmessageslist) - Retrieves a list of resources, possibly filtered.

### [LiveChatModerators](docs/livechatmoderators/README.md)

* [YoutubeLiveChatModeratorsDelete](docs/livechatmoderators/README.md#youtubelivechatmoderatorsdelete) - Deletes a chat moderator.
* [YoutubeLiveChatModeratorsInsert](docs/livechatmoderators/README.md#youtubelivechatmoderatorsinsert) - Inserts a new resource into this collection.
* [YoutubeLiveChatModeratorsList](docs/livechatmoderators/README.md#youtubelivechatmoderatorslist) - Retrieves a list of resources, possibly filtered.

### [LiveStreams](docs/livestreams/README.md)

* [YoutubeLiveStreamsDelete](docs/livestreams/README.md#youtubelivestreamsdelete) - Deletes an existing stream for the authenticated user.
* [YoutubeLiveStreamsInsert](docs/livestreams/README.md#youtubelivestreamsinsert) - Inserts a new stream for the authenticated user.
* [YoutubeLiveStreamsList](docs/livestreams/README.md#youtubelivestreamslist) - Retrieve the list of streams associated with the given channel. --
* [YoutubeLiveStreamsUpdate](docs/livestreams/README.md#youtubelivestreamsupdate) - Updates an existing stream for the authenticated user.

### [Members](docs/members/README.md)

* [YoutubeMembersList](docs/members/README.md#youtubememberslist) - Retrieves a list of members that match the request criteria for a channel.

### [MembershipsLevels](docs/membershipslevels/README.md)

* [YoutubeMembershipsLevelsList](docs/membershipslevels/README.md#youtubemembershipslevelslist) - Retrieves a list of all pricing levels offered by a creator to the fans.

### [PlaylistItems](docs/playlistitems/README.md)

* [YoutubePlaylistItemsDelete](docs/playlistitems/README.md#youtubeplaylistitemsdelete) - Deletes a resource.
* [YoutubePlaylistItemsInsert](docs/playlistitems/README.md#youtubeplaylistitemsinsert) - Inserts a new resource into this collection.
* [YoutubePlaylistItemsList](docs/playlistitems/README.md#youtubeplaylistitemslist) - Retrieves a list of resources, possibly filtered.
* [YoutubePlaylistItemsUpdate](docs/playlistitems/README.md#youtubeplaylistitemsupdate) - Updates an existing resource.

### [Playlists](docs/playlists/README.md)

* [YoutubePlaylistsDelete](docs/playlists/README.md#youtubeplaylistsdelete) - Deletes a resource.
* [YoutubePlaylistsInsert](docs/playlists/README.md#youtubeplaylistsinsert) - Inserts a new resource into this collection.
* [YoutubePlaylistsList](docs/playlists/README.md#youtubeplaylistslist) - Retrieves a list of resources, possibly filtered.
* [YoutubePlaylistsUpdate](docs/playlists/README.md#youtubeplaylistsupdate) - Updates an existing resource.

### [Search](docs/search/README.md)

* [YoutubeSearchList](docs/search/README.md#youtubesearchlist) - Retrieves a list of search resources

### [Subscriptions](docs/subscriptions/README.md)

* [YoutubeSubscriptionsDelete](docs/subscriptions/README.md#youtubesubscriptionsdelete) - Deletes a resource.
* [YoutubeSubscriptionsInsert](docs/subscriptions/README.md#youtubesubscriptionsinsert) - Inserts a new resource into this collection.
* [YoutubeSubscriptionsList](docs/subscriptions/README.md#youtubesubscriptionslist) - Retrieves a list of resources, possibly filtered.

### [SuperChatEvents](docs/superchatevents/README.md)

* [YoutubeSuperChatEventsList](docs/superchatevents/README.md#youtubesuperchateventslist) - Retrieves a list of resources, possibly filtered.

### [Tests](docs/tests/README.md)

* [YoutubeTestsInsert](docs/tests/README.md#youtubetestsinsert) - POST method.

### [ThirdPartyLinks](docs/thirdpartylinks/README.md)

* [YoutubeThirdPartyLinksDelete](docs/thirdpartylinks/README.md#youtubethirdpartylinksdelete) - Deletes a resource.
* [YoutubeThirdPartyLinksInsert](docs/thirdpartylinks/README.md#youtubethirdpartylinksinsert) - Inserts a new resource into this collection.
* [YoutubeThirdPartyLinksList](docs/thirdpartylinks/README.md#youtubethirdpartylinkslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeThirdPartyLinksUpdate](docs/thirdpartylinks/README.md#youtubethirdpartylinksupdate) - Updates an existing resource.

### [Thumbnails](docs/thumbnails/README.md)

* [YoutubeThumbnailsSet](docs/thumbnails/README.md#youtubethumbnailsset) - As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

### [VideoAbuseReportReasons](docs/videoabusereportreasons/README.md)

* [YoutubeVideoAbuseReportReasonsList](docs/videoabusereportreasons/README.md#youtubevideoabusereportreasonslist) - Retrieves a list of resources, possibly filtered.

### [VideoCategories](docs/videocategories/README.md)

* [YoutubeVideoCategoriesList](docs/videocategories/README.md#youtubevideocategorieslist) - Retrieves a list of resources, possibly filtered.

### [Videos](docs/videos/README.md)

* [YoutubeVideosDelete](docs/videos/README.md#youtubevideosdelete) - Deletes a resource.
* [YoutubeVideosGetRating](docs/videos/README.md#youtubevideosgetrating) - Retrieves the ratings that the authorized user gave to a list of specified videos.
* [YoutubeVideosInsert](docs/videos/README.md#youtubevideosinsert) - Inserts a new resource into this collection.
* [YoutubeVideosList](docs/videos/README.md#youtubevideoslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeVideosRate](docs/videos/README.md#youtubevideosrate) - Adds a like or dislike rating to a video or removes a rating from a video.
* [YoutubeVideosReportAbuse](docs/videos/README.md#youtubevideosreportabuse) - Report abuse for a video.
* [YoutubeVideosUpdate](docs/videos/README.md#youtubevideosupdate) - Updates an existing resource.

### [Watermarks](docs/watermarks/README.md)

* [YoutubeWatermarksSet](docs/watermarks/README.md#youtubewatermarksset) - Allows upload of watermark image and setting it for a channel.
* [YoutubeWatermarksUnset](docs/watermarks/README.md#youtubewatermarksunset) - Allows removal of channel watermark.

### [Youtube](docs/youtube/README.md)

* [YoutubeYoutubeV3UpdateCommentThreads](docs/youtube/README.md#youtubeyoutubev3updatecommentthreads) - Updates an existing resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
