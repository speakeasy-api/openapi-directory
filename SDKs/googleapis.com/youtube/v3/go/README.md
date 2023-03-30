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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.YoutubeAbuseReportsInsertRequest{
        Security: operations.YoutubeAbuseReportsInsertSecurity{
            Option1: &operations.YoutubeAbuseReportsInsertSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.YoutubeAbuseReportsInsertQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            Part: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            PrettyPrint: false,
            QuotaUser: "iure",
            UploadType: "magnam",
            UploadProtocol: "debitis",
        },
        Request: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: "delectus",
                },
            },
            Description: "tempora",
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "molestiae",
                        TypeID: "minus",
                        URL: "placeat",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "voluptatum",
                        TypeID: "iusto",
                        URL: "excepturi",
                    },
                },
            },
            Subject: &shared.Entity{
                ID: "nisi",
                TypeID: "recusandae",
                URL: "temporibus",
            },
        },
    }

    ctx := context.Background()
    res, err := s.AbuseReports.YoutubeAbuseReportsInsert(ctx, req)
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
## SDK Available Operations


### AbuseReports

* `YoutubeAbuseReportsInsert` - Inserts a new resource into this collection.

### Activities

* `YoutubeActivitiesList` - Retrieves a list of resources, possibly filtered.

### Captions

* `YoutubeCaptionsDelete` - Deletes a resource.
* `YoutubeCaptionsDownload` - Downloads a caption track.
* `YoutubeCaptionsInsert` - Inserts a new resource into this collection.
* `YoutubeCaptionsList` - Retrieves a list of resources, possibly filtered.
* `YoutubeCaptionsUpdate` - Updates an existing resource.

### ChannelBanners

* `YoutubeChannelBannersInsert` - Inserts a new resource into this collection.

### ChannelSections

* `YoutubeChannelSectionsDelete` - Deletes a resource.
* `YoutubeChannelSectionsInsert` - Inserts a new resource into this collection.
* `YoutubeChannelSectionsList` - Retrieves a list of resources, possibly filtered.
* `YoutubeChannelSectionsUpdate` - Updates an existing resource.

### Channels

* `YoutubeChannelsList` - Retrieves a list of resources, possibly filtered.
* `YoutubeChannelsUpdate` - Updates an existing resource.

### CommentThreads

* `YoutubeCommentThreadsInsert` - Inserts a new resource into this collection.
* `YoutubeCommentThreadsList` - Retrieves a list of resources, possibly filtered.

### Comments

* `YoutubeCommentsDelete` - Deletes a resource.
* `YoutubeCommentsInsert` - Inserts a new resource into this collection.
* `YoutubeCommentsList` - Retrieves a list of resources, possibly filtered.
* `YoutubeCommentsMarkAsSpam` - Expresses the caller's opinion that one or more comments should be flagged as spam.
* `YoutubeCommentsSetModerationStatus` - Sets the moderation status of one or more comments.
* `YoutubeCommentsUpdate` - Updates an existing resource.

### I18nLanguages

* `YoutubeI18nLanguagesList` - Retrieves a list of resources, possibly filtered.

### I18nRegions

* `YoutubeI18nRegionsList` - Retrieves a list of resources, possibly filtered.

### LiveBroadcasts

* `YoutubeLiveBroadcastsBind` - Bind a broadcast to a stream.
* `YoutubeLiveBroadcastsDelete` - Delete a given broadcast.
* `YoutubeLiveBroadcastsInsert` - Inserts a new stream for the authenticated user.
* `YoutubeLiveBroadcastsInsertCuepoint` - Insert cuepoints in a broadcast
* `YoutubeLiveBroadcastsList` - Retrieve the list of broadcasts associated with the given channel.
* `YoutubeLiveBroadcastsTransition` - Transition a broadcast to a given status.
* `YoutubeLiveBroadcastsUpdate` - Updates an existing broadcast for the authenticated user.

### LiveChatBans

* `YoutubeLiveChatBansDelete` - Deletes a chat ban.
* `YoutubeLiveChatBansInsert` - Inserts a new resource into this collection.

