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

import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeAbuseReportsInsertResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AbuseReport;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.RelatedEntity;
import org.openapis.openapi.models.shared.AbuseType;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAbuseReportsInsertRequest req = new YoutubeAbuseReportsInsertRequest() {{
                dollarXgafv = "2";
                abuseReport = new AbuseReport() {{
                    abuseTypes = new org.openapis.openapi.models.shared.AbuseType[]{{
                        add(new AbuseType() {{
                            id = "distinctio";
                        }}),
                        add(new AbuseType() {{
                            id = "quibusdam";
                        }}),
                        add(new AbuseType() {{
                            id = "unde";
                        }}),
                    }};
                    description = "nulla";
                    relatedEntities = new org.openapis.openapi.models.shared.RelatedEntity[]{{
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "illum";
                                typeId = "vel";
                                url = "error";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "deserunt";
                                typeId = "suscipit";
                                url = "iure";
                            }};
                        }}),
                        add(new RelatedEntity() {{
                            entity = new Entity() {{
                                id = "magnam";
                                typeId = "debitis";
                                url = "ipsa";
                            }};
                        }}),
                    }};
                    subject = new Entity() {{
                        id = "delectus";
                        typeId = "tempora";
                        url = "suscipit";
                    }};
                }};
                accessToken = "molestiae";
                alt = "proto";
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                part = new String[]{{
                    add("recusandae"),
                    add("temporibus"),
                }};
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
            }}            

            YoutubeAbuseReportsInsertResponse res = sdk.abuseReports.youtubeAbuseReportsInsert(req, new YoutubeAbuseReportsInsertSecurity() {{
                option1 = new YoutubeAbuseReportsInsertSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.abuseReport.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
