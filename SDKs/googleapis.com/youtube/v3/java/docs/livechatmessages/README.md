# liveChatMessages

### Available Operations

* [youtubeLiveChatMessagesDelete](#youtubelivechatmessagesdelete) - Deletes a chat message.
* [youtubeLiveChatMessagesInsert](#youtubelivechatmessagesinsert) - Inserts a new resource into this collection.
* [youtubeLiveChatMessagesList](#youtubelivechatmessageslist) - Retrieves a list of resources, possibly filtered.

## youtubeLiveChatMessagesDelete

Deletes a chat message.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveChatMessagesDeleteRequest req = new YoutubeLiveChatMessagesDeleteRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "repudiandae";
                key = "rerum";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "vero";
                uploadProtocol = "similique";
            }};            

            YoutubeLiveChatMessagesDeleteResponse res = sdk.liveChatMessages.youtubeLiveChatMessagesDelete(req, new YoutubeLiveChatMessagesDeleteSecurity() {{
                option1 = new YoutubeLiveChatMessagesDeleteSecurityOption1("repellendus", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveChatMessagesInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesInsertRequest;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesInsertResponse;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelProfileDetails;
import org.openapis.openapi.models.shared.LiveChatFanFundingEventDetails;
import org.openapis.openapi.models.shared.LiveChatGiftMembershipReceivedDetails;
import org.openapis.openapi.models.shared.LiveChatMemberMilestoneChatDetails;
import org.openapis.openapi.models.shared.LiveChatMembershipGiftingDetails;
import org.openapis.openapi.models.shared.LiveChatMessage;
import org.openapis.openapi.models.shared.LiveChatMessageAuthorDetails;
import org.openapis.openapi.models.shared.LiveChatMessageDeletedDetails;
import org.openapis.openapi.models.shared.LiveChatMessageRetractedDetails;
import org.openapis.openapi.models.shared.LiveChatMessageSnippet;
import org.openapis.openapi.models.shared.LiveChatMessageSnippetTypeEnum;
import org.openapis.openapi.models.shared.LiveChatNewSponsorDetails;
import org.openapis.openapi.models.shared.LiveChatSuperChatDetails;
import org.openapis.openapi.models.shared.LiveChatSuperStickerDetails;
import org.openapis.openapi.models.shared.LiveChatTextMessageDetails;
import org.openapis.openapi.models.shared.LiveChatUserBannedMessageDetails;
import org.openapis.openapi.models.shared.LiveChatUserBannedMessageDetailsBanTypeEnum;
import org.openapis.openapi.models.shared.SuperStickerMetadata;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveChatMessagesInsertRequest req = new YoutubeLiveChatMessagesInsertRequest(                new String[]{{
                                add("commodi"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                liveChatMessage = new LiveChatMessage() {{
                    authorDetails = new LiveChatMessageAuthorDetails() {{
                        channelId = "commodi";
                        channelUrl = "aut";
                        displayName = "voluptatem";
                        isChatModerator = false;
                        isChatOwner = false;
                        isChatSponsor = false;
                        isVerified = false;
                        profileImageUrl = "ad";
                    }};;
                    etag = "quae";
                    id = "3d8bb311-80f7-439a-a9e0-57eb809e2810";
                    kind = "velit";
                    snippet = new LiveChatMessageSnippet() {{
                        authorChannelId = "dolor";
                        displayMessage = "sunt";
                        fanFundingEventDetails = new LiveChatFanFundingEventDetails() {{
                            amountDisplayString = "a";
                            amountMicros = "dolor";
                            currency = "occaecati";
                            userComment = "atque";
                        }};;
                        giftMembershipReceivedDetails = new LiveChatGiftMembershipReceivedDetails() {{
                            associatedMembershipGiftingMessageId = "beatae";
                            gifterChannelId = "at";
                            memberLevelName = "labore";
                        }};;
                        hasDisplayContent = false;
                        liveChatId = "minus";
                        memberMilestoneChatDetails = new LiveChatMemberMilestoneChatDetails() {{
                            memberLevelName = "esse";
                            memberMonth = 32356L;
                            userComment = "perferendis";
                        }};;
                        membershipGiftingDetails = new LiveChatMembershipGiftingDetails() {{
                            giftMembershipsCount = 698558;
                            giftMembershipsLevelName = "ea";
                        }};;
                        messageDeletedDetails = new LiveChatMessageDeletedDetails() {{
                            deletedMessageId = "aperiam";
                        }};;
                        messageRetractedDetails = new LiveChatMessageRetractedDetails() {{
                            retractedMessageId = "dignissimos";
                        }};;
                        newSponsorDetails = new LiveChatNewSponsorDetails() {{
                            isUpgrade = false;
                            memberLevelName = "repellat";
                        }};;
                        publishedAt = OffsetDateTime.parse("2022-03-20T19:09:29.668Z");
                        superChatDetails = new LiveChatSuperChatDetails() {{
                            amountDisplayString = "provident";
                            amountMicros = "consectetur";
                            currency = "eligendi";
                            tier = 490110L;
                            userComment = "consectetur";
                        }};;
                        superStickerDetails = new LiveChatSuperStickerDetails() {{
                            amountDisplayString = "soluta";
                            amountMicros = "natus";
                            currency = "temporibus";
                            superStickerMetadata = new SuperStickerMetadata() {{
                                altText = "officia";
                                altTextLanguage = "amet";
                                stickerId = "tenetur";
                            }};;
                            tier = 133949L;
                        }};;
                        textMessageDetails = new LiveChatTextMessageDetails() {{
                            messageText = "quo";
                        }};;
                        type = LiveChatMessageSnippetTypeEnum.SUPER_CHAT_EVENT;
                        userBannedDetails = new LiveChatUserBannedMessageDetails() {{
                            banDurationSeconds = "illum";
                            banType = LiveChatUserBannedMessageDetailsBanTypeEnum.TEMPORARY;
                            bannedUserDetails = new ChannelProfileDetails() {{
                                channelId = "dignissimos";
                                channelUrl = "vero";
                                displayName = "qui";
                                profileImageUrl = "consectetur";
                            }};;
                        }};;
                    }};;
                }};;
                accessToken = "repellat";
                alt = AltEnum.JSON;
                callback = "explicabo";
                fields = "exercitationem";
                key = "nihil";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "illo";
                uploadProtocol = "hic";
            }};            

            YoutubeLiveChatMessagesInsertResponse res = sdk.liveChatMessages.youtubeLiveChatMessagesInsert(req, new YoutubeLiveChatMessagesInsertSecurity() {{
                option1 = new YoutubeLiveChatMessagesInsertSecurityOption1("deserunt", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveChatMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeLiveChatMessagesList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesListRequest;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesListResponse;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesListSecurity;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeLiveChatMessagesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeLiveChatMessagesListRequest req = new YoutubeLiveChatMessagesListRequest("non",                 new String[]{{
                                add("in"),
                                add("exercitationem"),
                                add("labore"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "in";
                fields = "explicabo";
                hl = "accusamus";
                key = "rem";
                maxResults = 44016L;
                oauthToken = "odit";
                pageToken = "deleniti";
                prettyPrint = false;
                profileImageSize = 316730L;
                quotaUser = "voluptate";
                uploadType = "similique";
                uploadProtocol = "minima";
            }};            

            YoutubeLiveChatMessagesListResponse res = sdk.liveChatMessages.youtubeLiveChatMessagesList(req, new YoutubeLiveChatMessagesListSecurity() {{
                option1 = new YoutubeLiveChatMessagesListSecurityOption1("libero", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.liveChatMessageListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