### LiveChatMessages

* `YoutubeLiveChatMessagesDelete` - Deletes a chat message.
* `YoutubeLiveChatMessagesInsert` - Inserts a new resource into this collection.
* `YoutubeLiveChatMessagesList` - Retrieves a list of resources, possibly filtered.

### LiveChatModerators

* `YoutubeLiveChatModeratorsDelete` - Deletes a chat moderator.
* `YoutubeLiveChatModeratorsInsert` - Inserts a new resource into this collection.
* `YoutubeLiveChatModeratorsList` - Retrieves a list of resources, possibly filtered.

### LiveStreams

* `YoutubeLiveStreamsDelete` - Deletes an existing stream for the authenticated user.
* `YoutubeLiveStreamsInsert` - Inserts a new stream for the authenticated user.
* `YoutubeLiveStreamsList` - Retrieve the list of streams associated with the given channel. --
* `YoutubeLiveStreamsUpdate` - Updates an existing stream for the authenticated user.

### Members

* `YoutubeMembersList` - Retrieves a list of members that match the request criteria for a channel.

### MembershipsLevels

* `YoutubeMembershipsLevelsList` - Retrieves a list of all pricing levels offered by a creator to the fans.

### PlaylistItems

* `YoutubePlaylistItemsDelete` - Deletes a resource.
* `YoutubePlaylistItemsInsert` - Inserts a new resource into this collection.
* `YoutubePlaylistItemsList` - Retrieves a list of resources, possibly filtered.
* `YoutubePlaylistItemsUpdate` - Updates an existing resource.

### Playlists

* `YoutubePlaylistsDelete` - Deletes a resource.
* `YoutubePlaylistsInsert` - Inserts a new resource into this collection.
* `YoutubePlaylistsList` - Retrieves a list of resources, possibly filtered.
* `YoutubePlaylistsUpdate` - Updates an existing resource.

### Search

* `YoutubeSearchList` - Retrieves a list of search resources

### Subscriptions

* `YoutubeSubscriptionsDelete` - Deletes a resource.
* `YoutubeSubscriptionsInsert` - Inserts a new resource into this collection.
* `YoutubeSubscriptionsList` - Retrieves a list of resources, possibly filtered.

### SuperChatEvents

* `YoutubeSuperChatEventsList` - Retrieves a list of resources, possibly filtered.

### Tests

* `YoutubeTestsInsert` - POST method.

### ThirdPartyLinks

* `YoutubeThirdPartyLinksDelete` - Deletes a resource.
* `YoutubeThirdPartyLinksInsert` - Inserts a new resource into this collection.
* `YoutubeThirdPartyLinksList` - Retrieves a list of resources, possibly filtered.
* `YoutubeThirdPartyLinksUpdate` - Updates an existing resource.

### Thumbnails

* `YoutubeThumbnailsSet` - As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

### VideoAbuseReportReasons

* `YoutubeVideoAbuseReportReasonsList` - Retrieves a list of resources, possibly filtered.

### VideoCategories

* `YoutubeVideoCategoriesList` - Retrieves a list of resources, possibly filtered.

### Videos

* `YoutubeVideosDelete` - Deletes a resource.
* `YoutubeVideosGetRating` - Retrieves the ratings that the authorized user gave to a list of specified videos.
* `YoutubeVideosInsert` - Inserts a new resource into this collection.
* `YoutubeVideosList` - Retrieves a list of resources, possibly filtered.
* `YoutubeVideosRate` - Adds a like or dislike rating to a video or removes a rating from a video.
* `YoutubeVideosReportAbuse` - Report abuse for a video.
* `YoutubeVideosUpdate` - Updates an existing resource.

### Watermarks

* `YoutubeWatermarksSet` - Allows upload of watermark image and setting it for a channel.
* `YoutubeWatermarksUnset` - Allows removal of channel watermark.

### Youtube

* `YoutubeYoutubeV3UpdateCommentThreads` - Updates an existing resource.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
