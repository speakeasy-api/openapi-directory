# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            YoutubeAbuseReportsInsertRequest req = new YoutubeAbuseReportsInsertRequest() {{
                security = new YoutubeAbuseReportsInsertSecurity() {{
                    option1 = new YoutubeAbuseReportsInsertSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new YoutubeAbuseReportsInsertQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    part = new String[]() {{
                        add("fugit"),
                        add("et"),
                        add("nihil"),
                    }};
                    prettyPrint = true;
                    quotaUser = "dicta";
                    uploadType = "debitis";
                    uploadProtocol = "voluptatum";
                }};
                request = new AbuseReport() {{
                    abuseTypes = new openapisdk.models.shared.AbuseType[]() {{
                        add(new AbuseType() {{
                            id = "ut";
                        }}),
                    }};
                    description = "dolorem";
                    relatedEntities = new openapisdk.models.shared.RelatedEntity[]() {{
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "voluptate";
                                typeId = "iste";
                                url = "vitae";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "totam";
                                typeId = "dolores";
                                url = "illum";
                            }};
                        }}),
                    }};
                    subject = new Entity() {{
                        id = "debitis";
                        typeId = "vel";
                        url = "odio";
                    }};
                }};
            }};

            YoutubeAbuseReportsInsertResponse res = sdk.abuseReports.youtubeAbuseReportsInsert(req);

            if (res.abuseReport.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### abuseReports

* `youtubeAbuseReportsInsert` - Inserts a new resource into this collection.

### activities

* `youtubeActivitiesList` - Retrieves a list of resources, possibly filtered.

### captions

* `youtubeCaptionsDelete` - Deletes a resource.
* `youtubeCaptionsDownload` - Downloads a caption track.
* `youtubeCaptionsInsert` - Inserts a new resource into this collection.
* `youtubeCaptionsList` - Retrieves a list of resources, possibly filtered.
* `youtubeCaptionsUpdate` - Updates an existing resource.

### channelBanners

* `youtubeChannelBannersInsert` - Inserts a new resource into this collection.

### channelSections

* `youtubeChannelSectionsDelete` - Deletes a resource.
* `youtubeChannelSectionsInsert` - Inserts a new resource into this collection.
* `youtubeChannelSectionsList` - Retrieves a list of resources, possibly filtered.
* `youtubeChannelSectionsUpdate` - Updates an existing resource.

### channels

* `youtubeChannelsList` - Retrieves a list of resources, possibly filtered.
* `youtubeChannelsUpdate` - Updates an existing resource.

### commentThreads

* `youtubeCommentThreadsInsert` - Inserts a new resource into this collection.
* `youtubeCommentThreadsList` - Retrieves a list of resources, possibly filtered.

### comments

* `youtubeCommentsDelete` - Deletes a resource.
* `youtubeCommentsInsert` - Inserts a new resource into this collection.
* `youtubeCommentsList` - Retrieves a list of resources, possibly filtered.
* `youtubeCommentsMarkAsSpam` - Expresses the caller's opinion that one or more comments should be flagged as spam.
* `youtubeCommentsSetModerationStatus` - Sets the moderation status of one or more comments.
* `youtubeCommentsUpdate` - Updates an existing resource.

### i18nLanguages

* `youtubeI18nLanguagesList` - Retrieves a list of resources, possibly filtered.

### i18nRegions

* `youtubeI18nRegionsList` - Retrieves a list of resources, possibly filtered.

### liveBroadcasts

* `youtubeLiveBroadcastsBind` - Bind a broadcast to a stream.
* `youtubeLiveBroadcastsDelete` - Delete a given broadcast.
* `youtubeLiveBroadcastsInsert` - Inserts a new stream for the authenticated user.
* `youtubeLiveBroadcastsInsertCuepoint` - Insert cuepoints in a broadcast
* `youtubeLiveBroadcastsList` - Retrieve the list of broadcasts associated with the given channel.
* `youtubeLiveBroadcastsTransition` - Transition a broadcast to a given status.
* `youtubeLiveBroadcastsUpdate` - Updates an existing broadcast for the authenticated user.

### liveChatBans

* `youtubeLiveChatBansDelete` - Deletes a chat ban.
* `youtubeLiveChatBansInsert` - Inserts a new resource into this collection.

### liveChatMessages

* `youtubeLiveChatMessagesDelete` - Deletes a chat message.
* `youtubeLiveChatMessagesInsert` - Inserts a new resource into this collection.
* `youtubeLiveChatMessagesList` - Retrieves a list of resources, possibly filtered.

### liveChatModerators

* `youtubeLiveChatModeratorsDelete` - Deletes a chat moderator.
* `youtubeLiveChatModeratorsInsert` - Inserts a new resource into this collection.
* `youtubeLiveChatModeratorsList` - Retrieves a list of resources, possibly filtered.

### liveStreams

* `youtubeLiveStreamsDelete` - Deletes an existing stream for the authenticated user.
* `youtubeLiveStreamsInsert` - Inserts a new stream for the authenticated user.
* `youtubeLiveStreamsList` - Retrieve the list of streams associated with the given channel. --
* `youtubeLiveStreamsUpdate` - Updates an existing stream for the authenticated user.

### members

* `youtubeMembersList` - Retrieves a list of members that match the request criteria for a channel.

### membershipsLevels

* `youtubeMembershipsLevelsList` - Retrieves a list of all pricing levels offered by a creator to the fans.

### playlistItems

* `youtubePlaylistItemsDelete` - Deletes a resource.
* `youtubePlaylistItemsInsert` - Inserts a new resource into this collection.
* `youtubePlaylistItemsList` - Retrieves a list of resources, possibly filtered.
* `youtubePlaylistItemsUpdate` - Updates an existing resource.

### playlists

* `youtubePlaylistsDelete` - Deletes a resource.
* `youtubePlaylistsInsert` - Inserts a new resource into this collection.
* `youtubePlaylistsList` - Retrieves a list of resources, possibly filtered.
* `youtubePlaylistsUpdate` - Updates an existing resource.

### search

* `youtubeSearchList` - Retrieves a list of search resources

### subscriptions

* `youtubeSubscriptionsDelete` - Deletes a resource.
* `youtubeSubscriptionsInsert` - Inserts a new resource into this collection.
* `youtubeSubscriptionsList` - Retrieves a list of resources, possibly filtered.

### superChatEvents

* `youtubeSuperChatEventsList` - Retrieves a list of resources, possibly filtered.

### tests

* `youtubeTestsInsert` - POST method.

### thirdPartyLinks

* `youtubeThirdPartyLinksDelete` - Deletes a resource.
* `youtubeThirdPartyLinksInsert` - Inserts a new resource into this collection.
* `youtubeThirdPartyLinksList` - Retrieves a list of resources, possibly filtered.
* `youtubeThirdPartyLinksUpdate` - Updates an existing resource.

### thumbnails

* `youtubeThumbnailsSet` - As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

### videoAbuseReportReasons

* `youtubeVideoAbuseReportReasonsList` - Retrieves a list of resources, possibly filtered.

### videoCategories

* `youtubeVideoCategoriesList` - Retrieves a list of resources, possibly filtered.

### videos

* `youtubeVideosDelete` - Deletes a resource.
* `youtubeVideosGetRating` - Retrieves the ratings that the authorized user gave to a list of specified videos.
* `youtubeVideosInsert` - Inserts a new resource into this collection.
* `youtubeVideosList` - Retrieves a list of resources, possibly filtered.
* `youtubeVideosRate` - Adds a like or dislike rating to a video or removes a rating from a video.
* `youtubeVideosReportAbuse` - Report abuse for a video.
* `youtubeVideosUpdate` - Updates an existing resource.

### watermarks

* `youtubeWatermarksSet` - Allows upload of watermark image and setting it for a channel.
* `youtubeWatermarksUnset` - Allows removal of channel watermark.

### youtube

* `youtubeYoutubeV3UpdateCommentThreads` - Updates an existing resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
